import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "hardhat-deploy-ethers";

// Step 1: import ZKsync plugin
import "@matterlabs/hardhat-zksync";

import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    sepolia:{
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts:[process.env.DEPLOYER as any],
      zksync: false,
    },
    // Step 2: Add ZKsync testnet network
    zksyncSepolia:{
      url: "https://sepolia.era.zksync.dev",
      ethNetwork: "sepolia",
      accounts:[process.env.DEPLOYER as any],
      zksync: true,

    }
  },
  namedAccounts: {
    deployer:{
      default: 0,
    }
  }
};

export default config;
