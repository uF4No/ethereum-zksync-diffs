
async function main() {
    const CONTRACT_ADDRESS = "0xA9Ca74eA7413dB2d228BDd6B0091Ab30c47F4E90";

    const { deployer } = await getNamedAccounts(); 

    const MyContract = await hre.ethers.getContractFactory("ZeekMessages");
    const myContract = MyContract.attach(
      CONTRACT_ADDRESS, // The deployed contract address
      deployer // The signer
    );

    let nMessages = await myContract.getTotalMessages();

    console.log(`Total messages: ${nMessages}`);

    console.log(`Sending a message...`);
    const tx = await myContract.sendMessage("Hello, World!");
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
