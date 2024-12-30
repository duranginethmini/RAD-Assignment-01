import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Customer} from "../models/Customer.ts";
import {Modal} from "../Components/Modal.tsx";

export function UpdateCustomer() {
    const navigate = useNavigate();
    const [customers, dispatch] = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const [inputEmail, setInputEmail] = useState("");
    const [error, setError] = useState("");

    function fetchCustomerByEmail() {
        const customerToEdit = customers.find(
            (customer) => customer.email.toLowerCase() === inputEmail.trim().toLowerCase()
        );

        if (customerToEdit) {
            setName(customerToEdit.name);
            setEmail(customerToEdit.email);
            setAddress(customerToEdit.address);
            setPhone(customerToEdit.phone);
            setError("");
        } else {
            setError("Customer not found. Please check the email.");
            setName("");
            setEmail("");
            setAddress("");
            setPhone("");
        }
    }

    function handleSubmit() {
        const updatedCustomer = new Customer(name, address, email, phone);
        dispatch({ type: "UPDATE_CUSTOMER", payload: updatedCustomer });
        navigate("/");
    }

    return (
        <>
            <header><h2>Update Customer</h2></header>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                    placeholder="Enter email to fetch customer"
                />
                <button onClick={fetchCustomerByEmail}>Fetch Customer</button>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Modal
                name={name}
                address={address}
                email={email}
                phone={phone}
                setName={setName}
                setAddress={setAddress}
                setEmail={setEmail}
                setPhone={setPhone}
                handleSubmit={handleSubmit}
            >
                Update Customer
            </Modal>
        </>
    );
}
