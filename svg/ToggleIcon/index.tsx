import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const ToggleIcon = (props: SvgProps) => (
    <Svg width={15} height={13} fill='none' {...props}>
        <Path
            d='M0 12.24c0 .328.336.594.75.594h13c.414 0 .75-.266.75-.594 0-.328-.336-.594-.75-.594h-13a.85.85 0 0 0-.533.172.53.53 0 0 0-.217.422ZM0 6.7c0 .327.336.593.75.593h13c.414 0 .75-.266.75-.594 0-.328-.336-.594-.75-.594h-13a.85.85 0 0 0-.533.172.53.53 0 0 0-.217.422ZM0 1.156c0 .328.336.594.75.594h13c.414 0 .75-.266.75-.594 0-.328-.336-.594-.75-.594h-13a.85.85 0 0 0-.533.172.53.53 0 0 0-.217.422Z'
            fill='#fff'
        />
    </Svg>
);

export default React.memo(ToggleIcon);
