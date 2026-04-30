// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in reverse chronological order. Author names with my name in bold.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum Vitae of Amirhossein Ghaffari. Click the button above to download the latest PDF.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-awarded-a-four-year-fully-funded-doctoral-researcher-position-at-the-university-of-oulu-through-competitive-selection",
          title: 'Awarded a four-year fully funded Doctoral Researcher position at the University of Oulu...',
          description: "",
          section: "News",},{id: "news-attending-the-11th-ubiss-summer-school-in-the-smart-iot-wireless-connectivity-in-5g-and-beyond-workshop-at-the-university-of-oulu",
          title: 'Attending the 11th UBISS Summer School in the Smart IoT Wireless Connectivity in...',
          description: "",
          section: "News",},{id: "news-awarded-the-tauno-tönning-foundation-personal-research-grant",
          title: 'Awarded the Tauno Tönning Foundation Personal Research Grant.',
          description: "",
          section: "News",},{id: "news-attending-the-6g-symposium-in-levi-finland",
          title: 'Attending the 6G Symposium in Levi, Finland.',
          description: "",
          section: "News",},{id: "news-attending-ieee-percom-2024-in-biarritz-france-with-a-poster-presentation",
          title: 'Attending IEEE PerCom 2024 in Biarritz, France, with a poster presentation.',
          description: "",
          section: "News",},{id: "news-awarded-an-ieee-student-travel-grant-to-attend-ieee-percom-2024-in-biarritz-france",
          title: 'Awarded an IEEE Student Travel Grant to attend IEEE PerCom 2024 in Biarritz,...',
          description: "",
          section: "News",},{id: "news-attending-the-12th-ubiss-summer-school-as-a-liaison-student-in-the-care-full-more-than-human-urban-futures-workshop-at-the-university-of-oulu",
          title: 'Attending the 12th UBISS Summer School as a liaison student in the Care-full!...',
          description: "",
          section: "News",},{id: "news-attending-acm-kdd-2024-in-barcelona-spain-with-a-poster-presentation",
          title: 'Attending ACM KDD 2024 in Barcelona, Spain, with a poster presentation.',
          description: "",
          section: "News",},{id: "news-attending-the-nvidia-workshop-on-fundamentals-of-accelerated-computing-with-cuda-python-at-the-university-of-oulu",
          title: 'Attending the NVIDIA Workshop on Fundamentals of Accelerated Computing with CUDA Python at...',
          description: "",
          section: "News",},{id: "news-serving-as-a-student-volunteer-with-the-organizing-committee-of-the-acm-14th-international-conference-on-the-internet-of-things-iot-2024-in-oulu-finland",
          title: 'Serving as a student volunteer with the organizing committee of the ACM 14th...',
          description: "",
          section: "News",},{id: "news-attending-ieee-icnsc-2025-in-oulu-finland-as-an-author-of-a-paper",
          title: 'Attending IEEE ICNSC 2025 in Oulu, Finland, as an author of a paper....',
          description: "",
          section: "News",},{id: "news-awarded-an-acm-cikm-student-travel-grant-to-attend-acm-cikm-2025-in-seoul-south-korea",
          title: 'Awarded an ACM CIKM Student Travel Grant to attend ACM CIKM 2025 in...',
          description: "",
          section: "News",},{id: "news-presenting-our-paper-stm-graph-a-python-framework-for-spatio-temporal-mapping-and-graph-neural-network-predictions-at-acm-cikm-2025-in-seoul-south-korea-and-serving-as-a-student-volunteer",
          title: 'Presenting our paper STM-Graph: A Python Framework for Spatio-Temporal Mapping and Graph Neural...',
          description: "",
          section: "News",},{id: "news-will-present-our-paper-graph-conditioned-mixture-of-graph-neural-network-experts-for-traffic-forecasting-at-the-27th-ieee-international-conference-on-mobile-data-management-mdm-2026-athens-greece-on-29-june-2-july-2026",
          title: 'Will present our paper Graph-Conditioned Mixture of Graph Neural Network Experts for Traffic...',
          description: "",
          section: "News",},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Amirhossein_Ghaffari_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6D%69%72%68%6F%73%73%65%69%6E.%67%68%61%66%66%61%72%69@%6F%75%6C%75.%66%69", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/amirhosseinghaffari", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Ahghaffari", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=N6ROMtIAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0006-9264-8681", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Amirhossein-Ghaffari/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
