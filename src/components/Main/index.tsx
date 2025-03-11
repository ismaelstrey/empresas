'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { Toaster } from 'react-hot-toast';
const queryClient = new QueryClient();

export default function Main({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex w-full min-h-screen">
            <Toaster />
            <QueryClientProvider client={queryClient}>
                <div className="flex-1 p-4 container mx-auto">
                    {children}
                </div>
            </QueryClientProvider>
        </div>
    )
}