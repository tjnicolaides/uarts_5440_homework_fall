

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
    
    $.ajax({
		url: 'http://api.usergrid.com/tjnicolaides/tasks/tasks',
		type: 'POST',
		data: JSON.stringify(newTask),
		success: function(data, textStatus, xhr) {
		    console.log(data);
		},
		error: function(msg) {
			console.log(msg);
		}
	});
	
    to_dos.push(newTask); // add the new task to to_dos using .push
    
    var $li = printTask(newTask);

    $('ul.nav-list').append($li);  // add the new task to the DOM
}

function getTasks() {
    
    $.ajax({
		url: 'http://api.usergrid.com/tjnicolaides/tasks/tasks',
		type: 'GET',
		success: function(data, textStatus, xhr) {
			console.log(data.entities);
			to_dos = data.entities;
			
			var $ul = $('<ul/>', {'class' : 'nav nav-list'});
    
            for(var i=0; i < to_dos.length; i++) {
                
                try {
                    $ul.append(printTask(to_dos[i]));
                } catch(error) {
                    console.log("There was an error: " + error);
                }
                
            }    
            
            $('.panel-primary').append($ul);

		},
		error: function(msg) {
			console.log(msg);
		}
	});

}

var to_dos;

$(document).ready(function(){
    getTasks();
});



