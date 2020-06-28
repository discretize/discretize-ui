import React, { Fragment } from 'react';

// "Gain a boon upon casting a <c=@abilitytype>glyph</c> based on your attunement. <c=@abilitytype>Glyphs</c> gain reduced recharge."

const REGEX = new RegExp('<c=@([^>]+?>[^<>]+?)(?:</c>|$)', 'g');

export default (input, classMap = {}) => {
  if (!input) {
    return input;
  }

  const parts = input.replace(/<br\s*?\/?\s*?>/g, '\n').split(REGEX);

  for (let i = 1; i < parts.length; i += 2) {
    const [key, text] = parts[i].split('>');

    const { [key]: className } = classMap;

    if (className) {
      parts[i] = (
        <span key={i} className={className}>
          {text}
        </span>
      );
    } else {
      if (className === undefined) {
        // eslint-disable-next-line no-console
        console.warn('Unknown c-type', { key, text });
      }
      parts[i] = text;
    }
  }

  return <Fragment>{parts.filter(line => !!line)}</Fragment>;
};
