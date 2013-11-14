

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

function Task(description) {
        // take description as an argument
    var obj = {};
    
        obj.description = description || 'Default task name';
        obj.complete = false;
    
    var dueDate = new Date();
        dueDate.setDate(dueDate.getDate() + 7);
        obj.dueDate = dueDate; // add due date property
        
    return obj;
    // return object
}

function addTask(description) {
    // take descripton as an argument
    // fire new Task();
    
    var newTask = new Task(description);
    console.log(JSON.stringify(newTask));
    
    $.ajax({
        'url': 'http://api.usergrid.com/tjnicolaides/to_dos/to_dos',
        'type': 'POST',
        'data' : JSON.stringify(newTask),
        'success': function(data) {
            console.log(data);
        }
    });
    
    to_dos.push(newTask); // add the new task to to_dos using .push
    
    var $li = printTask(newTask);

    $('ul.nav-list').append($li);  // add the new task to the DOM
    
}

var to_dos;

$(document).ready(function(){
    
    $.ajax({
        'url': 'http://api.usergrid.com/tjnicolaides/to_dos/to_dos',
        'type': 'GET', 
        'success': function(data){
            console.log(data);
            to_dos = data.entities;
            /*to_dos = [{'complete': false },
            {'description' : 'mess up my to do app'},
            {'description': 'Take out the garbage', 'complete': false}, 
            {'description': 'Wash the dishes', 'complete': false}, 
            {'description': 'Grade homework', 'complete': true}, 
            {'description': 'Vacuum and dust', 'complete': false}, 
            {'description': 'Kick back and relax', 'complete': true}];*/
            
            var $ul = $('<ul/>', {'class' : 'nav nav-list'});
            
            for(var i=0; i < to_dos.length; i++) {
                
                try {
                    $ul.append(printTask(to_dos[i]));
                } catch(error) {
                    console.log("There was an error: " + error);
                }
                
            }    
            
            $('.panel-primary').append($ul);
    
        }
    });
    
    $('#newTaskForm').on('submit', function(event){
        event.preventDefault();

        var newTaskName = $(this).find('input').val();
        
        addTask(newTaskName);
    });

        

});



