
function activateMenu() {
    if(getElementById('home-section').className != "active"){
        getElementById('home-section').className = "active";
    }else{
        getElementById('home-section').className = " ";
    }
    
    if(getElementById('company').className != "active"){
        getElementById('company').className = "active";
    }else{
        getElementById('company').className = " ";
    }
  }