import React from 'react'

const Product = (props) => {
  return (
    <div >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        {props.state.map(c => <div className="col-sm-6 col-md-3">

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
                                    <div className='divbtn'>
                                       <button onClick={() => props.inc(c.product_name)} className='btn btn-success mx-auto btn-green' >+</button>
                                        <button onClick={() => props.dec(c.product_name)} className='btn btn-danger mx-auto btn-red'>-</button>
                                        <button onClick={() => props.pr()} className='btn btn-danger mx-auto btn-red'>print</button>
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

export default Product