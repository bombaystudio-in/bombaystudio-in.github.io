import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mailer";
import { config } from "@/lib/config";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, location, scope, brief, bhk, area, tier, estimatedTotal, type } = body;

    const isCalculator = type === "calculator";

    const subject = isCalculator
      ? `New Cost Calculator Inquiry: ${name || phone} (${bhk || "Estimate"})`
      : `New Consultation Booking: ${name} (${location || "Mumbai"})`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; background-color: #0A0F0D; color: #F7F5F0; padding: 30px; border-radius: 12px;">
        <h2 style="color: #D4AF37; margin-bottom: 10px;">BOMBAY°STUDIO — New Inquiry</h2>
        <h3 style="color: #ffffff;">${isCalculator ? "Interior Cost Estimate Request" : "Consultation Booking Request"}</h3>
        
        <table style="width: 100%; text-align: left; border-collapse: collapse; margin-top: 15px;">
          <tr style="border-bottom: 1px solid rgba(212,175,55,0.2);">
            <th style="padding: 8px; color: #D4AF37;">Name:</th>
            <td style="padding: 8px; color: #ffffff;">${name || "N/A"}</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(212,175,55,0.2);">
            <th style="padding: 8px; color: #D4AF37;">Phone / WhatsApp:</th>
            <td style="padding: 8px; color: #ffffff;">${phone || "N/A"}</td>
          </tr>
          ${email ? `
          <tr style="border-bottom: 1px solid rgba(212,175,55,0.2);">
            <th style="padding: 8px; color: #D4AF37;">Email:</th>
            <td style="padding: 8px; color: #ffffff;">${email}</td>
          </tr>` : ""}
          ${location ? `
          <tr style="border-bottom: 1px solid rgba(212,175,55,0.2);">
            <th style="padding: 8px; color: #D4AF37;">Location:</th>
            <td style="padding: 8px; color: #ffffff;">${location}</td>
          </tr>` : ""}
          ${scope ? `
          <tr style="border-bottom: 1px solid rgba(212,175,55,0.2);">
            <th style="padding: 8px; color: #D4AF37;">Project Scope:</th>
            <td style="padding: 8px; color: #ffffff;">${scope}</td>
          </tr>` : ""}
          ${bhk ? `
          <tr style="border-bottom: 1px solid rgba(212,175,55,0.2);">
            <th style="padding: 8px; color: #D4AF37;">BHK Type & Area:</th>
            <td style="padding: 8px; color: #ffffff;">${bhk} (${area} sq.ft.)</td>
          </tr>` : ""}
          ${tier ? `
          <tr style="border-bottom: 1px solid rgba(212,175,55,0.2);">
            <th style="padding: 8px; color: #D4AF37;">Finish Tier & Estimate:</th>
            <td style="padding: 8px; color: #ffffff;">${tier} — ₹${estimatedTotal} Lakhs</td>
          </tr>` : ""}
          ${brief ? `
          <tr style="border-bottom: 1px solid rgba(212,175,55,0.2);">
            <th style="padding: 8px; color: #D4AF37;">Brief Details:</th>
            <td style="padding: 8px; color: #ffffff;">${brief}</td>
          </tr>` : ""}
        </table>

        <p style="margin-top: 20px; font-size: 12px; color: #A3B1AA;">
          Submitted on ${new Date().toLocaleString("en-IN")} via Bombay Studio Website.
        </p>
      </div>
    `;

    await sendEmail({
      to: config.smtp.toEmail,
      subject,
      html: htmlContent,
      replyTo: email || undefined,
    });

    return NextResponse.json({ success: true, message: "Inquiry transmitted successfully." });
  } catch (err: any) {
    console.error("Contact API Error:", err);
    return NextResponse.json(
      { error: "Failed to process inquiry.", details: err?.message || String(err) },
      { status: 500 }
    );
  }
}
