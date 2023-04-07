export const contractAddress = {
  5: { gpadRouter: "0x8636f2C0B5bbFfa29Aca3F09d59FF4278D7Cff8A" },
};

export const turingTemplate = [
  {
    name: "Turing0",
    descriptionImage: "/turing0.png",
    abi: [
      {
        inputs: [
          {
            internalType: "contract GETH",
            name: "_geth",
            type: "address",
          },
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
          {
            internalType: "string",
            name: "_symbol",
            type: "string",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
        ],
        name: "allowance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "burnFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "subtractedValue",
            type: "uint256",
          },
        ],
        name: "decreaseAllowance",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "geth",
        outputs: [
          {
            internalType: "contract GETH",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "addedValue",
            type: "uint256",
          },
        ],
        name: "increaseAllowance",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transfer",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    bytecode:
      "0x60806040523480156200001157600080fd5b5060405162000d2538038062000d25833981016040819052620000349162000145565b818160036200004483826200025e565b5060046200005382826200025e565b5050600580546001600160a01b0319166001600160a01b039590951694909417909355506200032a915050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000a857600080fd5b81516001600160401b0380821115620000c557620000c562000080565b604051601f8301601f19908116603f01168101908282118183101715620000f057620000f062000080565b816040528381526020925086838588010111156200010d57600080fd5b600091505b8382101562000131578582018301518183018401529082019062000112565b600093810190920192909252949350505050565b6000806000606084860312156200015b57600080fd5b83516001600160a01b03811681146200017357600080fd5b60208501519093506001600160401b03808211156200019157600080fd5b6200019f8783880162000096565b93506040860151915080821115620001b657600080fd5b50620001c58682870162000096565b9150509250925092565b600181811c90821680620001e457607f821691505b6020821081036200020557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200025957600081815260208120601f850160051c81016020861015620002345750805b601f850160051c820191505b81811015620002555782815560010162000240565b5050505b505050565b81516001600160401b038111156200027a576200027a62000080565b62000292816200028b8454620001cf565b846200020b565b602080601f831160018114620002ca5760008415620002b15750858301515b600019600386901b1c1916600185901b17855562000255565b600085815260208120601f198616915b82811015620002fb57888601518255948401946001909101908401620002da565b50858210156200031a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6109eb806200033a6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806370a082311161008c578063a457c2d711610066578063a457c2d7146101a2578063a9059cbb146101b5578063dd62ed3e146101c8578063fe724906146101db57600080fd5b806370a082311461015c57806379cc67901461018557806395d89b411461019a57600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a5780633950935114610149575b600080fd5b6100dc610206565b6040516100e99190610835565b60405180910390f35b61010561010036600461089f565b610298565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b6101056101353660046108c9565b6102b2565b604051601281526020016100e9565b61010561015736600461089f565b6102d6565b61011961016a366004610905565b6001600160a01b031660009081526020819052604090205490565b61019861019336600461089f565b6102f8565b005b6100dc61036c565b6101056101b036600461089f565b61037b565b6101056101c336600461089f565b6103fb565b6101196101d6366004610927565b610409565b6005546101ee906001600160a01b031681565b6040516001600160a01b0390911681526020016100e9565b6060600380546102159061095a565b80601f01602080910402602001604051908101604052809291908181526020018280546102419061095a565b801561028e5780601f106102635761010080835404028352916020019161028e565b820191906000526020600020905b81548152906001019060200180831161027157829003601f168201915b5050505050905090565b6000336102a6818585610434565b60019150505b92915050565b6000336102c0858285610558565b6102cb8585856105d2565b506001949350505050565b6000336102a68185856102e98383610409565b6102f39190610994565b610434565b60055460405163079cc67960e41b81526001600160a01b03848116600483015260248201849052909116906379cc679090604401600060405180830381600087803b15801561034657600080fd5b505af115801561035a573d6000803e3d6000fd5b505050506103688282610776565b5050565b6060600480546102159061095a565b600033816103898286610409565b9050838110156103ee5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102cb8286868403610434565b6000336102a68185856105d2565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166104965760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103e5565b6001600160a01b0382166104f75760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103e5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006105648484610409565b905060001981146105cc57818110156105bf5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103e5565b6105cc8484848403610434565b50505050565b6001600160a01b0383166106365760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103e5565b6001600160a01b0382166106985760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103e5565b6001600160a01b038316600090815260208190526040902054818110156107105760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103e5565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a36105cc565b6001600160a01b0382166107cc5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103e5565b80600260008282546107de9190610994565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600060208083528351808285015260005b8181101561086257858101830151858201604001528201610846565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461089a57600080fd5b919050565b600080604083850312156108b257600080fd5b6108bb83610883565b946020939093013593505050565b6000806000606084860312156108de57600080fd5b6108e784610883565b92506108f560208501610883565b9150604084013590509250925092565b60006020828403121561091757600080fd5b61092082610883565b9392505050565b6000806040838503121561093a57600080fd5b61094383610883565b915061095160208401610883565b90509250929050565b600181811c9082168061096e57607f821691505b60208210810361098e57634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156102ac57634e487b7160e01b600052601160045260246000fdfea2646970667358221220d57bdaddf658285a1dd0caae9b06a2059236504cf8a9a3bddd54c5455c80dba864736f6c63430008110033",
  },
  {
    name: "Turing1",
    descriptionImage: "/turing1.png",
    abi: [
      {
        inputs: [
          {
            internalType: "contract GETH",
            name: "_geth",
            type: "address",
          },
          {
            internalType: "string",
            name: "_name",
            type: "string",
          },
          {
            internalType: "string",
            name: "_symbol",
            type: "string",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "approved",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "operator",
            type: "address",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "approved",
            type: "bool",
          },
        ],
        name: "ApprovalForAll",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256",
          },
        ],
        name: "burnFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "getApproved",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "geth",
        outputs: [
          {
            internalType: "contract GETH",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "operator",
            type: "address",
          },
        ],
        name: "isApprovedForAll",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "ownerOf",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "operator",
            type: "address",
          },
          {
            internalType: "bool",
            name: "approved",
            type: "bool",
          },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "interfaceId",
            type: "bytes4",
          },
        ],
        name: "supportsInterface",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "tokenURI",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    bytecode:
      "0x60806040523480156200001157600080fd5b50604051620016b0380380620016b0833981016040819052620000349162000145565b818160006200004483826200025e565b5060016200005382826200025e565b5050600680546001600160a01b0319166001600160a01b039590951694909417909355506200032a915050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000a857600080fd5b81516001600160401b0380821115620000c557620000c562000080565b604051601f8301601f19908116603f01168101908282118183101715620000f057620000f062000080565b816040528381526020925086838588010111156200010d57600080fd5b600091505b8382101562000131578582018301518183018401529082019062000112565b600093810190920192909252949350505050565b6000806000606084860312156200015b57600080fd5b83516001600160a01b03811681146200017357600080fd5b60208501519093506001600160401b03808211156200019157600080fd5b6200019f8783880162000096565b93506040860151915080821115620001b657600080fd5b50620001c58682870162000096565b9150509250925092565b600181811c90821680620001e457607f821691505b6020821081036200020557634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200025957600081815260208120601f850160051c81016020861015620002345750805b601f850160051c820191505b81811015620002555782815560010162000240565b5050505b505050565b81516001600160401b038111156200027a576200027a62000080565b62000292816200028b8454620001cf565b846200020b565b602080601f831160018114620002ca5760008415620002b15750858301515b600019600386901b1c1916600185901b17855562000255565b600085815260208120601f198616915b82811015620002fb57888601518255948401946001909101908401620002da565b50858210156200031a5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611376806200033a6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063b88d4fde11610066578063b88d4fde146101ff578063c87b56dd14610212578063e985e9c514610225578063fe7249061461026157600080fd5b806370a08231146101b057806379cc6790146101d157806395d89b41146101e4578063a22cb465146101ec57600080fd5b8063095ea7b3116100d3578063095ea7b31461016257806323b872dd1461017757806342842e0e1461018a5780636352211e1461019d57600080fd5b806301ffc9a7146100fa57806306fdde0314610122578063081812fc14610137575b600080fd5b61010d610108366004610ee0565b610274565b60405190151581526020015b60405180910390f35b61012a6102c6565b6040516101199190610f4d565b61014a610145366004610f60565b610358565b6040516001600160a01b039091168152602001610119565b610175610170366004610f95565b61037f565b005b610175610185366004610fbf565b610499565b610175610198366004610fbf565b6104ca565b61014a6101ab366004610f60565b6104e5565b6101c36101be366004610ffb565b610545565b604051908152602001610119565b6101756101df366004610f95565b6105cb565b61012a610655565b6101756101fa366004611016565b610664565b61017561020d366004611068565b610673565b61012a610220366004610f60565b6106ab565b61010d610233366004611144565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60065461014a906001600160a01b031681565b60006001600160e01b031982166380ac58cd60e01b14806102a557506001600160e01b03198216635b5e139f60e01b145b806102c057506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546102d590611177565b80601f016020809104026020016040519081016040528092919081815260200182805461030190611177565b801561034e5780601f106103235761010080835404028352916020019161034e565b820191906000526020600020905b81548152906001019060200180831161033157829003601f168201915b5050505050905090565b60006103638261071f565b506000908152600460205260409020546001600160a01b031690565b600061038a826104e5565b9050806001600160a01b0316836001600160a01b0316036103fc5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061041857506104188133610233565b61048a5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c00000060648201526084016103f3565b6104948383610781565b505050565b6104a333826107ef565b6104bf5760405162461bcd60e51b81526004016103f3906111b1565b61049483838361086e565b61049483838360405180602001604052806000815250610673565b6000818152600260205260408120546001600160a01b0316806102c05760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016103f3565b60006001600160a01b0382166105af5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b60648201526084016103f3565b506001600160a01b031660009081526003602052604090205490565b60065460405163079cc67960e41b81526001600160a01b03848116600483015260248201849052909116906379cc679090604401600060405180830381600087803b15801561061957600080fd5b505af115801561062d573d6000803e3d6000fd5b50670de0b6b3a764000092505050808210610494576104948361065083856111fe565b6109d2565b6060600180546102d590611177565b61066f338383610b5d565b5050565b61067d33836107ef565b6106995760405162461bcd60e51b81526004016103f3906111b1565b6106a584848484610c2b565b50505050565b60606106b68261071f565b60006106cd60408051602081019091526000815290565b905060008151116106ed5760405180602001604052806000815250610718565b806106f784610c5e565b604051602001610708929190611220565b6040516020818303038152906040525b9392505050565b6000818152600260205260409020546001600160a01b031661077e5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b60448201526064016103f3565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906107b6826104e5565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806107fb836104e5565b9050806001600160a01b0316846001600160a01b0316148061084257506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b806108665750836001600160a01b031661085b84610358565b6001600160a01b0316145b949350505050565b826001600160a01b0316610881826104e5565b6001600160a01b0316146108a75760405162461bcd60e51b81526004016103f39061124f565b6001600160a01b0382166109095760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016103f3565b826001600160a01b031661091c826104e5565b6001600160a01b0316146109425760405162461bcd60e51b81526004016103f39061124f565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6001600160a01b038216610a285760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016103f3565b6000818152600260205260409020546001600160a01b031615610a8d5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103f3565b6000818152600260205260409020546001600160a01b031615610af25760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016103f3565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b816001600160a01b0316836001600160a01b031603610bbe5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016103f3565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610c3684848461086e565b610c4284848484610cf1565b6106a55760405162461bcd60e51b81526004016103f390611294565b60606000610c6b83610df2565b600101905060008167ffffffffffffffff811115610c8b57610c8b611052565b6040519080825280601f01601f191660200182016040528015610cb5576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a8504945084610cbf57509392505050565b60006001600160a01b0384163b15610de757604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610d359033908990889088906004016112e6565b6020604051808303816000875af1925050508015610d70575060408051601f3d908101601f19168201909252610d6d91810190611323565b60015b610dcd573d808015610d9e576040519150601f19603f3d011682016040523d82523d6000602084013e610da3565b606091505b508051600003610dc55760405162461bcd60e51b81526004016103f390611294565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610866565b506001949350505050565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610e315772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610e5d576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610e7b57662386f26fc10000830492506010015b6305f5e1008310610e93576305f5e100830492506008015b6127108310610ea757612710830492506004015b60648310610eb9576064830492506002015b600a83106102c05760010192915050565b6001600160e01b03198116811461077e57600080fd5b600060208284031215610ef257600080fd5b813561071881610eca565b60005b83811015610f18578181015183820152602001610f00565b50506000910152565b60008151808452610f39816020860160208601610efd565b601f01601f19169290920160200192915050565b6020815260006107186020830184610f21565b600060208284031215610f7257600080fd5b5035919050565b80356001600160a01b0381168114610f9057600080fd5b919050565b60008060408385031215610fa857600080fd5b610fb183610f79565b946020939093013593505050565b600080600060608486031215610fd457600080fd5b610fdd84610f79565b9250610feb60208501610f79565b9150604084013590509250925092565b60006020828403121561100d57600080fd5b61071882610f79565b6000806040838503121561102957600080fd5b61103283610f79565b91506020830135801515811461104757600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561107e57600080fd5b61108785610f79565b935061109560208601610f79565b925060408501359150606085013567ffffffffffffffff808211156110b957600080fd5b818701915087601f8301126110cd57600080fd5b8135818111156110df576110df611052565b604051601f8201601f19908116603f0116810190838211818310171561110757611107611052565b816040528281528a602084870101111561112057600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561115757600080fd5b61116083610f79565b915061116e60208401610f79565b90509250929050565b600181811c9082168061118b57607f821691505b6020821081036111ab57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b60008261121b57634e487b7160e01b600052601260045260246000fd5b500490565b60008351611232818460208801610efd565b835190830190611246818360208801610efd565b01949350505050565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061131990830184610f21565b9695505050505050565b60006020828403121561133557600080fd5b815161071881610eca56fea264697066735822122037f042ddd4f0a5f8ca9e32a0382e08fbd14033ab41f5b07a6f600922130395e664736f6c63430008110033",
  },
];