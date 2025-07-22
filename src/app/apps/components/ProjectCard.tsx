import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  logoSrc: string;
  title: string;
  subtitle: string;
  target: string;
  platform: string;
  distribution: string;
  releaseDate: string;
  buildTime: string;
  techStack: string;
  links: { label: string; href: string }[];
  revenue?: {
    rate: string;
    color: string;
    trend: string;
    previousApp: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  logoSrc,
  title,
  subtitle,
  target,
  platform,
  distribution,
  releaseDate,
  buildTime,
  revenue,
  techStack,
  links,
}) => {
  return (
    <Card className="w-full flex flex-col items-center justify-start">
      <CardHeader className="flex flex-row items-center justify-start gap-4 w-full">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={logoSrc}
            alt={title}
            width={80}
            height={80}
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col items-start justify-center w-full">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-md">{subtitle}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="w-full flex flex-col gap-2 text-sm">
        {revenue && (
          <div className="flex flex-row justify-between gap-2">
            <p className="text-gray-400">Revenue</p>
            <p className={`${revenue.color}`}>
              {revenue.rate} {revenue.trend} from {revenue.previousApp}
            </p>
          </div>
        )}
        <div className="flex flex-row justify-between gap-2">
          <p className="text-gray-400">Release Date</p>
          <p>{releaseDate}</p>
        </div>
        <div className="flex flex-row justify-between gap-2">
          <p className="text-gray-400">Target</p>
          <p>{target}</p>
        </div>
        <div className="flex flex-row justify-between gap-2">
          <p className="text-gray-400">Distribution</p>
          <p>{distribution}</p>
        </div>
        <div className="flex flex-row justify-between gap-2">
          <p className="text-gray-400">Platform</p>
          <p>{platform}</p>
        </div>
        <div className="flex flex-row justify-between gap-2">
          <p className="text-gray-400">Build Time</p>
          <p>{buildTime}</p>
        </div>
        <div className="flex flex-row justify-between gap-2">
          <p className="text-gray-400 shrink-0">Tech Stack</p>
          <p className="text-right">{techStack}</p>
        </div>
        {links.length > 0 && (
          <div className="flex flex-row justify-between gap-2">
            <p className="text-gray-400">Links</p>
            <div className="flex flex-row gap-2 items-center justify-end">
              {links.map((link) => (
                <Link
                  href={link.href}
                  className="text-blue-500 hover:text-blue-600"
                  key={link.label}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
