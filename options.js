    const idb = '/idb-file-storage';
    
    async function saveOptions() {
        for(let i = 1; i <= 20; i++){
            browser.storage.local.set({
                input_1: document.getElementById("input-1").value,
                input_2: document.getElementById("input-2").value,
                input_3: document.getElementById("input-3").value,
                input_4: document.getElementById("input-4").value,
                input_5: document.getElementById("input-5").value,
                input_6: document.getElementById("input-6").value,
                input_7: document.getElementById("input-7").value,
                input_8: document.getElementById("input-8").value,
                input_9: document.getElementById("input-9").value,
                input_10: document.getElementById("input-10").value,
                input_11: document.getElementById("input-11").value,
                input_12: document.getElementById("input-12").value,
                input_13: document.getElementById("input-13").value,
                input_14: document.getElementById("input-14").value,
                input_15: document.getElementById("input-15").value,
                input_16: document.getElementById("input-16").value,
                input_17: document.getElementById("input-17").value,
                input_18: document.getElementById("input-18").value,
                input_19: document.getElementById("input-19").value,
                input_20: document.getElementById("input-20").value,
                note_1: document.getElementById("note-1").value,
                note_2: document.getElementById("note-2").value,
                note_3: document.getElementById("note-3").value,
                note_4: document.getElementById("note-4").value,
                note_5: document.getElementById("note-5").value,
                note_6: document.getElementById("note-6").value,
                note_7: document.getElementById("note-7").value,
                note_8: document.getElementById("note-8").value,
                note_9: document.getElementById("note-9").value,
                note_10: document.getElementById("note-10").value,
                note_11: document.getElementById("note-11").value,
                note_12: document.getElementById("note-12").value,
                note_13: document.getElementById("note-13").value,
                note_14: document.getElementById("note-14").value,
                note_15: document.getElementById("note-15").value,
                note_16: document.getElementById("note-16").value,
                note_17: document.getElementById("note-17").value,
                note_18: document.getElementById("note-18").value,
                note_19: document.getElementById("note-19").value,
                note_20: document.getElementById("note-20").value,
            });
        }
    }
  
    async function reloadOptions() {
        console.log(browser.storage.local.get("input_1"));
        for(let i = 1; i <= 20; i++){
            
            browser.storage.local.get("input_1").then( item => {document.getElementById("input-1").value = item.input_1.toString()})
            document.getElementById("note-" + i).setAttribute('value', browser.storage.local.get("note_" + i).toString());
            
        }
        document.getElementById("id1");
    }

    document.getElementById("save-button").addEventListener("click", saveOptions);
    document.getElementById("reload-button").addEventListener("click", reloadOptions);

    // couldn't get this to work
    /*
    // my actual code starts here
    async function saveItem(collectionName, item) {
        const storedAudio = await idb.getFileStorage({ name: "stored-audio" });
    
        await storedAudio.put(`${collectionName}/${item.uuid}`, item.blob);
    }

    async function loadStoredAudio() {
        const audioStore = await idb.getFileStorage({ name: "stored-audio" });
        let listOptions = undefined;
        const audioList = await audioStore.list(listOptions);
        let storedAudio = [];

        for (const storedName of audioList) {
            const blob = await audioStore.get(storedName);
            storedAudio.push({ storedName, blobUrl: URL.createObjectURL(blob) });
        }

        console.log(storedAudio);
        return storedAudio;
    }

    async function removeStoredAudio(storedAudios) {
        const audioStore = await idb.getFileStorage({ name: "stored-images" });
        for (const storedAudio of storedAudios) {
            URL.revokeObjectURL(storedAudio.blobUrl);
            await audioStore.remove(storedAudio.storedName);
        }
    }

    async function addFiles(){
        saveCollectedBlobs("testFiles", );
    }
        */
      
      
  
    // document.addEventListener("DOMContentLoaded", restoreOptions);
    // document.querySelector("form").addEventListener("submit", saveOptions);
    // document.getElementById("saveCollected").addEventListener("click", saveItem("test", "testitem.mp3"));
    // document.getElementById("loadStored").addEventListener("click", loadStoredAudio);
    // document.getElementById("removeStored").addEventListener("click", removeStoredAudio(loadStoredAudio));