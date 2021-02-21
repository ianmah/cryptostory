pragma solidity 0.5.0;

import "./ERC721Full.sol";

contract Item is ERC721Full {
  ItemStruc[] public items;
  mapping(string => bool) _itemExists;
  mapping(uint256 => ItemStruc) public tokenProperty;

  uint nonce = 0;

  struct ItemStruc{
    string id;
    string asd;
    uint256 attack;
  }
  
  constructor() ERC721Full("Item", "ITEM") public {
      

  }

  function mint(string memory _item) public {
    // uint _attack = rand(10,100);
    string memory _asd = "asdasdasd";
    uint256 _attack = rand(10, 300);
    uint _tokenId = totalSupply();

    require(!_itemExists[_item]);

    items.push(ItemStruc({id: _item, asd: _asd, attack: _attack}));
    tokenProperty[_tokenId] = ItemStruc({id: _item, asd: _asd, attack: _attack});
    _mint(msg.sender, _tokenId);

    _itemExists[_item] = true;
  }

  function getTokenProperties(uint256 _tokenId) external view returns (string memory _id, string memory _asd, uint256 _attack) {
    return (tokenProperty[_tokenId].id, tokenProperty[_tokenId].asd, tokenProperty[_tokenId].attack);
  }
  
  function rand(uint min, uint max) private returns (uint256) {
    nonce++;
    return uint256(keccak256(abi.encodePacked(nonce)))%(min+max)-min;
  }
}
