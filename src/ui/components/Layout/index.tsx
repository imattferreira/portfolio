import React from "react";

import { styled } from "../../styles";

type LayoutProps = {
  children: React.ReactNode;
}

const StyledLayout = styled('main', {
  margin: '0 auto',
  maxWidth: 1400,
});

function Layout({ children }: LayoutProps) {
  return (
    <StyledLayout>
      {children}
    </StyledLayout>
  )
}

// Layout.defaultProps = {}

Layout.propTypes = {

}

export default Layout;
