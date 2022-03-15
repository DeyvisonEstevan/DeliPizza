var slideIndex = 1;
mostraSlides(slideIndex);

function adicionaSlides(n){
    mostraSlides(slideIndex += n);
    console.log(slideIndex);
}

function atualSlides(n){
    mostraSlides(slideIndex = n);
    console.log(slideIndex);
}

function mostraSlides(n){
    var i;
    var slides = document.getElementsByClassName("slides");
    var rec = document.getElementsByClassName("slides");

    if(n > slides.length) {slideIndex = 1}
    if(n < 1) {slideIndex = slides.length}

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for(i = 0; i < rec.length; i++) {
        rec[i].className = rec[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    rec[slideIndex - 1].className += " active";
    console.log(slideIndex);
}

function validaSenha(){
    var campoSenha = document.getElementById("txtSenha");
    var valorSenha = txtSenha.value;

    if(valorSenha.length < 6){
        document.getElementById("txtSenha").style.color="red"
        alert("Senha precisa ter ao menos 6 caracteres");
        return false;
    }

    else if(valorSenha.length == 0){
        alert("Digite sua senha");
        return false;
    }

    else
    {  
        document.getElementById("txtSenha").style.color="black"
        return true;
    }
}

function validaEmail(){
    var campoEmail = document.getElementById("txtEmail");

    if(campoEmail.value == "" || campoEmail.value.indexOf('@') == -1 || campoEmail.value.indexOf('.') == -1){
        alert("Preencha corretamente seu email");
        return false;
    }
    else
    {  
        return true;
    }
}
