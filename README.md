# RTCas
A WebRTC handler

# How to use
```javascript
var rtcas = new RTCas();
var stream = rtcas.getMedia({audio: true , video: true});
rtcas.assignTo("#video" , stream);
```
