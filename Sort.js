
/////Bubble Sort/////////
const Nodes = document.querySelectorAll('li');
for (let i = 0; i < 5; i++) {
  Nodes[i].style.backgroundColor = 'white';
}
const decider=document.querySelector(".def").innerText[0];

if(decider==='B')
{
  const bstart = document.querySelector('.bstart');
const bstop = document.querySelector('.bstop');
const bresume = document.querySelector('.bresume');

let isSorting = false; // flag variable to track sorting status
let globalI=0;
let globalJ=0
let bubbleSort = (i, j) => {
    globalI=i;
    globalJ=j;
  if (i < 5) {
    if (j < 5 - i - 1) {
      Nodes[j].style.backgroundColor='red';
      Nodes[j+1].style.backgroundColor='red';
      if (isSorting) { // check if sorting is currently running
        const a = parseInt(Nodes[j].innerText);
        const b = parseInt(Nodes[j + 1].innerText);
        if (a > b) {
          setTimeout(() => {
            Nodes[j].innerText = b;
            Nodes[j + 1].innerText = a;
            Nodes[j].style.backgroundColor='white';
            Nodes[j+1].style.backgroundColor='white';
            bubbleSort(i, j + 1);
          }, 1500);
        } else {
          setTimeout(()=>{
            Nodes[j].style.backgroundColor='white';
            Nodes[j+1].style.backgroundColor='white';
            bubbleSort(i, j + 1);
          },1000)
        }
      }
    } else {
      Nodes[j].style.backgroundColor = 'green';
      bubbleSort(i + 1, 0);
    }
  }
};

bstart.onclick = () => {
  isSorting = true; 
  bubbleSort(0, 0);
};

bstop.onclick = () => {
  isSorting = false; 
};

bresume.onclick = () => {
  if (!isSorting) { 
    isSorting = true; 
    bubbleSort(
      parseInt(globalI),
      parseInt(globalJ)
    );
  }
};
}
/////////Selection Sort///////////
else if(decider=='S'){
const Sstart = document.querySelector('.Sstart');
const Sstop = document.querySelector('.Sstop');
const Sresume = document.querySelector('.Sresume');
let SelectionSort = (i, j) => {
    globalI=i;
    globalJ=j;
  if (i < 5) {
    Nodes[i].style.backgroundColor='red';
    if (j < 5) {
      Nodes[j].style.backgroundColor='red';
      if (isSorting) { // check if sorting is currently running
        const a = parseInt(Nodes[i].innerText);
        const b = parseInt(Nodes[j].innerText);
        if (a > b) {
          setTimeout(() => {
            Nodes[i].innerText = b;
            Nodes[j].innerText = a;
            Nodes[j].style.backgroundColor='white';
            SelectionSort(i, j + 1);
          }, 1500);
        } else {
          setTimeout(()=>{
            Nodes[j].style.backgroundColor='white';
            SelectionSort(i, j + 1);
          },1000);
        }
      }
    } else {
      Nodes[i].style.backgroundColor = 'green';
      SelectionSort(i+1,i+2);
    }
  }
};

Sstart.onclick = () => {
  isSorting = true; 
  SelectionSort(0, 1);
};

Sstop.onclick = () => {
  isSorting = false; 
};

Sresume.onclick = () => {
  if (!isSorting) { 
    isSorting = true; 
    
    SelectionSort(
      parseInt(globalI),
      parseInt(globalJ)
    );
  }
};
}
/////////Insertion Sort///////////
else if(decider=='I'){
const Istart = document.querySelector('.Istart');
const Istop = document.querySelector('.Istop');
const Iresume = document.querySelector('.Iresume');
let InsertionSort = (i, j) => {
    globalI=i;
    globalJ=j;
  if (i < 5) {
    if (j > 0 && j<5) {
      Nodes[j-1].style.backgroundColor='red';
      Nodes[j].style.backgroundColor='red';
      if (isSorting) { // check if sorting is currently running
        const a = parseInt(Nodes[j-1].innerText);
        const b = parseInt(Nodes[j].innerText);
        if (a > b) {
          setTimeout(() => {
            Nodes[j-1].innerText = b;
            Nodes[j].innerText = a;
            Nodes[j-1].style.backgroundColor='white';
            Nodes[j].style.backgroundColor='white';
            InsertionSort(i, j - 1);
          }, 1500);
        } else {
          setTimeout(()=>{
            Nodes[j-1].style.backgroundColor='white';
            Nodes[j].style.backgroundColor='white';
            InsertionSort(i+1, j + 1);
          },1000)
        }
      }
    } else {
      setTimeout(()=>{      
        InsertionSort(i+1,i+2);
      },1000);
    }
  }
};

Istart.onclick = () => {
  isSorting = true; 
  InsertionSort(0, 1);
};

Istop.onclick = () => {
  isSorting = false; 
};

Iresume.onclick = () => {
  if (!isSorting) { 
    isSorting = true; 
    
    InsertionSort(
      parseInt(globalI),
      parseInt(globalJ)
    );
  }
};
}
