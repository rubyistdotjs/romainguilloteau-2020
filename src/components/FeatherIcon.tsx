import React from 'react';
import * as Icons from 'react-feather';

export type FeatherIconName = keyof typeof Icons;

export type FeatherIconProps = { name: FeatherIconName } & Icons.IconProps;

export const FeatherIcon = ({ name, ...iconProps }: FeatherIconProps) => {
  const IconComponent = Icons[name];
  return <IconComponent {...iconProps} />;
};

export default FeatherIcon;
