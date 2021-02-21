pragma solidity 0.5.0;

import "./ERC721Full.sol";

contract Item is ERC721Full {
    string[] public items;
    mapping(string => bool) _itemExists;
    
    constructor() ERC721Full("Item", "ITEM") public {
        

    }

    function mint(string memory _item) public {
      require(!_itemExists[_item]);
      uint _id = items.push(_item);
      _mint(msg.sender, _id);
      _itemExists[_item] = true;
    }
}