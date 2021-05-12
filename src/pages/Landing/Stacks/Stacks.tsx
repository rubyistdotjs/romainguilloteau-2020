import React from 'react';

type StackEntry = { name: string; comment: string };
type Stack = StackEntry[];

const languages: Stack = [
  {
    name: 'Ruby',
    comment: 'not so mush anymore but a daily for like 8 years.',
  },
  {
    name: 'JavaScript',
    comment: 'daily for everything, front, back, scripts...',
  },
  { name: 'TypeScript', comment: 'mostly on the frontend.' },
  {
    name: 'Go',
    comment: '',
  },
];

const technos: Stack = [
  {
    name: 'Ruby on Rails',
    comment: 'I created dozen of apps with it in former jobs, still love it.',
  },
  {
    name: 'Node.js & Express',
    comment: 'a daily, we exclusively use express at work.',
  },
  {
    name: 'React',
    comment:
      'same as above, in my previous work we used Vue which is cool as well.',
  },
  {
    name: 'tailwindcss',
    comment:
      'Almost all my personal projects includes it, i love tailwind to death.',
  },
];

const ops: Stack = [
  {
    name: 'AWS',
    comment: 'in all my jobs we started with Heroku and ended up on AWS.',
  },
  {
    name: 'PostgreSQL',
    comment: 'my database of choice and also a standard at work.',
  },
  {
    name: 'Redis',
    comment:
      'believe it or not, I worked on projects were this was the main DB.',
  },
  { name: 'Docker', comment: '' },
];

const tools: Stack = [
  { name: 'VSCode', comment: '' },
  { name: 'Firefox', comment: '' },
  { name: 'Notion', comment: '' },
  { name: 'Figma', comment: '' },
];

type StacksListProps = {
  name: string;
  color: 'blue' | 'green' | 'yellow' | 'purple' | 'pink';
  entries: Stack;
};

const StacksList = ({ name, color, entries }: StacksListProps) => {
  return (
    <div className="my-10">
      <h3 className="text-4xl font-bold leading-snug mb-8">{name}</h3>
      <ul className="text-lg space-y-4">
        {entries.map((entry) => (
          <li className="align-middle">
            <span className={`text-xl text-${color}-600`}>•</span>{' '}
            <span className="text-xl font-semibold">{entry.name}</span>{' '}
            <span className="text-gray-500">- {entry.comment}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Stacks = () => {
  return (
    <section className="my-32">
      <div className="container mx-auto">
        <h2 className="text-7xl leading-snug font-bold">Stack</h2>
        <div className="grid grid-cols-2">
          <StacksList name="Languages" entries={languages} color="blue" />
          <StacksList name="Technos" entries={technos} color="green" />
          <StacksList name="Ops and Databases" entries={ops} color="purple" />
          <StacksList name="Tools" entries={tools} color="pink" />
        </div>
      </div>
    </section>
  );
};

export default Stacks;
