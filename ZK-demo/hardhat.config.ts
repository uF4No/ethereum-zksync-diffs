import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// Step 2
import "hardhat-deploy";
import "hardhat-deploy-ethers";

// ZK Step 1
import "@matterlabs/hardhat-zksync";

import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  // Step 2
  networks: {
    hardhat: {
      zksync: false
    },
    sepolia:{
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts:[process.env.DEPLOYER as any],
    },
    zksyncSepolia:{
      url: "https://sepolia.era.zksync.dev",
      ethNetwork: "sepolia",
      zksync: true,
      accounts:[process.env.DEPLOYER as any],

    }
  },
  namedAccounts: {
    deployer:{
      default: 0,
    }
  }
};

export default config;
