import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Back = (props: SvgProps) => (
    <Svg width={32} height={32} fill='none' {...props}>
        <Path
            d='M15 6 5 16l10 10M7 16h20'
            stroke='#464646'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);

export default Back;
