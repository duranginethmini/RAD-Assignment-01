import {useState, useContext} from "react";
import {Item} from "../models/Item.ts";
import {ItemContext} from "../store/ItemProvider.tsx";
import {useNavigate} from "react-router";
import {ItemModal} from "../Components/ItemModal.tsx";

export function AddItem() {

    const navigate = useNavigate();
    const [items, dispatch] = useContext(ItemContext);

    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);



    function handleSubmit() {
        const newItem= new Item(code, name, price, quantity);
        // setItems((prevItems: Item[]) => [...prevItems, newItem]);
        dispatch({type: 'ADD_ITEM', payload: newItem});
        navigate('/');
    }

    return (
        <>
            <header><h2>Add Item</h2></header>
            <br/>
            <ItemModal handleSubmit={handleSubmit} setCode={setCode} setName={setName} setPrice={setPrice} setQuantity={setQuantity} >Add Item</ItemModal>
        </>
    );
}
