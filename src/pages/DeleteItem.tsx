import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {ItemContext} from "../store/ItemProvider.tsx";
import {Item} from "../models/Item.ts";
import {ItemModal} from "../Components/ItemModal.tsx";

export const DeleteItem = () => {

    const navigate = useNavigate();
    const [items, dispatch] = useContext(ItemContext);

    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);


    function handleSubmit() {
        const newItem = new Item(code, name, price, quantity);
        dispatch({type: 'DELETE_ITEM', payload: newItem});
        navigate('/');
    }

    return (
        <>
            <header><h2>Delete Item</h2></header>
            <br/>

            <ItemModal handleSubmit={handleSubmit} setCode={setCode} setName={setName} setPrice={setPrice}
                       setQuantity={setQuantity}>Delete Item</ItemModal>
        </>

    );
};
