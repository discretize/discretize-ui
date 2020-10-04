import { useThemeUI } from '@theme-ui/core'

export default () => {
  const { colorMode } = useThemeUI()

  return colorMode === 'dark' ? 'Light' : 'Dark'
}
