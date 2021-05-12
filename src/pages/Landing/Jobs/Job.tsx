import React from 'react';
import dayjs from 'dayjs';

import { Job as JobDataType } from '../../../services/data';

export type JobProps = JobDataType;

export const Job = ({ company, titles, description }: JobProps) => {
  const formatDate = (date: string) => {
    return dayjs(date).format('MMM. YYYY').toLowerCase();
  };

  return (
    <div className="w-2/3 my-16">
      <h3 className="text-5xl font-bold mb-3">{company}</h3>
      <div className="text-xl font-semibold mb-8 leading-relaxed">
        {titles.map((title) => (
          <span className="block" key={title.startedAt}>
            {title.name}{' '}
            <span className="font-normal text-gray-400">
              {title.endedAt ? (
                <span>
                  from {formatDate(title.startedAt)} to{' '}
                  {formatDate(title.endedAt)}
                </span>
              ) : (
                <span>since {formatDate(title.startedAt)}</span>
              )}
            </span>
          </span>
        ))}
      </div>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default Job;
