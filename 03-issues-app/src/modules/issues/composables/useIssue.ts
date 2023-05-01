import { Issue } from '../interfaces/issue';
import { githubApi } from '../../../api/githubApi';
import { useQuery } from '@tanstack/vue-query';

const getIssue = async (issueNumber: number): Promise<Issue> => {

  const { data } = await githubApi.get<Issue>(`issues/${issueNumber}`)

  return data;

}

const useIssue = (issueNumber: number) => {

  const issueQuery = useQuery(
    ['issue', issueNumber],
    () => getIssue(issueNumber),
    {
      staleTime: 1000 * 60
    }
  )

  return {
    issueQuery
  }
}

export default useIssue;
