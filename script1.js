var arr = [1,2,3,4];
function printReverse(arr){
	for(var i=arr.length-1;i>=0;i++){
		console.log(arr[i]);
	}
}















/*
var ans = prompt("what would you like to do");
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