import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  position,
  flexbox,
  layout,
  borderRadius,
} from 'styled-system';

const Button = styled(TouchableOpacity)(
  compose(color, size, flexbox, position, space, layout, borderRadius),
);

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
};

export default Button;
