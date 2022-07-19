$(document).ready(function(){
    $('#bot_cad_right').on('click', function(){ //Quando for clicado no botão de cadastrar do lado de LOGIN, mande o usuário para o lado de cadastro e executa as animações responsáveis para tal efeito acontecer.
      $('#slideBox').animate({
        'marginLeft' : '0'
      });
      $('.topLayer').animate({
        'marginLeft' : '100%'
      });
    });
    //Ações referentes a quando o usuário clicar no botão de login do lado de INSCREVA-SE. Isso fará ele voltar para a tela de Login novamente. Na qual será feito as respectivas animações abaixo.
    $('#bot_login_esq').on('click', function(){
      $('#slideBox').animate({
        'marginLeft' : '50%'
      });
      $('.topLayer').animate({
        'marginLeft': '0'
      });
    });
  });