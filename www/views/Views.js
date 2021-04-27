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

            $("footer").css("opacity",0);
            $("section#content").css("height","calc(100% - 60px)");

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

                            <input type="hidden" name="primeiro" value="de tudo" />

                            <div class="caixa-branca">
                                    <div class="form-group">
                                      <label>Título do seu anúncio</label>
                                      <input type="text" class="form-control" id="titulo" name="titulo" placeholder="título do seu anúncio" required />
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

            $("footer").css("opacity",1);
            $("section#content").css("height","calc(100% - 114px)");

            $("header .menu-bar-toggle").html(`

                 <a class="saldo-atual" href="javascript:void(0)" onclick="app.resumoSaldoProfissional()" title="Seu saldo">
                    
                    <img src="assets/images/saldo.svg" alt="Seu saldo atual" /> <span id="saldoAtualUsuarioHeader">${localStorage.getItem("saldoPrestadorServico")}</span>

                 </a>
                 
                 <a href="javascript:void(0)" onclick="app.abrirFecharMenuProfissional();" title="Abrir o menu">
                   <img src="assets/images/menu-bar.svg" alt="Abrir o menu">
                 </a>

            `);

            this._content.html(`
            
               <div class="row view-dashboard view-profissional" view-name="view-dashboard">
                  <div class="col-12 wow fadeInUp" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <h2>
                       Olá novamente,<br>${localStorage.getItem("nomeCompletoUsuario")}<br>
                       <small>Novos orçamentos da rede <br>SERVICE KEYS:</small>
                     </h2>

                     <div class="loop-novos-servicos" id="listaDeOrcamentos">

                            <p style="text-align:center;">
                              <img src="assets/images/loading.gif" alt="Carregando" style="width: 15px;height:auto;" />
                            </p>
                            <p style="text-align:center;color:#747474;font-size:13px;margin-top:-9px;">
                              Carregando
                            </p>

                     </div>

                  </div>
               </div>
            
            `);

            this.animarTransicao();

            $("footer").fadeIn(); // TALVEZ O RODAPE SEJA APENAS PARA USUÁRIO COLABORADORES
            $("header .menu-bar-toggle").fadeIn(500);
        
    }






    // SERVIÇOS DESBLOQUEADOS DO PROFISSIONAL
    servicosDesbloqueadosProfissional(){

            $("footer").css("opacity",1);
            $("section#content").css("height","calc(100% - 114px)");

            $("header .menu-bar-toggle").html(`

                 <a class="saldo-atual" href="javascript:void(0)" onclick="app.resumoSaldoProfissional()" title="Seu saldo">
                    
                    <img src="assets/images/saldo.svg" alt="Seu saldo atual" /> <span id="saldoAtualUsuarioHeader">${localStorage.getItem("saldoPrestadorServico")}</span>

                 </a>
                 
                 <a href="javascript:void(0)" onclick="app.abrirFecharMenuProfissional();" title="Abrir o menu">
                   <img src="assets/images/menu-bar.svg" alt="Abrir o menu">
                 </a>

            `);

            this._content.html(`
            
               <div class="row view-dashboard view-profissional" style="background:none !important" view-name="view-dashboard">
                  <div class="col-12 wow fadeInUp" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <h2>
                       Serviços<br>
                       <small>Orçamentos que você já desbloqueou:</small>
                     </h2>

                     <div class="loop-novos-servicos" id="listaDeOrcamentos">

                            <p style="text-align:center;">
                              <img src="assets/images/loading.gif" alt="Carregando" style="width: 15px;height:auto;" />
                            </p>
                            <p style="text-align:center;color:#747474;font-size:13px;margin-top:-9px;">
                              Carregando
                            </p>

                     </div>

                  </div>
               </div>
            
            `);

            this.animarTransicao();

            $("footer").fadeIn(); // TALVEZ O RODAPE SEJA APENAS PARA USUÁRIO COLABORADORES
            $("header .menu-bar-toggle").fadeIn(500);
        
    }



   
    // SERVIÇOS DESBLOQUEADOS DO PROFISSIONAL
    alertasProfissionais(){

            $("footer").css("opacity",1);
            $("section#content").css("height","calc(100% - 114px)");

            $("header .menu-bar-toggle").html(`

                 <a class="saldo-atual" href="javascript:void(0)" onclick="app.resumoSaldoProfissional()" title="Seu saldo">
                    
                    <img src="assets/images/saldo.svg" alt="Seu saldo atual" /> <span id="saldoAtualUsuarioHeader">${localStorage.getItem("saldoPrestadorServico")}</span>

                 </a>
                 
                 <a href="javascript:void(0)" onclick="app.abrirFecharMenuProfissional();" title="Abrir o menu">
                   <img src="assets/images/menu-bar.svg" alt="Abrir o menu">
                 </a>

            `);

            this._content.html(`
            
               <div class="row view-dashboard view-profissional" style="background:none !important" view-name="view-dashboard">
                  <div class="col-12 wow fadeInUp" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <h2>
                       Alertas<br>
                       <small>Mensagens e avisos para você:</small>
                     </h2>

                     <div class="loop-novos-servicos" id="listaDeOrcamentos">

                            <p style="text-align:center;">
                                <img src="assets/images/loading.gif" alt="Carregando" style="width: 15px;height:auto;" />
                            </p>

                            <p style="text-align:center;color:#747474;font-size:13px;margin-top:-9px;">
                                Nenhum alerta ainda! Talvez em breve...
                            </p>

                     </div>

                  </div>
               </div>
            
            `);

            this.animarTransicao();

            $("footer").fadeIn(); // TALVEZ O RODAPE SEJA APENAS PARA USUÁRIO COLABORADORES
            $("header .menu-bar-toggle").fadeIn(500);
        
    }
 



    resumoSaldoProfissional(){
        
            this._content.html(`
            
               <div class="row view-dashboard view-profissional" view-name="view-dashboard">
                  <div class="col-12 wow fadeInUp" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                     <h2>
                       Esse é o seu saldo atual: <img src="assets/images/saldo.svg" style="width:16px;margin-top:-3px;" /> ${localStorage.getItem("saldoPrestadorServico")}
                     </h2>
                     
                     <p style="font-size: 13px;width:80%;margin-bottom:30px;">
                       O saldo em chaves é o que você utiliza para desbloquear os orçamento dentro da plataforma. 
                       Você pode comprar novos pacotes de chaves sempre que quiser:
                     </p>

                     <p style="font-size: 13px;width:80%;margin-bottom:30px;">
                       Se você já fez uma compra, <b>pode demorar até 30 minutos</b> após a confirmação do pagamento para que seu saldo seja atualizado
                     </p>

                     <p>
                        <a href="javascript:void(0)" onclick="app.comprarChaves();" style="padding-top:6px;" class="btn btn-primary" title="Comprar chaves">
                          COMPRAR CHAVES
                        </a>
                     </p>

                  </div>
               </div>
            
            `);

            this.animarTransicao();

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

                           <div id="appendPacotes">

                              <p style="text-align:center;">
                                 <img src="assets/images/loading.gif" alt="Carregando" style="width: 15px;height:auto;" />
                              </p>
                              <p style="text-align:center;color:#747474;font-size:13px;margin-top:-9px;">
                                 Carregando pacotes
                              </p>

                           </div>
                           

                           <p>&nbsp;</p>
                           <div class="form-group">
                              <button typw="submit" id="btnComprarSelecionado" class="btn btn-primary">
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
                      <p>Você está comprando um pacote de chaves</p>

                           <div id="pacoteEscolhido"></div>

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
                                    <a href="javascript:void(0)" onclick="abrirUrl('${dados.invoiceUrl}');" title="clique para acessar o seu boleto" target="_system">
                                       clicando nesse link
                                    </a>
                                  </p> 
                                  <p>
                                    Nós também enviamos um e-mail com o boleto.
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
                                      
                                        <p style="text-align:center">Pode levar <b>até 30 minutos</b> para que as suas chaves fiquem disponíveis para uso.</p>
                                        <!--
                                          <p style="text-align:center">
                                            Continuar para o desbloqueio da solicitação de orçamento:<br>
                                            <a href="javascript:void(0)" onclick="app.views.viewDetalheAnuncio();" title="clique para acessar a solicitação">
                                               confirmar o desbloqueio
                                            </a>
                                          </p>
                                        -->

                                        <p style="text-align:center">
                                          Seu recido do pagamento:<br>
                                          <a href="javascript:void(0)" onclick="abrirUrl('${urlRecibo}');" title="clique para acessar" target="_system">
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
                                                                
                                                                <!--

                                                                <li onclick="app.detalheCurso(1)">
                                                                   Nome do Curso
                                                                   <small>Breve resumo sobre o que o curso fala</small>
                                                                </li>

                                                                -->

                                                                <li style="background:none !important;font-weight:normal;box-shadow:none;">

                                                                  <p style="text-align:center;">
                                                                    <img src="assets/images/loading.gif" alt="Carregando" style="width: 15px;height:auto;" />
                                                                  </p>
                                                                  <p style="text-align:center;color:#747474;font-size:13px;margin-top:-9px;">
                                                                    Carregando
                                                                  </p>

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
                                                             
                                                              <ul id="loopCursosListaEmAndamento">
                                                                  
                                                                  <!--

                                                                    <li onclick="app.detalheCurso(1)">
                                                                       Nome do Curso
                                                                       <small>Breve resumo sobre o que o curso fala</small>
                                                                    </li>

                                                                    -->

                                                                    <li style="background:none !important;font-weight:normal;box-shadow:none;">

                                                                        <p style="text-align:center;">
                                                                          <img src="assets/images/loading.gif" alt="Carregando" style="width: 15px;height:auto;" />
                                                                        </p>
                                                                        <p style="text-align:center;color:#747474;font-size:13px;margin-top:-9px;">
                                                                          Carregando
                                                                        </p>

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
                                     <span id="nomeDoCurso">carregando</span>

                                  </h2>

                                  <div class="barra-de-progresso-caixa">
                                  </div>

                                  <p>&nbsp;</p>

                                  <div class="metas-curso">

                                      <div id="resumoCurso">carregando</div>
                                      <p>&nbsp;</p>
      
                                      <h3>Resumo do curso</h3>

                                      <nav class="destaque-cursos">
                                        <ul>
                                          <li>
                                            <i class="fa fa-files-o"></i> Aulas <span id="totAulasCurso">carregando</span>
                                          </li>

                                          <!--
                                            <li>
                                              <i class="fa fa-clock-o"></i> Duração <span>1 hora</span>
                                            </li>
                                            <li>
                                               <i class="fa fa-level-up"></i> Nível <span>Intermediário</span>
                                            </li>
                                          -->

                                        </ul>
                                      </nav>

                                      <h3>Conteúdo</h3>
                                      <nav class="destaque-cursos">

                                        <ul id="listaDasAulasResumo">
                                        </ul>

                                      </nav>

                                      <div id="actionInitCurso">
                                          <a href="javascript:void(0)" onclick="app.iniciarCurso()" title="Fazer esse curso" class="btn btn-primary">
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

   // INICIAR CURSO 
   iniciarCurso(){
     
       this._content.html(`
            
               <div class="row view-comprar-chaves cursos-e-treinamentos cursos-e-treinamentos-aula" view-name="view-2">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                                  <h2>
                                     <a href="javascript:void(0)" title="Voltar para o início do curso" id="voltarLinkDetalheCurso">
                                        <img src="assets/images/voltar-views.svg" alt="Voltar" />
                                     </a> 
                                     <small id="nomeDoCurso">Carregando</small>
                                     <span id="nomeDaAulaAtual">Carregando</span>
                                  </h2>

                                  <p>&nbsp;</p>

                                  <div class="metas-curso">

                                      <div id="feedbackAula"></div>

                                      <div class="video-aula" id="videoAula">
                                          Carregando
                                      </div>

                                      <div class="conteudos-aula">
                                           <div class="accordion" id="topicos">


                                                  <!-- CONTEUDO DA AULA -->
                                                  <div class="card">
                                                    <div class="card-header" id="pergunta1Header">
                                                      <h2 class="mb-0">
                                                        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#pergunta1" aria-expanded="true" aria-controls="pergunta1">
                                                          <span id="">Conteúdo da aula</span>
                                                          <small>Clique para ver o conteúdo</small>
                                                          <img src="assets/images/angle-down.svg" alt="Abrir conteúdo dessa aula" />
                                                        </button>
                                                      </h2>
                                                    </div>

                                                    <div id="pergunta1" class="collapse" aria-labelledby="pergunta1" data-parent="#topicos">
                                                      <div class="card-body" id="conteudoEmSiDaAula">
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <!-- CONTEUDO DA AULA -->


                                           </div>
                                      </div>

                                      <div>
                                          <a href="javascript:void(0)" onclick="app.nextAula()" title="Concluir essa aula" class="btn btn-primary">
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




   nextAula(){
                 
                 // INFORMAR O USUÁRIO SOBRE A CONCLUSÃO DA AULA
                 $("#feedbackAula").html(`
       
                                           <div class="alert alert-success" role="alert">
                                                <p>
                                                   <b>Parabéns! Aula concluída com sucesso</b>
                                                </p>
                                                <p>
                                                   <a href="javascript:void(0)" onclick="app.carregarProximaAula()" class="btn btn-primary">
                                                       Próximo <i class="fa fa-angle-right"></i>
                                                   </a>
                                                </p>
                                            </div>

                  `);

                 // FORÇAR O SCROLL PARA O TOPO
                 var objDiv = document.getElementById("content");
                 objDiv.scrollTop = 0;

   }
   

   detalheTeste(){

        var dadosCurso = JSON.parse(localStorage.getItem("dadosCurso"));
        var posicao    = localStorage.getItem("posicaoCurso");
     
        this._content.html(`
            
               <div class="row cursos-e-treinamentos cursos-e-treinamentos-aula" view-name="view-2">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                                  <h2>
                                     <a href="javascript:void(0)" title="Voltar para o início do curso" onclick="app.iniciarCurso()">
                                        <img src="assets/images/voltar-views.svg" alt="Voltar" />
                                     </a> 
                                     <small>${dadosCurso.curso.titulo}</small>
                                     Testes da aula: ${dadosCurso.aulas[posicao].nome_da_aula}
                                  </h2>

                                  <p>&nbsp;</p>

                                  <div class="metas-curso">

                                      <div id="feedbackAula"></div>

                                    
                                      <div class="conteudos-aula conteudos-testes">
                                      </div>

                                      <div>
                                          <a href="javascript:void(0)" onclick="app.corrigirTeste()" title="Corrigir teste" class="btn btn-primary">
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

            var imgPergunta = "";
            var contador = 0;
            var contador2 = 0;
            var checked = "";
            
            // ALIMENTAR AS AULAS
            $(".conteudos-testes").html(`

                  ${dadosCurso.aulas[posicao].conteudo_teste.map((n) => {

                              // PREPARAR A IMAGEM DA PERGUNTA
                              if(n.imagem_da_pergunta!=false && n.imagem_da_pergunta!=null){
                                imgPergunta = `<img src="${n.imagem_da_pergunta}" style="width:100%;height:auto;" />`;
                              }else{
                                imgPergunta = "";
                              }

                              contador++;
                              contador2 = 0;

                              //console.log(n.alternativas);


                              return `
                                  
                                          <!-- PERGUNTA -->
                                          <div class="pergunta">
                                              <h3 style="font-weight:normal;">${n.titulo_da_pergunta}</h3>
                                              <p>
                                                ${imgPergunta}
                                              </p>
                                              <div class="sessao-alternativas caixa-testes">

                                                   ${n.alternativas.map((m) => {

                                                              //console.log(m);

                                                              contador2++;

                                                              if(contador2==1){
                                                                checked = "checked";
                                                              }else{
                                                                checked = "";
                                                              }

                                                              return `
                                                                  
                                                                 <div class="form-check">
                                                                    <input class="form-check-input" type="radio" name="pergunta${contador}" id="pergunta${contador}alt${contador2}" data-seletor="${contador}" data-correcao="${m.correta_ou_incorreta}" data-peso="${n.peso_da_pergunta}" value="${m.texto_da_alternativa}" >
                                                                    <label class="form-check-label" for="pergunta${contador}alt${contador2}">
                                                                      ${m.texto_da_alternativa}
                                                                    </label>
                                                                 </div>

                                                              `
                                                    
                                                       }).join('')} 

                                                   <div class="feedback-alternativas" id="fa${contador}"></div>

                                              </div>
                                          </div>
                                          <!-- PERGUNTA -->

                              `
                       
                       }).join('')}

              `);


            this.animarTransicao();
            
            // FORÇAR O SCROLL PARA O TOPO
            var objDiv = document.getElementById("content");
            objDiv.scrollTop = 0;


   }




   corrigirTeste(){


           var dadosCurso = JSON.parse(localStorage.getItem("dadosCurso"));
           var posicao    = localStorage.getItem("posicaoCurso"); 

           $("#feedbackAula").html(`

                <div style="margin-bottom: 28px;padding: 12px;background: #f2f2f2">

                    <p style="text-align:center;">
                      <img src="assets/images/loading.gif" alt="Analisando suas respostas... Aguarde" style="width: 15px;height:auto;" />
                    </p>

                    <p style="text-align:center;color:#747474;font-size:13px;margin-top:-9px;">
                      Analisando suas respostas... Aguarde
                    </p>

                </div>

            `);

           var totalAcertos = 0;
           var nota_minima_para_aprovacao = dadosCurso.aulas[posicao].nota_minima_para_aprovacao;
           
           // PERCORRER AS RESPOSTAS CORRETAS            
           $(`input[data-correcao='Correta']:checked`).each(function(){

             totalAcertos = parseInt(totalAcertos) + parseInt($(this).attr("data-peso"));

             // FEEDBACK PARA O USUÁRIO
             $(`#fa${$(this).attr("data-seletor")}`).html(`

                 <div class="alert alert-success" role="alert">
                        <p>
                            Resposta correta!
                        </p>                        
                 </div> 

             `);

           });


           // PERCORRER AS RESPOSTAS INCORRETAS PARA AVISAR O USUÁRIO       
           $(`input[data-correcao='Incorreta']:checked`).each(function(){

             // FEEDBACK PARA O USUÁRIO
             $(`#fa${$(this).attr("data-seletor")}`).html(`

                 <div class="alert alert-danger" role="alert">
                      <p>
                          Resposta incorreta! Tente novamente, ou faça novamente as aulas anteriores.
                      </p>
                 </div> 

             `);

           });


           //FEEDBACK GERAL SOBRE O TESTE
           setTimeout(function(){ 

              if(totalAcertos>=nota_minima_para_aprovacao){

                // MARCAR QUE O TESTE JÁ FOI CONCLUÍDO
                localStorage.setItem("aulaHasTeste","nao");

                $("#feedbackAula").html(`
       
                          <div class="alert alert-success" role="alert">
                              <p>
                                  <b>Parabéns! Teste concluído com sucesso e sua nota foi ${totalAcertos}
                                  <small style="display:block;">O necessário para aprovação era ${nota_minima_para_aprovacao}</small> 
                                  </b>
                              </p>
                              <p>
                                  <a href="javascript:void(0)" onclick="app.carregarProximaAula();" class="btn btn-primary">
                                      Próximo <i class="fa fa-angle-right"></i>
                                  </a>
                              </p>
                          </div>

                `);

              }else{

                $("#feedbackAula").html(`
       
                          <div class="alert alert-danger" role="alert">
                              <p>
                                  <b style="color:#747474;">Oops! Você quase conseguiu. Sua nota foi ${totalAcertos}
                                  <small style="display:block;">O necessário para aprovação era ${nota_minima_para_aprovacao}</small> 
                                  </b>
                              </p>
                              <p>
                                  <a href="javascript:void(0)" onclick="app.views.detalheTeste();" class="btn btn-primary">
                                      Fazer o teste novamente <i class="fa fa-angle-right"></i>
                                  </a>
                              </p>
                          </div>

                `);

              }

           }, 2000);


           /*
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

            */


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
                                      
                                      <a href="javascript:void(0)" onclick="abrirUrl('https://twitter.com/intent/tweet?text=Conheça o aplicativo Service Keys https://servicekeys.com.br')" title="Compartilhar no Twitter">
                                         <i class="fa fa-twitter"></i>
                                      </a>

                                      <a href="javascript:void(0)" onclick="abrirUrl('https://wa.me/?text=Conheça o aplicativo Service Keys https://servicekeys.com.br')" title="Compartilhar por WhatsApp">
                                         <i class="fa fa-whatsapp"></i>
                                      </a>

                                      <a href="javascript:void(0)" onclick="abrirUrl('https://www.facebook.com/sharer/sharer.php?u=https://servicekeys.com.br')" title="Compartilhar no Facebook">
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

    


    viewDetalheAnuncio(idAnuncio,acao){


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
                                    <img src="assets/images/perfil.png" alt="Foto Perfil" />
                                    <span id="nomeCliente"></span>
                                    <small>
                                       <p>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                          <i class="fa fa-star" aria-hidden="true"></i>
                                       </p>
                                       <span id="subTituloAnuncio"></span>
                                    </small>
                                 </h3>

                             </div>

                             <br clear="both">

                             <div class="body-autor">
                                  <h4>Carregando...</h4>
                                  <p id="descAnuncio"></p>
                                  <p id="localAnuncio"></p>
                                  <p id="requisitosAnuncio"></p>
                                  <p id="dataAnuncio"></p>
                                  <p id="formaContaAnuncio"></p>
                             </div>

                             <div class="footer-autor">
                               
                               <h2>
                                  <img src="assets/images/whatsapp.svg" alt="Whatsapp" /> <span id="contatoTelefone"></span>
                               </h2>
                               <h2>
                                   <img src="assets/images/envelope.svg" alt="E-mail" /> <span id="contatoEmail"></span>
                               </h2>

                             </div>

                         </div>

                         <div class="actions-contato">
                          
                                <p>
                                   <a href="" id="actionLigacao" target="_system" title="Ligar no telefone" class="btn btn-default">
                                      Ligar no telefone
                                   </a>
                                </p>
                                <p>
                                   <a href="" id="actionWhatsApp" target="_system" title="Whatsapp" class="btn btn-default">
                                      Whatsapp
                                   </a>
                                </p>
                                
                                <!--
                                <p>
                                    <a href="javascript:void(0)" onclick="app.finalizarServico()" title="Serviço concluído" class="btn btn-default">
                                      Eu já realizei esse serviço para o cliente!
                                   </a>
                                </p>
                                -->
                            
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

            if(acao==5){
              aviso("Parabéns! Orçamento desbloqueado","Agora você pode ver todas as informações desse orçamento. Ele também ficará salvo no meu <b>Serviços</b> na barra inferior do aplicativo.");
            }

            app.models.carregarDetalheAtendimento(idAnuncio,acao);
       
    }




    configuracoes(){
       
       this._content.html(`
            
               <div class="row view-comprar-chaves cursos-e-treinamentos cursos-e-treinamentos-aula" view-name="view-2">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                                  <h2>
                                     Configurações
                                  </h2>

                                  <p>
                                    Altere e customize as opções do aplicativo para que façam mais sentido para o seu uso.
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


    duvidasESuporte(){

      this._content.html(`
            
               <div class="row view-comprar-chaves cursos-e-treinamentos cursos-e-treinamentos-aula" view-name="view-2">
                  <div class="col-12 wow fadeInLeft" data-wow-delay="0.0s" data-wow-duration="0.3s">
                     
                                  <h2>
                                     Dúvidas e suporte
                                  </h2>

                                  <p>
                                    Tem alguma dúvida sobre como funciona a plataforma? Veja algumas perguntas e respostas que podem ser úteis. Você também
                                    pode enviar um e-mail para <b>suporte@servicekeys.com.br</b>
                                  </p>
                                  

                                  <div id="itensSuporte">

                                      <p style="text-align:center;">
                                        <img src="assets/images/loading.gif" alt="Carregando" style="width: 15px;height:auto;" />
                                      </p>
                                      <p style="text-align:center;color:#747474;font-size:13px;margin-top:-9px;">
                                        Carregando
                                      </p>

                                  </div>

                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>
                                 <p>&nbsp;</p>

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

