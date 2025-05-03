function buttonSize(){
    alert("Hello, world!");
    document.getElementById("textingSize").style.fontSize = "24pt";
}

function changingRadioOption(){
    if(document.getElementById("fancy").checked){
        alert("Radio on fancy")
        document.getElementById("textingSize").style.fontWeight = "bold";
        document.getElementById("textingSize").style.color = "blue";
        document.getElementById("textingSize").style.textDecoration = "underline";

    }
    else if(document.getElementById("boring").checked){
        alert("Radio on boring")
        document.getElementById("textingSize").style.fontWeight = "normal";
        document.getElementById("textingSize").style.color = "black";
        document.getElementById("textingSize").style.textDecoration = "none";
    }
}


function moo(){
    const mooText = document.getElementById("textingSize");

    let words = mooText.value.toUpperCase();
    const trimmingText = words.split(".")
                        .map(x => x.trim())
                        .filter(Boolean);

    const sentenceJoin = trimmingText.map(wordText =>
        {
            const texts = wordText.split(" ");
            if(texts.length > 0){
                texts[texts.length - 1] += "-Moo";
            }
            return texts.join(" ");
            
        }
    )
    if(words.endsWith(".")){
        mooText.value = sentenceJoin.join(". ");
    }
    else{
        mooText.value = sentenceJoin.join(". ") + ".";
    }
}