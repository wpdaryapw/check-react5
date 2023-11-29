import { useDispatch, useSelector } from "react-redux"
import { store } from "../store/Index"
import { useEffect } from "react"
import { addNewProdAction, addProdAction, delProdAction } from "../store/productReducer"


function Product(){
    const product = useSelector(store => store.product)
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('product', JSON.stringify(product))
    }, [product])


    return(
        <div>
            <button className="add_but" onClick={() => dispatch(addNewProdAction())}>Add Prod</button>
            <div className="main">
                {product.map(elem => 
                <div className="main_product" key={elem.id}>
                    <p>{elem.title}</p>
                    <button className="but_count_m" onClick={() => dispatch(delProdAction(elem.id))}>-</button>
                        <span className="product-count">{elem.count}</span>
                    <button className="but_count_p" onClick={() => dispatch(addProdAction(elem.id))}>+</button>
                </div>
                )}
            </div>
        </div>
    )
}


export default Product