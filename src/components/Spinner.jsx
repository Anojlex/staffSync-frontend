import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const override = css`
display: block;
transform: translate(-50%, -50%);
background: transparent;
border-color: red;
border-radius: 50%;

`;

const LoadingSpinner = ({ loading }) => {
    return (
        <ClipLoader color={'#36D7B7'} loading={loading} css={override} size={50} />
    );
};

export default LoadingSpinner;
