
async function main() {
    const CONTRACT_ADDRESS = "0xDa8CEBEBAF8739B22d2a98B91F9eE913f48CD88e";

    const { deployer } = await getNamedAccounts(); 

    const MyContract = await hre.ethers.getContractFactory("ZeekMessages");
    const myContract = MyContract.attach(
      CONTRACT_ADDRESS, // The deployed contract address
      deployer // The signer
    );

    let nMessages = await myContract.getTotalMessages();

    console.log(`Total messages: ${nMessages}`);

    console.log(`Sending a message...`);
    const tx = await myContract.sendMessage("Hello, ZK Lambda!");
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
