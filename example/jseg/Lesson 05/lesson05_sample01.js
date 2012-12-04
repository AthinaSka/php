var total = 0;

for (var i = 0; i < 20; i++) {
    if (i % 3==0) {
        temp=i ;
       
    } 
    
    else{
    	temp=0;
    }
   alert(i+"'"+temp);
    var mult= temp*temp;
    var total= total+mult;
	//continue;
    //total = total + i;
}

alert(total);