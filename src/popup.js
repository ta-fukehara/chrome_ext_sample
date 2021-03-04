const getHeader1 = document.getElementById("getHeader1");
const getHeader2 = document.getElementById("getHeader2");
const getHeader3 = document.getElementById("getHeader3");

getHeader1.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // TODO: functionに引数を渡す方法が何かあるはず
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: displayH1Texts,
  });
});

getHeader2.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: displayH2Texts,
  });
});

getHeader3.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: displayH3Texts,
  });
});

function displayH1Texts() {
  const elements = document.getElementsByTagName("h1");
  // getElement~で取得したコレクションはArrayではない
  // mapなどのメソッドが使えないので[...elements]でArrayにする
  const texts = [...elements].map((e) => {
    return e.textContent.replace(/\r?\n/g, "");
  });
  window.alert(texts.join("\n"));
}

function displayH2Texts() {
  const elements = document.getElementsByTagName("h2");
  // getElement~で取得したコレクションはArrayではない
  // mapなどのメソッドが使えないので[...elements]でArrayにする
  const texts = [...elements].map((e) => {
    return e.textContent.replace(/\r?\n/g, "");
  });
  window.alert(texts.join("\n"));
}

function displayH3Texts() {
  const elements = document.getElementsByTagName("h3");
  // getElement~で取得したコレクションはArrayではない
  // mapなどのメソッドが使えないので[...elements]でArrayにする
  const texts = [...elements].map((e) => {
    return e.textContent.replace(/\r?\n/g, "");
  });
  window.alert(texts.join("\n"));
}
