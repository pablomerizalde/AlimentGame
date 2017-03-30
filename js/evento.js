/*var car = document.getElementsById("barr1");
var col = document.getElementsById("barr2");
var acz = document.getElementsById("barr3");
var azc = document.getElementsById("barr4");*/
console.log("HOLA");



function add(i){
	console.log(obj[i]);
	carb = updateBarra(obj[i].carbohidratos, carb, '#barr1',0,100,30,60);
	cole= updateBarra(obj[i].colesterol, cole, '#barr2',0,100,20,70) ;
	acid= updateBarra(obj[i].acidez, acid, '#barr3',0,100,20,70) ;
	azuc = updateBarra(obj[i].azucar, azuc, '#barr4',0,100,20,70) ;
}

