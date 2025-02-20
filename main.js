function starClasification ()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/XzD12GtkA/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);

        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="Escucho -" + results[0].label;
        document.getElementById("result_confidence").innerHTML="Presición -" + (results[0].confidence*100).toFixed(2) + " %";
        document.getElementById("result_label").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb(" + random_number_r+","+random_number_g+","+random_number_b+")";

        img=document.getElementById('ba')
        img=document.getElementById('be')
        img=document.getElementById('bi')
        img=document.getElementById('bo')
        img=document.getElementById('bu')
        
        
        switch (results[0].label) {
            case "ba":
            case "be":
            case "bi":
            case "bo":
            case "bu":
            case "da":
            case "de":
            case "di":
            case "do":
            case "du":
            case "ga":
            case "ge":
            case "gi":
            case "go":
            case "gu":
            case "la":
            case "le":
            case "li":
            case "lo":
            case "lu":
            case "ma":
            case "me":
            case "mi":
            case "mo":
            case "mu":
            case "pa":
            case "pe":
            case "pi":
            case "po":
            case "pu":
            case "sa":
            case "se":
            case "si":
            case "so":
            case "su":
            case "ta":
            case "te":
            case "ti":
            case "to":
            case "tu":
              img.src = 'boy2.jpg';
              break;
            default:
              img.src = 'boy2.jpg';
          }
          


    }
    

}