(() => {
  chrome.runtime.onMessage.addListener((obj, sender, response) => {
      const { type, value, likes } = obj;

      if (type === "NEW") {
          currentVideo = likes;
          elements = document.querySelectorAll(`[aria-label="${selectorType}"]`)
          console.log(elements)
            
      }
  });
})();
