"use client"
import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultConfig,
    RainbowKitProvider,
    lightTheme
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
    polygon,
    polygonAmoy
} from 'wagmi/chains';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";


const config = getDefaultConfig({
    appName: 'racecade-marketplace',
    projectId: '1db1e1b18a80749ad384a48d1eafe11e',
    chains: [polygon, polygonAmoy],
    ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();



export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider theme={lightTheme({
                    accentColor: '#0abab5',
                    accentColorForeground: 'black',
                    borderRadius: 'large',
                    // fontStack: 'system',
                    // overlayBlur: 'small',
                })}>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}