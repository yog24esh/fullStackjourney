var p1 = 0;
var p2 = 0;
var disp1 = document.querySelector("#one");
var disp2 = document.querySelector("#two");


document.querySelector("#p1").addEventListener("click",function(){
	p1++;
	disp1.textContent  = p1;
});

document.querySelector("#p2").addEventListener("click",function(){
	p2++;
	disp2.textContent = p2;
});

document.querySelector("#reset").addEventListener("click",function(){
	p1=0;p2=0;
	disp1.textContent = 0;
	disp2.textContent = 0;
});

var score = document.querySelector("#score").textContent 
var number = document.querySelector("#number").textContent;
if(number>score){
	score = number;
}
/*
var arr = [
		{
		title:["3idiots","dangal","hello"],
		rating:[5,5,3],
		hasWatched:["watched","not seen","seen"]
	},
];

for(var i=0;i<arr[0].title.length;i++){
	console.log("you have "+arr[0].hasWatched[i] +arr[0].title[i] + " - " + arr[0].rating[i] + " stars");
}3



/*
var arr = [1,2,3,4];
var sum = 0;
function sumArray(arr){
	arr.forEach(function (item){
			sum += item;
	})
console.log(sum);
}






function printReverse(arr){
	for(var i=arr.length-1;i>=0;i--){
		console.log(arr[i]);
	}
}

/*var ans = prompt("what would you like to do");
var arr = [];
while(ans!="quit"){
	if(ans=="new") {
		var ans1 = prompt("add a new item");
		arr.push(ans1);
	}
	if(ans=="list") {
		var no = 0;
		console.log("*************");
		arr.forEach(function(item){
			console.log( no + ": "+ item);
			no++;
		}
		//console.log("*********");
		)
		console.log("********");
	}
	if(ans=="delete"){
		var ans2 = prompt("which item to delete");
		if(arr.indexOf(ans2)!="undefined"){
			arr = arr.slice(0,ans2)+arr(ans2+1);
		}
	} 
	ans = prompt("what would you like to do");
}*/