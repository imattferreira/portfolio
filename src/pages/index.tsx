import React from 'react';
import { UpButton } from 'ui/components/buttons';

import { Footer } from '../ui/components/Footer';
import { Header } from '../ui/components/Header';
import {
  About,
  HardSkills,
  ProjectLinks,
  SocialLinks,
} from '../ui/components/sections';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <SocialLinks />
      <HardSkills />
      <ProjectLinks />
      <Footer />
      <UpButton />
    </>
  );
}
