import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Santo",
  lastName: "Malau",
  name: `Santo Malau`,
  role: "Software Engineer",
  avatar: "/images/avatar.png",
  email: "santomalau3@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Indonesia"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>Thoughts on Flutter, mobile engineering, and building products.</>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/santomalau",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/santomalau/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Shipping mobile apps that people actually use</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Wukong</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/wukong",
  },
  subline: (
    <>
      I'm Santo, a remote software engineer based in{" "}
      <Text as="span" size="xl" weight="strong">
        Indonesia
      </Text>
      , crafting intuitive user experiences and <br /> building scalable digital
      products.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <Text>
          I'm Santo Malau — a developer from Indonesia who builds things
          end-to-end. My roots are in Flutter, where I've shipped mobile apps
          across industries: guest management, outdoor adventure, and impact
          investing. Now I'm pushing into full-stack territory with Next.js and
          Go, and I use AI tools like Claude and Gemini to keep shipping fast
          without cutting corners.
        </Text>
        <Text>
          I write code that scales. I collaborate with dynamic teams to build
          impactful products, and I genuinely enjoy the craft.
        </Text>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Wukong",
        timeframe: "Jun 2024 - Dec 2025",
        role: "Full Stack Engineer",
        achievements: [
          <>
            Architected and developed the main platform (
            <a
              href="https://wukong.co.id"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "underline" }}
            >
              wukong.co.id
            </a>
            ) from the ground up using <strong>Next.js</strong> for the frontend
            and <strong>Golang</strong> for the backend.
          </>,
          <>
            Designed a scalable system architecture, optimizing both application
            performance and seamless data flow.
          </>,
          <>
            Established solid engineering foundations including API structures,
            state management, and deployment pipelines.
          </>,
        ],
        images: [],
      },
      {
        company: "Ekuid",
        timeframe: "Dec 2021 - Dec 2025",
        role: "Mobile Engineer",
        achievements: [
          <>
            Developed the official mobile app for{" "}
            <a
              href="https://eku.id"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "underline" }}
            >
              eku.id
            </a>{" "}
            from scratch using Flutter and Graphql.
          </>,
          <>
            Designed and conceptualized app architecture with Clean
            Architecture.
          </>,
          <>
            Managed app distribution using Codemagic to App Store and Google
            Play.
          </>,
          <>
            Defined and updated project management flow using Notion and set up
            offline mode application.
          </>,
        ],
        images: [],
      },
      {
        company: "SanZos TechIn",
        timeframe: "Apr 2020 - Feb 2021",
        role: "Software Developer",
        achievements: [
          <>
            Designed and developed 2 products: IMeet and SSBI using Flutter and
            Laravel.
          </>,
          <>Managed team of software engineers and UI/UX engineers.</>,
        ],
        images: [],
      },
      {
        company: "FK Unpad Lecturer Research Team",
        timeframe: "Aug 2019 - Jan 2020",
        role: "Frontend Web Developer",
        achievements: [
          <>
            Designed and developed website to manage patients data using
            Laravel.
          </>,
        ],
        images: [],
      },
      {
        company: "Atourin",
        timeframe: "Jan 2019 - Feb 2019",
        role: "Backend Developer Intern",
        achievements: [
          <>
            Designed and created data structure of destination for itinerary
            using Node.js (MySQL, Google Maps API and Map Box API).
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Padjadjaran",
        description: <>Bachelor of Informatic Engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Flutter & Mobile",
        description: (
          <>
            Proven track record of application launches on app stores, with a
            strong focus on Flutter and clean architecture.
          </>
        ),
        tags: [
          { name: "Flutter", icon: "terminal" },
          { name: "Dart", icon: "terminal" },
          { name: "Codemagic", icon: "terminal" },
          { name: "Firebase", icon: "terminal" },
        ],
        images: [],
      },
      {
        title: "Web & Backend",
        description: (
          <>
            Experienced in developing backend services, APIs, and informative
            web dashboards.
          </>
        ),
        tags: [
          { name: "Laravel", icon: "terminal" },
          { name: "PHP", icon: "terminal" },
          { name: "Node.js", icon: "terminal" },
          { name: "GraphQL", icon: "terminal" },
          { name: "REST API", icon: "terminal" },
        ],
        images: [],
      },
      {
        title: "Management & Design",
        description: (
          <>
            Management of project workflows, team communication, and application
            design.
          </>
        ),
        tags: [
          { name: "Project Management", icon: "terminal" },
          { name: "Figma", icon: "terminal" },
          { name: "Notion", icon: "terminal" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
