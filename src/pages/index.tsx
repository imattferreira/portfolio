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

const IS_ARTICLES_SECTION_ENABLED = false;

export default function Home() {
  return (
    <>
      <Presentation />
      <About />
      <SocialLinks />
      <HardSkills />
      <Projects />
      {IS_ARTICLES_SECTION_ENABLED && <FeaturedArticles />}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 48, // 48 hours
  };
};
