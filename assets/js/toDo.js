
 
  let toDoList = document.getElementById('saveTxet')
  let toDoInput = document.getElementById('writhT')
   
    toDoList.addEventListener('click', $trash)


 function _addToDo(){
    /// event.preventDefault();
    if(toDoInput.value.length == 0){
        toDoInput.value = ""    
       alert('Please Enter samething')
        }

   let _divToDO =   document.createElement('div')
        _divToDO.classList.add('divTo')

   let _li = document.createElement('li')
      _li.classList.add("_liTo")
   _li.innerText = toDoInput.value

   _divToDO.appendChild(_li)

   
   toDoInput.value = ""

   let  _trash = document.createElement("buttom")
   _trash.innerHTML= "<i class='bi bi-trash'></i>"
      _trash.classList.add('btn')
   _divToDO.appendChild(_trash)


   toDoList.appendChild(_divToDO)
   
 }

 function $trash(event){

 // console.log(event.target)
  
 const  items = event.target
   
  if(items.classList[0] === 'btn'){
    const  todo = items.parentElement
   // console.log('hello')
     todo.remove()
  }
 

 }












  /*  addToDoButton.addEventListener('click', function(){
      let  _ul = document.createElement('ul')
       _ul.classList.add('paragraph-styling')
       _ul.innerText = inputField.value
      toDoContainer.appendChild(_ul)
      inputField.value = '';
     
       _ul.addEventListener('dblclick', function(){
          if(window.confirm('Excluir ' +  _ul.innerText + '?')){
              toDoContainer.removeChild(_ul)
          }
      })
  }) */