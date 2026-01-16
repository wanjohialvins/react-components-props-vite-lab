import logo from "../assets/logo";

const blogData = {
  name: "Eragondevs",
  image: logo,
  about: "Exploring the intersections of code, creativity, and the developer's journey. Join me as I document my path through the world of software engineering.",
  posts: [
    {
      id: 1,
      title: "The Joy of Component Architecture",
      date: "January 15, 2023",
      preview: "Why modularity is the secret sauce to scalable and maintainable React applications.",
      minutes: 8,
    },
    {
      id: 2,
      title: "Mastering Props and Data Flow",
      date: "August 10, 2024",
      preview: "A deep dive into how data travels between components and why it's the heartbeat of every great UI.",
      minutes: 12,
    },
    {
      id: 3,
      title: "Reflecting on my First Dev Internship",
      date: "January 1, 2025",
      preview: "The lessons I learned, the bugs I squashed, and the coffee I drank during my first three months in the field.",
      minutes: 20,
    },
  ],
};

export default blogData;
