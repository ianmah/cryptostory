pragma solidity 0.5.0;

import "./ERC721Full.sol";

contract Character is ERC721Full {

  mapping(uint256 => Hero) public tokenProperty;

  struct Hero{
    uint id;
    string hair;
    string face;
    uint attack;
    uint mother;
    uint father;
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
    // uint _hair = 31400;
    string memory _face = baseFace[rand(0, baseFace.length)];
    uint _attack = rand(0,100);


    characters.push(Hero({id: _tokenId, hair: _hair, face: _face, attack: _attack, mother: 0, father : 0}));
    tokenProperty[_tokenId] = Hero({id: _tokenId, hair: _hair, face: _face, attack: _attack, mother: 0, father: 0}); 

    _mint(msg.sender, _tokenId);
  }

  function getTokenProperties(uint256 _tokenId) external view returns(uint _id, string memory _hair, string memory _face,
   uint _attack, uint _mother, uint _father) {
      return (tokenProperty[_tokenId].id, tokenProperty[_tokenId].hair, tokenProperty[_tokenId].face, tokenProperty[_tokenId].attack,
      tokenProperty[_tokenId].mother, tokenProperty[_tokenId].father);
  }

  function rand(uint min, uint max) public returns (uint){
    nonce++;
    return uint(keccak256(abi.encodePacked(nonce)))%(min+max)-min;
  }

  /** function to create a new character with parents
   *
   *
   */
  function createHero(uint256 motherid, uint256 fatherid) public returns (uint256) {

    uint _tokenId = totalSupply();

    string memory _hair;
    string memory _face;

    uint _attack = rand(0,100);
    uint hairSelection = rand(0,100);
    uint faceSelection = rand(0,100);


    if(0 <= hairSelection && hairSelection <= 30) {
      _hair = tokenProperty[motherid].hair;
    } else if(31 <= hairSelection && hairSelection  <= 60) {
      _hair = tokenProperty[fatherid].hair;
    } else {
      uint mutatedHair = rand(0, 100);
      mutatedHair = mutatedHair / 10;
      mutatedHair = mutatedHair * 10;
      uint mutation = rand(0,7);
      mutatedHair += mutation;
      mutatedHair += 30000;


      // mutatedHair = mutatedHair / 10;
      // uint randomInt = rand(0, 7);
      // mutatedHair = mutatedHair * 10;
      // mutatedHair = mutatedHair + randomInt;

      _hair = uint2str(mutatedHair);
      
    }
    

    if(faceSelection < 30) {
      _face = tokenProperty[motherid].face;
    // } else if(46 <= faceSelection && faceSelection <= 90) {
    //   _face = tokenProperty[fatherid].face;
    } else if(faceSelection < 60){
      // uint mutatedFace = rand(20000,20100);
      // _face = uint2str(mutatedFace);
      _face = tokenProperty[fatherid].face;
    } else {
      uint mutatedFace = rand(0,100);
      mutatedFace += 20000;
      _face = uint2str(mutatedFace);

    }
    
    // _face = tokenProperty[fatherid].face;    

    characters.push(Hero({id: _tokenId, hair: _hair, face: _face, attack: _attack, mother: motherid, father : fatherid}));
    tokenProperty[_tokenId] = Hero({id: _tokenId, hair: _hair, face: _face, attack: _attack, mother: motherid, father: fatherid}); 

    _mint(msg.sender, _tokenId);
  }


  // /** @dev Function to breed 2 vipers to create a new one
  //   * @param matronId ID of new viper's matron (one parent)
  //   * @param sireId ID of new viper's sire (other parent)
  //   * @return The new viper's ID
  //   */
  // function breedHero(uint256 matronId, uint256 sireId) external payable returns (uint256) {
  //     require(msg.value == 0.05 ether);
  //     return createHero(matronId, sireId);
  // }


  function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
    if (_i == 0) {
        return "0";
    }
    uint j = _i;
    uint len;
    while (j != 0) {
        len++;
        j /= 10;
    }
    bytes memory bstr = new bytes(len);
    uint k = len - 1;
    while (_i != 0) {
        bstr[k--] = byte(uint8(48 + _i % 10));
        _i /= 10;
    }
    return string(bstr);
}





}
