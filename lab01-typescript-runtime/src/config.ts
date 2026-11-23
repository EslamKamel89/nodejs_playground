export interface AppConfig {
  name: string;
  port: number;
  environment: "development" | "production";
}

export const config: AppConfig = {
  name: "Lab 01: typescript runtime",
  port: 3000,
  environment: "development",
};
