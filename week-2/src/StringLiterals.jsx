import React from 'react';

export default function StringLiterals() {
  const academicYear = "2025-2026";
  const regulation = "R23";
  const courseCode = "CSE-AI";

  // 2.e: Evaluation utilizing JavaScript template string literals backticks (``)
  const fullSpecificationLiteral = `Loaded configuration schema context: ${courseCode} structural architecture for Academic Term ${academicYear} under Curriculum Code ${regulation}.`;

  return (
    <div style={{ border: '2px solid #9C27B0', padding: '20px', margin: '15px 0', borderRadius: '8px' }}>
      <h2>Exp 2.e: String Literals Display</h2>
      <p style={{ fontStyle: 'italic', color: '#444', backgroundColor: '#f9f9f9', padding: '12px', borderRadius: '4px', borderLeft: '4px solid #9C27B0' }}>
        {fullSpecificationLiteral}
      </p>
    </div>
  );
}
