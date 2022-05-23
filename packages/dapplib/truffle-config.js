require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remind uncover grace indoor fortune twelve'; 
let testAccounts = [
"0x310ee5600b019c36c9f1dd65920fdd83b46b0bd6b72c2e9737fb8d19c2640d8a",
"0x1b5d64613ded6c7362ce34f521cb356f670e529d7b40e00a7175d6c55917dae0",
"0x43357c62151794748c35fa15eb1ffed92c37d46e227c5b02baab0a8e40f7e520",
"0x159e0640ce4f5c389d749c751b7a85621abdb3a306a658855f1efac182757bcb",
"0x5320223f2f448bf81198e4061ef02a5603a7acb3bca271ac74e28e7079d521a6",
"0x7681083cd9b2d65b144b572a2959ed7fd119182ff4b8f5d91e6c7b1848e1abc1",
"0x0f286a122c56e62cb20ba3b97da43d20d30e5fd951d8550cf46efcaa4fac93c0",
"0x5f82118bec9441a92ac9ca20b2fc506e1655aa03d745d0ee2709822f0b303e28",
"0xf69635b31b8da47eb01e759876fcffb9ce1749c463171da6ef1c5a6c0970cfac",
"0x2140fceec19be718a9850b58dc86dceabae379c855b2ead2f29402c09488c504"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

