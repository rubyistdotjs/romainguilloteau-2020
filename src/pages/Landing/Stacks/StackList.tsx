import React from 'react';

import { Stack } from '../../../services/data';

import StackListEntry from './StackListEntry';

export type StackListProps = Stack;

export const StackList = ({ name, color, entries }: StackListProps) => {
  return (
    <div className="my-10">
      <h3 className="text-4xl font-bold leading-snug mb-8">{name}</h3>
      <ul className="text-lg space-y-4">
        {entries.map((entry) => (
          <StackListEntry {...entry} color={color} key={entry.name} />
        ))}
      </ul>
    </div>
  );
};

export default StackList;
