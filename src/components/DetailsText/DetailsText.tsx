import React, { ReactElement } from 'react';

const REGEX = new RegExp('<c=@([^>]+?>[^<>]+?)(?:</c>|$)', 'g');

const renderFlavor = (text: string) => {
  const parts = text.replace(/<br\s*?\/?\s*?>/g, '\n').split(REGEX);

  const returnParts = new Array(parts.length);
  for (let i = 1; i < parts.length; i += 2) {
    const [type, textPart] = parts[i].split('>');

    if (type) {
      let color;
      switch (type) {
        case 'ability':
          color = null;
          break;
        case 'abilitytype':
          color = 'abilityType';
          break;
        case 'reminder':
          color = 'muted';
          break;
        default:
          color = type;
          break;
      }

      returnParts[i] = [textPart, color];
    } else {
      returnParts[i] = textPart;
    }
  }

  return (
    <>
      {parts
        .filter((part) => !!part)
        .map((part, index) => {
          if (Array.isArray(part)) {
            const [textPart, color] = part;

            if (color) {
              // TODO check if the coloring is correct here
              return (
                <span
                  key={`flav${index.toString()}`}
                  style={{ color: `var(--gw2-color-details-${color})` }}
                >
                  {textPart}
                </span>
              );
            }
            return textPart;
          }

          return part;
        })}
    </>
  );
};

export interface DetailsProps {
  component?: string;
  lines: (ReactElement | string)[];
  lineComponent?: string;
  lineProps?: any;
}

const DetailsText = ({ lines, lineProps }: DetailsProps): ReactElement => {
  return (
    <div>
      {lines
        .filter((line) => !!line)
        .map((line, index) => (
          <div key={`DetailsText${index.toString()}`} {...lineProps}>
            {React.isValidElement(line) ? line : renderFlavor(line)}
          </div>
        ))}
    </div>
  );
};

export default DetailsText;
