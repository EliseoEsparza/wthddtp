// 获取指定地址的以太坊账户余额（带单位）
async function getAccountBalanceWithUnit(web3, address) {
  const balance = await web3.eth.getBalance(address);
  return web3.utils.fromWei(balance, 'ether') + ' ETH';
}

// 获取指定智能合约的方法参数数量
function getContractMethodParamCount(abi, methodName) {
  const method = abi.find(item => item.name === methodName && item.type === 'function');
  return method.inputs.length;
}