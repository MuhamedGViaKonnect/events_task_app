import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
const SvgAppLogo = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M6.555 5.84v6.285h7.06c1.632 0 2.448-1.047 2.448-3.143 0-2.095-.816-3.142-2.447-3.142H6.555ZM21.792 9.2c0 2.18-.692 4.057-2.075 5.637-1.383 1.58-3.417 2.37-6.101 2.37H6.555v6.195c0 .471-.227.712-.682.712H1.538c-.475 0-.702-.24-.681-.712V1.476c0-.476.227-.711.68-.711h12.079c2.602 0 4.615.857 6.04 2.583 1.424 1.725 2.136 3.675 2.136 5.854Z"
    />
  </Svg>
);
export default SvgAppLogo;
