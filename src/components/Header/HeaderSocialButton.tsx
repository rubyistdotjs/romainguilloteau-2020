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
      className="flex items-center justify-center w-7 h-7 rounded-full transition-colors duration-200 ease-in-out hover:text-white hover:bg-gray-700 md:w-9 md:h-9 lg:w-12 lg:h-12"
    >
      <FeatherIcon
        name={icon}
        className="stroke-2 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
      />
    </a>
  );
};

export default HeaderSocialButton;
