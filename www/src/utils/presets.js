import colors from "./colors"

module.exports = {
  colors: colors,
  mobile: `(min-width: 400px)`,
  Mobile: `@media (min-width: 400px)`,
  phablet: `(min-width: 550px)`,
  Phablet: `@media (min-width: 550px)`,
  tablet: `(min-width: 750px)`,
  Tablet: `@media (min-width: 750px)`,
  desktop: `(min-width: 1000px)`,
  Desktop: `@media (min-width: 1000px)`,
  hd: `(min-width: 1200px)`,
  Hd: `@media (min-width: 1200px)`,
  VHd: `@media (min-width: 1450px)`,
  VVHd: `@media (min-width: 1650px)`,
  maxWidth: 35,
  maxWidthWithSidebar: 26,
  radius: 2,
  radiusLg: 4,
  gutters: {
    default: 1.25,
    HdR: 2.5,
    VHdR: 3,
    VVHdR: 4.5,
  },
  shadowKeyUmbraOpacity: 0.1,
  shadowKeyPenumbraOpacity: 0.07,
  shadowAmbientShadowOpacity: 0.06,
  animation: {
    curveDefault: `cubic-bezier(0.4, 0, 0.2, 1)`,
    speedDefault: `250ms`,
    speedFast: `100ms`,
  },
  logoOffset: 1.8,
  headerHeight: `3.5rem`,
  bannerHeight: `2.55rem`,
}
