import { ApiClient } from 'api/ApiClient.generated';

export function useApiClient(): ApiClient {
  return new ApiClient(null);
}
