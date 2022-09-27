Register()
{
	var P_Name = document.getElementById('Player-Name').value;
	var P_Division = document.getElementById('Player-Division').value;
	localStorage.setItem('Player-Name', P_Name);
	localStorage.setItem('Player-Division', P_Division);
	alert("등록이 완료되었습니다");
	location.replace("../");
}