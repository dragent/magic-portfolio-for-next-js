"use client";

import React, { useState } from "react";
import { Column, Flex, Text, Button, IconButton, RevealFx, Heading } from "@once-ui-system/core";
import { ProjectCard } from "@/components";
import styles from "./ProjectCarousel.module.scss";

interface Project {
  metadata: {
    title: string;
    summary: string;
    images: string[];
    team?: Array<{ avatar: string }>;
    link?: string;
  };
  slug: string;
  content: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentIndex(index);
  };

  if (projects.length === 0) return null;

  return (
    <Column fillWidth gap="l" paddingX="l" className={styles.projectCarousel}>
      <Flex fillWidth horizontal="space-between" vertical="center">
        <Heading as="h2" variant="display-strong-xs">
          Mes Projets
        </Heading>
      </Flex>

      <RevealFx translateY="8">
        <Flex 
          fillWidth 
          style={{ 
            overflow: "hidden",
            position: "relative"
          }}
        >
          <Flex
            fillWidth
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.3s ease-in-out",
              display: "flex"
            }}
          >
            {projects.map((project, index) => (
              <Flex
                key={project.slug}
                fillWidth
                style={{
                  minWidth: "100%",
                  flexShrink: 0
                }}
              >
                <ProjectCard
                  priority={index === 0}
                  href={`work/${project.slug}`}
                  images={project.metadata.images}
                  title={project.metadata.title}
                  description={project.metadata.summary}
                  content={project.content}
                  avatars={project.metadata.team?.map((member: any) => ({ src: member.avatar })) || []}
                  link={project.metadata.link || ""}
                />
              </Flex>
            ))}
          </Flex>
        </Flex>
      </RevealFx>

      {projects.length > 1 && (
        <Flex fillWidth horizontal="center" gap="8" paddingTop="s">
          {projects.map((_, index) => (
            <Button
              key={index}
              variant={index === currentIndex ? "primary" : "secondary"}
              size="s"
              onClick={() => goToProject(index)}
              style={{
                width: "30px",
                height: "3px",
                borderRadius: "2px",
                padding: "0",
                minWidth: "30px",
                opacity: index === currentIndex ? 1 : 0.7,
              }}
            />
          ))}
        </Flex>
      )}

    </Column>
  );
}

