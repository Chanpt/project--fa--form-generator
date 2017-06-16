<!DOCTYPE html>
<!-- ->
/*
 *! Gerador de Formulários 2.0
 *
 *! Informações Importantes:
 *  Este gerador foi feito por Luiz~.
 *  SOMENTE USE ESTE GERADOR COM A PERMISSÃO DO CRIADOR.
 *  Fóruns Oficiais de Suporte da Forumeiros podem usar e modificá-lo livremente.
 *  [!] NÃO DISTRIBUIR! [!]
 *
 */
<!- -->
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Gerador de Formulários 2.0</title>
  <link rel="shortcut icon" type="image/x-icon" href="https://illiweb.com/fa/favicon/discussion.ico">

  <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,400i,700,700i" rel="stylesheet">
  <style type="text/css">
    * {
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
    }

    html,
    body {
      height: 100%;
      font-family: sans-serif;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      font-size: 17px;
      background-color: #fff;
      line-height: 1.5;
      color: #262626;
    }

    /*
     * Basic Config:
     */

    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }

    a,
    a:link,
    a:visited,
    a:active {
      color: #39c;
      text-decoration: none;
    }

    a:hover {
      border-bottom: solid 1px #39c;
      color: #39c;
      text-decoration: none;
    }

    input,
    select,
    textarea {
      color: #444;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 3px;
      padding: 3px;
      outline: 0!important;
    }

    select:hover,
    select:active,
    select:focus,
    input:hover,
    input:active,
    input:focus,
    textarea:hover,
    textarea:focus,
    textarea:active {
      border-color: #39c;
      outline: 0;
    }

    [readonly] {
      cursor: not-allowed;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      -o-user-select: none;
      user-select: none;
      -moz-user-grag: none;
      -ms-user-grag: none;
      -o-user-grag: none;
      -webkit-user-grag: none;
      background-color: #e4e4e4;
      border-color: solid 1px #ccc!important;
      border-color: #ccc!important;
    }

    h1, h2, h3, h4, h5, h6, .font {
      font-family: "Trebuchet MS", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }

    /*
     * Header
     * Thanks to Ange Tuteur.
     */

    header.page-header {
      background: #fff;
      border-bottom: 1px solid #ccc;
      padding: 40px 120px;
    }

    header.page-header a.logo {
      color: #333;
      text-transform: uppercase;
      background: url(https://i.imgur.com/xPZysoy.png) no-repeat 0 0;
      padding: 10px 0px 10px 70px;
      text-decoration: none;
      font-size: 36px;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    header.page-header a.logo:hover {
      border: none;
    }

    .social {
      float: right;
    }

    header.page-header .social a {
      color: #fff;
      font-size: 18px;
      text-align: center;
      vertical-align: middle;
      background: no-repeat 50% 50% #bbb;
      background-color: #333;
      border-radius: 3px;
      display: inline-block;
      height: 32px;
      width: 32px;
      margin: 3px;
      -webkit-transition: 300ms;
      -moz-transition: 300ms;
      -o-transition: 300ms;
      -ms-transition: 300ms;
      transition: 300ms;
    }

    .social-button:hover {
      background-color: #000;
    }

    .social-button.fb-but:hover {
      background-color: #3B5998;
    }

    .social-button.tw-but:hover {
      background-color: #5EA9DD;
    }

    .social-button.yt-but:hover {
      background-color: #E52C27;
    }

    .social-button.rs-but:hover {
      background-color: #FAA21B;
    }

    header.page-header .social a i {
      line-height: 34px;
    }

    /*
     * Progressbar
     * Thanks to Ange Tuteur.
     */

    .form-progress {
      background: #39C;
      padding: 20px 125px;
    }

    div.step {
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
      margin-right: 10px;
      float: left;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      cursor: pointer;
    }

    span.progress-status {
      line-height: 40px;
      text-align: center;
      background: #B9E0F1;
      border-radius: 100px;
      display: inline-block;
      height: 40px;
      width: 40px;
      margin-right: 15px;
    }

    span.progress-text {
      display: inline-block;
      margin-right: 10px;
    }

    div.step.inactive {
      opacity: 0.5;
      cursor: not-allowed;
    }

    div.step#step-2.inactive {
      cursor: not-allowed!important;
    }

    /*
     * Parts
     */

    .global-wrap {
      display: none;
    }

    .info-text.align-center {
      width: 60%;
      margin: 45px auto;
      margin-bottom: 0px;
      text-align: center;
    }

    .info-text h1 {
      color: #39c;
      text-transform: uppercase;
      font-size: 22px;
      font-weight: 800;
      margin: 20px 0px;
      display: inline-block;
    }

    span.badge {
      margin-left: 5px;
      font-size: 11px;
      color: #e6ad1d;
      font-weight: bold;
      font-family: "Trebuchet MS", Arial, sans-serif;
    }

    .info-text img {
      display: block;
      text-align: center;
      margin: 0 auto;
    }

    .info-text p {
      font-size: 14px;
      color: #333;
      font-family: Arial, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    }

    .part {
      display: block;
      position: relative;
      width: 60%;
      margin: 45px auto 0px auto;
      background-color: #39c;
      border-radius: 3px;
      padding: 10px 20px;
      color: #fff;
    }

    .part.generate-code {
      text-align: justify;
    }

    .part h2.part-title {
      font-size: 18px;
      text-transform: uppercase;
      border-bottom: 2px solid;
      padding-bottom: 10px;
      margin-top: 8px;
      color: #fff;
      margin-bottom: 15px;
    }

    .edit-section {
      margin-right: 4px;
      position: absolute;
      right: -60px;
      top: 0px;
      background-color: #39c;
      border-radius: 3px;
      width: 40px;
      text-align: center;
      padding-top: 12px;
      padding-bottom: 12px;
    }

    .wrapper-inner {
      width: 100%;
    }

    .edit-section > div i.fa {
      color: #fff;
      font-size: 1.6em;
      margin: 6px 0px;
      cursor: pointer;
    }

    .edit-section > div i.fa-minus {
      margin-bottom: 0px;
    }

    .edit-section > div i.fa-plus:hover,
    .edit-section > div i.fa-check:hover {
      color: #8b5;
    }

    .edit-section > div i.fa-pencil:hover {
      color: #eb3;
    }

    .edit-section > div i.fa-minus:hover {
      color: #e53;
    }

    .fa-form-group i.fa {
      color: #fff;
      font-size: 1.2em;
      margin-right: 10px;
      cursor: pointer;
      margin-top: 12px;
      float: right;
    }

    .fa-form-group i.fa:hover {
      color: #b8b8b8;
    }

    .fa-form-group:first-child i.fa-pencil-square {
      margin-right: 5px!important;
    }

    .fa-form-group {
      color: #fff;
      -moz-transition: 100ms;
      -ms-transition: 100ms;
      -webkit-transition: 100ms;
      -o-transition: 100ms;
      transition: 100ms;
    }

    .fa-form-group label {
      display: block;
      display: table;
      cursor: pointer;
    }

    .fa-form-group input,
    .fa-form-group textarea,
    .fa-form-group select {
      margin-bottom: 20px;
      padding: 8px 9px;
      width: 100%;
      border: solid 1px #fff;
      border-radius: 3px;
      margin-top: 5px;
      font-size: 15px;
      color: #444;
      font-family: inherit;
      resize: none;
      -webkit-transition: all ease-in-out .19s, width 0s;
      transition: all ease-in-out .19s, width 0s;
    }

    .fa-form-group input[type="color"] {
      padding: 8px 10px;
      height: 40px;
      max-height: 40px!important;
    }

    body.is-editing .fa-form-group input,
    body.is-editing .fa-form-group textarea,
    body.is-editing .fa-form-group select {
      width: 89%;
    }

    .fa-form-group input:focus,
    .fa-form-group textarea:focus,
    .fa-form-group select:focus {
      box-shadow: inset 0 0 1px #444444, 0 0 1px 1px #444444;
      border-color: #444444;
      outline: 0;
    }

    .config-part .fa-form-group textarea {
      height: 160px;
    }

    .next-part,
    .next-part-fake {
      position: absolute;
      right: 0px;
      bottom: -57px;
      border: solid 0px;
      background-color: #eb3;
      color: #fff;
      text-transform: uppercase;
      font-size: 18px;
      padding: 10px 18px;
      border-radius: 2px;
      cursor: pointer;
      -webkit-transition: all .18s;
      transition: all .18s;
    }

    .next-part:hover,
    .next-part:focus,
    .next-part-fake:hover,
    .next-part-fake:focus {
      background-color: #e6ad1d;
    }

    .back-part-btn {
      position: absolute;
      left: 0px;
      bottom: -57px;
      border: solid 0px;
      background-color: #e53;
      color: #fff;
      text-transform: uppercase;
      font-size: 18px;
      padding: 10px 18px;
      border-radius: 2px;
      cursor: pointer;
      -webkit-transition: all .18s;
      transition: all .18s;
    }

    .back-part-btn:hover,
    .back-part-btn:focus {
      background-color: #da422e;
    }

    /*
     * Part 2 Styles:
     * We use flexbox in this part!
     */

    .presets-table {
      max-width: 195px;
      width: 40%;
    }

    .config-form {
      border-left: solid 2px #fff;
      margin-left: 10px;
      padding-left: 14px;
      padding-right: 0px;
      width: 100%;
      height: 100%;
      -moz-order: 1;
      -moz-flex-order: 1;
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
      min-height: 165px;
    }

    .part.create-text {
      display: -webkit-flexbox;
      display: -webkit-flex;
      display: -moz-flex;
      display: -moz-flexbox;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }

    /*
     * Footer:
     * Thanks to Ange Tuteur.
     */

    #footer {
      color: #AAA;
      background: #333;
      padding: 0 0 60px;
      margin-top: 115px;
      font-size: 14px;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    #footer .content {
      padding: 0 15px;
      margin: 0 auto;
      width: 80%;
    }

    #footer .footer-link {
      padding-top: 20px;
      text-align: center;
    }

    #footer hr {
      border: none;
      border-top: 2px solid #FFF;
      margin: 40px auto 0;
      width: 100px;
    }

    #footer span {
      color: #FFF;
      margin: 10px;
      display: inline-block;
    }

    #footer strong.h3 {
      font-size: 17px;
      text-transform: uppercase;
      display: block;
      margin-top: 60px;
      margin-bottom: 25px;
    }

    #footer .bloc a {
      color: #AAA;
    }

    #footer .bloc a:hover {
      color: #DDD;
      border-bottom: none;
    }

    #footer .bloc div {
      margin-bottom: 10px;
    }

    #footer .bloc i {
      width: 20px;
      text-align: center;
    }

    #footer .bloc {
      float: left;
      width: 25%;
    }

    /*
     * CSS for Javascript functions:
     */
    .modal {
      z-index: 9999;
      position: fixed;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      background-color: #fff;
      border: solid 1px #ddd;
      width: 60vw;
      overflow: hidden;
      border-radius: 3px;
    }

    .modal h3 {
      background-color: #39c;
      border-bottom: solid 1px #ddd;
      padding: 15px;
      font-size: 19px;
      color: #fff;
      text-transform: uppercase;
      font-family: "Trebuchet MS", Arial, sans-serif;
    }

    .modal-padding {
      margin: 10px 15px 15px 15px;
    }


    .form-footer {
      background-color: #ddd;
      padding: 10px 15px;
      position: relative;
    }

    .modal button,
    .modal[type="submit"] {
      background: #39c;
      border: none;
      border-radius: 3px;
      color: #fff;
      display: inline-block;
      font-weight: 700;
      line-height: normal;
      margin: 2px;
      padding: 6px 9px;
      transition: 300ms;
      font-size: 11px;
      font-family: "Verdana", Arial, sans-serif;
    }

    .modal button:hover,
    .modal[type="submit"]:hover {
      background-color: #333;
    }

    .modal a[href="javascript:void(0)"] {
      position: absolute;
      right: 15px;
      top: 51%;
      transform: translateY(-50%);
      color: #39c;
      text-decoration: none;
      font-size: 12px;
      font-family: "Verdana", Arial, sans-serif;
    }

    .modal p {
      margin: 0px 15px;
      margin-top: 15px;
    }

    .modal-overlay {
      content: '';
      position: fixed;
      background-color: rgba(0, 0, 0, 0.5);
      top: 0px;
      bottom: 0px;
      left: 0px;
      right: 0px;
      z-index: 9998;
    }

    .fa-form-group:first-child .fa-move-to-top,
    .fa-form-group:last-child .fa-move-to-bottom {
      display: none;
      font-size: 0px!important;
      margin-right: 0px!important;
    }

    #radio-select-input-type label:before {
      content: "\f10c";
      font-family: FontAwesome;
      color: #565656;
      margin-right: 10px;
    }

    #radio-select-input-type input[type="radio"]:checked + label:before {
      content: "\f05d";
    }

    #radio-select-input-type input[type="radio"] {
      display: none;
    }

    textarea#input-vals,
    .fa-valores {
      display: block;
      margin-top: 5px;
      margin-bottom: 15px;
      width: 100%;
      height: 80px;
      resize: vertical;
    }

    .code-zone-to-append {
      position: relative;
    }

    .codebox pre {
      overflow: auto;
      max-width: 100%;
      width: 100%;
      max-height: 250px;
      background-color: #ffffff;
      color: #282828;
      border-radius: 3px;
      margin: 10px 0px;
      border: none!important;
      padding: 20px 15px 20px 20px!important;
      position: relative;
    }

    code.codebox > pre ol li {
      list-style-type: decimal!important;
      background-color: #fff!important;
    }

    code.codebox > pre ol.linenums {
      margin-left: 0px;
      padding-left: 0px;
    }


    /*
     * Tables:
     */

    table {
      display: inline-block;
      max-width: 194px;
      border-spacing: 0;
      border: solid 0px;
      border-collapse: collapse;
      overflow: auto;
      border-radius: 2px;
      border: solid 2px #fff

    }

    table thead tr {
      background-color: #39c;
    }

    table thead tr td {
      background-color: #39c;
      color: #fff;
      border-right: solid 1px #fff;
    }

    table tr {
      background-color: #fff;
      border-top: 1px solid #d3d3d3;
    }

    table tr td {
      border: 1px solid #39c;
      color: #333;
      text-align: center;
      padding: 5px 5px;
    }

    table thead tr td:last-child {
      border-right: solid 1px #39c;
    }

    /*
     * Responsive:
     */
    @media (max-width: 1345px) {
      body.is-editing .fa-form-group input,
      body.is-editing .fa-form-group textarea,
      body.is-editing .fa-form-group select {
        width: 85%;
      }
    }

    @media (max-width: 1015px) {
      .form-progress {
        padding: 20px 30px;
      }

      .form-progress.clearfix * {
        font-size: 13px;
      }

      header.page-header {
        padding: 40px 60px;
      }

      span.progress-status {
        height: 20px;
        width: 20px;
        line-height: 20px;
        margin-right: 8px;
      }

      body.is-editing .fa-form-group input,
      body.is-editing .fa-form-group textarea,
      body.is-editing .fa-form-group select {
        width: 75%;
      }
    }

    @media (max-width: 1099px) {
      .part {
        width: 75%;
      }
    }

    @media (max-width: 909px) {
      .part {
        width: 80%;
      }
    }

    @media (max-width: 809px) {
      .part {
        width: 80%;
      }

      .part.create-text {
        -ms-flex-wrap: wrap;
        -moz-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        -o-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .config-form {
        border-left: solid 0px;
        margin-left: 0px;
        padding-left: 0px;
        min-height: initial;
      }

      .presets-table {
        display: block;
        border-bottom: solid 2px #fff;
        padding-bottom: 10px;
        margin-bottom: 5px;
        width: 100%;
        max-width: initial!important;
      }
    }

    @media (max-width: 650px) {
      #footer .bloc {
        float: none;
        width: 100%;
        text-align: center;
      }

      header.page-header {
        padding: 40px 30px;
      }

      header.page-header a.logo {
        font-size: 28px;
        padding-left: 70px;
      }

      header.page-header .social {
        display: none;
      }

      .form-progress {
        padding: 20px 30px;
      }

      .form-progress .progress-text {
        display: none;
      }

      .global-part-1 .part {
        margin-left: 10px;
        width: 75%;
      }

      .global-part-2 .part,
      .global-part-3 .part {
        width: 90%;
      }

      body.is-editing .fa-form-group {
        border-bottom: solid 2px #fff;
        padding-bottom: 5px;
      }

      body.is-editing .fa-form-group input,
      body.is-editing .fa-form-group textarea,
      body.is-editing .fa-form-group select {
        width: 58%;
      }

      .modal {
        width: 97%;
        top: 5px;
        max-height: 98vh;
        overflow: auto;
      }
    }
  </style>
</head>
<body>

  <header class="page-header clearfix">
    <a href="/" class="logo"><strong style="color:#39C;">Forum</strong>eiros</a>

    <div class="social">
      <a class="social-button fb-but" href="https://www.facebook.com/forumeirospt" target="_blank" title="Facebook"><i class="fa fa-facebook"></i></a>
      <a class="social-button tw-but" href="https://twitter.com/Forumeiros_PT" target="_blank" title="Twitter"><i class="fa fa-twitter"></i></a>
      <a class="social-button yt-but" href="https://www.youtube.com/user/tvforumeiros" target="_blank" title="Youtube"><i class="fa fa-youtube-play"></i></a>
      <a class="social-button rs-but" href="/feed/?f=1" target="_blank" title="Feed de Notícias"><i class="fa fa-rss"></i></a>
    </div>
  </header><!-- .page-header -->

  <div class="form-progress clearfix">
    <div class="form-progress-inner">
      <div id="step-1" class="step">
        <span class="progress-status">
          <span>1</span>
        </span>
        <span class="progress-text">Crie os Campos</span><i class="fa fa-chevron-right"></i>
      </div>

      <div id="step-2" class="step inactive">
        <span class="progress-status">
          <span>2</span>
        </span>
        <span class="progress-text">Configurar o formulário</span><i class="fa fa-chevron-right"></i>
      </div>

      <div id="step-3" class="step inactive" title="Clique no botão 'Gerar Código' (na parte 2) para gerar o código!">
        <span class="progress-status">
          <span>3</span>
        </span>
        <span class="progress-text">Instalação</span>
      </div>
    </div>
  </div><!-- .form-progress -->

  <div class="global-wrap global-part-1" style="display: block;">
    <div class="info-text align-center">
      <img src="https://i.imgur.com/qNpIots.png" alt="Gerador de Formulários (Imagem)" />
      <h1 style="color: #e6ad1d;">Gerador de Formulários</h1><span class="badge">2.0</span>
      <p>
        Os formulários de postagem servem para agilizar a postagem de tópicos que seguem um determinado padrão. Anteriormente era necessário desenvolver cada formulário manualmente, porém com esse gerador é possível produzir um trabalho de qualidade sem ter que escrever uma linha de código.
        <br/><br/>
        Para <strong>começar</strong>, clique no <strong>sinal de adição</strong> na barra de navegação à direita. Caso você queira editar um campo, clique no lápis, e caso queira excluir um campo, clique no sinal de subtração.
        <br/><br/>
        Se achar que este formulário está muito complexo, você poderá utilizar o nosso <a href="/h15-">modelo antigo</a>.
      </p>
    </div>

    <div class="wrap">
      <div class="part create-inputs clearfix">

        <h2 class="part-title"><i class="fa fa-edit"></i> Crie os Campos</h2>
        <div class="wrapper-inner">
          <div class="prev-wrap">
            <!-- ENTRY PREV BEGIN -->
            <div class="entry-prev"></div>
            <!-- ENTRY PREV END -->
          </div><!-- .prev-wrap -->
          <button id="create-text-btn" class="font next-part">Próxima Parte <i class="fa fa-angle-right"></i></button>
        </div><!-- .wrapper-inner -->

        <div class="edit-section">
          <div id="add-field" class="field-control">
            <i class="fa fa-plus" title="Clique aqui para criar um novo campo."></i>
            <span class="sr-only"> + </span>
          </div>
          <div id="edit-field" class="field-control">
            <i class="fa fa-pencil" title="Clique aqui para editar um campo já criado."></i>
            <span class="sr-only"> Editar </span>
          </div>
          <div id="remove-field" class="field-control">
            <i class="fa fa-minus" title="Clique aqui para excluir um campo já criado."></i>
            <span class="sr-only"> - </span>
          </div>
        </div><!-- .edit-section -->

      </div><!-- .part .create-inputs -->
    </div><!-- .wrap -->
  </div><!-- .global-wrap.global-part-1 -->

  <div class="global-wrap global-part-2" style="display: none;">
    <div class="info-text align-center">
      <img src="https://i.imgur.com/iJSucBj.png" alt="Gerador de Formulários (Imagem)" />
      <h1 style="color: #e53;">Configurar o Formulário</h1>
      <p>
        Agora que você já criou os devidos campos de seu formulário, você poderá criar o título, a mensagem e a descrição os quais seu formulário postará.
        <br><br>
        Na tabela abaixo, você terá o nome (label) do input, seguido do seu código de incorporação, o qual você poderá usar no título, descrição ou mensagem. Ele irá se repor automaticamente pelo valor do campo.
        <br><br>
        Se você quiser voltar à etapa anterior, você pode voltar pelo botão "voltar", abaixo ou pelo menu de navegação (acima).
      </p>
    </div>
    <div class="wrap">
      <div class="part create-text clearfix">
        <div class="presets-table">
          <table>
            <thead>
              <tr class="non-removable">
                <td>Input</td>
                <td>Código</td>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
        <div class="config-form">
          <div class="fa-form-group default-group">
            <label for="form-function">Qual a função deste formulário?</label>
            <select id="form-function" required>
              <option value="" selected disabled>Selecione...</option>
              <option value="form-newtopic">Criar um novo tópico.</option>
              <option value="form-newpost">Responder à um tópico já existente.</option>
            </select>
          </div>

          <form class="config-part part-fa-newtopic" data-toggle="form-newtopic" style="display: none;">
            <div class="fa-form-group">
              <label for="fa-form-title">Título do formulário:</label>
              <input type="text" id="fa-form-title" required />
            </div>

            <div class="fa-form-group">
              <label for="fa-newtopic-title">Título do tópico:</label>
              <input type="text" id="fa-newtopic-title" required />
            </div>

            <div class="fa-form-group">
              <label for="fa-newtopic-number">ID do fórum à qual será postado:</label>
              <input type="number" id="fa-newtopic-number" required />
            </div>

            <div class="fa-form-group">
              <label for="fa-newtopic-message">Mensagem:</label>
              <textarea id="fa-newtopic-message" required></textarea>
            </div>

            <button data-code="topiccode" type="submit" class="generate-code font next-part">Gerar Código <i class="fa fa-angle-right"></i></button>
          </form>

          <form class="config-part part-fa-newpost" data-toggle="form-newpost" style="display: none;">
            <div class="fa-form-group">
              <label for="fa-form-title">Título do formulário:</label>
              <input type="text" id="fa-form-title" required />
            </div>

            <div class="fa-form-group">
              <label for="fa-newpost-number">ID do tópico à qual será postado:</label>
              <input type="number" id="fa-newpost-number" required />
            </div>

            <div class="fa-form-group">
              <label for="fa-newpost-message">Mensagem:</label>
              <textarea id="fa-newpost-message" required></textarea>
            </div>

            <button data-code="postcode" type="submit" class="generate-code font next-part">Gerar Código <i class="fa fa-angle-right"></i></button>
          </form>
        </div>

        <!-- Back btn -->
        <button style="cursor: not-allowed;" class="pseudo-next-btn next-part-fake">Gerar Código <i class="fa fa-angle-right"></i></button>
        <button id="back-to-1" class="back-part-btn font"><i class="fa fa-angle-left"></i> Voltar</button>
      </div><!-- .part .create-text -->
    </div>
  </div><!-- .global-wrap.global-part-2 -->

  <div class="global-wrap global-part-3" style="display: none;">
    <div class="info-text align-center">
      <img src="https://i.imgur.com/K8UZFrP.png" alt="Gerador de Formulários (Imagem)" />
      <h1 style="color: #88cc55;">Instalação</h1>
      <p>
        Agora que você já completou todos os paços do gerador, você pode instalar o seu <strong>novo</strong> formulário em seu fórum! Para isso, siga os passos que serão colocados à seguir.
        <br/> <br/>
        Este gerador de formulários foi feito por <a href="/u47631">Luiz~</a>. Se você tem dúvidas, sugestões ou deseja comunicar um problema, contate o mesmo ou um <strong><span style="color: #EF3333;">Admin</span>eiro</strong> do Fórum dos Fóruns.
      </p>
    </div>
    <div class="wrap">
      <div class="part generate-code clearfix">
        <div class="install-wrapper">
          <h2 class="part-title"><i class="fa fa-edit"></i> Criação da página HTML (<span class="html-form-type"></span>)</h2>
          <div class="install-code">
            <p>
              Em seu <strong>Painel de Controle</strong>, aceda à:
              <br />
              <strong>Módulos <i class="fa fa-long-arrow-right"></i> Gestão das Páginas HTML & JavaScript <i class="fa fa-long-arrow-right"></i> Gestão das Páginas HTML.</strong>
              <br />
              Feito isso, <strong>crie uma nova página</strong> com o código a seguir. Frisa-se que o título fica à seu critério.
              <br />
              Ressalta-se também que caso seja de seu agrado, você pode personalizar o formulário, tanto no quesito HTML, quanto no CSS, desde que você tenha conhecimento no assunto.
            </p>
            <!-- O código será gerado aqui -->
            <div class="code-zone-to-append">
              <code id="generated-code-zone" class="codebox">
                <pre class="lang-html prettyprint"></pre>
              </code>
            </div>
          </div>
        </div>

        <!-- Back btn: -->
        <button id="back-to-2" class="back-part-btn font"><i class="fa fa-angle-left"></i> Voltar</button>
      </div><!-- .part .generate-code -->
    </div>
  </div><!-- .global-wrap.global-part-3 -->

  <!-- BEGIN Footer -->
  <div id="footer">
    <div class="content">
      <div>&nbsp;</div>
      <div class="bloc">
        <strong class="h3">Forumeiros</strong>
        <div><a href="/">Voltar ao suporte</a></div>
        <div><a href="/h1-">Formulário antigo</a></div>
        <div><a href="/feed/?f=1" target="_blank">Anúncios &amp; Atualizações</a></div>
        <div><a href="http://www.forumeiros.com/beneficios-do-forum" target="_blank">Benefício de ter um fórum</a></div>
        <div><a href="http://www.forumeiros.com/criar-forum/phpbb3" target="_blank">Não tem um fórum? Criar um fórum!</a></div>
      </div>

      <div class="bloc">
        <strong class="h3">Sub-fóruns da categoria</strong>
        <div><a href="/h4-" target="_blank">Atendimento ao usuário</a></div>
        <div><a href="/f6-" target="_blank">Fórum de análises</a></div>
        <div><a href="/c9-" target="_blank">Fórum das Publicidades</a></div>
        <div><a href="/f61-" target="_blank">Parcerias</a></div>
      </div>

      <div class="bloc">
        <strong class="h3">Siga-nos</strong>
        <div><a href="https://www.facebook.com/forumeirospt" target="_blank"><i class="fa fa-facebook"></i> Facebook</a></div>
        <div><a href="https://twitter.com/Forumeiros_pt" target="_blank"><i class="fa fa-twitter"></i> Twitter</a></div>
        <div><a href="https://www.youtube.com/user/tvforumeiros" target="_blank"><i class="fa fa-youtube-play"></i> Youtube</a></div>
      </div>

      <div class="bloc">
        <strong class="h3">Informações</strong>
        <div><a href="/t7556-" target="_blank">Equipe Forumeiros</a></div>
        <div><a href="/t23-" target="_blank">Questões frequentes</a></div>
        <div><a href="/t6745-" target="_blank">Tutoriais, dicas e astúcias</a></div>
        <div>
          <p>Gerador feito por <u><a href="/u47631" target="_blank">Luiz~</a></u>.</p>
        </div>
      </div>

      <div style="clear:both"></div>
      <hr />
      <div class="footer-link">
        <div><a href="http://www.forumeiros.com/criar-forum/phpbb3" target="_blank"><span>Criar um fórum</span></a></div>
        <div><img src="https://i.imgur.com/RGPmnyq.png" alt="Fórum grátis"></div>
        <div><a href="http://www.forumeiros.com/" target="_blank"><span>© 2015, forumeiros.com</span></a></div>
      </div>
    </div>
  </div>

  <!-- Javascript's -->
  <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.7.1/clipboard.min.js"></script>
  <script type="text/javascript" src="https://lffg.github.io/fdf/js/form-functions.js"></script>

</body>
</html>
