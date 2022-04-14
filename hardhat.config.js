require('@nomiclabs/hardhat-waffle');
require('dotenv').config();

task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const { ROPSTEN_API_URL_KEY, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: '0.8.13',
  networks: {
    matic: {
      url: ROPSTEN_API_URL_KEY,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
