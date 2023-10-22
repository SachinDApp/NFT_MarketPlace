const { ethers } = require('hardhat');
// const hre = require("hardhat");
// const fs = require("fs");

async function main() {
  console.log('deploying');
  const contract = await ethers.deployContract('NFTMarketplace');
  await contract.waitForDeployment();
  console.log(contract);
  //This writes the ABI and address to the mktplace.json
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
