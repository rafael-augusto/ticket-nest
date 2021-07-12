export interface ServiceResponse<T> {
  responseContent: T;
  reason: string[];
  sucess: boolean;
}
