"use client";

import React, { useState } from "react";
import { Column, Flex, Text, Button, IconButton, RevealFx, Heading, Tag } from "@once-ui-system/core";
import styles from "./SkillsCarousel.module.scss";

interface Skill {
  name: string;
  logo: string;
  level: string;
  description: string;
  achievements: string[];
}

interface SkillCategory {
  title: string;
  subtitle: string;
  stats: string;
  skills: Skill[];
}

interface SkillsCarouselProps {
  categories: SkillCategory[];
}

export function SkillsCarousel({ categories }: SkillsCarouselProps) {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const currentCategory = categories[currentCategoryIndex];

  const nextCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const prevCategory = () => {
    setCurrentCategoryIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
  };

  const goToCategory = (index: number) => {
    setCurrentCategoryIndex(index);
  };

  if (categories.length === 0) return null;

  return (
    <Column fillWidth gap="l" paddingX="l">
      <RevealFx translateY="8">
        <Column fillWidth gap="l" padding="l" background="neutral-alpha-weak" radius="m" className={styles.skillsCarousel}>
          <Flex fillWidth horizontal="space-between" vertical="center">
            <Column gap="4">
              <Flex gap="m" vertical="center">
                <Tag background="brand-alpha-medium" onBackground="brand-strong">
                  {currentCategory.title}
                </Tag>
                <Text variant="body-default-s" onBackground="brand-weak" style={{ fontWeight: "600" }}>
                  {currentCategory.subtitle}
                </Text>
              </Flex>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {currentCategory.stats}
              </Text>
            </Column>
            <Flex gap="8" vertical="center">
              <Text variant="body-default-s" onBackground="neutral-weak">
                {currentCategory.skills.length} compétences
              </Text>
            </Flex>
          </Flex>

          <Flex fillWidth gap="l" wrap>
            {currentCategory.skills.map((skill, index) => (
              <Column
                key={skill.name}
                fillWidth
                gap="m"
                padding="l"
                background="page"
                radius="m"
                border="neutral-alpha-medium"
                style={{
                  minWidth: "320px",
                  flex: "1 1 320px"
                }}
              >
                <Flex gap="m" vertical="center">
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    style={{ 
                      width: "56px", 
                      height: "56px",
                      borderRadius: "12px",
                      flexShrink: 0
                    }}
                  />
                  <Column gap="4" flex={1}>
                    <Flex horizontal="space-between" vertical="center">
                      <Heading variant="heading-strong-l">{skill.name}</Heading>
                      <Tag 
                        size="s" 
                        background={skill.level === "Expert" ? "brand-alpha-medium" : skill.level === "Certifié" ? "success-alpha-medium" : "neutral-alpha-medium"}
                        onBackground={skill.level === "Expert" ? "brand-strong" : skill.level === "Certifié" ? "success-strong" : "neutral-strong"}
                      >
                        {skill.level}
                      </Tag>
                    </Flex>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                  </Column>
                </Flex>
                
                <Flex gap="8" wrap>
                  {skill.achievements.map((achievement, idx) => (
                    <Tag 
                      key={idx}
                      size="s" 
                      background="brand-alpha-weak" 
                      onBackground="brand-weak"
                      style={{ fontSize: "11px" }}
                    >
                      ✓ {achievement}
                    </Tag>
                  ))}
                </Flex>
              </Column>
            ))}
          </Flex>

          {categories.length > 1 && (
            <Flex fillWidth horizontal="center" gap="8" paddingTop="s">
              {categories.map((_, index) => (
                <Button
                  key={index}
                  variant={index === currentCategoryIndex ? "primary" : "secondary"}
                  size="s"
                  onClick={() => goToCategory(index)}
                  style={{
                    width: "30px",
                    height: "3px",
                    borderRadius: "2px",
                    padding: "0",
                    minWidth: "30px",
                    opacity: index === currentCategoryIndex ? 1 : 0.7,
                  }}
                />
              ))}
            </Flex>
          )}
        </Column>
      </RevealFx>

    </Column>
  );
}
