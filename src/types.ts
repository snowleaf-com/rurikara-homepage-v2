export type AppEnv = {
  Bindings: {
    ASSETS: Fetcher;
    RESEND_API_KEY?: string;
    MAIL_FROM?: string;
    MAIL_TO?: string;
    INSTAGRAM_ACCESS_TOKEN?: string;
    INSTAGRAM_USER_ID?: string;
  };
};
