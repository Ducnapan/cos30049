// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721Enumerable, Ownable {
    using SafeMath for uint256;

    string public baseTokenURI;
    uint256 private _tokenIdCounter;

    constructor(string memory _name, string memory _symbol, string memory _baseTokenURI) ERC721(_name, _symbol) {
        baseTokenURI = _baseTokenURI;
        _tokenIdCounter = 0;
    }

    function setBaseTokenURI(string memory _newBaseTokenURI) public onlyOwner {
        baseTokenURI = _newBaseTokenURI;
    }

    function mint(address _to, uint256 _tokenId, string memory _tokenURI) public onlyOwner {
        _mint(_to, _tokenId);
        _tokenIdCounter = _tokenIdCounter.add(1);
    }

    function mintWithTokenURI(address _to, string memory _tokenURI) public onlyOwner {
        uint256 tokenId = _tokenIdCounter;
        _mint(_to, tokenId);
        _tokenIdCounter = tokenId.add(1);
        _setTokenURI(tokenId, _tokenURI);
    }
}
