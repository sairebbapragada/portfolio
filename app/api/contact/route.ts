import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // -------------------------------------------------------------------
    // Option A: Send via Resend (recommended for Vercel)
    // 1. npm install resend
    // 2. Set RESEND_API_KEY in Vercel environment variables
    // 3. Uncomment the block below
    // -------------------------------------------------------------------
    //
    // const { Resend } = await import("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Portfolio Contact <onboarding@resend.dev>",
    //   to: "SaiRebbapragada@gmail.com",
    //   subject: `Portfolio message from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    // });
    //
    // -------------------------------------------------------------------
    // Option B: Store in a database (e.g. Vercel Postgres / Neon)
    // -------------------------------------------------------------------
    // Import your db client and insert a row here.
    // -------------------------------------------------------------------

    // For now: log to console (visible in Vercel function logs)
    console.log("📬 New contact form submission:", { name, email, message });

    return NextResponse.json(
      { success: true, message: "Message received! I'll be in touch soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
