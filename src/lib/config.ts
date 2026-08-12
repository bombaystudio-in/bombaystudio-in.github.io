function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`CRITICAL: Required environment variable '${name}' is not set.`);
  }
  return value;
}

function getOptionalEnv(name: string): string | undefined {
  return process.env[name];
}

export const config = {
  smtp: {
    get host() {
      return requireEnv("SMTP_HOST");
    },
    get port() {
      return parseInt(requireEnv("SMTP_PORT"), 10);
    },
    get user() {
      return requireEnv("SMTP_USER");
    },
    get pass() {
      return requireEnv("SMTP_PASS");
    },
    get secure() {
      return process.env.SMTP_SECURE !== "false";
    },
    get fromName() {
      return requireEnv("SMTP_FROM_NAME");
    },
    get fromEmail() {
      return requireEnv("SMTP_FROM_EMAIL");
    },
    get toEmail() {
      return requireEnv("SMTP_TO_EMAIL");
    },
  },
  site: {
    name: "Bombay Studio",
    get url() {
      return requireEnv("NEXT_PUBLIC_SITE_URL");
    },
  },
  analytics: {
    get gaMeasurementId() {
      return getOptionalEnv("NEXT_PUBLIC_GA_MEASUREMENT_ID");
    },
  },
};
