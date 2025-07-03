'use client'

import type { ReactNode } from 'react';
import React, { createContext, useContext, useState } from 'react'

type ErrorType = {
  message: string[]
}

interface AuthLoadingContextType {
  isAuthLoading: boolean
  authError: ErrorType | null
  setAuthLoading: (loading: boolean) => void
  setAuthError: (error: ErrorType | null) => void
  clearAuthError: () => void
}

const AuthLoadingContext = createContext<AuthLoadingContextType | undefined>(undefined)

export const useAuthLoading = () => {
  const context = useContext(AuthLoadingContext)

  if (context === undefined) {
    throw new Error('useAuthLoading must be used within an AuthLoadingProvider')
  }

  
return context
}

interface AuthLoadingProviderProps {
  children: ReactNode
}

export const AuthLoadingProvider: React.FC<AuthLoadingProviderProps> = ({ children }) => {
  const [isAuthLoading, setIsAuthLoading] = useState(false)
  const [authError, setAuthErrorState] = useState<ErrorType | null>(null)

  const setAuthLoading = (loading: boolean) => {
    setIsAuthLoading(loading)
  }

  const setAuthError = (error: ErrorType | null) => {
    setAuthErrorState(error)
  }

  const clearAuthError = () => {
    setAuthErrorState(null)
  }

  const value: AuthLoadingContextType = {
    isAuthLoading,
    authError,
    setAuthLoading,
    setAuthError,
    clearAuthError
  }

  return <AuthLoadingContext.Provider value={value}>{children}</AuthLoadingContext.Provider>
}
