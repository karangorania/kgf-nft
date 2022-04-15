const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Kgf', () => {
  it('Should return the symbol of NFT', async function () {
    const Kgf = await ethers.getContractFactory('Kgf');
    const kgf = await Kgf.deploy();
    await kgf.deployed();

    expect(await kgf.symbol()).to.equal('KGF');
  });

  it('Should return the name of NFT', async function () {
    const Kgf = await ethers.getContractFactory('Kgf');
    const kgf = await Kgf.deploy();
    await kgf.deployed();

    expect(await kgf.name()).to.equal('KgfRocky');
  });

  it('Should mint an NFT', async function () {
    const Kgf = await ethers.getContractFactory('Kgf');
    const kgf = await Kgf.deploy();
    await kgf.deployed();

    let mint = await kgf.mintNft();

    await mint.wait();
  });
});
