import { useMutation, UseMutationOptions, UseMutationResult } from 'react-query';
import { ApiClient } from '../ApiClient.generated';
import { useApiClient } from './useApiClient';

export function useMutationWithApiClient<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(
  mutationFn: (client: ApiClient) => Promise<TData>,
  options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>
): UseMutationResult<TData, TError, TVariables, TContext> {
  const apiClient = useApiClient();

  return useMutation(() => mutationFn(apiClient), options);
}
