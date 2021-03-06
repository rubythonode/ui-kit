import { css } from 'styled-components'
import Unit from '../utils/Unit'
import Size from '../utils/Size'
import Color from '../utils/Color'
import Spacing from '../utils/Spacing'

const base = css`
  font-size: ${props => Unit.convert(Size[props.size] || props.size)};
  color: ${props => (Color[props.color] || props.color)};
  margin: ${props => Unit.parse(props.margin, (margin) => Spacing[margin] || margin)};
  align-self: ${props => props.alignSelf};
`

export default base
