/* eslint-disable @typescript-eslint/no-explicit-any */

// Network Info
interface NetworkInformation {
  type?:
    | 'bluetooth'
    | 'cellular'
    | 'ethernet'
    | 'mixed'
    | 'none'
    | 'other'
    | 'unknown'
    | 'wifi'
    | 'wimax';
  effectiveType?: '2g' | '3g' | '4g' | 'slow-2g';
  downlinkMax?: number;
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
  onchange?: EventListenerOrEventListenerObject;
  addEventListener(
    type: 'change',
    listener: (this: NetworkInformation, ev: Event) => any,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener(
    type: 'change',
    listener: (this: NetworkInformation, ev: Event) => any,
    options?: boolean | EventListenerOptions,
  ): void;
}

declare global {
  interface Navigator {
    connection?: NetworkInformation;
  }
}

export {};
