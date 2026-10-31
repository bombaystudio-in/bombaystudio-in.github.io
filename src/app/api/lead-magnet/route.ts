import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mailer";
import { config } from "@/lib/config";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email address is required." },
        { status: 400 }
      );
    }

    const downloadUrl = "/bombay-studio-portfolio.pdf";

    // Attempt to dispatch email confirmation via SMTP if available (non-blocking)
    try {
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bombaystudio.in";
      const subscriberHtml = `
        <div style="font-family: Arial, sans-serif; background-color: #0A0F0D; color: #F7F5F0; padding: 30px; border-radius: 12px;">
          <h2 style="color: #D4AF37; margin-bottom: 10px;">BOMBAY STUDIO</h2>
          <h3 style="color: #ffffff;">Your 12-Page Architectural Monograph &amp; Turnkey Portfolio is Ready</h3>
          <p style="color: #A3B1AA; line-height: 1.6;">
            Thank you for requesting our official architectural portfolio. You can view or download the high-resolution 12-page monograph below:
          </p>
          <p style="margin: 25px 0;">
            <a href="${siteUrl}/bombay-studio-portfolio.pdf" style="background-color: #D4AF37; color: #0A0F0D; padding: 14px 28px; font-weight: bold; text-decoration: none; border-radius: 25px; display: inline-block;">
              Download 12-Page Monograph PDF ↗
            </a>
          </p>
          <hr style="border: 0; border-top: 1px solid rgba(212,175,55,0.2); margin: 20px 0;" />
          <p style="font-size: 12px; color: #A3B1AA;">
            Bombay Studio · 111, Evershine Mall, Chincholi Bunder Mindspace, Malad West, Mumbai - 64<br/>
            Direct Consultations: +91 707070 4181 · info@bombaystudio.in
          </p>
        </div>
      `;

      await sendEmail({
        to: email,
        subject: "Your Official 12-Page Architectural Portfolio & Monograph — Bombay Studio",
        html: subscriberHtml,
      });

      // Send notification to Studio team
      const notificationHtml = `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #D4AF37;">
          <h3 style="color: #18312B;">New Portfolio Brochure Download</h3>
          <p><strong>Subscriber Email:</strong> ${email}</p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString("en-IN")}</p>
        </div>
      `;

      await sendEmail({
        to: config.smtp.toEmail,
        subject: `New Portfolio Download Request: ${email}`,
        html: notificationHtml,
      });
    } catch (smtpErr) {
      console.warn("SMTP email dispatch skipped or unconfigured:", smtpErr);
    }

    return NextResponse.json({
      success: true,
      message: "Lead captured successfully.",
      downloadUrl,
    });
  } catch (err: unknown) {
    console.error("Lead Magnet API Error:", err);
    return NextResponse.json(
      { success: true, downloadUrl: "/bombay-studio-portfolio.pdf" },
      { status: 200 }
    );
  }
}
