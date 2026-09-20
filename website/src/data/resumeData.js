export const ResumeData = {
  personal: {
    name: 'Deepak Polisetti',
    fullName: 'Polisetti M N Venkata Sai Deepak',
    role: 'B.Tech in CSE (AI & ML)',
    title: 'AI & Data Analytics Professional',
    tagline: 'Transforming complex data and machine learning research into high-impact, real-world intelligent systems.',
    objective: 'Driven AI & Data Analytics engineer focused on developing scalable machine learning models, NLP pipelines, and interactive analytics dashboards that solve tangible business and environmental problems.',
    bio: 'Computer Science student specializing in AI and Machine Learning at Uttaranchal University. Experienced through enterprise internships at IBM and Shell, building production-grade RAG systems, time-series emissions forecasting pipelines, and intelligent computer vision applications. Driven by curiosity and a bias towards building real-world solutions.',
    email: 'polisettideepak14348@gmail.com',
    phone: '+91 79815 85468',
    location: 'Dehradun, Uttarakhand, India',
    status: 'Open to Opportunities',
    availability: 'Full-time / Internships',
    cgpa: '8.61 / 10.0',
    sgpa: '9.04 / 10.0',
    graduationYear: '2027',
    profileImage: '/assets/profile.jpg',
    resumeUrl: '/assets/resume.pdf',
    socials: {
      linkedin: 'https://www.linkedin.com/in/deepak-polisetti/',
      github: 'https://github.com/DEEPAK21072005',
      kaggle: 'https://www.kaggle.com/deepakpolisetti',
      twitter: 'https://twitter.com/_gentle_man_21',
    }
  },

  education: [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science & Engineering (AI & ML)',
      institution: 'Uttaranchal University',
      location: 'Dehradun, Uttarakhand, India',
      duration: '2023 — 2027',
      cgpa: '8.61 / 10.0',
      sgpa: '9.04 / 10.0',
      status: 'Currently Pursuing (6th Sem SGPA: 9.04)',
      highlights: [
        'Specialization in Artificial Intelligence & Machine Learning',
        'Academic Excellence with 6th Semester 9.04 SGPA and 8.61 CGPA',
        'Core coursework: Machine Learning, Deep Learning, NLP, Data Structures, DBMS, Cloud Computing'
      ]
    }
  ],

  internships: [
    {
      id: 'ibm-ai-cloud',
      company: 'IBM',
      role: 'AI & Cloud Intern',
      period: 'Summer 2025',
      type: 'Enterprise AI Division',
      description: 'Worked on enterprise AI solutions leveraging IBM Cloud and WatsonX platform. Built intelligent applications using Retrieval Augmented Generation (RAG) and generative AI models.',
      bullets: [
        'Developed RAG-based applications using IBM WatsonX and Granite models for enterprise knowledge retrieval',
        'Gained hands-on experience with IBM Cloud services, API integration, and AI deployment pipelines',
        'Explored quantum computing fundamentals and their potential applications in AI optimization'
      ],
      technologies: ['IBM Cloud', 'WatsonX', 'RAG', 'Granite Models', 'Python', 'Quantum Computing'],
      certificate: '/assets/internships/IBM Internship certificate.pdf',
      color: '#3B82F6',
      icon: 'Cloud'
    },
    {
      id: 'shell-green-skills',
      company: 'Shell',
      role: 'Green Skills Intern',
      period: 'Spring 2024',
      type: 'Energy & Sustainability',
      description: "Participated in Shell's intensive sustainability program focusing on energy transition and environmental impact analytics.",
      bullets: [
        'Analyzed greenhouse gas (GHG) emissions data to identify sustainability optimization opportunities',
        'Developed data-driven insights for transitioning towards cleaner energy sources',
        'Collaborated on practical solutions promoting corporate sustainability and environmental responsibility'
      ],
      technologies: ['Data Analytics', 'Sustainability Reporting', 'GHG Modeling', 'Excel', 'Energy Transition'],
      certificate: '/assets/internships/Shell internship.pdf',
      color: '#10B981',
      icon: 'Leaf'
    },
    {
      id: 'ibm-skillsbuild',
      company: 'IBM SkillsBuild',
      role: 'AI & Data Foundations Intern',
      period: 'Fall 2023',
      type: 'AI & Cloud Architecture',
      description: 'Engaged in a comprehensive skill development program emphasizing foundational AI concepts, cloud adoption, and modern cybersecurity practices.',
      bullets: [
        'Mastered the application of generative AI for code generation and secure software development',
        'Completed practical modules on cloud journeys, understanding enterprise cloud architectures',
        'Built a solid foundation in cybersecurity principles intertwined with AI technologies'
      ],
      technologies: ['AI Foundations', 'Cybersecurity', 'Cloud Architecture', 'Generative AI', 'Code Generation'],
      certificate: '/assets/internships/IBM SkillsBuild certificate.pdf',
      color: '#8B5CF6',
      icon: 'ShieldCheck'
    }
  ],

  projects: [
    {
      id: 'saas-revenue-leakage',
      title: 'SaaS Revenue Leakage & Subscription Lifecycle Reconciliation',
      category: 'data',
      categoryLabel: 'Data & Analytics',
      featured: true,
      tagline: 'Financial MRR Waterfall, Cohort NRR/GRR Retention, and Parametric Survival Modeling.',
      problem: 'SaaS enterprises lose millions to hidden MRR churn and failed dunning cycles across complex subscription lifecycles without automated audit reconciliations.',
      solution: 'Architected an end-to-end financial data pipeline in PostgreSQL and Python reconciling continuous date-spined MRR waterfalls, cohort retention metrics (NRR/GRR), and semi-parametric Cox Proportional Hazards survival models across 63,000+ billing episodes to recapture $3.41M ARR.',
      bullets: [
        'Reconstructed continuous date-spined MRR waterfalls reconciling New, Expansion, Contraction, and Churn ARR in PostgreSQL 16',
        'Fitted Kaplan-Meier & Cox Proportional Hazards survival models evaluating recovery velocity and churn hazard across 63,135 billing episodes',
        'Simulated algorithmic dunning policy recapturing +$3.41M ARR/yr (-44% involuntary churn reduction) with a 40.1x Year-1 ROI multiple',
        'Engineered 2-page Power BI executive suite with 16 production DAX measures and interactive What-If scenario modeling'
      ],
      technologies: ['Python', 'PostgreSQL 16', 'Pandas', 'Lifelines', 'Power BI / DAX', 'Docker', 'Statistical Modeling'],
      impact: '+$3.41M Annual ARR Recaptured & -44% Involuntary Churn via Cox Survival Modeling with 40.1x Year-1 ROI',
      github: 'https://github.com/DEEPAK21072005/saas-revenue-leakage-audit',
      demo: 'https://github.com/DEEPAK21072005/saas-revenue-leakage-audit',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'ai-career-assistant',
      title: 'AI Career Assistant (CareerBot)',
      category: 'ai',
      categoryLabel: 'AI & Machine Learning',
      featured: true,
      tagline: 'Intelligent RAG-powered resume analyzer and career strategy coach.',
      problem: 'Job seekers struggle to align their resumes with fast-evolving tech job descriptions and generate tailored interview prep.',
      solution: 'Built an intelligent CareerBot using LLMs and RAG that analyzes resumes against target roles, extracts key skill gaps, and delivers customized career strategies.',
      bullets: [
        'Implemented semantic vector chunking with ChromaDB vector store and LangChain orchestration',
        'Automated skill-gap identification with 70% faster analysis compared to manual resume reviews',
        'Generated dynamic interview questions tailored to candidate project experiences'
      ],
      technologies: ['Python', 'LangChain', 'RAG', 'LLMs', 'OpenAI API', 'Vector DB'],
      impact: 'Accelerated job alignment analysis by 70% with tailored interview roadmaps',
      github: 'https://github.com/DEEPAK21072005/CareerBot-AI-Assistant',
      demo: 'https://github.com/DEEPAK21072005/CareerBot-AI-Assistant',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'ghg-emissions-dashboard',
      title: 'GHG Emissions Prediction Dashboard',
      category: 'data',
      categoryLabel: 'Data & Analytics',
      featured: true,
      tagline: 'Predictive machine learning pipeline & visual dashboard for environmental sustainability.',
      problem: 'Organizations need accurate, data-driven forecasts of greenhouse gas emissions to meet compliance and sustainability goals.',
      solution: 'Engineered a machine learning pipeline and interactive dashboard predicting industry greenhouse gas emission trends based on historical data.',
      bullets: [
        'Constructed multivariate regression and time-series forecasting models in scikit-learn',
        'Designed interactive visual reporting charts tracking emission anomalies and reduction targets',
        'Applied in Shell Green Skills sustainability analytics program for environmental impact reporting'
      ],
      technologies: ['Python', 'scikit-learn', 'Pandas', 'Power BI', 'Streamlit', 'NumPy'],
      impact: 'Accurate predictive forecasting utilized for sustainability compliance modeling',
      github: 'https://github.com/DEEPAK21072005/Week-1-3-GHG-Prediction',
      demo: 'https://github.com/DEEPAK21072005/Week-1-3-GHG-Prediction',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'emotion-lens',
      title: 'EmotionLens — Sentiment & Emotion Classifier',
      category: 'ai',
      categoryLabel: 'AI & Machine Learning',
      featured: true,
      tagline: 'Real-time NLP sentiment and multi-class emotion classification engine.',
      problem: 'Businesses struggle to monitor user emotion and sentiment trends across large unstructured text channels in real time.',
      solution: 'Developed an NLP-driven sentiment and emotion detection pipeline using NLTK, TF-IDF, and scikit-learn classifiers with real-time text analysis and visual emotion confidence breakdown.',
      bullets: [
        'Trained multi-class classification models delivering 89%+ accuracy on nuanced sentiment datasets',
        'Built tokenization, lemmatization, and TF-IDF feature pipelines for robust text normalization',
        'Provides real-time confidence scores for 6 core emotions (Joy, Sadness, Anger, Fear, Love, Surprise)'
      ],
      technologies: ['Python', 'NLP', 'NLTK', 'scikit-learn', 'Pandas', 'Streamlit'],
      impact: '89%+ Classification Accuracy on multi-class emotional text benchmarks',
      github: 'https://github.com/DEEPAK21072005/Emotion-Detection-Using-NLP',
      demo: 'https://emotion-lens-deepak.vercel.app',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'fake-news-detection',
      title: 'Automated Fake News Detector',
      category: 'ai',
      categoryLabel: 'AI & Machine Learning',
      featured: true,
      tagline: 'TF-IDF NLP machine learning model flagging misinformation and deceptive headlines.',
      problem: 'Misinformation spreads quickly across social media requiring automated credibility verification.',
      solution: 'Trained a machine learning classifier using TF-IDF vectorization to detect deceptive news articles and headlines.',
      bullets: [
        'Preprocessed uncurated news datasets through n-gram tokenization and stop-word removal',
        'Trained PassiveAggressive and Logistic Regression classifiers evaluating confusion matrices',
        'Achieved 91% precision in identifying sensationalized and factually inconsistent claims'
      ],
      technologies: ['Python', 'scikit-learn', 'NLP', 'TF-IDF', 'Pandas'],
      impact: '91% Precision on identifying fake and sensationalized news content',
      github: 'https://github.com/DEEPAK21072005/Fake-News-Detector',
      demo: 'https://veritas-ai-murex.vercel.app',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'korean-grammar-coach',
      title: 'Korean Grammar Coach (Gemma-2B CLI)',
      category: 'ai',
      categoryLabel: 'AI & Machine Learning',
      featured: false,
      tagline: 'Lightweight offline Korean grammar correction tool fine-tuned with Gemma 2B.',
      problem: 'Language learners lack immediate, context-aware grammar explanation tools tailored to conversational Korean.',
      solution: 'Fine-tuned Gemma-2B LLM into an interactive CLI tool that breaks down Korean sentence structures, honorifics, and grammatical particles.',
      bullets: [
        'Fine-tuned lightweight Gemma-2B model for conversational Korean grammar diagnostics',
        'Implemented offline bilingual explanations of honorifics and sentence particles',
        'Optimized CLI prompt interface delivering sub-second response times'
      ],
      technologies: ['Python', 'Gemma-2B', 'PyTorch', 'Transformers', 'NLP'],
      impact: 'Sub-second local grammar corrections with high accuracy on conversational datasets',
      github: 'https://github.com/DEEPAK21072005/Korean-Grammar-Coach-Gemma-2B-CLI-Tool',
      demo: 'https://github.com/DEEPAK21072005/Korean-Grammar-Coach-Gemma-2B-CLI-Tool',
      image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'air-draw',
      title: 'Air Draw Pro',
      category: 'ai',
      categoryLabel: 'AI & Machine Learning',
      featured: false,
      tagline: 'Touchless 3D fingertip tracking on virtual canvases via webcam.',
      problem: 'Traditional digital drawing requires specialized hardware tablets or touchscreens.',
      solution: 'Created an interactive computer vision application that tracks fingertip movements in 3D space to draw dynamically on a virtual canvas.',
      bullets: [
        'Mapped real-time spatial coordinates of fingertips to RGB canvas buffer matrix',
        'Engineered virtual color palette selection triggered by pinch gestures in mid-air',
        'Enabled canvas export and clear controls with simple hand motion cues'
      ],
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'NumPy'],
      impact: 'Allowed intuitive canvas drawing and color selection in mid-air',
      github: 'https://github.com/DEEPAK21072005/air-draw-pro',
      demo: 'https://github.com/DEEPAK21072005/air-draw-pro',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'gesture-control',
      title: 'Gesture Control Interface',
      category: 'ai',
      categoryLabel: 'AI & Machine Learning',
      featured: false,
      tagline: 'Real-time computer vision system for touchless system and media navigation.',
      problem: 'Touchless computer navigation is needed for hands-free interactions and immersive media playback.',
      solution: 'Built a real-time computer vision system tracking hand landmarks to control video reels, volume, and media playback via gestures.',
      bullets: [
        'Utilized MediaPipe hand landmark detection tracking 21 3D hand coordinates in real-time',
        'Implemented gesture recognition smoothing algorithms to eliminate false positive triggers',
        'Controlled system volume, playback, and scroll navigation with sub-30ms execution'
      ],
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
      impact: 'Sub-30ms latency touchless media navigation on standard webcams',
      github: 'https://github.com/DEEPAK21072005/Gesture-Controlled-Reels-Interface',
      demo: 'https://github.com/DEEPAK21072005/Gesture-Controlled-Reels-Interface',
      image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'blind-drop-x',
      title: 'Blind Drop X — Official Promo Hub',
      category: 'web',
      categoryLabel: 'Web Development',
      featured: true,
      tagline: 'Zero-Knowledge Ephemeral Communication & APK Distribution Portal.',
      problem: 'Users need secure, zero-knowledge ephemeral messaging with a clean, trustworthy APK download and promotional portal.',
      solution: 'Engineered the official landing page and APK distribution platform for Blind Drop X, featuring zero-knowledge architecture details, responsive dark-mode UI, and secure APK download links.',
      bullets: [
        'Engineered responsive zero-knowledge landing page with interactive feature breakdowns',
        'Implemented secure direct APK download pipeline and release version telemetry',
        'Optimized with Vite and Tailwind CSS for instant sub-second load times'
      ],
      technologies: ['JavaScript', 'React', 'Tailwind CSS', 'Vite', 'Vercel'],
      impact: 'High-conversion landing portal for privacy-first ephemeral communication',
      github: 'https://github.com/DEEPAK21072005/blind-drop-x-promo',
      demo: 'https://blind-drop-x-promo.vercel.app',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'express-crud',
      title: 'NexusCRUD Pro — Enterprise RESTful Engine & Dashboard',
      category: 'web',
      categoryLabel: 'Web Development',
      featured: false,
      tagline: 'Clean architecture RESTful backend service with centralized error handling and real-time dashboard.',
      problem: 'Scalable backend services require robust architectural patterns for RESTful resource management and error handling.',
      solution: 'Architected a modular Express.js backend API featuring strict route validation, middleware pipeline, and clean JSON endpoints.',
      bullets: [
        'Designed modular router controllers with decoupled service layer business logic',
        'Implemented centralized error handling middleware and Joi schema validation',
        'Structured standard HTTP status code contracts and JSON payload responses'
      ],
      technologies: ['Node.js', 'Express.js', 'REST APIs', 'JavaScript', 'Postman'],
      impact: 'Production-grade modular backend API boilerplate with robust validation',
      github: 'https://github.com/DEEPAK21072005/NexusCRUD-Pro',
      demo: 'https://express-crud-experiment.vercel.app',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'expense-tracker',
      title: 'Personal Financial Analytics Dashboard',
      category: 'web',
      categoryLabel: 'Web Development',
      featured: false,
      tagline: 'Modern responsive financial management app with dynamic breakdown charts.',
      problem: 'Users need a simple, intuitive dashboard to track personal finances, categorizing income and expenses effortlessly.',
      solution: 'Designed and developed a responsive financial management app featuring dynamic balance calculations and categorical filtering.',
      bullets: [
        'Integrated dynamic Chart.js visualizations for income vs expense category breakdowns',
        'Utilized client-side localStorage for instant data persistence with zero backend latency',
        'Built responsive transactions log with search, sort, and date-range filters'
      ],
      technologies: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Chart.js', 'LocalStorage'],
      impact: '100% client-side privacy-first expense management with instant visual feedback',
      github: 'https://github.com/DEEPAK21072005/Expense-Tracker-App-',
      demo: 'https://expense-tracker-pro-lime.vercel.app',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'komorebi-tasks',
      title: 'Komorebi Tasks',
      category: 'web',
      categoryLabel: 'Web Development',
      featured: true,
      tagline: 'Mindful, precision-crafted productivity and task management web application.',
      problem: 'Traditional task managers are cluttered and distracting, lacking mindful aesthetics and serene workflow organization.',
      solution: 'Designed and engineered Komorebi Tasks — a minimalist, Japanese aesthetic-inspired task architecture combining serene minimalism, priority scheduling, and local persistence.',
      bullets: [
        'Built with minimalist Japanese design philosophy prioritizing focus and mental clarity',
        'Integrated client-side state preservation with instant offline synchronization',
        'Engineered keyboard shortcuts, custom priority tags, and clean completion micro-animations'
      ],
      technologies: ['React', 'Vite', 'Tailwind CSS', 'LocalStorage', 'Lucide Icons'],
      impact: 'Distraction-free, mindful task management with sub-millisecond local latency',
      github: 'https://github.com/DEEPAK21072005/komorebi-app',
      demo: 'https://komorebi-tasks.vercel.app',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'excel-data-analysis',
      title: 'Excel Data Analytics & Financial Modeling',
      category: 'data',
      categoryLabel: 'Data & Analytics',
      featured: false,
      tagline: 'Comprehensive portfolio of advanced Excel data modeling, pivot tables, and KPI dashboards.',
      problem: 'Enterprise decision makers require fast, reliable spreadsheet models and dynamic visual dashboards from raw transactional datasets.',
      solution: 'Engineered automated Excel dashboards, multi-variable pivot tables, sales & profit financial models, and executive KPI summaries.',
      bullets: [
        'Constructed complex multi-sheet financial models using advanced lookup and dynamic array formulas',
        'Created dynamic interactive pivot dashboards summarizing transactional sales and profitability trends',
        'Streamlined reporting processes through automated calculation models and clean visual formatting'
      ],
      technologies: ['Microsoft Excel', 'Data Modeling', 'Pivot Tables', 'Formulas & VLOOKUP/XLOOKUP', 'KPI Dashboards'],
      impact: 'Streamlined corporate data reporting and automated manual spreadsheet calculations',
      github: 'https://github.com/DEEPAK21072005/Excel-Data-Analysis-Journey',
      demo: 'https://github.com/DEEPAK21072005/Excel-Data-Analysis-Journey',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'weather-forecast',
      title: 'Global Weather Forecast Hub',
      category: 'web',
      categoryLabel: 'Web Development',
      featured: false,
      tagline: 'Real-time multi-city meteorological dashboard with dynamic weather status.',
      problem: 'Users need quick access to current weather conditions and multi-day forecasts for global locations.',
      solution: 'Developed a real-time weather forecast web app fetching live data from weather APIs with location search and weather icons.',
      bullets: [
        'Integrated asynchronous OpenWeatherMap API pipeline with graceful error handling',
        'Rendered humidity, wind speed, UV index, and 5-day forecast outlooks',
        'Dynamic background theming reflecting current temperature and atmospheric conditions'
      ],
      technologies: ['React', 'REST API', 'JavaScript', 'Tailwind CSS'],
      impact: 'Real-time weather metrics and multi-day forecasts across global coordinates',
      github: 'https://github.com/DEEPAK21072005/react-weather-forecast',
      demo: 'https://github.com/DEEPAK21072005/react-weather-forecast',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'dragon-cursor',
      title: 'Dragon Cursor Ultimate Physics Engine',
      category: 'web',
      categoryLabel: 'Web Development',
      featured: false,
      tagline: 'Interactive 60fps particle physics trailing canvas animation engine.',
      problem: 'Standard web cursors lack engaging visual feedback for interactive gaming and creative portfolios.',
      solution: 'Created a high-performance custom particle cursor effect featuring smooth drag physics and dynamic trailing canvas animations.',
      bullets: [
        'Developed custom Verlet integration physics model for elastic dragon segment trailing',
        'Optimized HTML5 2D Canvas rendering loop running smoothly at consistent 60 FPS',
        'Implemented dynamic glowing chromatic particle trails responding to mouse speed'
      ],
      technologies: ['Vanilla JS', 'HTML5 Canvas', 'CSS Animations', 'Vector Physics'],
      impact: 'Delivered fluid 60fps cursor interactions without degrading main thread performance',
      github: 'https://github.com/DEEPAK21072005/Dragon-Cursor-Ultimate',
      demo: 'https://github.com/DEEPAK21072005/Dragon-Cursor-Ultimate',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'todo-react',
      title: 'React Task Management Engine',
      category: 'web',
      categoryLabel: 'Web Development',
      featured: false,
      tagline: 'Modern task productivity suite with declarative state management.',
      problem: 'Daily task tracking requires instantaneous state updates, task filtering, and persistence.',
      solution: 'Built a clean, modern Todo application in React utilizing component composition, custom hooks, and state management.',
      bullets: [
        'Built with declarative React component architecture and custom useLocalStorage hooks',
        'Supported priority tags, category grouping, and active/completed toggle filters',
        'Smooth CSS transition animations on task completion and deletion'
      ],
      technologies: ['React', 'JavaScript', 'CSS Modules', 'LocalStorage'],
      impact: 'Streamlined task organization with sub-millisecond local state synchronization',
      github: 'https://github.com/DEEPAK21072005/react-todo-app',
      demo: 'https://github.com/DEEPAK21072005/react-todo-app',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'jarvis-voice-assistant',
      title: 'Jarvis Voice Assistant',
      category: 'ai',
      categoryLabel: 'AI & Machine Learning',
      featured: false,
      tagline: 'Speech-driven automation tool for desktop control and task delegation.',
      problem: 'Automating desktop tasks through natural speech recognition increases productivity for power users.',
      solution: 'Engineered a Python-based voice assistant that listens to spoken commands to execute web searches, launch apps, and play media.',
      bullets: [
        'Integrated pyttsx3 offline text-to-speech synthesis and Google speech recognition API',
        'Automated multi-task system actions (browser queries, application launching, time/weather)',
        'Resilient acoustic sampling with background noise cancellation thresholds'
      ],
      technologies: ['Python', 'pyttsx3', 'speech_recognition', 'OS API', 'Automation'],
      impact: 'Hands-free voice execution of desktop workflows with sub-second command response',
      github: 'https://github.com/DEEPAK21072005',
      demo: 'https://github.com/DEEPAK21072005',
      image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'snake-water-gun',
      title: 'Snake Water Gun Game',
      category: 'game',
      categoryLabel: 'Games & Interactive',
      featured: false,
      tagline: 'Classic algorithmic decision game with animated round reveal.',
      problem: 'Classic decision games require a modern interactive web interface and smooth logic evaluation.',
      solution: 'Implemented the classic Snake-Water-Gun decision game with score tracking, animated round reveal, and responsive UI.',
      bullets: [
        'Event-driven JavaScript game loop with computerized probability algorithms',
        'Dynamic score persistence and animated win/loss feedback states'
      ],
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'DOM API'],
      impact: 'Engaging interactive web game showcasing clean logic structuring',
      github: 'https://github.com/DEEPAK21072005/Snake_Water_Gun',
      demo: 'https://github.com/DEEPAK21072005/Snake_Water_Gun',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'perfect-guess',
      title: 'Perfect Guess Mathematical Game',
      category: 'game',
      categoryLabel: 'Games & Interactive',
      featured: false,
      tagline: 'Algorithmic binary search number guessing game.',
      problem: 'Engaging mathematical logic games help build algorithmic thinking for young learners.',
      solution: 'Built an interactive number guessing game with hint feedback ("Higher/Lower") and high score tracking.',
      bullets: [
        'Demonstrates binary search principles and minimum guess calculation',
        'Clean CLI interaction loop with input validation and high-score recording'
      ],
      technologies: ['Python', 'CLI', 'Algorithms', 'Logic Engine'],
      impact: 'Educational game illustrating optimal binary search strategies',
      github: 'https://github.com/DEEPAK21072005',
      demo: 'https://github.com/DEEPAK21072005',
      image: 'https://images.unsplash.com/photo-1606166325683-e6deb697d301?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 'deepak-portfolio-project',
      title: 'Project Atlas — Personal Portfolio',
      category: 'web',
      categoryLabel: 'Web Development',
      featured: true,
      tagline: 'Modern, high-performance React portfolio with Tailwind CSS and protected admin.',
      problem: 'Engineers need a world-class personal portfolio showcasing real-world impact without template fluff.',
      solution: 'Architected and built this single-page portfolio with React, Tailwind CSS, Framer Motion, Chart.js skill analytics, and a password-protected admin portal.',
      bullets: [
        'High-performance React single-page app with Swiper.js certificate carousel and Chart.js analytics',
        'Secured password-protected Admin Panel allowing live addition of projects & credentials',
        '100% responsive, dark-mode native with seamless EmailJS message integration'
      ],
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Chart.js', 'Swiper.js', 'EmailJS'],
      impact: 'Google-quality aesthetic, sub-second load, 100% lighthouse compliance',
      github: 'https://github.com/DEEPAK21072005/deepak-portfolio',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=600&auto=format&fit=crop'
    }
  ],

  skills: {
    chartSkills: [
      { name: 'Python', score: 92, category: 'Programming', color: '#00F5FF' },
      { name: 'Machine Learning', score: 88, category: 'AI & ML', color: '#10B981' },
      { name: 'NLP & LLMs', score: 89, category: 'AI & ML', color: '#8B5CF6' },
      { name: 'RAG & LangChain', score: 87, category: 'AI & ML', color: '#00F5FF' },
      { name: 'Data Analytics', score: 86, category: 'Analytics', color: '#3B82F6' },
      { name: 'SQL & Databases', score: 85, category: 'Programming', color: '#F59E0B' },
      { name: 'Cloud & WatsonX', score: 84, category: 'Cloud', color: '#3B82F6' },
      { name: 'Deep Learning', score: 82, category: 'AI & ML', color: '#8B5CF6' },
      { name: 'React & Web Dev', score: 83, category: 'Web', color: '#10B981' },
      { name: 'Computer Vision', score: 80, category: 'AI & ML', color: '#EC4899' }
    ],

    categories: [
      {
        id: 'programming',
        title: 'Programming & Foundations',
        color: '#8B5CF6',
        skills: ['Python', 'SQL', 'C++', 'JavaScript (ES6+)', 'Java', 'HTML5', 'CSS3 / Tailwind']
      },
      {
        id: 'ai-ml',
        title: 'AI & Machine Learning',
        color: '#00F5FF',
        skills: ['Machine Learning', 'Deep Learning', 'NLP', 'Prompt Engineering', 'LangChain', 'RAG', 'LLMs', 'Computer Vision', 'OpenCV', 'MediaPipe', 'scikit-learn', 'PyTorch']
      },
      {
        id: 'data-analytics',
        title: 'Data & Analytics',
        color: '#3B82F6',
        skills: ['Power BI', 'Excel & Modeling', 'Tableau', 'Pandas', 'NumPy', 'Data Cleaning', 'Time Series Analysis', 'Exploratory Data Analysis (EDA)']
      },
      {
        id: 'cloud-tools',
        title: 'Cloud & Developer Tools',
        color: '#10B981',
        skills: ['IBM Cloud', 'WatsonX', 'AWS Architecture', 'Git & GitHub', 'VS Code', 'REST APIs', 'Streamlit', 'Jupyter']
      },
      {
        id: 'currently-learning',
        title: 'Currently Exploring',
        color: '#F59E0B',
        skills: ['Docker & Containers', 'FastAPI', 'LangGraph', 'Multi-Agent Architectures', 'Quantum Computing Fundamentals']
      }
    ]
  },

  certifications: [
    /* IBM */
    {
      id: 'ibm-rag-skillsbuild',
      title: 'Retrieval Augmented Generation (RAG)',
      issuer: 'IBM',
      category: 'AI & ML',
      date: '2025',
      file: '/assets/certificates/IBM/Completion Certificate _ SkillsBuild Retrival Augumented Generation.pdf',
      badge: 'Verified IBM Credential'
    },
    {
      id: 'ibm-quantum',
      title: 'Exploring Quantum Computing',
      issuer: 'IBM',
      category: 'Quantum',
      date: '2025',
      file: '/assets/certificates/IBM/Exploring Quantam Computing by IBM.pdf',
      badge: 'IBM Quantum'
    },
    {
      id: 'ibm-ai-rag',
      title: 'AI Powered RAG Systems',
      issuer: 'IBM',
      category: 'AI & ML',
      date: '2025',
      file: '/assets/certificates/IBM/IBM AI POWERED RAG.pdf',
      badge: 'IBM AI'
    },
    {
      id: 'ibm-cybersecurity-getting-started',
      title: 'Getting Started with Cybersecurity',
      issuer: 'IBM',
      category: 'Security',
      date: '2025',
      file: '/assets/certificates/IBM/IBM Getting started with Cyber Security..pdf',
      badge: 'IBM Security'
    },
    {
      id: 'ibm-intro-ai',
      title: 'Introduction to Artificial Intelligence',
      issuer: 'IBM',
      category: 'AI & ML',
      date: '2025',
      file: '/assets/certificates/IBM/IBMDesign20250715-28-q9ee6j 1st course ai.pdf',
      badge: 'IBM AI'
    },
    {
      id: 'ibm-journey-cloud',
      title: 'Journey to Cloud Architecture',
      issuer: 'IBM',
      category: 'Cloud',
      date: '2025',
      file: '/assets/certificates/IBM/IBMDesign20250716-26-Journey to Cloud.pdf',
      badge: 'IBM Cloud'
    },
    {
      id: 'ibm-code-gen-granite',
      title: 'Code Generation with Granite Models',
      issuer: 'IBM',
      category: 'AI & ML',
      date: '2025',
      file: '/assets/certificates/IBM/IBMDesign20250722-31-dcnp47 Code gen with granite.pdf',
      badge: 'IBM Granite'
    },
    {
      id: 'ibm-genai-cybersecurity',
      title: 'Cybersecurity with Generative AI',
      issuer: 'IBM',
      category: 'Security',
      date: '2025',
      file: '/assets/certificates/IBM/Level Up Cyber security with generative AI By IBM.pdf',
      badge: 'IBM GenAI'
    },

    /* Infosys */
    {
      id: 'infosys-ai-java',
      title: 'AI Development with Java',
      issuer: 'Infosys',
      category: 'AI & ML',
      date: '2024',
      file: '/assets/certificates/Infosys/Infosys AI With Java.pdf',
      badge: 'Infosys Springboard'
    },
    {
      id: 'infosys-data-science',
      title: 'Introduction to Data Science',
      issuer: 'Infosys',
      category: 'Data & Analytics',
      date: '2024',
      file: '/assets/certificates/Infosys/Infosys intro to data science.pdf',
      badge: 'Infosys Springboard'
    },
    {
      id: 'infosys-deep-learning',
      title: 'Introduction to Deep Learning',
      issuer: 'Infosys',
      category: 'AI & ML',
      date: '2024',
      file: '/assets/certificates/Infosys/Infosys Intro to Deep Learning.pdf',
      badge: 'Infosys Springboard'
    },
    {
      id: 'infosys-intro-ai',
      title: 'Introduction to Artificial Intelligence',
      issuer: 'Infosys',
      category: 'AI & ML',
      date: '2024',
      file: '/assets/certificates/Infosys/Infosys Introduction to AI.pdf',
      badge: 'Infosys Springboard'
    },
    {
      id: 'infosys-nlp',
      title: 'Natural Language Processing (NLP)',
      issuer: 'Infosys',
      category: 'AI & ML',
      date: '2024',
      file: '/assets/certificates/Infosys/Infosys Introduction toNLP.pdf',
      badge: 'Infosys Springboard'
    },
    {
      id: 'infosys-rpa',
      title: 'Robotic Process Automation (RPA)',
      issuer: 'Infosys',
      category: 'Automation',
      date: '2024',
      file: '/assets/certificates/Infosys/Infosys Robotic process automation.pdf',
      badge: 'Infosys Springboard'
    },
    {
      id: 'infosys-time-mgmt',
      title: 'Professional Time Management',
      issuer: 'Infosys',
      category: 'Professional',
      date: '2024',
      file: '/assets/certificates/Infosys/Infosys Time management.pdf',
      badge: 'Infosys Springboard'
    },
    {
      id: 'infosys-web-dev',
      title: 'Web Development Fundamentals',
      issuer: 'Infosys',
      category: 'Web',
      date: '2024',
      file: '/assets/certificates/Infosys/infosys web development.pdf',
      badge: 'Infosys Springboard'
    },
    {
      id: 'infosys-computer-vision',
      title: 'Computer Vision Applications',
      issuer: 'Infosys',
      category: 'AI & ML',
      date: '2024',
      file: '/assets/certificates/Infosys/Infosyss Computer Vison.pdf',
      badge: 'Infosys Springboard'
    },

    /* AWS */
    {
      id: 'aws-solutions-architecture',
      title: 'AWS Solutions Architecture Job Simulation',
      issuer: 'AWS',
      category: 'Cloud',
      date: '2024',
      file: '/assets/certificates/AWS/AWS FORAGE SOLUTION ARCHITECTURE.pdf',
      badge: 'AWS Forage'
    },
    {
      id: 'aws-cloud-adoption',
      title: 'Introduction to AWS Cloud Adoption Framework',
      issuer: 'AWS',
      category: 'Cloud',
      date: '2024',
      file: '/assets/certificates/AWS/Introduction to AWS Cloud Adoption.pdf',
      badge: 'AWS Training'
    },

    /* Google Cloud */
    {
      id: 'gcp-generative-ai',
      title: 'Google Cloud Generative AI Fundamentals',
      issuer: 'Google Cloud',
      category: 'AI & ML',
      date: '2024',
      file: '/assets/certificates/Google/Google cloud generative ai.pdf',
      badge: 'Google Cloud Skills'
    },

    /* Tata */
    {
      id: 'tata-data-viz',
      title: 'Data Visualization: Empowering Business Decisions',
      issuer: 'Tata',
      category: 'Data & Analytics',
      date: '2024',
      file: '/assets/certificates/Tata/TATA DATA VISUALIZATION.pdf',
      badge: 'Tata Forage'
    },
    {
      id: 'tata-genai',
      title: 'Tata Generative AI Job Simulation',
      issuer: 'Tata',
      category: 'AI & ML',
      date: '2024',
      file: '/assets/certificates/Tata/Tata GenAI.pdf',
      badge: 'Tata Forage'
    },

    /* Deloitte */
    {
      id: 'deloitte-data-analytics',
      title: 'Deloitte Data Analytics Virtual Experience',
      issuer: 'Deloitte',
      category: 'Data & Analytics',
      date: '2024',
      file: '/assets/certificates/Deloitte/Deloitte Data Analytics.pdf',
      badge: 'Deloitte Forage'
    },
    {
      id: 'deloitte-technology-simulation',
      title: 'Deloitte Technology Job Simulation',
      issuer: 'Deloitte',
      category: 'Professional',
      date: '2024',
      file: '/assets/certificates/Deloitte/Deloitte Job Simulation.pdf',
      badge: 'Deloitte Forage'
    },

    /* JP Morgan */
    {
      id: 'jpmorgan-swe',
      title: 'JP Morgan Software Engineering Job Simulation',
      issuer: 'JP Morgan',
      category: 'Software Engineering',
      date: '2024',
      file: '/assets/certificates/JP-Morgan/Jp Moragan software engineering job simulation.pdf',
      badge: 'JP Morgan Forage'
    },
    {
      id: 'jpmorgan-ib',
      title: 'JP Morgan Investment Banking Job Simulation',
      issuer: 'JP Morgan',
      category: 'Finance',
      date: '2024',
      file: '/assets/internships/JP MORGAN INTERNSHIP CERTIFICATE.pdf',
      badge: 'JP Morgan Forage'
    },

    /* Accenture */
    {
      id: 'accenture-swe',
      title: 'Accenture Software Engineering Job Simulation',
      issuer: 'Accenture',
      category: 'Software Engineering',
      date: '2024',
      file: '/assets/certificates/Accenture/Accenture Software engineering.pdf',
      badge: 'Accenture Forage'
    },

    /* Quantium */
    {
      id: 'quantium-data-analytics',
      title: 'Quantium Data Analytics Job Simulation',
      issuer: 'Quantium',
      category: 'Data & Analytics',
      date: '2024',
      file: '/assets/certificates/Quantium/Quantium Data Analytics.pdf',
      badge: 'Quantium Forage'
    },

    /* NISM */
    {
      id: 'nism-certification',
      title: 'NISM Certification in Financial Markets',
      issuer: 'NISM',
      category: 'Finance',
      date: '2024',
      file: '/assets/certificates/NISM/NISM .pdf',
      badge: 'National Institute of Securities Markets'
    },

    /* Simplilearn */
    {
      id: 'simplilearn-excel-chatgpt',
      title: 'Excel Automation using ChatGPT',
      issuer: 'Simplilearn',
      category: 'Data & Analytics',
      date: '2024',
      file: '/assets/certificates/Simplilearn/Simple learn excel automation sung chatgpt.pdf',
      badge: 'Simplilearn'
    },

    /* PCDS */
    {
      id: 'pcds-aptitude',
      title: 'Professional Aptitude Assessment Certificate',
      issuer: 'PCDS',
      category: 'Aptitude',
      date: '2024',
      file: '/assets/certificates/PCDS-Infotech/Free Online Aptitude Test with Certificate _ PCDS Infotech.pdf',
      badge: 'PCDS Infotech'
    },

    /* ICASD */
    {
      id: 'icasd-genai',
      title: 'ICASD Generative AI Research Presentation',
      issuer: 'ICASD',
      category: 'AI & ML',
      date: '2025',
      file: '/assets/certificates/ICASD/ICASDGAI.pdf',
      badge: 'International Conference'
    },

    /* Microsoft */
    {
      id: 'microsoft-cert',
      title: 'Microsoft Technology Certification',
      issuer: 'Microsoft',
      category: 'Cloud & Tech',
      date: '2024',
      file: '/assets/certificates/Microsoft/microsoft certificate.pdf',
      badge: 'Microsoft'
    },

    /* Java */
    {
      id: 'java-cert',
      title: 'Java Programming Professional Certificate',
      issuer: 'Other',
      category: 'Programming',
      date: '2024',
      file: '/assets/certificates/Java/Java_Certificate.pdf',
      badge: 'Verified Java'
    },
    {
      id: 'typing-test-cert',
      title: 'Professional Typing Speed Certification',
      issuer: 'Other',
      category: 'Professional',
      date: '2024',
      file: '/assets/certificates/Typing-Test/Typing test certificate..pdf',
      badge: 'High Speed Typing'
    }
  ],

  achievements: [
    {
      id: 'ibm-internship',
      title: 'IBM AI & Cloud Internship Excellence',
      organization: 'IBM',
      description: 'Successfully completed IBM virtual internship program, gaining hands-on experience in enterprise AI architectures and WatsonX Granite pipelines.',
      year: '2025',
      icon: 'Award',
      badge: 'Industry Honor',
      color: '#3B82F6'
    },
    {
      id: 'shell-internship',
      title: 'Shell Green Skills Sustainability Honors',
      organization: 'Shell',
      description: "Selected for Shell's rigorous sustainability program, developing predictive machine learning models for industrial greenhouse gas reduction.",
      year: '2024',
      icon: 'Leaf',
      badge: 'Sustainability',
      color: '#10B981'
    },
    {
      id: 'google-deepmind',
      title: 'Google DeepMind Challenge Participant',
      organization: 'Google DeepMind',
      description: 'Participated in a global AI challenge tackling complex algorithmic optimization problems and cutting-edge deep learning paradigms.',
      year: '2024',
      icon: 'Brain',
      badge: 'Global AI',
      color: '#00F5FF'
    },
    {
      id: 'msme-hackathon',
      title: 'MSME Idea Hackathon Finalist',
      organization: 'Ministry of MSME',
      description: 'Contributed an innovative tech-driven AI solution addressing real-world operational bottlenecks for small and medium enterprises.',
      year: '2024',
      icon: 'Lightbulb',
      badge: 'Hackathon',
      color: '#F59E0B'
    },
    {
      id: 'icasd-presentation',
      title: 'ICASD Research Presentation on GenAI',
      organization: 'ICASD Conference',
      description: 'Delivered an original research presentation examining enterprise generative AI applications and RAG architectural performance.',
      year: '2025',
      icon: 'Presentation',
      badge: 'Research',
      color: '#8B5CF6'
    },
    {
      id: 'aptitude-assessment',
      title: 'Professional Aptitude Assessment (Top Tier)',
      organization: 'PCDS Infotech',
      description: 'Achieved outstanding score in comprehensive quantitative, logical reasoning, and algorithmic problem-solving aptitude evaluations.',
      year: '2024',
      icon: 'Target',
      badge: 'Assessment',
      color: '#EC4899'
    },
    {
      id: 'pen-pal',
      title: 'International Pen-Pal Cultural Ambassador',
      organization: 'Global Exchange Network',
      description: 'Represented cultural exchange initiatives, building international collaboration and cross-cultural communication fluency.',
      year: '2023',
      icon: 'Globe',
      badge: 'Global Outreach',
      color: '#3B82F6'
    }
  ],

  languages: [
    {
      name: 'English',
      level: 'Professional Working Proficiency',
      percentage: 95,
      nativeName: 'English',
      icon: 'Globe2'
    },
    {
      name: 'Telugu',
      level: 'Native / Bilingual Proficiency',
      percentage: 100,
      nativeName: 'తెలుగు',
      icon: 'Languages'
    },
    {
      name: 'Hindi',
      level: 'Fluent / Native Proficiency',
      percentage: 95,
      nativeName: 'हिन्दी',
      icon: 'Languages'
    }
  ]
};
