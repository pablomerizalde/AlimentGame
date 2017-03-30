/*var car = document.getElementsById("barr1");
var col = document.getElementsById("barr2");
var acz = document.getElementsById("barr3");
var azc = document.getElementsById("barr4");*/



function add(i){
	console.log(obj[i]);
	if((carb+obj[i].carbohidratos)<=100){
		carb+=obj[i].carbohidratos;
		$('#barr1').css('width', carb + '%');
	}else{
		$('#barr1').removeClass('progress-bar-success');
		$('#barr1').addClass('progress-bar-danger');
	}
	cole+=obj[i].colesterol;
	$('#barr2').css('width', cole + '%');
	acid+=obj[i].acidez;
	$('#barr3').css('width', acid + '%');
	azuc+=obj[i].azucar;
	$('#barr4').css('width', azuc + '%');

}

