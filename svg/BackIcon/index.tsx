import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const BackIcon = (props: SvgProps) => (
    <Svg width={24} height={24} fill='none' {...props}>
        <Path
            d='M19 12H5M12 19l-7-7 7-7'
            stroke='#000'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);

export default BackIcon;
