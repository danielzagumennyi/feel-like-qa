
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;

const App = () => {

  return (<>
  <GlobalStyles />
    <Root>
      
    </Root>
  </>
  )
}

const Root = styled.div`
  background: red;
  height: 100%;
`;

export default App
