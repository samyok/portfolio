const trackEvent = (event, type) => {
  if (typeof window === "undefined") return;
  if (window.umami) {
    window.umami.track(event, { data: { type } });
  }
};

export default trackEvent;
