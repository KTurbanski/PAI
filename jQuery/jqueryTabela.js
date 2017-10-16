$(document).ready(function(){
    //$('tr:even').css('background','#b2aaaa');
    //$('tr:odd').css('background','#dbd1d1');

    $('#tabela1 tr:even').css('background','#b20000');
    $('#tabela1 tr:odd').css('background','#5aa5d4');
    $('#tabela1 tr:first').css('background','#cc2232');
    $('#tabela1 tr:last').css('background','#f2f2f2');
    $('#tabela1 tr:eq(3)').css('color','white');
    $('#tabela1 td:eq(3)').css('color','lightgreen');
    $('#tabela1 td:contains("Sól")').css('background','#dd222d');

    /*for(var i=1;i<10000;i++){
        document.write('Marek pedał ');
    }*/

    $('#widoczny').click(function(){
        $('#obraz').show();
    })

    $('#niewidoczny').click(function(){
        $('#obraz').hide();
    })







})
