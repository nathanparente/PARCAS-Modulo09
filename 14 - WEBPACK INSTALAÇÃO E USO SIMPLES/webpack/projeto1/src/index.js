import $ from 'jquery';

$ (function() {
    $('#botao').on('click', function() {
        $('h1').html('Olá Mundo ALTERADO!');
    });
});

