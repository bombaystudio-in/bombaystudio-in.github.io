import nodemailer from "nodemailer";
import { config } from "./config";

let transporterInstance: nodemailer.Transporter | null = null;

export function getTransporter() {
  if (!transporterInstance) {
    transporterInstance = nodemailer.createTransport({
      host: config.smtp.host,
      port: config.smtp.port,
      secure: config.smtp.secure, // true for 465 SSL, false for other ports
      auth: {
        user: config.smtp.user,
        pass: config.smtp.pass,
      },
    });
  }
  return transporterInstance;
}

export interface SendMailOptions {
  to?: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
}

export async function sendEmail({ to, subject, html, text, replyTo }: SendMailOptions) {
  const transporter = getTransporter();
  const mailOptions = {
    from: `"${config.smtp.fromName}" <${config.smtp.fromEmail}>`,
    to: to || config.smtp.toEmail,
    replyTo: replyTo || config.smtp.fromEmail,
    subject,
    text: text || html.replace(/<[^>]*>?/gm, ""),
    html,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
}
