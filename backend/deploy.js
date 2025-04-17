// // deploy.js 
// const fs = require('fs');
// const {Web3} = require('web3');



// const abi = JSON.parse(fs.readFileSync('E:/web3_Helthcare_Project/Blockchain-based-healthcare-data-system-with-disease-prediction/backend/contracts/Cruds.abi'));
// const bytecode = fs.readFileSync("E:/web3_Helthcare_Project/Blockchain-based-healthcare-data-system-with-disease-prediction/backend/contracts/Cruds.bin").toString();

// const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

// async function deploy() {
//     // const w3 = new Web3(window.ethereum);
//     let contract = new web3.eth.Contract(abi);
//     contract = contract.deploy({data: bytecode});

//     const deployContract = await contract.send({
//         from: "0xf8328Eb18d6dCD7497655663C06f4f83ABA89CA8",
//         gas: "6721975",
//     })
//     console.log(deployContract.options.address);
// }

// deploy();



// deploy.js file
const fs = require('fs');
const Web3 = require('web3');


// const hre = require("hardhat");

// async function main() {
//   const Cruds = await hre.ethers.getContractFactory("Cruds");
//   const cruds = await Cruds.deploy();

//   await cruds.deployed();
//   console.log("Cruds deployed to:", cruds.address);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });


const abi = JSON.parse(fs.readFileSync("E:/web3_Helthcare_Project/Blockchain-based-healthcare-data-system-with-disease-prediction/backend/contracts/Cruds.abi"));
const bytecode = fs.readFileSync("E:/web3_Helthcare_Project/Blockchain-based-healthcare-data-system-with-disease-prediction/backend/contracts/Cruds.bin").toString();

const web3 = new Web3('http://127.0.0.1:7545');


async function deploy() {
    const accounts = await web3.eth.getAccounts();  // Ensure you have the right account for deployment
    console.log("💡 Using account:", accounts[0]);
    console.log("All Ganache accounts:", accounts);
    const contract = new web3.eth.Contract(abi);

    contract.deploy({ data: bytecode })
        .send({
            from: "0x511B44541855e6dCefAF2eE8fc502b06bAA7D4Da",  // Ensure this is the correct account
            gas: '6721975',  // You can try increasing this value
        })
        .on('receipt', (receipt) => {
            console.log('Contract deployed at address:', receipt.contractAddress);
        })
        .on('error', (error) => {
            console.error('Deployment failed:', error);
        });
}

deploy();




// const fs = require('fs');
// const path = require('path');
// const { Web3 } = require('web3');

// // Use relative paths
// const abi = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'contracts', 'Cruds.abi')));
// const bytecode = fs.readFileSync(path.resolve(__dirname, 'contracts', 'Cruds.bin')).toString();

// // Setup Web3 with Ganache
// const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

// async function deploy() {
//     // Get accounts from Ganache
//     const accounts = await web3.eth.getAccounts();

//     if (!accounts.length) {
//         console.error("No accounts available in Ganache.");
//         return;
//     }

//     // Set contract instance
//     const contract = new web3.eth.Contract(abi);
//     const deployTx = contract.deploy({ data: bytecode });

//     // Estimate gas before deployment
//     const gasEstimate = await deployTx.estimateGas({ from: accounts[0] });
//     console.log("Gas Estimate:", gasEstimate);

//     // Deploy the contract
//     const deployContract = await deployTx.send({
//         from: accounts[0],
//         gas: gasEstimate,  // Use the estimated gas
//     });

//     console.log("✅ Contract deployed at:", deployContract.options.address);
// }

// deploy().catch((error) => {
//     console.error("❌ Deployment failed:", error);
// });
