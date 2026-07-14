import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

// TypeScript interface for contact form data
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  source?: string;
}

// Format date as "Jan 15 2004 14:30"
function formatDate(date: Date): string {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  
  return `${month} ${day} ${year} ${hours}:${minutes}`;
}

async function sendToGoogleScript(data: ContactFormData) {
  try {
    console.log("Sending to Google Script URL:", GOOGLE_SCRIPT_URL);
    console.log("Sending data:", data);
    
    const response = await fetch(GOOGLE_SCRIPT_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: formatDate(new Date()),
        source: data.source || "Website Contact Form"
      }),
    });

    console.log("Response status:", response.status);
    console.log("Response headers:", Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Google Script error response:", errorText);
      throw new Error(`Google Script responded with status: ${response.status}. Response: ${errorText}`);
    }

    const result = await response.json();
    console.log("Google Script success response:", result);
    return result;
  } catch (error) {
    console.error("Error sending to Google Script:", error);
    throw error;
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Contact form submission:", body);

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { ok: false, message: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Check if Google Script URL is configured
    if (!GOOGLE_SCRIPT_URL) {
      if (process.env.NODE_ENV === "development") {
        console.warn("MOCK MODE: Google Script URL not configured. Simulating successful form submission.");
        return NextResponse.json({ 
          ok: true, 
          message: "Thank you for your message! (MOCK MODE)" 
        });
      }
      console.error("Google Script URL not configured");
      return NextResponse.json(
        { ok: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    // Send to Google Apps Script
    await sendToGoogleScript(body);

    // Send auto-responder via Nodemailer using SMTP
    if (body.email) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT) || 465,
          secure: true, // true for 465, false for other ports
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
          },
        });

        const mailOptions = {
          from: `"BizzGrow Team" <${process.env.SMTP_USER}>`,
          to: body.email,
          subject: "Request Received - BizzGrow",
          html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 4px solid #0A0A0A; padding: 40px; border-radius: 20px; background-color: #FAFAFA;">
            <h2 style="font-weight: 900; font-size: 28px; color: #0A0A0A; text-transform: uppercase; margin-bottom: 20px;">
              Hey ${body.name || 'there'}, <br/>
              <span style="color: #FF3366;">We Got Your Request.</span>
            </h2>
            <p style="font-size: 16px; color: #0A0A0A; font-weight: bold; line-height: 1.6;">
              Thanks for reaching out to BizzGrow. This is an automated confirmation to let you know your message hit our desks successfully.
            </p>
            <p style="font-size: 16px; color: #666666; line-height: 1.6;">
              Our team is currently reviewing your details. We pride ourselves on executing with ruthless efficiency, so expect to hear back from us shortly with next steps.
            </p>
            <div style="background-color: #FFD500; padding: 20px; border-radius: 10px; border: 2px solid #0A0A0A; margin: 30px 0;">
              <p style="margin: 0; font-weight: bold; color: #0A0A0A; font-size: 14px; text-transform: uppercase;">Your Message Summary:</p>
              <p style="margin: 10px 0 0 0; color: #0A0A0A;"><em>"${body.message || 'No message provided'}"</em></p>
            </div>
            <p style="font-size: 16px; font-weight: bold; color: #0A0A0A; margin-top: 30px;">
              Let's grow,<br/>
              <strong>The BizzGrow Team</strong>
            </p>
          </div>
          `
        };

        await transporter.sendMail(mailOptions);
        console.log("Auto-responder sent to:", body.email);
      } catch (emailError) {
        console.error("Failed to send auto-responder:", emailError);
        // We don't throw here because we still want to return success since the lead was saved.
      }
    }

    return NextResponse.json({ 
      ok: true, 
      message: "Thank you for your message! We'll get back to you soon." 
    });
  } catch (err) {
    console.error("Error processing contact request:", err);
    return NextResponse.json(
      { ok: false, message: "Failed to process your request. Please try again." },
      { status: 500 }
    );
  }
}
