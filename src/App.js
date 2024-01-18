import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  const [state,setSate]=useState([])

  function reload(){
   
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "TS01c77ebf=01023105915c8e61e511d51e89ab921342ee9d8f71c0835935049f12751d1799c70db152f482ad921118c8a0a0f0d8cb510a36317e8c5796fe33a8231461690d2280acfc930dcfa3d1a5a61fe999214ca2a4396810; tracker_glob_new=5kpe7bI; tracker_session=5IrkLL5");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://api.digikala.com/v1/search/?q=%D8%B0%D8%BA%D8%A7%D9%84&seo_url=&page=2", requestOptions)
      .then(response => response.json())
      .then(result => setSate(result.data.products))
      .catch(error => console.log('error', error));
  }

  return (
    <div >
       <div className="container">
    <div className="row">
    	<div className="col-md-12">
           {state.map(c=> <div className="col-sm-6 col-md-4">
            <div className="thumbnail" >
            <img src={c.images.main.url[0]} className="img-responsive"></img>
            <div className="caption">
              <div className="row">
                <div className="col-md-6 col-xs-6">
                  <h3>Galaxy S5</h3>
                </div>
                <div className="col-md-6 col-xs-6 price">
                  <h3>
                  <label>{c.default_variant.price.selling_price}</label></h3>
                </div>
              </div>
              <p>{c.title_fa}</p>
              
            </div>
            </div>
            </div>
           )}
            
        </div> 

	</div>
</div>

<button onClick={reload()}>loaddddd</button>

    </div>

  );
}

export default App;
