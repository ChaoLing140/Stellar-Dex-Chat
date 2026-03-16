'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { StellarWalletProvider } from '@/contexts/StellarWalletContext';
import StellarChatInterface from '@/components/StellarChatInterface';

export default function ChatPage() {
    return (
        <ThemeProvider>
            <StellarWalletProvider>
                <main className="h-screen w-screen overflow-hidden">
                    <StellarChatInterface />
                </main>
            </StellarWalletProvider>
        </ThemeProvider>
    );
}
