import React from 'react';
import LoadingSpinner from '../components/molecules/LoadingSpinner/LoadingSpinner';


const withLoading = Cmp => props => {

    const { loading } = props;

    if( loading ) {
        return <LoadingSpinner />
    }

    return (
        <Cmp {...props}/>
    )
}

export default withLoading;