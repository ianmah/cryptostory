import Character from '../abis/Character.json';

const getCharacters = async () => {
    const web3 = window.web3
    const networkId = await web3.eth.net.getId();
    const networkData = Character.networks[networkId];
    
    if (networkData) {
      const abi = Character.abi;
      const address = networkData.address;
      const contract = new web3.eth.Contract(abi, address);
      const totalSupply = await contract.methods.totalSupply().call();

      const result = [];

      //load items 
      for(var i = 1; i <= totalSupply; i++){
        const owner = await contract.methods.ownerOf(i).call();
        if (owner === window.account) {
          result.push(await contract.methods.items(i - 1).call())
        }
      }

      console.log('Characters');
      console.log(result);

    } else {
      window.alert(`smart contract not on network`);
    }
}