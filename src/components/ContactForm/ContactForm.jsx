import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

const ContactForm = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const reset = () => {
        setName('');
        setNumber('');
    };

    const handlleChange = event => {
        const { name, value } = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        };
    };

    const handlleSubmit = event => {
        event.preventDefault();
        const id = nanoid();
        onSubmit(id, name, number);
        reset();
    };

    return (
        <>
            <form className={s.form}
                onSubmit={handlleSubmit}
            >
                <label className={s.label}>
                    Name
                    <input className={s.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={handlleChange}
                        value={name}
                    />
                </label>
                <label className={s.label}>
                    Number
                    <input className={s.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={handlleChange}
                        value={number}
                    />
                </label>
                <button className={s.button}
                    type='submit'
                >
                    Add contact
                </button>
            </form>
        </>
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;