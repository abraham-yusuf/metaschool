// SPDX-License-Identifier: UNLICENSED

pragma  solidity ^0.8.0;

import  "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import  "@openzeppelin/contracts/utils/Counters.sol";
import  "hardhat/console.sol";

contract  horoscopeNFT  is  ERC721URIStorage {
	using  Counters  for  Counters.Counter;
	Counters.Counter private _tokenIds;

	constructor() ERC721("Horoscope", "HSCP") {}

	function  mintNFT(address  recipient, string  memory  zodiacSign)
	public  returns (uint256) {
		_tokenIds.increment();
		uint256 newItemId = _tokenIds.current();
		_mint(recipient, newItemId);
		_setTokenURI(newItemId, 'zodiacSign');
		return newItemId;
	}

}