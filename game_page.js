player1name=localStorage.getItem("player1_key");
player2name=localStorage.getItem("player2_key");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1name+" : ";
document.getElementById("player2_name").innerHTML=player2name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="questionturn:"+player1name;
document.getElementById("player_answer").innerHTML="answerturn:"+player2name;

function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word); 

    char_1=word.charAt(1);
    console.log(char_1);
    
    position2=Math.floor(word.length/2);
    char_2=word.charAt(position2);
    console.log(char_2);

    position3=word.length-1;
    char_3=word.charAt(position3);
    console.log(char_3);

    remove_char1=word.replace(char_1,"_");
    console.log(remove_char1);
    
    remove_char2=remove_char1.replace(char_2,"_");
    console.log(remove_char2);

    remove_char3=remove_char2.replace(char_3,"_");
    console.log(remove_char3);
    question="<h4 id='word_display'>q. "+remove_char3+"</h4>";
    inputbox="<br> Answer:<input type='text' id='input_check_box'>";
    checkbutton="<br><br> <button class='btn btn-info' onclick='checkanswer()'>check</button>";
    row=question+inputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}