const colors = {
  /** Background color */
  background: '#F7F9FA',
  /** Primary - Moonstone blue */
  primary: '#69A3CC',
  primary_50: '#F5F8FB',
  primary_100: '#D0E3EF',
  primary_200: '#69A3CC',
  primary_300: '#217BBB',
  primary_400: '#005C9E',
  primary_500: '#123A68',

  /** primary extended new class from 3.0.0  */
  primary_extended: '#69A3CC',
  primary_extended_50: '#F3F8FB',
  primary_extended_100: '#E3EFF6',
  primary_extended_200: '#CDE4F0',
  primary_extended_300: '#ABD2E5',
  primary_extended_400: '#69A3CC', // Moonstone
  primary_extended_500: '#458FC4',
  primary_extended_600: '#217BBB',
  primary_extended_700: '#1C649D',
  primary_extended_800: '#174F83',
  primary_extended_900: '#123A68',
  primary_extended_1000: '#062149',

  /** Secondary - Lime */
  secondary: '#CCF88E',
  secondary_50: '#F7FEE9',
  secondary_100: '#EDFBD0',
  secondary_200: '#E1FBBC',
  secondary_300: '#C1EF78',
  secondary_400: '#8CC942',
  secondary_500: '#6DA032',
  secondary_600: '#8CC942',
  secondary_700: '#619E12',
  secondary_800: '#4A7813',
  secondary_900: '#314D11',

  /** secondary - violet */
  secondary_violet_50: '#F9F5FF',
  secondary_violet_100: '#F1E8FF',
  secondary_violet_200: '#E6D5FF',
  secondary_violet_300: '#D3B4FE',
  secondary_violet_400: '#B884FC',
  secondary_violet_500: '#9547F7',
  secondary_violet_600: '#8632EB',
  secondary_violet_700: '#6221A8',
  secondary_violet_800: '#511C87',
  secondary_violet_900: '#350764',

  /** secondary - orange */
  secondary_orange_50: '#FEF9EC',
  secondary_orange_100: '#FCECC9',
  secondary_orange_200: '#F9D58E',
  secondary_orange_300: '#F5BB54',
  secondary_orange_400: '#F3A32E',
  secondary_orange_500: '#EC8114',
  secondary_orange_600: '#D15D0E',
  secondary_orange_700: '#AE400F',
  secondary_orange_800: '#742A13',
  secondary_orange_900: '#431305',

  /** secondary - azure */
  secondary_azure_50: '#f2f8fd',
  secondary_azure_100: '#e4effa',
  secondary_azure_200: '#c3def4',
  secondary_azure_300: '#8ec3eb',
  secondary_azure_400: '#429cdb',
  secondary_azure_500: '#2c89cb',
  secondary_azure_600: '#1d6cac',
  secondary_azure_700: '#18578c',
  secondary_azure_800: '#184a74',
  secondary_azure_900: '#193e61',

  /** Accent - Salmon */
  accent: '#F97F6F',
  accent_50: '#FBF8F7',
  accent_100: '#F6E9E7',
  accent_300: '#F05743',
  accent_400: '#DD3A25',
  accent_500: '#BA2D1B',

  /** secondary extended new class from 3.0.0 */
  secondary_extended: '#CCF88E',
  secondary_extended_50: '#F5FEE7',
  secondary_extended_100: '#EFFDD8',
  secondary_extended_200: '#E1FBBC',
  secondary_extended_300: '#CCF88E',
  secondary_extended_400: '#C1EF78',
  secondary_extended_500: '#9FE03B',
  secondary_extended_600: '#8CC942',
  secondary_extended_700: '#619E12',
  secondary_extended_800: '#4A7813',
  secondary_extended_900: '#314D11',

  /** GrayScale */
  grayscale_100: '#F6F7F9',
  grayscale_200: '#ECEFF2',
  grayscale_300: '#D5DBE2',
  grayscale_400: '#B0BBC9',
  grayscale_500: '#8696AA',
  grayscale_600: '#677990',
  grayscale_700: '#475467',
  grayscale_800: '#2E3642',
  grayscale_900: '#0C151D',

  /** grayscale extended new class from 3.0.0 */
  grayscale_text_white: '#FFFFFF',
  grayscale_extended_50: '#F6F7F9',
  grayscale_extended_100: '#ECEFF2',
  grayscale_extended_200: '#ECEFF2', // override with grayscale_200
  // grayscale_extended_200: '#D5DBE2',
  grayscale_extended_300: '#B0BBC9',
  grayscale_extended_400: '#8696AA',
  grayscale_extended_500: '#677990',
  grayscale_extended_600: '#526277',
  grayscale_extended_700: '#475467',
  grayscale_extended_800: '#2E3642',
  grayscale_extended_900: '#22272F',

  /** Alert */
  negative: '#EB3E28',
  positive: '#6BBE79',
  extended_error: '#DD3A25',

  negative_extended_100: '#FEE2E2',
  negative_extended_200: '#FECACA',
  negative_extended_300: '#FCA5A5',
  negative_extended_400: '#F87171',
  negative_extended_500: '#EB3E28',
  positive_extended_100: '#F3FAF4',
  positive_extended_200: '#E3F5E5',
  positive_extended_300: '#C8EACD',
  positive_extended_400: '#9DD8A6',
  positive_extended_500: '#6BBE79',
  warning_100: '#FFFCEB',
  warning_200: '#FEF5C7',
  warning_300: '#FEEA89',
  warning_400: '#FED946',
  warning_500: '#FCC723',
};

const commonLineHeight = {
  130: '130%',
};
const bodyCommonLineHeight = {
  140: '140%',
};

const fontWeight = {
  bold: {
    lineHeight: bodyCommonLineHeight,
    fontWeight: 700,
  },
  semibold: {
    lineHeight: bodyCommonLineHeight,
    fontWeight: 600,
  },
  medium: {
    lineHeight: bodyCommonLineHeight,
    fontWeight: 500,
  },
  regular: {
    lineHeight: bodyCommonLineHeight,
    fontWeight: 400,
  },
};

const headingFontWeight = {
  bold: {
    lineHeight: commonLineHeight,
    // letterSpacing:'-4px',
    fontWeight: 700,
  },
  semibold: {
    lineHeight: commonLineHeight,
    fontWeight: 600,
  },
  medium: {
    lineHeight: commonLineHeight,
    fontWeight: 500,
  },
  regular: {
    lineHeight: commonLineHeight,
    fontWeight: 400,
  },
};

const buttonDefault = {
  borderRadius: '4px',
  lineHeight: '100%',
  minHeight: '0px',
  fontWeight: 600,
};

const floattingBtnDefault = {
  borderRadius: '100%',
  lineHeight: '100%',
  minHeight: '0px',
  fontWeight: 600,
};

const btnSize = {
  '.btn.btn-large': {
    height: '44px',
    fontSize: '16px',
  },
  '.btn.btn-medium': {
    height: '40px',
    fontSize: '14px',
  },
  '.btn.btn-small': {
    height: '34px',
    fontSize: '14px',
  },
  '.btn.btn-large.btn-floating': {
    height: '44px',
    width: '44px',
  },
  '.btn.btn-medium.btn-floating': {
    height: '40px',
    width: '40px',
  },
  '.btn.btn-small.btn-floating': {
    height: '34px',
    width: '34px',
  },
};

const btnDefault = {
  '.btn.btn-primary': {
    ...buttonDefault,
    backgroundColor: '#217BBB',
    borderColor: 'transparent',
    color: '#FEFEFE',
  },
  '.btn.btn-primary-black': {
    ...buttonDefault,
    backgroundColor: '#22272F',
    borderColor: 'transparent',
    color: '#FEFEFE',
  },
  '.btn.btn-secondary': {
    ...buttonDefault,

    borderColor: '#217BBB',
    color: '#217BBB',
  },
  '.btn.btn-secondary-apricot': {
    ...buttonDefault,
    backgroundColor: '#EB896A',
    borderColor: 'transparent',
    color: '#FEFEFE',
  },
  '.btn.btn-secondary-white': {
    ...buttonDefault,
    backgroundColor: 'transparent',
    borderColor: '#ffffff',
    color: '#FEFEFE',
  },
  '.btn.btn-secondary-black': {
    ...buttonDefault,
    backgroundColor: 'transparent',
    borderColor: '#B0BBC9',
    color: '!#677990',
  },
  '.btn.btn-tertiary': {
    ...buttonDefault,
    backgroundColor: 'transparent',

    color: '#677990',

    border: 'none',
    padding: '0 8px',
    boxShadow: 'none',
  },
  '.btn.btn-tertiary-primary': {
    ...buttonDefault,
    backgroundColor: 'transparent',
    color: '#217BBB',
    border: 'none',
    padding: '0 8px',
  },
  '.btn.btn-tertiary-black': {
    ...buttonDefault,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: '#FEFEFE',
    border: 'none',
  },
  '.btn.btn-destructive': {
    ...buttonDefault,
    backgroundColor: '#e75252',
    color: '#FEFEFE',
    border: 'none',
  },
  '.btn.btn-destructive-border': {
    ...buttonDefault,
    color: '#e75252',
    border: '1px solid #e75252',
  },
  '.btn.btn-positive': {
    ...buttonDefault,
    backgroundColor: '#6bbe79',
    color: '#FEFEFE',
    border: 'none',
  },
  '.btn.btn-floating': {
    ...floattingBtnDefault,
    backgroundColor: '#EB896A',
    borderRadius: '100%',
    border: 'none',
  },
};

const btnHover = {
  '.btn.btn-tertiary:hover': {
    backgroundColor: '#F8F8F8',
  },
  '.btn.btn-tertiary-black:hover': {
    ...buttonDefault,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  '.btn.btn-primary:hover': {
    backgroundColor: '#4F87B8',
    borderColor: 'transparent',
  },
  '.btn.btn-primary-black:hover': {
    backgroundColor: '#2E3642',
    borderColor: 'transparent',
  },
  '.btn.btn-secondary:hover': {
    backgroundColor: 'rgba(105, 163, 204, 0.08)',
    color: '#217BBB',
    borderColor: '#217BBB',
    border: '1px solid',
  },
  '.btn.btn-secondary-white:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
  '.btn.btn-secondary-black:hover': {
    backgroundColor: 'rgba(176, 187, 201, 0.08)',
  },
  '.btn.btn-destructive:hover': {
    backgroundColor: '#D73B3B',
  },
  'btn.btn-destructive-border:active': {
    backgroundColor: '#D73B3B',
  },
  '.btn.btn-floating:hover': {
    backgroundColor: '#E8704B',
  },
};

const btnDisabled = {
  '.btn.btn-primary:disabled': {
    backgroundColor: '#D5DBE2',
    borderColor: 'transparent',
    color: '#B0BBC9',
  },
  '.btn.btn-primary-black:disabled': {
    backgroundColor: '#9DA0A4',
    borderColor: 'transparent',
  },
  '.btn.btn-secondary:disabled': {
    backgroundColor: 'rgba(157, 160, 164, 0.16)',
    borderColor: '#9DA0A4',
    color: '#9DA0A4',
  },
  '.btn.btn-secondary-white:disabled': {
    backgroundColor: 'transparent',
    borderColor: '#9DA0A4',
    color: '#9DA0A4',
  },
  '.btn.btn-secondary-black:disabled': {
    borderColor: '#BOBBC9',
    color: '#B0BBC9',
  },
  '.btn.btn-tertiary:disabled': {
    opacity: '40%',
  },
  '.btn.btn-tertiary-primary:disabled': {
    opacity: '40%',
  },
  '.btn.btn-destructive:disabled': {
    backgroundColor: '#C3C6C9',
  },
  '.btn.btn-floating:disabled': {
    backgroundColor: '#C3C6C9',
  },
};

const btnActive = {
  '.btn.btn-primary:active': {
    backgroundColor: '#314A71',
    borderColor: 'transparent',
  },
  '.btn.btn-secondary:active': {
    backgroundColor: 'rgba(105, 163, 204, 0.16)',
  },
  '.btn.btn-secondary-white:active': {
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
  },
  '.btn.btn-secondary-black:active': {
    backgroundColor: 'rgba(176, 187, 201, 0.16)',
  },
  '.btn.btn-tertiary:active': {
    backgroundColor: '#ECECEC',
  },
  '.btn.btn-tertiary-black:active': {
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
  },
  'btn.btn-destructive:active': {
    backgroundColor: '#B92222',
  },
  'btn.btn-destructive-border:active': {
    backgroundColor: '#B92222',
  },
};

const btnStyles = {
  '.btn': {
    'text-transform': 'inherit',
    'box-shadow': 'none',
    padding: '0 16px',
  },
  ...btnDefault,
  ...btnSize,
  ...btnHover,
  ...btnDisabled,
  ...btnActive,
};

const chipStyles = {
  '.chip': {
    borderRadius: '30px',
    display: 'inline-block',
    padding: '8px 16px',
    color: '#526277',
    backgroundColor: '#FCFCFC',
    border: '1px solid #ECEFF2',
    // color: '#767B80',
    // backgroundColor: '#FCFCFC',
    // border: '1px solid #E5E5E5',
    fontSize: '12px',
    ...fontWeight.semibold,
  },
  '.chip:hover': {
    // backgroundColor: 'rgba(105, 163, 204, 0.08)',
    // color: '#69A3CC',
    // border: '1px solid #69A3CC',
    backgroundColor: '#F3F8FB',
    color: '#217BBB',
    border: '1px solid #217BBB',
  },
  '.chip:active': {
    // color: '#217BBB',
    // backgroundColor: 'rgba(105, 163, 204, 0.16)',
    // border: '1px solid #217BBB',
    backgroundColor: '#F3F8FB',
    color: '#217BBB',
    border: '1px solid #217BBB',
  },
  '.chip.active': {
    borderRadius: '30px',
    display: 'inline-block',
    padding: '8px 16px',
    // color: '#217BBB',
    // backgroundColor: 'rgba(105, 163, 204, 0.16)',
    // border: '1px solid #217BBB',
    backgroundColor: '#F3F8FB',
    color: '#217BBB',
    border: '1px solid #217BBB',
  },
  '.chip-nothovered': {
    borderRadius: '30px',
    display: 'inline-block',
    padding: '8px 16px',
    // color: '#767B80',
    // backgroundColor: '#FCFCFC',
    // border: '1px solid #F1F1F1',
    color: '#526277',
    backgroundColor: '#F6F7F9',
    border: '1px solid #ECEFF2',
    fontSize: '12px',
    cursor: 'text',
    ...fontWeight.semibold,
  },
};

const inputStyles = {
  '.input_color': {
    minHeight: 0,
    height: '20px',
  },
  '.input_select': {
    minHeight: '44px',
    height: '44px',
    backgroundColor: '#FEFEFE',
    border: '1px solid #9DA0A4',
  },
  '.input_select:hover': {
    border: '1px solid #22272F',
  },
  '.input': {
    minHeight: '44px',
    height: '44px',
    backgroundColor: '#FEFEFE',
    border: '1px solid #D5DBE2',
    padding: '10px 16px',
    borderRadius: '4px',
  },
  '.input:hover': {
    border: '1px solid #22272F',
  },
  '.input:focus': {
    border: '1px solid #22272F',
  },
  'input::placeholder': {
    color: '#677990',
  },
  'textarea::placeholder': {
    color: '#677990',
  },
  '.input[disabled]': {
    backgroundColor: '#ECEFF2',
    border: '1px solid #D5DBE2',
    color: '#B0BBC9',
  },
  '.input.negative': {
    backgroundColor: '#ffffff',
    border: '1px solid #E75252',
  },
  '.textarea': {
    minHeight: '44px',
    backgroundColor: '#ffffff',
    border: '1px solid #E5E5E5',
    padding: '8px 16px',
    resize: 'none',
    fontSize: '16px',
    borderRadius: 4,
  },
  '.textarea:hover': {
    border: '1px solid #22272F',
  },
  '.textarea:focus': {
    backgroundColor: '#ffffff',
    border: '1px solid #22272F',
  },
  'textarea[disabled]': {
    backgroundColor: '#ECECEC',
    border: '1px solid #9DA0A4',
    color: '#9dA0A4',
  },
  '.textarea.negative': {
    backgroundColor: '#ffffff',
    border: '1px solid #E75252',
  },
};

const calenderStyles = {
  '.calender': {
    position: 'relative',
    top: '15%',
    left: '0',
  },
};

const tootipStyles = {
  '.tooltip': {
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
  },
  '.tooltip .tooltiptext': {
    visibility: 'hidden',
    minWidth: '150px',
    maxWidth: '500px',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '4px',
    padding: '4px 16px',
    position: 'absolute',
    zIndex: 1,
    top: '140%',
    left: '50%',
    transform: 'translateX(-50%)',
    opacity: 0,
    transition: 'opacity 0.2s',
    textAlign: 'center',
  },
  '.tooltip .tooltiptext.tooltipright': {
    visibility: 'hidden',
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'left',
    borderRadius: '4px',
    padding: '4px 16px',
    position: 'absolute',
    zIndex: 1,
    top: '50%',
    right: '0%',
    transform: 'translateX(20px) translateY(-50%)',
    opacity: 0,
    transition: 'opacity 0.2s',
  },
  '.tooltip .tooltiptext.tooltipleft': {
    visibility: 'hidden',
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'right',
    borderRadius: '4px',
    padding: '4px 16px',
    position: 'absolute',
    zIndex: 1,
    top: '170%',
    right: '0%',
    transform: 'translateX(-235px) translateY(-50%)',
    opacity: 0,
    transition: 'opacity 0.2s',
  },

  '.tooltip .tooltiptext.tooltiptop': {
    visibility: 'hidden',
    minWidth: '200px',
    maxWith: '500px',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '4px',
    padding: '4px 16px',
    position: 'absolute',
    zIndex: 1,
    top: '-140%',
    left: '50%',
    transform: 'translateX(-50%)',
    opacity: 0,
    transition: 'opacity 0.2s',
    textAlign: 'left',
  },
  '.tooltip .tooltiptext::before': {
    content: '""',
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    marginLeft: '-5px',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: 'transparent transparent #000 transparent',
    zIndex: 10,
  },
  '.tooltip .tooltiptext.tooltipright::before': {
    zIndex: 10,
    content: '""',
    position: 'absolute',
    top: '33%',
    left: '-8px',
    marginLeft: '0',
    transform: 'rotate(270deg) ',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: 'transparent transparent #000 transparent',
  },

  '.tooltip .tooltiptext.tooltipleft::before': {
    zIndex: 10,
    content: '""',
    position: 'absolute',
    top: '33%',
    left: '-10px',
    marginLeft: '220px',
    transform: 'rotate(90deg) ',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: 'transparent transparent #000 transparent',
  },
  '.tooltip .tooltiptext.tooltiptop::before': {
    content: '""',
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'rotate(180deg) ',
    marginLeft: '-5px',
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: 'transparent transparent #000 transparent',
    zIndex: 10,
  },
  '.tooltip:hover .tooltiptext': {
    visibility: 'visible',
    opacity: 1,
    zIndex: 10,
  },
};

const tooltip2Stypes = {
  '.tooltip2-container': {
    position: 'relative',
    cursor: 'pointer',
  },

  '.tooltip2-container .tooltip2': {
    position: 'absolute',
    right: 0, // tooltip2-top, tooltip-bottom, tooltip-left, tooltip-right의 문구때문에 여백이 생겨 오버스크롤발생을 방지
    minWidth: 'fit-content',
    padding: '4px 16px',
    backgroundColor: '#2E3642',
    color: '#fff',
    textAlign: 'left',
    borderRadius: '4px',
    visibility: 'hidden',
    opacity: 1,
    transition: 'opacity 0.3s',
    display: 'inline-block',
  },

  /* Tooltip2 above */
  '.tooltip2-container:hover .tooltip2.tooltip2-top': {
    visibility: 'visible',
    opacity: 1,
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginBottom: '4px',
  },

  /* Tooltip2 below */
  '.tooltip2-container:hover .tooltip2.tooltip2-bottom': {
    visibility: 'visible',
    opacity: 1,
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '4px',
  },

  /* Tooltip2 left */
  '.tooltip2-container:hover .tooltip2.tooltip2-left': {
    visibility: 'visible',
    opacity: 1,
    top: '50%',
    right: '100%',
    transform: 'translateY(-50%)',
    marginRight: '4px',
  },

  /* Tooltip2 right */
  '.tooltip2-container:hover .tooltip2.tooltip2-right': {
    visibility: 'visible',
    opacity: 1,
    top: '50%',
    left: '100%',
    transform: 'translateY(-50%)',
    marginLeft: '4px',
  },
};

const radioStyles = {
  '.checkbox': {
    background: "url('/icons/checkbox.svg') no-repeat",
    border: 'none',
    height: '17px',
    width: '16px',
    borderRadius: '0px',
  },
  '.checkbox:checked': {
    background: "url('/icons/checkbox-active.svg') no-repeat",
    border: 'none',
    height: '17px',
    width: '16px',
    borderRadius: '0px',
  },
  '.checkbox:disabled': {
    background: "url('/icons/checkbox.svg') no-repeat",
    border: 'none',
    height: '17px',
    width: '16px',
    borderRadius: '0px',
    opacity: 100,
  },
  '.checkbox:checked:disabled': {
    background: "url('/icons/checkbox-inactive.svg') no-repeat",
    border: 'none',
    height: '17px',
    width: '16px',
    borderRadius: '0px',
  },

  '.radio': {
    background: "url('/icons/radio.svg') no-repeat",
    border: 'none',
    boxShadow: 'none !important',
  },
  '.radio:checked': {
    background: "url('/icons/radio-active.svg') no-repeat",
  },
  '.radio:checked:disabled': {
    background: "url('/icons/radio-inactive.svg') no-repeat",
  },
  '.radio:disabled': {
    opacity: '1.0 !important',
    background: "url('/icons/radio-disabled.svg') no-repeat",
  },
};

const toggleStyles = {
  '.toggle': {
    position: 'relative',
    cursor: 'pointer',
    borderColor: 'inherit',
    width: '44px',
    height: '24px',
    border: '0',
  },
  '.toggle .toggle-container': {
    width: '100%',
    height: '100%',
    borderRadius: '30px',
    backgroundColor: '#B0BBC9',
  },
  '.toggle .toggle-container.toggle--checked': {
    backgroundColor: '#6BBE79',
  },

  '.toggle .toggle-container.toggle--disabled': {
    backgroundColor: '#B0BBC9',
  },

  '.toggle .toggle-circle': {
    position: 'absolute',
    top: '4px',
    left: '4px',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: '#fafafa',
  },
  '.toggle .toggle-circle.toggle--checked': {
    left: '23px',
  },
};

const otherStyles = {
  /** arrow image */
  '.selectable img': {
    transition: 'transform 0.3s ease-in-out',
  },
  '.selectable:hover img': {
    transform: 'rotate(270deg)',
    transition: 'transform 0.3s ease-in-out',
  },
  '.addcard:hover svg rect': {
    fill: '#E8704B',
  },
  '.collapse': {
    borderRadius: '4px',
  },

  '.collapse-title': {
    padding: 0,
  },
  '.collapse-content': {
    padding: 0,
  },
  '.collapse-plus > .collapse-title:after': {
    top: '1.5rem',
  },
  '.icon': {
    cursor: 'pointer',
    height: '24px',
    width: '24px',
    padding: '2px',
    borderRadius: '4px',
    backgroundColor: '#67990',
  },
  '.icon:hover': {
    backgroundColor: 'rgba(86, 91, 97, 0.08)',
  },
  '.icon:active': {
    backgroundColor: 'rgba(86, 91, 97, 0.16)',
  },
  '.icon.icon-small': {
    height: '20px',
    width: '20px',
  },
  '.icon.icon-large': {
    height: '28px',
    width: '28px',
  },
};

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme]=primary'],
          ...btnStyles,
          ...chipStyles,
          ...inputStyles,
          ...tootipStyles,
          ...tooltip2Stypes,
          ...toggleStyles,
          ...radioStyles,
          ...calenderStyles,
          ...otherStyles,
        },
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme]=primary'],
          '.btn-primary': {
            backgroundColor: '#000000',
            borderColor: 'transparent',
          },
          '.btn-secondary': {
            backgroundColor: 'transparent',
            borderColor: '#000000',
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite',
      },
      fontFamily: {
        Int: ['var(--font-inter)'],
        // mont: ['var(--font-mont)'],
      },
      backgroundImage: {
        // *************************** 예시
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        'graph-gradient':
          'linear-gradient(180deg, rgba(204, 248, 142, 0.31) 1.59%, rgba(154, 237, 37, 0.40) 54.06%, rgba(118, 202, 0, 0.60) 100%)',
      },
      backgroundColor: colors,
      dropShadow: {
        // *************************** 예시
        lg: '15px 15px 15px rgba(0, 0, 0, 0.1)',
      },
      colors,
      fontSize: {
        h1: ['48px', headingFontWeight.bold],
        h2_bold: ['32px', headingFontWeight.bold],
        h2_semibold: ['32px', headingFontWeight.semibold],
        h3_bold: ['24px', headingFontWeight.bold],
        h3_medium: ['24px', headingFontWeight.medium],
        h4_bold: ['18px', headingFontWeight.bold],
        bodyL_medium: ['18px', fontWeight.medium],
        bodyS_regular: ['16px', fontWeight.regular],
        bodyS_medium: ['16px', fontWeight.medium],
        bodyS_semibold: ['16px', fontWeight.semibold],
        bodyS_bold: ['16px', fontWeight.bold],
        buttonL_semibold: ['16px', fontWeight.semibold],
        buttonS_semibold: ['14px', fontWeight.semibold],
        label_regular: ['14px', fontWeight.regular],
        label_medium: ['14px', fontWeight.medium],
        label_semibold: ['14px', fontWeight.semibold],
        label_bold: ['14px', fontWeight.bold],
        caption_semibold: ['12px', fontWeight.semibold],
        caption_medium: ['12px', fontWeight.medium],
        caption_regular: ['12px', fontWeight.regular],
        caption_bold: ['12px', fontWeight.bold],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-24deg)' },
          '50%': { transform: 'rotate(24deg)' },
        },
      },
      scrollbarHide: {
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
