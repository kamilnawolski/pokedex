import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { setSearchValue, setClearValue } from '../../../actions/search';
import Form from './../Form/Form';
import Heading from '../../atoms/Heading/Heading';

const WrapperTopbar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background-color: red;
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
`
const WrapperSearchInfo = styled.div`
    display: flex;
    align-items: center;
`
const HeadingStyle = styled(Heading)`
    color: #fff;
`

const Topbar = () => {

    const [searchContent, setSearchContent] = useState(null)
    const dispatch = useDispatch();

    const searchPokemon = (e) => {
        e.preventDefault();

        const target = e.target;
        const value = e.target[0].value;

        dispatch(setSearchValue(value));
        setSearchContent(value);

        target.reset();
    }

    const clearSearchValue = () => {
        setSearchContent(null);
        dispatch(setClearValue(null))
    }

    return (
        <WrapperTopbar>
            <WrapperSearchInfo>
                {searchContent && <>
                    <HeadingStyle>wyszukałeś: <i>{searchContent}</i></HeadingStyle>
                    <button className="button is-white" onClick={clearSearchValue}><FaTimes /></button>
                </>
                }
            </WrapperSearchInfo>
            <Form submitFn={searchPokemon} />
        </WrapperTopbar >
    )
}


export default Topbar;

