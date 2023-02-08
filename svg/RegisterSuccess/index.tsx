import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

const RegisterSuccess = (props: SvgProps) => (
    <Svg width={90} height={90} fill='none' {...props}>
        <Circle cx={45} cy={45} r={45} fill='#065987' />
        <Circle cx={44.5} cy={45.5} r={42.5} fill='#7ADF4B' />
        <Circle cx={45} cy={45} r={40} fill='#065987' />
        <Path
            d='M70 28 37.5 63 20 43'
            stroke='#fff'
            strokeWidth={5}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);

export default RegisterSuccess;
