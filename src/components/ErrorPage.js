import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div style={{textAlign:'center'}}>
            <h2>{error.status} Somethin went Wrong ):</h2>
            <h3>{error.data}</h3>
            <h4>Please try again !</h4>
        </div>
    );
};

export default ErrorPage;