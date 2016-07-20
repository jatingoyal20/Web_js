var notes=[],
	$addNote=$('.header'),
	addNoteForm=$addNote.find('.header-form'),
	$notes=$('.note-container'),
	noteTitle=addNoteForm.find('input[name="note_title"]'),
	noteContent=addNoteForm.find('textarea[name="note_content"]')

function appendSingleNote(data){
	var content=data.content,title=data.title;
	var html='<div class="note">'+
				'<h3 class="note-title">'+ title+'</h3>'+
				'<p class="note-content">'+
				content+
				'</p>'+
				'</div>';
	$notes.append(html);
}

function storeNote(data){
	notes.push(data);
	window.localStorage.setItem('notes',JSON.stringify(notes));
	appendSingleNote(data);
}


function init(){
	if(!!window.localStorage.getItem('notes')){

		notes=JSON.parse(window.localStorage.getItem('notes'));
	}
	else{

		alert('null');
		notes=[];
	}
}

addNoteForm.on('submit',function(e){
	e.preventDefault();
	// alert("click");
	var data= {title:noteTitle.val(),
		content:noteContent.val()};
	console.log(data);
	storeNote(data);
})