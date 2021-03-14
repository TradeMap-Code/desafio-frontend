import React from 'react'
import { Button } from '../styles/components/tmbutton'

interface Props {
  children: any,
  onClick: any,
}

const TMButton: React.FC<Props> = ({ children, onClick }) => (
  <Button type="button" onClick={onClick}>
    {children}
  </Button>
)

export default TMButton
