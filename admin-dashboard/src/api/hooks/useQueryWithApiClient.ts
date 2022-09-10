import { QueryKey, useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { ApiClient, SwaggerResponse } from '../ApiClient.generated';
import { useApiClient } from './useApiClient';

// A wrapper around the useQuery hook to inject the (NSwag) api client and to store the result
// from the SwaggerResponse in the data property (opposed to storing the complete SwaggerResponse)
export function useQueryWithApiClient<
  TResult = unknown,
  TError = unknown,
  TQueryKey extends QueryKey = QueryKey
>(
  queryKey: TQueryKey,
  queryFn: (client: ApiClient) => Promise<SwaggerResponse<TResult>>,
  options?: Omit<
    UseQueryOptions<SwaggerResponse<TResult>, TError, TResult, TQueryKey>,
    'queryKey' | 'queryFn'
  >
): UseQueryResult<TResult, TError> {
  const apiClient = useApiClient();

  return useQuery<SwaggerResponse<TResult>, TError, TResult, TQueryKey>(
    queryKey,
    () => queryFn(apiClient),
    {
      ...options,
      select: (data) => data.result
    }
  );
}
