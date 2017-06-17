/*
 *! functions.js
 *
 *  The code for this can be found here:
 *  https://github.com/lffg/fdf/blob/gh-pages/js/form-functions.js
 *
 *  @author Luiz~
 *
 */
(function ($) {
  'use strict';

  $(function () {
    $.get('/fdf/js/form-functions.js')
      .done(function () {
        console.log('[Gerador] JavaScript Principal Carregado com Sucesso!');
      })
      .fail(function () {
        alert([
          'Houve um erro ao tentar carregar o arquivo JavaScript.',
          '',
          'Tente verificar a URL abaixo:',
          'https://lffg.github.io/fdf/js/form-functions.js',
          '',
          '[AJAX ERROR]'
        ].join('\n'))
        ;
      })
    ;
  });
}(jQuery));
