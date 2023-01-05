const MyToken = artifacts.require("MyToken");
const FarmToken = artifacts.require("FarmToken");

module.exports = async function (callback) {
  const accounts = await new web3.eth.getAccounts();
  const myToken = await MyToken.deployed();
  const farmToken = await FarmToken.deployed();

  balanceMyTokenBeforeAccounts0 = await myToken.balanceOf(accounts[0]);
  balanceMyTokenBeforeFarmToken = await myToken.balanceOf(farmToken.address);
  console.log("** My Token **");
  console.log("Balance MyToken Before accounts[0]\t" + web3.utils.fromWei(balanceMyTokenBeforeAccounts0.toString()));
  console.log("Balance MyToken Before TokenFarm\t" + web3.utils.fromWei(balanceMyTokenBeforeFarmToken.toString()));

  console.log("** Farm Token **");
  balanceFarmTokenBeforeAccounts0 = await farmToken.balanceOf(accounts[0]);
  balanceFarmTokenBeforeFarmToken = await farmToken.balanceOf(farmToken.address);
  console.log("Balance FarmToken Before accounts[0]\t" + web3.utils.fromWei(balanceFarmTokenBeforeAccounts0.toString()));
  console.log("Balance FarmToken Before TokenFarm\t" + web3.utils.fromWei(balanceFarmTokenBeforeFarmToken.toString()));

  console.log("call wtihdraw function");
  await farmToken.withdraw(web3.utils.toWei("100", "ether"));

  console.log("** My Token **");
  balanceMyTokenAfterAcounts0 = await myToken.balanceOf(accounts[0]);
  balanceMyTokenAfterFarmToken = await myToken.balanceOf(farmToken.address);
  console.log("Balance MyToken After accounts[0]\t" + web3.utils.fromWei(balanceMyTokenAfterAcounts0.toString()));
  console.log("Balance MyToken After TokenFarm\t" + web3.utils.fromWei(balanceMyTokenAfterFarmToken.toString()));

  console.log("** Farm Token **");
  balanceFarmTokenAfterAccounts0 = await farmToken.balanceOf(accounts[0]);
  balanceFarmTokenAfterFarmToken = await farmToken.balanceOf(farmToken.address);
  console.log("Balance FarmToken After accounts[0]\t" + web3.utils.fromWei(balanceFarmTokenAfterAccounts0.toString()));
  console.log("Balance FarmToken After TokenFarm\t" + web3.utils.fromWei(balanceFarmTokenAfterFarmToken.toString()));

  callback();
}
