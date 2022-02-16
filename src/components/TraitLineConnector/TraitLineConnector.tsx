import clsx from 'clsx';
import { ReactElement, useMemo, CSSProperties } from 'react';
import useResizeAware from 'react-resize-aware';
import css from './TraitlLineConnector.module.css';

type Direction = 'up' | 'mid' | 'down';
export const Paths: Direction[] = ['up', 'mid', 'down'];

export interface TraitLineConnectorProps {
  start?: Direction;
  end?: Direction;
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
  const style: CSSProperties | undefined = useMemo(() => {
    if (width === null || height === null) return;
    let startY;
    switch (start) {
      case 'up':
        startY = height - 18.5;
        break;
      case 'mid':
        startY = height * 0.5;

        if (end === 'up') {
          startY += 4;
        } else if (end === 'down') {
          startY -= 4;
        }

        break;
      case 'down':
        startY = 18.5;
        break;
      default:
        return;
    }

    let endY;
    switch (end) {
      case 'up':
        endY = height - 18.5;
        break;
      case 'mid':
        endY = height * 0.5;

        if (start === 'up') {
          endY += 4;
        } else if (start === 'down') {
          endY -= 4;
        }

        break;
      case 'down':
        endY = 18.5;
        break;
      default:
        return;
    }

    const length = Math.sqrt(width ** 2 + (startY - endY) ** 2);
    const angle = Math.atan2(endY - startY, -width) * (180 / Math.PI);

    return {
      bottom: (startY + endY) / 2 - 8 / 2 + 'px',
      left: width / 2 - length / 2 + 'px',
      width: length + 'px',
      transform: `rotate(${angle}deg)`,
    };
  }, [start, end, width, height]);

  return (
    <div className={clsx(className, css.root)}>
      {resizeListener}

      {style && !disabled ? (
        <div style={style} className={css.wrapper}>
          <div className={css.traitlineConnector} />
        </div>
      ) : null}
    </div>
  );
};

export default TraitLineConnector;
