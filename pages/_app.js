import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import { argentWallet, trustWallet } from "@rainbow-me/rainbowkit/wallets";
import { createClient, configureChains, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { themeChange } from "theme-change";
import React from "react";
import Layout from "../components/Layout";
import { goerli, mainnet } from "wagmi/chains";
import { ContextProvider } from "../components/Context";
const { chains, provider, webSocketProvider } = configureChains(
  [goerli],
  [
    alchemyProvider({ apiKey: "LQ0xqhSEYELkJL2ToAS0S02mh8LiT_iR" }),
    publicProvider(),
  ]
);

const { wallets } = getDefaultWallets({
  appName: "Project",
  chains,
});

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [argentWallet({ chains }), trustWallet({ chains })],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const MyApp = ({ Component, pageProps }) => {
  React.useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundColor: "#FFF0F5" }}
    >
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <ContextProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ContextProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
};

export default MyApp;
