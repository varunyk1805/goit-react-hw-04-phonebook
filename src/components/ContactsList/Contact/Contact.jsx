import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';

export default class Contact extends Component {
    render() {
        const { contacts, onClick } = this.props;

        return (
            <>
                {contacts.map(contact => {
                    const { id, name, number } = contact;
                    return (
                        <li className={s.item}
                            key={id}
                        >
                            {name}: {number}
                            <button className={s.button}
                                type='button'
                                name={id}
                                onClick={onClick}
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </>
        );
    };
};

Contact.propTypes = {
    contacts: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}