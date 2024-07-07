import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "hardhat-deploy-ethers";

import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia:{
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts:[process.env.DEPLOYER as any],
    }
  },
  namedAccounts: {
    deployer:{
      default: 0,
    }
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY as any,
    },
  },
};

export default config;
