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
    const [title, setTitle] = useState("Главная");
    const [value, setValue] = useState("")

    const filtrData = (text) =>{
        
        const newArr = products.products.filter((elem) => elem.category === text);
        setData(newArr);
        setTitle(text);
    }

    const addCart = (id) =>{
        
        const newArr = products.products.find((elem) => elem.id === id);
        setCart([...cart, newArr]);
    }
    const deleteCard = (id) =>{
        setCart([...cart.filter((elem, i) => i !== id)]);

    }
    const HomeClick = () =>{
        setData(products.products);
        setTitle("Главная");
    }

    const SearchClick = () =>{
        const newArr = products.products.filter((elem) => elem.title.toLowerCase().includes(value.toLowerCase()));
        setData(newArr)
    }

    return(
        <div>
            <Header filtrData={filtrData} cart={cart} HomeClick={HomeClick} SearchClick={SearchClick} value={value} setValue={setValue}/>
            <Container>
                <Routes>
                    <Route path="/" element={<Home data={data} addCart={addCart} title={title}/>}/>
                    <Route path="/cart" element={<Cart cart={cart} deleteCard={deleteCard}/>}/>
                </Routes>
            </Container>
        </div>
    )
  }
export default Main;