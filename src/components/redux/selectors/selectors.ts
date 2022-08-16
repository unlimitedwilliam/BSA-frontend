export const productListSelector = (state: any) => {
    const productRemain = state.productList.filter((book: any) => 
     book.title.toLowerCase().includes(state.func.search.toLowerCase()))

    return productRemain;
}
    
export const searchKeySelector = (state: any) => {
    return state.func.search;
}   

export const totalSelector = (state: any) => {
    return state.func.total;
}