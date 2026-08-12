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

    // 1. Send confirmation email to subscriber with direct PDF download link
    const subscriberHtml = `
      <div style="font-family: Arial, sans-serif; background-color: #0A0F0D; color: #F7F5F0; padding: 30px; border-radius: 12px;">
        <h2 style="color: #D4AF37; margin-bottom: 10px;">BOMBAY°STUDIO</h2>
        <h3 style="color: #ffffff;">Your 2026 Mumbai Interior Budget Planner & Checklist is Ready</h3>
        <p style="color: #A3B1AA; line-height: 1.6;">
          Thank you for requesting our complimentary interior budget planner and architectural checklist.
        </p>
        <p style="margin: 25px 0;">
          <a href="${config.site.url}/mumbai-interior-budget-planner-2026.pdf" style="background-color: #D4AF37; color: #0A0F0D; padding: 14px 28px; font-weight: bold; text-decoration: none; border-radius: 25px; display: inline-block;">
            Download Budget Planner PDF ↗
          </a>
        </p>
        <hr style="border: 0; border-top: 1px solid rgba(212,175,55,0.2); margin: 20px 0;" />
        <p style="font-size: 12px; color: #A3B1AA;">
          Bombay Studio · Luxury Architecture & Interior Design in Mumbai<br/>
          Need immediate consultation? Call +91 96643 84181 or reply to this email.
        </p>
      </div>
    `;

    await sendEmail({
      to: email,
      subject: "Your 2026 Mumbai Interior Budget Planner & Checklist — Bombay Studio",
      html: subscriberHtml,
    });

    // 2. Send notification to Studio team
    const notificationHtml = `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #D4AF37;">
        <h3 style="color: #18312B;">New Lead Magnet Download Request</h3>
        <p><strong>Subscriber Email:</strong> ${email}</p>
        <p><strong>Timestamp:</strong> ${new Date().toLocaleString("en-IN")}</p>
      </div>
    `;

    await sendEmail({
      to: config.smtp.toEmail,
      subject: `New Lead Magnet Download: ${email}`,
      html: notificationHtml,
    });

    return NextResponse.json({ success: true, message: "Lead captured and email dispatched successfully." });
  } catch (err: any) {
    console.error("Lead Magnet API Error:", err);
    return NextResponse.json(
      { error: "Failed to send email via SMTP.", details: err?.message || String(err) },
      { status: 500 }
    );
  }
}
