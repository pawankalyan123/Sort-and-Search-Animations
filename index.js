const express=require('express');
const app=express();
const ejs=require('ejs');
const PORT=process.env.PORT;
app.set('view engine','ejs');
app.use('/public',express.static('public'));

app.get('/',(req,res)=>{
     res.render('Home');
});
app.get('/BubbleSort',(req,res)=>{
    res.render('Sort',{sort:"BubbleSort",stop:"bstop",resume:"bresume",start:"bstart",TimeComplexity:"Worst Time Complexity=O(N^2)",definition:"Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order." });
});
app.get('/SelectionSort',(req,res)=>{
    res.render('Sort',{sort:"SelectionSort",stop:"Sstop",resume:"Sresume",start:"Sstart",TimeComplexity:"Worst Time Complexity=O(N^2)",definition:"Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list."});
});
app.get('/InsertionSort',(req,res)=>{
    res.render('Sort',{sort:"InsertionSort",stop:"Istop",resume:"Iresume",start:"Istart",TimeComplexity:"Worst Time Complexity=O(N^2)",definition:"In an insertion sort, each element in the array is checked with the previous elements, resulting in a growing sorted output list."});
});

app.get('/LinearSearch',(req,res)=>{
    res.render('Search',{Search:"LinearSearch",type:"lsearch",TimeComplexity:"Worst Time Complexity=O(N)",definition:'Linear search or sequential search is a method for finding an element within a list. It sequentially checks each element of the list until a match is found or the whole list has been searched.'});
});
app.get('/BinarySearch',(req,res)=>{
    res.render('Search',{Search:"BinarySearch",type:"bsearch",TimeComplexity:"Worst Time Complexity=O(logN)",definition:'Binary Search is defined as a searching algorithm used in a sorted array by repeatedly dividing the search interval in half.'});
});

app.get('/Sort.js', function(req, res) {
    res.set('Content-Type', 'text/javascript');
    res.sendFile(__dirname + '/Sort.js');
});
app.get('/Search.js', function(req, res) {
    res.set('Content-Type', 'text/javascript');
    res.sendFile(__dirname + '/Search.js');
});

app.listen(PORT,(req,res)=>{
    console.log('server is running');
})
