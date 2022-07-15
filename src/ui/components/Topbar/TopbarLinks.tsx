import NextLink from 'next/link';

import LINKS from '../../../app/constants/links';
import { styled } from "../../styles";

export const Link = styled('a', {
  padding: '$2 $4',
  borderRadius: '$2',
  color: '$gray200',

  '&:not(:last-of-type)': {
    marginRight: '$4'
  },
  '&:hover': {
    background: '$gray400'
  },
  variants: {
    type: {
      active: {
        color: '$gray100',
      }
    }
  },
});

function TopbarLinks() {
  return (
    <>
      <NextLink href={LINKS.HOME} passHref>
        <Link type="active">Home</Link>
      </NextLink>
      <NextLink href={LINKS.ABOUT} passHref>
        <Link>About</Link>
      </NextLink>
      <NextLink href={LINKS.PROJECTS} passHref>
        <Link>Projects</Link>
      </NextLink>
      <NextLink href={LINKS.BLOG} passHref>
        <Link>Blog</Link>
      </NextLink>
    </>
  )
}

export default TopbarLinks;
