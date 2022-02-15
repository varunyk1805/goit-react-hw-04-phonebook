import PropTypes from 'prop-types';
import Contact from './Contact';
import s from './ContactsList.module.css';

const ContactsList = ({ contacts, onClick }) =>  {
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

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ContactsList;