import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMenu(props) {
  return (
    <Svg
      width={44}
      height={44}
      viewBox="0 0 44 44"
      fill="none"
      className=""
      {...props}>
      <Path
        d="M7.333 14.667h29.334M7.333 29.333h29.334"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgMenu;
