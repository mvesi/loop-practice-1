// #1 - 0 100 200 300 400 500

for(var i=0 ; i <= 500 ; i++){

	console.log(i);
	i=i+99;

}

// #2 - 1 2 4 8 16 32 64

for(var i=1 ; i <= 64 ; i=i*2){

	console.log(i);
	// i=i*2;

}

// #3 - 1 1 1 2 2 2 3 3 3

for(var i=1 ; i<=3 ; i++){
	console.log(i);
	console.log(i);
	console.log(i);
}

// #4 - 0 2 4 6 8 10

for(var i=0 ; i<=10 ; i=i+2){
	console.log(i);
}

// #5 3 6 9 12 15

for(var i=3 ; i<=15 ; i=i+3){
	console.log(i);
}

// # 6 - 9 8 7 6 5 4 3 2 1 0

for(var i=9 ; i>=0 ; i--){
	console.log(i);
}

// #7 - 0 1 2 3 0 1 2 3 0 1 2 3

for(var j=0 ; j<3 ; j++){

	for(var	i=0 ; i<4 ; i++){
		console.log(i);
	}
}