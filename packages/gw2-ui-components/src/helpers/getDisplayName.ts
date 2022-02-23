export default (Component) =>
  (Component && (Component.displayName || Component.name)) || 'Component'
