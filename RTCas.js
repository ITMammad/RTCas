class RTCas {
    constructor() {
        return "RTCas";
    }

    async getMedia(constraints) {
        if (typeof constraints !== "object") {
            throw "RTCas parameters error!";
        } else {
            let stream = await navigator.mediaDevices.getUserMedia(constraints)
            .then((stream) => {
                return stream;
            })
            .catch((err) => {
                throw err;
            });
        }
    }

    async getDisplay(constraints) {
        if (typeof constraints !== "object") {
            throw "RTCas parameters error!";
        } else {
            let stream = await navigator.mediaDevices.getDisplayMedia(constraints)
            .then((stream) => {
                return stream;
            })
            .catch((err) => {
                throw err;
            });
        }
    }

    assignTo(element , stream) {
        var ele = document.querySelector(element);
        if ("srcObject" in ele) {
            ele.srcObject = stream;
        } else {
            ele.src = window.URL.createObjectURL(stream);
        }
    }
}
