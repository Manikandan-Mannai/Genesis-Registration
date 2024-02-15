import React from 'react';
import ReactLoading from 'react-loading';

const LoadingOverlay = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
            }}
        >
            <ReactLoading type={'spin'} color={'#fff'} height={'5%'} width={'5%'} />
        </div>
    );
};

export default LoadingOverlay;
