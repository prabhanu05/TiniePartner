import * as React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

const Error = (props: SvgProps) => (
    <Svg width={90} height={91} fill='none' {...props}>
        <Circle cx={45} cy={45} r={45} fill='#065987' />
        <Circle cx={44.5} cy={45.5} r={42.5} fill='#7ADF4B' />
        <Circle cx={45} cy={45} r={40} fill='#FC5E5E' />
        <Path
            d='M44.495 31.33c-2.1 0-3.64-.467-4.62-1.4-.933-.98-1.4-2.217-1.4-3.71v-1.54c0-1.493.467-2.707 1.4-3.64.98-.98 2.52-1.47 4.62-1.47s3.617.49 4.55 1.47c.98.933 1.47 2.147 1.47 3.64v1.54c0 1.493-.49 2.73-1.47 3.71-.933.933-2.45 1.4-4.55 1.4Zm-5.18 3.92h10.36V72h-10.36V35.25Z'
            fill='#fff'
        />
    </Svg>
);

export default Error;
