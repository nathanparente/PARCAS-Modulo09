import $ from 'jquery';
import './css/teste.scss';
import Botao from './components/botao/index.js';

$(function(){
    
    let botao = new Botao();
    botao.setTitle('Testador');

    botao.setClick(function(){
        alert("CLICOU!");
    });

    $('.area').html(botao.render());

});