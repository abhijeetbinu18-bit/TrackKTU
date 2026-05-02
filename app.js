const GRADES = {
    "S": 10,
    "A+": 9,
    "A": 8.5,
    "B+": 8,
    "B": 7.5,
    "C+": 7,
    "C": 6.5,
    "D": 6,
    "P": 5.5,
    "F": 0,
    "FE": 0,
    "I": 0
  };

  const STORAGE_KEY = "trackktu-website-v2";

  const BRANCHES = {
    ECE: "Electronics and Communication Engineering",
    CSE: "Computer Science and Engineering",
    CPS: "Cyber Physical Systems Engineering",
    IT: "Information Technology",
    EEE: "Electrical and Electronics Engineering",
    ME: "Mechanical Engineering",
    CIVIL: "Civil Engineering",
    CHEM: "Chemical Engineering"
  };

  const KIND_LABELS = {
    core: "core",
    lab: "lab",
    workshop: "workshop",
    project: "project",
    elective: "elective",
    viva: "viva",
    audit: "audit",
    humanities: "humanities",
    design: "design",
    studio: "studio"
  };

  function c(code, name, credits, kind = "core", options = {}) {
    return { code, name, credits, kind, ...options };
  }

  function s(id, title, source, courses, meta = {}) {
    return { id, title, source, courses, ...meta };
  }

  const COMMON_2019_S1 = [
    c("MAT101", "Calculus and Engineering Applications", 4),
    c("PHT100", "Engineering Physics", 4),
    c("EST110", "Engineering Graphics", 3, "studio"),
    c("EST120", "Basics of Civil and Mechanical Engineering", 4),
    c("HUN101", "Life Skills", 2, "humanities"),
    c("PHL120", "Physics Lab", 1, "lab"),
    c("ESL120", "Workshop Practice", 1, "workshop")
  ];

  const COMMON_2019_S2 = [
    c("MAT102", "Vector Calculus, Differential Equations and Transforms", 4),
    c("CYT100", "Engineering Chemistry", 4),
    c("EST100", "Engineering Mechanics", 4),
    c("EST130", "Basics of Electrical and Electronics Engineering", 4),
    c("HUN102", "Professional Communication", 2, "humanities"),
    c("CYL120", "Chemistry Lab", 1, "lab"),
    c("ESL130", "Electrical and Electronics Workshop", 1, "workshop")
  ];

  const COMMON_2024_A_S1 = [
    c("GAMAT101", "Mathematics for Information Science-1", 3),
    c("GAPHT121/GXCYT122", "Physics for Information Science / Chemistry for Information Science", 4),
    c("GMEST103", "Engineering Graphics and Computer Aided Drawing", 3, "studio"),
    c("GXEST104", "Introduction to Electrical & Electronics Engineering", 4),
    c("UCEST105", "Algorithmic Thinking with Python", 4),
    c("GXESL106", "Basic Electrical and Electronics Engineering Workshop", 1, "workshop"),
    c("UCHWT127/UCHUT128", "Health and Wellness / Life Skills and Professional Communication", 1, "humanities", { gradeMode: "passfail" })
  ];

  const COMMON_2024_A_S2 = [
    c("GAMAT201", "Mathematics for Information Science-2", 3),
    c("GAPHT121/GXCYT122", "Physics for Information Science / Chemistry for Information Science", 4),
    c("GXEST203", "Foundations of Computing: From Hardware Essentials to Web Design", 3),
    c("GXEST204", "Programming in C", 4),
    c("UCEST206", "Engineering Entrepreneurship & IPR", 3),
    c("GXESL208", "IT Workshop", 1, "workshop"),
    c("UCHWT127/UCHUT128", "Health and Wellness / Life Skills and Professional Communication", 1, "humanities", { gradeMode: "passfail" }),
    c("UCSEM129", "Skill Enhancement Course: Digital 101 (NASSCOM)", 1, "audit", { gradeMode: "passfail" })
  ];

  const COMMON_2024_B_S1 = [
    c("GYMAT101", "Mathematics for Electrical Science-1", 3),
    c("GBPHT121/GXCYT122", "Physics for Electrical Science / Chemistry for Electrical Science", 4),
    c("GMEST103/GYEST103", "Engineering Graphics and Computer Aided Drawing", 3, "studio"),
    c("GXEST104", "Introduction to Electrical & Electronics Engineering", 4),
    c("UCEST105", "Algorithmic Thinking with Python", 4),
    c("GXESL106", "Basic Electrical and Electronics Engineering Workshop", 1, "workshop"),
    c("UCHWT127/UCHUT128", "Health and Wellness / Life Skills and Professional Communication", 1, "humanities", { gradeMode: "passfail" })
  ];

  const COMMON_2024_B_S2 = [
    c("GYMAT201", "Mathematics for Electrical Science-2", 3),
    c("GBPHT121/GXCYT122", "Physics for Electrical Science / Chemistry for Electrical Science", 4),
    c("GXEST203/GBEST213", "Foundations of Computing / Engineering Mechanics (branch dependent)", 3),
    c("GXEST204", "Programming in C", 4),
    c("UCEST206", "Engineering Entrepreneurship & IPR", 3),
    c("GXESL208", "IT Workshop", 1, "workshop"),
    c("UCHWT127/UCHUT128", "Health and Wellness / Life Skills and Professional Communication", 1, "humanities", { gradeMode: "passfail" }),
    c("UCSEM129", "Skill Enhancement Course: Digital 101 (NASSCOM)", 1, "audit", { gradeMode: "passfail" })
  ];

  const COMMON_2024_C_S1 = [
    c("GYMAT101", "Mathematics for Physical Science-1", 3),
    c("GZPHT121/GCCYT122", "Physics for Physical Science / Chemistry for Physical Science", 4),
    c("GCEST103", "Engineering Mechanics", 3),
    c("GCEST104", "Introduction to Mechanical Engineering & Civil Engineering", 4),
    c("UCEST105", "Algorithmic Thinking with Python", 4),
    c("GCESL106", "Engineering Workshop", 1, "workshop"),
    c("UCHWT127/UCHUT128", "Health and Wellness / Life Skills and Professional Communication", 1, "humanities", { gradeMode: "passfail" })
  ];

  const COMMON_2024_C_S2 = [
    c("GYMAT201", "Mathematics for Physical Science-2", 3),
    c("GZPHT121/GCCYT122", "Physics for Physical Science / Chemistry for Physical Science", 4),
    c("GCEST203", "Engineering Graphics and Computer Aided Drawing", 3, "studio"),
    c("GZEST204", "Basic Electrical & Electronics Engineering", 4),
    c("UCEST206", "Engineering Entrepreneurship & IPR", 3),
    c("GZESL208", "Basic Electrical and Electronics Engineering Workshop", 1, "workshop"),
    c("UCHWT127/UCHUT128", "Health and Wellness / Life Skills and Professional Communication", 1, "humanities", { gradeMode: "passfail" }),
    c("UCSEM129", "Skill Enhancement Course: Digital 101 (NASSCOM)", 1, "audit", { gradeMode: "passfail" })
  ];

  const RESOURCE_LINKS = {
    "2024": {
      syllabus: "https://www.ktunotes.in/ktu-btech-syllabus-2024-scheme/",
      notes: "https://www.ktunotes.in/ktu-2024-scheme-notes/",
      questions: "https://www.ktunotes.in/ktu-2024-scheme-question-papers-download-all-branches-semesters/",
      lab: "https://www.ktunotes.in/ktu-btech-lab-materials/"
    },
    "2019": {
      syllabus: "https://www.ktunotes.in/ktu-btech-2019-syllabus/",
      notes: "https://www.ktunotes.in/ktu-2019-new-scheme-notes/",
      questions: "https://www.ktunotes.in/ktu-2019-scheme-question-papers/",
      lab: "https://www.ktunotes.in/ktu-btech-lab-materials/"
    }
  };

  const LIBRARY = {
    "2024": {
      label: "2024 Scheme",
      branches: {
        ECE: [
          s("s1", "Semester 1", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/ece-2024.pdf", COMMON_2024_B_S1, {
            verification: "verified",
            verificationLabel: "Matched to 2024 ECE curriculum PDF",
            sourceNote: "Semester 1 follows the mirrored APJAKTU 2024 ECE curriculum PDF downloaded during the audit. Slot B and Slot I remain branch-approved alternatives inside the official semester table."
          }),
          s("s2", "Semester 2", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/ece-2024.pdf", [
            c("GYMAT201", "Mathematics for Electrical Science-2", 3),
            c("GBPHT121/GXCYT122", "Physics for Electrical Science / Chemistry for Electrical Science", 4),
            c("GXEST203/GBEST213", "Foundations of Computing / Engineering Mechanics (branch-approved slot)", 3),
            c("GXEST204", "Programming in C", 4),
            c("PCECT205", "Network Theory", 4),
            c("UCEST206", "Engineering Entrepreneurship & IPR", 3),
            c("UCHWT127/UCHUT128", "Health and Wellness / Life Skills and Professional Communication", 1, "humanities", { gradeMode: "passfail" }),
            c("GXESL208", "IT Workshop", 1, "workshop"),
            c("UCSEM129", "Skill Enhancement Course: Digital 101 (NASSCOM)", 1, "audit", { gradeMode: "passfail" })
          ], {
            verification: "verified",
            verificationLabel: "Matched to 2024 ECE curriculum PDF",
            sourceNote: "Semester 2 follows the mirrored APJAKTU 2024 ECE curriculum PDF. The official table shows an alternative branch-approved slot at C."
          }),
          s("s3", "Semester 3", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/ece-2024.pdf", [
            c("GYMAT301", "Mathematics for Electrical Science-3", 3),
            c("PCECT302", "Solid State Devices", 4),
            c("PCECT303", "Analog Circuits", 4),
            c("PBECT304", "Logic Circuit Design", 4),
            c("GNEST305", "Introduction to Artificial Intelligence and Data Science", 4),
            c("UCHUT346/347", "Economics for Engineers / Engineering Ethics and Sustainable Development", 2, "humanities"),
            c("PCECL307", "Analog Circuits Lab", 2, "lab"),
            c("PCECL308", "Logic Circuit Design Lab", 2, "lab")
          ], {
            verification: "verified",
            verificationLabel: "Matched to 2024 ECE curriculum PDF",
            sourceNote: "Semester 3 subjects and credits were transcribed from the mirrored APJAKTU 2024 ECE curriculum PDF."
          }),
          s("s4", "Semester 4", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/ece-2024.pdf", [
            c("GBMAT401", "Mathematics for Electrical Science-4", 3),
            c("PCECT402", "Signals and Systems", 4),
            c("PCECT403", "Linear Integrated Circuits", 4),
            c("PBECT404", "Microcontrollers", 4),
            c("PEECT41N", "PE-1", 3, "elective"),
            c("UCHUT346/347", "Economics for Engineers / Engineering Ethics and Sustainable Development", 2, "humanities"),
            c("PCECL407", "Linear Integrated Circuits Lab", 2, "lab"),
            c("PCECL408", "Microcontroller Lab", 2, "lab")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 ECE curriculum PDF",
            sourceNote: "Semester 4 is aligned to the mirrored APJAKTU 2024 ECE curriculum PDF. The elective slot is intentionally generic because the curriculum offers multiple PE-1 options."
          }),
          s("s5", "Semester 5", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/ece-2024.pdf", [
            c("PCECT501", "Electromagnetics", 4),
            c("PCECT502", "Analog & Digital Communication", 4),
            c("PCECT503", "Control Systems", 3),
            c("PBECT504", "Digital Signal Processing", 4),
            c("PEECT52N", "PE-2", 3, "elective"),
            c("UCHUM506", "Constitution of India (MOOC)", 1, "audit", { gradeMode: "passfail" }),
            c("PCECL507", "DSP Lab", 2, "lab"),
            c("PCECL508", "Communication Lab I", 2, "lab")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 ECE curriculum PDF",
            sourceNote: "Semester 5 is aligned to the mirrored APJAKTU 2024 ECE curriculum PDF. The PE-2 slot remains generic until the student picks the exact elective."
          }),
          s("s6", "Semester 6", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/ece-2024.pdf", [
            c("PCECT601", "Advanced Communication Theory", 4),
            c("PCECT602", "Microwaves and Antennas", 3),
            c("PEECT63N", "PE-3", 3, "elective"),
            c("PBECT604", "VLSI Circuit Design", 4),
            c("GXEST605", "Design Thinking and Product Development", 2, "design"),
            c("OEECT61N/IEECT61N", "OE/ILE-1", 3, "elective"),
            c("PCECL607", "Communication Lab II", 2, "lab"),
            c("PCEVP608", "Mini Project: Socially Relevant Project", 2, "project")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 ECE curriculum PDF",
            sourceNote: "Semester 6 matches the mirrored APJAKTU 2024 ECE curriculum PDF at the structure level. Elective slots remain generic by design."
          }),
          s("s7", "Semester 7", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/ece-2024.pdf", [
            c("PEECT74N/PEECM74N", "PE-4", 3, "elective"),
            c("PEECT75N/PEECM75N", "PE-5", 3, "elective"),
            c("OEECT72N/IEECT72N/OEECM72N", "OE/ILE-2", 3, "elective"),
            c("UEHUT704/UEHUM70N", "University Elective", 2, "humanities"),
            c("PCECS705", "Seminar", 2, "project"),
            c("PCECP706/PCECI706", "Major Project / Internship", 4, "project")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 ECE curriculum PDF",
            sourceNote: "Semester 7 follows the official ECE semester structure in the mirrored PDF. Elective and internship pathways vary per student."
          }),
          s("s8", "Semester 8", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/ece-2024.pdf", [
            c("PEECT86N/PEECM86N", "PE-6", 3, "elective"),
            c("OEECT83N/IEECT83N/OEECM83N", "OE/ILE-3", 3, "elective"),
            c("UEHUT803/UEHUM803", "Organizational Behavior and Business Communication", 1, "humanities"),
            c("PCECP806/PCECI806/PCECJ806", "Major Project / Internship / Major Project Phase-II", 4, "project")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 ECE curriculum PDF",
            sourceNote: "Semester 8 follows the official ECE semester structure in the mirrored PDF. Elective and project pathways vary per student."
          })
        ],
        CSE: [
          s("s1", "Semester 1", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/cse-2024.pdf", COMMON_2024_A_S1, {
            verification: "verified",
            verificationLabel: "Matched to 2024 CSE curriculum PDF",
            sourceNote: "Semester 1 follows the mirrored APJAKTU 2024 CSE curriculum PDF. Slot B and Slot I remain official alternative rows."
          }),
          s("s2", "Semester 2", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/cse-2024.pdf", [
            c("GAMAT201", "Mathematics for Information Science-2", 3),
            c("GAPHT121/GXCYT122", "Physics for Information Science / Chemistry for Information Science", 4),
            c("GXEST203", "Foundations of Computing: From Hardware Essentials to Web Design", 3),
            c("GXEST204", "Programming in C", 4),
            c("PCCST205", "Discrete Mathematics", 4),
            c("UCEST206", "Engineering Entrepreneurship & IPR", 3),
            c("UCHWT127/UCHUT128", "Health and Wellness / Life Skills and Professional Communication", 1, "humanities", { gradeMode: "passfail" }),
            c("GXESL208", "IT Workshop", 1, "workshop"),
            c("UCSEM129", "Skill Enhancement Course: Digital 101 (NASSCOM)", 1, "audit", { gradeMode: "passfail" })
          ], {
            verification: "verified",
            verificationLabel: "Matched to 2024 CSE curriculum PDF",
            sourceNote: "Semester 2 subjects and credits were transcribed from the mirrored APJAKTU 2024 CSE curriculum PDF."
          }),
          s("s3", "Semester 3", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/cse-2024.pdf", [
            c("GAMAT301", "Mathematics for Information Science-3", 3),
            c("PCCST302", "Theory of Computation", 4),
            c("PCCST303", "Data Structures and Algorithms", 4),
            c("PBCST304", "Object Oriented Programming", 4),
            c("GAEST305", "Digital Electronics & Logic Design", 4),
            c("UCHUT346/347", "Economics for Engineers / Engineering Ethics and Sustainable Development", 2, "humanities"),
            c("PCCSL307", "Data Structures Lab", 2, "lab"),
            c("PCCSL308", "Digital Lab", 2, "lab")
          ], {
            verification: "verified",
            verificationLabel: "Matched to 2024 CSE curriculum PDF",
            sourceNote: "Semester 3 subjects and credits were transcribed from the mirrored APJAKTU 2024 CSE curriculum PDF."
          }),
          s("s4", "Semester 4", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/cse-2024.pdf", [
            c("GAMAT401", "Mathematics for Information Science-4", 3),
            c("PCCST402", "Database Management Systems", 4),
            c("PCCST403", "Operating Systems", 4),
            c("PBCST404", "Computer Organization and Architecture", 4),
            c("PECST41N", "PE-1", 3, "elective"),
            c("UCHUT346/347", "Economics for Engineers / Engineering Ethics and Sustainable Development", 2, "humanities"),
            c("PCCSL407", "Operating Systems Lab", 2, "lab"),
            c("PCCSL408", "DBMS Lab", 2, "lab")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 CSE curriculum PDF",
            sourceNote: "Semester 4 is aligned to the mirrored APJAKTU 2024 CSE curriculum PDF. The PE-1 slot remains generic until the elective is chosen."
          }),
          s("s5", "Semester 5", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/cse-2024.pdf", [
            c("PCCST501", "Computer Networks", 4),
            c("PCCST502", "Design and Analysis of Algorithms", 4),
            c("PCCST503", "Machine Learning", 3),
            c("PBCST504", "Microcontrollers", 4),
            c("PECST52N", "PE-2", 3, "elective"),
            c("UCHUM506", "Constitution Of India (MOOC)", 1, "audit", { gradeMode: "passfail" }),
            c("PCCSL507", "Networks Lab", 2, "lab"),
            c("PCCSL508", "Machine Learning Lab", 2, "lab")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 CSE curriculum PDF",
            sourceNote: "Semester 5 is aligned to the mirrored APJAKTU 2024 CSE curriculum PDF. The PE-2 slot remains generic until the elective is chosen."
          }),
          s("s6", "Semester 6", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/cse-2024.pdf", [
            c("PCCST601", "Compiler Design", 4),
            c("PCCST602", "Advanced Computing Systems", 3),
            c("PECST63N", "PE-3", 3, "elective"),
            c("PBCST604", "Fundamentals of Cyber Security", 4),
            c("GAEST605", "Design Thinking and Product Development", 2, "design"),
            c("OECST61N/IECST61N", "OE/ILE-1", 3, "elective"),
            c("PCCSL607", "Systems Lab", 2, "lab"),
            c("PCCSP608", "Mini Project: Socially Relevant Project", 2, "project")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 CSE curriculum PDF",
            sourceNote: "Semester 6 matches the mirrored APJAKTU 2024 CSE curriculum PDF at the structure level. Elective slots remain generic by design."
          }),
          s("s7", "Semester 7", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/cse-2024.pdf", [
            c("PECST74N/PECSM74N", "PE-4", 3, "elective"),
            c("PECST75N/PECSM75N", "PE-5", 3, "elective"),
            c("OECST72N/IECST72N/OECSM72N", "OE/ILE-2", 3, "elective"),
            c("UEHUT704/UEHUM70N", "University Elective", 2, "humanities"),
            c("PCCSS705", "Seminar", 2, "project"),
            c("PCCSP706/PCCSI706", "Major Project / Internship", 4, "project")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 CSE curriculum PDF",
            sourceNote: "Semester 7 follows the official CSE semester structure in the mirrored PDF. Elective and internship pathways vary per student."
          }),
          s("s8", "Semester 8", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/cse-2024.pdf", [
            c("PECST86N/PECSM86N", "PE-6", 3, "elective"),
            c("OECST83N/IECST83N/OECSM83N", "OE/ILE-3", 3, "elective"),
            c("UEHUT803/UEHUM803", "Organizational Behavior and Business Communication", 1, "humanities"),
            c("PCCSP806/PCCSI806/PCCSJ806", "Major Project / Internship / Major Project Phase-II", 4, "project")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 CSE curriculum PDF",
            sourceNote: "Semester 8 follows the official CSE semester structure in the mirrored PDF. Elective and project pathways vary per student."
          })
        ],
        CPS: [
          s("s1", "Semester 1", "file:///C:/Users/Abhijeet/Downloads/s1%20grade%20card.jpeg", [
            c("GYMAT101", "Mathematics for Electrical Science-1", 3),
            c("GXCYT122", "Chemistry for Information Science / Electrical Science", 4),
            c("GMEST103", "Engineering Graphics and Computer Aided Drawing", 3),
            c("GXEST104", "Introduction to Electrical and Electronics Engineering", 4),
            c("UCEST105", "Algorithmic Thinking with Python", 4),
            c("GXESL106", "Basic Electrical and Electronics Engineering Workshop", 1, "workshop"),
            c("UCHWT127", "Health and Wellness", 1, "audit", { gradeMode: "passfail" })
          ], {
            verification: "verified",
            verificationLabel: "Verified from official KTU S1 grade card",
            sourceNote: "Matched directly against the user-provided official KTU semester grade card for CPS S1."
          }),
          s("s2", "Semester 2", "Official KTU semester grade card provided by user", [
            c("GYMAT201", "Mathematics for Electrical Science-2", 3),
            c("GBPHT121", "Physics for Electrical Science", 4),
            c("GBEST213", "Engineering Mechanics (EEE, CP, BR, RA and RU)", 3),
            c("GXEST204", "Programming in C", 4),
            c("PCCPT205", "Sensors and Actuators for Robotics", 4),
            c("UCEST206", "Engineering Entrepreneurship and IPR", 3),
            c("UCHUT128", "Life Skills and Professional Communication", 1, "humanities", { gradeMode: "passfail" }),
            c("GXESL208", "IT Workshop", 1, "workshop"),
            c("UCSEM129", "Skill Enhancement Course: Digital 101 (NASSCOM)", 1, "audit", { gradeMode: "passfail" })
          ], {
            verification: "verified",
            verificationLabel: "Verified from official KTU S2 grade card",
            sourceNote: "Matched against the official KTU result screenshot shared in this thread. PASS rows are excluded from SGPA."
          }),
          s("s3", "Semester 3", "file:///C:/Users/Abhijeet/Downloads/S3-S8%20CYBER%20PHYSICAL%20SYSTEM%20FINAL%20SYLLABUS.pdf", [
            c("GYMAT301", "Mathematics for Electrical Science-3", 3),
            c("PCCPT302", "Microcontrollers and Embedded Systems", 4),
            c("PCCPT303", "Fundamentals of Cyber Physical Systems", 4),
            c("PBCPT304", "Analog and Digital Electronics", 4),
            c("GNEST305", "Introduction to Artificial Intelligence and Data Science", 4),
            c("UCHUT346/347", "Economics for Engineers / Engineering Ethics and Sustainable Development", 2, "humanities"),
            c("PCCPL307", "Analog and Digital Electronics Lab", 2, "lab"),
            c("PCCPL308", "Instrumentation Lab", 2, "lab")
          ], {
            verification: "verified",
            verificationLabel: "Verified from official CPS S3-S8 syllabus PDF",
            sourceNote: "Core subjects and labs were checked against the local CPS syllabus PDF."
          }),
          s("s4", "Semester 4", "file:///C:/Users/Abhijeet/Downloads/S3-S8%20CYBER%20PHYSICAL%20SYSTEM%20FINAL%20SYLLABUS.pdf", [
            c("GBMAT401", "Mathematics for Electrical Science-4", 3),
            c("PCCPT402", "Signal Processing for Robotics", 4),
            c("PCCPT403", "Soft Computing", 4),
            c("PBCPT404", "Introduction To Programming for CPS", 4),
            c("PECPT41N", "Program Elective I", 3, "elective"),
            c("UCHUT346/347", "Economics for Engineers / Engineering Ethics and Sustainable Development", 2, "humanities"),
            c("PCCPL407", "Computer Aided Modeling and Simulation of Mechanical Systems", 2, "lab"),
            c("PCCPL408", "Microcontrollers and IoT Laboratory", 2, "lab")
          ], {
            verification: "partial",
            verificationLabel: "Verified core subjects, elective kept generic",
            sourceNote: "Compulsory rows match the syllabus PDF. The program elective remains generic because students choose different options."
          }),
          s("s5", "Semester 5", "file:///C:/Users/Abhijeet/Downloads/S3-S8%20CYBER%20PHYSICAL%20SYSTEM%20FINAL%20SYLLABUS.pdf", [
            c("PCCPT501", "Control Systems", 4),
            c("PCCPT502", "Introduction to Wireless Communication", 4),
            c("PCCPT503", "Electric Drives and Control", 3),
            c("PBCPT504", "Fundamentals of Real Time Digital Signal Processing", 4),
            c("PECPT52N", "Program Elective II", 3, "elective"),
            c("PCCPL507", "DSP Lab", 2, "lab"),
            c("PCCPL508", "Cyber Physical Systems Lab", 2, "lab"),
            c("UCHUM506", "Constitution of India (MOOC)", 0, "audit")
          ], {
            verification: "partial",
            verificationLabel: "Verified core subjects, elective kept generic",
            sourceNote: "Compulsory rows match the syllabus PDF. The program elective remains generic because students choose different options."
          }),
          s("s6", "Semester 6", "file:///C:/Users/Abhijeet/Downloads/S3-S8%20CYBER%20PHYSICAL%20SYSTEM%20FINAL%20SYLLABUS.pdf", [
            c("PCCPT601", "Special Purpose Machines for Automation", 4),
            c("PCCPT602", "Communication for CPS", 3),
            c("PBCPT604", "Advanced Cyber Physical Systems", 4),
            c("PCCPL607", "Advanced Cyber Physical Systems Lab", 2, "lab"),
            c("PECPT63N", "Program Elective III", 3, "elective"),
            c("OECPT61N/IECPT61N", "Open Elective / Industry Elective I", 3, "elective"),
            c("HMC-S6", "Design Thinking and Creativity", 2, "humanities"),
            c("MINIPROJ", "Mini Project", 2, "project")
          ], {
            verification: "partial",
            verificationLabel: "Verified semester structure from official PDF",
            sourceNote: "Compulsory CPS rows and semester structure come from the local official syllabus PDF. Elective slots stay generic by design."
          }),
          s("s7", "Semester 7", "file:///C:/Users/Abhijeet/Downloads/S3-S8%20CYBER%20PHYSICAL%20SYSTEM%20FINAL%20SYLLABUS.pdf", [
            c("PECPT74N", "Program Elective IV", 3, "elective"),
            c("PECPT75N", "Program Elective V", 3, "elective"),
            c("OECPT72N/IECPT72N", "Open Elective / Industry Elective II", 3, "elective"),
            c("SEMINAR", "Seminar", 2, "project"),
            c("PCCPJ705/PCCPI705", "Major Project Phase I / Internship", 4, "project")
          ], {
            verification: "partial",
            verificationLabel: "Verified semester structure from official PDF",
            sourceNote: "Later-semester CPS structure is taken from the official PDF. Elective and project mode can vary by student choice."
          }),
          s("s8", "Semester 8", "file:///C:/Users/Abhijeet/Downloads/S3-S8%20CYBER%20PHYSICAL%20SYSTEM%20FINAL%20SYLLABUS.pdf", [
            c("PECPT86N", "Program Elective VI", 3, "elective"),
            c("OECPT83N/IECPT83N", "Open Elective / Industry Elective III", 3, "elective"),
            c("UEHUT803/UEHUM803", "Organizational Behavior and Business Communication", 2, "humanities"),
            c("PCCPP806/PCCPI806/PCCPJ806", "Major Project Phase II / Internship / Research Project", 4, "project")
          ], {
            verification: "partial",
            verificationLabel: "Verified semester structure from official PDF",
            sourceNote: "Later-semester CPS structure is taken from the official PDF. Elective and project mode can vary by student choice."
          })
        ],
        IT: [
          s("s1", "Semester 1", "https://www.ktunotes.in/ktu-s1-it-syllabus-2024-scheme/", COMMON_2024_A_S1),
          s("s2", "Semester 2", "https://www.ktunotes.in/ktu-s2-syllabus-2024-scheme/", COMMON_2024_A_S2),
          s("s3", "Semester 3", "https://www.ktunotes.in/ktu-btech-s3-syllabus-2024-scheme/", [
            c("MAT203", "Discrete Mathematics", 4),
            c("ITT201", "Data Structures", 4),
            c("ITT203", "Digital Systems", 4),
            c("ITT205", "Object Oriented Programming", 4),
            c("EST200", "Design and Engineering", 2, "design"),
            c("ITL201", "Programming and Data Structures Lab", 2, "lab"),
            c("MCN201", "Constitution of India", 0, "audit")
          ]),
          s("s4", "Semester 4", "https://www.ktunotes.in/ktu-s4-btech-syllabus-2024-scheme/", [
            c("MAT204", "Probability and Statistical Methods", 4),
            c("ITT202", "Computer Architecture", 4),
            c("ITT204", "Database Systems", 4),
            c("ITT206", "Operating Systems", 4),
            c("ITT208", "Web Technologies", 3),
            c("ITL202", "Database and Web Lab", 2, "lab")
          ])
        ],
        EEE: [
          s("s1", "Semester 1", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/eee-2024.pdf", COMMON_2024_B_S1, {
            verification: "verified",
            verificationLabel: "Matched to 2024 EEE curriculum PDF",
            sourceNote: "Semester 1 follows the mirrored APJAKTU 2024 EEE curriculum PDF. Slot B and Slot I remain official alternative rows."
          }),
          s("s2", "Semester 2", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/eee-2024.pdf", [
            c("GYMAT201", "Mathematics for Electrical Science-2", 3),
            c("GBPHT121/GXCYT122", "Physics for Electrical Science / Chemistry for Electrical Science", 4),
            c("GBEST213", "Engineering Mechanics", 3),
            c("GBEST204", "Programming in C", 4),
            c("PCEET205", "Measurements and Instrumentation", 4),
            c("UCEST206", "Engineering Entrepreneurship & IPR", 3),
            c("UCHWT127/UCHUT128", "Health and Wellness / Life Skills and Professional Communication", 1, "humanities", { gradeMode: "passfail" }),
            c("GXESL208", "IT Workshop", 1, "workshop"),
            c("UCSEM129", "Skill Enhancement Course: Digital 101 (NASSCOM)", 1, "audit", { gradeMode: "passfail" })
          ], {
            verification: "verified",
            verificationLabel: "Matched to 2024 EEE curriculum PDF",
            sourceNote: "Semester 2 subjects and credits were transcribed from the mirrored APJAKTU 2024 EEE curriculum PDF."
          }),
          s("s3", "Semester 3", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/eee-2024.pdf", [
            c("GYMAT301", "Mathematics for Electrical Science - 3", 3),
            c("PCEET302", "Circuits and Networks", 4),
            c("PCEET303", "DC Machines and Transformers", 4),
            c("PBEET304", "Analog Electronics", 4),
            c("GNEST305", "Introduction to Artificial Intelligence and Data Science", 4),
            c("UCHUT346/347", "Economics for Engineers / Engineering Ethics and Sustainable Development", 2, "humanities"),
            c("PCEEL307", "Circuits and Measurements Lab", 2, "lab"),
            c("PCEEL308", "Analog Electronics Lab", 2, "lab")
          ], {
            verification: "verified",
            verificationLabel: "Matched to 2024 EEE curriculum PDF",
            sourceNote: "Semester 3 subjects and credits were transcribed from the mirrored APJAKTU 2024 EEE curriculum PDF."
          }),
          s("s4", "Semester 4", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/eee-2024.pdf", [
            c("GBMAT401", "Mathematics for Electrical Science - 4", 3),
            c("PCEET402", "Synchronous and Induction Machines", 4),
            c("PCEET403", "Power Electronics and Drives", 4),
            c("PBEET404", "Digital Electronics", 4),
            c("PEEET41N", "PE-1", 3, "elective"),
            c("UCHUT346/347", "Economics for Engineers / Engineering Ethics and Sustainable Development", 2, "humanities"),
            c("PCEEL407", "DC Machines and Transformers Lab", 2, "lab"),
            c("PCEEL408", "Power Electronics and Drives Lab", 2, "lab")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 EEE curriculum PDF",
            sourceNote: "Semester 4 is aligned to the mirrored APJAKTU 2024 EEE curriculum PDF. The PE-1 slot remains generic until the elective is chosen."
          }),
          s("s5", "Semester 5", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/eee-2024.pdf", [
            c("PCEET501", "Power Generation, Transmission and Protection", 4),
            c("PCEET502", "Electromagnetic Theory", 4),
            c("PCEET503", "Signals & Systems", 3),
            c("PBEET504", "Microprocessor and Embedded Systems", 4),
            c("PEEET52N", "PE-2", 3, "elective"),
            c("UCHUM506", "Constitution Of India (MOOC)", 1, "audit", { gradeMode: "passfail" }),
            c("PCEEL507", "AC Machines Lab", 2, "lab"),
            c("PCEEL508", "Microprocessor and Embedded Systems Lab", 2, "lab")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 EEE curriculum PDF",
            sourceNote: "Semester 5 is aligned to the mirrored APJAKTU 2024 EEE curriculum PDF. The PE-2 slot remains generic until the elective is chosen."
          }),
          s("s6", "Semester 6", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/eee-2024.pdf", [
            c("PCEET601", "Control Systems", 4),
            c("PCEET602", "Electrical System Design and Estimation", 3),
            c("PEEET63N", "PE-3", 3, "elective"),
            c("PBEET604", "Power System Analysis", 4),
            c("GXEST605", "Design Thinking and Product Development", 2, "design"),
            c("OEEET61N/IEEET61N", "OE/ILE-1", 3, "elective"),
            c("PCEEL607", "Control Systems Lab", 2, "lab"),
            c("PCEEP608", "Mini Project: Socially Relevant Project", 2, "project"),
            c("PCEEL609", "Power Systems Lab", 1, "lab")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 EEE curriculum PDF",
            sourceNote: "Semester 6 matches the mirrored APJAKTU 2024 EEE curriculum PDF at the structure level. Elective slots remain generic by design."
          }),
          s("s7", "Semester 7", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/eee-2024.pdf", [
            c("PEEET74N/PEEEM74N", "PE-4", 3, "elective"),
            c("PEEET75N/PEEEM75N", "PE-5", 3, "elective"),
            c("OEEET72N/IEEET72N/OEEEM72N", "OE/ILE-2", 3, "elective"),
            c("UEHUT704/UEHUM70N", "University Elective", 2, "humanities"),
            c("PCEES705", "Seminar", 2, "project"),
            c("PCEEP706/PCEEI706", "Major Project / Internship", 4, "project")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 EEE curriculum PDF",
            sourceNote: "Semester 7 follows the official EEE semester structure in the mirrored PDF. Elective and internship pathways vary per student."
          }),
          s("s8", "Semester 8", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/eee-2024.pdf", [
            c("PEEET86N/PEEEM86N", "PE-6", 3, "elective"),
            c("OEEET83N/IEEET83N/OEEEM83N", "OE/ILE-3", 3, "elective"),
            c("UEHUT803/UEHUM803", "Organizational Behavior and Business Communication", 1, "humanities"),
            c("PCEEP806/PCEEI806/PCEEJ806", "Major Project / Internship / Major Project Phase-II", 4, "project")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 EEE curriculum PDF",
            sourceNote: "Semester 8 follows the official EEE semester structure in the mirrored PDF. Elective and project pathways vary per student."
          })
        ],
        ME: [
          s("s1", "Semester 1", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/me-2024.pdf", COMMON_2024_C_S1, {
            verification: "verified",
            verificationLabel: "Matched to 2024 Mechanical curriculum PDF",
            sourceNote: "Semester 1 follows the mirrored APJAKTU 2024 Mechanical Engineering curriculum PDF. Slot B and Slot I remain official alternative rows."
          }),
          s("s2", "Semester 2", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/me-2024.pdf", [
            c("GYMAT201", "Mathematics for Physical Science-2", 3),
            c("GZPHT121/GCCYT122", "Physics for Physical Science / Chemistry for Physical Science", 4),
            c("GCEST203", "Engineering Graphics and Computer Aided Drawing", 3, "studio"),
            c("GZEST204", "Basic Electrical & Electronics Engineering", 4),
            c("PCMET205", "Material Science and Engineering", 4),
            c("UCEST206", "Engineering Entrepreneurship & IPR", 3),
            c("UCHWT127/UCHUT128", "Health and Wellness / Life Skills and Professional Communication", 1, "humanities", { gradeMode: "passfail" }),
            c("GZESL208", "Basic Electrical and Electronics Engineering workshop", 1, "workshop"),
            c("UCSEM129", "Skill Enhancement Course: Digital 101 (NASSCOM)", 1, "audit", { gradeMode: "passfail" })
          ], {
            verification: "verified",
            verificationLabel: "Matched to 2024 Mechanical curriculum PDF",
            sourceNote: "Semester 2 subjects and credits were transcribed from the mirrored APJAKTU 2024 Mechanical Engineering curriculum PDF."
          }),
          s("s3", "Semester 3", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/me-2024.pdf", [
            c("GYMAT301", "Mathematics for Physical Science-3", 3),
            c("PCMET302", "Mechanics of Solids", 4),
            c("PCMET303", "Fluid Mechanics and Machinery", 4),
            c("PBMET304", "Manufacturing Processes", 4),
            c("GNEST305", "Introduction to Artificial Intelligence and Data Science", 4),
            c("UCHUT346/347", "Economics for Engineers / Engineering Ethics and Sustainable Development", 2, "humanities"),
            c("PCMEL307", "Computer Aided Machine Drawing & Modelling", 2, "lab"),
            c("PCMEL308", "Materials Testing lab", 2, "lab")
          ], {
            verification: "verified",
            verificationLabel: "Matched to 2024 Mechanical curriculum PDF",
            sourceNote: "Semester 3 subjects and credits were transcribed from the mirrored APJAKTU 2024 Mechanical Engineering curriculum PDF."
          }),
          s("s4", "Semester 4", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/me-2024.pdf", [
            c("GCMAT401", "Mathematics for Physical Science-4", 3),
            c("PCMET402", "Machine Tools and Metrology", 4),
            c("PCMET403", "Engineering Thermodynamics", 4),
            c("PBMET404", "Mechanics of Machinery", 4),
            c("PEMET41N", "Elective-1", 3, "elective"),
            c("UCHUT346/347", "Economics for Engineers / Engineering Ethics and Sustainable Development", 2, "humanities"),
            c("PCMEL407", "Fluid Mechanics and Hydraulic Machines Lab", 2, "lab"),
            c("PCMEL408", "Manufacturing Technology Lab", 2, "lab")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 Mechanical curriculum PDF",
            sourceNote: "Semester 4 is aligned to the mirrored APJAKTU 2024 Mechanical Engineering curriculum PDF. The PE-1 slot remains generic until the elective is chosen."
          }),
          s("s5", "Semester 5", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/me-2024.pdf", [
            c("PCMET501", "Dynamics of Machinery", 4),
            c("PCMET502", "Advanced Manufacturing Engineering", 4),
            c("PCMET503", "Heat and Mass Transfer", 3),
            c("PBMET504", "Management for Engineers", 4),
            c("PEMET52N", "Elective-2", 3, "elective"),
            c("UCHUM506", "Constitution Of India (MOOC)", 1, "audit", { gradeMode: "passfail" }),
            c("PCMEL507", "Thermal Engineering Lab-1", 2, "lab"),
            c("PCMEL508", "Mechanical Engineering Lab", 2, "lab")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 Mechanical curriculum PDF",
            sourceNote: "Semester 5 is aligned to the mirrored APJAKTU 2024 Mechanical Engineering curriculum PDF. The PE-2 slot remains generic until the elective is chosen."
          }),
          s("s6", "Semester 6", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/me-2024.pdf", [
            c("PCMET601", "Industrial and Systems Engineering", 3),
            c("PCMET602", "Machine Design", 3),
            c("PEMET63N", "Elective-3", 3, "elective"),
            c("PBMET604", "Thermal Engineering", 4),
            c("GZEST605", "Design Thinking and Product Development", 2, "design"),
            c("OEMET61N/IEMET61N", "Open Elective/Industry Linked Elective-1", 3, "elective"),
            c("PCMEL607", "Computer Aided Design and Analysis Lab", 2, "lab"),
            c("PCMEP608", "Mini Project: Socially Relevant Project", 2, "project"),
            c("PCMEL609", "Thermal engineering Lab-2", 1, "lab")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 Mechanical curriculum PDF",
            sourceNote: "Semester 6 matches the mirrored APJAKTU 2024 Mechanical Engineering curriculum PDF at the structure level. Elective slots remain generic by design."
          }),
          s("s7", "Semester 7", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/me-2024.pdf", [
            c("PEMET74N/PEMEM74N", "Elective-4", 3, "elective"),
            c("PEMET75N/PEMEM75N", "Elective-5", 3, "elective"),
            c("OEMET72N/IEMET72N/OEMEM72N", "Open Elective/Industry Linked Elective-2", 3, "elective"),
            c("UEHUT704/UEHUM70N", "University Elective", 2, "humanities"),
            c("PCMES705", "Seminar", 2, "project"),
            c("PCMEP706/PCMEI706", "Major Project / Internship", 4, "project")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 Mechanical curriculum PDF",
            sourceNote: "Semester 7 follows the official Mechanical semester structure in the mirrored PDF. Elective and internship pathways vary per student."
          }),
          s("s8", "Semester 8", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/me-2024.pdf", [
            c("PEMET86N/PEMEM86N", "Elective-6", 3, "elective"),
            c("OEMET83N/IEMET83N/OEMEM83N", "Open Elective/Industry Linked Elective-3", 3, "elective"),
            c("UEHUT803/UEHUM803", "Organizational Behavior and Business Communication", 1, "humanities"),
            c("PCMEP806/PCMEI806/PCMEJ806", "Major Project / Internship / Major Project Phase-II", 4, "project")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 Mechanical curriculum PDF",
            sourceNote: "Semester 8 follows the official Mechanical semester structure in the mirrored PDF. Elective and project pathways vary per student."
          })
        ],
        CIVIL: [
          s("s1", "Semester 1", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/civil-2024.pdf", COMMON_2024_C_S1, {
            verification: "verified",
            verificationLabel: "Matched to 2024 Civil curriculum PDF",
            sourceNote: "Semester 1 follows the mirrored APJAKTU 2024 Civil Engineering curriculum PDF. Slot B and Slot I remain official alternative rows."
          }),
          s("s2", "Semester 2", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/civil-2024.pdf", [
            c("GYMAT201", "Mathematics for Physical Science-2", 3),
            c("GZPHT121/GCCYT122", "Physics for Physical Science / Chemistry for Physical Science", 4),
            c("GCEST203", "Engineering Graphics and Computer Aided Drawing", 3, "studio"),
            c("GZEST204", "Basic Electrical & Electronics Engineering", 4),
            c("PCCET205", "Mechanics of Solids", 4),
            c("UCEST206", "Engineering Entrepreneurship & IPR", 3),
            c("UCHWT127/UCHUT128", "Health and Wellness / Life Skills and Professional Communication", 1, "humanities", { gradeMode: "passfail" }),
            c("PCCEL218", "Civil Engineering Drafting lab", 1, "lab"),
            c("UCSEM129", "Skill Enhancement Course: Digital 101 (NASSCOM)", 1, "audit", { gradeMode: "passfail" })
          ], {
            verification: "verified",
            verificationLabel: "Matched to 2024 Civil curriculum PDF",
            sourceNote: "Semester 2 subjects and credits were transcribed from the mirrored APJAKTU 2024 Civil Engineering curriculum PDF."
          }),
          s("s3", "Semester 3", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/civil-2024.pdf", [
            c("GYMAT301", "Mathematics for Physical Science-3", 3),
            c("PCCET302", "Fluid mechanics", 4),
            c("PCCET303", "Structural analysis-I", 4),
            c("PBCET304", "Surveying & Geomatics", 4),
            c("GNEST305", "Introduction to Artificial Intelligence and Data Science", 4),
            c("UCHUT346/347", "Economics for Engineers / Engineering Ethics and Sustainable Development", 2, "humanities"),
            c("PCCEL307", "Survey Lab", 2, "lab"),
            c("PCCEL308", "Fluid mechanics Lab", 2, "lab")
          ], {
            verification: "verified",
            verificationLabel: "Matched to 2024 Civil curriculum PDF",
            sourceNote: "Semester 3 subjects and credits were transcribed from the mirrored APJAKTU 2024 Civil Engineering curriculum PDF."
          }),
          s("s4", "Semester 4", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/civil-2024.pdf", [
            c("GCMAT401", "Mathematics for Physical Science-4", 3),
            c("PCCET402", "Soil mechanics", 4),
            c("PCCET403", "Structural analysis-II", 4),
            c("PBCET404", "Design of concrete structures", 4),
            c("PECET41N", "PE-1", 3, "elective"),
            c("UCHUT346/347", "Economics for Engineers / Engineering Ethics and Sustainable Development", 2, "humanities"),
            c("PCCEL407", "Materials testing lab", 2, "lab"),
            c("PCCEL408", "Civil engineering modelling Lab", 2, "lab")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 Civil curriculum PDF",
            sourceNote: "Semester 4 is aligned to the mirrored APJAKTU 2024 Civil Engineering curriculum PDF. The PE-1 slot remains generic until the elective is chosen."
          }),
          s("s5", "Semester 5", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/civil-2024.pdf", [
            c("PCCET501", "Hydrology & water resources engineering", 4),
            c("PCCET502", "Transportation engineering", 4),
            c("PCCET503", "Environmental engineering", 3),
            c("PBCET504", "Foundation engineering", 4),
            c("PECET52N", "PE-2", 3, "elective"),
            c("UCHUM506", "Constitution of India (MOOC)", 1, "audit", { gradeMode: "passfail" }),
            c("PCCEL507", "Geotechnical engineering lab", 2, "lab"),
            c("PCCEL508", "Concrete lab (MT-2)", 2, "lab")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 Civil curriculum PDF",
            sourceNote: "Semester 5 is aligned to the mirrored APJAKTU 2024 Civil Engineering curriculum PDF. The PE-2 slot remains generic until the elective is chosen."
          }),
          s("s6", "Semester 6", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/civil-2024.pdf", [
            c("PCCET601", "Quantity surveying & valuation", 3),
            c("PCCET602", "Design of steel structures", 3),
            c("PECET63N", "PE-3", 3, "elective"),
            c("PBCET604", "Construction project management", 4),
            c("GCEST605", "Design Thinking and Product Development", 2, "design"),
            c("OECET61N/IECET61N", "OE/ILE-1", 3, "elective"),
            c("PCCEL607", "Transportation engineering lab", 2, "lab"),
            c("PCCEP608", "Mini Project: Socially Relevant Project", 2, "project"),
            c("PCCEL609", "Environmental engineering lab", 1, "lab")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 Civil curriculum PDF",
            sourceNote: "Semester 6 matches the mirrored APJAKTU 2024 Civil Engineering curriculum PDF at the structure level. Elective slots remain generic by design."
          }),
          s("s7", "Semester 7", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/civil-2024.pdf", [
            c("PECET74N/PECEM74N", "PE-4", 3, "elective"),
            c("PECET75N/PECEM75N", "PE-5", 3, "elective"),
            c("OECET72N/IECET72N/OECEM72N", "OE/ILE-2", 3, "elective"),
            c("UEHUT704/UEHUM70N", "University Elective", 2, "humanities"),
            c("PCCES705", "Seminar", 2, "project"),
            c("PCCEP706/PCCEI706", "Major Project / Internship", 4, "project")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 Civil curriculum PDF",
            sourceNote: "Semester 7 follows the official Civil semester structure in the mirrored PDF. Elective and internship pathways vary per student."
          }),
          s("s8", "Semester 8", "file:///C:/Users/Abhijeet/Documents/Codex/2026-04-19-build-me-an-app-to-publish/official-audit/2024/civil-2024.pdf", [
            c("PECET86N/PECEM86N", "PE-6", 3, "elective"),
            c("OECET83N/IECET83N/OECEM83N", "OE/ILE-3", 3, "elective"),
            c("UEHUT803/UEHUM803", "Organizational Behavior and Business Communication", 1, "humanities"),
            c("PCCEP806/PCCEI806/PCCEJ806", "Major Project / Internship / Major Project Phase-II", 4, "project")
          ], {
            verification: "partial",
            verificationLabel: "Verified structure from 2024 Civil curriculum PDF",
            sourceNote: "Semester 8 follows the official Civil semester structure in the mirrored PDF. Elective and project pathways vary per student."
          })
        ],
        CHEM: [
          s("s1", "Semester 1", "https://www.scribd.com/document/894410848/Chemical-Engineering", COMMON_2024_C_S1, {
            verification: "secondary",
            verificationLabel: "Matched to mirrored APJAKTU 2024 Chemical curriculum",
            sourceNote: "Semester 1 follows the APJAKTU B.Tech Chemical Engineering Curriculum 2024 mirror. The public KTU scheme page is JavaScript-rendered, so this is marked as a mirrored official document rather than a direct KTU-hosted PDF."
          }),
          s("s2", "Semester 2", "https://www.scribd.com/document/894410848/Chemical-Engineering", [
            c("GYMAT201", "Mathematics for Physical Science-2", 3),
            c("GZPHT121/GCCYT122", "Physics for Physical Science / Chemistry for Physical Science", 4),
            c("GCEST203", "Engineering Graphics and Computer Aided Drawing", 3, "studio"),
            c("GZEST204", "Basic Electrical & Electronics Engineering", 4),
            c("PCCHT205", "Process Calculations", 4),
            c("UCEST206", "Engineering Entrepreneurship & IPR", 3),
            c("UCHWT127/UCHUT128", "Health and Wellness / Life Skills and Professional Communication", 1, "humanities", { gradeMode: "passfail" }),
            c("GZESL208", "Basic Electrical and Electronics Engineering Workshop", 1, "workshop"),
            c("UCSEM129", "Skill Enhancement Course: Digital 101 (NASSCOM)", 1, "audit", { gradeMode: "passfail" })
          ], {
            verification: "secondary",
            verificationLabel: "Matched to mirrored APJAKTU 2024 Chemical curriculum",
            sourceNote: "Semester 2 subjects and default credits follow the APJAKTU 2024 Chemical Engineering curriculum mirror. NASSCOM remains in S2 because its credit is officially recorded in the second semester grade card."
          }),
          s("s3", "Semester 3", "https://www.scribd.com/document/894410848/Chemical-Engineering", [
            c("GYMAT301", "Mathematics for Physical Science-3", 3),
            c("PCCHT302", "Particle Technology", 4),
            c("PCCHT303", "Chemical Engineering Thermodynamics", 4),
            c("PBCHT304", "Fluid and Particle Mechanics", 4),
            c("GNEST305", "Introduction to Artificial Intelligence and Data Science", 4),
            c("UCHUT346/UCHUT347", "Economics for Engineers / Engineering Ethics and Sustainable Development", 2, "humanities"),
            c("PCCHL307", "Chemical Technology and Environmental Engineering Lab", 2, "lab"),
            c("PCCHL308", "Fluid and Particle Mechanics Lab", 2, "lab")
          ], {
            verification: "secondary",
            verificationLabel: "Matched to mirrored APJAKTU 2024 Chemical curriculum",
            sourceNote: "Semester 3 subjects and credits were transcribed from the APJAKTU 2024 Chemical Engineering curriculum mirror."
          }),
          s("s4", "Semester 4", "https://www.scribd.com/document/894410848/Chemical-Engineering", [
            c("GCMAT401", "Mathematics for Physical Science-4", 3),
            c("PCCHT402", "Heat Transfer Operations", 4),
            c("PCCHT403", "Mass Transfer Operation-I", 4),
            c("PBCHT404", "Environmental Engineering", 4),
            c("PECHT41N", "PE-1", 3, "elective"),
            c("UCHUT346/UCHUT347", "Economics for Engineers / Engineering Ethics and Sustainable Development", 2, "humanities"),
            c("PCCHL407", "Particle Technology Lab", 2, "lab"),
            c("PCCHL408", "Heat Transfer Operations Lab", 2, "lab")
          ], {
            verification: "secondary",
            verificationLabel: "Matched to mirrored APJAKTU 2024 Chemical curriculum",
            sourceNote: "Semester 4 is aligned to the APJAKTU 2024 Chemical Engineering curriculum mirror. PE-1 remains generic until the elective is chosen."
          }),
          s("s5", "Semester 5", "https://www.scribd.com/document/894410848/Chemical-Engineering", [
            c("PCCHT501", "Mass Transfer Operation-II", 4),
            c("PCCHT502", "Chemical Technology", 4),
            c("PCCHT503", "Chemical Reaction Engineering", 3),
            c("PBCHT504", "Chemical Engineering Design-I", 4),
            c("PECHT52N", "PE-2", 3, "elective"),
            c("UCHUM506", "Constitution of India (MOOC)", 1, "audit", { gradeMode: "passfail" }),
            c("PCCHL507", "Chemical Reaction Engineering Lab", 2, "lab"),
            c("PCCHL508", "Mass Transfer Operation Lab", 2, "lab")
          ], {
            verification: "secondary",
            verificationLabel: "Matched to mirrored APJAKTU 2024 Chemical curriculum",
            sourceNote: "Semester 5 is aligned to the APJAKTU 2024 Chemical Engineering curriculum mirror. PE-2 remains generic until the elective is chosen."
          }),
          s("s6", "Semester 6", "https://www.scribd.com/document/894410848/Chemical-Engineering", [
            c("PCCHT601", "Chemical Engineering Design-II", 4),
            c("PCCHT602", "Transport Phenomena", 3),
            c("PECHT63N", "PE-3", 3, "elective"),
            c("PBCHT604", "Process Dynamics and Control", 4),
            c("GYEST605", "Design Thinking and Product Development", 2, "design"),
            c("OECHT61N/IECHT61N", "OE/ILE-1", 3, "elective"),
            c("PCCHL607", "Process Simulation Lab", 2, "lab"),
            c("PCCHP608", "Mini Project: Socially Relevant Project", 2, "project")
          ], {
            verification: "secondary",
            verificationLabel: "Matched to mirrored APJAKTU 2024 Chemical curriculum",
            sourceNote: "Semester 6 matches the APJAKTU 2024 Chemical Engineering curriculum mirror at the structure level. Elective slots remain generic by design."
          }),
          s("s7", "Semester 7", "https://www.scribd.com/document/894410848/Chemical-Engineering", [
            c("PECHT74N/PECHM74N", "PE-4", 3, "elective"),
            c("PECHT75N/PECHM75N", "PE-5", 3, "elective"),
            c("OECHT72N/IECHT72N/OECHM72N", "OE/ILE-2", 3, "elective"),
            c("UEHUT704/UEHUM70N", "University Elective", 2, "humanities"),
            c("PCCHS705", "Seminar", 2, "project"),
            c("PCCHP706/PCCHI706", "Major Project / Internship", 4, "project")
          ], {
            verification: "secondary",
            verificationLabel: "Matched to mirrored APJAKTU 2024 Chemical curriculum",
            sourceNote: "Semester 7 follows the APJAKTU 2024 Chemical Engineering curriculum mirror. Elective and internship pathways vary per student."
          }),
          s("s8", "Semester 8", "https://www.scribd.com/document/894410848/Chemical-Engineering", [
            c("PECHT86N/PECHM86N", "PE-6", 3, "elective"),
            c("OECHT83N/IECHT83N/OECHM83N", "OE/ILE-3", 3, "elective"),
            c("UEHUT803/UEHUM803", "Organizational Behavior and Business Communication", 1, "humanities"),
            c("PCCHP806/PCCHI806/PCCHJ806", "Major Project / Internship / Major Project Phase-II", 4, "project")
          ], {
            verification: "secondary",
            verificationLabel: "Matched to mirrored APJAKTU 2024 Chemical curriculum",
            sourceNote: "Semester 8 follows the APJAKTU 2024 Chemical Engineering curriculum mirror. Elective and project pathways vary per student."
          })
        ]
      }
    },
    "2019": {
      label: "2019 Scheme",
      branches: {
        ECE: [
          s("s1", "Semester 1", "https://www.ktunotes.in/ktu-btech-s1-2019-syllabus/", COMMON_2019_S1),
          s("s2", "Semester 2", "https://www.ktunotes.in/ktu-s2-2019-syllabus/", COMMON_2019_S2),
          s("s3", "Semester 3", "https://www.ktunotes.in/ktu-s3-ece-2019-syllabus/", [
            c("ECT201", "Network Theory", 4),
            c("ECT203", "Solid State Devices", 4),
            c("ECT205", "Analog Electronic Circuits", 4),
            c("ECT207", "Logic Circuit Design", 4),
            c("MAT203", "Complex Functions and Partial Differential Equations", 4),
            c("EST200", "Design and Engineering", 2, "design"),
            c("MCN201", "Constitution of India", 0, "audit")
          ]),
          s("s4", "Semester 4", "https://www.ktunotes.in/ktu-s4-ece-2019-syllabus/", [
            c("ECT202", "Signals and Systems", 4),
            c("ECT204", "Electronic Circuit Design", 4),
            c("ECT206", "Digital System Design", 4),
            c("ECT208", "Electromagnetic Theory", 4),
            c("MAT206", "Probability, Statistics and Stochastic Processes", 4),
            c("ECL202", "Circuits and Systems Lab", 2, "lab")
          ]),
          s("s5", "Semester 5", "https://www.ktunotes.in/ktu-s5-ece-2019-syllabus/", [
            c("ECT301", "Analog Communication", 4),
            c("ECT303", "Microprocessors and Microcontrollers", 4),
            c("ECT305", "Linear Integrated Circuits", 4),
            c("ECT307", "Electromagnetic Waves and Transmission Lines", 4),
            c("ECT309", "Management of Electronics Projects", 3),
            c("ECL331", "Communication and Microcontroller Lab", 2, "lab")
          ]),
          s("s6", "Semester 6", "https://www.ktunotes.in/ktu-s6-ece-2019-syllabus/", [
            c("ECT302", "Digital Communication", 4),
            c("ECT304", "VLSI", 4),
            c("ECT306", "Antenna and Wave Propagation", 4),
            c("ECT308", "Embedded Systems", 4),
            c("ECT310", "Control Systems", 3),
            c("ECL332", "Digital Communication and Embedded Lab", 2, "lab")
          ]),
          s("s7", "Semester 7", "https://www.ktunotes.in/ktu-s7-ece-2019-syllabus/", [
            c("ECT401", "Microwave and Radar Engineering", 4),
            c("ECT403", "Optical Communication", 3),
            c("ECT405", "Wireless Communication", 3),
            c("ECT407", "Elective I", 3, "elective"),
            c("ECT409", "Elective II", 3, "elective"),
            c("ECD415", "Project Phase I / Seminar", 4, "project")
          ]),
          s("s8", "Semester 8", "https://www.ktunotes.in/ktu-s8-ece-2019-syllabus/", [
            c("ECT402", "Information Theory and Coding", 3),
            c("ECT404", "Elective III", 3, "elective"),
            c("ECT406", "Elective IV", 3, "elective"),
            c("ECD416", "Project Phase II", 6, "project"),
            c("ECD418", "Comprehensive Viva / Industry Interaction", 2, "viva")
          ])
        ],
        CSE: [
          s("s1", "Semester 1", "https://www.ktunotes.in/ktu-btech-s1-2019-syllabus/", COMMON_2019_S1),
          s("s2", "Semester 2", "https://www.ktunotes.in/ktu-s2-2019-syllabus/", COMMON_2019_S2),
          s("s3", "Semester 3", "https://www.ktunotes.in/ktu-s3-cse-2019-syllabus/", [
            c("CST201", "Data Structures", 4),
            c("CST203", "Logic System Design", 4),
            c("CST205", "Object Oriented Programming using Java", 4),
            c("CST207", "Discrete Computational Structures", 4),
            c("EST200", "Design and Engineering", 2, "design"),
            c("MCN201", "Constitution of India", 0, "audit"),
            c("MAT203", "Discrete Mathematical Structures", 4)
          ]),
          s("s4", "Semester 4", "https://www.ktunotes.in/ktu-s4-2019-syllabus/", [
            c("CST202", "Computer Organization and Architecture", 4),
            c("CST204", "Database Management Systems", 4),
            c("CST206", "Operating Systems", 4),
            c("CST208", "Design and Analysis of Algorithms", 4),
            c("MAT206", "Graph Theory and Linear Algebra", 4),
            c("CSL202", "Database and Programming Lab", 2, "lab")
          ]),
          s("s5", "Semester 5", "https://www.ktunotes.in/ktu-s5-2019-syllabus/", [
            c("CST301", "Formal Languages and Automata Theory", 4),
            c("CST303", "Computer Networks", 4),
            c("CST305", "System Software", 4),
            c("CST307", "Microprocessors and Microcontrollers", 4),
            c("CST309", "Software Engineering and Project Management", 3),
            c("CSL331", "System Software and Microprocessor Lab", 2, "lab")
          ]),
          s("s6", "Semester 6", "https://www.ktunotes.in/ktu-s6-2019-syllabus/", [
            c("CST302", "Compiler Design", 4),
            c("CST304", "Computer Graphics and Image Processing", 4),
            c("CST306", "Data Mining and Warehousing", 4),
            c("CST308", "Embedded Systems", 4),
            c("CST310", "Principles of Management", 3),
            c("CSL332", "Network Programming Lab", 2, "lab")
          ]),
          s("s7", "Semester 7", "https://www.ktunotes.in/ktu-s7-syllabus-2019-scheme/", [
            c("CST401", "Artificial Intelligence", 4),
            c("CST403", "Web Programming", 3),
            c("CST405", "Mobile Computing", 3),
            c("CST407", "Elective I", 3, "elective"),
            c("CST409", "Elective II", 3, "elective"),
            c("CSD415", "Project Phase I / Seminar", 4, "project")
          ]),
          s("s8", "Semester 8", "https://www.ktunotes.in/ktu-s8-syllabus-2019-scheme/", [
            c("CST402", "Distributed Computing", 3),
            c("CST404", "Elective III", 3, "elective"),
            c("CST406", "Elective IV", 3, "elective"),
            c("CSD416", "Project Phase II", 6, "project"),
            c("CSD418", "Comprehensive Viva", 2, "viva")
          ])
        ],
        IT: [
          s("s1", "Semester 1", "https://www.ktunotes.in/ktu-btech-s1-2019-syllabus/", COMMON_2019_S1),
          s("s2", "Semester 2", "https://www.ktunotes.in/ktu-s2-2019-syllabus/", COMMON_2019_S2),
          s("s3", "Semester 3", "https://www.ktunotes.in/ktu-it-s3-syllabus-2019-scheme/", [
            c("ITT201", "Data Structures", 4),
            c("ITT203", "Digital Systems", 4),
            c("ITT205", "Object Oriented Programming", 4),
            c("ITT207", "Discrete Structures", 4),
            c("EST200", "Design and Engineering", 2, "design"),
            c("MCN201", "Constitution of India", 0, "audit"),
            c("MAT203", "Discrete Mathematics", 4)
          ]),
          s("s4", "Semester 4", "https://www.ktunotes.in/ktu-s4-2019-syllabus/", [
            c("ITT202", "Computer Architecture", 4),
            c("ITT204", "Database Management Systems", 4),
            c("ITT206", "Operating Systems", 4),
            c("ITT208", "Web Technologies", 4),
            c("MAT206", "Probability and Statistics", 4),
            c("ITL202", "Database and Web Lab", 2, "lab")
          ]),
          s("s5", "Semester 5", "https://www.ktunotes.in/ktu-s5-2019-syllabus/", [
            c("ITT301", "Computer Networks", 4),
            c("ITT303", "Software Engineering", 4),
            c("ITT305", "Data Analytics", 4),
            c("ITT307", "Microprocessors and Embedded Interfaces", 4),
            c("ITT309", "Information Security", 3),
            c("ITL331", "Network and Analytics Lab", 2, "lab")
          ]),
          s("s6", "Semester 6", "https://www.ktunotes.in/ktu-s6-2019-syllabus/", [
            c("ITT302", "Compiler Design", 4),
            c("ITT304", "Mobile Application Development", 4),
            c("ITT306", "Cloud Computing", 4),
            c("ITT308", "Data Warehousing and Mining", 4),
            c("ITT310", "Principles of Management", 3),
            c("ITL332", "Mobile and Cloud Lab", 2, "lab")
          ]),
          s("s7", "Semester 7", "https://www.ktunotes.in/ktu-s7-syllabus-2019-scheme/", [
            c("ITT401", "Machine Learning", 4),
            c("ITT403", "Enterprise Computing", 3),
            c("ITT405", "Internet of Things", 3),
            c("ITT407", "Elective I", 3, "elective"),
            c("ITT409", "Elective II", 3, "elective"),
            c("ITD415", "Project Phase I / Seminar", 4, "project")
          ]),
          s("s8", "Semester 8", "https://www.ktunotes.in/ktu-s8-syllabus-2019-scheme/", [
            c("ITT402", "Distributed Information Systems", 3),
            c("ITT404", "Elective III", 3, "elective"),
            c("ITT406", "Elective IV", 3, "elective"),
            c("ITD416", "Project Phase II", 6, "project"),
            c("ITD418", "Comprehensive Viva", 2, "viva")
          ])
        ],
        EEE: [
          s("s1", "Semester 1", "https://www.ktunotes.in/ktu-btech-s1-2019-syllabus/", COMMON_2019_S1),
          s("s2", "Semester 2", "https://www.ktunotes.in/ktu-s2-2019-syllabus/", COMMON_2019_S2),
          s("s3", "Semester 3", "https://www.ktunotes.in/ktu-s3-eee-2019-syllabus/", [
            c("EET201", "Circuit Theory", 4),
            c("EET203", "Solid State Devices", 4),
            c("EET205", "DC Machines and Transformers", 4),
            c("EET207", "Electrical Measurements and Instrumentation", 4),
            c("MAT203", "Complex Functions and Partial Differential Equations", 4),
            c("EST200", "Design and Engineering", 2, "design"),
            c("MCN201", "Constitution of India", 0, "audit")
          ]),
          s("s4", "Semester 4", "https://www.ktunotes.in/ktu-s4-2019-syllabus/", [
            c("EET202", "Network Theory", 4),
            c("EET204", "AC Machines", 4),
            c("EET206", "Analog Electronic Circuits", 4),
            c("EET208", "Digital Electronics", 4),
            c("MAT206", "Probability, Statistics and Stochastic Processes", 4),
            c("EEL202", "Machines and Circuits Lab", 2, "lab")
          ]),
          s("s5", "Semester 5", "https://www.ktunotes.in/ktu-s5-2019-syllabus/", [
            c("EET301", "Power Systems I", 4),
            c("EET303", "Synchronous and Induction Machines", 4),
            c("EET305", "Microprocessors and Microcontrollers", 4),
            c("EET307", "Control Systems", 4),
            c("EET309", "Power Electronics", 3),
            c("EEL331", "Machines and Power Electronics Lab", 2, "lab")
          ]),
          s("s6", "Semester 6", "https://www.ktunotes.in/ktu-s6-2019-syllabus/", [
            c("EET302", "Power Systems II", 4),
            c("EET304", "Electrical Drives", 4),
            c("EET306", "Embedded Systems", 4),
            c("EET308", "Electrical System Design", 4),
            c("EET310", "Principles of Management", 3),
            c("EEL332", "Drives and Embedded Lab", 2, "lab")
          ]),
          s("s7", "Semester 7", "https://www.ktunotes.in/ktu-s7-syllabus-2019-scheme/", [
            c("EET401", "High Voltage Engineering", 4),
            c("EET403", "Renewable Energy Systems", 3),
            c("EET405", "Utilization of Electrical Energy", 3),
            c("EET407", "Elective I", 3, "elective"),
            c("EET409", "Elective II", 3, "elective"),
            c("EED415", "Project Phase I / Seminar", 4, "project")
          ]),
          s("s8", "Semester 8", "https://www.ktunotes.in/ktu-s8-syllabus-2019-scheme/", [
            c("EET402", "Smart Grid", 3),
            c("EET404", "Elective III", 3, "elective"),
            c("EET406", "Elective IV", 3, "elective"),
            c("EED416", "Project Phase II", 6, "project"),
            c("EED418", "Comprehensive Viva", 2, "viva")
          ])
        ],
        ME: [
          s("s1", "Semester 1", "https://www.ktunotes.in/ktu-btech-s1-2019-syllabus/", COMMON_2019_S1),
          s("s2", "Semester 2", "https://www.ktunotes.in/ktu-s2-2019-syllabus/", COMMON_2019_S2),
          s("s3", "Semester 3", "https://www.ktunotes.in/ktu-s3-me-2019-syllabus/", [
            c("MET201", "Engineering Thermodynamics", 4),
            c("MET203", "Fluid Mechanics and Machinery", 4),
            c("MET205", "Mechanics of Solids", 4),
            c("MET207", "Material Science and Metallurgy", 4),
            c("MAT203", "Complex Functions and Partial Differential Equations", 4),
            c("EST200", "Design and Engineering", 2, "design"),
            c("MCN201", "Constitution of India", 0, "audit")
          ]),
          s("s4", "Semester 4", "https://www.ktunotes.in/ktu-s4-2019-syllabus/", [
            c("MET202", "Manufacturing Technology", 4),
            c("MET204", "Thermal Engineering", 4),
            c("MET206", "Mechanics of Machines", 4),
            c("MET208", "Instrumentation and Control", 4),
            c("MAT206", "Probability and Numerical Methods", 4),
            c("MEL202", "Manufacturing and Thermal Lab", 2, "lab")
          ]),
          s("s5", "Semester 5", "https://www.ktunotes.in/ktu-s5-2019-syllabus/", [
            c("MET301", "Heat and Mass Transfer", 4),
            c("MET303", "Advanced Manufacturing Technology", 4),
            c("MET305", "Machine Design I", 4),
            c("MET307", "Dynamics of Machinery", 4),
            c("MET309", "Industrial Engineering", 3),
            c("MEL331", "Machine Tools and CAD Lab", 2, "lab")
          ]),
          s("s6", "Semester 6", "https://www.ktunotes.in/ktu-s6-2019-syllabus/", [
            c("MET302", "Automobile Engineering", 4),
            c("MET304", "Computer Integrated Manufacturing", 4),
            c("MET306", "Machine Design II", 4),
            c("MET308", "Refrigeration and Air Conditioning", 4),
            c("MET310", "Principles of Management", 3),
            c("MEL332", "Thermal and Simulation Lab", 2, "lab")
          ]),
          s("s7", "Semester 7", "https://www.ktunotes.in/ktu-s7-syllabus-2019-scheme/", [
            c("MET401", "Finite Element Methods", 4),
            c("MET403", "Mechatronics", 3),
            c("MET405", "Operations Research", 3),
            c("MET407", "Elective I", 3, "elective"),
            c("MET409", "Elective II", 3, "elective"),
            c("MED415", "Project Phase I / Seminar", 4, "project")
          ]),
          s("s8", "Semester 8", "https://www.ktunotes.in/ktu-s8-syllabus-2019-scheme/", [
            c("MET402", "Composite Materials", 3),
            c("MET404", "Elective III", 3, "elective"),
            c("MET406", "Elective IV", 3, "elective"),
            c("MED416", "Project Phase II", 6, "project"),
            c("MED418", "Comprehensive Viva", 2, "viva")
          ])
        ],
        CIVIL: [
          s("s1", "Semester 1", "https://www.ktunotes.in/ktu-btech-s1-2019-syllabus/", COMMON_2019_S1),
          s("s2", "Semester 2", "https://www.ktunotes.in/ktu-s2-2019-syllabus/", COMMON_2019_S2),
          s("s3", "Semester 3", "https://www.ktunotes.in/ktu-s3-civil-2019-syllabus/", [
            c("CET201", "Mechanics of Solids", 4),
            c("CET203", "Fluid Mechanics I", 4),
            c("CET205", "Surveying and Geomatics", 4),
            c("CET207", "Geotechnical Engineering I", 4),
            c("MAT203", "Complex Functions and Partial Differential Equations", 4),
            c("EST200", "Design and Engineering", 2, "design"),
            c("MCN201", "Constitution of India", 0, "audit")
          ]),
          s("s4", "Semester 4", "https://www.ktunotes.in/ktu-s4-2019-syllabus/", [
            c("CET202", "Structural Analysis I", 4),
            c("CET204", "Fluid Mechanics II", 4),
            c("CET206", "Concrete Technology", 4),
            c("CET208", "Engineering Geology", 4),
            c("MAT206", "Probability and Statistics", 4),
            c("CEL202", "Materials and Survey Lab", 2, "lab")
          ]),
          s("s5", "Semester 5", "https://www.ktunotes.in/ktu-s5-2019-syllabus/", [
            c("CET301", "Design of Concrete Structures I", 4),
            c("CET303", "Geotechnical Engineering II", 4),
            c("CET305", "Hydrology and Irrigation Engineering", 4),
            c("CET307", "Transportation Engineering I", 4),
            c("CET309", "Environmental Engineering I", 3),
            c("CEL331", "Geotechnical and Highway Lab", 2, "lab")
          ]),
          s("s6", "Semester 6", "https://www.ktunotes.in/ktu-s6-2019-syllabus/", [
            c("CET302", "Design of Steel Structures", 4),
            c("CET304", "Structural Analysis II", 4),
            c("CET306", "Transportation Engineering II", 4),
            c("CET308", "Environmental Engineering II", 4),
            c("CET310", "Construction Management", 3),
            c("CEL332", "Environmental and CAD Lab", 2, "lab")
          ]),
          s("s7", "Semester 7", "https://www.ktunotes.in/ktu-s7-syllabus-2019-scheme/", [
            c("CET401", "Design of Concrete Structures II", 4),
            c("CET403", "Quantity Surveying and Valuation", 3),
            c("CET405", "Foundation Engineering", 3),
            c("CET407", "Elective I", 3, "elective"),
            c("CET409", "Elective II", 3, "elective"),
            c("CED415", "Project Phase I / Seminar", 4, "project")
          ]),
          s("s8", "Semester 8", "https://www.ktunotes.in/ktu-s8-syllabus-2019-scheme/", [
            c("CET402", "Disaster Management", 3),
            c("CET404", "Elective III", 3, "elective"),
            c("CET406", "Elective IV", 3, "elective"),
            c("CED416", "Project Phase II", 6, "project"),
            c("CED418", "Comprehensive Viva", 2, "viva")
          ])
        ],
        CHEM: [
          s("s1", "Semester 1", "https://ktu.edu.in/academics/scheme", COMMON_2019_S1, {
            verification: "secondary",
            verificationLabel: "Aligned to 2019 common first-year curriculum",
            sourceNote: "Semester 1 uses the common 2019 B.Tech first-year structure. The official KTU scheme endpoint is public but JavaScript-rendered, so the branch-specific audit is tracked through mirrored curriculum references."
          }),
          s("s2", "Semester 2", "https://ktu.edu.in/academics/scheme", COMMON_2019_S2, {
            verification: "secondary",
            verificationLabel: "Aligned to 2019 common first-year curriculum",
            sourceNote: "Semester 2 uses the common 2019 B.Tech first-year structure. The official KTU scheme endpoint is public but JavaScript-rendered, so the branch-specific audit is tracked through mirrored curriculum references."
          }),
          s("s3", "Semester 3", "https://www.scribd.com/document/547733009/B-tech-2019-Curriculum-NEW", [
            c("MAT201", "Partial Differential Equation and Complex Analysis", 4),
            c("CHT201", "Chemistry for Process Engineering", 4),
            c("CHT203", "Chemical Process Principles", 4),
            c("CHT205", "Fluid and Particle Mechanics", 4),
            c("EST200/HUT200", "Design and Engineering / Professional Ethics", 2, "humanities"),
            c("MCN201", "Sustainable Engineering", 0, "audit", { gradeMode: "passfail" }),
            c("CHL201", "Chemical Technology & Environmental Engineering Lab", 2, "lab"),
            c("CHL203", "Chemistry Lab for Process Engineering", 2, "lab")
          ], {
            verification: "secondary",
            verificationLabel: "Matched to mirrored APJAKTU 2019 Chemical curriculum",
            sourceNote: "Semester 3 subjects and credits follow the APJAKTU B.Tech 2019 curriculum mirror. Design and Engineering / Professional Ethics varies by institution between S3 and S4."
          }),
          s("s4", "Semester 4", "https://www.scribd.com/document/547733009/B-tech-2019-Curriculum-NEW", [
            c("MAT202", "Probability, Statistics and Numerical Methods", 4),
            c("CHT202", "Chemical Engineering Thermodynamics", 4),
            c("CHT204", "Heat Transfer Operations", 4),
            c("CHT206", "Particle Technology", 4),
            c("EST200/HUT200", "Design and Engineering / Professional Ethics", 2, "humanities"),
            c("MCN202", "Constitution of India", 0, "audit", { gradeMode: "passfail" }),
            c("CHL202", "Fluid and Particle Mechanics Lab", 2, "lab"),
            c("CHL204", "Particle Technology Lab", 2, "lab")
          ], {
            verification: "secondary",
            verificationLabel: "Matched to mirrored APJAKTU 2019 Chemical curriculum",
            sourceNote: "Semester 4 subjects and credits follow the APJAKTU B.Tech 2019 curriculum mirror. Design and Engineering / Professional Ethics varies by institution between S3 and S4."
          }),
          s("s5", "Semester 5", "https://www.ktuqbank.com/2020/07/ktu-curriculum-2019-batch-full.html", [
            c("CHT301", "Mass Transfer Operations-I", 4),
            c("CHT303", "Environmental Engineering", 4),
            c("CHT305", "Chemical Reaction Engineering", 4),
            c("CHT307", "Instrumentation and Process Control", 4),
            c("HUT300/HUT310", "Industrial Economics and Foreign Trade / Management for Engineers", 3, "humanities"),
            c("MCN301", "Disaster Management", 0, "audit", { gradeMode: "passfail" }),
            c("CHL331", "Heat Transfer Operations Lab", 2, "lab"),
            c("CHL333", "Process Control Lab", 2, "lab")
          ], {
            verification: "secondary",
            verificationLabel: "Matched to 2019 Chemical curriculum table",
            sourceNote: "Semester 5 subjects and credits match the published 2019 Chemical Engineering curriculum table. HUT300/HUT310 varies by institutional offering order."
          }),
          s("s6", "Semester 6", "https://www.ktuqbank.com/2020/07/ktu-curriculum-2019-batch-full.html", [
            c("CHT302", "Mass Transfer Operations-II", 4),
            c("CHT304", "Transport Phenomena", 4),
            c("CHT306", "Chemical Technology", 4),
            c("CHTXXX", "Elective I", 3, "elective"),
            c("HUT300/HUT310", "Industrial Economics and Foreign Trade / Management for Engineers", 3, "humanities"),
            c("CHT308", "Comprehensive Course Work", 1),
            c("CHL332", "Mass Transfer Operations Lab", 2, "lab"),
            c("CHL334", "Chemical Reaction Engineering Lab", 2, "lab")
          ], {
            verification: "secondary",
            verificationLabel: "Matched to 2019 Chemical curriculum table",
            sourceNote: "Semester 6 subjects and credits match the published 2019 Chemical Engineering curriculum table. Elective I remains generic until the student selects the exact elective."
          }),
          s("s7", "Semester 7", "https://www.ktuqbank.com/2020/07/chemical-engineering-year-4-syllabus.html", [
            c("CHT401", "Chemical Process Equipment Design I", 3),
            c("CHTXXX", "Elective II", 3, "elective"),
            c("CHTXXX", "Open Elective", 3, "elective"),
            c("MCN401", "Industrial Safety Engineering", 0, "audit", { gradeMode: "passfail" }),
            c("CHL411", "Process Simulation Lab", 2, "lab"),
            c("CHQ413", "Seminar", 2, "project"),
            c("CHD415", "Project Phase I", 2, "project")
          ], {
            verification: "secondary",
            verificationLabel: "Matched to 2019 Chemical year-four syllabus table",
            sourceNote: "Semester 7 follows the 2019 Chemical Engineering year-four syllabus table. Elective and open elective rows stay generic because students choose different subjects."
          }),
          s("s8", "Semester 8", "https://www.ktuqbank.com/2020/07/chemical-engineering-year-4-syllabus.html", [
            c("CHT402", "Chemical Process Equipment Design II", 3),
            c("CHTXXX", "Elective III", 3, "elective"),
            c("CHTXXX", "Elective IV", 3, "elective"),
            c("CHTXXX", "Elective V", 3, "elective"),
            c("CHT404", "Comprehensive Course Viva", 1, "viva"),
            c("CHD416", "Project Phase II", 4, "project")
          ], {
            verification: "secondary",
            verificationLabel: "Matched to 2019 Chemical year-four syllabus table",
            sourceNote: "Semester 8 follows the 2019 Chemical Engineering year-four syllabus table. Elective rows stay generic because students choose different subjects."
          })
        ]
      }
    }
  };

  for (const [schemeId, scheme] of Object.entries(LIBRARY)) {
    for (const [branchId, semesters] of Object.entries(scheme.branches)) {
      for (const semester of semesters) {
        if (semester.verification) continue;
        if (typeof semester.source === "string" && semester.source.includes("ktunotes.in")) {
          semester.verification = "secondary";
          semester.verificationLabel = "Checked against published branch syllabus page";
          semester.sourceNote = `This ${schemeId} ${branchId} semester currently follows a published branch-wise syllabus page from KTU Notes. An official KTU PDF or official grade-card audit is still pending for this branch and semester.`;
        } else {
          semester.verification = "provisional";
          semester.verificationLabel = "Provisional preset";
          semester.sourceNote = "This semester is still a placeholder preset and should not yet be treated as a fully verified KTU curriculum record.";
        }
      }
    }
  }

  const pageType = document.body.dataset.page || "landing";

  const state = {
    schemeId: "2024",
    branchId: "ECE",
    semesterId: "s1",
    grades: {},
    creditOverrides: {},
    targetGoals: {}
  };

  let toastTimer = null;

  function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("visible"), 2200);
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function totalCredits(courses) {
    return courses.reduce((sum, item) => sum + item.credits, 0);
  }

  function getScheme() {
    return LIBRARY[state.schemeId];
  }

  function getBranchLabel(branchId) {
    return BRANCHES[branchId] || branchId;
  }

  function getSemesters() {
    return getScheme().branches[state.branchId] || [];
  }

  function syncSemester() {
    const semesters = getSemesters();
    if (!semesters.some((semester) => semester.id === state.semesterId)) {
      state.semesterId = semesters[0] ? semesters[0].id : "";
    }
  }

  function getSemester() {
    syncSemester();
    return getSemesters().find((semester) => semester.id === state.semesterId);
  }

  function keyFor(schemeId, branchId, semesterId) {
    return `${schemeId}:${branchId}:${semesterId}`;
  }

  function getSavedGrades(schemeId, branchId, semesterId) {
    return state.grades[keyFor(schemeId, branchId, semesterId)] || {};
  }

  function getSavedCreditOverrides(schemeId, branchId, semesterId) {
    return state.creditOverrides[keyFor(schemeId, branchId, semesterId)] || {};
  }

  function targetKey(schemeId = state.schemeId, branchId = state.branchId) {
    return `${schemeId}:${branchId}`;
  }

  function getTargetGoal(schemeId = state.schemeId, branchId = state.branchId) {
    return state.targetGoals[targetKey(schemeId, branchId)] ?? "";
  }

  function getCourseCredits(course, schemeId = state.schemeId, branchId = state.branchId, semesterId = state.semesterId) {
    const overrides = getSavedCreditOverrides(schemeId, branchId, semesterId);
    return overrides[course.code] ?? course.credits;
  }

  function getClassification(value) {
    if (value >= 8.0) return ["First Class with Distinction", "distinction"];
    if (value >= 6.5) return ["First Class", "first"];
    return ["Pass", "pass"];
  }

  function isLinkableSource(source) {
    return /^https?:\/\//.test(source) || /^file:\/\//.test(source);
  }

  function renderSourceReference(source) {
    if (isLinkableSource(source)) {
      return `<a href="${source}" target="_blank" rel="noopener">semester source</a>`;
    }
    return source;
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      state.schemeId = parsed.schemeId || state.schemeId;
      state.branchId = parsed.branchId || state.branchId;
      state.semesterId = parsed.semesterId || state.semesterId;
      state.grades = parsed.grades || {};
      state.creditOverrides = parsed.creditOverrides || {};
      state.targetGoals = parsed.targetGoals || {};
    } catch (error) {
      console.warn("TrackKTU state load failed", error);
    }
  }

  function populateSchemes() {
    const select = byId("scheme-select");
    if (!select) return;
    select.innerHTML = Object.entries(LIBRARY)
      .map(([id, scheme]) => `<option value="${id}" ${id === state.schemeId ? "selected" : ""}>${scheme.label}</option>`)
      .join("");
  }

  function populateBranches() {
    const select = byId("branch-select");
    if (!select) return;
    const branchIds = Object.keys(getScheme().branches);
    if (!branchIds.includes(state.branchId)) state.branchId = branchIds[0];
    select.innerHTML = branchIds
      .map((branchId) => `<option value="${branchId}" ${branchId === state.branchId ? "selected" : ""}>${branchId} - ${getBranchLabel(branchId)}</option>`)
      .join("");
  }

  function populateSemesters() {
    syncSemester();
    const select = byId("semester-select");
    if (!select) return;
    select.innerHTML = getSemesters()
      .map((semester) => `<option value="${semester.id}" ${semester.id === state.semesterId ? "selected" : ""}>${semester.title}</option>`)
      .join("");
  }

  function renderSummary() {
    if (!byId("total-credits")) return;
    const semester = getSemester();
    const saved = getSavedGrades(state.schemeId, state.branchId, state.semesterId);
    const filled = semester.courses.filter((course) => saved[course.code]).length;
    const selectedCredits = semester.courses.reduce((sum, course) => sum + getCourseCredits(course), 0);
    byId("total-credits").value = `${selectedCredits} credits`;
    byId("stat-branch").textContent = state.branchId;
    byId("stat-semester").textContent = semester.title;
    byId("stat-subjects").textContent = semester.courses.length;
    byId("stat-filled").textContent = `${filled}/${semester.courses.length}`;
  }

  function renderResourceBlocks() {
    return;
  }

  function renderCourseList() {
    const container = byId("course-list");
    if (!container) return;
    const semester = getSemester();
    const saved = getSavedGrades(state.schemeId, state.branchId, state.semesterId);
    const creditOverrides = getSavedCreditOverrides(state.schemeId, state.branchId, state.semesterId);

    container.innerHTML = semester.courses.map((course) => `
      <article class="course-card">
        <div>
          <div class="course-name">${course.name}</div>
          <div class="course-meta">${course.code}</div>
        </div>
        <div class="credit-pill verified-credit">${course.credits} verified</div>
        <div class="field">
          <label>Credits</label>
          <select data-credit-course="${course.code}">
            ${[0, 1, 2, 3, 4, 5, 6].map((credit) => `<option value="${credit}" ${String((creditOverrides[course.code] ?? course.credits)) === String(credit) ? "selected" : ""}>${credit}</option>`).join("")}
          </select>
        </div>
        <div class="field">
          <label>Grade</label>
          <select data-course="${course.code}">
            <option value="">Select grade</option>
            ${(course.gradeMode === "passfail" ? ["PASS", "FAIL"] : Object.keys(GRADES)).map((grade) => `<option value="${grade}" ${saved[course.code] === grade ? "selected" : ""}>${grade}</option>`).join("")}
          </select>
        </div>
      </article>
    `).join("");
  }

  function calculateSemester(schemeId, branchId, semesterId) {
    const semester = LIBRARY[schemeId].branches[branchId].find((item) => item.id === semesterId);
    const saved = getSavedGrades(schemeId, branchId, semesterId);
    let points = 0;
    let gpaCredits = 0;
    let totalEarnedCredits = 0;

    for (const course of semester.courses) {
      const grade = saved[course.code];
      if (!grade) return null;
      const currentCredits = getCourseCredits(course, schemeId, branchId, semesterId);
      totalEarnedCredits += currentCredits;
      if (course.gradeMode === "passfail") {
        continue;
      }
      points += GRADES[grade] * currentCredits;
      gpaCredits += currentCredits;
    }

    if (!gpaCredits) return null;

    return {
      title: semester.title,
      credits: gpaCredits,
      totalCredits: totalEarnedCredits,
      points,
      count: semester.courses.length,
      sgpa: +(points / gpaCredits).toFixed(2)
    };
  }

  function renderSgpaResult() {
    const card = byId("sgpa-result");
    if (!card) return;
    const result = calculateSemester(state.schemeId, state.branchId, state.semesterId);

    if (!result) {
      card.classList.remove("visible");
      return;
    }

    const [label, className] = getClassification(result.sgpa);
    byId("sgpa-value").textContent = result.sgpa.toFixed(2);
    byId("sgpa-badge").innerHTML = `<span class="badge ${className}">${label}</span>`;
    byId("sgpa-points").textContent = result.points.toFixed(1);
    byId("sgpa-credits").textContent = `${result.credits} / ${result.totalCredits}`;
    byId("sgpa-complete").textContent = `${result.count}/${result.count}`;
    byId("sgpa-scope").textContent = `${state.schemeId} / ${state.branchId}`;
    card.classList.add("visible");
  }

  function renderCgpaSemesterList() {
    const container = byId("semester-list");
    if (!container) return;
    const semesters = getSemesters();

    container.innerHTML = semesters.map((semester) => {
      const result = calculateSemester(state.schemeId, state.branchId, semester.id);
      const savedCount = Object.keys(getSavedGrades(state.schemeId, state.branchId, semester.id)).length;
      return `
        <article class="semester-card">
          <div>
            <div class="semester-title">${semester.title}</div>
            <div class="sem-pill">${semester.courses.reduce((sum, course) => sum + getCourseCredits(course, state.schemeId, state.branchId, semester.id), 0)} credits selected</div>
          </div>
          <div class="semester-copy">
            ${semester.courses.length} preset ${state.branchId} subjects are loaded for this semester.
            ${result ? "This semester is complete and counted in CGPA." : `Grades entered: ${savedCount}/${semester.courses.length}.`}
          </div>
          <div class="semester-score">
            <div class="sgpa">${result ? result.sgpa.toFixed(2) : "--"}</div>
            <div class="note">${result ? "included" : "incomplete"}</div>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderCgpaResult() {
    const card = byId("cgpa-result");
    if (!card) return;
    const completed = getSemesters()
      .map((semester) => calculateSemester(state.schemeId, state.branchId, semester.id))
      .filter(Boolean);

    if (!completed.length) {
      card.classList.remove("visible");
      return;
    }

    const totalCreditsValue = completed.reduce((sum, item) => sum + item.credits, 0);
    const weightedSum = completed.reduce((sum, item) => sum + (item.sgpa * item.credits), 0);
    const cgpa = +(weightedSum / totalCreditsValue).toFixed(2);
    const percent = +(10 * cgpa - 2.5).toFixed(2);
    const [label, className] = getClassification(cgpa);

    byId("cgpa-value").textContent = cgpa.toFixed(2);
    byId("cgpa-badge").innerHTML = `<span class="badge ${className}">${label}</span>`;
    byId("cgpa-completed").textContent = completed.length;
    byId("cgpa-total-credits").textContent = totalCreditsValue;
    byId("cgpa-percent").textContent = `${percent.toFixed(2)}%`;
    byId("cgpa-scope").textContent = `${state.schemeId} / ${state.branchId}`;
    card.classList.add("visible");
  }

  function getSemesterGpaCredits(semester, schemeId = state.schemeId, branchId = state.branchId) {
    return semester.courses.reduce((sum, course) => {
      if (course.gradeMode === "passfail") return sum;
      return sum + getCourseCredits(course, schemeId, branchId, semester.id);
    }, 0);
  }

  function calculateTargetPlan() {
    const rawTarget = getTargetGoal();
    const target = Number(rawTarget);
    if (!rawTarget && rawTarget !== 0) return null;
    if (Number.isNaN(target) || target <= 0 || target > 10) {
      return { error: "Enter a target CGPA between 0 and 10." };
    }

    const semesters = getSemesters();
    const completed = semesters
      .map((semester) => ({ semester, result: calculateSemester(state.schemeId, state.branchId, semester.id) }))
      .filter((item) => item.result);
    const remaining = semesters
      .filter((semester) => !calculateSemester(state.schemeId, state.branchId, semester.id));

    const totalProgramCredits = semesters.reduce((sum, semester) => sum + getSemesterGpaCredits(semester), 0);
    const earnedPoints = completed.reduce((sum, item) => sum + item.result.points, 0);
    const completedCredits = completed.reduce((sum, item) => sum + item.result.credits, 0);
    const remainingCredits = remaining.reduce((sum, semester) => sum + getSemesterGpaCredits(semester), 0);
    const currentCgpa = completedCredits ? +(earnedPoints / completedCredits).toFixed(2) : 0;
    const targetPoints = target * totalProgramCredits;
    const requiredPoints = targetPoints - earnedPoints;
    const requiredAverage = remainingCredits ? +(requiredPoints / remainingCredits).toFixed(2) : null;
    const bestPossibleCgpa = remainingCredits
      ? +((earnedPoints + remainingCredits * 10) / totalProgramCredits).toFixed(2)
      : currentCgpa;

    return {
      target,
      currentCgpa,
      completedCount: completed.length,
      totalProgramCredits,
      completedCredits,
      remainingCredits,
      remaining,
      requiredAverage,
      bestPossibleCgpa
    };
  }

  function renderTargetPlanner() {
    const input = byId("target-cgpa-input");
    const container = byId("target-plan");
    if (!input || !container) return;

    input.value = getTargetGoal();
    const plan = calculateTargetPlan();
    if (!plan) {
      container.innerHTML = `
        <div class="trust-note planner-empty">
          Enter a target CGPA to see the average SGPA you need from the remaining semesters.
        </div>
      `;
      return;
    }

    if (plan.error) {
      container.innerHTML = `<div class="trust-note planner-empty">${plan.error}</div>`;
      return;
    }

    if (!plan.remaining.length) {
      const status = plan.currentCgpa >= plan.target
        ? `You have already finished all semesters and reached the target with a CGPA of ${plan.currentCgpa.toFixed(2)}.`
        : `All semesters are already completed. Your final CGPA is ${plan.currentCgpa.toFixed(2)}, so a target of ${plan.target.toFixed(2)} is no longer reachable.`;
      container.innerHTML = `<div class="trust-note planner-empty">${status}</div>`;
      return;
    }

    if (plan.requiredAverage <= 0) {
      container.innerHTML = `
        <div class="planner-summary">
          <div class="stat-card">
            <div class="k">Target Status</div>
            <div class="v">Already secured</div>
          </div>
          <div class="stat-card">
            <div class="k">Current CGPA</div>
            <div class="v">${plan.currentCgpa.toFixed(2)}</div>
          </div>
          <div class="stat-card">
            <div class="k">Remaining Credits</div>
            <div class="v">${plan.remainingCredits}</div>
          </div>
          <div class="stat-card">
            <div class="k">Target CGPA</div>
            <div class="v">${plan.target.toFixed(2)}</div>
          </div>
        </div>
        <div class="trust-note planner-empty">
          Your current performance already keeps you above the target by the end of Semester 8, even if the remaining semesters only need passing completion.
        </div>
      `;
      return;
    }

    const impossible = plan.requiredAverage > 10;
    const summaryLabel = impossible ? "Target not practical" : "Required average SGPA";
    const summaryValue = impossible ? `${plan.requiredAverage.toFixed(2)} needed` : plan.requiredAverage.toFixed(2);

    container.innerHTML = `
      <div class="planner-summary">
        <div class="stat-card">
          <div class="k">${summaryLabel}</div>
          <div class="v">${summaryValue}</div>
        </div>
        <div class="stat-card">
          <div class="k">Current CGPA</div>
          <div class="v">${plan.currentCgpa.toFixed(2)}</div>
        </div>
        <div class="stat-card">
          <div class="k">Remaining Semesters</div>
          <div class="v">${plan.remaining.length}</div>
        </div>
        <div class="stat-card">
          <div class="k">Remaining Credits</div>
          <div class="v">${plan.remainingCredits}</div>
        </div>
      </div>
      <div class="planner-copy ${impossible ? "planner-warning" : ""}">
        ${impossible
          ? `Even scoring 10.00 in every remaining semester will only take you up to a CGPA of ${plan.bestPossibleCgpa.toFixed(2)}.`
          : `If you keep roughly the same SGPA in each remaining semester, aim for ${plan.requiredAverage.toFixed(2)} from now until Semester 8.`}
      </div>
      <div class="planner-grid">
        ${plan.remaining.map((semester) => `
          <article class="planner-card">
            <div class="semester-title">${semester.title}</div>
            <div class="course-meta">${getSemesterGpaCredits(semester)} GPA credits</div>
            <div class="planner-target">${impossible ? "10.00 max" : `${plan.requiredAverage.toFixed(2)} target`}</div>
          </article>
        `).join("")}
      </div>
    `;
  }

  function renderAll() {
    syncSemester();
    populateSchemes();
    populateBranches();
    if (pageType === "sgpa") {
      populateSemesters();
      renderSummary();
      renderResourceBlocks();
      renderCourseList();
      renderSgpaResult();
      return;
    }
    if (pageType === "cgpa") {
      renderCgpaSemesterList();
      renderCgpaResult();
      renderTargetPlanner();
    }
  }

  function clearSemesterGrades() {
    state.grades[keyFor(state.schemeId, state.branchId, state.semesterId)] = {};
    saveState();
    renderAll();
    showToast("Current semester grades cleared.");
  }

  function clearAllGrades() {
    state.grades = {};
    state.creditOverrides = {};
    saveState();
    renderAll();
    showToast("All saved grades cleared.");
  }

  if (byId("scheme-select")) {
    byId("scheme-select").addEventListener("change", (event) => {
      state.schemeId = event.target.value;
      state.branchId = Object.keys(getScheme().branches)[0];
      state.semesterId = getScheme().branches[state.branchId][0].id;
      saveState();
      renderAll();
    });
  }

  if (byId("branch-select")) {
    byId("branch-select").addEventListener("change", (event) => {
      state.branchId = event.target.value;
      state.semesterId = getSemesters()[0].id;
      saveState();
      renderAll();
    });
  }

  if (byId("semester-select")) {
    byId("semester-select").addEventListener("change", (event) => {
      state.semesterId = event.target.value;
      saveState();
      renderAll();
    });
  }

  if (byId("course-list")) {
    byId("course-list").addEventListener("change", (event) => {
      const key = keyFor(state.schemeId, state.branchId, state.semesterId);
      if (event.target.matches("select[data-credit-course]")) {
        const courseCode = event.target.dataset.creditCourse;
        state.creditOverrides[key] ||= {};
        state.creditOverrides[key][courseCode] = Number(event.target.value);
      } else if (event.target.matches("select[data-course]")) {
        const courseCode = event.target.dataset.course;
        state.grades[key] ||= {};
        if (event.target.value) {
          state.grades[key][courseCode] = event.target.value;
        } else {
          delete state.grades[key][courseCode];
        }
      } else {
        return;
      }
      saveState();
      renderAll();
    });
  }

  if (byId("calc-sgpa-btn")) {
    byId("calc-sgpa-btn").addEventListener("click", () => {
      const result = calculateSemester(state.schemeId, state.branchId, state.semesterId);
      if (!result) {
        showToast("Please choose grades for every preset subject.");
        return;
      }
      renderSgpaResult();
      showToast("Semester GPA updated.");
    });
  }

  if (byId("calc-cgpa-btn")) {
    byId("calc-cgpa-btn").addEventListener("click", () => {
      const completed = getSemesters()
        .map((semester) => calculateSemester(state.schemeId, state.branchId, semester.id))
        .filter(Boolean);
      if (!completed.length) {
        showToast("Complete at least one semester first.");
        return;
      }
      renderCgpaResult();
      showToast("CGPA recalculated.");
    });
  }

  if (byId("target-cgpa-input")) {
    byId("target-cgpa-input").addEventListener("input", (event) => {
      const value = event.target.value;
      const key = targetKey();
      if (value === "") {
        delete state.targetGoals[key];
      } else {
        state.targetGoals[key] = value;
      }
      saveState();
      renderTargetPlanner();
    });
  }

  if (byId("calc-target-btn")) {
    byId("calc-target-btn").addEventListener("click", () => {
      const plan = calculateTargetPlan();
      renderTargetPlanner();
      showToast(plan && !plan.error ? "Target plan updated." : "Enter a valid target CGPA first.");
    });
  }

  if (byId("clear-sem-btn")) {
    byId("clear-sem-btn").addEventListener("click", clearSemesterGrades);
  }

  if (byId("clear-all-btn")) {
    byId("clear-all-btn").addEventListener("click", clearAllGrades);
  }

  loadState();
  if (pageType === "sgpa" || pageType === "cgpa") {
    renderAll();
  }
