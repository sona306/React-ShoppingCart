import React, { useState } from 'react'
import NavBar from './NavBar'

const Add = () => {
  const [shop,setData]=useState(
    {
      "pid":'',
      "pname":'',
      "price":'',
      "status":''
    }
  )

  const inputHandler=(event)=>{

    setData({...shop,[event.target.name]:event.target.value})
  }

  const readValue=()=>{
    console.log(shop)
  }

  return (
    <div>
      <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                      <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">ProductId</label>
                        <input className="form-control" name='pid' value={shop.pid} onChange={inputHandler} ></input>
                      </div>
                      <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">ProductName</label>
                        <input type="text" className="form-control" name='pname' value={shop.pname} onChange={inputHandler}/>
                      </div>
                      <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Price</label>
                        <input type="text" className="form-control" name='price' value={shop.price} onChange={inputHandler}/>
                      </div>
                      <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Status</label>
                        <input type="text" className="form-control" name='status' value={shop.status} onChange={inputHandler}/>
                      </div>
                      <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><br></br>
                        <button className="btn btn-primary" onClick={readValue}>Add</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add