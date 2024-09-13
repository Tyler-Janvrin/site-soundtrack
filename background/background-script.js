function handleMessage(request, sender, sendResponse) {
    console.log(`A content script sent a message: ${request.greeting}`);
    sendResponse({ response: "Response from background script" });
}
  
browser.runtime.onMessage.addListener(handleMessage);

console.log("Hello from background-script!");
