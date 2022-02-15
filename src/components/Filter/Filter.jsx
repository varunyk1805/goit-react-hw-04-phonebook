import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
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

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;