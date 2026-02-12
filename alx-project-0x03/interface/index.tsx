// Button Interface
export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}

// Page Route Interface
export interface PageRouteProps {
  pageRoute: string
}

// Layout Interface
import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

