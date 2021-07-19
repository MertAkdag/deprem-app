import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgRight(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      className=""
      {...props}>
      <Path
        d="M12.614 7.5l7.5 7.5-7.5 7.5"
        stroke="#2C3E50"
        strokeWidth={2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgRight;
