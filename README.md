# Ethereum - ZKsync diffs

This repo contains two sample projects with the same smart contracts, deployment script and a script to interact with the contract.

- The `/ETH-demo` project is a Hardhat project configured to deploy on the Sepolia testnet.

- The `/ZK-demo` project simply adds the required plugin and configuration parameters to deploy on ZKsync Sepolia testnet.


## Environment variables

Both projects contain a `.env.example` file with the required environment variables.

- `DEPLOYER`: Private key of the account to deploy smart contracts.
- `ETHERSCAN_API_KEY`: API key used to verify the smart contract on the Sepolia Etherscan explorer.
