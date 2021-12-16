//SPDX-License-Identifier: <SPDX-License>
require('@nomiclabs/hardhat-waffle');
const fs = require('fs');
const projectId = 'bc1ae99807e34eabb67a5272799dcba0';
const privateKey = fs.readFileSync('.secret').toString();
module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
