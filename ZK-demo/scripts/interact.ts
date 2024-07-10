
async function main() {
    const CONTRACT_ADDRESS = "0x73fD0729525974B014753aAc898eC4C8D2C7Ab13";

    const { deployer } = await getNamedAccounts(); 

    const MyContract = await hre.ethers.getContractFactory("ZeekMessages");
    const myContract = MyContract.attach(
      CONTRACT_ADDRESS, // The deployed contract address
      deployer // The signer
    );

    let nMessages = await myContract.getTotalMessages();

    console.log(`Total messages: ${nMessages}`);

    
    console.log(`Sending a message...`);
    const tx = await myContract.sendMessage("Hello, devs!");
    await tx.wait();

    console.log("Trx hash:", tx.hash);

    const tx2 = await myContract.getLastMessage();
    console.log(`Last message: ${tx2}`);

    nMessages = await myContract.getTotalMessages();

    console.log(`Total messages: ${nMessages}`);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
