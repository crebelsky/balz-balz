import React from 'react';
import { Flex, Box } from 'grid-styled';

import { Wrapper, Nav, NavLink } from './style';

const Header = () => (
  <Wrapper>
    <Flex>
      <Box w={[1]} mx={[1, 2, 3, 4]} px={[1, 2, 3, 4]}>
        <Nav>
          <h1>
            <NavLink
              to="/"
            >
              Gatsby
            </NavLink>
          </h1>
        </Nav>
      </Box>
    </Flex>
  </Wrapper>
);

export default Header;
