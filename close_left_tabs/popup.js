
function logTabs(tabs) {
  for (const tab of tabs) {
    console.log(tab.id);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

document.querySelector("button").addEventListener("click", () =>{
  chrome.tabs.query({}, (all_tabs) => {
    logTabs(all_tabs);

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      const current_tab = tabs[0];
      console.log(current_tab.id, "lolololol");

      for (let tab of all_tabs) {
        if (tab.id < current_tab.id) {
          chrome.tabs.remove(tab.id);
        }
      }
    });
  });
});
