import React, {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import Tippy from '@tippyjs/react/headless';
import { followCursor } from 'tippy.js/headless';
import css from './Tooltip.module.css';
import TooltipContainer from '../TooltipContainer/TooltipContainer';

export type TooltipProps = PropsWithChildren<{
  content: ReactNode;
  render?: ReactNode | (() => ReactNode);
  containerProps?: any;
  wrapperProps?: any;
}>;

const Tooltip = ({
  children,
  content: propsContent,
  render,
  containerProps,
  wrapperProps,
}: TooltipProps): ReactElement => {
  const [mounted, setMounted] = useState(false);
  const [appendTo, setAppendTo] = useState(undefined);

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
        document?.querySelector('#nc-root iframe')?.contentDocument.body,
      );
    }
  }, []);

  return (
    <Tippy
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
      <div>{children}</div>
    </Tippy>
  );
};

export default Tooltip;
