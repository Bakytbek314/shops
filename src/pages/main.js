import React,{useState} from "react";
import Header from "../components/header";
import Home from "./home";
import Cart from "./cart";
import {Routes, Route} from "react-router-dom";
import { Container } from "react-bootstrap";
import products from "../data/products.json"

const Main = () =>{
    const [data, setData] = useState(products.products);
    const [cart, setCart] = useState([]);
    const filtrData = (text) =>{
        console.log(text);
        const newArr=products.products.filter((elem)=>elem.category===text)
        setData(newArr)
    }

    const addCart = (id) =>{
        console.log(id);
        const newArr = products.products.find((elem) => elem.id === id)
        setCart([...cart, newArr])
    }
    const deleteCard = (id) =>{
        const newArr = products.products.find((elem) => elem.id !== id)
        setCart([...cart, newArr])
    }
    
    return(
        <div>
            <Header filtrData={filtrData}/>
            <Container>
                <Routes>
                    <Route path="/" element={<Home data={data} addCart={addCart}/>}/>
                    <Route path="/cart" element={<Cart cart={cart}  deleteCard={deleteCard}/>}/>
                </Routes>
            </Container>
        </div>
    )
  }
export default Main;