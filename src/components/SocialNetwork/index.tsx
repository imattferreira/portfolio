import { ReactNode } from "react";

import { styled } from "../../ui/styles";
import Anchor from "../Anchor";

type SocialNetworkProps = {
  name: string;
  icon: ReactNode;
  link: string;
}

const Container = styled('section', {
  width: 160,
  padding: '$4',
  borderRadius: '$4',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '$gray200',

  '&:hover': {
    color: '$gray100',
    background: '$gray400',
  },
});

const IconWrapper = styled('div', {
  fontSize: 100
});

function SocialNetwork({ name, icon, link }: SocialNetworkProps) {
  return (
    <Anchor link={link} unstyled>
      <Container>
        <IconWrapper>
          {icon}
        </IconWrapper>
        {name}
      </Container>
    </Anchor>
  )
}

export default SocialNetwork;
