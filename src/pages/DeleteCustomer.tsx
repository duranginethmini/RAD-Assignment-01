import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider";
import {Customer} from "../models/Customer";
import {Modal} from "../Components/Modal";

export function DeleteCustomer() {

    const navigate = useNavigate();
    const [customers, dispatch] = useContext(CustomerContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const[address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    function handleSubmit() {
        const deleteCustomer = new Customer(name, address,email, phone);
        dispatch({type: 'DELETE_CUSTOMER', payload: deleteCustomer});
        navigate('/');
    }
    return (
        <>
            <header><h2>Delete Customer</h2></header>
            <br/>
            <Modal handleSubmit={handleSubmit} setName={setName} setAddress={setAddress} setEmail={setEmail} setPhone={setPhone}>Delete Customer</Modal>
        </>
    );

}
