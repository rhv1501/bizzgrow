import { NextResponse } from "next/server";

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
      console.error("Google Script URL not configured");
      return NextResponse.json(
        { ok: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    // Send to Google Apps Script
    await sendToGoogleScript(body);

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
