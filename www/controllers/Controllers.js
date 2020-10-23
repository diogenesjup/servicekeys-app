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

            this.urlDom = "https://servicekeys.diogenesjunior.com.br/app/www/";
            this.urlApi = "https://servicekeys.diogenesjunior.com.br/api/";
            this.urlCdn = "https://servicekeys.diogenesjunior.com.br/cdn/";

        }

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

            this.views.viewPrincipalCliente();

        }else{

            this.views.viewPrincipalProfissional();

        }

    }

    viewPrincipalProfissional(){
      
      this.views.viewPrincipalProfissional();

    }

    desbloqAnuncio(){
       
        confirmacao("Oops! Você não tem chaves suficiêntes","Quer enviar um orçamento para esse cliente? Compre agora um pacote de chaves para desbloquear essa e muitos outros anúncios!","app.comprarChaves()","Comprar");

    }

    comprarChaves(){
       


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