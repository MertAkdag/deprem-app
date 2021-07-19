import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFilter(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      className=""
      {...props}>
      <Path
        d="M6 12a2 2 0 100-4 2 2 0 000 4zM6 4v4M6 12v8M12 18a2 2 0 100-4 2 2 0 000 4zM12 4v10M12 18v2M18 9a2 2 0 100-4 2 2 0 000 4zM18 4v1M18 9v11"
        stroke="#fff"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgFilter;
