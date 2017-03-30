function updateBarra(sum, val, idBarra, min, max, lmin, lmax){
	/*	sum = valor a agregar
		val = valor original
		idBarra = barra a modificar
		min = valor min de la barra
		max = valor max de la barra
		lmin = cambio a color naranja min
		lmax = cambio color naranja a max
		Retorna el valor nuevo de val
	*/

	if(val==max){
		if(sum<0){
			val+=sum;
			$(idBarra).css('width', val + '%');
			$(idBarra).addClass('progress-bar-warning');
			$(idBarra).removeClass('progress-bar-danger');
		}
	}
	else if(val==min){
		if(sum>0){
			val+=sum;
			$(idBarra).css('width', val + '%');
			$(idBarra).addClass('progress-bar-warning');
			$(idBarra).removeClass('progress-bar-danger');
		}
	}
	else if((val+sum)>=max){
		val = max;
		$(idBarra).css('width', val + '%');
		$(idBarra).removeClass('progress-bar-warning');
		$(idBarra).addClass('progress-bar-danger');
	}
	else if((val+sum)>=lmax){
		val = val+sum;
		$(idBarra).css('width', val + '%');
		$(idBarra).removeClass('progress-bar-success');
		$(idBarra).addClass('progress-bar-warning');
	}
	else if((val+sum)<=min){
		val = min;
		$(idBarra).css('width', val + '%');
		$(idBarra).removeClass('progress-bar-warning');
		$(idBarra).addClass('progress-bar-danger');
	}
	else if((val+sum)<=lmin){
		val = val+sum;
		$(idBarra).css('width', val + '%');
		$(idBarra).removeClass('progress-bar-success');
		$(idBarra).addClass('progress-bar-warning');
	}
	else{
		val+=sum;
		$(idBarra).removeClass('progress-bar-warning');
		$(idBarra).addClass('progress-bar-success');
		$(idBarra).css('width', val + '%');
	}
	return val;
}

function starBarras(){

	carb = updateBarra(0, carb, '#barr1',0,100,20,70);
	cole= updateBarra(0, cole, '#barr2',0,100,20,70) ;
	acid= updateBarra(0, acid, '#barr3',0,100,20,70) ;
	azuc = updateBarra(0, azuc, '#barr4',0,100,20,70) ;
}

function barraInt(){
	//$('#barr4').
}