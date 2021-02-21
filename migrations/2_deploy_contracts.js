const Item = artifacts.require("Item");
const Character = artifacts.require("Character");

module.exports = function(deployer) {
  deployer.deploy(Item);
  deployer.deploy(Character);

};