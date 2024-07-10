// ./deploy/00-deploy.ts 
import { HardhatRuntimeEnvironment } from "hardhat/types"; 
import { DeployFunction } from "hardhat-deploy/types"; 
 
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) { 
  const { deployments, getNamedAccounts } = hre; 
  const { deploy } = deployments; 
 /* 
  The deploy function uses the hardhat-deploy named accounts feature 
  to set the deployment's `from` parameter. 
 */ 
  const { deployer } = await getNamedAccounts(); 
  console.log("Deploying from:", deployer);

  const res = await deploy("ZeekMessages", { 
    from: deployer, 
    args: [], 
    log: true, 
  }); 


  await hre.run("verify:verify", {
    address: res.address,
    constructorArguments: [],
  });

}; 
export default func;
