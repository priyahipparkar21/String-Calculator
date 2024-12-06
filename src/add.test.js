

function addTest(){

    //2+2=4
    if (add("2,2") !=4){
      return false;
    }
  
    //0
    if (add("") != 0){
      return false;
    }
  
    //1+0=1
    if (add("1") != 1){
      return false;
    }
  
  //all tests passed
  return true;
  }

  addTest()