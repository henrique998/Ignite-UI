import { createStitches, defaultThemeMap } from '@stitches/react'

import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@henrique999-ignite-ui/tokens'

export const {
  styled,
  theme,
  css,
  getCssText,
  createTheme,
  keyframes,
  globalCss,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
