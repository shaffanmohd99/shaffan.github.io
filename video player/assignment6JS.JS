var videoPlayer=document.querySelector("#mainVideoID");
var videoOne=document.querySelector("#video1");
var videoTwo=document.querySelector("#video2");
var videoThree=document.querySelector("#video3")
var videoList={
    0:"./assets/Fish - 110879.mp4",
    1:"./assets/Woman - 58142.mp4",
    2:"./assets/Wood Anemones - 112429.mp4"
}
var videoTitle=document.querySelector("#videoTitle");
var videoTitleList={
    0:"This is a fish video",
    1:"This is a pink flower video",
    2:"This is a white flower video"
}
var index=0
const videoController=(parameter)=>{
    switch(parameter){
        case 0:
        if(videoPlayer.paused){
            videoPlayer.play();
        }
        else
            videoPlayer.pause();
    
            break
        case 1:
            videoPlayer.currentTime=0
            break
        case 2:
            if(videoPlayer.volume>0){
            videoPlayer.volume-=0.1
            }
            break
        case 3:
        if(videoPlayer.volume<1){
            videoPlayer.volume+=0.1
            }
            break
        case 4:
            if(index==0){
                videoPlayer.src=videoList[index+1]
                videoTitle.innerHTML=videoTitleList[index+1]
                index++
            }
            else if(index==1){
                videoPlayer.src=videoList[index+1]
                videoTitle.innerHTML=videoTitleList[index+1]
                index++
            }
            else if (index==2){
                videoPlayer.src=videoList[0]
                videoTitle.innerHTML=videoTitleList[0]
                index=0
                console.log(index)
            }
           
            
            // if(videoPlayer.src===videoOne.src){
            //     videoPlayer.src=videoTwo.src
            // }
            // else if (videoPlayer.src===videoTwo.src){
            //     videoPlayer.src=videoOne.src
            // }

            break
    }
  

}
const videoSwitch=(para)=>{
    switch (para){
        case 0:
            videoPlayer.src=videoOne.src;
            videoTitle.innerHTML=videoTitleList[0]
            index=0
            break
        case 1:
            videoPlayer.src=videoTwo.src;
            videoTitle.innerHTML=videoTitleList[1]
            index=1
            break
        case 2:
            videoPlayer.src=videoThree.src;
            videoTitle.innerHTML=videoTitleList[2]
            index=2
            break
    }

}

