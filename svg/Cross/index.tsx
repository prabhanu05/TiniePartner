import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Cross = (props: SvgProps) => (
    <Svg width={20} height={20} fill='none' {...props}>
        <Path
            d='M15 5 5 15M5 5l10 10'
            stroke='#000'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);

export default Cross;
