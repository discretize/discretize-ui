import React, { type ReactElement, type ReactNode } from 'react';
import { capitalize } from '../../helpers/capitalize';
import css from './DetailsText.module.css';

const REGEX = new RegExp('<c=@([^>]+?>[^<>]+?)(?:</c>|$)', 'g');

export const renderFlavor = (text: string) => {
  const parts: (string | string[])[] = text
    .replace(/<br\s*?\/?\s*?>/g, '\n')
    .split(REGEX);

  for (let i = 1; i < parts.length; i += 2) {
    const [type, textPart] = (parts[i] as string).split('>');
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

      parts[i] = [textPart, color || ''];
    } else {
      parts[i] = textPart;
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
              if (!css[`color${capitalize(color)}`]) {
                console.error(`Missing color type: ${color}`);
              }
              return (
                <span
                  className={css[`color${capitalize(color)}`]}
                  key={`flavour-${textPart}-${index.toString()}`}
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
  lines: (ReactNode | undefined | string)[];
  lineComponent?: string;
  lineProps?: any;
  className?: string;
}

const DetailsText = ({
  lines,
  lineProps,
  className,
}: DetailsProps): ReactElement => {
  return (
    <div className={className}>
      {lines
        .filter((line) => !!line)
        .map((line, index) => (
          <div key={`DetailsText${index.toString()}`} {...lineProps}>
            {React.isValidElement(line) ? line : renderFlavor(line as string)}
          </div>
        ))}
    </div>
  );
};

export default DetailsText;
