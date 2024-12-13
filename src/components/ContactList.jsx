import { useCallback, useMemo, useState } from "react";
import ContactRow from "./ContactRow";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, setContacts }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleDelete = useCallback((id) => {
        setContacts((prev) => prev.filter((contact) => contact.id !== id));
    }, [setContacts]);

    const filteredContacts = useMemo(() => {
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [contacts, searchTerm]);

    return (
        <div className="container mx-auto p-4">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Contacts</h1>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border p-2 rounded-3xl"
                />
                <Link to="/create-contact">
                    <button className=" border text-black px-4 py-2 rounded-2xl">Add Contact</button>
                </Link>
            </header>
            <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">Name</th>
                        <th className="border px-4 py-2">Phone</th>
                        <th className="border px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredContacts.map((contact) => (
                        <ContactRow
                            key={contact.id}
                            contact={contact}
                            handleDelete={handleDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactList;