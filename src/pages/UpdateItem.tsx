import { useNavigate } from "react-router";
import { useContext, useState, useEffect } from "react";
import { ItemContext } from "../store/ItemProvider.tsx";
import { Item } from "../models/Item.ts";
import { ItemModal } from "../Components/ItemModal.tsx";

export const UpdateItem = () => {
    const navigate = useNavigate();
    const [items, dispatch] = useContext(ItemContext);

    const [code, setCode] = useState("");    // Track the code entered by the user
    const [name, setName] = useState("");    // Track name input
    const [price, setPrice] = useState<number>(0);  // Track price input
    const [quantity, setQuantity] = useState<number>(0);  // Track quantity input

    // Auto-fill fields when the code is entered
    useEffect(() => {
        if (code) {
            const itemToUpdate = items.find((item: Item) => item.code === code);
            if (itemToUpdate) {
                // Populate fields with existing item data
                setName(itemToUpdate.name);
                setPrice(itemToUpdate.price);
                setQuantity(itemToUpdate.quantity);
            }
        }
    }, [code, items]); // Re-run the effect when `code` or `items` changes

    // Handle form submission
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
