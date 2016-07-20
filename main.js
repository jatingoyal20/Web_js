var notes = [],
    $addNote = $('#add-note'),
    addNoteForm = $addNote.find('.header-form'),
    $notes = $('.notes'),
    notesContainer = $notes.find('.container'),
    note_title = addNoteForm.find('input[name="note_title"]'),
    note_content = addNoteForm.find('textarea[name="note_content"]');

var cnt = 0;

function appendSingleNote(data) {
    var content = data.content, title = data.title, count = data.id;
    
    var html = '<div class="note" id="' + count + '">' +
                    '<p class="note-title">' +
                    '<button onclick="removeNote(' + count + ')" color:black; height: 20px; width: 20px"> </button>' + 
                    title + 
                    '</p>' +
                    '<p class="note-content">' +
                        content + 
                    '</p>' + 
                '</div>';
    
    notesContainer.append(html);
    cnt ++;
}

function storeNote(data) {
    
    notes.push(data);
    window.localStorage.setItem('notes', JSON.stringify(notes));
    
    appendSingleNote(data);
}

function init() {
    if (!!window.localStorage.getItem('notes')) {
        notes = JSON.parse(window.localStorage.getItem('notes'));
    } else {
        notes = [];
    }
    
    var i;
    for (i = 0; i < notes.length; i++) {
        appendSingleNote(notes[i]);
    }
}
function genID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
     var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
     return v.toString(16);
  });
}

addNoteForm.on('submit', function(e) {
//    e.preventDefault();
    var data = {title: note_title.val(), content: note_content.val(), id: genID};    
    
    storeNote(data);
})

init();

function removeNote(id) {

    notes = notes.filter(function(e) {
        return e.id !== id;
    });
    window.localStorage.setItem('notes', JSON.stringify(notes));
    
    var parent = document.getElementById('notes_all');
    var child = document.getElementById(id);
    parent.removeChild(child);
}