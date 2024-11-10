function detectcharacter(){
    const characterInput = document.getElementById("input-text");
    const result = document.getElementById("result");

    const character = characterInput.value;

    if(character.charCodeAt(0) <=127){
        result.innerText ="The entered character is an ASCII character"
    } else{
        result.innerHTML="The entered character is a unicode character"
    }

    // function isASCII(character){
    //     return character.charCodeAt(0) <=127;
    // }
}