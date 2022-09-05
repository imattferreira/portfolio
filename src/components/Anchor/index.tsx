import NextLink from 'next/link';
import { ReactNode } from "react";

import { styled } from "../../ui/styles";

type AnchorProps = {
  link: string;
  ref?: 'noopener' | 'noreferrer';
  children: ReactNode;
}

const StyledAnchor = styled('a', {
  textDecoration: 'none',
  color: '$gray200',

  '&:hover': {
    textDecoration: 'underline'
  }
});

function Anchor({ link, ref, children }: AnchorProps) {
  if (ref) {
    return (
      <NextLink href={link} passHref>
        <StyledAnchor>{children}</StyledAnchor>
      </NextLink>
    )
  }

  return (
    <StyledAnchor href={link}>{children}</StyledAnchor>
  )
}

export default Anchor;

