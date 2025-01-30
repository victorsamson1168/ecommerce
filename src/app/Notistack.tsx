'use client';

// Third-party packages
import { SnackbarProvider, closeSnackbar } from 'notistack';
// Custom packages
import { BanIcon, CheckIcon } from '@/components/Icons';
// PropTypes
type NotistackProp = {
  close?: boolean;
};

export default function Notistack(props: NotistackProp) {
  /** props - state */
  const { close = false } = props;
  return close ? (
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      iconVariant={{
        success: <CheckIcon />,
        error: <BanIcon />,
        warning: '',
        info: '',
      }}
      maxSnack={3}
      action={snackbarId => (
        <button onClick={() => closeSnackbar(snackbarId)}>Close</button>
      )}
    />
  ) : (
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      iconVariant={{
        success: <CheckIcon />,
        error: <BanIcon />,
        warning: '',
        info: '',
      }}
      maxSnack={3}
    />
  );
}
