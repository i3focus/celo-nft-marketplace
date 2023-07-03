// require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

/** @type import('hardhat/config').HardhatUserConfig */
// Add the alfajores network to the configuration
module.exports = {
  solidity: "0.8.18",
  networks: {
    alfajores: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 44787, // Chain ID for the Alfajores Network
    },
  },
};
