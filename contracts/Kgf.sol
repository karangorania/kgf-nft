// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Kgf is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private tokenIds;

    constructor() ERC721('KgfRocky','KGF') {}

    /* If you want to mint on particular address the you should add parameter
        address minter and insted of msg.sender write minter

        function mintNft(address minter) public returns(uint256){

        _mint(minter, newItemId);


        I have use jsonkeeper for metadata of the NFT
         https://jsonkeeper.com
        you can see metadata here: https://jsonkeeper.com/b/Y4F7
    */
    function mintNft() public returns(uint256){

        tokenIds.increment();
        
        uint256 newItemId = tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, 'https://jsonkeeper.com/b/Y4F7');

        return newItemId;

    }
}