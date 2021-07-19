import { Text as T } from 'react-native'
import styled from 'styled-components'
import { compose, color, size, typography, space,position } from 'styled-system'

const Text = styled(T)(
    compose(
        typography,
        space,
        color,
        position,
        size
    )
)

export default Text
