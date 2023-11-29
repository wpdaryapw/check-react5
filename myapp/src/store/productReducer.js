const start_datas = [
    {id: 1, title: 'Велосипед', count: 5},
    {id: 2, title: 'Самокат', count: 4},
    {id: 3, title: 'Гантели', count: 7},
    {id: 4, title: 'Ракетки', count: 1}
 ]

const defaultState = JSON.parse(localStorage.getItem('product')) ?? start_datas

const ADD_COUNT_PROD = 'ADD_COUNT_PROD'
const DEL_COUNT_PROD = 'DEL_COUNT_PROD'
const ADD_NEW_PROD = 'ADD_NEW_PROD'
 

export const productReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_COUNT_PROD:
            return state.map((product) =>
            product.id === action.payload
                ? { ...product, count: Math.min(product.count + 1, 25) }
                : product)
        case DEL_COUNT_PROD:
            return state.map((product) =>
                product.id === action.payload
                    ? { ...product, count: Math.max(product.count - 1, 0) }
                    : product
            ).filter((product) => product.count > 0)
        case ADD_NEW_PROD:
            let newProduct = {
                id: Date.now(),
                title: prompt('Добавить товар'),
                count: 1
            }
            return [...state, newProduct]
        default:
            return state
    }
}


export const addProdAction = (payload) => ({type: ADD_COUNT_PROD, payload})
export const delProdAction = (payload) => ({type: DEL_COUNT_PROD, payload})
export const addNewProdAction = () => ({type: ADD_NEW_PROD})

