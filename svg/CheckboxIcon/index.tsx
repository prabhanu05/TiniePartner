import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const CheckboxIcon = (props: SvgProps) => (
    <Svg width={16} height={11} fill='none' {...props}>
        <Path
            d='M14.25 1 6.125 9.75l-4.375-5'
            stroke='#fff'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);

export default React.memo(CheckboxIcon);
