import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';


export default class Filter extends Component {

    render() {
        const { filter, onChange } = this.props;

        return (
            <>
                <label className={s.label}>
                    Find contacts by name
                    <input className={s.input}
                        type='text'
                        onChange={onChange}
                        value={filter}
                    />
                </label>
            </>
        );
    };
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};