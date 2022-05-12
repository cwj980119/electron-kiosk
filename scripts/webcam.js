function cam_on(){
    function errorCallback(e) {
        console.log('Error', e)
    }
    
    navigator.getUserMedia({video: true, audio: false}, (localMediaStream) => {
        var video = document.querySelector('video#cam')
        video.srcObject = localMediaStream
        video.autoplay = true
    }, (e) => {})
}