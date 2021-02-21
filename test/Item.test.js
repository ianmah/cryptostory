// const { assert } = require('chai');

// const Item = artifacts.require('./Item.sol')

// require('chai')
//   .use(require('chai-as-promised'))
//   .should()

// contract('Item', (accounts) => {
//   let contract;

//   describe('deployment', async() => {
//     it('deploys successfully', async() => {
//       contract = await Item.deployed();
//       const address = contract.address;
//       assert.notEqual(address, '');
//       assert.notEqual(address, undefined);
//       assert.notEqual(address, null);
//       assert.notEqual(address, 0x0);
//     })

//     it('has name Item', async() => {
//       const name = await contract.name();
//       assert.equal(name, 'Item');
//     })

//     it('has symbol ITEM', async() => {
//       const symbol = await contract.symbol();
//       assert.equal(symbol, 'ITEM');
//     })
//   })

//   describe('minting', async() => {
//     let result;

//     it('creates a new item token', async() => {
//       result = await contract.mint('2000');
//       const totalSupply = await contract.totalSupply(); 
//       assert.equal(totalSupply, 1);
//       const event = result.logs[0].args;
//       console.log(event)
//       assert.equal(event.tokenId.toNumber(), 1, 'id is correct');
//       assert.equal(event.from, '0x0000000000000000000000000000000000000000', 'from is correct');
//       assert.equal(event.to, accounts[0],'to is correct');

//       // check cannot mint same item twice
//       await contract.mint('2000').should.be.rejected;
//     })
//   })

//   describe('indexing', async() => {
//     it('list items', async() => {
//       // Add three more items
//       await contract.mint('12000');
//       await contract.mint('50630');
//       await contract.mint('1252026');
//       const totalSupply = await contract.totalSupply();

//       let item;
//       let result = [];

//       for (let i=0; i < totalSupply; i++) {
//         item = await contract.items(i);
//         result.push(item)
//       }

//       let expected = ['2000', '12000', '50630', '1252026']
//       assert.equal(result.join(','), expected.join(','))
//     })
//   })
// })