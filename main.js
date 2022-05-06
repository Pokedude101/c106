//https://teachablemachine.withgoogle.com/models/5ntk5znUe/model.json

function startProgram(){
    //access permissions for media devices in your laptop


    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/5ntk5znUe/model.json', modelReady);
}

function modelReady(){
   classifier.classify(gotResults);
}

function gotResults(error, results){
if (error){
    console.error(error);
}
else{
    console.log(results);
    //Math.random() generates number between 0-1(excluding 1)
    //Math.floor will round down the value
    randomnumber_r = Math.floor(Math.random() * 255) + 1;//1-255
    randomnumber_b = Math.floor(Math.random() * 255) + 1;//1-255
    randomnumber_g = Math.floor(Math.random() * 255) + 1;//1-255
    console.log("R: " + randomnumber_r + ", G: " + randomnumber_g + ", B: " + randomnumber_b);
//display the result and accuracy in HTMl elements

    document.getElementById("result").innerHTML = "I can hear: " + results[0].label;
    //toFixed(2) gets 2 values after decimal
    document.getElementById("confidence_of_result").innerHTML = "Accuracy: " + (results[0].confidence*100).toFixed(2) + "%";

    //coloring text
    document.getElementById("result").style.color = "rgb("+randomnumber_r+","+randomnumber_g+", "+randomnumber_b+")";
    document.getElementById("confidence_of_result").style.color = "rgb("+randomnumber_r+","+randomnumber_g+", "+randomnumber_b+")"; 

    //making aliens dance
    
    img1 = document.getElementById('alien1');
    img2 = document.getElementById('alien2');
    img3 = document.getElementById('alien3');
    img4 = document.getElementById('alien4')

    //if its a clap sound we will make alien 1 dance 
    if(results[0].label=="Clap"){
    console.log("user is clapping");
    img1.src = 'aliens-01.gif';
    img2.src = 'aliens-02.png';
    img3.src = 'aliens-03.png';
    img4.src = 'aliens-04.png';
    }


     //if it is a background noise we will make 4th alien dance
    else if(results[0].label=="Background Noise"){
    console.log("user has background noise");
    img1.src = 'aliens-01.png';
    img2.src = 'aliens-02.png';
    img3.src = 'aliens-03.png';
    img4.src = 'aliens-04.gif';
    }

    //if it is a Slam we will make 2nd alien dance
    else if(results[0].label=="Slam"){
        console.log("user is slamming the ground");
        img1.src = 'aliens-01.png';
        img2.src = 'aliens-02.gif';
        img3.src = 'aliens-03.png';
        img4.src = 'aliens-04.png';
        }

    //if it is a Bell we will make 3rd alien dance
    else{
        console.log("user is shaking their bell");
        img1.src = 'aliens-01.png';
        img2.src = 'aliens-02.png';
        img3.src = 'aliens-03.gif';
        img4.src = 'aliens-04.png';
        }

    

}
}
