import {View} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  flexbox,
  position,
  borderRadius,
} from 'styled-system';

const Box = styled(View)(
  compose(
    color,
      position,
    size,
    flexbox,
    space,
    borderRadius,
  ),
);

export default Box;
