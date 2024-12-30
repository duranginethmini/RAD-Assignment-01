export function ItemModal(props) {
    return (
        <>
            <input
                type="text"
                placeholder="Code"
                value={props.code}
                onChange={(e) => props.setCode(e.target.value)}
            />
            <input
                type="text"
                placeholder="Name"
                value={props.name}
                onChange={(e) => props.setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price"
                value={props.price}
                onChange={(e) => props.setPrice(Number(e.target.value))}
            />
            <input
                type="number"
                placeholder="Quantity"
                value={props.quantity}
                onChange={(e) => props.setQuantity(Number(e.target.value))}
            />

            <br />
            <button onClick={props.handleSubmit}>{props.children}</button>
        </>
    );
}
