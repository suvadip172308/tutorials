function loadData(){
	/* This is basic ajax call */
	var xhttp;
	if(window.XMLHttpRequest){
		xhttp=new XMLHttpRequest();
	}
	else{
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xhttp.onredystatechange=function(){
		if(xhttp.readyState==4 && xhttp.status==200){
			
			document.getElementById("para").innerHTML=xhttp.responseText;
		}
	};
	xhttp.open("GET","remote_server.txt",true);
	xhttp.send();
}