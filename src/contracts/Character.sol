pragma solidity 0.5.0;

import "./ERC721Full.sol";

contract Character is ERC721Full {

  mapping(uint256 => Hero) public tokenProperty;

  struct Hero{
    string hair;
    string face;
  }

  string[] public baseHair = [
    "30020",
    "30400",
    "30000",
    "31400"
  ];

  string[] public baseFace = [
    "50002",
    "50126",
    "50006",
    "50039"
  ];

  Hero[] public characters;
  mapping(string => bool) _itemExists;

  uint nonce = 0;
  
  constructor() ERC721Full("Character", "CHARACTER") public {       

  }

  function mint() public {
    uint _tokenId = totalSupply();

    string memory _hair = baseHair[rand(0, baseHair.length)];
    string memory _face = baseFace[rand(0, baseFace.length)];

    characters.push(Hero({hair: _hair, face: _face}));
    tokenProperty[_tokenId] = Hero({hair: _hair, face: _face});

    _mint(msg.sender, _tokenId);
  }

  function getTokenProperties(uint256 _tokenId) external view returns (string memory _hair, string memory _face) {
      return (tokenProperty[_tokenId].hair, tokenProperty[_tokenId].face);
  }

  function rand(uint min, uint max) private returns (uint){
    nonce++;
    return uint(keccak256(abi.encodePacked(nonce)))%(min+max)-min;
  }
}
