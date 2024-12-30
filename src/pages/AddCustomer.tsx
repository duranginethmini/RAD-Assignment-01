import { useNavigate } from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Customer} from "../models/Customer.ts";
import {Modal} from "../Components/Modal";

export function AddCustomer() {

    const navigate = useNavigate();
    const [customers, dispatch] = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const[address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const newCustomer = new Customer(name, address,email, phone);
        dispatch({type: 'ADD_CUSTOMER', payload: newCustomer});
        navigate('/');
    }
    return (
        <>
            <header><h2>Add Customer</h2></header>
            <br/>

            <Modal handleSubmit={handleSubmit} setName={setName} setAddress={setAddress} setEmail={setEmail} setPhone={setPhone} >Add Customer</Modal>
        </>
    );
}