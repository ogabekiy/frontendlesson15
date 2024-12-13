import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetInputValues from "../hooks/useGetInputValues";

const EditContact = ({ contacts, setContacts }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const contact = contacts.find((c) => c.id === parseInt(id));

    const { values, handleChange, resetHandler } = useGetInputValues({
        name: contact?.name || "",
        phone: contact?.phone || "",
    });

    const handleSubmit = useCallback(
        (event) => {
            event.preventDefault();
            setContacts((prev) =>
                prev.map((c) => (c.id === parseInt(id) ? { ...c, ...values } : c))
            );
            resetHandler();
            navigate("/");
        },
        [values, resetHandler, setContacts, id, navigate]
    );

    return (
        <div className="flex justify-center p-4 gap-5">
            <h1 className="text-xl font-bold mb-4">Edit Contact</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={values.name}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={values.phone}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                    />
                </div>
                <button type="submit" className="bg-black text-white px-4 py-2 rounded-3xl">
                    Update
                </button>
            </form>
        </div>
    );
};

export default EditContact;