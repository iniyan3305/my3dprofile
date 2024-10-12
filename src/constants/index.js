import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "3d Animator",
      icon: web,
    },
    {
      title: "Publicity Designer",
      icon: mobile,
    },
    {
      title: "VFX Artist",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Primary Education",
      company_name: "Premier Vidyaa Vikash Mat.Hr.Sch",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2008 - March 2022",
      points: [
        "Was an average B GRADE student.",
        "Participated in my drawing competitions and won many credits.",
        "Participated in School dramas",
      ],
    },
    {
      title: "Under Graduation",
      company_name: "St Joseph’s University",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "August 2022 - May 2025",
      points: [
        "Bachelor Course in B.VOC Digital Media and Animation.",
        "Elected and Worked as Art Association Media Head and Tamizh Sangam Media Head nad Organized many college events.",
        "Worked as Art director, Publicity Designer, Title Designer, Cinematographer, Assistant Director.",
        "Won an Acadamy Award for best Costume Design for a student short film",
      ],
    },
    {
      title: "Hobbies",
      company_name: "Activities",
      icon: shopify,
      iconBg: "#383E56",
      points: [
        "To write Script and Screenplay.",
        "Editing and Designing.",
        "Analysing Movies.",
        "Riding and repairing Motor cycles.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        " Was an average B GRADE student.",
        " Participated in my drawing competitions and won many credits.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AR Film Quiz",
      description:
        "Film qizh using Meta Spark.",
      tags: [
        {
          name: "meta spark",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/iniyan3305/ar-film-quiz.git",
    },
    {
      name: "Planet AR Applicaiton",
      description:
        "AR application created for android and ios using Unity.",
      tags: [
        {
          name: "Unity",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/iniyan3305/Planet_AR_Applicaiton.git",
    },
    {
      name: "Solar System",
      description:
        "Ar Solar system created with unity.",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "c#",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/iniyan3305/Solar_System.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };