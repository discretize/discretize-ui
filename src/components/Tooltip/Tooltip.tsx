import Tippy from '@tippyjs/react/headless';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { followCursor } from 'tippy.js/headless';
import TooltipContainer from '../TooltipContainer/TooltipContainer';
import css from './Tooltip.module.css';

export type TooltipProps = {
  content?: ReactNode;
  render?: ReactNode | (() => ReactNode);
  containerProps?: any;
  wrapperProps?: any;
  disabled?: boolean;
  children?: ReactElement;
};

const Tooltip = ({
  children,
  content: propsContent,
  render,
  containerProps,
  wrapperProps,
  disabled,
}: TooltipProps): ReactElement => {
  const [mounted, setMounted] = useState(false);
  const [appendTo, setAppendTo] = useState<HTMLElement | undefined>(undefined);

  const lazyPlugin = {
    fn: () => ({
      onShow: () => setMounted(true),
      onHidden: () => setMounted(false),
    }),
  };

  // append to iframe body - compatability with netlify-cms
  useEffect(() => {
    if (typeof document !== `undefined`) {
      setAppendTo(
        document?.querySelector('#nc-root iframe')?.ownerDocument.body,
      );
    }
  }, []);

  return (
    <Tippy
      disabled={disabled}
      // visible
      ignoreAttributes
      {...(appendTo && { appendTo })}
      followCursor
      plugins={[lazyPlugin, followCursor]}
      render={(attrs) => {
        if (!mounted) {
          return null;
        }

        let content = null;

        if (propsContent) {
          content = (
            <TooltipContainer {...containerProps}>
              {propsContent}
            </TooltipContainer>
          );
        } else if (typeof render === 'function') {
          content = render();
        } else if (render != null) {
          content = render;
        }

        return (
          <div className={css.root} tabIndex={-1} {...wrapperProps} {...attrs}>
            {content}
          </div>
        );
      }}
    >
      {children}
    </Tippy>
  );
};

export default Tooltip;
