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
                        <input type="text" class="form-control" onkeyup="app.filtrotabela();" id="filtroTabela" placeholder="Do que você está precisando hoje?" aria-label="Do que você está precisando hoje?" aria-describedby="busca-principal">
                        <div class="input-group-append">
                          <span class="input-group-text" id="busca-principal">
                            <img src="assets/images/search.svg" alt="Busca">
                          </span>
                        </div>
                      </div>
                     <!-- BUSCA PRINCIPAL -->

                     <h2 id="fraseDeAbertura">
                       Receba orçamentos de profissionais <b>qualificados</b> próximos a você!
                     </h2>

                     <nav>
                       <ul id="listaDeCategorias">
                         
                         <li style="text-align:left;font-size:13px;">
                            <img src="assets/images/loading.gif" alt="Carregando" style="width:17px;margin-right:5px;float:none;" /> Carregando categorias
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


    novoAtendimento(idCategoria,nomeCategoria){


       this._content.html(`
            
               <div class="row view-dashboard novo-atendimento" view-name="view-dashboard">
                  <div class="col-12 wow fadeInUp" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <h2 id="fraseDeAbertura">
                       <a href="javascript:void(0)" onclick="app.opcoesCarretamentoPerfilCliente();" title="Cancelar">
                            <img src="assets/images/voltar-views.svg" alt="Cancelar" />
                       </a>
                       
                       Detalhes sobre o que precisa:
                       <small>
                       Mais algumas informações para o seu orçamento vir completo
                       </small>
                     </h2>

                     <form method="post" id="formularioNovoAtendimento" action="javascript:void(0)" onsubmit="app.enviarAtendimento()">

                            <div class="form-group resumo-usuario">
                              <label>Seus dados:</label>
                              <p>
                                ${localStorage.getItem("nomeCompletoUsuario")}<br>
                                ${localStorage.getItem("emailUsuario")}<br>
                                ${localStorage.getItem("celularUsuario")}
                              </p>

                              <label>Tipo de serviço</label>
                              <p>
                                ${nomeCategoria}
                              </p>

                            </div>

                          

                            <div class="caixa-branca">
                                    <div class="form-group">
                                      <label>Título do seu anúncio</label>
                                      <input type="text" class="form-control" name="titulo" placeholder="título do seu anúncio" required />
                                    </div>

                                    <div class="form-group">
                                      <label>Descreva em poucas palavras o que você precisa:</label>
                                      <textarea rows="4" class="form-control" name="descricao" placeholder="Digite nesse campo"></textarea>
                                    </div>

                                    <div class="form-group">
                                      <label>Região do atendimento</label>
                                      <input type="text" class="form-control" name="regiao" placeholder="Exemplo: região de Osasco" />
                                    </div>

                                    <div class="form-group">
                                      <label>Para quando precisa?</label>
                                      <input type="text" class="form-control" name="quando" placeholder="Exemplo: até sexta-feira" />
                                    </div>

                                    <div class="form-group">
                                      <label>O prestador de serviço precisa de algum requisito especial?</label>
                                      <input type="text" class="form-control" name="requisitos" placeholder="Exemplo: inglês fluente" />
                                    </div>


                                    <div class="form-group">
                                        <label>Como prefere ser contatado(a)?</label>
                                        <select class="form-control" required name="formacontato">
                                          <option value="">selecione uma opção</option>
                                          <option value="Todas">Ligação / WhatsApp / E-mail</option>
                                          <option value="Ligação">Apenas Ligação ou WhatsApp</option>
                                          <option value="Whatsapp">Apenas WhatsApp</option>
                                          <option value="E-mail">Apenas E-mail</option>
                                        </select>
                                    </div>
                            </div>

                            <div class="form-group" style="margin-top:30px;">
                              <button type="submit" class="btn btn-primary">Enviar informações</button>
                            </div>

                            <div class="form-group">
                                <a href="javascript:void(0)" style="padding-top: 7px;" onclick="app.opcoesCarretamentoPerfilCliente();" title="Cancelar" class="btn btn-default">
                                    Cancelar
                                </a>
                            </div>

                     </form>

                     <p>&nbsp;</p>
                     <p>&nbsp;</p>
                     <p>&nbsp;</p>
                     <p>&nbsp;</p>


                  </div>
               </div>
            
            `);

            this.animarTransicao();

    }



    viewPrincipalProfissional(){

            $("header .menu-bar-toggle").html(`

                 <a class="saldo-atual" href="javascript:void(0)" title="Seu saldo">
                    
                    <img src="assets/images/saldo.svg" alt="Seu saldo atual" /> <span>00</span>

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

       $(".sidemenu nav ul li").removeClass("ativo");
       this._content.removeClass("fundo-view-principal");
       
       this._content.html(`
               
               <div class="container">
               
                 <div class="row view-editarPerfil view-campos" view-name="view-editarPerfil">

                      <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                            
                            <div class="area-formulario">

                                    <h3>Editar seus dados</h3>

                                    <div class="placeholder">

                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->
                                        <!-- EMPTY STATE -->
                                        <div class="linear-background">
                                            <div class="inter-draw"></div>
                                            <div class="inter-crop"></div>
                                            <div class="inter-right--top"></div>
                                            <div class="inter-right--bottom"></div>
                                        </div>
                                        <!-- EMPTY STATE -->

                                    </div>

                                    <div class="form">
                                         
                                         <form id="formEditarPerfil" method="post" action="javascript:void(0)" onsubmit="app.procEditarPerfil(event)">

                                            <input type="hidden" name="editarPerfilIdUsuario" value="${localStorage.getItem("idUsuario")}" />
                                            
                                            <div class="form-group">
                                               <label>Nome</label>
                                               <input type="text" class="form-control" name="editarPerfilNome" id="editarPerfilNome" placeholder="Seu nome" required />
                                            </div>

                                            <div class="form-group">
                                               <label>E-mail</label>
                                               <input type="email" class="form-control" name="editarPerfilEmail" id="editarPerfilEmail" placeholder="E-mail de acesso" required />
                                            </div>

                                            <div class="form-group">
                                               <label>Celular</label>
                                               <input type="text" class="form-control" name="editarPerfilCelular" id="editarPerfilCelular" placeholder="DDD + número" required />
                                            </div>

                                            <div class="form-group">
                                               <label>Alterar senha</label>
                                               <input type="password" class="form-control" name="editarPerfilSenha" id="editarPerfilSenha" placeholder="Senha de acesso" />
                                            </div>

                                            <div class="form-group">
                                               <button type="submit" class="btn btn-primary" id="btnEditar">Atualizar</button>
                                            </div>

                                         </form>

                                    </div>

                            </div>

                      </div>
                    
                 </div>

               </div>
            
       `);

        this.animarTransicao();

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

                     
                     <form id="formPacoteSelecao" method="post" action="javascript:void(0)" onsubmit="app.selecaoPacoteCompra(event)">

                           
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
                                5000 Chaves 
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


    paginaDeCmopra(){
       

            this._content.html(`
            
               <div class="row view-comprar-chaves view-finalizar-comprar" view-name="view-2">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <h2>
                      <a href="javascript:void(0)" title="Voltar" onclick="app.comprarChaves();">
                         <img src="assets/images/voltar-views.svg" alt="Voltar" />
                      </a> 
                      Comprar chaves</h2>
                      <p>Você está comprando pacote de chaves</p>

                           
                           <!-- PACOTE ESCOLHIDO -->
                           <div class="form-check" style="margin-top: 23px;margin-bottom: 56px;">
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


                           
                           <h3 style="font-size:20px;">Como deseja realizar o pagamento?</h3>
                           <p>
                             Você pode realizar o pagamento através de cartão de crédito (liberação imediata) ou
                             através de boleto bancário (liberação de 1 a 3 dias úteis).
                           </p>


                                 

                                 <!-- FORMAS DE PAGAMENTO -->
                                 <div class="formas-de-pagamento">
                                     
                                     <div class="accordion" id="formasDePagamentoCollapse">
                                          
                                          <!-- FORMA DE PAGAMENTO -->
                                          <div class="card">
                                            <div class="card-header" id="headingOne">
                                              <h2 class="mb-0">
                                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseCartaoCredito" aria-expanded="true" aria-controls="collapseCartaoCredito">
                                                  <div class="custom-control custom-switch">
                                                    <input type="radio" id="customRadio21" name="customRadio" class="custom-control-input" checked>
                                                    <label class="custom-control-label" for="customRadio21">Cartão de crédito</label>
                                                  </div>
                                                </button>
                                              </h2>
                                            </div>

                                            <div id="collapseCartaoCredito" class="collapse show" aria-labelledby="headingOne" data-parent="#formasDePagamentoCollapse">
                                              <div class="card-body formularios-dados-pagamento">
                                                    
                                                    <form method="post" action="javascript:void(0)" onsubmit="app.payCartaoDeCredito(event)">

                                                          <div class="row">
                                                              <div class="col-12 form-group">
                                                                 <label>Número do cartão</label>
                                                                 <input type="tel" id="pagtoCCNumero" name="pagtoCCNumero" class="form-control" placeholder="Número do cartão">
                                                              </div>
                                                          </div>
                                                          <div class="row">
                                                              <div class="col-12 form-group">
                                                              <label>Nome do títular</label>
                                                                 <input type="text" id="pagtoCCNome" name="pagtoCCNome" class="form-control" placeholder="Nome impresso no cartão">
                                                              </div>
                                                          </div>
                                                          <div class="row">
                                                              <div class="col-12 form-group">
                                                                 <label>CPF do títular</label>
                                                                 <input type="tel" id="pagtoCCNumeroCPF" name="pagtoCCNumeroCPF" class="form-control" placeholder="CPF do títular">
                                                              </div>
                                                          </div>
                                                          
                                                          <div class="row">
                                                              
                                                              <div class="col-6 form-group" style="padding-right: 5px;">
                                                                 <label>Validade</label>
                                                                 <input type="tel" id="pagtoCCValidade" name="pagtoCCValidade" class="form-control" placeholder="DD/AA">
                                                              </div>
                                                              
                                                              <div class="col-6 form-group" style="padding-left: 5px;">
                                                                 <label>CVV</label>
                                                                 <input type="text" id="pagtoCCCvv" name="pagtoCCCvv" class="form-control" placeholder="CVV">
                                                              </div>
                                                              
                                                          </div>

                                                          <div class="row">
                                                              <div class="col-12 form-group">
                                                                 <label>Parcelas</label>
                                                                 <select class="form-control" name="pagtoCCParcelas" id="pagtoCCParcelas">
                                                                      <option value="1x">1x de R$ 99,00</option>
                                                                      <option value="2x">2x de R$ 49,50</option>
                                                                      <option value="3x">3x de R$ 33,00</option>
                                                                      <option value="4x">4x de R$ 24,75</option>
                                                                 </select>
                                                              </div>
                                                          </div>

                                                          <div class="row">
                                                                
                                                                <div class="col-12">

                                                                    <p id="areaStatusPagamentoCartao">
                                                                        <button type="submit" id="btnPayCartao" class="btn btn-primary">
                                                                            PAGAR COM CARTÃO DE CRÉDITO
                                                                        </button>
                                                                     </p>

                                                                </div>

                                                          </div>

                                                    </form>

                                              </div>
                                            </div>
                                          </div>
                                          <!-- FORMA DE PAGAMENTO -->

                                         

                                          <!-- FORMA DE PAGAMENTO -->
                                          <div class="card">
                                            <div class="card-header" id="headingThree">
                                              <h2 class="mb-0">
                                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseBoleto" aria-expanded="false" aria-controls="collapseBoleto">
                                                  <div class="custom-control custom-switch">
                                                    <input type="radio" id="customRadio23" name="customRadio" class="custom-control-input">
                                                    <label class="custom-control-label" for="customRadio23">Boleto bancário</label>
                                                  </div>
                                                </button>
                                              </h2>
                                            </div>
                                            <div id="collapseBoleto" class="collapse" aria-labelledby="headingThree" data-parent="#formasDePagamentoCollapse">
                                              <div class="card-body formularios-dados-pagamento">
                                                    
                                                    <form id="formPayBoleto" method="post" action="javascript:void(0)" onsubmit="app.payBoleto(event)">

                                                        <div class="row">
                                                              <div class="col-12 form-group">
                                                                 <label>CPF</label>
                                                                 <input type="tel" id="pagtoBBNumeroCPF" name="pagtoBBNumeroCPF" class="form-control" placeholder="CPF do pagador">
                                                              </div>
                                                        </div>
                                                        <div class="row">
                                                              <div class="col-12">
                                                                 <label>Nome</label>
                                                                 <input type="text" id="pagtoBBNome" name="pagtoBBNome" class="form-control" placeholder="Nome completo do pagador">
                                                              </div>
                                                        </div>

                                                        <div class="row">
                                                                
                                                                <div class="col-12">

                                                                    <p id="areaStatusPagamentoBoleto">
                                                                        <button type="submit" id="btnPayBoleto" class="btn btn-primary">
                                                                            PAGAR COM BOLETO
                                                                        </button>
                                                                     </p>

                                                                </div>

                                                          </div>

                                                    </form>

                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <!-- FORMA DE PAGAMENTO -->


                                 </div>
                                 <!-- FORMAS DE PAGAMENTO -->

                                 


                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>


                  </div>
               </div>
            
            `);

            this.animarTransicao();

            app.helpers.carregarMascaras();

    }

    processandoPagamento(){

      $("#areaStatusPagamentoBoleto").html(`
            
               <p>
                 <img src="assets/images/loading.gif" alt="Carregando" />
               </p>
               <p>
                 Aguarde, estamos processando o seu pagamento
               </p>
            
      `);
          

    }


    processandoPagamentoCartao(){

      $("#areaStatusPagamentoCartao").html(`
            
               <p>
                 <img src="assets/images/loading.gif" alt="Carregando" />
               </p>
               <p>
                 Aguarde, estamos processando o seu pagamento
               </p>
            
      `);

    }



    
    dadosBoleto(dados){

       this._content.html(`
            
               <div class="row view-comprar-chaves text-center confirmacao-boleto" view-name="view-2">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                                 <h2>
                                  <a href="javascript:void(0)" title="Voltar" onclick="app.viewPrincipalProfissional();">
                                     <img src="assets/images/voltar-views.svg" alt="Voltar" />
                                  </a> 
                                    Boleto gerado com sucesso!
                                  </h2>
                                 <!--
                                 <h3 class="dados-boleto">
                                     <small>dados do seu boleto:</small>
                                     ${dados.invoiceUrl}
                                     <small>vencimento: ${dados.dueDate}</small>
                                 </h3>
                                 -->
                                  <p style="text-align:center">Suas chaves serão liberadas meditante confirmação do pagamento do boleto.</p>
                                  <p style="text-align:center">
                                    Acesse seu boleto diretamente<br>
                                    <a href="${dados.invoiceUrl}" title="clique para acessar o seu boleto" target="_system">
                                       clicando nesse link
                                    </a>
                                  </p> 

                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>

                  </div>
               </div>
            
            `);

            this.animarTransicao();

       
    }


    dadosCartaoPendente(erro){
        
        this._content.html(`
            
               <div class="row view-comprar-chaves text-center confirmacao-boleto" view-name="view-2">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                                 <h2>
                                  <a href="javascript:void(0)" title="Voltar" onclick="app.viewPrincipalProfissional();">
                                     <img src="assets/images/voltar-views.svg" alt="Voltar" />
                                  </a> 
                                    Seu pagamento não foi autorizado
                                  </h2>
                                 
                                  <p style="text-align:center">Seu pagaento foi negado pela operadora do seu cartão de crédito. Essas são as informações retornadas:</p>
                                  <p style="text-align:center">
                                    ${erro}
                                  </p> 

                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>

                  </div>
               </div>
            
            `);

            this.animarTransicao();
       



    }


        dadosCartao(urlRecibo){

             this._content.html(`
                  
                     <div class="row view-comprar-chaves text-center confirmacao-boleto" view-name="view-2">
                        <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                           
                                       <h2 style="text-align:center">
                                          <i class="fa fa-check-circle fa-3x" aria-hidden="true" style="color:#8BC34A;"></i><br>
                                          Crédito de chaves comprado com sucesso
                                        </h2>
                                      
                                        <p style="text-align:center">Suas chaves já estão disponíveis para uso.</p>
                                        <p style="text-align:center">
                                          Continuar para o desbloqueio da solicitação de orçamento:<br>
                                          <a href="javascript:void(0)" onclick="app.views.viewDetalheAnuncio();" title="clique para acessar a solicitação">
                                             confirmar o desbloqueio
                                          </a>
                                        </p>

                                        <p style="text-align:center">
                                          Seu recido do pagamento:<br>
                                          <a href="${urlRecibo}"  title="clique para acessar" target="_system">
                                             clique para acessar
                                          </a>
                                        </p> 

                                       <p>&nbsp;</p>
                                       <p>&nbsp;</p>
                                       <p>&nbsp;</p>
                                       <p>&nbsp;</p>

                        </div>
                     </div>
                  
                  `);

                  this.animarTransicao();

             
          }




    /* CURSOS */
    cursos(){

       this._content.html(`
            
               <div class="row view-comprar-chaves cursos-e-treinamentos" view-name="view-2">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                                 <h2>
                                  Cursos & Treinamentos
                                  </h2>
                                  <p>&nbsp;</p>


                                 
                                 <!-- ABAS -->
                                 <div class="page-tabs">
                                    <div class="pcss3t pcss3t-height-auto">
                                         
                                           <input type="radio" name="pcss3t" checked  id="tab1" class="tab-content-first">
                                           <label for="tab1">Todos os cursos</label>
                                                                                                
                                           <input type="radio" name="pcss3t" id="tab2" class="tab-content-2">
                                           <label for="tab2">Em andamento</label>

                                         <ul>

                                             <!-- ABA UM -->
                                             <li class="tab-content tab-content-first">
                                                 
                                                   <div class="form-group has-feedback">
                                                      <input type="text" class="form-control" name="busca" id="buscaCursos" placeholder="Pesquise por cursos" onkeyup="app.filtrotabelaCursos();" />
                                                   </div>

                                                   <div class="loop-cursos" id="loop-cursos">
                                                         
                                                         <nav>
                                                           
                                                            <ul id="loopCursosLista">
                                                                
                                                                <li onclick="app.detalheCurso(1)">
                                                                   Nome do Curso
                                                                   <small>Breve resumo sobre o que o curso fala</small>
                                                                </li>

                                                                <li onclick="app.detalheCurso(2)">
                                                                   Nome do Curso um pouco maior com mais de uma linha
                                                                   <small>Breve resumo sobre o que o curso fala</small>
                                                                </li>

                                                                <li onclick="app.detalheCurso(3)">
                                                                   Terceiro e último curso de exemplo
                                                                   <small>Breve resumo sobre o que o curso fala, um pouco maior
                                                                   que os demais, e aqui vamos forçar uma quebra de texto (truncate)
                                                                    só para ver como funcionaria</small>
                                                                </li>

                                                            </ul>

                                                         </nav>

                                                   </div>

                                             </li>
                                             <!-- ABA UM -->

                                             <!-- ABA DOIS -->
                                             <li class="tab-content tab-content-2">
                                                
                                                  <div class="loop-cursos" id="loop-cursos-andamento">
                                                           
                                                           <nav>
                                                             
                                                              <ul>
                                                                  
                                                                  <li onclick="app.detalheCurso(4)">
                                                                     Nome do Curso em Andamento
                                                                     <small>Breve resumo sobre o que o curso fala</small>

                                                                     <div class="progress">
                                                                        <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                                                     </div>

                                                                  </li>

                                                                 

                                                              </ul>

                                                           </nav>

                                                     </div>

                                             </li>
                                             <!-- ABA DOIS -->

                                         </ul>
                                    </div>
                                  </div>
                                  <!-- ABAS -->     
                                  
                                 
                                 
                                 


                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>

                  </div>
               </div>
            
            `);

            this.animarTransicao();

       
    }


    detalheCurso(idDetalheCurso){

         
         this._content.html(`
            
               <div class="row view-comprar-chaves cursos-e-treinamentos cursos-e-treinamentos-aula" view-name="view-2">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                                  <h2>
                                     <a href="javascript:void(0)" title="Voltar" onclick="app.cursos();">
                                        <img src="assets/images/voltar-views.svg" alt="Voltar" />
                                     </a> 
                                     <small>Cursos & Treinamentos</small>
                                     Nome do Curso de exemplo
                                  </h2>

                                  <div class="progress">
                                      <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">seu progresso: 25%</div>
                                  </div>

                                  <p>&nbsp;</p>

                                  <div class="metas-curso">

                                      <p>Caros amigos, a competitividade nas transações comerciais promove a alavancagem das formas de ação. Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a percepção das dificuldades cumpre um papel essencial na formulação da gestão inovadora da qual fazemos parte.</p>
                                      <p>&nbsp;</p>


                                      
                                      <h3>Resumo do curso</h3>

                                      <nav class="destaque-cursos">
                                        <ul>
                                          <li>
                                            <i class="fa fa-files-o"></i> Aulas <span>05 aulas</span>
                                          </li>
                                          <li>
                                            <i class="fa fa-clock-o"></i> Duração <span>1 hora</span>
                                          </li>
                                          <li>
                                             <i class="fa fa-level-up"></i> Nível <span>Intermediário</span>
                                          </li>
                                        </ul>
                                      </nav>

                                      
                                      <h3>Conteúdo</h3>
                                      <nav class="destaque-cursos">
                                        <ul>
                                          
                                          <li onclick="app.detalheAula(1)">
                                            <i class="fa fa-play-circle"></i> Aula 01 - Título da Aula de exemplo
                                            <small>Aqui um breve resumo da aula.</small>
                                          </li>

                                          <li onclick="app.detalheAula(1)">
                                            <i class="fa fa-play-circle"></i> Aula 02 - Os exemplos continuam
                                            <small>Aqui um breve resumo da aula.</small>
                                          </li>

                                          <li onclick="app.detalheAula(1)">
                                            <i class="fa fa-play-circle"></i> Aula 03 - Título da Aula
                                            <small>Aqui um breve resumo da aula.</small>
                                          </li>

                                          <li onclick="app.detalheAula(1)">
                                            <i class="fa fa-play-circle"></i> Aula 04 - Título da Aula
                                            <small>Aqui um breve resumo da aula.</small>
                                          </li>

                                          <li onclick="app.detalheTeste(1)">
                                            <i class="fa fa-play-circle"></i> Aula 05 - Teste final de conclusão do curso
                                            <small>Aqui um breve resumo sobre o que seria o teste.</small>
                                          </li>
                                          
                                        </ul>
                                      </nav>

                                      <div>
                                          <a href="javascript:void(0)" onclick="app.detalheAula(1)" title="Fazer esse curso" class="btn btn-primary">
                                              Fazer esse curso
                                          </a>
                                      </div>
                                      

                                  </div>


                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>

                  </div>
               </div>
            
            `);

            this.animarTransicao();


    }


   detalheAula(idAula){
     
       
       this._content.html(`
            
               <div class="row view-comprar-chaves cursos-e-treinamentos cursos-e-treinamentos-aula" view-name="view-2">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                                  <h2>
                                     <a href="javascript:void(0)" title="Voltar para o início do curso" onclick="app.detalheCurso(1)">
                                        <img src="assets/images/voltar-views.svg" alt="Voltar" />
                                     </a> 
                                     <small>Nome do curso de exemplo</small>
                                     01 - Aula de Exemplo
                                  </h2>

                                  <p>&nbsp;</p>

                                  <div class="metas-curso">

                                      <div id="feedbackAula"></div>

                                      <div class="video-aula">
                                          <iframe width="560" height="315" src="https://www.youtube.com/embed/CfWgbph-Mqw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                      </div>

                                      <div class="conteudos-aula">
                                           <div class="accordion" id="topicos">


                                                  <!-- TOPICO 1 -->
                                                  <div class="card">
                                                    <div class="card-header" id="pergunta1Header">
                                                      <h2 class="mb-0">
                                                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#pergunta1" aria-expanded="true" aria-controls="pergunta1">
                                                          Tópico 1: Introdução
                                                          <small>Resumo sobre o que fala essa sessão</small>
                                                          <img src="assets/images/angle-down.svg" alt="Abrir esse tópico" />
                                                        </button>
                                                      </h2>
                                                    </div>

                                                    <div id="pergunta1" class="collapse" aria-labelledby="pergunta1" data-parent="#topicos">
                                                      <div class="card-body">
                                                         <p>
                                                            As experiências acumuladas demonstram que o novo modelo estrutural aqui preconizado assume importantes posições no estabelecimento dos paradigmas corporativos. Desta maneira, a consulta aos diversos militantes faz parte de um processo de gerenciamento das novas proposições.
                                                         </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <!-- TOPICO 1 -->



                                                  <!-- TOPICO 2 -->
                                                  <div class="card">
                                                    <div class="card-header" id="pergunta2Header">
                                                      <h2 class="mb-0">
                                                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#pergunta2" aria-expanded="true" aria-controls="pergunta2">
                                                          Tópico 2: Conteúdo
                                                          <small>Resumo sobre o que fala essa sessão</small>
                                                          <img src="assets/images/angle-down.svg" alt="Abrir esse tópico" />
                                                        </button>
                                                      </h2>
                                                    </div>

                                                    <div id="pergunta2" class="collapse" aria-labelledby="pergunta2" data-parent="#topicos">
                                                      <div class="card-body">
                                                         <p>
                                                            As experiências acumuladas demonstram que o novo modelo estrutural aqui preconizado assume importantes posições no estabelecimento dos paradigmas corporativos. Desta maneira, a consulta aos diversos militantes faz parte de um processo de gerenciamento das novas proposições.
                                                         </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <!-- TOPICO 2 -->



                                                  <!-- TOPICO 3 -->
                                                  <div class="card">
                                                    <div class="card-header" id="pergunta3Header">
                                                      <h2 class="mb-0">
                                                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#pergunta3" aria-expanded="true" aria-controls="pergunta3">
                                                          Tópico 3: Resumo
                                                          <small>Resumo sobre o que fala essa sessão</small>
                                                          <img src="assets/images/angle-down.svg" alt="Abrir esse tópico" />
                                                        </button>
                                                      </h2>
                                                    </div>

                                                    <div id="pergunta3" class="collapse" aria-labelledby="pergunta3" data-parent="#topicos">
                                                      <div class="card-body">
                                                         <img src="assets/images/topico1.jpg" alt="" />
                                                         <p>
                                                            As experiências acumuladas demonstram que o novo modelo estrutural aqui preconizado assume importantes posições no estabelecimento dos paradigmas corporativos. Desta maneira, a consulta aos diversos militantes faz parte de um processo de gerenciamento das novas proposições.
                                                         </p>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <!-- TOPICO 3 -->



                                           </div>
                                      </div>

                                      <div>
                                          <a href="javascript:void(0)" onclick="app.concluirAula(1)" title="Concluir essa aula" class="btn btn-primary">
                                              Concluir essa aula
                                          </a>
                                      </div>
                                      

                                  </div>


                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>

                  </div>
               </div>
            
            `);

            this.animarTransicao();
            
            // FORÇAR O SCROLL PARA O TOPO
            var objDiv = document.getElementById("content");
            objDiv.scrollTop = 0;


   }




   concluirAula(idAula){
                 
                 // INFORMAR O USUÁRIO SOBRE A CONCLUSÃO DA AULA
                 $("#feedbackAula").html(`
       
                                           <div class="alert alert-success" role="alert">
                                                <p>
                                                   <b>Parabéns! Aula concluída com sucesso</b>
                                                </p>
                                                <p>
                                                   <a href="javascript:void(0)" onclick="app.detalheTeste(1)" class="btn btn-primary">
                                                       Próxima aula <i class="fa fa-angle-right"></i>
                                                   </a>
                                                </p>
                                            </div>

                  `);

                 // FORÇAR O SCROLL PARA O TOPO
                 var objDiv = document.getElementById("content");
                 objDiv.scrollTop = 0;

   }
   

   detalheTeste(){
     
        
        this._content.html(`
            
               <div class="row cursos-e-treinamentos cursos-e-treinamentos-aula" view-name="view-2">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                                  <h2>
                                     <a href="javascript:void(0)" title="Voltar para o início do curso" onclick="app.detalheCurso(1)">
                                        <img src="assets/images/voltar-views.svg" alt="Voltar" />
                                     </a> 
                                     <small>Nome do curso de exemplo</small>
                                     02 - Testes da Aula
                                  </h2>

                                  <p>&nbsp;</p>

                                  <div class="metas-curso">

                                      <div id="feedbackAula"></div>

                                    
                                      <div class="conteudos-aula conteudos-testes">
                                          
                                          <!-- PERGUNTA -->
                                          <div class="pergunta">
                                              <h3>Considere as informações a seguir e resposda o questionário:</h3>
                                              <p>Todavia, a valorização de fatores subjetivos deve passar por modificações independentemente do orçamento setorial.</p>
                                              <div class="sessao-alternativas caixa-testes">

                                                   <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="pergunta6" id="alt1" value="=CONST.SE(C2:C13;>=9)" checked>
                                                      <label class="form-check-label" for="alt1">
                                                        Alternativa 1
                                                      </label>
                                                   </div>

                                                   <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="pergunta6" id="alt2" value="=CONST.SE(C2:C13;>=9)">
                                                      <label class="form-check-label" for="alt2">
                                                        Alternativa 2
                                                      </label>
                                                   </div>

                                                   <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="pergunta6" id="alt3" value="=CONST.SE(C2:C13;>=9)">
                                                      <label class="form-check-label" for="alt3">
                                                        Alternativa 3 de exemplo
                                                      </label>
                                                   </div>

                                                   <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="pergunta6" id="alt4" value="=CONST.SE(C2:C13;>=9)">
                                                      <label class="form-check-label" for="alt4">
                                                        Alternativa 4
                                                      </label>
                                                   </div>

                                                   <div class="feedback-alternativas" id="fa1"></div>

                                              </div>
                                          </div>
                                          <!-- PERGUNTA -->



                                          <!-- PERGUNTA -->
                                          <div class="pergunta">
                                              <h3>Considere as informações a seguir e resposda o questionário:</h3>
                                              <p>Todavia, a valorização de fatores subjetivos deve passar por modificações independentemente do orçamento setorial.</p>
                                              <div class="sessao-alternativas caixa-testes">

                                                   <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="pergunta6" id="alt1b" value="=CONST.SE(C2:C13;>=9)" checked>
                                                      <label class="form-check-label" for="alt1b">
                                                        Alternativa 1
                                                      </label>
                                                   </div>

                                                   <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="pergunta6" id="alt2b" value="=CONST.SE(C2:C13;>=9)">
                                                      <label class="form-check-label" for="alt2b">
                                                        Alternativa 2
                                                      </label>
                                                   </div>

                                                   <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="pergunta6" id="alt3b" value="=CONST.SE(C2:C13;>=9)">
                                                      <label class="form-check-label" for="alt3b">
                                                        Alternativa 3 de exemplo
                                                      </label>
                                                   </div>

                                                   <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="pergunta6" id="alt4b" value="=CONST.SE(C2:C13;>=9)">
                                                      <label class="form-check-label" for="alt4b">
                                                        Alternativa 4
                                                      </label>
                                                   </div>

                                                   <div class="feedback-alternativas" id="fa2"></div>

                                              </div>
                                          </div>
                                          <!-- PERGUNTA -->



                                          <!-- PERGUNTA -->
                                          <div class="pergunta">
                                              <h3>Considere as informações a seguir e resposda o questionário:</h3>
                                              <p>Todavia, a valorização de fatores subjetivos deve passar por modificações independentemente do orçamento setorial.</p>
                                              <div class="sessao-alternativas caixa-testes">

                                                   <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="pergunta6" id="alt1v" value="=CONST.SE(C2:C13;>=9)" checked>
                                                      <label class="form-check-label" for="alt1v">
                                                        Alternativa 1
                                                      </label>
                                                   </div>

                                                   <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="pergunta6" id="alt2v" value="=CONST.SE(C2:C13;>=9)">
                                                      <label class="form-check-label" for="alt2v">
                                                        Alternativa 2
                                                      </label>
                                                   </div>

                                                   <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="pergunta6" id="alt3v" value="=CONST.SE(C2:C13;>=9)">
                                                      <label class="form-check-label" for="alt3v">
                                                        Alternativa 3 de exemplo
                                                      </label>
                                                   </div>

                                                   <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="pergunta6" id="alt4d" value="=CONST.SE(C2:C13;>=9)">
                                                      <label class="form-check-label" for="alt4d">
                                                        Alternativa 4
                                                      </label>
                                                   </div>

                                                   <div class="feedback-alternativas" id="fa3"></div>

                                              </div>
                                          </div>
                                          <!-- PERGUNTA -->



                                          <!-- PERGUNTA -->
                                          <div class="pergunta">
                                              <h3>Considere as informações a seguir e resposda o questionário:</h3>
                                              <p>Todavia, a valorização de fatores subjetivos deve passar por modificações independentemente do orçamento setorial.</p>
                                              <div class="sessao-alternativas caixa-testes">

                                                   <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="pergunta6" id="alt1e" value="=CONST.SE(C2:C13;>=9)" checked>
                                                      <label class="form-check-label" for="alt1e">
                                                        Alternativa 1
                                                      </label>
                                                   </div>

                                                   <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="pergunta6" id="alt2e" value="=CONST.SE(C2:C13;>=9)">
                                                      <label class="form-check-label" for="alt2e">
                                                        Alternativa 2
                                                      </label>
                                                   </div>

                                                   <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="pergunta6" id="alt3e" value="=CONST.SE(C2:C13;>=9)">
                                                      <label class="form-check-label" for="alt3e">
                                                        Alternativa 3 de exemplo
                                                      </label>
                                                   </div>

                                                   <div class="form-check">
                                                      <input class="form-check-input" type="radio" name="pergunta6" id="alt4e" value="=CONST.SE(C2:C13;>=9)">
                                                      <label class="form-check-label" for="alt4e">
                                                        Alternativa 4
                                                      </label>
                                                   </div>

                                                   <div class="feedback-alternativas" id="fa4"></div>

                                              </div>
                                          </div>
                                          <!-- PERGUNTA -->
                                           
                                      </div>

                                      <div>
                                          <a href="javascript:void(0)" onclick="app.corrigirTeste(1)" title="Corrigir teste" class="btn btn-primary">
                                              Corrigir teste
                                          </a>
                                      </div>
                                      

                                  </div>


                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>

                  </div>
               </div>
            
            `);

            this.animarTransicao();
            
            // FORÇAR O SCROLL PARA O TOPO
            var objDiv = document.getElementById("content");
            objDiv.scrollTop = 0;


   }




   corrigirTeste(idTeste){


            // INFORMAR O USUÁRIO SOBRE A CONCLUSÃO DA AULA
            $("#feedbackAula").html(`
       
                                           <div class="alert alert-success" role="alert">
                                                <p>
                                                   <b>Parabéns! Teste concluído com sucesso e sua nota foi 8 (80%)</b>
                                                </p>
                                                <p>
                                                   <a href="javascript:void(0)" onclick="app.detalheAula(1)" class="btn btn-primary">
                                                       Próxima aula <i class="fa fa-angle-right"></i>
                                                   </a>
                                                </p>
                                            </div>

            `);


            // INFORMAR O USUÁRIO SOBRE A CORREÇÃO DO TESTE
            $("#fa1").html(`
       
                                           <div class="alert alert-success" role="alert">
                                                <p>
                                                   Resposta correta!
                                                </p>
                                                
                                            </div>

            `);

            $("#fa2").html(`
       
                                           <div class="alert alert-danger" role="alert">
                                                <p>
                                                   Resposta incorreta! Tente novamente, ou faça novamente as aulas anteriores.
                                                </p>
                                                
                                            </div>

            `);

            $("#fa3").html(`
       
                                           <div class="alert alert-success" role="alert">
                                                <p>
                                                   Resposta correta!
                                                </p>
                                                
                                            </div>

            `);

            $("#fa4").html(`
       
                                           <div class="alert alert-success" role="alert">
                                                <p>
                                                   Resposta correta!
                                                </p>
                                                
                                            </div>

            `);


            // FORÇAR O SCROLL PARA O TOPO
            var objDiv = document.getElementById("content");
            objDiv.scrollTop = 0;

   }







    
    /* INDIQUE E GANHE */
    indiqueEGanhe(){
          

          this._content.html(`
            
               <div class="row view-comprar-chaves cursos-e-treinamentos cursos-e-treinamentos-aula" view-name="view-2">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                                  <h2>
                                     Indique e Ganhe!
                                  </h2>

                                  <p>&nbsp;</p>

                                  <p>
                                    Compartilhe o aplicativo <b>SERVICE KEYS</b> com seus amigos e contatos 
                                    e ganhe chaves para desbloquear orçamentos!
                                  </p>
                                  <p>
                                    Se as pessoas que você indicou, se cadastrarem, você ganha na hora até 100 chaves!!
                                  </p>

                                  <div class="social">
                                      
                                      <a href="#" title="Compartilhar por e-mail">
                                         <i class="fa fa-envelope"></i>
                                      </a>

                                      <a href="#" title="Compartilhar por whatsapp">
                                         <i class="fa fa-whatsapp"></i>
                                      </a>

                                      <a href="#" title="Compartilhar no Facebook">
                                         <i class="fa fa-facebook"></i>
                                      </a>

                                  </div>
                                  

                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>

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
                                   <a href="tel:11945027877" target="_system" title="Ligar no telefone" class="btn btn-default">
                                      Ligar no telefone
                                   </a>
                                </p>
                                <p>
                                   <a href="https://api.whatsapp.com/send?l=pt_BR&phone=5511945027877" target="_system" title="Whatsapp" class="btn btn-default">
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

                       
                         <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.initApp()" title="Criar uma conta">
                                Cancelar
                            </a>
                         </div>
                       
                     

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
                      
                       <div class="form-group link-apoio text-center">
                            <a href="javascript:void(0)" onclick="app.initApp()" title="Criar uma conta">
                                Cancelar
                            </a>
                       </div>

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

