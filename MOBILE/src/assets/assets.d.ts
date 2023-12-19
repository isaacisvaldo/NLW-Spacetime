declare module '*.png'
declare module '*.svg'
 {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}
//Serve para permitir a importação de arquivo png