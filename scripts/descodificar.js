document.getElementById("botao2").style.display = "none"; 
var resetResultado = document.getElementById("text-resultado").value;
var resetMensagem = document.getElementById("mensagem").value;


document.getElementById("botaoDescodificar").addEventListener("click", function () {

    
    document.getElementById("botao2").style.display = "block";
    

    var texto = document.getElementById("mensagem").value;
    
    function mudarLetra(texto) {

       
        function ContemCharEspecial(caracter) {
            const charEspecial = /[`!@#$%^&*()_+\-=\[\]{};':"+\\|,<>\/?~1234567890]/;
            return charEspecial.test(caracter);
        }

       
        function containUppercase(str) {
            return /[A-Z]/.test(str);
        }

        if (ContemCharEspecial(texto) || containUppercase(texto)) {

            alert('✅ Só pode Letras Minúsculas e sem Acentos!!!');

           
            function atualizaTela() {
            document.getElementById("botao2").style.display = "none";

            document.getElementById("text-resultado").value = resetResultado;
            document.getElementById("mensagem").value = resetMensagem;
            }
            setTimeout(atualizaTela, 10); 

            document.getElementById("mensagem").style.background = ""; 
           
            function atualizaTelaUrso() {
                document.getElementById("mensagem").style.background = "none"; 
            }
            setTimeout(atualizaTelaUrso, 3000);
            
        } else {

      
            if(texto == texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {
    
                
                texto = texto.replaceAll('enter', 'e')
                                .replaceAll('imes', 'i')
                                    .replaceAll('ai', 'a')
                                        .replaceAll('ober', 'o')
                                            .replaceAll('ufat', 'u');
                
                return texto;

                 
            } else if(texto.includes(caracteres[a])) {
    
                alert("ERRO NÃO PODE ACENTOSS!!!");

                
                function atualizaTela() {
                    
                    document.getElementById("botao2").style.display = "none";
                    

                    document.getElementById("text-resultado").value = resetResultado;
                    document.getElementById("mensagem").value = resetMensagem;
                }
                setTimeout(atualizaTela, 10); 
            }
        }
    }
    
    document.getElementById("text-resultado").value = mudarLetra(texto);
    
})