import NextLink from 'next/link';
import { ReactNode } from "react";

import { styled } from "../../ui/styles";

type AnchorProps = {
  link: string;
  ref?: 'noopener' | 'noreferrer';
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

function Anchor({ link, ref, children, unstyled = false }: AnchorProps) {
  if (!ref) {
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
      type={unstyled ? 'unstyled' : 'default'}
    >
      {children}
    </StyledAnchor>
  )
}

export default Anchor;

