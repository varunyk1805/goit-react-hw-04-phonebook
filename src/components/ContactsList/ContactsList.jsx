import { Component } from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact/Contact';
import s from './ContactsList.module.css';

export default class ContactsList extends Component {

    render() {
        const { contacts, onClick } = this.props;

        return (
            <>
                <ul className={s.list}>
                    <Contact
                        contacts={contacts}
                        onClick={onClick}
                    />
                </ul>                
            </>
        );
    };
};

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
}