import $ from 'jquery';
import './style.css';

$ (function() {
    $('#botao').on('click', function() {
        $('h1').html('Olá Mundo ALTERADO!');

        $(this).addClass('botao');
    });
});

