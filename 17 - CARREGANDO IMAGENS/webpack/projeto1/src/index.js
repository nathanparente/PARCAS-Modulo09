import $ from 'jquery';
import './css/style.css';
import cameraflash from './images/camera-flash.png';
import camera from './images/camera.png';
import gallery from './images/gallery.png';

$(function(){
    $('#botao').on('click', function(){
        $('h1').html('Olá Mundo ALTERADO!');

        $(this).addClass('botao');
    });
    $('#imagem').attr('src', cameraflash);
    $('#imagem').attr('src', gallery);
});