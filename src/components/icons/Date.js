import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDate(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      className=""
      {...props}>
      <Path
        d="M18 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2zM16 3v4M8 3v4M4 11h16M11 15h1M12 15v3"
        stroke="#383838"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgDate;
