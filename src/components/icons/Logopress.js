import * as React from 'react';
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgLogopress(props) {
  return (
    <Svg
      width={211}
      height={211}
      viewBox="0 0 211 211"
      fill="none"
      className=""
      {...props}>
      <G filter="url(#logopress_svg__filter0_i)">
        <Circle
          cx={105.5}
          cy={105.5}
          r={94.5}
          fill="url(#logopress_svg__paint0_linear)"
        />
      </G>
      <Circle cx={105.5} cy={105.5} r={100} stroke="#F3627C" strokeWidth={11} />
      <Path
        d="M104.989 87.142c-10.382 0-18.83 8.447-18.83 18.83 0 10.382 8.448 18.829 18.83 18.829 10.383 0 18.83-8.447 18.83-18.829 0-10.383-8.447-18.83-18.83-18.83zm0 23.175a4.35 4.35 0 01-4.345-4.345 4.35 4.35 0 014.345-4.346 4.35 4.35 0 014.345 4.346 4.35 4.35 0 01-4.345 4.345z"
        fill="url(#logopress_svg__paint1_radial)"
      />
      <Path
        d="M104.989 107.42a1.45 1.45 0 100-2.898 1.45 1.45 0 000 2.898z"
        fill="url(#logopress_svg__paint2_radial)"
      />
      <Path
        d="M124.449 86.512a1.447 1.447 0 00-2.048 0 1.446 1.446 0 000 2.048c4.649 4.65 7.212 10.834 7.212 17.411 0 6.578-2.563 12.761-7.212 17.412a1.446 1.446 0 000 2.048 1.443 1.443 0 002.048 0c5.197-5.198 8.06-12.109 8.06-19.46 0-7.35-2.863-14.26-8.06-19.46z"
        fill="url(#logopress_svg__paint3_radial)"
      />
      <Path
        d="M87.578 88.56a1.447 1.447 0 000-2.048 1.447 1.447 0 00-2.049 0c-10.73 10.73-10.73 28.189 0 38.919a1.443 1.443 0 002.049 0 1.447 1.447 0 000-2.048c-9.6-9.6-9.6-25.223 0-34.823z"
        fill="url(#logopress_svg__paint4_radial)"
      />
      <Path
        d="M130.595 80.366a1.447 1.447 0 00-2.048 0 1.446 1.446 0 000 2.048c12.988 12.99 12.988 34.125 0 47.113a1.447 1.447 0 001.024 2.473c.37 0 .741-.142 1.024-.424 14.118-14.118 14.118-37.092 0-51.21z"
        fill="url(#logopress_svg__paint5_radial)"
      />
      <Path
        d="M81.432 82.414a1.447 1.447 0 000-2.048 1.447 1.447 0 00-2.048 0c-14.12 14.118-14.12 37.09 0 51.21a1.446 1.446 0 002.048 0 1.448 1.448 0 000-2.049c-12.988-12.988-12.988-34.123 0-47.113z"
        fill="url(#logopress_svg__paint6_radial)"
      />
      <Defs>
        <RadialGradient
          id="logopress_svg__paint1_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-157.469 62.146 41.142) scale(32.0736 24.6766)">
          <Stop stopColor="#FF2F54" />
          <Stop offset={0} stopColor="#FF5964" />
          <Stop offset={1} stopColor="#C82731" />
        </RadialGradient>
        <RadialGradient
          id="logopress_svg__paint2_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-2.27888 -.94539 .72736 -1.75331 104.896 105.74)">
          <Stop stopColor="#FF2F54" />
          <Stop offset={0} stopColor="#FF5964" />
          <Stop offset={1} stopColor="#C82731" />
        </RadialGradient>
        <RadialGradient
          id="logopress_svg__paint3_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-8.28619 -12.9787 12.79622 -8.16969 126.906 102.788)">
          <Stop stopColor="#FF2F54" />
          <Stop offset={0} stopColor="#FF5964" />
          <Stop offset={1} stopColor="#C82731" />
        </RadialGradient>
        <RadialGradient
          id="logopress_svg__paint4_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-8.27598 -12.97869 12.78948 -8.15533 82.405 102.788)">
          <Stop stopColor="#FF2F54" />
          <Stop offset={0} stopColor="#FF5964" />
          <Stop offset={1} stopColor="#C82731" />
        </RadialGradient>
        <RadialGradient
          id="logopress_svg__paint5_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(-10.27505 -16.98954 16.35342 -9.89034 134.234 101.803)">
          <Stop stopColor="#FF2F54" />
          <Stop offset={0} stopColor="#FF5964" />
          <Stop offset={1} stopColor="#C82731" />
        </RadialGradient>
        <RadialGradient
          id="logopress_svg__paint6_radial"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(-121.167 66.154 29.783) scale(19.8554 19.1128)">
          <Stop stopColor="#FF2F54" />
          <Stop offset={0} stopColor="#FF5964" />
          <Stop offset={1} stopColor="#C82731" />
        </RadialGradient>
        <LinearGradient
          id="logopress_svg__paint0_linear"
          x1={105.5}
          y1={11}
          x2={105.5}
          y2={200}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#FFC4CE" />
          <Stop offset={0.557} stopColor="#fff" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgLogopress;
