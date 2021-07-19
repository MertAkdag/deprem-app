import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSend(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" className="" {...props}>
      <Path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227L0 12 24 0zM9 16.668V24l3.258-4.431L9 16.668z" />
    </Svg>
  );
}

export default SvgSend;
