import 'styled-componets'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      background: string,
      sidebar: string,
      button: string,
      buttonHover: string,
      text: string,
      textButton: string,
      backgroundText: string
    }
  }
}