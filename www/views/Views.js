class Views{
    
	constructor(){
	      
	     this._content = $("section#content"); 

	     this._allMenus = $("footer * a");
	     this._menu1 = $("footer .menu-1 a");
	     this._menu2 = $("footer .menu-2 a");
	     this._menu3 = $("footer .menu-3 a");

       this.header = $("header");
       this.footer = $("footer");

	}

	animarTransicao(){
		new WOW().init();
	}  

    viewPrincipal(){

            this._content.html(`
            
               <div class="row view-inicial inicial" view-name="view-dashboard">
                  <div class="col-12 wow fadeInUp" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <h2>
                      Qual tipo de perfil você deseja acessar?
                     </h2>

                     <form method="post" action="javascript:void(0)" onsubmit="app.selecaoPerfil(event)">

                           <div class="form-check">
                              <input class="form-check-input" type="radio" name="tipoPerfil" id="tipoServicoCliente" value="cliente" checked>
                              <label class="form-check-label" for="tipoServicoCliente">
                                <img src="assets/images/profile.svg" alt="Encontrar profissionais" /> Encontrar profissionais
                              </label>
                           </div>

                           <div class="form-check">
                              <input class="form-check-input" type="radio" name="tipoPerfil" id="tipoServicoPro" value="profissionais">
                              <label class="form-check-label" for="tipoServicoPro">
                                <img src="assets/images/simbolo.svg" alt="Encontrar profissionais" />  Cadastrar meus serviços
                              </label>
                           </div>
                           
                           <div class="form-group">
                              <button typw="submit" class="btn btn-primary">
                                  Escolher esse perfil
                              </button> 
                           </div>

                     </form>


                  </div>
               </div>
            
            `);

            this.animarTransicao();

            //$("footer").fadeIn(); // TALVEZ O RODAPE SEJA APENAS PARA USUÁRIO COLABORADORES
            //$("header .menu-bar-toggle").fadeIn(500);

            $("footer").fadeOut();
        
    }


  
    viewPrincipalCliente(){

            $("header .menu-bar-toggle").html(`
                 
                 <a href="javascript:void(0)" onclick="app.abrirFecharMenuCliente();" title="Abrir o menu">
                   <img src="assets/images/menu-bar.svg" alt="Abrir o menu">
                 </a>

            `);

            this._content.html(`
            
               <div class="row view-dashboard" view-name="view-dashboard">
                  <div class="col-12 wow fadeInUp" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                      <!-- BUSCA PRINCIPAL -->
                     <div class="input-group busca-principal">
                        <input type="text" class="form-control" placeholder="Do que você está precisando hoje?" aria-label="Do que você está precisando hoje?" aria-describedby="busca-principal">
                        <div class="input-group-append">
                          <span class="input-group-text" id="busca-principal">
                            <img src="assets/images/search.svg" alt="Busca">
                          </span>
                        </div>
                      </div>
                     <!-- BUSCA PRINCIPAL -->

                     <h2>
                       Receba orçamentos de profissionais <b>qualificados</b> próximos a você!
                     </h2>

                     <nav>
                       <ul>
                         <li>
                           <a href="#" title="Limpeza geral">
                             Limpeza geral <img src="assets/images/right.svg" alt="Ver mais">
                           </a>
                         </li>
                         <li>
                           <a href="#" title="Passadoria">
                             Passadoria <img src="assets/images/right.svg" alt="Ver mais">
                           </a>
                         </li>
                         <li>
                           <a href="#" title="Lavagem">
                             Lavagem <img src="assets/images/right.svg" alt="Ver mais">
                           </a>
                         </li>
                         <li>
                           <a href="#" title="Janelas">
                             Janelas <img src="assets/images/right.svg" alt="Ver mais">
                           </a>
                         </li>
                         <li>
                           <a href="#" title="Organização">
                             Organização <img src="assets/images/right.svg" alt="Ver mais">
                           </a>
                         </li>
                         <li>
                           <a href="#" title="Cozinha">
                             Cozinha <img src="assets/images/right.svg" alt="Ver mais">
                           </a>
                         </li>
                         <li>
                           <a href="#" title="Quartos">
                             Quartos <img src="assets/images/right.svg" alt="Ver mais">
                           </a>
                         </li>
                       </ul>
                     </nav>


                  </div>
               </div>
            
            `);

            this.animarTransicao();

            $("footer").fadeOut(); // TALVEZ O RODAPE SEJA APENAS PARA USUÁRIO COLABORADORES
            $("header .menu-bar-toggle").fadeIn(500);
        
    }



    viewPrincipalProfissional(){

            $("header .menu-bar-toggle").html(`

                 <a class="saldo-atual" href="javascript:void(0)" title="Seu saldo">
                    
                    <img src="assets/images/saldo.svg" alt="Seu saldo atual" /> 198

                 </a>
                 
                 <a href="javascript:void(0)" onclick="app.abrirFecharMenuProfissional();" title="Abrir o menu">
                   <img src="assets/images/menu-bar.svg" alt="Abrir o menu">
                 </a>

            `);

            this._content.html(`
            
               <div class="row view-dashboard view-profissional" view-name="view-dashboard">
                  <div class="col-12 wow fadeInUp" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <h2>
                       Olá novamente,<br>Diogenes<br>
                       <small>Novos orçamentos da rede <br>SERVICE KEYS:</small>
                     </h2>

                     <div class="loop-novos-servicos">
                         
                         <!-- CAIXA DESTAQUE SERVIÇOS -->
                         <div class="caixa-destaque-servicos">
                           
                             <div class="header-autor">

                                 <h3>
                                    <img src="assets/images/foto-perfil.png" alt="Foto Perfil" />
                                    Diogenes Junior
                                    <small>
                                       <p>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                       </p>
                                       Brasileiro, 30 anos - Osasco SP
                                    </small>
                                 </h3>

                             </div>

                             <br clear="both">

                             <div class="body-autor">
                                  <h4>Nome do serviço solicitado.</h4>
                                  <p>Preciso de tal serviço com tal característica ou qualquer outra informação relevante sobre o serviço que estou procurando.</p>
                                  <p><b>São Paulo - 5.5Km</b></p>
                             </div>

                             <div class="footer-autor">
                                  <a href="javascript:void(0)" onclick="app.desbloqAnuncio();" title="DESBLOQUEAR" class="btn btn-primary">
                                      DESBLOQUEAR <span><img src="assets/images/simbolo.svg" /> 50</span>
                                  </a>
                             </div>

                         </div>
                         <!-- CAIXA DESTAQUE SERVIÇOS -->


                         <!-- CAIXA DESTAQUE SERVIÇOS -->
                         <div class="caixa-destaque-servicos">
                           
                             <div class="header-autor">

                                 <h3>
                                    <img src="assets/images/foto-perfil.png" alt="Foto Perfil" />
                                    Diogenes Junior
                                    <small>
                                       <p>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                       </p>
                                       Brasileiro, 30 anos - Osasco SP
                                    </small>
                                 </h3>

                             </div>

                             <br clear="both">

                             <div class="body-autor">
                                  <h4>Nome do serviço solicitado.</h4>
                                  <p>Preciso de tal serviço com tal característica ou qualquer outra informação relevante sobre o serviço que estou procurando.</p>
                                  <p><b>São Paulo - 5.5Km</b></p>
                             </div>

                             <div class="footer-autor">
                                  <a href="javascript:void(0)" onclick="app.desbloqAnuncio();" title="DESBLOQUEAR" class="btn btn-primary">
                                      DESBLOQUEAR <span><img src="assets/images/simbolo.svg" /> 50</span>
                                  </a>
                             </div>

                         </div>
                         <!-- CAIXA DESTAQUE SERVIÇOS -->




                         <!-- CAIXA DESTAQUE SERVIÇOS -->
                         <div class="caixa-destaque-servicos">
                           
                             <div class="header-autor">

                                 <h3>
                                    <img src="assets/images/foto-perfil.png" alt="Foto Perfil" />
                                    Diogenes Junior
                                    <small>
                                       <p>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                       </p>
                                       Brasileiro, 30 anos - Osasco SP
                                    </small>
                                 </h3>

                             </div>

                             <br clear="both">

                             <div class="body-autor">
                                  <h4>Nome do serviço solicitado.</h4>
                                  <p>Preciso de tal serviço com tal característica ou qualquer outra informação relevante sobre o serviço que estou procurando.</p>
                                  <p><b>São Paulo - 5.5Km</b></p>
                             </div>

                             <div class="footer-autor">
                                  <a href="javascript:void(0)" onclick="app.desbloqAnuncio();" title="DESBLOQUEAR" class="btn btn-primary">
                                      DESBLOQUEAR <span><img src="assets/images/simbolo.svg" /> 50</span>
                                  </a>
                             </div>

                         </div>
                         <!-- CAIXA DESTAQUE SERVIÇOS -->



                         <!-- CAIXA DESTAQUE SERVIÇOS -->
                         <div class="caixa-destaque-servicos">
                           
                             <div class="header-autor">

                                 <h3>
                                    <img src="assets/images/foto-perfil.png" alt="Foto Perfil" />
                                    Diogenes Junior
                                    <small>
                                       <p>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                       </p>
                                       Brasileiro, 30 anos - Osasco SP
                                    </small>
                                 </h3>

                             </div>

                             <br clear="both">

                             <div class="body-autor">
                                  <h4>Nome do serviço solicitado.</h4>
                                  <p>Preciso de tal serviço com tal característica ou qualquer outra informação relevante sobre o serviço que estou procurando.</p>
                                  <p><b>São Paulo - 5.5Km</b></p>
                             </div>

                             <div class="footer-autor">
                                  <a href="javascript:void(0)" onclick="app.desbloqAnuncio();" title="DESBLOQUEAR" class="btn btn-primary">
                                      DESBLOQUEAR <span><img src="assets/images/simbolo.svg" /> 50</span>
                                  </a>
                             </div>

                         </div>
                         <!-- CAIXA DESTAQUE SERVIÇOS -->




                     </div>

                  </div>
               </div>
            
            `);

            this.animarTransicao();

            $("footer").fadeIn(); // TALVEZ O RODAPE SEJA APENAS PARA USUÁRIO COLABORADORES
            $("header .menu-bar-toggle").fadeIn(500);
        
    }

    viewComprarChaves(){

            this._content.html(`
            
               <div class="row view-comprar-chaves" view-name="view-2">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <h2>
                      <a href="javascript:void(0)" title="Voltar" onclick="app.viewPrincipalProfissional();">
                         <img src="assets/images/voltar-views.svg" alt="Voltar" />
                      </a> 
                      Comprar chaves</h2>
                     <p>Pacote de chaves para você desbloquear anúncios dentro da plataforma</p>

                     
                     <form method="post" action="javascript:void(0)" onsubmit="app.selecaoPacoteCompra(event)">

                           
                           <!-- PACOTE -->
                           <div class="form-check">
                              <input class="form-check-input" type="radio" name="pacote" id="pacote1" value="1000" checked>
                              <label class="form-check-label" for="pacote1">
                                <img src="assets/images/simbolo.svg" alt="Comprar 1000 Chaves" />  
                                1000 Chaves 
                                <small>À vista por R$ 99,99</small>
                                <span>
                                  <d>ou em até 12X de</d>
                                  R$ 9,99
                                </span>
                              </label>
                           </div>
                           <!-- PACOTE -->


                           <!-- PACOTE -->
                           <div class="form-check">
                              <input class="form-check-input" type="radio" name="pacote" id="pacote2" value="5000">
                              <label class="form-check-label" for="pacote2">
                                <img src="assets/images/simbolo.svg" alt="Comprar 5000 Chaves" />  
                                1000 Chaves 
                                <small>À vista por R$ 199,99</small>
                                <span>
                                  <d>ou em até 12X de</d>
                                  R$ 29,99
                                </span>
                              </label>
                           </div>
                           <!-- PACOTE -->


                           <!-- PACOTE -->
                           <div class="form-check">
                              <input class="form-check-input" type="radio" name="pacote" id="pacote3" value="10000">
                              <label class="form-check-label" for="pacote3">
                                <img src="assets/images/simbolo.svg" alt="Comprar 10000 Chaves" />  
                                10.000 Chaves 
                                <small>À vista por R$ 399,99</small>
                                <span>
                                  <d>em até 12X de</d>
                                  R$ 39,99
                                </span>
                              </label>
                           </div>
                           <!-- PACOTE -->

                           
                           <div class="form-group">
                              <button typw="submit" class="btn btn-primary">
                                  COMPRAR SELECIONADO
                              </button> 
                           </div>


                     </form>


                  </div>
               </div>
            
            `);

            this.animarTransicao();

    }


    viewDetalheAnuncio(){

      this._content.html(`
            
               <div class="row view-dashboard view-profissional view-detalhe-anuncio" view-name="view-dashboard">
                  <div class="col-12 wow fadeInUp" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <h2>
                      <a href="javascript:void(0)" title="Voltar" onclick="app.viewPrincipalProfissional();">
                         <img src="assets/images/voltar-views.svg" alt="Voltar" />
                      </a> 
                      Detalhe orçamento</h2>
                     <p class="sub">Parabéns! Você já desbloqueou esse orçamento!</p>

                     <div class="loop-novos-servicos">
                         
                         <!-- CAIXA DESTAQUE SERVIÇOS -->
                         <div class="caixa-destaque-servicos">
                           
                             <div class="header-autor">

                                 <h3>
                                    <img src="assets/images/foto-perfil.png" alt="Foto Perfil" />
                                    Diogenes Junior
                                    <small>
                                       <p>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                       </p>
                                       Brasileiro, 30 anos - Osasco SP
                                    </small>
                                 </h3>

                             </div>

                             <br clear="both">

                             <div class="body-autor">
                                  <h4>Nome do serviço solicitado.</h4>
                                  <p>Preciso de tal serviço com tal característica ou qualquer outra informação relevante sobre o serviço que estou procurando.</p>
                                  <p>Preciso de tal serviço com tal característica ou qualquer outra informação relevante sobre o serviço que estou procurando.</p>
                                  <p><b>São Paulo - 5.5Km</b></p>
                             </div>

                             <div class="footer-autor">
                               
                               <h2>
                                  <img src="assets/images/whatsapp.svg" alt="Whatsapp" /> (11) 9 4502-7877
                               </h2>
                               <h2>
                                   <img src="assets/images/envelope.svg" alt="E-mail" /> diogenesjunior.ti@gmail.com
                               </h2>

                             </div>

                         </div>

                         <div class="actions-contato">
                          
                                <p>
                                   <a href="javascript:void(0)" title="Ligar no telefone" class="btn btn-default">
                                      Ligar no telefone
                                   </a>
                                </p>
                                <p>
                                   <a href="javascript:void(0)" title="Whatsapp" class="btn btn-default">
                                      Whatsapp
                                   </a>
                                </p>
                           
                                <p>
                                    <a href="javascript:void(0)" onclick="app.finalizarServico()" title="Serviço concluído" class="btn btn-default">
                                      Serviço concluído!
                                   </a>
                                </p>
                            
                         </div>

                         <!-- CAIXA DESTAQUE SERVIÇOS -->

                         <p>&nbsp;</p>
                         <p>&nbsp;</p>
                         <p>&nbsp;</p>
                         <p>&nbsp;</p>


                     </div>

                  </div>
               </div>
            
            `);

            this.animarTransicao();
       
    }

    view2(){

            this._content.html(`
            
               <div class="row view-2" view-name="view-2">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>View 2</h2>
                     <p>Essa é a segunda view</p>
                  </div>
               </div>
            
            `);

            this.animarTransicao();
        
    }

    view3(){

            this._content.html(`
            
               <div class="row view-3" view-name="view-3">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>View 3</h2>
                     <p>Esse é a terceira view</p>
                  </div>
               </div>
            
            `);

            this.animarTransicao();
        
    }


    viewLogin(){

            this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>Bem vindo,</h2>
                     <p>Se identifique para entrar no aplicativo</p>
                     
                     <form method="post" action="javascript:void(0)" onsubmit="app.procLoginSms(event)">
                        <div class="form-group">
                           <label>Seu celular com DDD</label>
                           <input type="text" class="form-control" id="loginUsuario" placeholder="Digite o número do seu celular" required />
                        </div>
                        

                        <div class="form-group">
                           <button class="btn btn-primary" id="btnViewLogin">
                              Próximo
                           </button>
                        </div>
                        
                     </form>
                     
                     <!--
                       <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.esqueciMinhaSenha()" title="Esqueci minha senha">
                                Esqueci minha senha
                            </a>
                          </div>

                       <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.cadastro()" title="Criar uma conta">
                                Criar uma conta
                            </a>
                       </div>
                     -->

                  </div>
               </div>
            
            `);

            $("footer").hide();
            $("header .menu-bar-toggle").hide();

            this.animarTransicao();
            app.helpers.carregarMascaras();
        
    }

    viewCodigoSms(){

             this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>Service Keys</h2>
                     <p>Insira o código que recebeu por SMS</p>
                     
                     <form method="post" action="javascript:void(0)" onsubmit="app.procVerificarSms(event)">
                        <div class="form-group">
                           <label>Ele irá chegar em até 2 minutos</label>
                           <input type="text" class="form-control text-center" id="codigoSms" placeholder="Digite os cinco digitos que recebeu via SMS" required />
                        </div>
                        
                        <div class="form-group">
                           <button class="btn btn-primary text-center" id="btnConfirmarCodigo">
                              Confirmar código
                           </button>
                        </div>
                        
                     </form>
                     
                       <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.viewLoginEmailSenha()" title="Prefiro entrar usando e-mail e senha">
                                Prefiro entrar usando e-mail e senha
                            </a>
                          </div>

                       <!--
                         <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.cadastro()" title="Criar uma conta">
                                Criar uma conta
                            </a>
                         </div>
                       -->
                     

                  </div>
               </div>
            
            `);


            $("footer").hide();

            this.animarTransicao();
            app.helpers.carregarMascaras();

    }

    viewLoginEmailSenha(){

      this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>Login</h2>
                     <p>Entrar com o seu e-mail e senha</p>
                     
                     <form method="post" action="javascript:void(0)" onsubmit="app.procLogin(event)">
                       
                        <div class="form-group">
                           <label>Seu email de cadastro</label>
                           <input type="text" class="form-control" id="loginUsuario" placeholder="Seu e-mail ou usuário" required />
                        </div>

                        <div class="form-group">
                           <label>Senha</label>
                           <input type="password" class="form-control" id="loginSenha" placeholder="Sua senha cadastrada" required />
                        </div>
                        
                        <div class="form-group">
                           <button class="btn btn-primary" id="btnLoginEmailSenha">
                              Login
                           </button>
                        </div>
                        
                     </form>
                     
                     
                       <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.esqueciMinhaSenha()" title="Esqueci minha senha">
                                Esqueci minha senha
                            </a>
                          </div>
                     <!--
                       <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.cadastro()" title="Criar uma conta">
                                Criar uma conta
                            </a>
                       </div>
                     -->

                  </div>
               </div>
            
            `);

            $("footer").hide();

            this.animarTransicao();

    }


    viewCadastro(){

         this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>Cadastro</h2>
                     <p>Faça seu cadastro na plataforma</p>
                     
                     <form method="post" action="javascript:void(0)" onsubmit="app.procCadastro(event)">
                        <input type="hidden" id="cadastroCelular" name="celularCadastro" value="${localStorage.getItem("celularCadastro")}" />
                        <div class="form-group">
                           <label>Seu Nome</label>
                           <input type="text" id="cadastroNome" onclick="ativarFormularioFlutuante('#cadastroNome','Seu nome completo')" class="form-control" placeholder="Seu nome completo" required />
                        </div>
                        <div class="form-group">
                           <label>Seu login</label>
                           <input type="email" id="cadastroEmail" onclick="ativarFormularioFlutuante('#cadastroEmail','Seu e-mail (será o login)')" class="form-control" placeholder="Seu e-mail ou usuário" required />
                        </div>
                        <div class="form-group">
                           <label>Sua senha</label>
                           <input type="password" id="cadastroSenha" class="form-control" placeholder="Sua senha de acesso" required />
                        </div>
                        <div class="form-group">
                           <button class="btn btn-primary" id="btnViewCadastro">
                              Cadastrar
                           </button>
                        </div>
                     </form>

                     <div class="form-group link-apoio text-center">
                          <a href="javascript:void(0)" onclick="app.viewLogin()" title="Já tenho uma conta">
                              Já tenho uma conta
                          </a>
                        </div>

                  </div>
               </div>
            
            `);

            $("footer").hide();

            this.animarTransicao();

    }
    
    viewEsqueciMinhaSenha(){

          this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>Esqueci minha senha</h2>
                     <p>Informe seu e-mail cadastrado</p>
                     
                     <form method="post" action="javascript:void(0)" onsubmit="app.procResetSenha(event)">
                        
                        <div class="form-group">
                           <label>Seu e-mail ou usuário cadastrado</label>
                           <input type="email" class="form-control" id="resetEmail" onclick="ativarFormularioFlutuante('#resetEmail','Seu e-mail cadastrado')" placeholder="Seu e-mail ou usuário" required />
                        </div>
                       
                        <div class="form-group">
                           <button class="btn btn-primary" id="btnViewResetarSenha">
                              Resetar senha
                           </button>
                        </div>
                     </form>

                     <div class="form-group link-apoio text-center">
                          <a href="javascript:void(0)" onclick="app.viewLoginEmailSenha()" title="Cancelar reset de senha">
                              Cancelar
                          </a>
                        </div>

                  </div>
               </div>
            
            `);

            $("footer").hide();

            this.animarTransicao();

    }
    

    // VIEW UPLOAD DE FOTO
    viewUploadFoto(){
        
        this._content.html(`
            
               <div class="row view-login" view-name="view-login">
                  <div class="col-12 wow fadeInRight" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     <h2>Upload de foto</h2>
                     <p>Fazer upload de imagens via input ou camêra</p>
                     
                     <form class="fileForm" method="post" enctype="multipart/form-data" action="${app.urlApi}v1-imagens-upload.php">
                        
                        <input type="hidden" name="token" value="${app.token}" />
                        <input type="hidden" name="id_usuario" value="${localStorage.getItem("idUsuario")}" />

                         <div class="form-group">
                           <label for="fileArquivo" class="btn btn-default" style="width:100%;">Selecionar arquivo</label>
                           <input style="opacity:0;display:block;height:auto;width:100%;" type="file" id="fileArquivo" class="upload-imagem" name="arquivo" />
                         </div>



                     </form>

                     <div class="form-group">
                         <a href="javascript:void(0)" class="btn btn-primary" onclick="uploadLocal();">
                            Enviar o arquivo
                         </a>
                     </div>

                     <div class="retorno-upload"></div>

                     <div class="form-group link-apoio text-center">
                          <a href="javascript:void(0)" onclick="app.inicio()" title="Cancelar upload de imagens">
                              Cancelar
                          </a>
                     </div>

                  </div>
               </div>
            
            `);
        
        this.animarTransicao();

    }


    desativarTodosMenus(){
    	this._allMenus.css("font-weight","normal");
    }

    ativarMenuUm(){
    	this.desativarTodosMenus();
       	this._menu1.css("font-weight","bold"); 
    }
    ativarMenuDois(){
    	this.desativarTodosMenus();
       	this._menu2.css("font-weight","bold"); 
    }
    ativarMenuTres(){
    	this.desativarTodosMenus();
       	this._menu3.css("font-weight","bold"); 
    }



}

