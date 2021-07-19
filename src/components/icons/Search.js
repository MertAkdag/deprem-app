import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSearch(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      className=""
      {...props}>
      <Path
        d="M10 17a7 7 0 100-14 7 7 0 000 14zM21 21l-6-6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgSearch;
