import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const Info = (props: SvgProps) => (
    <Svg width={25} height={25} fill='none' {...props}>
        <Path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12.738.5C5.982.507.507 5.982.5 12.738c0 6.758 5.479 12.237 12.238 12.237 6.758 0 12.237-5.479 12.237-12.238C24.968 5.983 19.493.508 12.737.5Zm0 22.6c-5.724 0-10.363-4.64-10.363-10.363S7.015 2.376 12.738 2.376 23.1 7.015 23.1 12.738c-.007 5.72-4.642 10.355-10.363 10.362Zm0-15.05a.95.95 0 0 0 0 1.887.925.925 0 0 0 .937-.95.95.95 0 0 0-.938-.937Zm0 3.6a.925.925 0 0 0-.938.938v3.9a.937.937 0 1 0 1.875 0v-3.875a.937.937 0 0 0-.938-.963Z'
            fill='#000'
        />
    </Svg>
);

export default Info;
