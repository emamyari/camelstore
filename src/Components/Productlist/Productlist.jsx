import React from 'react'
import { useState, useEffect } from 'react'

export const Productlist = (props) => {
    const [state, setSate] = useState([])
    useEffect(
        () => {
            reload()   
         },[]

    )

    function reload() {
 
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          console.log(props.category)
          fetch("https://mobapi.banimode.com/api/v4/products?platform=desktop&page_size=24&page=2&filter[product_categories.id][eq]="+props.category, requestOptions)
            .then(response => response.json())
            .then(result => setSate(result.data.data))
            .catch(error => console.log('error', error));
 
    }

    return (
        <div >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {state.map(c => <div className="col-sm-6 col-md-3">
                            <div className="thumbnail" >
                                <img src={c.images.large_default[0]} className="img-responsive"></img>
                                <div className="caption">
                                    <div className="row">
                                        <div className="col-md-12 col-xs-6">
                                            <p >{c.product_name}</p>
                                        </div>
                                        <div className="col-md-6 col-xs-6 price">
                                            <h6>
                                                <label>{c.product_price}</label></h6>
                                        </div>
                                        <div className="col-md-6 col-xs-6 price">
                                        <p>{c.color_name}</p>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        )}

                    </div>

                </div>
            </div>

            

        </div>
    )
}
