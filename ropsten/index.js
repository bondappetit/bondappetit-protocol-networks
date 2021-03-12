module.exports = {
  networkName: 'ropsten',
  networkUrl: 'https://ropsten.infura.io/v3/03d22d3114e54a6dbab0cb1c6163b48a',
  networkEtherscan: 'https://ropsten.etherscan.io',
  networkId: 3,
  gasPrice: '3000000000',
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
