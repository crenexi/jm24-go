import { SxProps, Theme } from '@mui/material/styles';
import { svar } from '@helpers/helpers';

type SxVariant = SxProps<Theme>;

const coPrimaryDarker = svar('co_primary_darker');
const coPrimaryLighter = svar('co_primary_lighter');
const coDangerBase = svar('co_danger_base');
const coDangerDarker = svar('co_danger_darker');
const coSuccessBase = svar('co_success_base');
const coSuccessDarker = svar('co_success_darker');
const shadow3 = svar('shadow_s3');
const borderRadius1 = svar('border_radius_r1');
const borderRadius2 = svar('border_radius_r2');
const spSm1 = svar('sp_sm1');
const spSm2 = svar('sp_sm2');
const spSm3 = svar('sp_sm3');
const spSm4 = svar('sp_sm4');
const spSm5 = svar('sp_sm5');

const gradDanger = `linear-gradient(135deg, ${coDangerDarker}, ${coDangerBase})`;
const gradSuccess = `linear-gradient(135deg, ${coSuccessDarker}, ${coSuccessBase})`;

const defaults: SxVariant = {
  color: '#bdb7c1',
  background: '#29252c',
  borderColor: '#514a56',
  hoverColor: '#3d3841',
  active: {
    transform: 'translateY(1px)',
  },
  focus: {
    borderColor: '#3d3841',
    boxShadow: `inset 0 0 0 2px #1f1c21`,
  },
  disabled: {
    color: '#ffffff40',
    borderColor: '#514a56',
    textShadow: 'none',
    boxShadow: 'none',
  },
};

const variantDefault: SxVariant = {
  color: defaults.color,
  padding: `${spSm2} ${spSm4}`,
  backgroundColor: defaults.background,
  border: `2px solid ${defaults.borderColor}`,
  borderRadius: borderRadius1,
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
  backgroundColor: coPrimaryDarker,
  border: `2px solid ${coPrimaryDarker}`,
  '&:hover': {
    color: '#fff',
    backgroundColor: '#5c456e',
    borderColor: '#5c456e',
    boxShadow: shadow3,
  },
  '&:focus': {
    ...defaults.focus,
    borderColor: '#5c456e',
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
    backgroundColor: coPrimaryDarker,
    borderColor: coPrimaryDarker,
    boxShadow: shadow3,
  },
  '&:active': {
    ...defaults.active,
  },
  '&:focus': {
    ...defaults.focus,
    borderColor: coPrimaryDarker,
    color: defaults.color,
  },
  '&:hover:focus': {
    color: '#fff',
  },
};

const variantText: SxVariant = {
  color: 'inherit',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '0',
  textDecoration: 'underline',
  '&:hover': {
    color: coPrimaryLighter,
    backgroundColor: 'transparent',
    border: 'none',
    boxShadow: 'none',
    textDecoration: 'underline',
  },
  '&:active': {
    ...defaults.active,
    color: coPrimaryLighter,
  },
  '&:focus': {
    color: coPrimaryLighter,
    boxShadow: `inset 0 0 0 1px #5c456e`,
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
    color: '#342b3a',
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
  textTransform: 'uppercase',
  fontWeight: 600,
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
  textTransform: 'uppercase',
  fontWeight: 600,
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

const sizeSm = {
  padding: `${spSm1} ${spSm3}`,
  borderWidth: '1px',
  borderRadius: '7px',
};

const sizeLg = {
  padding: `${spSm3} ${spSm5}`,
  borderRadius: borderRadius2,
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
