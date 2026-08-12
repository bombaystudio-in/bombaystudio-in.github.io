export const config = {
  smtp: {
    host: process.env.SMTP_HOST || "mailv1.nordible.co",
    port: parseInt(process.env.SMTP_PORT || "465", 10),
    user: process.env.SMTP_USER || "mail@nordible.co",
    pass: process.env.SMTP_PASS || "C@nb3rra",
    secure: process.env.SMTP_SECURE !== "false",
    fromName: process.env.SMTP_FROM_NAME || "Bombay Studio",
    fromEmail: process.env.SMTP_FROM_EMAIL || "mail@nordible.co",
    toEmail: process.env.SMTP_TO_EMAIL || "hello@bombaystudio.in",
  },
  site: {
    name: "Bombay Studio",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://bombaystudio.in",
  },
  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-CH0CS2VB7S",
  },
};
