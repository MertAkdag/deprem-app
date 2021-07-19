import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDown(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      className=""
      {...props}>
      <Path
        d="M7.5 12.614l7.5 7.5 7.5-7.5"
        stroke="currentColor"
        strokeWidth={2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgDown;
