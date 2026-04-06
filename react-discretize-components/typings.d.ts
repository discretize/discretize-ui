declare module '*.module.css';

declare const process: {
  readonly env: {
    readonly NODE_ENV: 'development' | 'production';
  };
};
