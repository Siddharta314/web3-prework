const CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_counter",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "increment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const CONTRACT_ADDRESS = "0x01c9031DD3b038959Eb4c080B6fE65BedDB876dc";
const provider = new ethers.providers.Web3Provider(window.ethereum);
let signer;
let contract;

provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    signer = provider.getSigner(accounts[0]);
    contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  });
});
console.log({signer, contract})

async function increment(){
  await contract.increment();
}

async function getCounter(){
  const count = await contract.getCounter();
  document.getElementById("counter").value = count
}