

function printTask(task) {
    
    if(typeof task.description == 'undefined') {
        throw 'This task is missing a description!';
    }
    
    if(typeof task.complete == 'undefined') {
        throw 'This task is missing a complete status!';
    }
        
    if(task.complete) {
        return $('<li/>', {'class' : 'list-group-item success'}).text(' ' + task.description).prepend($('<span/>', {'class' : 'glyphicon glyphicon-chevron-right'}));
    } else {
        return $('<li/>', {'class' : 'list-group-item'}).text(' ' + task.description).prepend($('<span/>', {'class' : 'glyphicon glyphicon-chevron-right'}));
    }
    
}

function removeCompleted() {
    $('.success').remove();
}
var to_dos;

$(document).ready(function(){
    to_dos = [{'complete': false },
    {'description' : 'mess up my to do app'},
    {'description': 'Take out the garbage', 'complete': false}, 
    {'description': 'Wash the dishes', 'complete': false}, 
    {'description': 'Grade homework', 'complete': true}, 
    {'description': 'Vacuum and dust', 'complete': false}, 
    {'description': 'Kick back and relax', 'complete': true}];
    
    var $ul = $('<ul/>', {'class' : 'nav nav-list'});
    
    for(var i=0; i < to_dos.length; i++) {
        
        try {
            $ul.append(printTask(to_dos[i]));
        } catch(error) {
            console.log("There was an error: " + error);
        }
        
    }    
    
    $('.panel-primary').append($ul);    

});



