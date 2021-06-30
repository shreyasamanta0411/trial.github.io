function val(){
	var username="shreya";
	var amt=document.frm1.tx1.value;
	if(amt==""){
		alert("select amount");
	}
	else{
        alert(username+" "+amt);
	}
}