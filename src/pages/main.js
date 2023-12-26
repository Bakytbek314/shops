import React,{useState} from "react";
import Header from "../components/header";
import Home from "./home";
import Cart from "./cart";
import {Routes, Route} from "react-router-dom";
import { Container } from "react-bootstrap";
import products from "../data/products.json"

const Main = () =>{
    const [data, setData] =useState(products.products);
    console.log("data>>>", data);
    return(
        <div>
            <Header/>
            <Container>
                <Routes>
                    <Route path="/" element={<Home data={data}/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </Container>
        </div>
    )
}
export default Main;