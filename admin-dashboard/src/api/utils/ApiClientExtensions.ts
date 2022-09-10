import { getBackendUrl } from 'utils/url';

export class SwaggerResponse<TResult> {
  public status: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public headers: { [key: string]: any };
  public result: TResult;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public constructor(status: number, headers: { [key: string]: any }, result: TResult) {
    this.status = status;
    this.headers = headers;
    this.result = result;
  }
}

export class ApiClientBase {
  private readonly _configuration: null;

  public constructor(configuration: null) {
    this._configuration = configuration;
  }

  // noinspection JSUnusedLocalSymbols
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public getBaseUrl(service: string, baseUrl?: string): string {
    return getBackendUrl();
  }

  public transformOptions(options: RequestInit): Promise<RequestInit> {
    return Promise.resolve(options);
  }
}
