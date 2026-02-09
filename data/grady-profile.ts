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
        "Built three production applications solo in under 4 weeks using AI-native development (Claude Code)",
        "gradykarp.com: AI-powered portfolio where visitors can ask Claude questions about my experience - Claude has full context of my career, skills, and testimonials to provide thoughtful, honest assessments",
        "US Power Grid Research System: Multi-agent AI system using LangGraph + Claude SDK - three specialized agents (Research, Analysis, Writer) collaborate to produce comprehensive professional reports",
        "Family Tasks: Full-stack application (FastAPI + Next.js) for family task management via SMS, Slack, and web - Claude routes natural language messages to appropriate actions with confidence scoring",
      ],
      aiContext: [
        {
          situation: 
            "Italian conversational agent: Want to learn to speak Italian well enough to pass the Italian citizenship exam",
          approach:
            "Built a conversational agent that uses OpenAI's APIs to have natural conversations with me in Italian. The agent adjusts its responses to my level of proficiency and provides feedback on my pronunciation and grammar. Memory about conversations and proficiency is stored.",
          technicalWork:
            "Started with a CLI that allows for microphone access and streaming audio to OpenAI's APIs. Conversations are transcribed for the user, and are sent to OpenAI as system prompts. Used Claude to plan and implement, while I provided architectural guidance and both functional and non-functional requirements."  
          lessonsLearned:
            "AI-native development is transformative when you trust the AI as a collaborator rather than just a code generator. The key is rapid iteration - ship something, see what breaks, fix it fast. A solo developer with AI assistance can build what used to require a small team. Prompt engineering is critical for getting the best results from the AI.",
        },
        {
          situation:
            "gradykarp.com: Needed a portfolio that goes beyond static content - wanted visitors (especially potential employers) to get genuine, thoughtful answers about my fit for roles",
          approach:
            "Built an 'Ask AI' feature where Claude has complete context about my experience, skills, testimonials, and gaps. The AI is instructed to be honest about both strengths and limitations, providing genuine assessments rather than marketing fluff.",
          technicalWork:
            "Next.js App Router with streaming chat UI. System prompt builder that structures career data into context. Claude Sonnet integration via Vercel AI SDK. Chat logging to Vercel Blob for continuous improvement. Testimonial carousel pulling from structured profile data.",
          lessonsLearned:
            "Transparency builds trust. By acknowledging gaps and providing honest assessments, the AI creates more credibility than a traditional resume ever could. The system prompt design is critical - structure matters for LLM context.",
        },
        {
          situation:
            "US Power Grid: Wanted to explore multi-agent AI systems and produce genuinely useful research output - chose an important, data-rich topic",
          approach:
            "Designed a LangGraph workflow with three specialized Claude agents: Research Agent (gathers data from authoritative sources like EIA, NERC), Analysis Agent (computes metrics, trends, vulnerability scores), and Writer Agent (synthesizes into professional report). Human-in-the-loop checkpoints for quality control.",
          technicalWork:
            "LangGraph state machine orchestration with conditional routing. Claude Agent SDK for tool-equipped agents (WebFetch, WebSearch, Read, Write). Typed state schema with Pydantic. 7-day disk cache with retry logic. Produces 15-25 page professional reports with data tables and citations.",
          lessonsLearned:
            "Multi-agent systems require clear boundaries and well-defined handoffs. Each agent should have a focused purpose. The orchestration layer (LangGraph) is as important as the individual agents. Human checkpoints catch issues before they compound.",
        },
        {
          situation:
            "Family Tasks: Real families have chaotic communication - texts, Slack messages, random voice notes. Wanted a system that could unify all these inputs into actionable task management",
          approach:
            "Built a multi-channel ingestion system (SMS via Twilio, Slack Events API, web UI) that routes all inputs to Claude for intent classification and entity extraction. Confidence scoring ensures uncertain items go to a review queue rather than taking wrong actions.",
          technicalWork:
            "Backend: FastAPI with async processing, SQLAlchemy ORM, PostgreSQL. AI pipeline: Claude Sonnet for message routing (8 intent types), OpenAI Whisper for voice transcription, Claude Vision for image text extraction. Frontend: Next.js 16, React 19, Tailwind CSS. Multi-modal: handles text, images, and voice notes.",
          lessonsLearned:
            "Real-world AI applications need graceful degradation. Confidence thresholds and review queues prevent the AI from making costly mistakes. Cross-channel context (knowing what was said on SMS when responding on Slack) creates a unified experience.",
        },
      ],
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
          "Indeed lacked clear architectural boundaries and accountability; needed foundational domain structure across 500+ teams",
        approach:
          "Assembled small team of Indeed's most knowledgeable engineers to define initial domain boundaries representing fundamental business concepts (jobs, job seekers, employers, candidates, messages, matching, etc.). Identified first 15 domains and assigned named technical ICs as accountable domain leaders. Socialized first with Engineering VPs, then critically with Product Management VPs who would share influence with domain leaders. Documented accountability model and rolled out org-wide.",
        technicalWork:
          "Domain boundary definition, accountability model design, cross-functional governance documentation, stakeholder alignment across Engineering and Product leadership",
        lessonsLearned:
          "Product leaders were generally supportive - they had often lacked a single, accountable engineering counterpart for system design. Those resistant cared about unilateral decision-making authority; gaining consensus with them required more formal authority. Clear accountability structures benefit those who want collaboration, and constrain those who prefer autonomy.",
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
      },
      {
        situation:
          "Indeed R&D organization needed structured approach to AI coding tool adoption",
        approach:
          "Defined behaviors, tools, and measurements for AI usage across R&D organization; focused specifically on AI coding tools rather than AI in products",
        technicalWork:
          "AI coding tool evaluation, usage behavior frameworks, measurement systems",
        lessonsLearned:
          "AI tool adoption cannot be forced. Software engineers value freedom to make decisions and seeing their products work in production. Encouraging rather than requiring tool usage led to greater adoption.",
      },
      {
        situation:
          "Mentored senior staff across Engineering, Product Management, Program Management, and Data Science - needed scalable approach that didn't require domain expertise in each area",
        approach:
          "Position as coach, not all-knowing expert. Mentee owns identifying topics, areas of growth, and what kind of mentorship they want. Iterate with mentee to tie their interests to company needs and industry direction. Follow GROW coaching model: Goal, Reality, Opportunities, 'Will Do'. Regular check-ins build accountability; cycle continues goal to goal.",
        technicalWork:
          "Mentored through role changes and promotion cycles. Notable example: 9-month mentorship of senior data scientist who wanted both promotion to principal AND role change to software engineering - accomplished both by identifying specific goals for each track and diligently working toward them.",
        lessonsLearned:
          "Effective mentorship doesn't require being an expert in the mentee's domain - it requires helping them build expertise themselves. Mentee ownership of the agenda creates accountability and ensures relevance.",
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
      },
      {
        situation:
          "Indeed's CEO declared an annual goal of 8MM interviews on Indeed's interview platform, but no team or individual was made accountable. Eventually 5 different teams claimed to have developed an interview platform.",
        approach:
          "Worked with executive stakeholders to align on the need for a single, canonical platform and data model for 'interview'. Then worked directly with the competing teams to determine who would develop and maintain the consolidated platform.",
        technicalWork:
          "Platform consolidation, canonical data model definition, cross-team architectural alignment",
        lessonsLearned:
          "Platform consolidation requires both executive alignment/mandate AND clear opportunities for displaced teams. Convincing teams to cede scope worked by showing that smaller focus enables greater impact - easier to be impactful with focused scope than trying to boil the ocean.",
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
      },
      {
        situation:
          "Led a tier-1 platform service that other AWS services and customers depended on for availability",
        approach:
          "Constantly prioritize user experience and availability over team productivity. Even when addressing underlying technical and procedural issues, production user experience and availability must remain the priority.",
        technicalWork:
          "Operational excellence for tier-1 services, incident management, dependency management",
        lessonsLearned:
          "Never blame your system's lack of availability on your dependencies. It was your choice to take a dependency on an external system, so you need to live with that choice. Tier-1 operations require accepting full accountability for user experience.",
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
      },
      {
        situation:
          "Amazon Echo needed to integrate with Amazon's existing retail ecosystem while maintaining customer trust and safety mechanisms",
        approach:
          "Prioritized listening over persuading when integrating with core retail teams. Understood that existing teams had built safety mechanisms and customer trust that could not be violated when exposed through Echo.",
        technicalWork:
          "Ecosystem service integration ensuring retail safety mechanisms and customer trust were preserved across voice UI, shopping, and accessibility features",
        lessonsLearned:
          "Integrating a new product into an established company ecosystem requires more listening than persuading. Existing teams have built trust and safety mechanisms that must be respected, not overridden.",
      }],
    },
    {
      company: "SignalSet",
      role: "Director of Product Development",
      period: "June 2011 – August 2012",
      highlights: [
        "Third employee and first technical hire",
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
      "Creating alignment between engineering best practices and on-the-ground activities",
      "AI-native development (Claude Code, Cursor) - actively shipping production apps",
      "Rapid prototyping and iteration with AI assistance",
    ],
    moderate: [
      "Hands-on full-stack coding (TypeScript, Python, Node.js, React, FastAPI)",
      "Cost transformation & unit economics",
      "Product management",
      "API design and service boundaries",
      "Developer velocity and SDLC optimization",
      "AI agent development (Claude SDK, LangGraph, multi-agent orchestration)",
      "Prompt engineering and LLM system design",
      "Roadmap work breakdown structures",
      "Tracking long-run, quantitative metrics for broad goals"
    ],
    gaps: [
      "Deep ML/AI research (practical AI application, not ML research)",
      "Startup founder experience (advisor/employee, not founder)",
      "Deep infrastructural knowledge (e.g., K8s, Terraform, networking, etc.) -- passing knowledge at best."
    ],
  },

  education: [
    {
      school: "Stanford University",
      degree: "B.S. Cognitive Science, minor in Mathematics",
      aiContext: {
        situation: "Studied cognitive science with focus on emergent properties of complex systems",
        approach: "Apply understanding that very complex systems - whether silicon or carbon-based - exhibit emergent properties that can be reasoned about and influenced through subtle or major changes. Results of influence are not deterministic, but through experience and experimentation we become more expert at this influence.",
        technicalWork: "Application of complex systems thinking to both technical architecture and organizational design",
        lessonsLearned: "Complex systems - technical or human - share fundamental properties. Understanding emergence helps predict how interventions will propagate, even when outcomes aren't fully deterministic.",
      },
    },
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
    "Would Grady be a good fit for a fast-moving startup team that values AI-native development and autonomy?",
    "Would Grady be a good fit for a fractional CTO role at a Series B startup?",
    "How does Grady approach organizational management and mentorship?",
    "What's Grady's experience with organizational transformation and operating models?",
    "Tell me about Grady's cross-functional collaboration and leadership.",
  ],
};

export type GradyProfile = typeof gradyProfile;
