
import './App.css';
import { useState } from 'react';
import React, { useEffect } from "react";



function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const apiData = [
    {
      symbol: "BTCUSDT",
      logo: "https://static.bitfinex.com/images/icons/BTC.svg"
    },
    {
      symbol: "ETHUSDT",
      logo: "https://static.bitfinex.com/images/icons/ETH.svg"
    },
    {
      symbol: "MATICUSDT",
      logo: "https://static.bitfinex.com/images/icons/MATIC.svg"
    },
    {
      symbol: "BNBUSDT",
      logo: "https://static.bitfinex.com/images/icons/BNB.svg"
    },
    {
      symbol: "XRPUSDT",
      logo: "https://static.bitfinex.com/images/icons/XRP.svg"
    },
    {
      symbol: "SOLUSDT",
      logo: "https://static.bitfinex.com/images/icons/SOL.svg"
    },
    {
      symbol: "LTCBTC",
      logo: "https://static.bitfinex.com/images/icons/LTC.svg"
    },
    {
      symbol: "NEOBTC",
      logo: "https://static.bitfinex.com/images/icons/NEO.svg"
    },
    {
      symbol: "QTUMETH",
      logo: "https://static.bitfinex.com/images/icons/QTU.svg"
    },
    {
      symbol: "EOSETH",
      logo: "https://static.bitfinex.com/images/icons/EOS.svg"
    },
    {
      symbol: "SNTETH",
      logo: "https://static.bitfinex.com/images/icons/SNT.svg"
    },
    {
      symbol: "BNTETH",
      logo: "https://static.bitfinex.com/images/icons/BNT.svg"
    },

    {
      symbol: "HSRBTC",
      logo: "https://static.bitfinex.com/images/icons/SOL.svg"
    },
    {
      symbol: "OAXETH",
      logo: "https://static.bitfinex.com/images/icons/LTC.svg"
    },
    {
      symbol: "DNTETH",
      logo: "https://static.bitfinex.com/images/icons/NEO.svg"
    },
    {
      symbol: "MCOETH",
      logo: "https://static.bitfinex.com/images/icons/QTU.svg"
    },
    {
      symbol: "ICNETH",
      logo: "https://static.bitfinex.com/images/icons/EOS.svg"
    },
    {
      symbol: "MCOBTC",
      logo: "https://static.bitfinex.com/images/icons/SNT.svg"
    },
    {
      symbol: "WTCBTC",
      logo: "https://static.bitfinex.com/images/icons/BNT.svg"
    },
  ]
  const options = ["Option 1", "Option 2", "Option 3"];



  const [prices, setPrices] = useState([]);
  const [updatedData, setUpdatedData] = useState([]);
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          "https://api.binance.com/api/v3/ticker/price"
        );
        const data = await response.json();
        console.log(data)
        const updatedData1 = data.map((item) => ({
          symbol: item.symbol,
          symbols1: item.symbol.slice(0, 3),
          symbols2: item.symbol.slice(0, 5),

          price: parseFloat(item.price) * 80, // Convert to INR
        }));
        setUpdatedData(updatedData1);
        setPrices(updatedData1);
        setCoinName(updatedData1[0].symbol);
        setdynamicPrice(parseFloat(updatedData1[0].price.toFixed(5)));
        setsymbolLogo(updatedData1[0].symbols1);
        console.log(updatedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPrices();
  }, []);


  const handleKeyUp = (value) => {
    console.log(value)
    const filteredData = updatedData.filter(item =>
      item.symbol.toLowerCase().includes(value.toLowerCase())
    );
    setPrices(filteredData);

  }

  const [coinName, setCoinName] = useState('');
  const [dynamicPrice, setdynamicPrice] = useState('');
  const [symbolLogo, setsymbolLogo] = useState('');
  const [calculatedValue, setCalculatedValue] = useState(0);


  const handleClick = (price) => {
    console.log(price);
    setCoinName(price.symbol);
    setdynamicPrice(parseFloat(price.price.toFixed(5)));
    setsymbolLogo(price.symbols1);
  }


  return (
    <div className="App">
<nav class="navbar navbod navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <a className="navbar-brand">
            <img src="/brand.png" alt="My Image" />
          </a>
    <button class="navbar-toggler" style={{color:"white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul style={{color:"white",marginTop:"35px",margin:"auto"}} class="navbar-nav navItems me-auto mb-2 mb-lg-0">
        <li  class="nav-item navLi">
          <a style={{color:"#627EEA"}} class="nav-link active" aria-current="page" href="#">Trade</a>
        </li>
        <li class="nav-item navLi">
          <a style={{color:"#627EEA"}} class="nav-link active" aria-current="page" href="#">Earn</a>
        </li>
        <li  class="nav-item navLi">
          <a style={{color:"#627EEA"}} class="nav-link active" aria-current="page" href="#">Support</a>
        </li>
        <li class="nav-item navLi">
          <a style={{color:"#627EEA"}} class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        
        
        
      </ul>
      <div className="d-flex" >
            <button className="connectButton px-4 py-2" >Connect Wallet</button>
          </div>
    </div>
  </div>
</nav>

      {/* <nav className="navbar navbod bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">
            <img src="/brand.png" alt="My Image" />
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>



            </ul>

          </div>
          <div className="d-flex" >
            <button className="connectButton px-4 py-2" >Connect Wallet</button>
          </div>
        </div>

      </nav> */}

      <div className="container cardMain">
        <div className="avatar-flip">
          <img src={`https://static.bitfinex.com/images/icons/${symbolLogo}.svg`} height='80' width='80' />

          {/* <img src="/ethLogo.png" height="80" width="80" /> */}

        </div>
        <div className='row'>
          <div className='col'>
            <p className='labelsOfInputs my-2 mx-2'>Current Value</p>

          </div>
          <div className='col'>
            <p className='amountCurrent mr-0' >₹ {dynamicPrice}</p>

          </div>

        </div>

        <button
          className='dropdown'

        >
          <p className='pt-1' style={{ textAlign: "left", color: "white" }} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" value="">
            <img src={`https://static.bitfinex.com/images/icons/${symbolLogo}.svg`} className='mx-2' height='20' width='20' />

            {coinName}</p>

        </button>

        <p className='labelsOfInputs my-4 mx-2'>Amount You want to invest</p>


        <input className='inputField' type="text" placeholder="0.00" onKeyUp={($event) => setCalculatedValue($event.target.value)} />


        <p className='labelsOfInputs my-4 mx-2'>Estimate Number of ETH you will Get</p>
        <input readOnly value={calculatedValue / dynamicPrice} className='inputField' type="text" placeholder="0.00" />
        <button className="buyButton my-4" >Buy</button>

      </div>
      <div className="modal hello fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog ">
          <div className="modal-content dropdownDescription">
            <div style={{ border: "none" }} className="modal-header">
              <button type="button" className="btn-close crossButton" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body subDivModal">
              <input onKeyUp={($event) => handleKeyUp($event.target.value)} className="input-grey-rounded" type="text" placeholder="Search" />
              {prices.map((price, index) => (
                <div className="optionsDesc mb-1 px-2 py-2 mx-auto" data-bs-dismiss="modal" onClick={() => handleClick(price)} key={index}>

                 <img src={`https://static.bitfinex.com/images/icons/${price.symbols1}.svg`} className='mx-2' height='20' width='20' /> 
                  {price.symbol}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
