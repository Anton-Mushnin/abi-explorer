# ABI Explorer with Reown AppKit

This project integrates Reown AppKit for Web3 wallet connections and authentication.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Create a `.env.local` file with your WalletConnect Project ID:
   ```
   NEXT_PUBLIC_PROJECT_ID="YOUR_PROJECT_ID"
   ```
   You can get a Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/)

## Development

Run the development server:

```bash
pnpm dev
```

## Reown AppKit Features

This project uses Reown AppKit which provides:

- One-click wallet authentication
- Social logins
- On-ramp services
- Smart accounts
- Notifications
- Multiple chain support (EVM, Solana, Bitcoin)

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

To add more networks, modify the `networks` array in `config/index.tsx`.
