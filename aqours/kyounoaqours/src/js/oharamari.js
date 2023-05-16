var serverSelect = document.getElementById('select_server');
var videoIframe = document.getElementById('video_iframe');

videoIframe.src = "https://louishide.com/e/bmzaont5scvx";

serverSelect.addEventListener('change', updateVideo);


function updateVideo(){
    var serverValue = serverSelect.value;
    if(serverValue == "S2")
    {
        videoIframe.src = "https://louishide.com/e/bmzaont5scvx";
    }
    else
    {
        videoIframe.src = "https://lvturbo.com/e/noqvn29rc8lp";
    }
    
}
