
import styled, { createGlobalStyle } from 'styled-components'
import { Cursor } from './components/cursor/Cursror';
import { Start } from './pages/Start';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  * {
    cursor: none;
  }

  :root {
    --index: calc(1vw + 1vh);
  }

  html, body {
    
    overflow: hidden;
    height: 100%;
    position: relative;
    min-width: 320px;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    line-height: 1.5;
    color: #13191F;
  }

  #root {
    height: 100%;
  }
`;

const App = () => {

  return (<>
  <GlobalStyles />
    <Root>
      <Cursor />
      <Start />
    </Root>
  </>
  )
}

const Root = styled.div`
  height: 100%;
`;

export default App
