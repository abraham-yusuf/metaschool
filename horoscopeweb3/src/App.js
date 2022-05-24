import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from "react";
import { Contract, providers } from "ethers";


function App() {
  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [account, setAccount] = useState(null);

 useEffect(() => {
   if (window.ethereum) {
     setIsWalletInstalled(true);
   }
 }, []);

 async function connectWallet() {
   window.ethereum
     .request({
       method: "eth_requestAccounts",
     })
     .then((accounts) => {
       setAccount(accounts[0]);
     })
     .catch((error) => {
       alert("Something went wrong");
     });
 }
 if (account === null) {
  return (
    <div className="App"> <br/>
      {
        isWalletInstalled ? (
          <button onClick={connectWallet}>Connect Wallet</button>
        ) : (
          <p>Install Metamask wallet</p>
        )
      }
 
    </div>
  );
    }
      return (
        <div className="App">
        <h1>Horoscope NFT Minting Dapp</h1>
        <p>Connected as: {account}</p>
   
    <input onChange={handleDateInput} value={date} type="date" id="dob"/>
    <br />
    <br />
      {zodiacSign ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
        viewBox="0 0 300 300"
        width="400px"
        height="400px"
      >
        <style>{`.base { fill: white; font-family: serif; font-size: 24px;`}</style>
        <rect width="100%" height="100%" fill="black" />
        <text
          x="50%"
          y="50%"
          class="base"
          dominant-baseline="middle"
          text-anchor="middle"
        >
          {zodiacSign}
        </text>
      </svg>
    ) : null}
       
        <br/>
        <br/>
        <button>Mint</button>
    </div>
  );
     return (
       <div className="App">
        <h1>Horoscope NFT Minting Dapp</h1>
        <p>Connected as: {account}</p>
    </div>
   );
 }
 
export default App;