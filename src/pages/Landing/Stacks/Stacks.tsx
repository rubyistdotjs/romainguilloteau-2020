import React from 'react';

import { useData } from '../../../services/data';

import StackList from './StackList';

export const Stacks = () => {
  const stacks = useData('stacks');
  if (stacks === null) return null;

  return (
    <section className="my-32">
      <div className="container mx-auto">
        <h2 className="text-7xl leading-snug font-bold">Stack</h2>
        <div className="grid grid-cols-2">
          {stacks.map((stack) => (
            <StackList {...stack} key={stack.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stacks;
