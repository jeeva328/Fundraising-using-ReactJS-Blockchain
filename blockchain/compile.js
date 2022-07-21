const path = require('path');
const fs = require("fs");
const solc = require('solc');

const lotpath = path.resolve(__dirname, 'contracts', 'fundraise.sol');
const source = fs.readFileSync(lotpath, 'utf8');

const input = {
    language: 'Solidity',
    sources: {
        'fundraise.sol': {
            content: source,
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

console.log(JSON.parse(solc.compile(JSON.stringify(input))).contracts);

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts['fundraise.sol'].fundraise;