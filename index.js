// var h= document.createElement('h1')
// var myvalue=document.createTextNode('hello sai')
// h.append(myvalue)
// document.querySelector('h1').appendChild(h)
var addbutton=document.getElementById('add');
addbutton.addEventListener('click',addItem)

var removebutton=document.getElementById('remove');
removebutton.addEventListener('click',removeitem)

var ul=document.getElementById('list');
var li;


localStorage.setItem('hero','Thor')
var ls=localStorage.getItem('hero')
// var lss=localStorage.removeItem('hero')
console.log(ls)
// var h=document.createElement('p')
// var val=document.createTextNode("enter the value")
// h.before('list')


function addItem()
{
   // console.log("add button")
   var input1=document.getElementById('input')
   var item=input1.value;
   ul=document.getElementById('list')
   var textnode=document.createTextNode(item)
   if(item === '')
   {
    var h=document.createElement('p')
    var val=document.createTextNode("enter the value")
    h.append(val)
    document.querySelector('ul').appendChild(h)
       return false
   }
   else
   {
       //create li
       var li=document.createElement('li')
       //create checkbox
       var  checkbox=document.createElement('input')
       checkbox.type='checkbox';
       checkbox.setAttribute('id','check')

       var lable=document.createElement('label')
       lable.setAttribute('for','item')//optional
   
       ul.appendChild(lable)
       li.appendChild(checkbox)
       lable.appendChild(textnode)
       li.appendChild(lable)
       ul.insertBefore(li,ul.childNodes[0]);
       setTimeout(()=>{
        li.className='visual'
       },1);
       
       input1.value=' '
    }

}


function removeitem()
{
   li=ul.children
   for(let i=0;i<li.length;i++)
   {
       while(li[i] && li[i].children[0].checked)
       {
           ul.removeChild(li[i])
       }
    //    const ele=li[i];
    //    console.log(ele)
   }
//    console.log(li)
}