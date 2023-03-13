import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Bin = (props: SvgProps) => (
    <Svg width={21} height={31} fill='none' {...props}>
        <Path
            d='M2.5 9h15M15.833 9.001v11.667a1.667 1.667 0 0 1-1.666 1.667H5.833a1.667 1.667 0 0 1-1.666-1.667V9.001m2.5 0V7.335a1.667 1.667 0 0 1 1.666-1.667h3.334a1.666 1.666 0 0 1 1.666 1.667V9'
            stroke='#000'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);

export default Bin;
