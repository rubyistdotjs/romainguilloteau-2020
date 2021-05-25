import React from 'react';

import HeaderSocialButton from './HeaderSocialButton';

import mugshotSrc from '../../images/mugshot-thumbnail.jpg';

export const Header = () => {
  return (
    <div className="container mx-auto py-6 flex flex-row justify-between items-center">
      <div className="w-10 h-10 rounded-full bg-gray-600 overflow-hidden md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16">
        <img src={mugshotSrc} alt="Romain Guilloteau" />
      </div>

      <div className="flex flex-row space-x-4">
        <HeaderSocialButton
          icon="GitHub"
          label="Visit my GitHub page"
          url="https://github.com/rubyistdotjs"
        />
        <HeaderSocialButton
          icon="Linkedin"
          label="Visit my LinkedIn page"
          url="https://www.linkedin.com/in/romainguilloteau/"
        />
      </div>
    </div>
  );
};

export default Header;
