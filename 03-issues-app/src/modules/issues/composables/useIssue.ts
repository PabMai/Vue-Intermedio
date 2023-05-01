import { useQuery } from '@tanstack/vue-query';
import { githubApi } from '../../../api/githubApi';
import { Issue } from '../interfaces/issue';
import { Comment } from '../interfaces/comment';
import { computed } from 'vue';

const getIssue = async (issueNumber: number): Promise<Issue> => {
  const { data } = await githubApi.get<Issue>(`issues/${issueNumber}`);

  return data;
}

const getIssueComments = async (issueNumber: number): Promise<Issue[]> => {
  const { data } = await githubApi.get<Issue[]>(`issues/${issueNumber}/comments`);

  return data;
}

const useIssue = (issueNumber: number) => {

  const issueQuery = useQuery(
    ['issue', issueNumber],
    () => getIssue(issueNumber),
    {
      staleTime: 1000 * 60
    }
  );

  const issueCommentsQuery = useQuery(
    ['issue', issueNumber, 'comments'],
    () => getIssueComments(issueQuery.data.value?.number || 0),
    {
      staleTime: 1000 * 60,
      enabled: computed(() => !!issueQuery.data.value)
    }
  );

  return {
    issueQuery,
    issueCommentsQuery
  }
}

export default useIssue;
