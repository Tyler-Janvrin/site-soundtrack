const getPage = browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
        console.log("from inside getPage: " + tabs[0].url);
        return tabs[0].url;
    });

function handleMessage(request, sender, sendResponse) {
    console.log(`The background script received a message: ${request.greeting}`);
    if (request.greeting == "play"){
        document.getElementById('audio-player').play();
    }
    if (request.greeting == "pause"){
        document.getElementById('audio-player').pause();
    }

    //const tab = await getPage;
    //console.log("from inside handleMessage: " + tab);

    
    // console.log("title of active tab is " + window.top.location.href);

    sendResponse({ response: "Response from background script: received message: ",});// + request.greeting + " " + tab});
}
  
browser.runtime.onMessage.addListener(handleMessage);

console.log("Hello from background-script!");
