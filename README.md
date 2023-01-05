# Create and Deploy a DeFi Application

In this tutorial we weill build a DeFi Application with Solidty

## Requirement

1. [Truffle](https://trufflesuite.com)
2. [Ganache](https://trufflesuite.com/ganche)

## Development

install 3rd dependencies

```bash
npm install
```

complie smart contracts

```bash
npm run complie
```

deploy smart contracts

```bash
npm run migrate
```

transafer token 

``bash
npm test
```
terminal will show:

```bash
> defi-app-demo@1.0.0 test
> truffle exec ./test/getMyTokenBalance.js && truffle exec ./test/transferMyTokenToFarmToken.js && truffle exec ./test/withdrawMyTokenFromTokenFarm.js

Using network 'ganache'.

0
Using network 'ganache'.

Amount of MyToken FarmToken is allowed to transfer on our behalf Before:        0
Amount of MyToken FarmToken is allowed to transfer on our behalf After: 100000000000000000000
** My Token **
Balance MyToken Before accounts[0]      1000000
Balance MyToken Before TokenFarm        0
** Farm Token **
Balance FarmToken After accounts[0]     0
Balance FarmToken After TokenFarm       0
call deposit function
** My Token **
Balance MyToken After accounts[0]       999900
Balance MyToken After TokenFarm 100
** Farm Token **
Balance FarmToken After accounts[0]     999900
Balance FarmToken After TokenFarm       100
Using network 'ganache'.

** My Token **
Balance MyToken Before accounts[0]      999900
Balance MyToken Before TokenFarm        100
** Farm Token **
Balance FarmToken Before accounts[0]    100
Balance FarmToken Before TokenFarm      0
call wtihdraw function
** My Token **
Balance MyToken After accounts[0]       1000000
Balance MyToken After TokenFarm 0
** Farm Token **
Balance FarmToken After accounts[0]     0
Balance FarmToken After TokenFarm       0
```

## references

1. [CREATE AND DEPLOY A DEFI APP](https://ethereum.org/en/developers/tutorials/create-and-deploy-a-defi-app/)
