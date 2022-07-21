const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const { abi, evm } = require('./compile');

const provider = new HDWalletProvider(
    'acid liquid inflict scatter erupt response again sight addict bicycle drip maid',
    'https://rinkeby.infura.io/v3/ba1fba8f482642f2a4734ab1d9c7112f'
);

const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(abi)
        .deploy({ data: evm.bytecode.object })
        .send({ gas: '9000000', from: accounts[0] });

    console.log('Contract deployed to:', result.options.address);

    console.log(result);
    provider.engine.stop();
};

deploy();