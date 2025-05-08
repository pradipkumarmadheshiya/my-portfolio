import {html, css, javascript, python, reactjs, redux, tailwind, chakra_ui, greencart, todo, vs_code, github, git, figma, dsa, soft_skills, linkedin, hackerrank, leetcode, instantgram} from "../assets"

export const navLinks=[
    {
        id:"",
        title:"Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id:"projects",
        title:"Projects"
    },
    {
        id: "contact",
        title: "Contact",
    }
]

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
      name: "Python",
      icon: python,
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
      name: "Chakra UI",
      icon: chakra_ui,
    },

  ];

  const projects = [
    {
      name: "GreenCart",
      description:
        [
          "A e-commerce website having clean and intuitive homepage featuring promotional banners and call-to-action buttons.",
          "Category-based product browsing to easily explore groceries, beverages, dairy, and more.",
          "Product search functionality and user/cart icons for seamless navigation.",
          "Seller dashboard and user profile access included in the navbar."
        ],
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: greencart,
      source_code_link: "https://github.com/pradipkumarmadheshiya/greencart",
      live_link: "https://greencart-drab-eta.vercel.app/"
    },
    {
      name: "Instantgram",
      description:
        [
          "Built a fully functional social media app using React and Tailwind CSS, featuring post creation.",
          "Designed a responsive, mobile-friendly UI inspired by Instagram, with clean navigation and sidebar-based layout.",
          "Implemented core social features like Home Feed, Explore, People, Saved Posts.",
          
        ],
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: instantgram,
      source_code_link: "https://github.com/pradipkumarmadheshiya/instantgram",
      live_link: "https://instantgram-psi.vercel.app/"
    },
    {
      name: "Todo App",
      description:
        [
          "Add tasks with customizable priority levels (low, medium, high).",
          "Update task statuses (Pending or Completed).",
          "Archive tasks to a separate view and restore them anytime.",
          "Filter archived tasks by priority and status.",
          "Delete tasks permanently from the archive."
        ],
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/pradipkumarmadheshiya/Todo_app_using_localstorage",
      live_link: "https://todo-app-using-localstorage.vercel.app/"
    },
  ];  

const tools=[
  {
    name: "VS Code",
    icon: vs_code,
  },
  {
    name: "Github",
    icon: github,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
]

const statistics=[
  {
    name: "600+ DSA Problems",
    icon: dsa,
  },
  {
    name: "100+ hours Soft Skills",
    icon: soft_skills,
  }
]

const social_links=[
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/pradip-kumar-madheshiya-pradip/"
  },
  {
    name: "Github",
    icon: github,
    link: "https://github.com/pradipkumarmadheshiya"
  },
  {
    name: "Leetcode",
    icon: leetcode,
    link: "https://leetcode.com/u/pradip_kumar_madheshiya/"
  },
  {
    name: "HackerRank",
    icon: hackerrank,
    link: "https://www.hackerrank.com/profile/prdpmadheshiya"
  }
]

  export { technologies, projects, tools, statistics, social_links };