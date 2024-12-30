import {Link} from "react-router";
import "./Navigation.css"

export const Navigation = () => {
    return (
        <>
            <header className= "bg-cyan-400 shadow-lg" >
                <nav className="p-3">
                    <ul className="flex text-black space-x-3" >
                        <Link to="/" className="custom-link">Dashboard</Link>
                        <Link to="/add" className="custom-link">Add</Link>
                        <Link to="/update" className="custom-link">Update</Link>
                        <Link to="/delete" className="custom-link">Delete</Link>
                        <Link to="/add-item" className="custom-link">Add Item</Link>
                        <Link to="/delete-item" className="custom-link">Delete Item</Link>
                        <Link to="/update-item" className="custom-link">Update Item</Link>

                    </ul>
                </nav>
            </header>
        </>
    );
};