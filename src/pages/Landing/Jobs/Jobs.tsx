import React from 'react';

import { useData } from '../../../services/data';

import Job from './Job';

export const Jobs = () => {
  const jobs = useData('jobs');
  if (jobs === null) return null;

  return (
    <section className="my-32">
      <div className="container mx-auto">
        <h2 className="text-7xl leading-snug font-bold">Experiences</h2>
        {jobs.map((job) => (
          <Job {...job} key={job.company.toLowerCase()} />
        ))}
      </div>
    </section>
  );
};

export default Jobs;
