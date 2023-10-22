require('@nomicfoundation/hardhat-toolbox');

require('dotenv').config();

url = process.env.SEP_RPC_URL;
private_key = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    sepolia: {
      url: url,
      accounts: [private_key],
      chainId: 11155111,
    },
  },
  solidity: '0.8.20',
};
