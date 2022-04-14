# KGF NFT

Simple KGF NFT mint on testnet.

## Important Step

```bash
create .env file in root directory.
```

```bash
    API_URL = "https://eth-rinkeby.alchemyapi.io/v2/your-api-key"
    PRIVATE_KEY = "your-metamask-private-key"
```

-Get Your API Key

- [Alchemy](https://alchemy.com/?r=36af7883c4699196)
  -Get Your Rinkeby Faucet

- [Ropsten Faucet](https://faucets.chain.link/rinkeby)

## NPM Packages

- [Openzeppelin](https://www.npmjs.com/package/@openzeppelin/contracts)
- [Hardhat-Ethers](https://www.npmjs.com/package/hardhat-ethers)
- [Chai](https://www.npmjs.com/package/chai)
- [Ethers](https://www.npmjs.com/package/ethers)
- [Ethereum-Waffle](https://www.npmjs.com/package/ethereum-waffle)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## Tech Stack

- [Node](https://nodejs.org/en/)
- [Hardhat](https://hardhat.org/)
- [Solidity](https://docs.soliditylang.org/)
- [Openzepplin](https://openzeppelin.com/)

## Check on Rinkeby Explorer

- [Rinkeby Explorer](https://rinkeby.etherscan.io/address/0xCc2BF76b06995081239991A2E4732d48b67470f1)

## Run Locally

Clone the project

```bash
  git clone https://github.com/karangorania/kgf-nft
```

Go to the project directory

```bash
  cd crowd-sale
```

Install dependencies

```bash
  npm install
```

Compile

```bash
  npx hardhat compile
```

Test

```bash
  npx hardhat test
```

Deploy

```bash
  node scripts/deploy.js
```

Deploy on Ropsten

```bash
  npx hardhat run scripts/deploy.js --network rinkeby
```

Help

```bash
  npx hardhat help
```
