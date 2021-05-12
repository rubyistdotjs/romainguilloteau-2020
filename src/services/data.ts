import { useState, useEffect } from 'react';

export type JobTitle = {
  name: string;
  startedAt: string;
  endedAt: string;
};

export type Job = {
  company: string;
  description: string;
  titles: Array<JobTitle>;
};

export type StackEntry = {
  name: string;
  comment: string;
};

export type Stack = {
  type: string;
  entries: Array<StackEntry>;
};

export type DataFilename = 'jobs' | 'stacks';
export type DataFile<T> = T extends 'jobs'
  ? Array<Job>
  : T extends 'stacks'
  ? Array<Stack>
  : never;

export async function fetchData<T extends DataFilename>(
  filename: T,
  onSuccess: (value: DataFile<T>) => void,
) {
  const { default: data }: { default: DataFile<T> } = await import(
    `../data/${filename}.json`
  );

  onSuccess(data);
}

export function useData<T extends DataFilename>(filename: T) {
  const [data, setData] = useState<DataFile<T> | null>(null);

  useEffect(() => {
    fetchData(filename, setData);
  }, [filename]);

  return data;
}
