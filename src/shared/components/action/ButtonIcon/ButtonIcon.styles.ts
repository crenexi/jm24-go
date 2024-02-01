import { SxProps, Theme } from '@mui/material/styles';
import { svar } from '@helpers/helpers';

type SxVariant = SxProps<Theme>;

const coPrimaryBase = svar('co_primary_base');
const coPrimaryDarkest = svar('co_primary_darkest');
const coPrimaryDarker = svar('co_primary_darker');
const coPrimaryLighter = svar('co_primary_lighter');
const coBrightDarkest = svar('co_bright_darkest');
const coDangerBase = svar('co_danger_base');
const coDangerDarker = svar('co_danger_darker');
const coSuccessBase = svar('co_success_base');
const coSuccessDarker = svar('co_success_darker');
const shadow3 = svar('shadow_s3');

const gradDanger = `linear-gradient(135deg, ${coDangerDarker}, ${coDangerBase})`;
const gradSuccess = `linear-gradient(135deg, ${coSuccessDarker}, ${coSuccessBase})`;

const defaults: SxVariant = {
  color: coPrimaryBase,
  background: '#e4e1e5',
  borderColor: `rgba(151, 133, 165, 0.25)`,
  hoverColor: 'rgba(72, 60, 81, 0.25)',
  active: {
    transform: 'translateY(1px)',
  },
  focus: {
    borderColor: coPrimaryBase,
    boxShadow: `inset 0 0 0 2px #f4f4f4`,
  },
  disabled: {
    color: '#00000040',
    borderColor: '#d9d9d9',
    textShadow: 'none',
    boxShadow: 'none',
  },
};

const variantDefault: SxVariant = {
  width: '3rem',
  height: '3rem',
  padding: '6px',
  fontSize: '1.4rem',
  color: defaults.color,
  backgroundColor: defaults.background,
  border: `2px solid ${defaults.borderColor}`,
  borderRadius: '50%',
  '&:hover': {
    color: defaults.color,
    backgroundColor: defaults.hoverColor,
    borderColor: defaults.hoverColor,
  },
  '&:active': {
    ...defaults.active,
    color: defaults.color,
  },
  '&:focus': {
    ...defaults.focus,
    color: defaults.color,
  },
  '&.Mui-disabled': defaults.disabled,
};

const variantPrimary: SxVariant = {
  color: '#fff',
  backgroundColor: coPrimaryBase,
  border: `2px solid ${coPrimaryBase}`,
  '&:hover': {
    color: '#fff',
    backgroundColor: coBrightDarkest,
    borderColor: coBrightDarkest,
    boxShadow: shadow3,
  },
  '&:focus': {
    ...defaults.focus,
    color: '#fff',
  },
  '&:active': {
    ...defaults.active,
    color: '#fff',
  },
  '&.Mui-disabled': {
    ...defaults.disabled,
    backgroundColor: '#f5f5f5',
  },
};

const variantSecondary: SxVariant = {
  color: defaults.color,
  backgroundColor: 'transparent',
  border: `2px solid ${defaults.color}`,
  '&:hover': {
    color: '#fff',
    backgroundColor: coPrimaryBase,
    borderColor: coPrimaryBase,
    boxShadow: shadow3,
  },
  '&:active': {
    ...defaults.active,
  },
  '&:focus': {
    color: defaults.color,
    boxShadow: `inset 0 0 0 2px #fff, inset 0 0 0 4px ${defaults.color}`,
  },
  '&:hover:focus': {
    color: '#fff',
  },
};

const variantText: SxVariant = {
  color: 'inherit',
  backgroundColor: 'transparent',
  border: 'none',
  textDecoration: 'underline',
  '&:hover': {
    color: coPrimaryDarker,
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    textDecoration: 'underline',
  },
  '&:active': {
    ...defaults.active,
    color: coPrimaryDarker,
  },
  '&:focus': {
    color: coPrimaryDarker,
    boxShadow: `inset 0 0 0 1px ${defaults.color}`,
    textDecoration: 'none',
  },
};

const variantGhost: SxVariant = {
  backgroundColor: 'transparent',
  border: '2px solid transparent',
  '&:hover': {
    backgroundColor: defaults.hoverColor,
    borderColor: defaults.hoverColor,
  },
  '&:active': {
    ...defaults.active,
  },
  '&:focus': {
    ...defaults.focus,
  },
};

const variantWhite: SxVariant = {
  color: '#fff',
  backgroundColor: 'transparent',
  border: `2px solid #fff`,
  '&:hover': {
    color: defaults.color,
    backgroundColor: '#fff',
    boxShadow: shadow3,
  },
  '&:active': {
    ...defaults.active,
  },
  '&:focus': {
    ...defaults.focus,
    boxShadow: 'inset 0 0 0 2px #0b0b0b',
    borderColor: '#fff',
    color: '#fff',
  },
  '&:hover:focus': {
    color: coPrimaryDarker,
  },
};

const variantDanger: SxVariant = {
  color: '#fff',
  background: `${gradDanger}, ${coDangerBase}`,
  border: `2px solid ${coDangerBase}`,
  '&:hover': {
    color: '#fff',
    background: coDangerDarker,
    borderColor: coDangerDarker,
    boxShadow: shadow3,
    transform: 'translatey(-1px)',
  },
  '&:active': {
    ...defaults.active,
  },
  '&:focus': {
    color: '#fff',
    borderColor: coDangerBase,
    boxShadow: 'inset 0 0 0 2px #f4f4f4',
  },
  '&.Mui-disabled': {
    ...defaults.disabled,
    backgroundColor: '#f5f5f5',
  },
};

const variantSuccess: SxVariant = {
  color: '#fff',
  background: `${gradSuccess}, ${coSuccessBase}`,
  border: `2px solid ${coSuccessBase}`,
  '&:hover': {
    color: '#fff',
    backgroundColor: coSuccessBase,
    borderColor: coSuccessBase,
    boxShadow: shadow3,
    transform: 'translatey(-1px)',
  },
  '&:active': {
    ...defaults.active,
  },
  '&:focus': {
    color: '#fff',
    borderColor: coSuccessBase,
    boxShadow: 'inset 0 0 0 2px #f4f4f4',
  },
  '&.Mui-disabled': {
    ...defaults.disabled,
    backgroundColor: '#f5f5f5',
  },
};

const sizeSm: SxVariant = {
  width: '2rem',
  height: '2rem',
  fontSize: '1rem',
  borderWidth: '1px',
};

const sizeLg: SxVariant = {
  width: '4.3rem',
  height: '4.3rem',
  fontSize: '1.8rem',
};

export default {
  variantDefault,
  variantPrimary,
  variantSecondary,
  variantText,
  variantGhost,
  variantWhite,
  variantDanger,
  variantSuccess,
  sizeSm,
  sizeLg,
};
