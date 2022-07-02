import styled from 'styled-components'

export const Button = styled.div<{ $type?: 'primary' | 'secondary' }>`
  min-height: 68px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  font-size: 24px;
  text-align: center;
  color: #FFFFFF;
  background: #0A6FE8;
  border-radius: 18px;
  user-select: none;

  ${p => p.$type === 'secondary' && `
    background: #D9E0E8;
    color: #13191F;
  `}

  & + & {
    margin-left: 24px;
  }
`
