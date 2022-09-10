import NextLink from 'next/link';
import { ReactNode } from "react";

import { styled } from "../../ui/styles";

type AnchorProps = {
  link: string;
  rel?: 'noopener' | 'noreferrer';
  children: ReactNode;
  unstyled?: boolean;
}

const StyledAnchor = styled('a', {
  textDecoration: 'none',
  cursor: 'pointer',

  variants: {
    type: {
      unstyled: {},
      default: {
        color: '$gray200',

        '&:hover': {
          textDecoration: 'underline'
        },
      },
    }
  }
});

function Anchor({ link, rel, children, unstyled = false }: AnchorProps) {
  if (!rel) {
    return (
      <NextLink href={link} passHref>
        <StyledAnchor
          type={unstyled ? 'unstyled' : 'default'}
        >
          {children}
        </StyledAnchor>
      </NextLink>
    )
  }

  return (
    <StyledAnchor
      href={link}
      rel={rel}
      target="_blank"
      type={unstyled ? 'unstyled' : 'default'}
    >
      {children}
    </StyledAnchor>
  )
}

export default Anchor;

