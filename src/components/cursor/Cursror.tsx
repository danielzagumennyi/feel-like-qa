import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { gsap } from 'gsap'

let mouseX = 0; let mouseY = 0; let posX = 0; let posY = 0

export const Cursor = () => {
  const refPoint = useRef(null)
  const refAura = useRef(null)

  const [hovered] = useState(false)

  useEffect(() => {
    const anim = gsap.to({}, {
      duration: 0.01,
      repeat: -1,
      onRepeat: () => {
        posX += (mouseX - posX) / 10
        posY += (mouseY - posY) / 10

        gsap.set(refPoint.current, {
          css: {

            left: mouseX,
            top: mouseY
          }
        })

        gsap.set(refAura.current, {
          css: {
            left: posX - 25,
            top: posY - 25
          }
        })
      }
    })

    const listener = (e: MouseEvent) => {
      mouseX = e.pageX
      mouseY = e.pageY
    }

    document.addEventListener('mousemove', listener)
    return () => {
      document.removeEventListener('mousemove', listener)
      anim.kill()
    }
  }, [])

  return <>
    <Aura ref={refAura} />
    <Point ref={refPoint} $hovered={hovered} />
  </>
}

const Aura = styled.div`
  position: absolute;
  border-radius: 1000px;
  user-select: none;
  pointer-events: none;
  z-index: 100000;
  transition: transform .2s ease, opacity .2s ease;

  width: 48px;
  height: 48px;
  background-color: #0a6ee82a;
  transform: translate(5px, 5px);
`

const Point = styled.div<{ $hovered: boolean }>`
  position: absolute;
  border-radius: 1000px;
  user-select: none;
  pointer-events: none;
  z-index: 100000;
  transition: transform .2s ease, opacity .2s ease;

  width: 8px;
  height: 8px;
  background-color: black;

 
`
