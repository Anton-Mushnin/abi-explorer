# ABI Explorer with AI (Coming Soon)

This project provides a powerful Web3 ABI Explorer with wallet connectivity and smart contract interaction.

## Features

### Current Features
- **ABI Exploration**: Parse and visualize smart contract ABIs
- **Contract Interaction**: Call and test contract functions directly from the interface
- **Multi-chain Support**: Connect to various Ethereum networks including testnets
- **Wallet Integration**: Multiple wallet connection options via Reown AppKit

### Future AI-Enhanced Features
- **Smart Contract Generation**: Generate Solidity smart contracts from natural language prompts
- **React Hook Generation**: Create ready-to-use React hooks from smart contracts for different libraries:
  - Wagmi
  - Ethers.js
  - Viem
- **Code Documentation**: AI-powered explanations of contract functions and parameters

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Create a `.env.local` file with your WalletConnect Project ID:
   ```
   VITE_PUBLIC_PROJECT_ID="YOUR_PROJECT_ID"
   ```
   You can get a Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/)

## Development

Run the development server:

```bash
pnpm dev
```

## Architecture

The application consists of several key components:

### ABI Explorer
- Left Panel: ABI input and source selection
- Right Panel: Function visualization and interaction

### Future AI Generation (Coming Soon)
- Contract Generator: Create smart contracts from prompts
- Hook Generator: Generate React hooks for different Web3 libraries
- Documentation: AI-powered explanations and documentation

## Technologies
- React + Vite
- TypeScript
- Reown AppKit for wallet connections
- Wagmi
- AI for code generation (planned)


## Usage

The `<appkit-button />` component is available throughout the application to trigger the wallet connection modal.

## Configuration

The Reown AppKit is configured in:
- `config/index.tsx` - Wagmi adapter setup
- `context/index.tsx` - AppKit context provider

## Supported Networks

Currently configured networks:
- Ethereum Mainnet
- Arbitrum
- Sepolia
- Arbitrum Sepolia

To add more networks, modify the `networks` array in `config/index.tsx`.
