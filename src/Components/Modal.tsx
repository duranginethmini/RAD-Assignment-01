export function Modal(props) {
    return (
        <>
            <input
                type="text"
                placeholder="Name"
                value={props.name}
                onChange={(e) => props.setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Address"
                value={props.address}
                onChange={(e) => props.setAddress(e.target.value)}
            />
            <input
                type="text"
                placeholder="Email"
                value={props.email}
                onChange={(e) => props.setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="Phone"
                value={props.phone}
                onChange={(e) => props.setPhone(e.target.value)}
            />
            <br />
            <button onClick={props.handleSubmit}>{props.children}</button>
        </>
    );
}
