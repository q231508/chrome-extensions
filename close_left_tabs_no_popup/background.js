
chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.query({}, (all_tabs) => {

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      const current_tab = tabs[0];

      for (let tab of all_tabs) {
        if (tab.index < current_tab.index) {
          chrome.tabs.remove(tab.id);
        }
      }
    });
  });
});
