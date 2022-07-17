

import Logo from "./Logo";
import { Container, Wrapper } from "./styles"
import TopbarLinks from "./TopbarLinks";

function Topbar() {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <TopbarLinks />
      </Wrapper>
    </Container>
  )
}

export default Topbar;
