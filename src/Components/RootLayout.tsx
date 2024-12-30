import {Navigation} from "../Components/Navigation.tsx";
import {Outlet} from "react-router";

export const RootLayout = () => {
    return (
        <>
            <Navigation/>
            <main className="p-5">
                <Outlet></Outlet>
            </main>
        </>
    );
};