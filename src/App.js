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
import Minter from './components/Minter';

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
  const [allItems, setAllItems] = useState([]);

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
      const contract = new web3.eth.Contract(abi, address);
      setContract(contract);
      const totalSupply = await contract.methods.totalSupply().call();
      //load items
      for (var i = 1; i <= totalSupply; i++) {
        const item = await contract.methods.items(i - 1).call();
        allItems.push(item);
        setAllItems(allItems);
      }
    } else {
      window.alert(`smart contract not on network`);
    }
  };

  return (
    <Container>
      <Signin />
      <Minter
        account={account}
        contract={contract}
        allItems={allItems}
        setAllItems={setAllItems}
      />
      <Monster />
      <Inventory />
      <Storage inventory={inventory} />
    </Container>
  );
}

export default App;
