$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-letras').show('1000');
        } else {
            $('.cont-letras').not('.' + valor).hide('1000');
            $('.cont-letras').filter('.' + valor).show('1000');
        }
    });
});