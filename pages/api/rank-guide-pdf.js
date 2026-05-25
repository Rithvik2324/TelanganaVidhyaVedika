function escapePdf(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function pageStream(title, lines) {
  const content = [
    "BT",
    "/F1 22 Tf",
    "72 760 Td",
    `(${escapePdf(title)}) Tj`,
    "/F1 12 Tf",
    "0 -38 Td",
    ...lines.flatMap((line) => [`(${escapePdf(line)}) Tj`, "0 -22 Td"]),
    "ET"
  ].join("\n");

  return content;
}

function buildPdf() {
  const pages = [
    pageStream("Top Engineering Colleges by Rank 2026", [
      "Use this guide as a starting point before counseling.",
      "Under 10k rank: target stronger autonomous and high-demand campuses.",
      "Under 25k rank: compare CSE, AI/ML, ECE and Data Science options.",
      "Under 50k rank: widen college list and discuss branch flexibility.",
      "Under 75k rank: check management quota, location and fee fit."
    ]),
    pageStream("Best Branches to Compare", [
      "CSE: broad software career path and highest parent demand.",
      "AI/ML: focused path for automation, data and emerging technology.",
      "Data Science: good fit for analytics-oriented students.",
      "Cyber Security: useful for students interested in security and networks.",
      "ECE: flexible option across core electronics and software roles."
    ]),
    pageStream("Approximate Fee Range Discussion", [
      "Below 3 Lakhs: look for practical location and branch tradeoffs.",
      "3-5 Lakhs: compare college quality, branch demand and travel.",
      "5-8 Lakhs: stronger private college options may open depending on timing.",
      "8 Lakhs+: discuss premium branches, seat availability and parent budget.",
      "Fees change by college. Confirm before making any admission payment."
    ]),
    pageStream("Counseling Contact", [
      "Telangana Vidya Vedika",
      "Phone / WhatsApp: +91 93476 42633",
      "Office: Dilsukhnagar, Hyderabad, Telangana",
      "WhatsApp message: Hi, I need engineering college guidance.",
      "Share rank, branch, budget, hostel and city preference for faster help."
    ])
  ];

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    `<< /Type /Pages /Kids [${pages.map((_, index) => `${3 + index * 2} 0 R`).join(" ")}] /Count ${pages.length} >>`
  ];

  pages.forEach((stream, index) => {
    const pageObjectNumber = 3 + index * 2;
    const streamObjectNumber = pageObjectNumber + 1;
    objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 11 0 R >> >> /Contents ${streamObjectNumber} 0 R >>`);
    objects.push(`<< /Length ${Buffer.byteLength(stream, "utf8")} >>\nstream\n${stream}\nendstream`);
  });

  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(pdf, "utf8"));
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = Buffer.byteLength(pdf, "utf8");
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return pdf;
}

export default function handler(req, res) {
  const pdf = buildPdf();
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", 'inline; filename="top-engineering-colleges-by-rank-2026.pdf"');
  res.status(200).send(Buffer.from(pdf, "utf8"));
}
