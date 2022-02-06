import React from 'react';

import {
  About,
  HardSkills,
  SocialLinks,
  FeaturedArticles,
  Presentation,
  Projects,
} from '../ui/components/sections';

export default function Home() {
  return (
    <>
      <Presentation />
      <About />
      <SocialLinks />
      <HardSkills />
      <Projects />
      <FeaturedArticles />
    </>
  );
}
