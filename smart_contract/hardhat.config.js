// https://eth-goerli.g.alchemy.com/v2/hMc8VsaHNMD5RtqxZ7P1uAdVdR4HLYQt
require("@nomiclabs/hardhat-waffle")
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/hMc8VsaHNMD5RtqxZ7P1uAdVdR4HLYQt",
      accounts: ['d4b269860673a2b66ad7965b7e1a5cc1525ef3b9aa5d602e4b9f83ae4551b656']
    }
  }
};
