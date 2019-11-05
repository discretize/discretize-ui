import React from 'react';
import {
  storiesOf,
  configure,
  addDecorator,
  addParameters,
} from '@storybook/react';
import { create } from '@storybook/theming';
import { Provider } from 'react-redux';
import { addReadme, configureReadme } from 'storybook-readme';
import { withKnobs } from '@storybook/addon-knobs';
import { Gw2ThemeProvider } from 'gw2-ui';
import styled from 'styled-components';

import 'typeface-menomonia';

import createStore from './createStore';
import categories from '../stories/categories';

const store = createStore();

addParameters({
  options: {
    theme: create({
      brandTitle: 'Guild Wars 2 UI',
      brandUrl: 'https://github.com/ManuelHaag/gw2-ui/',
    }),
    panelPosition: 'right',
    sortStoriesByKind: true,
  },
});

addDecorator(story => (
  <Provider store={store}>
    <Gw2ThemeProvider>{story()}</Gw2ThemeProvider>
  </Provider>
));

addDecorator(addReadme);

configureReadme({
  StoryPreview: styled.div`
    position: relative;
    box-sizing: border-box;
    margin: 16px 0px;
    padding: 48px 24px;
    border: 1px dashed rgb(229, 229, 229);
    background-color: rgb(255, 255, 255);
    text-align: center;
    color: #000;
    border-radius: 3px;
    font-size: 16px;
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  `,
  footer: 'ignored',
});

const requireContext = require.context('../stories', true, /\.stories.jsx$/);

const loadStories = async () => {
  const stories = Object.assign(
    ...Object.values(categories).map(category => {
      const story = storiesOf(category, module);
      story.addDecorator(withKnobs);

      return {
        [category]: story,
      };
    }),
  );

  requireContext
    .keys()
    .map(requireContext)
    .filter(
      ({ default: { category, name, story } = {} }) =>
        category && name && story,
    )
    .forEach(
      ({ default: { category, name, readme, docs, related, story } = {} }) => {
        stories[category].add(name, story, {
          readme: {
            ...(docs && { content: docs }),
            ...(readme && { sidebar: readme }),
            FooterPreview: related
              ? () => (
                  <div className="markdown-body" style={{ marginTop: 24 }}>
                    <hr />
                    <h3 id="related-components">Related components</h3>
                    <ul>
                      {related.map(
                        ({
                          category: componentCategory,
                          name: componentName,
                        }) => (
                          <li>
                            <a
                              href={`/?path=/story/${componentCategory
                                .match(
                                  /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
                                )
                                .map(x => x.toLowerCase())
                                .join('-')}--${componentName.toLowerCase()}`}
                            >
                              <code>{`<${componentName}/>`}</code>
                            </a>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                )
              : () => null,
          },
        });
      },
    );
};

configure(loadStories, module);
