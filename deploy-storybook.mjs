import ghpages from 'gh-pages';
import { access, constants } from 'node:fs/promises';
import path from 'node:path';

const workspace = path.basename(process.cwd());

const publish = (dir, options) =>
  new Promise((resolve) => ghpages.publish(dir, options, resolve));

async function deploy() {
  try {
    await access('storybook-static', constants.R_OK);
  } catch {
    console.error(
      `Please build the ${workspace} storybook before deploying it.`,
    );
    return;
  }

  await publish('../github-pages', {
    message: `Update index`,
    add: true,
    nojekyll: true,
  });
  console.log('Deployed github-pages folder contents!');

  await publish('storybook-static', {
    message: `Update ${workspace}`,
    dest: `${workspace}`,
    nojekyll: true,
  });
  console.log(`Deployed ${workspace} storybook!`);
}

deploy();
