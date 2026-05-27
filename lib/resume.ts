export const resume = {
  name: "Sai Rebbapragada",
  fullName: "Satya Venkata Sai Rohit Rebbapragada",
  title: "Data Engineer & BI Analyst",
  tagline: "BUILD WITH DATA. DRIVE DECISIONS.",
  bio: "Data professional with 2+ years of hands-on experience building ETL/ELT pipelines, BI dashboards, and automated reporting solutions. Pursuing MS in Data Science; passionate about eliminating manual effort through scalable, automated data workflows.",
  email: "SaiRebbapragada@gmail.com",
  phone: "(952) 923-3283",
  linkedin: "https://www.linkedin.com/in/sairohitrebbapragada",
  github: "",

  skills: {
    "Languages & Query": ["SQL (Advanced)", "Python", "M Query", "DAX", "VBA"],
    "Pipelines & ETL": ["ETL/ELT Pipelines", "Power Query", "SSRS", "Databricks", "AWS Glue", "AWS EMR", "AWS S3"],
    "Data Warehousing": ["SQL Server", "MySQL", "Data Modeling", "DBeaver"],
    "BI & Visualization": ["Power BI", "Tableau", "Excel", "Power Query", "Pivot Tables"],
    "Platforms & Tools": ["AWS", "SharePoint", "Git", "UAT"],
  },

  techStack: [
    { name: "SQL", category: "Query" },
    { name: "Python", category: "Language" },
    { name: "Power BI", category: "BI" },
    { name: "Tableau", category: "BI" },
    { name: "AWS", category: "Cloud" },
    { name: "SSRS", category: "Reporting" },
    { name: "Databricks", category: "Pipeline" },
    { name: "SQL Server", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "Excel / VBA", category: "Analytics" },
    { name: "SharePoint", category: "Platform" },
    { name: "Git", category: "Tools" },
    { name: "DAX", category: "Query" },
    { name: "Power Query", category: "ETL" },
    { name: "AWS S3", category: "Cloud" },
    { name: "AWS Glue", category: "Pipeline" },
  ],

  education: [
    {
      degree: "MS, Data Science",
      school: "University of Pittsburgh",
      year: "Expected 2027",
      current: true,
    },
    {
      degree: "BA, Information Systems",
      school: "University of Wisconsin, Eau Claire",
      minor: "Minor in Marketing",
      year: "2024",
      current: false,
    },
  ],

  experience: [
    {
      company: "UnitedHealthcare",
      role: "Reporting | Sales Reporting Analyst",
      period: "June 2024 – Present",
      current: true,
      bullets: [
        "Designed and deployed self-service Power BI dashboards adopted by enterprise stakeholders across Sales, Operations, and leadership, cutting ad hoc requests by ~70%.",
        "Built end-to-end automated report distribution via SSRS — pulling SQL data, converting to formatted Excel, and uploading to SharePoint on a scheduled deployment, eliminating all manual file sharing.",
        "Developed SQL queries in DBeaver to extract and process multi-million row databases for field sales agent reporting, onboarding tracking, and territory performance.",
        "Established implicit data quality controls by centralizing source queries and auto-refresh logic, ensuring stakeholders receive consistent, accurate data on schedule.",
      ],
    },
    {
      company: "UnitedHealthcare",
      role: "M&R Sales | Sales Support Rotational Program",
      period: "June 2024 – March 2026",
      current: false,
      bullets: [
        "Optimized SharePoint and Teams workflows to improve consistency and scalability of data delivery across the team.",
        "Improved field agent access to sales resources, reducing call center dependency and driving a ~30% decrease in inbound calls.",
        "Coordinated cross-functionally across Sales and Operations to ensure timely delivery of client-facing data.",
      ],
    },
    {
      company: "Optum",
      role: "Enterprise Shared Services | Customer Experience Intern",
      period: "June 2023 – Aug 2023",
      current: false,
      bullets: [
        "Analyzed large-scale datasets to detect customer experience friction points, contributing to measurable reduction in downstream issues.",
        "Built dashboards surfacing key insights for leadership, accelerating data-driven decision-making.",
      ],
    },
    {
      company: "UnitedHealthcare",
      role: "Government Programs | Marketing Intern",
      period: "June 2022 – Aug 2022",
      current: false,
      bullets: [
        "Analyzed campaign and customer satisfaction data to identify performance trends, informing marketing strategy adjustments and improving engagement metrics.",
        "Developed recurring KPI and customer satisfaction reports supporting data-driven decisions.",
      ],
    },
  ],

  projects: [
    {
      title: "Enterprise Sales BI Dashboard",
      description:
        "Self-service Power BI dashboards adopted by enterprise stakeholders across Sales, Operations, and leadership at UnitedHealthcare. Cut ad hoc reporting requests by ~70%.",
      tags: ["Power BI", "SQL", "DAX", "DBeaver"],
      highlight: "70% reduction in ad hoc requests",
    },
    {
      title: "Automated SSRS Report Pipeline",
      description:
        "End-to-end automated report distribution system: SQL data extraction → formatted Excel → scheduled SharePoint upload via SSRS. Eliminated 100% of manual file sharing.",
      tags: ["SSRS", "SQL Server", "Excel", "SharePoint"],
      highlight: "100% manual effort eliminated",
    },
    {
      title: "Territory Performance Analytics",
      description:
        "Multi-million row database pipeline for field sales agent reporting, onboarding tracking, and territory performance analysis with centralized auto-refresh data quality controls.",
      tags: ["SQL", "Python", "Power Query", "SharePoint"],
      highlight: "Millions of rows processed",
    },
    {
      title: "Customer Experience Insights Platform",
      description:
        "Large-scale dataset analysis at Optum to detect customer experience friction points. Built executive dashboards surfacing key insights for leadership teams.",
      tags: ["Python", "Tableau", "SQL", "Analytics"],
      highlight: "Measurable CX improvement",
    },
  ],

  stats: [
    { value: "2+", label: "Years Experience" },
    { value: "70%", label: "Ad hoc requests cut" },
    { value: "30%", label: "Inbound calls reduced" },
    { value: "100M+", label: "Rows processed" },
  ],
};
