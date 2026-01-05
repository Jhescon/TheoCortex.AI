/// <reference types="vite/client" />

// Calendly TypeScript definitions
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: Element | null;
      }) => void;
      initEventListener: (options: {
        onEventScheduled?: (e: any) => void;
        onEventTypeViewed?: (e: any) => void;
        onDateAndTimeSelected?: (e: any) => void;
      }) => void;
    };
  }
}