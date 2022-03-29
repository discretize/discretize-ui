import * as fs from 'fs';

import {
  API_LANGUAGES,
  fetch_api,
  initPrettier,
  compare_strings,
} from './node_api_helpers.mjs';

const ENDPOINTS = [
  ['/v2/skills', true],
  ['/v2/specializations', true],
  ['/v2/traits', true],
  ['/v2/items', true],
  ['/v2/professions', false],
  ['/v2/races', false],
];

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function run() {
  await initPrettier();

  let fetched = 0;
  for (let [endpoint, fetch_ids] of ENDPOINTS) {
    let ids = ['all'];
    if (fetch_ids) {
      console.log('Fetching ids for', endpoint);
      ids = await fetch_api(endpoint);
    }
    for (let lang of API_LANGUAGES) {
      let filename = `gw2apicache/${endpoint
        .replaceAll('/', '_')
        .toLowerCase()}_${lang}.json`;

      if (fs.existsSync(filename)) {
        console.log(filename, 'exists, skipping');
        continue;
      }

      console.log('\t', lang);
      let remaining = [...ids];
      let all = [];

      while (remaining.length > 0) {
        let fetch_ids = remaining.splice(0, 200);
        let arr = await fetch_api(
          `${endpoint}?lang=${lang}&ids=${fetch_ids.join(',')}`,
        );
        all = all.concat(arr);
        fetched++;
        if (fetched >= 500) {
          console.log(
            'Waiting a minute to prevent getting rate-limited by the API',
          );
          await sleep(60 * 1000);
          fetched = 0;
        }
      }

      all.sort((a, b) => compare_strings(a.id, b.id));

      fs.writeFileSync(filename, JSON.stringify(all, undefined, '\t'));
    }
  }

  console.log('All files generated');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
