function adduser(){
    player1=document.getElementById("player1_name").value;
    player2=document.getElementById("player2_name").value;
    localStorage.setItem("player1_key",player1);
    localStorage.setItem("player2_key",player2);
    window.location="game_page.html";
}
