export const classNames = ({
  variant = '',
  primary = '',
  secondary = ''
}) => `${variant} ${primary && 'primary'} ${secondary && 'secondary'}`;