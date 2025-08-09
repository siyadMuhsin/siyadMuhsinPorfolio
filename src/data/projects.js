import { Globe } from "lucide-react";
import { FiGithub, FiExternalLink, FiCheck } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiTypescript,
  SiExpress,
  SiDocker,
  SiGithubactions,
  SiSocketdotio,
  SiJavascript,
  SiEjs,
  SiRazorpay,
  SiCss3,
  SiCloudinary,
  SiMailchimp,
  SiMuller,
  SiSolid,
  SiJsonwebtokens,
  SiBootstrap,
  SiTsnode,
  SiNginx,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "ServiceHub",
    tagline: "Service booking platform with provider dashboards",
    description:
      "ServiceHub is a full-stack web application that connects customers with verified skilled professionals for various home and professional services such as plumbing, electrical work, and cleaning. The platform streamlines the booking process, ensures transparent pricing and reviews, and provides skilled experts with consistent job opportunities through a subscription-based model.",
  
      modules: [
  {
    name: "User Panel",
    description:
      "Allows customers to register via OTP authentication, browse services by category, view detailed expert profiles, book jobs with a fixed booking charge, track service status in real time, communicate with experts, and manage wallet-based refunds for cancellations.",

  },
  {
    name: "Expert Panel",
    description:
      "Enables service providers to register, enjoy a 7-day free trial, subscribe to continue receiving job requests, manage bookings, update profiles, communicate with customers, and track earnings.",

  },
  {
    name: "Admin Panel",
    description:
      "Provides the platform owner with tools to manage users, experts, service categories, subscriptions, payments, refunds, and notifications, along with access to a real-time analytics dashboard.",
 
  }
],
    features: [
      "Real-time booking system",
      "Provider performance analytics",
      "Secure payment processing",
      "Review and rating system",
      "Subscription-based experts",
      "Real-time chat",
      "Role-based switching",
      "Location-based expert discovery",
    ],
  techStack: [
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Express.js", icon: <SiExpress className="text-white" /> },
  { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
  { name: "CI/CD", icon: <SiGithubactions className="text-[#2088FF]" /> },
  { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
  { name: "SOLID Principles", icon: <SiSolid className="text-blue-500" /> },
  { name: "TailwindCss", icon: <SiTailwindcss className="text-blue-500" /> },
  { name: "OOP", icon: <div className="text-blue-500"/> },
      { name: "Cloudinary", icon: <SiCloudinary className="text-[#097df1]" /> },

  { name: "InversifyJS", icon: <div className="text-orange-500" /> },
  { name: "OpenCage API", icon: <Globe className="text-green-500" /> },
],
    image: "/2serviceHub.png",
    images: [
      "/1serviceHub.png",
      "/2serviceHub.png",
      "/3serviceHub.png",
      "/4serviceHub.png",
      "/5serviceHub.png",
      "/6serviceHub.png",
      "/7serviceHub.png",
      "/8serviceHub.png",
      "/9serviceHub.png",
      "/10serviceHub.png",
    ],
    liveLink: "https://servicehubclient.siyad.fun",
    codeLink: "https://github.com/siyadMuhsin/serviceHub",
  },
  {
  id: 2,
  title: "Fruitables",
  tagline: "E-commerce platform for fresh fruits and vegetables",
  description:
    "Fruitables is an online e-commerce platform designed to simplify the process of buying fresh fruits and vegetables for customers, while providing small shop owners with efficient tools to manage orders, track sales, and handle returns. Inspired by the challenges faced by local stores in managing phone orders and organizing sales, Fruitables offers a streamlined digital solution that bridges convenience with trust, featuring easy product browsing, secure payments, and professional order management tools.",

  modules: [
    {
      name: "Customer Panel",
      description:
        "Enables customers to browse fresh fruits and vegetables, place orders online, manage their cart and wishlist, and choose from multiple payment methods.",
    },
    {
      name: "Admin Panel",
      description:
        "Provides shop owners with a dashboard to manage orders, approve or reject returns, and generate detailed sales reports.",

    }
  ],

  features: [
    "Online ordering for fresh produce",
    "Multiple payment methods (Razorpay, COD,Wallet)",
    "Wishlist and cart functionality",
    "24-hour return policy",
    "Admin dashboard for order management",
    "Sales report generation with MongoDB aggregation",
    "Responsive and user-friendly UI",
    "Secure and reliable backend",
    "MVC Architecture"
  ],

  techStack: [
    { name: "EJS", icon: <SiEjs className="text-[#61DAFB]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "Express.js", icon: <SiExpress className="text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "Razorpay API", icon: <div className="text-green-500">₹</div> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500"/> },
    { name: "JWT Auth", icon: <SiJsonwebtokens className="text-orange-500" /> },
    { name: "Css3", icon: <SiCss3 className="text-blue-500"/> },
    { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400" /> }
  ],

  image: "/1fruitables.png",
  images: [
    "/1fruitables.png",
    "/2fruitables.png",
    "/3fruitables.png",
    "/4fruitables.png",
    "/5fruitables.png",
    "/7fruitables.png",
    "/8fruitables.png",
    "/9fruitables.png",
    "/10fruitables.png"
  ],

  liveLink: "https://fruitables.siyad.fun",
  codeLink: "https://github.com/siyadMuhsin/fruitables"
},
{
  id: 3,
  title: "Blog Management Platform",
  tagline: "Secure platform for users to create, manage, and share blog posts with image uploads",
  description:
    "A full-featured blog management system that enables authenticated users to create, read, update, and delete their own blog posts. Each post supports a title, descriptive content, and image uploads. The backend is built with Node.js and Express.js, using JWT-based authentication and authorization to protect user data. Images are securely uploaded and linked to posts. Data is stored efficiently in MongoDB or PostgreSQL depending on the chosen database solution.",

  modules: [
    {
      name: "Authentication & Authorization",
      description:
        "User registration and login using JWT for secure authentication. Ensures only authenticated users can manage their own posts."
    },
    {
      name: "Post Management",
      description:
        "CRUD API endpoints for blog posts with input validation. Users can create, view, edit, and delete posts."
    },
    {
      name: "Image Uploading",
      description:
        "Supports uploading images along with posts. Images are stored securely and associated with respective posts in the database."
    },
   
  ],

  features: [
    "User registration and JWT-based login",
    "Authenticated and authorized CRUD operations on posts",
    "Image upload and storage linked to blog posts",
    "Data validation and error handling for posts",
    "Secure password storage with hashing",
    "RESTful API design with Express.js",

  ],

  techStack: [
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "Express.js", icon: <SiExpress className="text-white" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> }, // or
    { name: "JWT Auth", icon: <SiJsonwebtokens className="text-orange-500" /> },
    { name: "Multer", icon: <div className="text-purple-600">📦</div> }, // for image uploads
    { name: "bcrypt", icon: <div className="text-gray-600">🔒</div> },
    { name: "REST API", icon: <div>🌐</div> },
    {name:"Cloudnary",icon:<SiCloudinary className="text-clue-600" />}
  ],

   
  image:   "/2blogManagement.png",
  images: [
    "/2blogManagement.png",
    "/3blogManagement.png",
    "/4blogManagement.png",
    "/5blogManagement.png",
    "/6blogManagement.png",
    "/7blogManagement.png",
    "/8blogManagement.png",
  
  ],

  liveLink: "https://mern-blog-platform-eight.vercel.app/",
  codeLink: "https://github.com/siyadMuhsin/mern-blog-platform"
},
{
  id: 4,
  title: "URL Shortener",
  tagline: "Secure URL shortening service with user authentication using Node.js and React",
  description:
    "A full-stack URL shortening application developed with Nodejs backend and React frontend. The system allows users to securely register, log in, and create/manage their own shortened URLs. It features robust JWT-based authentication, password hashing for security, and authenticated routes to ensure privacy and user-specific data handling. The backend is designed with modular Nest.js architecture following best practices, while the frontend offers a clean interface for managing URLs, registration, and login.",

  modules: [
    {
      name: "Authentication Module",
      description:
        "Handles user registration, login, and logout with password hashing and JWT token management. Ensures secure access control to URL management features."
    },
    {
      name: "URL Management Module",
      description:
        "Allows authenticated users to create, retrieve, and manage their shortened URLs. All routes are protected and only accessible after authentication."
    },
    {
      name: "Frontend Interface",
      description:
        "React-based UI providing forms for user registration, login, and URL shortening. Includes feedback on success/error and displays the user's shortened URLs."
    }
  ],

  features: [
    "Secure user registration and login with password hashing",
    "JWT token-based authentication and authorization",
    "Authenticated routes for URL shortening and retrieval",
    "Modular backend architecture using Nest.js",
    "User-specific URL management and data isolation",
    "Responsive and user-friendly React frontend",
    "Error handling and input validation",
    "Detailed README with deployment instructions",
    "Transparency on AI-assisted development (if applicable)"
  ],

  techStack: [
  
    { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
    { name: "React.js", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: "JWT Auth", icon: <SiJsonwebtokens className="text-orange-500" /> },
    { name: "bcrypt", icon: <div className="text-gray-600">🔒</div> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    { name: "AWS EC2", icon: <div className="text-orange-600 font-bold">AWS</div> },
    { name: "NGINX", icon: <SiNginx className="text-green-600" /> }
  ],

  image: "/urlShortner.png",
  images: [
    "/urlshortener-main.png",
    "/urlshortener-auth.png",
    "/urlshortener-dashboard.png",
    "/urlshortener-api.png"
  ],

  liveLink: "https://url-shortner-mechine-task.vercel.app/",
  codeLink: "https://github.com/siyadMuhsin/urlShortner-mechineTask"
},

];

export default projects;
