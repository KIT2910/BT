var player = "x";
for (var i = 1; i <= 36; i++){
    document.getElementById(i.toString()).addEventListener("click", function(){
        if(this.innerHTML === ""){
            this.innerHTML = player;
            if (player === 'x'){
                player = 'o'
            }
            else {
                player = 'x'
            }  
        }
        else
            {
            alert('Ô đã đánh')
        }
    }
)}