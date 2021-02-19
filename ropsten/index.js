module.exports = {
  networkName: 'ropsten',
  networkUrl: 'http://46.165.249.37:8545',
  networkEtherscan: 'https://ropsten.etherscan.io',
  networkId: 3,
  gasPrice: '60000000000',
  accounts: {
    ...require("./accounts"),
  },
  assets: {
    ...require("./assets"),
    ...require("./gen/assets"),
  },
  contracts: {
    ...require("./contracts"),
    ...require("./gen/contracts"),
  },
};
