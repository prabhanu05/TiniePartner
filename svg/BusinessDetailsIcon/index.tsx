import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const BusinessDetailsIcon = (props: SvgProps) => (
    <Svg width={19} height={19} fill='none' {...props}>
        <Path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4.083 11.54a2.933 2.933 0 0 1 2.572-1.517 2.933 2.933 0 1 1-1.77 5.303l-1.087 1.132a.584.584 0 0 1-.405.173.547.547 0 0 1-.39-.158.563.563 0 0 1 0-.795l1.087-1.155h.083a2.932 2.932 0 0 1-.09-2.984Zm.765 1.416c0 .998.809 1.807 1.807 1.807v-.022c.99 0 1.795-.796 1.808-1.785a1.808 1.808 0 0 0-3.615 0Z'
            fill='#fff'
        />
        <Path
            fillRule='evenodd'
            clipRule='evenodd'
            d='m10.285 2.058 5.25 5.25a.562.562 0 0 1 .203.42v5.25a3.562 3.562 0 0 1-3.563 3.562h-2.152a.563.563 0 0 1 0-1.125h2.114a2.437 2.437 0 0 0 2.438-2.437V8.29h-3.188a2.07 2.07 0 0 1-2.062-2.062V3.04H7.638A2.445 2.445 0 0 0 5.2 5.478v3.75a.563.563 0 0 1-1.125 0v-3.75a3.563 3.563 0 0 1 3.563-3.585h2.25c.149 0 .292.06.397.165Zm.165 1.755v2.415c0 .517.42.937.938.937h2.385L10.45 3.813Z'
            fill='#fff'
        />
    </Svg>
);

export default BusinessDetailsIcon;
