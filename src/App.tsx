import React from 'react';
import { css } from '@emotion/core';

import './App.css';

const App = () => {
  return (
    <div
      className="App"
      css={css`
        display: flex;
      `}
    >
      Hello World
    </div>
  );
};

export default App;
