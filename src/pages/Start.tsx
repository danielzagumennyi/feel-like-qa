import anime from "animejs";
import { useRef } from "react";
import styled from "styled-components";
import { Button } from "../components/button/Button";

export const Start = () => {
  const refYes = useRef(null)
  const refNo = useRef(null)

  const handleHover = () => {
    anime({
      targets: refNo.current,
      translateX: -224,
      duration: 800
    });

    anime({
      targets: refYes.current,
      translateX: 224,
      duration: 800
    });
  }

  const handleLeave = () => {
    anime({
      targets: refNo.current,
      translateX: 0,
      duration: 800,
    });

    anime({
      targets: refYes.current,
      translateX: 0,
      duration: 800,
    });
  }

  const handleAccept = () => {
    console.log('accepnt')
  }

  return <Root>
    <Side>
      <Title>Feel like<br />QA Engineer</Title>
      <Text>Are you ready?</Text>
      <Controls>
        <StyledButton ref={refYes} onClick={handleAccept} data-hover>
          Yes
        </StyledButton>
        <StyledButton ref={refNo} $type="secondary">
          No
        </StyledButton>
        <HoverArea onMouseOver={handleHover} onMouseLeave={handleLeave} onClick={handleAccept} />
      </Controls>
    </Side>
    <Side>

    </Side>
  </Root>
}

const StyledButton = styled(Button)`
  min-width: 200px;
`;

const HoverArea = styled.div`
  position: absolute;
  width: 50%;
  top: 0;
  right: 0;
  bottom: 0;
`;

const Controls = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Side = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: calc(var(--index) * 4);
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 0.9;
  margin-bottom: 42px;
`;

const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #485E75;
  margin-bottom: 42px;
`;

  const Root = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  `;