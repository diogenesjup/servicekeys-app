class App {

    constructor(appId, appName, appVersion, appOs, ambiente, token, tokenSms) {

        this.appId = appId;
        this.appName = appName;
        this.appVersion = appVersion;        
        this.appOs = appOs;

        this.views = new Views();
        this.sessao = new Sessao();
        this.models = new Models();
        this.helpers = new Helpers();

        

        if(ambiente=="HOMOLOGACAO"){
             
            this.urlDom = "http://127.0.0.1:8080/services-keys/public_html/app/app/www/";
            this.urlApi = "http://127.0.0.1:8080/services-keys/public_html/app/api/";
            this.urlCdn = "http://127.0.0.1:8080/services-keys/public_html/app/cdn/";

        }
        if(ambiente=="PRODUCAO"){

            this.urlDom = "https://servicekeys.com.br/app/www/";
            this.urlApi = "https://servicekeys.com.br/apiservicekeys/";
            this.urlCdn = "https://servicekeys.com.br/cdn/";

        }

        this.urlApiPagto = "https://pay.servicekeys.com.br/api-pagamentos/";

        this.token = token;
        this.tokenSms = tokenSms;
        
    }
    
    getVersion() {

        return this.appVersion;
    }

    getOs(){

        return this.appOs;
    }
    
    initApp(elemento){

        this.views.viewPrincipal();

        // VERIFICAR SE A API ESTÁ OK
        this.models.testeApi();
        
        // VERIFICAR SE O USUÁRIO ESTÄ LOGADO
        this.sessao.verificarLogado();

    }

    inicio(){

        this.views.viewPrincipal();
        this.views.ativarMenuUm();

    }

    login(idUsuario,emailUusario,dadosUsuario){
   
        this.sessao.logarUsuario(idUsuario,emailUusario,dadosUsuario);
   
    }

    verificarCodigoSms(){

        this.views.viewCodigoSms();

    }

    procVerificarSms(){
        
       this.models.verificarCodigoSms(); 

    }
    
    procLoginSms(){

        this.models.procLoginSms();
   
    }

    procLogin(){

        this.models.procLogin();
   
    }
    
    procLogoff(){

        confirmacao("Tem certeza que deseja sair?","Você será desconectado...","app.logoff();","Sim, sair");
        
    }

    logoff(){
       
        localStorage.clear();
        app.viewLogin();

    }

    cadastro(){
        this.views.viewCadastro();
        this.views.desativarTodosMenus();
    }

    viewLoginEmailSenha(){
        this.views.viewLoginEmailSenha();
    }

    procCadastro(){
        this.models.procCadastro();
    }


    esqueciMinhaSenha(){
        this.views.viewEsqueciMinhaSenha();
        this.views.desativarTodosMenus();
    }

    procResetSenha(){
        this.models.procResetSenha();
    }

    

    selecaoPerfil(){

        event.preventDefault();

        var tipoPerfil = $('input[name=tipoPerfil]:checked').val();

        if(tipoPerfil=="cliente"){

            app.opcoesCarretamentoPerfilCliente();

        }else{

            this.views.viewPrincipalProfissional();

        }

    }

    opcoesCarretamentoPerfilCliente(){

        this.views.viewPrincipalCliente();
        this.models.categoriasAtendimento();

    }

    // PASSO 2 DO ATENDIMENTO
    novoAtendimentoPasso2(idCategoria,nomeCategoria){

        // DESCOBRIR SE A CATEGORIA TEM CATEGORIAS FILHAS, 
        var categorias = JSON.parse(localStorage.getItem("categoiasAtendimento"));


        $("#listaDeCategorias").html(`

            <li>
               <a href="javascript:void(0)" onclick="app.novoAtendimentoPasso3(${idCategoria},'${nomeCategoria}')" title="${nomeCategoria}">
                  <b>${nomeCategoria}</b> <img src="assets/images/right.svg" alt="Ver mais">
               </a>
            </li>

            <li class="carregandoCategorias" style="text-align:left;font-size:13px;">
                <img src="assets/images/loading.gif" alt="Carregando" style="width:17px;margin-right:5px;float:none;" /> Carregando
            </li>

        `);

        var n = "";
        var entrei = 0;
        
        // VARRER AS CATEGORIAS
        for(var i = 0;i<categorias.categorias.length;i++){

             if(categorias.categorias[i].relacao.length>0){

                for(var j = 0;j<categorias.categorias[i].relacao.length;j++){

                    if(categorias.categorias[i].relacao[j]==idCategoria){

                        $("#fraseDeAbertura").fadeOut(1);

                        entrei = 1;

                        n = categorias.categorias[i];

                        $(".carregandoCategorias").remove();
                        $("#listaDeCategorias").append(`

                            <li>
                                <a href="javascript:void(0)" onclick="app.novoAtendimentoPasso3(${n.id},'${n.titulo}')" title="${n.titulo}">
                                   ${n.titulo} <img src="assets/images/right.svg" alt="Ver mais">
                                </a>
                            </li>

                        `);

                    }

                }


             }// FINAL DO IF DO TAMANHO

        }// FINAL DO FOR

        app.views._content.append(`
                <p style="text-align:center;font-size:11px;padding-top:20px;">
                    <a href="javascript:void(0)" onclick="app.opcoesCarretamentoPerfilCliente();" title="VOLTAR AO INÍCNIO" style="color:#747474;text-decoration:none;">VOLTAR AO INÍCIO</a>
                </p>
        `);

        if(entrei==0){
            
            localStorage.setItem("tipoHistoricoCategoria","pai");
            app.novoAtendimentoPasso3(idCategoria,nomeCategoria);
        
        }


    }
    


    novoAtendimentoPasso3(idCategoria,nomeCategoria){

        localStorage.setItem("idCategoriaHistorico",idCategoria);
        localStorage.setItem("nomeCategoria",nomeCategoria);

        this.views.novoAtendimento(idCategoria,nomeCategoria);

    }

    enviarAtendimento(){

        this.models.enviarAtendimento();

    }


    
/**
*  ------------------------------------------------------------------------------------------------
*
*
*   FILTRO TABELA GERAIS
*
*
*  ------------------------------------------------------------------------------------------------
*/
filtrotabela(){

                  var input, filter, ul, li, a, i;
                  
                  input = document.getElementById('filtroTabela');
                  filter = input.value.toUpperCase();
                  ul = document.getElementById("listaDeCategorias");

                  li = ul.getElementsByTagName('li');
                  var entrei = 0;

                   for (i = 0; i < li.length; i++) {
                      a = li[i];
                      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                          li[i].style.display = "";
                          entrei = 1;
                      } else {
                          li[i].style.display = "none";
                          
                      }
                  }

                  if($(input).val()==""){
                    $("#fraseDeAbertura").fadeIn(1);
                }else{
                    $("#fraseDeAbertura").fadeOut(1);
                }

                if(entrei==0){

                    $("#listaDeCategorias").append(`

                        <li class="semResultados" style="text-align:left;font-size:13px;">
                            Nenhum resultado encontrado
                        </li>

                    `);

                }else{

                    $(".semResultados").remove();

                }

     }



    viewPrincipalProfissional(){
      
      this.views.viewPrincipalProfissional();

    }

    desbloqAnuncio(){
       
        confirmacao("Oops! Você não tem chaves suficiêntes","Quer enviar um orçamento para esse cliente? Compre agora um pacote de chaves para desbloquear essa e muitos outros anúncios!","app.comprarChaves()","Comprar");

    }

    comprarChaves(){
       
        this.views.viewComprarChaves();

    }

    selecaoPacoteCompra(){

        // SELECIONAR A OPÇÃO ESCOLHIDA
        var pacoteEscolhido = $('input[name=pacote]:checked', '#formPacoteSelecao').val()

        console.log("PACOTE ESCOLHIDO PELO USUÁRIO: "+pacoteEscolhido);

        // DIRECIONAR PARA A TELA DE COMPRA DO PACOTE
        this.views.paginaDeCmopra();

        // CARREGAR O PRECO DO PACOTE ESCOLHIDO
        //this.models.paginaDeCompra();
        
        // DIRECIONAR PARA O DETALHE DO ORÇAMENTO (PROVISORIO)
        //this.views.viewDetalheAnuncio();

    }

    payBoleto(evemt){
         
         
         $("#btnPayBoleto").html("PROCESSANDO...");
         this.views.processandoPagamento();

         this.models.payBoleto();


  

    }

    payCartaoDeCredito(){
        
        $("#btnPayCartao").html("PROCESSANDO...");
        this.views.processandoPagamentoCartao();
        this.models.payCartaoDeCredito();

    }

    dadosBoleto(dados){
        
        this.views.dadosBoleto(dados);

    }


    /* CURSOS */
    cursos(){
       
       this.views.cursos();

    }

    filtrotabelaCursos(){

        var input, filter, ul, li, a, i;
                  
                  input = document.getElementById('buscaCursos');
                  filter = input.value.toUpperCase();
                  ul = document.getElementById("loopCursosLista");

                  li = ul.getElementsByTagName('li');

                  // Loop through all list items, and hide those who don't match the search query
                  for (i = 0; i < li.length; i++) {
                      a = li[i];
                      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                          li[i].style.display = "";
                      } else {
                          li[i].style.display = "none";
                      }
                  }

    }

    
    detalheCurso(idCurso){
      

      this.views.detalheCurso(idCurso);


    }

    detalheAula(idAula){
       
       this.views.detalheAula(idAula);

    }

    concluirAula(idAula){

        this.views.concluirAula(idAula);

    }


    detalheTeste(idTeste){

        this.views.detalheTeste(idTeste);

    }


    corrigirTeste(idTeste){
         
         this.views.corrigirTeste(idTeste);

    }





    /* INDIQUE E GANHE */
    indiqueEGanhe(){
         
         this.views.indiqueEGanhe();

    }



    /* ABRIR OU FECHAR O MENU CLIENTE */
    abrirFecharMenuCliente(){

      if($(".menu-adicional-cliente").hasClass("aberto")){
         
            $(".menu-adicional-cliente").removeClass("aberto");
        
      }else{

            $(".menu-adicional-cliente").addClass("aberto");
        
      }

    }

    /* ABRIR OU FECHAR O MENU PROFISSIONAL */
    abrirFecharMenuProfissional(){

      if($(".menu-adicional-profissional").hasClass("aberto")){
         
            $(".menu-adicional-profissional").removeClass("aberto");
        
      }else{

            $(".menu-adicional-profissional").addClass("aberto");
        
      }

    }


    finalizarServico(){
       
       aviso("Você realizou atendimento para esse cliente?","Apenas confirme o atendimento se você realizou o serviço orçado para esse cliente");

    }




/**
*  ------------------------------------------------------------------------------------------------
*
*
*   EDITAR PERFIL USUARIO LOGADO
*
*
*  ------------------------------------------------------------------------------------------------
*/
    editarPerfil(){

       this.views.editarPerfil();
       this.models.editarPerfil();

    }
    procEditarPerfil(){
       
       this.models.procEditarPerfil();

    }




    view2(){
        this.views.view2();
        this.views.ativarMenuDois();
    }

    view3(){
        this.views.view3();
        this.views.ativarMenuTres();
    }

    viewLogin(){
        this.views.viewLogin();
        this.views.desativarTodosMenus();
    }

    viewUploadFoto(){
        this.views.viewUploadFoto();
        this.views.desativarTodosMenus();
    }

}


class Sessao{
    
	constructor(){
	      
	     this.logado = "nao-logado";
	     this.bdLogado = localStorage.getItem("bdLogado");
	     this.idUsuario = localStorage.getItem("idUsuario");
	     this.emailUsuario = localStorage.getItem("emailUsuario");
	     this.dadosUsuario = localStorage.getItem("dadosUsuario");

	}
    
    logarUsuario(idUsuario,emailUusario,dadosUsuario){
    	this.logado = "logado";
    	this.idUsuario = idUsuario;
    	this.dadosUsuario = dadosUsuario;
    	localStorage.setItem("bdLogado","logado");
        localStorage.setItem("idUsuario",this.idUsuario);
        
        // DIRECIONAR O USUÁRIO PARA O INÍCIO
    	app.inicio();
    }

    verificarLogado(){
      
	      if(this.bdLogado!="logado"){
	      	app.viewLogin();
	      	
	      }

    }

    deslogarUusario(){
    	this.logado = "nao-logado";
    	localStorage.setItem("bdLogado","nao-logado");
    	localStorage.clear();
    }

}