

function printTask(task) {
    
    if(typeof task.description == 'undefined') {
        throw 'This task is missing a description!';
    }
    
    if(typeof task.complete == 'undefined') {
        throw 'This task is missing a complete status!';
    }
        
    if(task.complete) {
        return '<li class="list-group-item success"><span class="glyphicon glyphicon-chevron-right"></span>   ' + task.description + '</li>'; 
    } else {
        return '<li class="list-group-item"><span class="glyphicon glyphicon-chevron-right"></span>   ' + task.description + '</li>'; 
    }
    
}

function removeCompleted() {
    $('.success').remove();
}


$(document).ready(function(){
    var to_dos = [{'complete': false },
    {'description' : 'mess up my to do app'},
    {'description': 'Take out the garbage', 'complete': false}, 
    {'description': 'Wash the dishes', 'complete': false}, 
    {'description': 'Grade homework', 'complete': true}, 
    {'description': 'Vacuum and dust', 'complete': false}, 
    {'description': 'Kick back and relax', 'complete': true}];
    
    var html_container = '<ul class="list-group">';
    
    for(var i=0; i < to_dos.length; i++) {
        
        try {
            html_container += printTask(to_dos[i]);
        } catch(error) {
            console.log("There was an error: " + error);
        }
        
    }    
    
    html_container += '</ul>';
    
    console.log(html_container);
    
    $('.panel-primary').append(html_container);    
});



