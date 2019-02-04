//LAB 4 - JS ENCRYPTION
window.onload = function(){
var formData = document.forms.getMD5form;
  formData.onsubmit = submitted;
    function submitted()
 {
var msg =document.getElementById("getMD5__output");
var pass =document.getElementById("md5form_txt");
try{

	if(pass.value === ""){
		throw("Error:You have Entered an empty string");
	}
else{
	
	var en = CryptoJS.MD5(pass.value);
	msg.innerHTML = ""+en;
	}
}catch(e){
msg.innerHTML = ""+e;
}


console.log(en);
return false;
}

}