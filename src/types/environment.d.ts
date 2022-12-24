export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        mongoDatabaseURL: string;
        passportSecretCode: string;
        userProfileApplicationPortNumber: string;
        ENV: 'test' | 'dev' | 'prod';
    }
  }
}
