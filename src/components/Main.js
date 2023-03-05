import { useEffect, useState } from "react"
import axios from "axios"
import Header from "./Header"
import Item from "./Item"

function Main(){
    const[bestSellers,setBestSellers]=useState([])
    const[oldSchool,setoldSchool]=useState([])
    const[actions,setActions]=useState([])
useEffect(()=>{
    axios.get("http://localhost:1337/api/best-sellers")
    .then(bestSellers=>setBestSellers(bestSellers.data.data)).catch(err=>console.log(err)).finally(()=>{})

    axios.get('http://localhost:1337/api/old-schools').then((oldSchool)=> {
        setoldSchool(oldSchool.data.data)
    }).catch(()=> {

    }).finally(()=> {

    });
    axios.get("http://localhost:1337/api/actions")
    .then(res=>setActions(res.data.data)).catch(err=>console.log(err))
},[])

    return <>
    <Header />
    <section>
    <h2>Best Sellers</h2>
        <section className="item-main-sec">
        
        {
            
            bestSellers.map((item,key)=>{
                return <Item items={item.attributes} key={key} />
            })
        }
        </section>
        <h2>Old Schools</h2>
        <section className="item-main-sec">
        
        {
                
            oldSchool.map((item,key)=>{
                return <Item items={item.attributes} key={key} />
            })
        }
        </section>
        <h2>Actions</h2>
        <section className="item-main-sec">
        
        {
            actions.map((item,key)=>{
               return <Item items={item.attributes} key={key} />
            })
        }
        </section>
    </section>
    </>
}
export default Main