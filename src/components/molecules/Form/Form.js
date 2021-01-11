import React from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs'


const Form = ({ submitFn }) => (
    <form onSubmit={submitFn}>
        <div className="field">
            <p className="control has-icons-left has-icons-right">
                <input className="input" type="text" placeholder="Szukaj..." />
                <span className="icon is-small is-left">
                    <BsSearch />
                </span>
            </p>
        </div>


    </form>
)

Form.propTypes = {
    submitFn: PropTypes.func.isRequired
}

export default Form;