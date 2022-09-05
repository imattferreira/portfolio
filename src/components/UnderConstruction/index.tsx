import { styled } from "../../ui/styles";
import Image from "../Image";

const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '$20',
});

function UnderConstruction() {
  return (
    <Container>
      <Image
        src="/images/app/under-construction.svg"
        alt="under construction"
        height={380}
        width={380}
        priority
      />
      <h1>Coming soon...</h1>
    </Container>
  )
}

export default UnderConstruction;
