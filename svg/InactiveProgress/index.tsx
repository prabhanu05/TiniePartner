import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const InactiveProgress = (props: SvgProps) => (
    <Svg width={64} height={6} fill='none' {...props}>
        <Path
            d='M1 2.5a.5.5 0 0 0 0 1v-1Zm57.333.5a2.667 2.667 0 1 0 5.334 0 2.667 2.667 0 0 0-5.334 0ZM1 3.5h60v-1H1v1Z'
            fill='#A3A1A1'
        />
    </Svg>
);

export default React.memo(InactiveProgress);
