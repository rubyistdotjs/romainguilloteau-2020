import React from 'react';
import { FeatherIcon, FeatherIconName } from '../FeatherIcon';

export type HeaderSocialButtonProps = {
  icon: FeatherIconName;
  label: string;
  url: string;
};

export const HeaderSocialButton = ({
  icon,
  label,
  url,
}: HeaderSocialButtonProps) => {
  return (
    <a
      href={url}
      title={label}
      className="flex items-center justify-center w-12 h-12 rounded-full transition-colors duration-200 ease-in-out hover:text-white hover:bg-gray-700"
    >
      <FeatherIcon name={icon} size={26} strokeWidth={2} />
    </a>
  );
};

export default HeaderSocialButton;
