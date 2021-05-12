import React from 'react';

import Header from '../../components/Header/Header';
import Jobs from './Jobs/Jobs';
import Stacks from './Stacks/Stacks';
import Books from './Books/Books';

export const LandingPage = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="mt-24 mb-32">
          <div className="container mx-auto">
            <div className="w-4/5">
              <h1 className="text-7xl leading-snug font-bold mb-12">
                I'm Romain Guilloteau
                <br />a{' '}
                <span className="bg-indigo-500 text-black px-3">
                  Senior Full Stack Developer
                </span>
              </h1>
              <p className="text-3xl text-gray-300 mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <a
                href="mailto:hello@romainguilloteau.dev"
                className="text-2xl font-semibold text-indigo-500 transition-colors duration-200 ease-in-out hover:text-indigo-600"
              >
                hello@romainguilloteau.dev
              </a>
            </div>
          </div>
        </section>
        <Jobs />
        <Stacks />
        <Books />
      </main>
    </div>
  );
};

export default LandingPage;
