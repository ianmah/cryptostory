pragma solidity 0.5.0;

import "./ERC721Full.sol";

contract Item is ERC721Full {
    
    constructor() ERC721Full("Item", "ITEM") public {

    }

}