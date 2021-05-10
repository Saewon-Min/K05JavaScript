function setOrdering(arrParam){	
    for(var x=0; x<arrParam.length-1; x++){
        for(var y=0; y<(arrParam.length-1)-x; y++){
            if(arrParam[y] > arrParam[y+1]){
                var temp = arrParam[y];
                arrParam[y] = arrParam[y+1];
                arrParam[y+1] = temp;
//                showArray(arrParam);

            }
        }
    }
}
