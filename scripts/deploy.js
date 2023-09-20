const { ethers } = require("hardhat");
// const {expect} = require("chai"); 
// const {hre} = require("hardhat");


async function main() {
  const [deployer] = await ethers.getSigners();
  const owner = deployer;
  console.log("Deployer", owner.address);
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy(0);

  console.log("Counter Contract Address", counter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
