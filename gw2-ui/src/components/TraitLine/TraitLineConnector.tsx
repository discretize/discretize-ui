import clsx from 'clsx';
import { ReactElement, useRef, useEffect } from 'react';
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
  start = 'mid',
  end = 'mid',
  disabled,
  className,
}: TraitLineConnectorProps): ReactElement => {
  const ref_container = useRef<HTMLDivElement>(null);
  const ref_line = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref_container.current) return;
    const redraw = () => {
      if (!ref_container.current || !ref_line.current) return;

      const { width, height } = ref_container.current.getBoundingClientRect();
      let startY: number;
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

      let endY: number;
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

      const { style } = ref_line.current;
      style.bottom = (startY + endY) / 2 - 8 / 2 + 'px';
      style.left = width / 2 - length / 2 + 'px';
      style.width = length + 'px';
      style.transform = `rotate(${angle}deg)`;
    };

    const obs = new ResizeObserver(redraw);
    obs.observe(ref_container.current);
    return () => {
      obs.disconnect();
    };
  }, [start, end, disabled]);

  return (
    <div className={clsx(className, css.root)} ref={ref_container}>
      <div
        style={{ visibility: disabled ? 'hidden' : 'visible' }}
        className={css.wrapper}
        ref={ref_line}
      >
        <div className={css.traitlineConnector} />
      </div>
    </div>
  );
};

export default TraitLineConnector;
