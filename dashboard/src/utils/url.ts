import env from '@beam-australia/react-env';

export function getBackendUrlFromConfig(): string {
  const envVar = `BACKEND_URL`;
  const backendUrl = env(envVar);
  if (backendUrl) {
    return backendUrl;
  } else {
    throw new Error(`Environment variable REACT_APP_${envVar} was not set.`);
  }
}

export function getBackendUrl(): string {
  if (process.env.NODE_ENV === 'development') {
    return `/api`;
  } else {
    return getBackendUrlFromConfig();
  }
}
