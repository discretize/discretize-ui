import clsx from 'clsx';
import { ReactElement, useEffect, useState } from 'react';
import useResizeAware from 'react-resize-aware';
import css from './TraitlLineConnector.module.css';

export const Paths: Record<string, PathsTypes> = {
  UP: 'up',
  MID: 'mid',
  DOWN: 'down',
};

export type PathsTypes = 'up' | 'mid' | 'down';

export interface TraitLineConnectorProps {
  start?: PathsTypes;
  end?: PathsTypes;
  disabled?: boolean;
  className?: string;
}

const TraitLineConnector = ({
  start,
  end,
  disabled,
  className,
}: TraitLineConnectorProps): ReactElement => {
  const [resizeListener, { width, height }] = useResizeAware();
  const [dimensions, setDimensions] = useState({});

  useEffect(() => {
    let startY;
    switch (start) {
      case Paths.UP:
        startY = height - 18.5;
        break;
      case Paths.MID:
        startY = height * 0.5;

        if (end === Paths.UP) {
          startY += 4;
        } else if (end === Paths.DOWN) {
          startY -= 4;
        }

        break;
      case Paths.DOWN:
        startY = 18.5;
        break;
      default:
        break;
    }

    let endY;
    switch (end) {
      case Paths.UP:
        endY = height - 18.5;
        break;
      case Paths.MID:
        endY = height * 0.5;

        if (start === Paths.UP) {
          endY += 4;
        } else if (start === Paths.DOWN) {
          endY -= 4;
        }

        break;
      case Paths.DOWN:
        endY = 18.5;
        break;
      default:
        break;
    }

    const length = Math.sqrt(width ** 2 + (startY - endY) ** 2);

    setDimensions({
      bottom: (startY + endY) / 2 - 8 / 2,
      left: width / 2 - length / 2,
      length,
      angle: Math.atan2(endY - startY, -width) * (180 / Math.PI),
    });
  }, [start, end, width, height]);

  if (!dimensions) {
    return null;
  }

  const { bottom, left, length, angle } = dimensions;

  const style = { width: length, transform: `rotate(${angle}deg)` };

  return (
    <div className={clsx(className, css.root)}>
      {resizeListener}

      <div style={style} className={css.wrapper}>
        <div className={!disabled && css.traitlineConnector} />
      </div>
    </div>
  );
};

export default TraitLineConnector;
