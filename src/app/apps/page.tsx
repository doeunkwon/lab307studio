import { ScrollArea } from "@/components/ui/scroll-area";
import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    logoSrc: "/soon.svg",
    title: "Coming Soon",
    subtitle: "Stay tuned for our next project.",
    target: "B2B",
    platform: "Cross-Platform",
    distribution: "TBD",
    releaseDate: "December 2025",
    buildTime: "3 months",
    techStack: "Next, Nest",
    links: [],
  },
  {
    logoSrc: "/zzz.svg",
    title: "zzz",
    subtitle: "Optimize your night routine & sleep on time.",
    target: "B2C",
    platform: "iOS",
    distribution: "TikTok, Instagram",
    releaseDate: "June 2025",
    buildTime: "4 months",
    techStack: "React Native, Supabase, Superwall",
    revenue: {
      rate: "100%",
      color: "text-green-500",
      trend: "growth",
      previousApp: "Hae",
    },
    links: [
      {
        label: "Privacy Policy",
        href: "/apps/privacy/zzz",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/ca/app/zzz-night-routine/id6745765337",
      },
    ],
  },
  {
    logoSrc: "/hae.svg",
    title: "Hae",
    subtitle: "Your personal CRM assistant, powered by AI.",
    target: "B2C",
    platform: "Web",
    distribution: "LinkedIn",
    releaseDate: "December 2024",
    buildTime: "2 months",
    techStack: "React, Go",
    revenue: {
      rate: "0%",
      color: "text-red-500",
      trend: "growth",
      previousApp: "Convo",
    },
    links: [],
  },
  {
    logoSrc: "/convo.svg",
    title: "Convo",
    subtitle: "Improve your small talk with daily challenges.",
    target: "B2C",
    platform: "Web",
    distribution: "LinkedIn, Reddit",
    releaseDate: "October 2024",
    buildTime: "2 months",
    techStack: "React, Go",
    links: [],
  },
];

export default function AppsPage() {
  return (
    <ScrollArea
      style={{ height: "calc(100vh - 108px)" }}
      className="flex flex-1"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </ScrollArea>
  );
}
