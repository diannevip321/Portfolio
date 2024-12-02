/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
    username: "Dianne Vincent",
    title: "Hi all, I'm Dianne",
    subTitle: emoji(
      "A passionate Computer Science student actively seeking opportunities in Software Engineering and Machine Learning, with experience in developing decentralized applications, full-stack web apps, and research in bias mitigation for AI models."
    ),

    displayGreeting: true // Set false to hide this section, defaults to true
  };

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/diannevip321",
    linkedin: "https://www.linkedin.com/in/dianne-vincent02/",
    gmail: "dianne.vincent@stonybrook.edu",
    display: true // Set true to display this section, defaults to false
  };
  

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "CREATIVE DEVELOPER WHO BUILDS SCALABLE SOLUTIONS FOR REAL-WORLD CHALLENGES",
    skills: [
      emoji(
        "⚡ Develop responsive and user-friendly frontends with React and Material UI"
      ),
      emoji("⚡ Create secure and scalable backend services with Go and Node.js"),
      emoji(
        "⚡ Integrate advanced machine learning models to solve complex problems"
      )
    ],
  
    softwareSkills: [
      { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
      { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
      { skillName: "React", fontAwesomeClassname: "fab fa-react" },
      { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
      { skillName: "Go", fontAwesomeClassname: "fab fa-golang" },
      { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" }
    ],
    display: true // Set false to hide this section, defaults to true
  };
  

// Education Section

const educationInfo = {
    display: true,
    schools: [
      {
        schoolName: "Stony Brook University",
        logo: require("./assets/images/stonyBrookLogo.png"),
        subHeader: "Bachelor of Science in Computer Science",
        duration: "August 2021 - May 2025",
        desc: "Wise Honors Program: Women in Science and Engineering",
        descBullets: [
          "Courses: Software Engineering, Machine Learning, NLP, Computer Networks"
        ]
      }
    ]
  };
  

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, // Set it to true to show Proficiency Section
    experience: [
      {
        Stack: "Backend Development", // Insert stack or technology you have experience in
        progressPercentage: "85%" // Based on skills like React, Material UI, etc.
      },
      {
        Stack: "Frontend logic",
        progressPercentage: "75%" // Based on skills like Node.js, Go, etc.
      },
      {
        Stack: "Machine Learning",
        progressPercentage: "70%" // Based on skills like TensorFlow, PyTorch, etc.
      },
      {
        Stack: "Programming",
        progressPercentage: "90%" // Strong foundational programming skills
      },
      {
        Stack: "Data Analytics",
        progressPercentage: "80%" // Experience with Python libraries, SQL, etc.
      }
    ],
    displayCodersrank: false // Set true to display CodersRank badges section
  };

// Work experience section

const workExperiences = {
    display: true,
    experience: [
      {
        role: "Research Assistant",
        company: "Stony Brook University",
        companylogo: require("./assets/images/sbuCS.png"),
        date: "August 2024 – Present",
        desc: "Conducting research on bias mitigation in AI models under Dr. Praveen Tripathi, leveraging frameworks like PyTorch and TensorFlow to ensure equitable AI outcomes."
      },
      {
        role: "Classroom Technology Assistant - Data Analytics",
        company: "Division of Information Technology, SBU",
        companylogo: require("./assets/images/sbuMedicine.jpeg"),
        date: "June 2023 – Present",
        desc: "Developed Python-based data analytics scripts to streamline annual reporting and trained faculty on classroom IT systems."
      },
      {
        role: "Teaching Assistant",
        company: "Stony Brook University",
        companylogo: require("./assets/images/stonyBrookLogo.png"),
        date: "August 2023 – Present",
        desc: "Taught lab sessions for Object-Oriented Programming (Java) and Data Science (Python)."
      }
    ]
  };
  

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Projects",
    subtitle: "CREATING INNOVATIVE SOLUTIONS",
    projects: [
      {
        projectName: "Decentralized File-Sharing Application",
        projectDesc:
          "Cross-platform blockchain-based desktop application for secure file sharing. Utilized IPFS for decentralized storage and Bitcoin for transactions, with React and TypeScript for the frontend and Go for the backend.",
        footerLink: [
        { name: "View on GitHub", url: "https://github.com/diannevip321" }
      ]
      },

      {
        projectName: "HappinessML",
        projectDesc:
          "Analyzed World Happiness Report data to predict happiness scores using Python and Scikit-Learn. Models like Linear Regression and Ridge Regression provided insights into socio-economic factors affecting happiness.",
          footerLink: [
            { name: "View on GitHub", url: "https://github.com/diannevip321" }
          ]
      },
      {
        projectName: "StackOverflow Clone",
        projectDesc:
          "Feature-rich web application replicating StackOverflow functionality. Developed with React, Material UI, Node.js, and MongoDB to support Q&A interactions and secure user authentication.",
          footerLink: [
            { name: "View on GitHub", url: "https://github.com/diannevip321" }
          ]
      }
    ],
    display: true
  };
  

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle:
      "Have a project or opportunity in mind? Let’s collaborate!",
    number: "(631) 710-5599",
    email_address: "dianne.vincent@stonybrook.edu"
  };
// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
