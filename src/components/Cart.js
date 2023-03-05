import { useCallback, useContext, useRef } from "react";
import { CartContext } from "./CartContext";
import useRazorpay from "react-razorpay"
import "./styles/Cart.css"
const Cart = ()=> {
    const {cartData,removeCartData} = useContext(CartContext);
    let total = 0
    const RazorPay = useRazorpay();
    const razorPayDisplay = useCallback(async (total)=> {
        const options = {
            key: "rzp_test_28fmnM2kHmjp9F",
            amount: total*100,
            currency: "INR",
            name: "game-shopping-app",
            description: "Gaming Transaction",
            handler: (res)=> {
                console.log(res);
            },
            prefill: {
                name: "Ragesh J",
                email: "rageshj123@gmail.com",
                contact: "1234567890"
            
            },
            notes: {
                address: "xyz street,chennai"
            },
            theme: {
                color: "#3399cc",
            },
        }
        const rzp1 = new RazorPay(options);
        rzp1.open();
        
    }, [RazorPay])
    return <>
            <section>
                <section>
                {cartData.map((cartItem)=> {
                return (
                    <section className="cart-data-cards">
                        <section className="img-sec">
                        <img src={cartItem.img_url} alt="img"/>
                        </section>
                        <article>{cartItem.title}</article>
                        <article>Price:{cartItem.price}</article>
                        <button onClick={()=>{removeCartData(cartItem)}}>Remove from cart</button>
                    </section>
                )
            })}
                </section>
                <section>
                <article>Billing Information </article>
                  {cartData.map((cart)=> {
                      total=total+cart.price
                      return <article>
                          <span>{cart.title}</span>
                          <span>{cart.price}</span>
                      </article>
                  })}
                  <article>Total:{total}Rs </article>
                  <button onClick={()=>{razorPayDisplay(total)}}>Checkout</button>
                </section>
            </section>
            </>
}
export default Cart