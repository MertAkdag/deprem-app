import * as React from 'react';
import Svg, {Path, Defs, RadialGradient, Stop} from 'react-native-svg';

function SvgBg(props) {
  return (
    <Svg
      width={375}
      height={812}
      viewBox="0 0 375 812"
      fill="none"
      className=""
      {...props}>
      <Path fill="url(#bg_svg__paint0_radial)" d="M0 0h375v812H0z" />
      <Defs>
        <RadialGradient
          id="bg_svg__paint0_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-138.066 153.086 136.874) scale(396.548 428.527)">
          <Stop stopColor="#FF2F54" />
          <Stop offset={0} stopColor="#FF5964" />
          <Stop offset={1} stopColor="#C82731" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
}

export default SvgBg;
