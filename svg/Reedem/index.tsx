import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Reedem = (props: SvgProps) => (
    <Svg width={24} height={24} fill='none' {...props}>
        <Path
            d='M22 11.08V12a10 10 0 1 1-5.93-9.14'
            stroke='#196200'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
        <Path
            d='M22 4 12 14.01l-3-3'
            stroke='#196200'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);

export default React.memo(Reedem);
