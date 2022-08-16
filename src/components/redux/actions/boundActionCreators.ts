import { bindActionCreators } from "redux";
import store from "../store/store";

const addProduct = (data: any) => {
    return {
        type: 'Add Book',
        payload: data
    }
}

const changeProductInfo = (data: any) => {
    return {
        type: 'Change Info',
        payload: data
    }
}

const removeProduct = (data: any) => {
    return {
        type: 'Remove Book',
        payload: data
    }
}

const searchByKey = (data: string) => {
    return {
        type: 'Search Change',
        payload: data
    }
}

const calculateTotal = (price: number) => {
    return {
        type: 'Calculate Total',
        payload: price
    }
}

export const boundActionCreators = bindActionCreators(
    {
        add: addProduct,
        change: changeProductInfo,
        remove: removeProduct,
        search: searchByKey,
        total: calculateTotal
    },
    store.dispatch
)