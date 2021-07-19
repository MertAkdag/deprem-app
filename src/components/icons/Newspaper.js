import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgNewspaper(props) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      className=""
      {...props}>
      <Path
        d="M28.156 4.25H5.844c-1.66 0-3.01 1.27-3.01 2.833v19.834c0 1.562 1.35 2.833 3.01 2.833h22.312c1.66 0 3.01-1.27 3.01-2.833V7.083c0-1.562-1.35-2.833-3.01-2.833zm0 22.667H5.844c-.081 0-.136-.023-.16-.023-.01 0-.016.003-.017.011L5.65 7.15c.01-.015.073-.066.194-.066h22.312c.112.002.173.04.177.012l.017 19.757c-.01.014-.073.065-.194.065z"
        fill="currentColor"
      />
      <Path
        d="M8.5 9.917H17v8.5H8.5v-8.5zm9.917 11.333H8.5v2.833h17V21.25h-7.083zm1.416-5.667H25.5v2.834h-5.667v-2.834zm0-5.666H25.5v2.833h-5.667V9.917z"
        fill="currentColor"
      />
    </Svg>
  );
}

export default SvgNewspaper;
