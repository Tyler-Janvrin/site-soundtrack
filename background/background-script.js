var paused = false;

async function pollPageUrl(){
    browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {
        console.log("from inside pollPageUrl: " + tabs[0].url);
        if(tabs[0].url == "https://en.wikipedia.org/wiki/Main_Page"){
            document.getElementById('audio-player').pause();
            playing = false;
        }
        else{
            if(!paused){
                document.getElementById('audio-player').play();
            }
        }
    });
    
    setTimeout(pollPageUrl, 2000);
}

setTimeout(pollPageUrl, 2000);

function handleMessage(request, sender, sendResponse) {
    console.log(`The background script received a message: ${request.greeting}`);
    if (request.greeting == "play"){
        document.getElementById('audio-player').play();
        paused = false;
    }
    if (request.greeting == "pause"){
        document.getElementById('audio-player').pause();
        paused = true;
    }

    // const tab = await getPage;
    // console.log("from inside handleMessage: " + tab);
    
    // console.log("title of active tab is " + window.top.location.href);

    sendResponse({ response: "Response from background script: received message: " + request.greeting,});
}
  
browser.runtime.onMessage.addListener(handleMessage);

console.log("Hello from background-script!");
