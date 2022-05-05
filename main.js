Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90,
})

var camera = document.getElementById("camera")

Webcam.attach(camera)

function take_snapshot() {
    Webcam.snap(function (data_urI) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src ="' + data_urI + '"/>'
    })
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/QaTIcT2LI/model.json", model_loaded)

function model_loaded() {
    console.log("model loaded")
}
function chack() {
    img = document.getElementById("capture_image")
    classifier.classify(img, gotresult)
}

function speak(){
synth = window.speechSynthesis;
speak_data = "the first prediction is "+prediction_1+" and second prediction is "+prediction_2
utterThis = new SpeechSynthesisUtterance(speak_data)
synth.speak(utterThis)
}

function gotresult(error, result) {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
        document.getElementById("result_emoji_name").innerHTML = result[0].label
        document.getElementById("result_emoji_name2"),innerHTML = result[1],label
        prediction_1 = result[0].label
        prediction_2 = result[1].label
        speak()
        if(result[0].label =="thumbsup"){
            document.getElementById("update_emoji").innerHTML = "&#9994;"
        }
        if(result[0].label =="thumbsdown"){
            document.getElementById("update_emoji").innerHTML = "&#9996;"
        }
        if(result[0].label =="wow"){
            document.getElementById("update_emoji").innerHTML = "&#128076;"
        }
        if(result[0].label =="punch"){
            document.getElementById("update_emoji").innerHTML = "&#128077;"
        }


        if(result[1].label =="thumbsup"){
            document.getElementById("update_emoji2").innerHTML = "&#9994;"
        }
        if(result[1].label =="thumbsdown"){
            document.getElementById("update_emoji2").innerHTML = "&#9996;"
        }
        if(result[1].label =="wow"){
            document.getElementById("update_emoji2").innerHTML = "&#128076;"
        }
        if(result[1].label =="punch"){
            document.getElementById("update_emoji2").innerHTML = "&#128077;"
        }
    }
}


