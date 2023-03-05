import { useContext } from "react"
import { CartContext } from "./CartContext"
import "./styles/Item.css"
function Item({items}){
    const {addCartData}=useContext(CartContext)
    return <>
    <section className="main-sec">
        <h5 className="title">{items.title}</h5>
        <section  className="img-sec">
            <img src={items.img_url} alt="img"/>
        </section>
        <section className="description">
            {items.description}
        </section>
        <section className="price">Price:{items.price}</section>
        <button onClick={()=>{addCartData(items)}}>Add to cart</button>
    </section>
    </>
}
export default Item