import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

import { Container } from '../styles/components/switchtheme'

interface Props {
  toggleTheme(): void
}

const SwitchTheme: React.FC<Props> = ({ toggleTheme }) => {
  const { title, colors } = useContext(ThemeContext)

  return (
    <Container>
      <div className="switch-theme">
        <Switch
          onChange={toggleTheme}
          checked={title === 'light'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={18}
          width={40}
          handleDiameter={18}
          onColor={colors.button}
          offColor={shade(0.3, colors.button)}
        />
      </div>
    </Container>
  )
}

export default SwitchTheme
