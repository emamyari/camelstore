import React from 'react'
import { useState, useEffect } from 'react'
import { Navbar } from '../Navbar/Navbar'
import Product from './Product'
import './Productlist.css'
export const Productlist = (props) => {
    const [state, setSate] = useState([])
    const [Plist, setPlist] = useState([])

    useEffect(
        () => {
            reload()
        }, []
    )

    function inc(title) {

        let product = Plist.filter(p => p.name == title)[0]

        if (product == null) {
            product = { name: title, count: 1 };
        } else {
            product.count++;
        }
        let lst = [];
        lst = Plist.filter(p => p.name != title)
        lst.push(product);
        setPlist(lst)
    }
    function dec(title) {

        let product = Plist.filter(p => p.name == title)[0]
        if (product == null) {

        } else {
            product.count--;
        }
        let lst = [];
        lst = Plist.filter(p => p.name != title)
        if (product != null) {
            if (product.count != 0) {
                lst.push(product);
            }
        }
        setPlist(lst)


    }

    function pr() {
        console.log(Plist)
    }

    function reload() {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        console.log(props.category)
        fetch("https://mobapi.banimode.com/api/v4/products?platform=desktop&page_size=24&page=2&filter[product_categories.id][eq]=" + props.category, requestOptions)
            .then(response => response.json())
            .then(result => setSate(result.data.data))
            .catch(error => console.log('error', error));

       fetch("http://192.168.1.56:8000/sabad/", requestOptions)
            .then(response => response.json())
            .then(result => setPlist(result))
            .catch(error => console.log('error', error));
    }

    return (
        <div>
            <Navbar plist={Plist}></Navbar>
            <Product  state={state} 
                      inc={inc}
                      dec={dec}
                      pr={pr}
                      ></Product>
        </div>
    )
}
