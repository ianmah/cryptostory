import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CryptoItem from './abis/Item.json';
import CryptoChara from './abis/Character.json';
import Monster from './components/Monster';
import Signin from './components/Signin';
import initWebsocket from './util/websocket';
import Inventory from './components/Main/Inventory';
import Characters from './components/Characters';
import Storage from './components/Storage';
import Web3 from 'web3';
import Minter from './components/Minter';

const ControlsWrapper = styled.div`
  display: inline-block;
`;

const Container = styled.div`
  max-width: 600px;
  margin: auto;
  background: #fff;
  height: 100%;
`;

function App() {
  if (!window.ws) {
    initWebsocket();
  }

  const [characters, setCharacters] = useState([])
  const [character, setCharacter] = useState({})

  const [inventory, setInventory] = useState({
    items: [],
  });

  const [account, setAccount] = useState('');
  const [itemContract, setItemContract] = useState('');
  const [charaContract, setCharaContract] = useState('');
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
    window.account = accounts[0]

    setAccount(accounts[0]);

    const networkId = await web3.eth.net.getId();
    const itemNetworkData = CryptoItem.networks[networkId];
    const charaNetworkData = CryptoChara.networks[networkId];
    if (itemNetworkData) {
      const abi = CryptoItem.abi;
      const address = itemNetworkData.address;
      const itemContract = new web3.eth.Contract(abi, address);
      setItemContract(itemContract);
      const totalSupply = await itemContract.methods.totalSupply().call();
      const result = [];

      for (let i = 1; i <= totalSupply; i++) {
        const item = await itemContract.methods.items(i - 1).call();
        allItems.push(item);
        setAllItems(allItems);
        const owner = await itemContract.methods.ownerOf(i - 1).call();
        if (owner === accounts[0]) {
          console.log(item)
          result.push({
            id: item[0],
            attack: item[2].toNumber()
          })
        }
      }
      setInventory({
        ...inventory,
        items: result,
      });
    }
    if (charaNetworkData) {
      const abi = CryptoChara.abi;
      const address = charaNetworkData.address;
      const charaContract = new web3.eth.Contract(abi, address);
      setCharaContract(charaContract);
      const totalSupply = await charaContract.methods.totalSupply().call();
      const result = [];
      for (let i = 1; i <= totalSupply; i++) {
        const character = await charaContract.methods.characters(i - 1).call();
        const owner = await charaContract.methods.ownerOf(i - 1).call();
        if (owner === accounts[0]) {
          result.push(character)
        }
      }
      setCharacters(result)
      setCharacter(result[0])
    } else {
      window.alert(`smart contract not on network`);
    }
  };

  return (
    <>
    <Container>
      <ControlsWrapper>
        <Signin />
        <Minter
          account={account}
          itemContract={itemContract}
          charaContract={charaContract}
          allItems={allItems}
          setAllItems={setAllItems}
        />
      </ControlsWrapper>
      <Monster />
      <Inventory />
      <Storage character={character} inventory={inventory} />
      <Characters characters={characters} setCharacter={setCharacter} />
    {account}
    </Container>
    </>
  );
}

export default App;
