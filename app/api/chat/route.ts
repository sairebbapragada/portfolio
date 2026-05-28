import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    console.log("API Key exists:", !!apiKey);

    const systemContext = `You are a helpful assistant for Sai Rebbapragada's portfolio website. Answer questions about Sai professionally. Here is info about Sai:
- Data professional with 2+ years experience
- Works at UnitedHealthcare as Sales Reporting Analyst (March 2026 - Present)
- Previously M&R Sales Support Rotational Program (June 2024 - March 2026)
- Interned at Optum (2023) and UnitedHealthcare (2022)
- Skills: SQL, Python, Power BI, Tableau, SSRS, ETL/ELT, AWS, Databricks
- Education: MS Data Science at University of Pittsburgh (Expected 2027), BA Information Systems UW Eau Claire
- Email: SaiRebbapragada@gmail.com
- LinkedIn: linkedin.com/in/sairohitrebbapragada
- Open to new opportunities
Keep answers short and friendly.`;

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: `${systemContext}\n\nQuestion: ${message}` }] }],
          generationConfig: { maxOutputTokens: 200, temperature: 0.7 },
        }),
      }
    );

    const data = await res.json();
    console.log("Gemini response status:", res.status);
    console.log("Gemini data:", JSON.stringify(data).substring(0, 500));

    if (data.error) {
      console.error("Gemini error:", data.error);
      return NextResponse.json({ reply: `API Error: ${data.error.message}` }, { status: 200 });
    }

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't get a response. Please try again!";
    return NextResponse.json({ reply }, { status: 200 });

  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
