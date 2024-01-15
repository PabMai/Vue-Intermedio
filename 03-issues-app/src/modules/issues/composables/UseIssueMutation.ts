import { useMutation } from '@tanstack/vue-query';

import { Issue } from '../interfaces/issue';
import { githubApi } from '../../../api/githubApi';

interface Args {
  title: string;
  body?: string;
  labels?: string[];
}

const addIssue = async({ title, body = '', labels = [] }: Args): Promise<Issue> => {

  const newIssueData = {
    title, body, labels
  }

  const { data } = await githubApi.post<Issue>('/issues', newIssueData);
  console.log('new issue: ', data);

  return data;

}

const useIssueMutation = () => {

  const issueMutation = useMutation( addIssue, {
    onSuccess: () => {
      // onSuccess
    },
    onSettled: () => {
      // onSettled
    }
  });

  return {
    issueMutation,
  }
}

export default useIssueMutation;
