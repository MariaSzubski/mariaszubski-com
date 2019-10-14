export const colors = {
  white:    '#E6E8EE',
  gray300:  '#EDEFF6',
  gray500:  'rgba(255,255,255,.7)',
  gray700:  '#2B2E3C',
  black:    '#121D28',

  yellow:   '#FEC52E',
  green:    '#009978', // #008F70, saturate( darken( #06A281, 5% ), 50% )
  green300: '#19BA8A',
  green700: '#005240',
  blue:     '#004876',
  blue300:  '#0C8FE2',
  blue700:  '#003C62',
  blue900:  '#000A10',
  grape:    '#272580',
  grape300: '#6B69DF',
  grape700: '#22216E',
  plum:     '#602651',
  plum300:  '#A24088',
  plum700:  '#4E1D42',
  pink:     '#F3695A',
}

export const fonts = {
  nunito: "Nunito, 'Century Gothic', 'Lucida Grande', sans-serif",
  milkshake: "Milkshake, 'Bookman Old Style', 'Century Gothic', serif",
  hack: "Hack, Courier, monospace",
}

export const bp = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
}

export const screen = {
  min: {
    xs: `(min-width: ${bp.xs}px)`,
    sm: `(min-width: ${bp.sm}px)`,
    md: `(min-width: ${bp.md}px)`,
    lg: `(min-width: ${bp.lg}px)`,
    xl: `(min-width: ${bp.xl}px)`,
  },
  max: {
    xs: `(max-width: ${bp.xs - 1}px)`,
    sm: `(max-width: ${bp.sm - 1}px)`,
    md: `(max-width: ${bp.md - 1}px)`,
    lg: `(max-width: ${bp.lg - 1}px)`,
    xl: `(max-width: ${bp.xl - 1}px)`,
  },
}
