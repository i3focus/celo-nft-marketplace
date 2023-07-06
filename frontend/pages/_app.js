import "@rainbow-me/rainbowkit/styles.css";
import '@/styles/globals.css'

import {
  getDefaultWallets,
  RainbowKitProvider
} from "@rainbow-me/rainbowkit";

import { 
  createConfig,
  configureChains,
  WagmiConfig
} from "wagmi";

import { publicProvider } from "wagmi/providers/public";

import { 
  createPublicClient, 
  http 
} from "viem";

import { celoAlfajores } from "@wagmi/core/chains";

const { chains } = configureChains(
  [celoAlfajores],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Celo NFT Marketplace",
  projectId: "25f5f219034c7d6461f5bc11b005ff38",
  chains,
});

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: celoAlfajores,
    transport: http()
  }),
  connectors
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
