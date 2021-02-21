const { assert } = require('chai');

const Character = artifacts.require('./Character.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Character', (accounts) => {
  let contract;

  describe('deployment', async() => {
    it('deploys successfully', async() => {
      contract = await Character.deployed();
      const address = contract.address;
      assert.notEqual(address, '');
      assert.notEqual(address, undefined);
      assert.notEqual(address, null);
      assert.notEqual(address, 0x0);
    })

    it('has name Character', async() => {
      const name = await contract.name();
      assert.equal(name, 'Character');
    })
  })

  describe('minting', async() => {
    let result;

    it('creates a new item token', async() => {
      result = await contract.mint();
      const totalSupply = await contract.totalSupply(); 
      assert.equal(totalSupply, 1);
      const event = result.logs[0].args;
      console.log(event)
      assert.equal(event.tokenId.toNumber(), 1, 'id is correct');
      assert.equal(event.from, '0x0000000000000000000000000000000000000000', 'from is correct');
      assert.equal(event.to, accounts[0],'to is correct');
    })
  })

  describe('indexing', async() => {
    it('list items', async() => {
      // Add three more items
      await contract.mint();
      const totalSupply = await contract.totalSupply();
      await contract.createHero(0,1);
      await contract.createHero(0,1);
      await contract.createHero(0,1);

      console.log(contract.getTokenProperties(2))
      console.log(contract.getTokenProperties(3))
      console.log(contract.getTokenProperties(4))

    })
  })
})