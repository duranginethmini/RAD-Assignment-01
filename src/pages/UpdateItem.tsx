import { useNavigate } from "react-router";
import { useContext, useState, useEffect } from "react";
import { ItemContext } from "../store/ItemProvider.tsx";
import { Item } from "../models/Item.ts";
import { ItemModal } from "../Components/ItemModal.tsx";

export const UpdateItem = () => {
    const navigate = useNavigate();
    const [items, dispatch] = useContext(ItemContext);

    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);


    useEffect(() => {
        if (code) {
            const itemToUpdate = items.find((item: Item) => item.code === code);
            if (itemToUpdate) {

                setName(itemToUpdate.name);
                setPrice(itemToUpdate.price);
                setQuantity(itemToUpdate.quantity);
            }
        }
    }, [code, items]);


    function handleSubmit() {
        const updatedItem = new Item(code, name, price, quantity);
        dispatch({ type: 'UPDATE_ITEM', payload: updatedItem });
        navigate('/');
    }

    return (
        <>
            <header><h2>Update Item</h2></header>
            <br />
            <ItemModal
                handleSubmit={handleSubmit}
                setCode={setCode}
                setName={setName}
                setPrice={setPrice}
                setQuantity={setQuantity}
                code={code}
                name={name}
                price={price}
                quantity={quantity}
            >
                Update Item
            </ItemModal>
        </>
    );
};
