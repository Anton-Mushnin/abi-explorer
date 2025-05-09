import type { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, type Config } from 'wagmi'
import { createAppKit } from '@reown/appkit/react'
// Import config, networks, projectId, and wagmiAdapter from your config file
import { config, networks, projectId, wagmiAdapter } from '../config'
// Import the default network separately if needed
import { mainnet } from '@reown/appkit/networks'

const queryClient = new QueryClient()

const metadata = {
  name: 'ABI Explorer',
  description: 'Web3 ABI Explorer Application',
  url: window.location.origin,
  icons: ['https://abi-explorer.app/icon.png'], // Replace with your actual icon URL
}

// Initialize AppKit *outside* the component render cycle
// Add a check for projectId for type safety, although config throws error already.
if (!projectId) {
  console.error("AppKit Initialization Error: Project ID is missing.");
  // Optionally throw an error or render fallback UI
} else {
  createAppKit({
    adapters: [wagmiAdapter],
    // Use non-null assertion `!` as projectId is checked runtime, needed for TypeScript
    projectId: projectId!,
    // Pass networks directly (type is now correctly inferred from config)
    networks: networks,
    defaultNetwork: mainnet, // Or your preferred default
    metadata,
    features: { analytics: true,
      connectMethodsOrder: ["social", "wallet", "email", ],
    }, // Optional features
  })
}

export default function ContextProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config as Config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
} 