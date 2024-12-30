import { useContext } from "react";
import { Customer } from "../models/Customer";
import { CustomerContext } from "../store/CustomerProvider";
import { ItemContext } from "../store/ItemProvider.tsx";
import { Item } from "../models/Item.ts";

export function Dashboard() {
    const [customers] = useContext(CustomerContext);
    const [items] = useContext(ItemContext);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

            {/* Customer Table */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Customers</h2>
                <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden table-auto">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Address</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Phone</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer: Customer) => (
                        <tr key={customer.email} className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b text-center align-middle">{customer.name}</td>
                            <td className="py-2 px-4 border-b text-center align-middle">{customer.address}</td>
                            <td className="py-2 px-4 border-b text-center align-middle">{customer.email}</td>
                            <td className="py-2 px-4 border-b text-center align-middle">{customer.phone}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>


            {/* Item Table */}
            <div>
                <h2 className="text-xl font-semibold mb-4">Items</h2>
                <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="py-2 px-4 border-b">Code</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Price</th>
                        <th className="py-2 px-4 border-b">Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.map((item: Item) => (
                        <tr key={item.code} className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b text-center align-middle">{item.code}</td>
                            <td className="py-2 px-4 border-b text-center align-middle">{item.name}</td>
                            <td className="py-2 px-4 border-b text-center align-middle">{item.price}</td>
                            <td className="py-2 px-4 border-b text-center align-middle">{item.quantity}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}
