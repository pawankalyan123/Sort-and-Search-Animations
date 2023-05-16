const item=document.querySelector('.Node');
const Nodes=document.querySelectorAll('li');
const lSearch=document.querySelector('.lsearch');
const bSearch=document.querySelector('.bsearch');
const Found=document.querySelector('.found');
const decider=document.querySelector('.def').innerText[0];
item.style.backgroundColor='green';
if(decider==='L')
{
function LinearSearch(i)
{
    if(i<6)
    {
        Nodes[i].style.backgroundColor='red';
        if(Nodes[i].innerText===item.innerText)
        {
            setTimeout(()=>{
                Nodes[i].style.backgroundColor='green';
                Found.innerText='Found';
                Found.style.backgroundColor='green';
                LinearSearch(7);
            },100);
        }
        else
        {
            setTimeout(()=>{
                Nodes[i].style.backgroundColor='white';
                LinearSearch(i+1);    
            },1000);
        }
    }
    else if(i===6)
    {
        Found.innerText='Not Found';
        Found.style.backgroundColor='red';
    }
}

lSearch.onclick=()=>{
    LinearSearch(0);
}
}

if(decider==='B'){
function BinarySearch(start,end)
{
    if(start>end)
    {
        Found.innerText='Not Found';
        Found.style.backgroundColor='red';
        return 0;
    }
    mid=parseInt((start+end)/2);
    Nodes[start].style.backgroundColor='red';
    Nodes[end].style.backgroundColor='red';
    Nodes[mid].style.backgroundColor='green';
    a=parseInt(item.innerText);
    b=parseInt(Nodes[mid].innerText)
    setTimeout(()=>{
        if(a===b)
    {
        Nodes[start].style.backgroundColor='white';
        Nodes[end].style.backgroundColor='white';
        Nodes[mid].style.backgroundColor='green';
        Found.innerText='Found';
        Found.style.backgroundColor='green';
    }
    else if(a>b)
    {
        Nodes[start].style.backgroundColor='white';
        Nodes[end].style.backgroundColor='white';
        Nodes[mid].style.backgroundColor='white';     
        BinarySearch(mid+1,end);
    }
    else
    {
        Nodes[start].style.backgroundColor='white';
        Nodes[end].style.backgroundColor='white';
        Nodes[mid].style.backgroundColor='white';     
        BinarySearch(start,mid-1);
    }
    },1500);
    
}

bSearch.onclick=()=>{
    BinarySearch(0,5);
}
}
