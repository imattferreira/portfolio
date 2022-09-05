import type { NextPage } from "next";

import Anchor from "../components/Anchor";
import Image from "../components/Image";
import { styled } from "../ui/styles";

const Container = styled('section', {
  display: 'flex',
  paddingTop: '$20',
  alignItems: 'center',
  flexDirection: 'column',

  '& h1': {
    marginBottom: '$4'
  }
});

const NotFoundPage: NextPage = () => (
  <Container>
    <Image
      src="/images/app/launch.svg"
      alt="test"
      height={380}
      width={380}
      priority
    />
    <h1>Houston, we have a problem</h1>
    <Anchor link="/">Click here to go to Home page</Anchor>
  </Container>
)

export default NotFoundPage;
