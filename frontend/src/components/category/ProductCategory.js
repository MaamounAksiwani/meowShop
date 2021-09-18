import React, { useState, useEffect } from 'react';
import { Route  , useParams} from 'react-router-dom';
import { useHistory  } from "react-router";
import axios from 'axios';
import './dashboard.css';
const ProductCategory=(props)=> {
    const [product , setProduct] = useState()
    const {id} = useParams()
    const history = useHistory()
    /// tseting the params
	useEffect(() => {
		axios.get(`http://localhost:5000/product/cat/${id}`).then((res) => {
			setProduct(res.data.result);
        }).catch((err) => {
            console.log(err);
        })
    }, []);



    

    const goBackHome =()=>{
        history.push("/Home")
    }
    const getbyid = (id) => {
        history.push(`/product/${id}`)
    }

    return (
        <div className="container">
        <div className="MainSectionForViewProduct">
            
            <div className='Contect-Main-Section'>
            {product && product.map((elm)=>{
                return (
                    <div className='viewProduct'>
                   <div className='content'>
                   <img src={elm.img}/>
                    <h5>{elm.title}</h5>
                    <button className='btn-shwo-cart'onClick={()=>{getbyid(elm._id)}}>More details</button>
                  
                   </div>
                </div>)
            })}
        </div>
        </div>
        </div>
    )
}

export default ProductCategory
