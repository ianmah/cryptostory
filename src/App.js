import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Character from './components/Character';
import Item from './components/Item';
import CryptoItem from './abis/Item.json';
import Monster from './components/Monster';
import Signin from './components/Signin';
import initWebsocket from './util/websocket';
import Inventory from './components/Main/Inventory';
import Storage from './components/Storage';
import Web3 from 'web3';

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  background: #fff;
  height: 100vh;
`;

function App() {
  if (!window.ws) {
    initWebsocket();
  }

  const [inventory, setInventory] = useState({
    items: ['1001021', '1082059'],
  });
  
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  
  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  }, []);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert('Non-Ethereum browser detected');
    }
  };
  
  const loadBlockchainData = async () => {
    const web3 = window.web3;
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
    
    const networkId = await web3.eth.net.getId();
    const networkData = CryptoItem.networks[networkId];
    if (networkData) {
      const abi = CryptoItem.abi;
      const address = networkData.address;
      console.log(address)
      const contract = new web3.eth.Contract(abi, address);
      setContract(contract);
      // const test = await contract.methods.totalSupply()
      // console.log(test);
      contract.methods.mint('121233').send({ from: accounts[0], gas: 4712388, gasPrice: 100000000000 })
        .once('receipt', (receipt) => {
          console.log(receipt)
        });

      const totalSupply = await contract.methods.totalSupply().call();
      console.log(totalSupply);

      const result = [];

      //load items 
      for(var i = 1; i <= totalSupply; i++){
        const item = await contract.methods.items(i - 1).call();
        result.push(item);
      }
      console.log(result);
    } else {
      window.alert(`smart contract not on network`);
    }
  };

  return (
    <Container>
      <Signin />
      <Monster />
      <Inventory />
      <Storage inventory={inventory}/>
    </Container>
  )
}

export default App;
