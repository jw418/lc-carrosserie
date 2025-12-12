import "client-only";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const triggerGAdsConversion = (
  conversionId: string,
  callback?: () => void
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: conversionId,
      event_callback: callback ?? undefined,
    });
  }
};
