import * as React from 'react';
import Svg, { Path, Rect, SvgProps } from 'react-native-svg';

const PhoneCall = (props: SvgProps) => (
    <Svg width={25} height={25} fill='none' {...props}>
        <Rect width={25} height={25} rx={10} fill='#DCDCDC' />
        <Path
            d='M14.942 6.699a3.72 3.72 0 0 1 2.94 2.939m-2.94-5.915a6.696 6.696 0 0 1 5.916 5.907m-.745 5.938V17.8a1.487 1.487 0 0 1-1.622 1.488 14.724 14.724 0 0 1-6.42-2.284 14.508 14.508 0 0 1-4.465-4.464 14.724 14.724 0 0 1-2.284-6.451 1.488 1.488 0 0 1 1.48-1.622h2.233a1.488 1.488 0 0 1 1.488 1.28c.094.714.269 1.415.52 2.09a1.488 1.488 0 0 1-.334 1.57l-.945.945a11.905 11.905 0 0 0 4.464 4.464l.945-.945a1.488 1.488 0 0 1 1.57-.334 9.553 9.553 0 0 0 2.09.52 1.488 1.488 0 0 1 1.28 1.51Z'
            stroke='#000'
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Svg>
);

export default React.memo(PhoneCall);
