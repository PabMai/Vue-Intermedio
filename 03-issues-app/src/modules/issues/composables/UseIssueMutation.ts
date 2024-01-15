import { useMutation } from '@tanstack/vue-query';

import { Issue } from '../interfaces/issue';

const addIssue = async(): Promise<Issue> => {
  new Error('Not implemented');
}

const useIssueMutation = () => {

  const issueMutation = useMutation( addIssue, {
    onSuccess: () => {

    },
    onSettled: () => {

    }
  });

  return {
    issueMutation,
  }
}

export default useIssueMutation;
