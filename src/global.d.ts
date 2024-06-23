declare namespace Telegram {
  interface WebApp {
    initData: string;
    initDataUnsafe: object;
    version: string;
    platform: string;
    colorScheme: 'light' | 'dark';
    themeParams: {
      bg_color?: string;
      text_color?: string;
      hint_color?: string;
      link_color?: string;
      button_color?: string;
      button_text_color?: string;
    };
    isExpanded: boolean;
    viewportHeight: number;
    viewportStableHeight: number;
    headerColor: string;
    backgroundColor: string;
    BackButton: {
      isVisible: boolean;
      show(): void;
      hide(): void;
      onClick(callback: () => void): void;
      offClick(callback: () => void): void;
    };
    MainButton: {
      text: string;
      color: string;
      textColor: string;
      isVisible: boolean;
      isActive: boolean;
      isProgressVisible: boolean;
      setText(text: string): void;
      onClick(callback: () => void): void;
      offClick(callback: () => void): void;
      show(): void;
      hide(): void;
      enable(): void;
      disable(): void;
      showProgress(leaveActive: boolean): void;
      hideProgress(): void;
    };
    HapticFeedback: {
      impactOccurred(style: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft'): void;
      notificationOccurred(type: 'error' | 'success' | 'warning'): void;
      selectionChanged(): void;
    };
    ready(): void;
    expand(): void;
    close(): void;
    onEvent(eventType: string, callback: () => void): void;
    offEvent(eventType: string, callback: () => void): void;
    sendData(data: string): void;
  }
}

interface Window {
  Telegram: {
    WebApp: Telegram.WebApp;
  };
}
