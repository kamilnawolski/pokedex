import React from 'react';
import FetchError from '../components/molecules/FetchError/FetchError';

const withHandleError = Cmp => props => {

    const { error } = props;

    if( error ) {
        return <FetchError />
    }

    return <Cmp {...props} />
}

export default withHandleError;