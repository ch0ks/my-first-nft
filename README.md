# My First NFT

## Introduction

This repository contains the code of my first attemtp to write into the blockchain and code my first NFT.

Also, it is important to note that this branch contains a failed intento to make the same that I tried in master with web3.js but using ether.js. Again, my intent with Ether.js didn't worked.

## Quick Start

### Compile Contract

``` bash
npx hardhat compile
```

### Deploy Contract

``` bash
$ npx hardhat run scripts/deploy.js --network ropsten
Contract deployed to address: 0x053f4fA4757C4B9af60ef6C6ccB35C1764cD3d3D
```

### Mint NFT

``` bash
$ node scripts/mint-nft.js
Nonce: 7
Transaction receipt: {"blockHash":"0x95854c55975c6f57030aa21dea1954fb1a2dd43359db10eb47ee1899c1f44a0a","blockNumber":12101811,"contractAddress":null,"cumulativeGasUsed":8823476,"effectiveGasPrice":"0xb4234424","from":"0x505cfa738a8deaefceb07cb43970a15666a39775","gasUsed":296409,"logs":[{"address":"0x053f4fA4757C4B9af60ef6C6ccB35C1764cD3d3D","topics":["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x0000000000000000000000000000000000000000000000000000000000000000","0x000000000000000000000000505cfa738a8deaefceb07cb43970a15666a39775","0x0000000000000000000000000000000000000000000000000000000000000001"],"data":"0x","blockNumber":12101811,"transactionHash":"0x72db294ba362ee29773a6eb3465c2973525f4ac63aa894699ac435d58eadcf95","transactionIndex":36,"blockHash":"0x95854c55975c6f57030aa21dea1954fb1a2dd43359db10eb47ee1899c1f44a0a","logIndex":41,"removed":false,"id":"log_df72bbd0"}],"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000001000004000000000000000000000000000000000000000040000000000000000000000000008000000000000000000040000000000000000000000000000020000000000000000000800000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000002100000000000000000000000000000000000000000000000000060000000000000000000000000001800000000000000000000000000000000000000","status":true,"to":"0x053f4fa4757c4b9af60ef6c6ccb35c1764cd3d3d","transactionHash":"0x72db294ba362ee29773a6eb3465c2973525f4ac63aa894699ac435d58eadcf95","transactionIndex":36,"type":"0x2"}

```
## Resources

I followed the followind tutorials:

* [How to Create an NFT Tutorial](https://docs.alchemy.com/alchemy/tutorials/how-to-create-an-nft)

The following resources were created:

* [Metamask Wallet](https://metamask.io/): [0x505cFa738a8deAEfcEb07cb43970a15666A39775](https://ropsten.etherscan.io/address/0x505cFa738a8deAEfcEb07cb43970a15666A39775)
* Ethereum Contract in the [Ropsten Network](https://ropsten.etherscan.io/): [0x7316424F2129740692bbcBE20936d8F35D260052](https://ropsten.etherscan.io/address/0x7316424F2129740692bbcBE20936d8F35D260052#code)
* Image uploaded to the IPFS through Pinata: [Mexas de SV](https://gateway.pinata.cloud/ipfs/QmNfg8QNQN4W3VrbTSpxYuvHfdUP9oHu233jvWbzNpAvgb)
* NFT Metadata uploaded to the IPFS through Pinata: [Mexas de SV Metdata](https://gateway.pinata.cloud/ipfs/QmW8PHA4McSXg1eoobBRRSVq4QtN39PaMHujZjVP5Goovo)


0x053f4fa4757c4b9af60ef6c6ccb35c1764cd3d3d
