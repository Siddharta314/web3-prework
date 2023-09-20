### Metamask
We will need a wallet compatible with ethereum. 
https://metamask.io/


### Testnet Sepolia
https://ethereum.org/en/developers/docs/networks/#ethereum-testnets

14/06/2023 : we need gas in order to deploy contracts, we can use this

https://sepolia-faucet.pk910.de/ 

# Configuration
```
npm init -y 
npm install --save hardhat
npm install --save-dev @nomicfoundation/hardhat-toolbox

npx hardhat
```
select options and it creates hardhat.config.js


create test/counter.js, to run it 
```npx hardhat test```

create script/deploy.js to deploy the contract 
1. compile into bytecode
```npx hardhat compile```
    this creates the artifacts folder, we can find the ABI in .json



2. deploy on the network 
```npx hardhat run scripts/deploy.js --network sepolia```


it will print the 
```
Deployer Address
Counter Contract Address 
```

Create html, js and css to interact with the contract