require('dotenv').config();
const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.PUBLIC_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");
const nftContract = new web3.eth.Contract(contract.abi, CONTRACT_ADDRESS);
// console.log(JSON.stringify(contract.abi));

async function mintNFT(tokenURI) {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce
    console.log(`Nonce: ${nonce}`)
    //the transaction
    const tx = {
        'from': PUBLIC_KEY,
        'to': CONTRACT_ADDRESS,
        'nonce': nonce,
        'gas': 500000,
        'maxPriorityFeePerGas': 2999999987,
        'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
        };
        const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
        const transactionReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

        console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`);
    }

mintNFT("https://gateway.pinata.cloud/ipfs/QmW8PHA4McSXg1eoobBRRSVq4QtN39PaMHujZjVP5Goovo");
