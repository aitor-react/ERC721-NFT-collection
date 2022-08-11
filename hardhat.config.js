require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: '0.8.1',
  networks: {
    goerli: {
      url: process.env.API_KEY_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

