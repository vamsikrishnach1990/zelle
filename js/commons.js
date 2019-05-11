function getHeaders() {
	var hdr = {};
	hdr['X-MUFG-User-Session-Token'] = sessionStorage.getItem("ce-session-id");
	hdr['X-MUFG-Application-Id'] = 'MCG';
	hdr['X-MUFG-Request-Uuid'] = 'test';
	hdr['X-MUFG-Request-Ts'] = 'test';
	return hdr;
}

function getLoginHeaders() {
	var hdr = {};
	hdr['X-MUFG-Access-Token'] = $("#sso-hash-id").val();
	hdr['X-MUFG-Application-Id'] = 'MCG';
	hdr['X-MUFG-Request-Uuid'] = 'test';
	hdr['X-MUFG-Request-Ts'] = '???';
	return hdr;
}

function buildErrorMsg(errResponse) {
	return "<i class='fa fa-warning'></i>   <b><font color=red>[" + errResponse.code + "]</font>:</b> " + errResponse.description;
}

function toast() {
	var x = document.getElementById("snackbar");
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
