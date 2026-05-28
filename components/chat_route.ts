import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }

    const systemContext = `You are a helpful assistant for Sai Rebbapragada's portfolio website. Your job is to answer questions about Sai professionally and accurately. Here is everything you need to know about Sai:

FULL NAME: Satya Venkata Sai Rohit Rebbapragada (goes by Sai)
EMAIL: SaiRebbapragada@gmail.com
LINKEDIN: linkedin.com/in/sairohitrebbapragada

BIO: Data professional with 2+ years of hands-on experience building ETL/ELT pipelines, BI dashboards, and automated reporting solutions. Pursuing MS in Data Science. Passionate about eliminating manual effort through scalable, automated data workflows.

EDUCATION:
- MS in Data Science, University of Pittsburgh (Expected 2027) - currently enrolled
- BA in Information Systems, Minor in Marketing, University of Wisconsin Eau Claire (2024)

WORK EXPERIENCE:
1. UnitedHealthcare - Sales Reporting Analyst (March 2026 - Present)
   - Designed and deployed self-service Power BI dashboards cutting ad hoc requests by ~70%
   - Built end-to-end automated SSRS report distribution eliminating all manual file sharing
   - Developed SQL queries processing multi-million row databases
   - Established data quality controls with centralized auto-refresh logic

2. UnitedHealthcare - M&R Sales Support Rotational Program (June 2024 - March 2026)
   - Optimized SharePoint and Teams workflows
   - Reduced call center dependency by ~30%
   - Coordinated cross-functionally across Sales and Operations

3. Optum - Customer Experience Intern (June 2023 - Aug 2023)
   - Analyzed large-scale datasets for customer experience insights
   - Built dashboards for leadership decision-making

4. UnitedHealthcare - Marketing Intern (June 2022 - Aug 2022)
   - Analyzed campaign and customer satisfaction data
   - Developed recurring KPI reports

SKILLS:
- Languages: SQL (advanced), Python, M Query, DAX, VBA
- Pipelines: ETL/ELT, Power Query, SSRS, Databricks, AWS (S3, Glue, EMR)
- Databases: SQL Server, MySQL, DBeaver, data modeling
- BI Tools: Power BI, Tableau, Excel
- Platforms: AWS, SharePoint, Git

KEY ACHIEVEMENTS:
- Cut ad hoc reporting requests by 70% with Power BI dashboards
- Eliminated 100% of manual file sharing with automated SSRS pipeline
- Reduced inbound calls by 30% through improved data access
- Processed multi-million row databases for enterprise reporting

Sai is currently open to new opportunities - full time roles, internships, or interesting data projects.

Keep answers concise, professional, and friendly. If asked something unrelated to Sai, politely redirect the conversation back to Sai's professional background.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${systemContext}\n\nUser question: ${message}`,
                },
              ],
            },
          ],
          generationConfig: {
            maxOutputTokens: 300,
            temperature: 0.7,
          },
        }),
      }
    );

    const data = await response.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I'm not sure about that. Feel free to reach out to Sai directly at SaiRebbapragada@gmail.com!";

    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
