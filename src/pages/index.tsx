import React from 'react';
import { HardSkills } from 'ui/components/HardSkills';
import { ProjectLinks } from 'ui/components/ProjectLinks';
import { SocialLinks } from 'ui/components/SocialLinks';

import { Header } from '../ui/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <SocialLinks />
      {/* <ProjectLinks /> */}
      <HardSkills />
    </>
  );
}
