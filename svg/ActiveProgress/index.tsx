import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ActiveProgress = (props: SvgProps) => (
    <Svg width={67} height={12} fill='none' {...props}>
        <Path
            d='M1 5a1 1 0 0 0 0 2V5Zm54.667 1a5.333 5.333 0 1 0 10.666 0 5.333 5.333 0 0 0-10.666 0ZM1 7h60V5H1v2Z'
            fill='#065987'
        />
    </Svg>
);

export default React.memo(ActiveProgress);
