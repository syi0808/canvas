window.onload = () => {
  function asd() {
    chrome.tabs.executeScript(null, {
      file: "./js/index.js",
    });
  }

  document.getElementById("asd").addEventListener("click", asd);
};
