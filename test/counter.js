const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('Counter Contract', () => {
    it('Should increment the counter', async () => {
      //ether to interact with smart contracts
      const Counter = await ethers.getContractFactory('Counter');
      //call our constructor
      const counter = await Counter.deploy(0); 

      await counter.increment(); 
      const updateCounter = counter.getCounter();
      expect(updateCounter).to.equal(1) //test
   });
});