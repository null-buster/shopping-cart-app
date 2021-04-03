import React, { useState } from "react";

const Cart = () => {
  const [counterA, setCounterA] = useState(1);
  const [counterAstate, setCounterAstate] = useState(true);
  const [counterAprice, setCounterAprice] = useState(2.25);

  const [counterB, setCounterB] = useState(1);
  const [counterBstate, setCounterBstate] = useState(true);
  const [counterBprice, setCounterBprice] = useState(1.99);

  const [counterC, setCounterC] = useState(1);
  const [counterCstate, setCounterCstate] = useState(true);
  const [counterCprice, setCounterCprice] = useState(3.5);

  const [counterGrandtotal, setCounterGrandtotal] = useState(7.74);

  return (
    <div id="main-div rounded-smtext-center p-4" style={{padding:40}}>
    <h1 className="display-4 my-4 rounded-smtext-center text-muted">Shopping Cart </h1> 
    <hr></hr>
    <div className="form-group p-4 border shadow p-4 mb-4 bg-white">
    <div className="row ">
        <div className="col-md-3 text-right"><p>Taco Seasoning</p></div>
        <div className="col-md-3 text-left left"><p>$2.25</p></div>
        <div  className="col-md-1 text-right text">
            <button className="btn btn-xs text-right"
                disabled={counterAstate}
                onClick={() => {
                setCounterA(Math.max(1,counterA - 1));
                setCounterGrandtotal(Math.max(7.74, counterGrandtotal - 2.25));
                setCounterAprice(Math.max(2.25,counterAprice - 2.25));
                if(counterA === 1){
                    setCounterAstate(!counterAstate)
                    console.log(counterAstate)
                }
                }}
                
            >
                -
            </button>
        </div>
        <div >{counterA}</div>
        <div  className="col-md-1 text-left text">
            <button className="btn btn-xxs text-right"
                
                onClick={() => {
                setCounterA(counterA + 1);
                setCounterAprice(counterAprice + 2.25);
                setCounterGrandtotal(counterGrandtotal + 2.25);
                if(counterA >=1){
                    setCounterAstate(false)
                    console.log(counterAstate)
                }
                }}
            >
                +
            </button>
        </div>
        <div className="col-md-3 text-left left"><p>Total: <b>${counterAprice}</b></p></div>
    </div>
    <div className="row">
        <div className="col-md-3 text-right"><p>Pinto Beans</p></div>
        <div className="col-md-3 text-left left"><p>$1.99</p></div>
        <div  className="col-md-1 text-right text">
            <button className="btn btn-xs text-right"
                disabled={counterBstate}
                onClick={() => {
                setCounterB(Math.max(1,counterB - 1));
                setCounterBprice(Math.max(1.99,counterAprice - 1.99));
                setCounterGrandtotal(Math.max(7.74, counterGrandtotal - 1.99));
                if(counterB === 1){
                    setCounterBstate(!counterBstate)
                    console.log(counterBstate)
                }
                }}
                
            >
                -
            </button>
        </div>
        <div >{counterB}</div>
        <div  className="col-md-1 text-left text">
            <button className="btn btn-xxs text-right"
                
                onClick={() => {
                setCounterB(counterB + 1);
                setCounterBprice(counterBprice + 1.99);
                setCounterGrandtotal(counterGrandtotal + 1.99);
                if(counterB >=1){
                    setCounterBstate(false)
                    console.log(counterBstate)
                }
                }}
            >
                +
            </button>
        </div>
        <div className="col-md-3 text-left left"><p>Total: <b>${counterBprice}</b></p></div>
    </div>
    <div className="row">
        <div className="col-md-3 text-right"><p>Sour Cream</p></div>
        <div className="col-md-3 text-left left"><p>$3.5</p></div>
        <div  className="col-md-1 text-right text">
            <button className="btn btn-xs text-right"
                disabled={counterCstate}
                onClick={() => {
                setCounterC(Math.max(1,counterC - 1));
                setCounterCprice(Math.max(3.5,counterCprice - 3.5));
                setCounterGrandtotal(Math.max(7.74, counterGrandtotal - 3.5));
                if(counterC === 1){
                    setCounterCstate(!counterCstate)
                    console.log(counterCstate)
                }
                }}
                
            >
                -
            </button>
        </div>
        <div >{counterC}</div>
        <div  className="col-md-1 text-left text">
            <button className="btn btn-xs text-right"
                
                onClick={() => {
                setCounterC(counterC + 1);
                setCounterCprice(counterCprice + 3.5);
                setCounterGrandtotal(counterGrandtotal + 3.5)
                if(counterC >=1){
                    setCounterCstate(false)
                    console.log(counterCstate)
                }
                }}
            >
                +
            </button>
        </div>
        <div className="col-md-3 text-left left"><p>Total: <b>${counterCprice}</b></p></div>
    </div>
    <label className="row">
        <div className="col-md-4 text-right"><b><h4>Grand Total: ${counterGrandtotal}</h4></b></div>
    </label>
    </div>
    </div>
  );
};

export default Cart;
