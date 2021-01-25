const ICO = artifacts.require("ICO.sol");

module.exports = function (deployer) {
  deployer.deploy(
    ICO,
    "Ryan Kim Token",
    "RKT",
    18,
    web3.utils.toWei("10000000")
  );
};
