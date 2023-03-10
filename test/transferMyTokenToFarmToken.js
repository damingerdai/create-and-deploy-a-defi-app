const MyToken = artifacts.require("MyToken");
const FarmToken = artifacts.require("FarmToken");

module.exports = async function(callback) {
  const accounts = await new web3.eth.getAccounts();
  const myToken = await MyToken.deployed();
  const farmToken = await FarmToken.deployed();

  const allowanceBefore = await myToken.allowance(accounts[0], farmToken.address);
  console.log("Amount of MyToken FarmToken is allowed to transfer on our behalf Before:\t" + allowanceBefore.toString());

  await myToken.approve(farmToken.address, web3.utils.toWei("100", "ether"));

  const allowanceAfter = await myToken.allowance(accounts[0], farmToken.address);
  console.log("Amount of MyToken FarmToken is allowed to transfer on our behalf After:\t" + allowanceAfter.toString());

  balanceMyTokenBeforeAccounts0 = await myToken.balanceOf(accounts[0]);
  balanceMyTokenBeforeFarmToken = await myToken.balanceOf(farmToken.address);
  console.log("** My Token **");
  console.log("Balance MyToken Before accounts[0]\t" + web3.utils.fromWei(balanceMyTokenBeforeAccounts0.toString()));
  console.log("Balance MyToken Before TokenFarm\t" + web3.utils.fromWei(balanceMyTokenBeforeFarmToken.toString()));

  console.log("** Farm Token **");
  balanceFarmTokenBeforeAccounts0 = await farmToken.balanceOf(accounts[0]);
  balanceFarmTokenBeforeFarmToken = await farmToken.balanceOf(farmToken.address);
  console.log("Balance FarmToken After accounts[0]\t" + web3.utils.fromWei(balanceFarmTokenBeforeAccounts0.toString()));
  console.log("Balance FarmToken After TokenFarm\t" + web3.utils.fromWei(balanceFarmTokenBeforeFarmToken.toString()));

  console.log("call deposit function");
  await farmToken.deposit(web3.utils.toWei("100", "ether"));
  console.log("** My Token **");
  balanceMyTokenAfterAccounts0 = await myToken.balanceOf(accounts[0]);
  balanceMyTokenAfterFarmToken = await myToken.balanceOf(farmToken.address);
  console.log("Balance MyToken After accounts[0]\t" + web3.utils.fromWei(balanceMyTokenAfterAccounts0.toString()));
  console.log("Balance MyToken After TokenFarm\t" + web3.utils.fromWei(balanceMyTokenAfterFarmToken.toString()));

  console.log("** Farm Token **");
  balanceFarmTokenAfterAccounts0 = await farmToken.balanceOf(accounts[0]);
  balanceFarmTokenAfterFarmToken = await farmToken.balanceOf(farmToken.address);
  console.log("Balance FarmToken After accounts[0]\t" + web3.utils.fromWei(balanceMyTokenAfterAccounts0.toString()));
  console.log("Balance FarmToken After TokenFarm\t" + web3.utils.fromWei(balanceMyTokenAfterFarmToken.toString()));


  callback();

}
