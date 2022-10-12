let numeroCpu;
let numeroUsuario = [];
let tentativas = 0;
let maxTentativas = 6;


function newgame(){
  window.location.reload()
}

function inicio() {
  numeroCpu = Math.floor(Math.random() * 100 + 1);
   //console.log(numeroCpu);
}

function compara() {
  const numeroDig = Number(document.getElementById('inputBox').value);
  //adicionando o número digitado na array vazia
  //usando o push
  numeroUsuario.push(' ' + numeroDig);
  //retornando o numero digitado no html 
  document.getElementById('guesses').innerHTML= numeroUsuario;


  if(tentativas < maxTentativas){
    if(numeroDig > numeroCpu){
      document.getElementById('textOutput').innerHTML ='Um pouco menos';
      document.getElementById('inputBox').value = '';
      tentativas++
      document.getElementById('attempts').innerHTML = tentativas;
    }else if(numeroDig < numeroCpu){
      document.getElementById('textOutput').innerHTML ='Um pouco mais';
      document.getElementById('inputBox').value = '';
      tentativas++
      document.getElementById('attempts').innerHTML = tentativas;
    }else{
      document.getElementById('textOutput').innerHTML ='Você acertou, BRABO MESMO! haha';
      tentativas++
      document.getElementById('attempts').innerHTML = tentativas;
      document.getElementById('inputBox').setAttribute('Readonly', 'Readonly');
      let video = document.getElementById('./cor/confete.mp4')
      document.body.style = video
    }

  }else{
    document.getElementById('textOutput').innerHTML ='Você é ruim hein mano, o múmero era:' + numeroCpu;
    document.getElementById('inputBox').setAttribute('Readonly', 'Readonly');
  }

 

}