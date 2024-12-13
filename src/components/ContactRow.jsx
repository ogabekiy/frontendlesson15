import React from "react";
import { Link } from "react-router-dom";

const ContactRow = React.memo(({ contact, handleDelete }) => {
    return (
        
            <tr className="hover:bg-gray-100">
            <td className="border px-4 py-2">{contact.name}</td>
            <td className="border px-4 py-2">{contact.phone}</td>
            <td className="border px-4 py-2 flex gap-2">
                <Link to={`/edit-contact/${contact.id}`}>
                    <button className=" text-black px-2 py-1 rounded fa fa-edit"></button>
                </Link>
                <button
                    className=" text-black  px-2 py-1 rounded fa fa-trash "
                    onClick={() => handleDelete(contact.id)}
                >
                </button>
            </td>
        </tr>
        
    );
});

export default ContactRow;