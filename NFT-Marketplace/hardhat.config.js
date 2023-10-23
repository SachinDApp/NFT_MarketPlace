require('@nomicfoundation/hardhat-toolbox');

require('dotenv').config();

// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

const url = process.env.SEP_RPC_URL;
const private_key = process.env.PRIVATE_KEY;

// task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

module.exports = {
  networks: {
    sepolia: {
      url: url,
      accounts: [private_key],
      chainId: 11155111,
    },
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
