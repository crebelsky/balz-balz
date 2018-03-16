import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import theme from '../style/theme';

import Header from '../components/Header';
import '../style/global';

const TemplateWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title="Gatsby Strict Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      <Flex>
        <Box w={[1]} m={[1, 2, 3, 4]} p={[1, 2, 3, 4]}>
          {children()}
        </Box>
      </Flex>
    </div>
  </ThemeProvider>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

TemplateWrapper.defaultProps = {
  children: () => {},
};

export default TemplateWrapper;
