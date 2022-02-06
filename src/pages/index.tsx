import React from 'react';

import { UpButton } from '../ui/components/buttons';
import { Footer } from '../ui/components/Footer';
import { Header } from '../ui/components/Header';
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
      <Header />
      <Presentation />
      <About />
      <SocialLinks />
      <HardSkills />
      <Projects />
      <FeaturedArticles />
      <Footer />
      <UpButton />
    </>
  );
}
