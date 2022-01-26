import React from 'react';

import { About } from '../ui/components/About';
import { HardSkills } from '../ui/components/HardSkills';
import { Header } from '../ui/components/Header';
import { ProjectLinks } from '../ui/components/ProjectLinks';
import { SocialLinks } from '../ui/components/SocialLinks';

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <SocialLinks />
      <HardSkills />
      <ProjectLinks />
    </>
  );
}
