class Models{
    
    // TESTAR A DISPONIBILIDADE DA API
    testeApi(){

    	      // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"testeapi",
                  data:{token:app.token}
              
              })
              request.done(function (dados) {            

                  console.log("%c VERIFICAÇÃO DE DISPONIBILIDADE DE API","background:#ff0000;color:#fff;");
                  console.log(dados);

                

              });
              request.fail(function (dados) {
                     
                   console.log("API NÃO DISPONÍVEL (apiAtiva)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }
    
    // PROC LOGIN
    procLogin(){
       
       event.preventDefault();

       $("#btnLoginEmailSenha").html("Carregando...");

       var loginUsuario = $("#loginUsuario").val();
       var loginSenha = $("#loginSenha").val();

            // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"login-api",
                  data:{token:app.token,tokenSms:app.tokenSms,loginUsuario:loginUsuario,loginSenha:loginSenha}
              
              })
              request.done(function (dados) {            

                  console.log("%c RETORNO DO LOGIN","background:#ff0000;color:#fff;");
                  console.log(dados);

                  $("#btnLoginEmailSenha").html("Login");
                  
                  if(dados.sucesso=="200"){

                    var dadosUsuario = JSON.stringify(dados);
                     
                     //localStorage.setItem("dadosUsuario",dadosUsuario);
                     //app.login(dados.id,dados.email,dadosUsuario);

                     localStorage.setItem("dadosUsuario",dadosUsuario.dados);
                     
                     

                     localStorage.setItem("nomeUsuario",dados.nome);

                     localStorage.setItem("nomeCompletoUsuario",dados.nome_completo);
                     localStorage.setItem("emailUsuario",dados.email);
                     localStorage.setItem("celularUsuario",dados.celular);

                     app.login(dados.id_usuario,loginUsuario,dadosUsuario.dados);

                  
                  }else{

                     $(".form-control").val("");
                     aviso("Oops! Login ou senha não encontrados","Verifique os dados inseridos e tente novamente!");
                     
                  }
                  
              });
              request.fail(function (dados) {
                     
                   console.log("API NÃO DISPONÍVEL (procLogin)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }

    // PROC LOGIN SMS
    procLoginSms(){
       
       event.preventDefault();

       $("#btnViewLogin").html("Carregando...");

       var loginUsuario = $("#loginUsuario").val();

	          // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"token-sms-login",
                  data:{token:app.token,tokenSms:app.tokenSms,loginUsuario:loginUsuario}
              
              })
              request.done(function (dados) {          

                  $("#btnViewLogin").html("Próximo");  

                  console.log("%c RETORNO DO LOGIN","background:#ff0000;color:#fff;");
                  console.log(dados);

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                  	 
                  	 //localStorage.setItem("dadosUsuario",dadosUsuario);
                  	 //app.login(dados.id,dados.email,dadosUsuario);

                     app.verificarCodigoSms();
                  
                  }else{
                     
                     //$(".form-control").val("");
                     //aviso("Oops! Login ou senha não encontrados","Verifique os dados inseridos e tente novamente!");
                     
                     // SE O CELULAR NAO ESTIVER CADASTRADO
                     // VAMOS DIRECIONAR O USUÁRIO PARA CONCLUIR O CADASTRO
                     
                     // SALVAR O CELULAR PARA O CADASTRO
                     localStorage.setItem("celularCadastro",loginUsuario);

                     app.cadastro();

                  }
                  
              });
              request.fail(function (dados) {
                     
                   console.log("API NÃO DISPONÍVEL (procLogin)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }

    // VERIFICAR O CÓDIGO SMS ENVIADO PELO USUÁRIO
    verificarCodigoSms(){

      event.preventDefault();

      $("#btnConfirmarCodigo").html("Processando...");

       var codigoSms = $("#codigoSms").val();

              // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"verificar-sms",
                  data:{token:app.token,codigoSms:codigoSms}
              
              })
              request.done(function (dados) {            

                  console.log("%c RETORNO DA VERIFICACAO DO CODIGO DE SMS","background:#ff0000;color:#fff;");
                  console.log(dados);

                  var dadosUsuario = JSON.stringify(dados);

                  $("#btnConfirmarCodigo").html("Confirmar código");
                  
                  if(dados.sucesso=="200"){
                     
                     localStorage.setItem("dadosUsuario",dados.usuarios[0].data);
                     
                     

                     localStorage.setItem("nomeUsuario",dados.nome);

                     localStorage.setItem("nomeCompletoUsuario",dados.nome_completo);
                     localStorage.setItem("emailUsuario",dados.email);
                     localStorage.setItem("celularUsuario",dados.celular);

                     app.login(dados.id_usuario,dados.email,dados.usuarios[0].data);
                  
                  
                  }else{
                     
                     $(".form-control").val("");
                     aviso("Oops! Código incorreto","Verifique o código recebido e tente novamente. Se ainda tiver dificuldades, tente entrar com o e-mail e senha.");
                     
                  }
                  
              });
              request.fail(function (dados) {
                     
                   console.log("API NÃO DISPONÍVEL (verificarCodigoSms)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }


    // PROC CADASTRO
    procCadastro(){

      event.preventDefault();

      $("#btnViewCadastro").html("Carregando...");
       
      var cadastroNome = $("#cadastroNome").val();
      var cadastroEmail = $("#cadastroEmail").val();
      var cadastroSenha = $("#cadastroSenha").val();
      var cadastroCelular = localStorage.getItem("celularCadastro");

              // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"cadastro-usuarios",
                  data:{token:app.token,cadastroCelular:cadastroCelular,cadastroNome:cadastroNome,cadastroEmail:cadastroEmail,cadastroSenha:cadastroSenha}
              
              })
              request.done(function (dados) {            

                  console.log("%c RETORNO DO CADASTRO","background:#ff0000;color:#fff;");
                  console.log(dados);

                  $("#btnViewCadastro").html("Cadastrar");

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                     
                      localStorage.setItem("dadosUsuario",dadosUsuario);
                      localStorage.setItem("nomeUsuario",dados.nome);
                    

                      localStorage.setItem("nomeCompletoUsuario",dados.nome_completo);
                      localStorage.setItem("emailUsuario",dados.email);
                      localStorage.setItem("celularUsuario",dados.celular);
  
                      // SE DEU TUDO CERTO, VAMOS LOGAR O USUÁRIO
                      app.login(dados.id,dados.email,dadosUsuario);

                      aviso("Bem vindo!","Seu cadastro foi realizado com sucesso, você já pode aproveitar as vantagens do nosso aplicativo.")
                       
                  
                  }else{
                     
                     aviso("Oops! Esse e-mail já está cadastrado na nossa plataforma","Verifique os dados inseridos e tente novamente! Caso tenha esquecido sua senha, clique no link \"Esqueci Senha\" na tela de login.");
                  
                  }
                  
              });
              request.fail(function (dados) {
                     
                   console.log("API NÃO DISPONÍVEL (procCadastro)");
                   console.log(dados);
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX

    }


    procResetSenha(){

              event.preventDefault();

              $("#btnViewResetarSenha").html("Processando...");
               
              var resetEmail = $("#resetEmail").val();

              // INICIO CHAMADA AJAX
              var request = $.ajax({

                  method: "POST",
                  url: app.urlApi+"reset-senha",
                  data:{token:app.token,resetEmail:resetEmail}
              
              })
              request.done(function (dados) {            

                  console.log("%c RETORNO DO RESET","background:#ff0000;color:#fff;");
                  console.log(dados);

                  $("#btnViewResetarSenha").html("Resetar senha");

                  var dadosUsuario = JSON.stringify(dados);
                  
                  if(dados.sucesso=="200"){
                     
                     app.viewLogin();
                     aviso("Deu certo! Senha resetada","Enviamos para o seu e-mails instruções sobre o reset de senha.");
                     $("#btnViewResetarSenha").html("Resetar senha");

                  }else{
                     
                     aviso("Oops! E-mail não encontrado","Seu e-mail não foi localizado na plataforma. Verique as informações inseridas e tente novamente.");
                  
                  }
                  
              });
              request.fail(function (dados) {
                     
                   console.log("API NÃO DISPONÍVEL (ResetDeSenha)");
                   console.log(dados);
                   $("#btnViewResetarSenha").html("Resetar senha");
                   aviso("Oops! Algo deu errado","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos");

              });
              // FINAL CHAMADA AJAX


    }






/**
*  ------------------------------------------------------------------------------------------------
*
*
*   EDITAR ACESSO USUARIO PERFIL LOGADO
*
*
*  ------------------------------------------------------------------------------------------------
*/
    editarPerfil(){

      var idUsuario = localStorage.getItem("idUsuario");

      let xhr = new XMLHttpRequest();
       
      /* CONFIGURAÇÕES */
      //xhr.open('GET', app.urlApi+'admin-editarPerfil.php');
      xhr.open('POST', app.urlApi+'editar-perfil',true);
      xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

      var params = 'idUsuario='+idUsuario+"&token="+app.token;

      /*

        Então, quais são os estados possíveis de um requisição AJAX? Listaremos abaixo os estados:
        0: requisição ainda não iniciada
        1: conexão com o servidor estabelecida
        2: requisição recebida
        3: processando requisição
        4: requisição está concluída e a resposta está pronta
        O estado 4 é o que mais nos interessa, porque é nele que temos acesso à resposta enviada pelo servidor.

      */
      
      xhr.onreadystatechange = () => {
          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("DADOS RETORNADOS EDITAR PERFIL");
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

                  if(dados.sucesso==200){

                    $(".placeholder").hide(0);
                    $(".form").fadeIn(500);
                    
                    $("#editarPerfilNome").val(dados.nome);
                    $("#editarPerfilEmail").val(dados.dados[0].user_email);
                    $("#editarPerfilCelular").val(dados.celular);
                    
                    // CARREGAR MASCARAS
                    app.helpers.carregarMascaras();

                  }else{
                    
                    aviso("Oops! Algo deu errado!","Nossos servidores estão passando por dificuldades técnicas, tente novamente em alguns minutos.");

                  }


            }else{
              
              console.log("SEM SUCESSO editarPerfil()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      };

      /* EXECUTA */
      xhr.send(params);


    }
    
    
    procEditarPerfil(){
        
        $("#btnEditar").html("Processando...");
        $(".form-control").attr("readonly","true");

        // CAPTURAR OS DADOS DO FORMULÁRIO
        var dados = $('#formEditarPerfil').formSerialize();
        var idUsuario = localStorage.getItem("idUsuario");
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'proc-editar-perfil',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&"+dados;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("OPERAÇÃO REALIZADA COM SUCESSO");
              console.log(JSON.parse(xhr.responseText));
              aviso("Deu certo!","As informações foram atualizadas.");

            }else{
              
              console.log("SEM SUCESSO procEditarPerfil()");
              console.log(JSON.parse(xhr.responseText));

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnEditar").html("Atualizar");
      $(".form-control").removeAttr("readonly");


    }

/**
*  ------------------------------------------------------------------------------------------------
*
*
*   BUSCAR AS CATEGORIAS DE ATENDIMENTO
*
*
*  ------------------------------------------------------------------------------------------------
*/
categoriasAtendimento(){

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();

        var idUsuario = localStorage.getItem("idUsuario");
         
        xhr.open('POST', app.urlApi+'categorias-atendimento',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("BUSCA DAS CATEGORIAS DE ATENDIMENTO");
              console.log(JSON.parse(xhr.responseText));
              
              var dados = JSON.parse(xhr.responseText);

              // SALVAR AS CATEGORIAS NA MEMORIA
              localStorage.setItem("categoiasAtendimento",JSON.stringify(dados));

              $("#listaDeCategorias").html(`

                  ${dados.categorias.map((n) => {

                      if(n.relacao.length==0){

                              return `
                                  
                                 <li>
                                     <a href="javascript:void(0)" onclick="app.novoAtendimentoPasso2(${n.id},'${n.titulo}')" title="${n.titulo}">
                                      ${n.titulo} <img src="assets/images/right.svg" alt="Ver mais">
                                     </a>
                                  </li>

                              `
                       }

                       }).join('')}

              `);
              

            }else{
              
              console.log("SEM SUCESSO categoriasAtendimento()");
              console.log(JSON.parse(xhr.responseText));
              aviso("Oops! Algo deu errado.","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);



}


/**
*  ------------------------------------------------------------------------------------------------
*
*
*   ENVIAR O ATENDIMENTO
*
*
*  ------------------------------------------------------------------------------------------------
*/
enviarAtendimento(){

        // CAPTURAR OS DADOS DO FORMULÁRIO
        var dados = $('#formularioNovoAtendimento').formSerialize();

        var idUsuario = localStorage.getItem("idUsuario");
        var nomeCompletoUsuario = localStorage.getItem("nomeCompletoUsuario");
        var emailUsuario = localStorage.getItem("emailUsuario");
        var celularUsuario = localStorage.getItem("celularUsuario");

        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();

        var idUsuario = localStorage.getItem("idUsuario");
         
        xhr.open('POST', app.urlApi+'enviar-atendimento',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     '&nomeCompletoUsuario='+nomeCompletoUsuario+ 
                     '&emailUsuario='+emailUsuario+ 
                     '&celularUsuario='+celularUsuario+ 
                     '&dados='+dados+ 
                     "&token="+app.token;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("RETORNO SALVAR ATENDIMENTO");
              console.log(JSON.parse(xhr.responseText));
              
              var dados = JSON.parse(xhr.responseText);
              aviso("Deu certo!","Você receberá em breve orçamentos vindos dos nossos parceiros!");
              app.opcoesCarretamentoPerfilCliente();

            }else{
              
              console.log("SEM SUCESSO enviarAtendimento()");
              console.log(JSON.parse(xhr.responseText));
              aviso("Oops! Algo deu errado.","Nossos servidores estão passando por dificuldades, tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

}




/**
*  ------------------------------------------------------------------------------------------------
*
*
*   PAGAMENTO
*
*
*  ------------------------------------------------------------------------------------------------
*/
payBoleto(){
      
        // CAPTURAR OS DADOS DO FORMULÁRIO
        var dados = $('#formPayBoleto').formSerialize();

        var idUsuario = localStorage.getItem("idUsuario");

        //var dadosUsuario = JSON.parse(localStorage.getItem("dadosUsuario"));

        var nome = localStorage.getItem("nomeCompletoUsuario");
        var celular = localStorage.getItem("celularUsuario");
        var email = localStorage.getItem("emailUsuario");

        console.log(nome);
        console.log(celular);
        console.log(email);
       
        // CONFIGURAÇÕES AJAX VANILLA
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'payboleto',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&tokenSms="+app.tokenSms+
                     "&"+dados+
                     "&nome="+nome+
                     "&celular="+celular+
                     "&email="+email;
        
        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("RETORNO PAGAMENTO BOLETO: ");
              //console.log(xhr.responseText);
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);

              if(dados.sucesso==200){
                  app.views.dadosBoleto(dados.dados_boleto);
              }else{
                  aviso("Oops! Algo deu errado","Tente novamente dentro de alguns minutos. Essa é a mensagem de erro: "+dados.description);
                  app.viewPrincipalProfissional();
              }

              

            }else{
              
              console.log("SEM SUCESSO payBoleto()");
              console.log(xhr.responseText);

              aviso("Oops! Algo deu errado","Tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      /* EXECUTA */
      xhr.send(params);

      $("#btnPayBoleto").html("PAGAR COM BOLETO");



}



payCartaoDeCredito(){

        // CAPTURAR OS DADOS DO FORMULÁRIO
        var dados = $('#formPayBoleto').formSerialize();

        var idUsuario = localStorage.getItem("idUsuario");

        var dadosUsuario = JSON.parse(localStorage.getItem("dadosUsuario"));

        var nome = localStorage.getItem("nomeCompletoUsuario");
        var celular = localStorage.getItem("celularUsuario");
        var email = localStorage.getItem("emailUsuario");

        var pagtoCCNumero    = $("#pagtoCCNumero").val();
        pagtoCCNumero = pagtoCCNumero.replace("-","");

        var pagtoCCNome      = $("#pagtoCCNome").val();
        var pagtoCCNumeroCPF = $("#pagtoCCNumeroCPF").val();
        
        var pagtoCCValidade  = $("#pagtoCCValidade").val();
        pagtoCCValidade = pagtoCCValidade.split("/");

        var mesValidade = pagtoCCValidade[0];
        var anoValidade = pagtoCCValidade[1];

        var pagtoCCCvv       = $("#pagtoCCCvv").val();


        console.log(nome);
        console.log(celular);
        console.log(email);
        console.log(pagtoCCNumero);
        console.log(mesValidade);
        console.log(anoValidade);
        console.log(app.tokenSms);

        
       
        // CONFIGURAÇÕES AJAX VANILLA
        
        let xhr = new XMLHttpRequest();
         
        xhr.open('POST', app.urlApi+'cartaodecredito',true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        var params = 'idUsuario='+idUsuario+
                     "&token="+app.token+
                     "&tokenSms="+app.tokenSms+
                     "&"+dados+
                     "&nome="+nome+
                     "&celular="+celular+
                     "&email="+email+
                     "&pagtoCCNumero="+pagtoCCNumero+
                     "&pagtoCCNome="+pagtoCCNome+
                     "&pagtoCCNumeroCPF="+pagtoCCNumeroCPF+
                     "&pagtoCCValidade="+pagtoCCValidade+
                     "&mesValidade="+mesValidade+
                     "&anoValidade="+anoValidade+
                     "&pagtoCCCvv="+pagtoCCCvv;

        // INICIO AJAX VANILLA
        xhr.onreadystatechange = () => {

          if(xhr.readyState == 4) {

            if(xhr.status == 200) {

              console.log("RETORNO PAGAMENTO CARTAO");
              //console.log(xhr.responseText);
              console.log(JSON.parse(xhr.responseText));

              var dados = JSON.parse(xhr.responseText);
              
              // DIRECIONAR PARA QUANDO O PAGAMENTO FOR CONFIRMADO 
              if(dados.sucesso==200 && dados.dados_cobranca_cc.status=="CONFIRMED"){

                  setTimeout(function(){ 
           
                     app.views.dadosCartao(dados.dados_cobranca_cc.invoiceUrl);

                  }, 3000);

              // DIRECIONAR PARA QUANDO O PAGAMENTO TIVER DADO PROBLEMA (NÃO AUTORIZADO OU PENDENTE)
              }else{

                setTimeout(function(){ 
           
                     app.views.dadosCartaoPendente(dados.erro);

                  }, 3000);

              }


            }else{
              
              console.log("SEM SUCESSO payCartaoDeCredito()");
              console.log(JSON.parse(xhr.responseText));

              aviso("Oops! Algo deu errado","Tente novamente em alguns minutos.");

            }

          }
      }; // FINAL AJAX VANILLA

      xhr.send(params);
      


}



}