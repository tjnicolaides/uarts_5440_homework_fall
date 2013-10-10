var to_dos = ['Take out the garbage', 'Wash the dishes', 'Grade homework', 'Vacuum and dust', 'Kick back and relax'];

document.write('<ul class="list-group">');

for(var i=0; i < to_dos.length; i++) {

    document.write('<li class="list-group-item"><span class="glyphicon glyphicon-chevron-right"></span>   ' + to_dos[i] + '</li>'); 
    
}    

document.write('</ul>');