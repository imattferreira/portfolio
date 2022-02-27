import { GetStaticProps } from 'next';
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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
