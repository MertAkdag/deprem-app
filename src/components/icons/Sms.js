import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSms(props) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      className=""
      {...props}>
      <Path
        d="M28.333 5.667H8.5A2.836 2.836 0 005.667 8.5v7.083H8.5v-4.25l9.067 6.8a1.419 1.419 0 001.7 0l9.066-6.8v12.75H17v2.834h11.333a2.836 2.836 0 002.834-2.834V8.5a2.836 2.836 0 00-2.834-2.833zm-9.916 9.562L9.444 8.5H27.39l-8.973 6.73z"
        fill="currentColor"
      />
      <Path
        d="M2.833 17h9.917v2.833H2.833V17zm2.834 4.25h8.5v2.833h-8.5V21.25zm4.25 4.25h5.666v2.833H9.917V25.5z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgSms;
