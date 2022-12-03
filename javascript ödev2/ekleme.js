const liste= document.querySelector("#list");
const listen =document.querySelector("#ekle");
const yapilacak= document.querySelector("#task");
const alertWarning = document.querySelector('.alert-warning');
listen.addEventListener('submit',newElement);
function newElement(event){
    event.preventDefault();
   if(yapilacak.value !=""){
    const eklenecek = document.createElement('li');
    eklenecek.innerHTML = yapilacak.value;
    liste.appendChild(eklenecek);
    yapilacak.value="";

    const span = document.createElement('span');
    span.innerHTML = "X";
    eklenecek.appendChild(span);
   }
   else{

    alertWarning.style.display = 'block';
        setTimeout(() => {
            alertWarning.style.display = 'none';
        }, 1500);
   }

   const kapat = document.querySelectorAll('#list span');
   for(let i=0; i<kapat.length;i++){
        kapat[i].addEventListener('click',()=>{
        kapat[i].parentElement.style.display="none";
        kapat[i].parentElement.remove();

    })

   }
   


}