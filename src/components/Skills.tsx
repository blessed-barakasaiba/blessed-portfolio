import ContinuousRotatingBorderCard from "./ContinuousRotatingBorderCard";

const Skills = () => {
  const skills = [
    {
      id: 1,
      skill: "Backend Development",
      color: "cyan",
      description: "Django backend, REST APIs, authentication, permissions, and business logic.",
    },
    {
      id: 2,
      skill: "Real-Time Systems",
      color: "purple",
      description: "WebSockets using Django Channels for chat and live updates.",
    },
    {
      id: 3,
      skill: "Frontend Development",
      color: "orange",
      description: "React with Tailwind CSS, reusable components, protected routes.",
    },
    {
      id: 4,
      skill: "Mobile App Development",
      color: "green",
      description: "Flutter apps with API integration, state management, animations.",
    },
    {
      id: 5,
      skill: "Authentication & Security",
      color: "cyan",
      description: "JWT auth, Google login, role-based access control.",
    },
    {
      id: 6,
      skill: "Payments & Integrations",
      color: "purple",
      description: "Stripe payment integration and third-party API services.",
    },
    {
      id: 7,
      skill: "IoT & Embedded Systems",
      color: "green",
      description: "ESP32, ESP32-CAM, hardware + mobile app integration.",
    },
    {
      id: 8,
      skill: "Database Design",
      color: "orange",
      description: "Relational modeling, Django ORM, multi-model user systems.",
    },
  ];

  return (
    <div id="skills" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1
          className="text-center text-4xl md:text-5xl font-bold mb-12
          bg-gradient-to-r from-cyan-400 to-purple-500 
          bg-clip-text text-transparent"
        >
          Skills
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {skills.map((skill) => (
            <ContinuousRotatingBorderCard
              key={skill.id}
              skill={skill.skill}
              description={skill.description}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
