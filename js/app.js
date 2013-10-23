var to_dos = [{'complete': false },
{'description' : 'mess up my to do app'},
{'description': 'Take out the garbage', 'complete': false}, 
{'description': 'Wash the dishes', 'complete': false}, 
{'description': 'Grade homework', 'complete': true}, 
{'description': 'Vacuum and dust', 'complete': false}, 
{'description': 'Kick back and relax', 'complete': true}];

var count = 1;
document.write('<ul class="list-group">');

for(var i=0; i < to_dos.length; i++) {
    
    try {
        printTask(to_dos[i]);
    } catch(error) {
        console.log("There was an error: " + error);
    }
    
}    

document.write('</ul>');

function printTask(task) {
    
    if(typeof task.description == 'undefined') {
        throw 'This task is missing a description!';
    }
    
    if(typeof task.complete == 'undefined') {
        throw 'This task is missing a complete status!';
    }
        
    if(task.complete) {
        document.write('<li class="list-group-item success">' + count + '<span class="glyphicon glyphicon-chevron-right"></span>   ' + task.description + '</li>'); 
    } else {
        document.write('<li class="list-group-item">' + count + '<span class="glyphicon glyphicon-chevron-right"></span>   ' + task.description + '</li>'); 
    }
    
    count++;
}