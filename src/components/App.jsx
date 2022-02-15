import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactsList from './ContactsList';
import s from './App.module.css';

const App = () => {
    const [contacts, setContacts] = useState(
        () => JSON.parse(localStorage.getItem('contacts')) ?? []
    );
    const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts])

    const filteredContacts = (() => {
        const value = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(value));
    })();

    const addContact = (id, name, number) => {
        const value = name.toLowerCase();
        contacts.filter(contact => contact.name.toLowerCase() === value).length === 0
            ?
            setContacts(prev => [...prev, { id: id, name: name, number: number }])
            :
            alert(`${name} is already in contacts.`);
    };

    const deleteContact = event => {
        const { name } = event.target;
        setContacts(contacts.filter(contact => contact.id !== name));
    };

    const handlleFilterContactsByName = event => {
        const { value } = event.target;
        setFilter(value);
    };

    return (
        <>
            <h2 className={s.phonebook}>
                Phonebook
            </h2>
            <ContactForm
                onSubmit={addContact}
            />
            <h2 className={s.contacts}>
                Contacts
            </h2>
            <Filter
                filter={filter}
                onChange={handlleFilterContactsByName}
            />
            <ContactsList
                contacts={filteredContacts}
                onClick={deleteContact}
            />
        </>
    );
};

export default App;