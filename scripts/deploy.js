async function main() {
  const Kgf = await hre.ethers.getContractFactory('Kgf');
  const kgf = await Kgf.deploy();

  await kgf.deployed();

  console.log('Kgf deployed to:', kgf.address);

  let mint = await kgf.mintNft();

  await mint.wait();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
