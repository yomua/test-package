declare interface OtherParams {
  user_id: string;
  token: string;
  company_id: string;
}

declare interface ErrorHandler {
  (err: string): void;
}
