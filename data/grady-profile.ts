export const gradyProfile = {
  name: "Grady Karp",
  title: "Distinguished Technical Fellow | Technical Chief of Staff",
  location: "Seattle, WA",
  status: "Open to executive advisory, fractional CTO, and consulting engagements",

  summary: `Strategic technology and business leader operating at the intersection of architecture, organizational design, and product strategy. Expert in defining and executing multi-year engineering strategies, establishing architectural governance, and shaping high-scale R&D operating models.`,

  experience: [
    {company: "Personal projects",
      role: "gradykarp.com",
      period: "2026 – present",
      highlights: [
        "Personal website with AI-powered feature that lets people ask questions about my experience and skills",
        "LangGraph & Claude SDK project that does research and generates reports about the state of the US power grid",
        "Family coordinator that intelligently manages family events, resources, and handles calendar conflicts",
      ],
      aiContext: [{
        situation:
          "Wanted to showcase technical skills and create useful tools for personal and family use",
        approach:
          "Built practical AI-powered applications using modern frameworks and LLM APIs",
        technicalWork:
          "Next.js, TypeScript, LangGraph, Claude SDK, AI chat interfaces, automated research pipelines",
        lessonsLearned:
          "Hands-on AI development reinforces that practical applications require thoughtful prompt engineering and system design",
      }],
    },
    {
      company: "Indeed",
      role: "Distinguished Technical Fellow, Technical Chief of Staff",
      period: "July 2023 – December 2025",
      highlights: [
        "Executive technical leader supporting GVP of Engineering and Engineering leadership",
        "Guided architecture across 500 teams",
        "Removed technical and architectural blockers for architects and principal engineers",
        "Created Domain-Driven Design structure and culture org-wide",
        "Drove company-wide reliability improvements (SLO culture)",
        "Co-led organization's AI-usage transformation",
        "Mentored senior staff across multiple functions, including Engineering, Product Management, Program Management, and Data Science teams"
      ],
      aiContext: [{
        situation:
          "Indeed needed architectural clarity and clear accountability for architectural decisions",
        approach:
          "Established and socialized clear Domain-Driven Design structure, technical governance, and operating mechanisms",
        technicalWork:
          "Architectural reviews, cross-functional governance, reliability engineering, technical debt prioritization",
        lessonsLearned:
          "Scaling influence requires both technical credibility and organizational design skills. Accountability for architectural decisions is critical for technical leadership; Domain-Driven Design is a powerful tool for achieving this. Abstractions are difficult to manage without clean technical boundaries and great documentation.",
      },
      {
        situation:
          "Indeed was drowning in unmanaged technical debt, and teams did not consistently prioritize its resolution. Teams were consistently over-subscribed for quarterly and annual product roadmaps.",
        approach:
          "Developed and socialized a lightweight process for sizing technical debt and the cost of paying it down. Developed and socialized the strategy for sizing annual and quarterly product roadmaps, allowing technical debt to be prioritized against product roadmaps.",
        technicalWork:
          "Technical debt prioritization, technical debt review process, technical debt reporting, product roadmap sizing",
        lessonsLearned:
          "Technical debt prioritization is a complex problem that requires a clear and consistent approach. The framework and process should be simple to understand and follow, and the reporting should be clear and actionable. Product roadmap sizing is a complex problem that requires a clear and consistent approach. The framework and process should be simple to understand and follow, and the reporting should be clear and actionable.",
      }
    ],
    }, 
    {
      company: "Indeed",
      role: "Technical Fellow",
      period: "October 2022 – June 2023",
      highlights: [
        "Org-wide architecture and systems strategy with deep influence across product lines",
        "Created architectural roadmaps unifying product and platform strategy",
        "Improved interoperability and reduced duplication across services and teams",
        "Led technical reviews for mission-critical, large-scale initiatives",
      ],
      aiContext: [{
        situation:
          "Indeed needed unified architectural vision across diverse product lines",
        approach:
          "Created roadmaps bridging product needs with platform capabilities",
        technicalWork:
          "Architecture reviews, service consolidation, technical strategy",
        lessonsLearned:
          "Effective architecture requires balancing product velocity with platform coherence",
      },
      {
        situation:
          "Indeed leadership identified endemic quality concerns across our products and infrastructure. Frequent, large-scale incidents were impacting customer trust and consuming significant engineering bandwidth",
        approach:
          "Chartered Indeed's Quality Advisory Council, a cross-functional, cross-organizational team. The QAC was responsible for defining quality standards, metrics, and improvements that would lead to significant quality improvements.",
        technicalWork:
          "Scaled operational excellence reviews across all systems that supported Signature Features",
        lessonsLearned:
          "Quality is something that we know is missing, but hard to define. The QAC was a powerful mechanism for helping teams prioritize their own quality improvements and get implicit leadership support for doing so." ,
      }
    ],
    },
    {
      company: "Indeed",
      role: "Director, Software Engineering (SMB)",
      period: "July 2019 – March 2023",
      highlights: [
        "Led final mile of employer customer journey products and platforms",
        "Delivered 10X growth of key business metrics",
        "Grew Seattle SMB engineering from 23 to 85 staff in 3 years",
        "Reorganized SMB into domain-centric teams",
        "Ideated and built Indeed's Candidate Platform",
        "Cross-company champion for operational excellence",
      ],
      aiContext: [{
        situation:
          "SMB org needed scaling, reorganization, and platform modernization",
        approach: "Domain-centric reorg, aggressive hiring, platform thinking",
        technicalWork:
          "Candidate ingest/search, workflow automation, data pipelines, analytics/reporting",
        lessonsLearned:
          "10X growth requires both technical platform and organizational foundation",
      }],
    },
    {
      company: "Amazon Web Services",
      role: "Senior Software Development Manager",
      period: "June 2018 – June 2019",
      highlights: [
        "Led AWS Organizations - tier-1 platform for multi-account management",
        "Grew team by 100% in 6 months (2 managers, 19 engineers)",
        "Built 2019 roadmap, presented scaling plans to AWS Leadership",
        "Operational owner for fleet of VMs, internal processes, and service quality",
      ],
      aiContext: [{
        situation:
          "AWS Organizations was a critical platform service needing scale and team growth",
        approach:
          "Rapid team growth, roadmap alignment with product management, partner collaboration",
        technicalWork:
          "Console, CLI, SDK spanning entire AWS service offering; security and compliance policies",
        lessonsLearned:
          "Tier-1 services require operational excellence and executive alignment",
      }],
    },
    {
      company: "Dell EMC (Isilon)",
      role: "Director, Software Engineering",
      period: "June 2015 – June 2018",
      highlights: [
        "Led control plane for scale-out NAS product",
        "Full product lifecycle: UX research, interaction design, development, user testing, release",
        "Delivered off-cluster control plane improving scale and UX",
        "Spearheaded continuous integration transformation",
        "Created root-cause analysis ('5 Whys') and problem-solving ('A3s') practices",
        "Recruited, hired, and developed managers and principal-level developers",
      ],
      aiContext: [{
        situation:
          "Isilon needed modern control plane and development practices",
        approach:
          "Integrated UX/dev/validation/DevOps teams, CI/CD transformation, people management model",
        technicalWork:
          "React/Redux + Python web services, RESTful APIs and SDKs, configuration, management, monitoring, analytics",
        lessonsLearned:
          "Product excellence requires tight integration of UX and engineering",
      }],
    },
    {
      company: "Amazon",
      role: "Principal Product Manager, Amazon Echo",
      period: "November 2012 – June 2015",
      highlights: [
        "Principal PM defining Amazon Echo from concept to launch (Project Doppler)",
        "Owned vision and requirements across entire HW/SW stack",
        "Led all GUI experiences: browser, Android, iOS",
        "Owner for Shopping, Privacy, and Accessibility features",
        "Coordinated post-launch product planning across PM organization",
      ],
      aiContext: [{
        situation:
          "Amazon was creating an entirely new product category (smart speakers)",
        approach:
          "Cross-functional product definition spanning hardware and software teams",
        technicalWork:
          "Multi-platform apps, voice UI, ecosystem services, multi-modal shopping",
        lessonsLearned:
          "0-to-1 products require balancing vision with execution constraints",
      }],
    },
    {
      company: "SignalSet",
      role: "Director of Product Development",
      period: "June 2011 – August 2012",
      highlights: [
        "Technology owner for venture-backed M2M (machine-to-machine) startup",
        "Customer- and partner-facing technology advisor for Fortune 250 partner",
        "Managed transition from outsource/partner model to in-house, increasing ARPU and reducing costs",
        "Architected highly available, scalable cloud technology stack",
        "Key driver of Lean Startup thinking within the company",
      ],
      aiContext: [{
        situation:
          "Early-stage startup needed technical leadership and product development",
        approach:
          "Lean Startup methodology, transition to in-house engineering, cloud architecture",
        technicalWork:
          "Highly available and scalable systems, RDBMS and NoSQL environments",
        lessonsLearned:
          "Startups require wearing multiple hats and rapid iteration",
      }],
    },
    {
      company: "Point B",
      role: "Senior Associate",
      period: "March 2006 – June 2011",
      highlights: [
        "Consultant specializing in technical strategy, program leadership, and organizational transformation",
        "Led enterprise modernization and large-scale technology programs",
        "Built decision frameworks enabling organizations to align faster and execute with clarity",
      ],
      aiContext: [{
        situation:
          "Clients needed strategic guidance on technology and organizational change",
        approach:
          "Consulting methodology with focus on strategy, program leadership, and transformation",
        technicalWork:
          "Enterprise modernization, technology strategy, decision frameworks",
        lessonsLearned:
          "External perspective can accelerate organizational alignment and execution",
      }],
    },
  ],

  skills: {
    strong: [
      "Multi-year engineering vision and strategy",
      "Architecture (Domain-Driven Design, distributed systems, cloud)",
      "Organizational design & operating models",
      "Executive advisory (CTO/C-suite)",
      "Scaling engineering orgs (400+ teams, 2000+ staff)",
      "Technical governance frameworks",
      "Mentoring senior ICs, architects, and managers",
      "Cross-functional alignment in ambiguous environments",
      "Portfolio management & prioritization frameworks",
      "Clean escalations for fast decision-making and tie-breaking",
      "Reliability engineering and culture of operational excellence",
      "Authentic relationships and trust building",
      "Translating business goals into engineering strategy and execution",
      "Broad stakeholder consensus building",
      "Creating alignment between engineering best practices and on-the-ground activities"
    ],
    moderate: [
      "Hands-on coding (Node.js, Python, Java, JavaScript)",
      "Cost transformation & unit economics",
      "Product management",
      "API design and service boundaries",
      "Developer velocity and SDLC optimization",
      "Claude code and AI agent development",
      "Roadmap work breakdown structures",
      "Tracking long-run, quantitative metrics for broad goals"
    ],
    gaps: [
      "Recent, focused hands-on IC work (leadership-focused for 10+ years)",
      "Deep ML/AI implementation (strategic perspective, not hands-on practitioner)",
      "Startup founder experience (advisor/employee, not founder)",
      "Deep infrastructural knowledge (e.g., K8s, Terraform, networking, etc.) -- passing knowledge at best."
    ],
  },

  education: [
    { school: "Stanford University", degree: "B.S. Cognitive Science, minor in Mathematics" },
    { school: "INSEAD", degree: "MBA, International Product Development" },
  ],

  testimonials: [
    {
      text: "If imitation is the highest form of flattery then I can say nothing better about Grady than that I have attempted to manage my employees in the same way that he managed me.",
      attribution: "Co-founder and CTO, HouseWhisper",
    },
    {
      text: "[Grady] challenges assumptions, asks the right questions, and helps you arrive at better answers yourself. His guidance is always practical, rooted in decades of real experience across engineering and product leadership. I'm one of many people he's invested in this way. His willingness to mentor across the organization speaks to who he is.",
      attribution: "Senior Manager, Software Engineering, Indeed.com",
    },
    {
      text: "One thing that stands out about Grady is how deeply he cares about quality and engineering hygiene. He's not someone who tolerates shortcuts or technical debt as a way of life. He instills a discipline around code quality, testing practices, and sustainable engineering that elevates entire organizations. It's not about perfectionism. It's about building things right so they last.",
      attribution: "Senior Manager, Software Engineering, Indeed.com",
    },
    {
      text: "Grady has a rare ability to operate across the full spectrum. He never loses sight of the bigger picture while still engaging meaningfully with the details that matter.",
      attribution: "Senior Manager, Software Engineering, Indeed.com",
    },
    {
      text: "[Grady] championed clear standards, thoughtful architectural decisions, and long-term technical health, all while empowering those around him to grow and excel ... his influence extended far beyond individual initiatives - he strengthened the engineering culture itself through his leadership, judgment, and commitment to building durable, scalable systems.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "When teams and other leaders encountered challenging trade-offs, conflicting goals between product and engineering, complicated large-scale technical initiatives, Grady was consistently the person they sought out for clarity and direction.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "He brought structure, clarity, and accountability to complex technical landscapes, ensuring that quality was not an aspiration but an operational reality.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "I have been extremely fortunate to experience firsthand what it means to work with an incredibly empathetic leader. Working with Grady was one of the most impactful experiences of my career.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "What truly sets Grady apart ... is his leadership style. He operates across the full spectrum, never losing sight of the big picture while engaging meaningfully with the details. He leads through trust and delegation, creating a culture of high expectations while genuinely investing in the growth of his people. He has a relentless focus on business outcomes, ensuring that technical improvements always serve the company's broader goals. Grady is a visionary leader who drives systematic improvement with wisdom and clarity.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "Grady was instrumental in elevating Domain-Driven Design from a niche interest to a strategic priority for senior executive leadership... Grady was always a clear, articulate, and pragmatic voice for modernization.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "When teams faced difficult trade-offs between product goals and engineering rigor, Grady was the clear voice of reason we turned to for direction.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "[Grady] was ... an innovator in how we worked, pioneering the application of LLMs to improve design review quality and ensuring that complex technical decisions were communicated effectively to stakeholders across the business.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "An empathetic mentor and a leader, Grady is the rare executive who can 'ride the software architecture elevator' between the board room and the 'engine room' where theory collides with the realities of a sprawling engineering organization.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "[Grady's] ability to seamlessly navigate between people leadership and profound technical contribution makes him exceptionally versatile and valuable in any complex engineering environment.",
      attribution: "Senior Manager, Technical Program Management, Indeed.com",
    },
    {
      text: "[Grady] builds bridges across organizational boundaries that others struggle to navigate, earning trust from engineering teams, product leadership, and executive stakeholders alike. His focus is always squarely on what's best for the business—not politics, not ego.",
      attribution: "Senior Manager, Technical Program Management, Indeed.com",
    },
    {
      text: "What sets Grady apart is his rare ability to cut through complexity and identify the critical technical bottlenecks that, once resolved, unlock significant delivery velocity for entire organizations. He doesn't just solve problems—he solves the *right* problems.",
      attribution: "Senior Manager, Technical Program Management, Indeed.com",
    },
    {
      text: "Grady is a rare kind of technical leader: strategic, compassionate, and genuinely committed to helping others grow.",
      attribution: "Product Director, Indeed.com",
    },
    {
      text: "What impressed me most was how consistently [Grady] supported and elevated the people around him. In moments of organizational change or uncertainty, Grady was the kind of leader who stepped in, provided clarity, and ensured teams and individuals had what they needed to succeed.",
      attribution: "Product Director, Indeed.com",
    },
    {
      text: "[Grady] was my go-to for escalations and for talking through cross-team challenges, and I always appreciated how unbiased he was. I learned a lot from him about driving alignment across groups.",
      attribution: "Technical Fellow, Indeed.com",
    },
    {
      text: "I've grown significantly in my role and in my career under his mentorship, and I'm deeply grateful for the time and care he invested in me.",
      attribution: "Principal Software Engineer (Machine Learning), Indeed.com",
    },
    {
      text: "Grady has a rare ability to quickly understand complex systems, identify the real bottlenecks, and translate those insights into a clear, immediately actionable set of improvements.",
      attribution: "Principal Software Engineer (Machine Learning), Indeed.com",
    },
    {
      text: "I'm very fortunate to have had Grady as my mentor. Despite working in different areas of the company, he consistently invested time in helping me and my team improve our engineering and operational practices.",
      attribution: "Principal Software Engineer (Machine Learning), Indeed.com",
    },
    {
      text: "Grady has a unique combination of strong technical breadth and depth coupled with practical leadership skills, and is always able to connect technical goals directly to business objectives.",
      attribution: "Senior Director of Engineering, Indeed.com",
    },
    {
      text: "[Grady] impressed me as an open minded engineer leader and a seasoned people manager—transparent, yet with a unique ability to keep his team motivated.",
      attribution: "Senior Director of Engineering, Indeed.com",
    },
    {
      text: "As a Distinguished Technical Fellow, Grady was instrumental in identifying key technical domains across R&D systems.",
      attribution: "Senior Director of Engineering, Indeed.com",
    },
    {
      text: "Grady is a strategic and highly effective engineering leader with a rare ability to unifying teams across R&D to drive toward a clear, single technical direction.",
      attribution: "Senior Director of Engineering, Indeed.com",
    },
  ],

  suggestedQuestions: [
    "Would Grady be a good fit for a fractional CTO role at a Series B startup?",
    "How does Grady approach organizational management and mentorship?",
    "What's Grady's experience with organizational transformation and operating models?",
    "Tell me about Grady's cross-functional collaboration and leadership.",
  ],
};

export type GradyProfile = typeof gradyProfile;
