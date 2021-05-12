import React from 'react';

import { Stack, StackEntry } from '../../../services/data';

export type StackListEntryProps = StackEntry & {
  color: Stack['color'];
};

export const StackListEntry = ({
  name,
  comment,
  color,
}: StackListEntryProps) => {
  return (
    <li className="align-middle">
      <span className={`text-xl text-${color}-600`}>•</span>{' '}
      <span className="text-xl font-semibold">{name}</span>{' '}
      <span className="text-gray-500">- {comment}</span>
    </li>
  );
};

export default StackListEntry;
