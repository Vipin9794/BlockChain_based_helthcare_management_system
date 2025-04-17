// crud.js file
const Web3 = require('web3');
const solc = require('solc');
const fs = require('fs');

// Set up Web3
const web3 = new Web3("http://127.0.0.1:7545");
//const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

// Read the Solidity contract source file
const sourceCode = fs.readFileSync('E:/web3_Helthcare_Project/Blockchain-based-healthcare-data-system-with-disease-prediction/backend/contracts/Cruds.sol').toString();

// Prepare the input for the Solidity compiler
const input = {
    language: 'Solidity',
    sources: {
        'Cruds.sol': {
            content: sourceCode,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*'],
            },
        },
    },
};

// Compile the contract
const output = JSON.parse(solc.compile(JSON.stringify(input)));

// Handle the output (errors, compiled code, etc.)
if (output.errors) {
    output.errors.forEach(err => {
        console.error(err.formattedMessage);
    });
    throw new Error('Compilation failed');
} else {
    // Assuming 'Cruds' is the contract name and 'Cruds.sol' is the filename
    const contractName = 'Cruds'; // Update this to your actual contract name
    const compiledContract = output.contracts['Cruds.sol'][contractName];
    if (!compiledContract || !compiledContract.evm || !compiledContract.evm.bytecode.object) {
        throw new Error("🛑 Compiled contract not found or bytecode missing. Check contract name!");
    }
    

    // ABI and bytecode

    const abi = compiledContract.abi;
    let bytecode = compiledContract.evm.bytecode.object;


console.log("🔍 Bytecode length:", bytecode.length);
console.log("🧾 ABI length:", abi.length);

    async function main() {
        const accounts = await web3.eth.getAccounts();
        console.log("💡 Using account:", accounts[0]);
    
        const contract = new web3.eth.Contract(abi);
    
        const deployed = await contract.deploy({ data: '0x' + bytecode }).send({
            from: accounts[0] ,
            gas: 6721975,
        })
        .on('receipt', (receipt) => {
            console.log('Contract deployed at address:', receipt.contractAddress);
        })
        .on('error', (error) => {
            console.error('Deployment failed:', error);
        });;
    
        console.log("🚀 Contract deployed at:", deployed.options.address);
        const result = await deployed.methods.getDoctor().call();
console.log("🧑‍⚕️ Doctor List:", result);
    }
    
    main().catch(console.error);
    // Deploy the contract
//     let MyContract = new web3.eth.Contract(abi);
// MyContract = MyContract.deploy({data: bytecode});

//     const deployContract =  MyContract.send({
//         from: "0x511B44541855e6dCefAF2eE8fc502b06bAA7D4Da",
//         gas: "6721975",
//     })

}
