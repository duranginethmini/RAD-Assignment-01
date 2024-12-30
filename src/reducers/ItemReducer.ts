import { Item } from "../models/Item";

export const initialState: Item[] = [];

export function ItemReducer(
    state: Item[],
    action: { type: string; payload: Item }): Item[] {
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.payload];

        case "UPDATE_ITEM":
            return state.map((item: Item) =>
                item.code === action.payload.code
                    ? {
                        ...item,
                        name: action.payload.name,
                        price: action.payload.price,
                        quantity: action.payload.quantity,
                    }
                    : item
            );

        case "DELETE_ITEM":
            return state.slice(0, -1);

        default:
            return state;
    }
}
