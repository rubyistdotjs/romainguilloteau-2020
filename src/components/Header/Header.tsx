import React from 'react';

import HeaderSocialButton from './HeaderSocialButton';

import mugshotSrc from '../../images/mugshot-thumbnail.jpg';

export const Header = () => {
  return (
    <div className="container mx-auto py-6 flex flex-row justify-between items-center">
      <div className="w-16 h-16 rounded-full bg-gray-600 overflow-hidden">
        <img src={mugshotSrc} alt="Romain Guilloteau" />
      </div>

      <div className="flex flex-row space-x-4">
        <HeaderSocialButton
          icon="FileText"
          label="Download my resume"
          url="https://github.com/rubyistdotjs"
        />
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
