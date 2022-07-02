import anime from 'animejs'
import { ReactNode, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Button } from '../components/button/Button'
import { gsap } from 'gsap'

export const Start = () => {
  const refYes = useRef<HTMLDivElement>(null)
  const refNo = useRef<HTMLDivElement>(null)
  const refText = useRef<HTMLDivElement>(null)

  const handleHover = () => {
    anime({
      targets: refNo.current,
      translateX: -224,
      duration: 800
    })

    anime({
      targets: refYes.current,
      translateX: 224,
      duration: 800
    })
  }

  const handleLeave = () => {
    anime({
      targets: refNo.current,
      translateX: 0,
      duration: 800
    })

    anime({
      targets: refYes.current,
      translateX: 0,
      duration: 800
    })
  }

  const handleAccept = () => {
    console.log('accept')
  }

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 })

    const q = gsap.utils.selector(refText)

    tl.fromTo(q('*[data-animate] > [data-animate-inner]'), {
      translateY: '100%',
      opacity: 0
    }, {
      ease: 'power4.out',
      duration: 0.5,
      stagger: 0.3,
      translateY: '0',
      opacity: 1
    })
  }, [])

  return <Root>
    <Side ref={refText}>
        <Title>
          <AnimateBlock>
            Feel like<br />QA Engineer
          </AnimateBlock>
        </Title>
        <Text>
          <AnimateBlock>
            Are you ready?
          </AnimateBlock>
        </Text>
        <AnimateBlock>
          <Controls>
            <StyledButton ref={refYes} onClick={handleAccept} data-hover>
              Yes
            </StyledButton>
            <StyledButton ref={refNo} $type="secondary">
              No
            </StyledButton>
            <HoverArea onMouseOver={handleHover} onMouseLeave={handleLeave} onClick={handleAccept} />
          </Controls>
        </AnimateBlock>
    </Side>
    <Side>

    </Side>
  </Root>
}

const AnimateBlock = ({ children, className }: { children: ReactNode, className?: string }) => {
  return <Overflow className={className} data-animate>
    <div data-animate-inner>{children}</div>
  </Overflow>
}

const Overflow = styled.div`
  overflow: hidden;
`

const OverflowInner = styled.div``

const StyledButton = styled(Button)`
  min-width: 200px;
`

const HoverArea = styled.div`
  position: absolute;
  width: 50%;
  top: 0;
  right: 0;
  bottom: 0;
`

const Controls = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const Side = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: calc(var(--index) * 4);
`

const Title = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 1;
  padding-bottom: 42px;
`

const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #485E75;
  margin-bottom: 42px;
`

const Root = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`
