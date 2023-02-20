clickme = document.getElementById("clickme")
likes = document.getElementById("like_count")

try{
  makeNewTab(windowId)
}
catch{
  chrome.windows.create({focused:false,setSelfAsOpener:true,url:"https://www.youtube.com"},(window)=>
  {
    const windowId = window.id
    chrome.tabs.query({windowId:windowId, index:0},async (tab)=>{
      tab = tab[0]
      let muted = !tab.mutedInfo.muted;
      if(muted)
      {
        await chrome.tabs.update(tab.id, { muted });
      }
    })
  })
}

Math.seededRandom = function(max, min) {
  max = max || 1;
  min = min || 0; 
  Math.seed = (Math.seed * 9301 + 49291) % 233280;
  var rnd = Math.seed / 233280.0;

  return Math.floor(min + rnd * (max - min));
}

onmousemove = function(e) {
  Math.seed = e.clientX
  console.log(Math.seededRandom(1,100))
  onmousemove = {}
}

window.addEventListener(onmousemove, function(e){
  Math.seed = e.clientX;
  console.log(Math.seededRandom())
})

clickme.addEventListener("click",() => {
 


  console.log(Math.seededRandom())
  options = ["Like","Save","Comment","Share Post"]

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
          type: "NEW",
          selectorType: selectorType,
          likes: likesToSend,
      });
    });
  
})


function makeNewTab(properWindowID){
  chrome.tabs.create({url: "https://www.youtube.com",active: false,index: 0,windowId:properWindowId},async (tab)=>{
    let muted = !tab.mutedInfo.muted;
    if(muted)
    {
      await chrome.tabs.update(tab.id, { muted });
    }
  })
}