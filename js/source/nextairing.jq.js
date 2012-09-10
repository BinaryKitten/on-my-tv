$(document).ready(function() {
    $('table.nextair').each(function(i) {
        $('tr.ep:even',$(this)).addClass('even');
        $('tr.epdesc:odd',$(this)).addClass('odd');
    });
    
    
    if(location.hash != '') {
        $(location.hash).next('tr.epdesc').show();
        ll = $('#y_' + location.hash.substring(3));
        ll.text('-' + ll.text().substring(1));
    }
    
    $('a.openlink').click(function() {
        $(this).parents().next('tr.epdesc').toggle();
        t = $(this).text();
        if(t.substring(0,1) == '+') {
            $(this).text('-' + t.substring(1));
        } else {
            $(this).text('+' + t.substring(1));
        }
    });

   
});
