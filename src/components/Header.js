import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { CartContext } from "./CartContext"
import cartIcon from "./image/cart.png"
import "./styles/Header.css"
function Header(){
    const navigate=useNavigate()
    const {cartData}=useContext(CartContext)
    return <>
    <nav>
    <section className="main-section">
      <section>Game shopping Cart</section>
      <article className="img-section" onMouseDown={()=>{navigate("/cart")}}>
        <img src={cartIcon} alt="img" />
        {cartData.length!==0 ?<span>{cartData.length}</span>:""}
        </article>              
        
    </section> 
    </nav>
   
        </>
}

export default Header