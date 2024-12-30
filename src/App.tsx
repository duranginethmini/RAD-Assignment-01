import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Dashboard } from "./pages/DashBoard.tsx";
import { AddCustomer } from "./pages/AddCustomer.tsx";
import { UpdateCustomer } from "./pages/UpdateCustomer.tsx";
import { DeleteCustomer } from "./pages/DeleteCustomer.tsx";
import { RootLayout } from "./Components/RootLayout.tsx";
import {   } from "./Components/Modal.tsx";
import {CustomerProvider} from "./store/CustomerProvider.tsx";
import {DeleteItem} from "./pages/DeleteItem.tsx";
import {UpdateItem} from "./pages/UpdateItem.tsx";
import {AddItem} from "./pages/AddItem.tsx";
import {ItemProvider} from "./store/ItemProvider.tsx"; // Import the CustomerProvider

function App() {
    const routers = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout />,
            children: [
                { path: "/", element: <Dashboard/> },
                { path: "/add", element: <AddCustomer /> },
                { path: "/update", element: <UpdateCustomer /> },
                { path: "/delete", element: <DeleteCustomer /> },
                { path: "/add-item", element: <AddItem /> }, // Added route for adding an item
                { path: "/update-item", element: <UpdateItem /> }, // Added route for updating an item
                { path: "/delete-item", element: <DeleteItem /> }
            ]
        }
    ]);

    return (
        <ItemProvider>
        <CustomerProvider>
            <RouterProvider router={routers} />
        </CustomerProvider>
        </ItemProvider>
    );
}

export default App;
