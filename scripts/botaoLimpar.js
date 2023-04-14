document.getElementById("botao2").style.display = "none";

var urso = document.getElementById("mensagem").style.background = "none"; 


var resetMensagem = document.getElementById("mensagem").value;


document.getElementById("limpar").addEventListener("click", function () {

   
    document.getElementById("text-resultado").value;
    
    document.getElementById("mensagem").value = " ";

    
    function atualizaTela() {
        
        document.getElementById("botao2").style.display = "none";
        

        document.getElementById("text-resultado").value = resetResultado;
        document.getElementById("mensagem").value = resetMensagem;

       
        function atualizaTela() {
            urso = document.getElementById("mensagem").style.background = ""; 
        }
        setTimeout(atualizaTela, 1000);

       
        function atualizaTela2() {
            urso = document.getElementById("mensagem").style.background = "none"; 
        }

        setTimeout(atualizaTela2, 5000);
    }
    setTimeout(atualizaTela, 500); 
    
})