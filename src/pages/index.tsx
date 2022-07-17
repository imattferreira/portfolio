import type { NextPage } from 'next';
import Image from 'next/image';

import { styled } from '../ui/styles';

const Container = styled('div', {
  height: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 $4',

  '@bp3': {
    margin: 0,
  },
  '& h1': {
    marginTop: '$2',
    fontSize: 40,
    lineHeight: '54px',
    '@bp2': {
      marginTop: '$6',
      fontSize: 80,
    },
  },
  '& h2': {
    maxWidth: 900,
    margin: '$4 0 $6',
    color: '$red500',
    fontSize: 30,
    lineHeight: '40px',
    '@bp2': {
      margin: '$8 0',
      fontSize: 50,
      lineHeight: '54px',
    },
  },
});

const SayHello = styled('p', {
  color: '$gray200',

  '& span': {
    marginLeft: '$2'
  }
});

const Description = styled('p', {
  maxWidth: 620,
  color: '$gray200',
  marginBottom: '$6',
  '@bp2': {
    marginBottom: '$12',
  },
});

const Home: NextPage = () => (
  <Container>
    <SayHello>
      <Image
        src="/images/app/hello_emoji.gif"
        alt="say hello"
        height={25}
        width={25}
      />
      <span>Hello, I&apos;m</span>
    </SayHello>
    <h1>Matheus Ferreira</h1>
    <h2>I build modern and interactive web apps.</h2>
    <Description>
      I&apos;m a brazilian Software Developer, specializing in building moderns
      websites and web apps. And also a eternal student passionate about
      learning new concepts.
    </Description>
  </Container>
);

export default Home;
