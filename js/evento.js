/*var car = document.getElementsById("barr1");
var col = document.getElementsById("barr2");
var acz = document.getElementsById("barr3");
var azc = document.getElementsById("barr4");*/
console.log("HOLA");



function addUnidad(i){
	//console.log(obj[i]);

	if(obj[i].activo){
		obj[i].activo=false;
		$(obj[i].id).removeClass("img-selected");
	}
	else
	{
		obj[i].activo=true;
		$(obj[i].id).addClass("img-selected");
		//stack.push(obj[i]);
	}
	console.log(obj[i].activo);
}


function alimentar(){
	for (var i = obj.length - 1; i >= 0; i--) {
		if(obj[i].activo){
			add(obj[i])
			obj[i].activo=false;
			$(obj[i].id).removeClass("img-selected");
		}
		//add(stack[i]);
	}
	//stack = [];
}

function add(com){
	console.log(com);
	carb = updateBarra(com.carbohidratos, carb, '#barr1',0,100,30,60);
	cole= updateBarra(com.colesterol, cole, '#barr2',0,100,20,70) ;
	acid= updateBarra(com.acidez, acid, '#barr3',0,100,20,70) ;
	azuc = updateBarra(com.azucar, azuc, '#barr4',0,100,20,70) ;
}

