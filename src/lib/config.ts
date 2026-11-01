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

const rawStudioPhone = process.env.NEXT_PUBLIC_STUDIO_PHONE || "+917070704181";
const studioPhoneDisplay = process.env.NEXT_PUBLIC_STUDIO_PHONE_DISPLAY || "+91 707070 4181";
const rawFounderPhone = process.env.NEXT_PUBLIC_FOUNDER_PHONE || "+919664384181";
const founderPhoneDisplay = process.env.NEXT_PUBLIC_FOUNDER_PHONE_DISPLAY || "+91 96643 84181";
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@bombaystudio.in";

export const contactConfig = {
  phone: {
    studio: {
      display: studioPhoneDisplay,
      raw: rawStudioPhone,
      href: `tel:${rawStudioPhone}`,
    },
    founder: {
      display: founderPhoneDisplay,
      raw: rawFounderPhone,
      href: `tel:${rawFounderPhone}`,
    },
  },
  email: {
    address: contactEmail,
    href: `mailto:${contactEmail}`,
  },
  whatsapp: {
    number: rawStudioPhone.replace(/[^0-9]/g, ""),
    getLink(message: string = "Hi Bombay Studio, I want to book a free interior consultation") {
      const num = rawStudioPhone.replace(/[^0-9]/g, "");
      return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
    },
  },
  address: {
    street: "111, Evershine Mall, Chincholi Bunder Mindspace, Malad West",
    city: "Mumbai",
    state: "Maharashtra",
    postalCode: "400064",
    country: "India",
    countryCode: "IN",
    display: "111, Evershine Mall, Chincholi Bunder Mindspace, Malad West, Mumbai 400064",
  },
  social: {
    instagram: "https://www.instagram.com/bombaystudio/",
    linkedin: "https://www.linkedin.com/company/bombaystudio/",
  },
};

export const config = {
  contact: contactConfig,
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
      return process.env.NEXT_PUBLIC_SITE_URL || "https://bombaystudio.in";
    },
  },
  analytics: {
    get gaMeasurementId() {
      const raw = getOptionalEnv("NEXT_PUBLIC_GA_MEASUREMENT_ID");
      if (!raw || raw.trim() === "") return undefined;
      const clean = raw.trim();
      return clean.startsWith("G-") ? clean : `G-${clean}`;
    },
  },
};
