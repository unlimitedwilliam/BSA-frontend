const initState = {
    productList: [
        {   
            id: Date.now(),
            title: 'Nineteen Eighty-Four',
            author: 'George Orwell',
            image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX318_.jpg',
            price: 1.99,
        }, 
        {
            id: Date.now(),
            title: 'The Fault in Our Stars',
            author: 'John Green',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbFsZ40KbLvcPQRgJ0Us4vmc9I0eGnG98_3g&usqp=CAU',
            price: 6.1,
        },
        { 
            id: Date.now(),
            title: 'Don Quixote',
            author: 'Miguel De Cervantes Saavedra',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS18tMtc63vsFokAKvCsa8-IPAqO3X2NBSWIw&usqp=CAU',
            price: 22.49,
        },
        { 
            id: Date.now(),
            title: 'Macroeconomics',
            author: 'N. Gregory Mankiw',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkGcURgtbOdGPYIBYbvrqkHjrOq-Y_oJygNQ&usqp=CAU',
            price: 234.49,
        },
        {
            id: Date.now(),
            title: 'Algorithms to Live By',
            author: 'Brian Christan & Tom Griffiths',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT82YASu8E6jlFUee7CezBnRNsacy9_lV7G9Q&usqp=CAU',
            price: 84.34,
        }
    ],
    func: {
        search: '',
        total: 0
    }
}

const reducer = (state = initState, action: any) => {
    switch(action.type) {
        case 'Add Book': 
            return {
                ...state,
                productList: [...state.productList, action.payload]
            };
        case 'Change Info': 
            return {
                ...state, 
                productList: [...state.productList.slice(0, action.payload.id - 1), action.payload, ...state.productList.slice(action.payload.id)]
            }
        case 'Remove Book': 
            return {
                ...state, 
                productList: [...state.productList.slice(0, action.payload.id - 1), ...state.productList.slice(action.payload.id)]
            }
        case 'Search Change':
            return {
                ...state,
                func: {
                    ...state.func,
                    search: action.payload
                }
            }

        case 'Calculate Total': 
            return {
                ...state,
                func: {
                    ...state.func,
                    total: state.func.total += action.payload
                }
            }

        default: return state;
    }
}

export default reducer;