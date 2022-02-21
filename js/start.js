window.onload = function() {
	var OnlineVersionData;
	var LocalVersionData;

	OnlineVersionData = Get_Version("https://jws7634.github.io/Web_Launcher/Version.info");
	document.getElementById('Version-info').textContent = "게임 버전: " + OnlineVersionData;

	if(null != localStorage.getItem('Game_Version'))
	{
		console.log(null != localStorage.getItem('Game_Version'));
		LocalVersionData = localStorage.getItem('Game_Version');
		Check_Version(OnlineVersionData, LocalVersionData, document.getElementById('launch-Button'));
	}
	else
	{
		document.getElementById('launch-Button').className = "launch-Button-notinstalled";
		document.getElementById('launch-Button').setAttribute("onClick", "GameInstall()");
		document.getElementById('launch-Button').value  = "설치";
	}
}
function Get_Version(url)
{
    var http = new XMLHttpRequest();
    http.open('GET', url, false);
    http.send();
	return http.responseText;
}
function Check_Version(OnlineVersionData, LocalVersionData, LButton)
{
	if(OnlineVersionData != LocalVersionData)
	{
		LButton.className = "launch-Button-outdated";
		LButton.setAttribute("onClick", "GameUpdate()");
		LButton.value  = "업데이트";
	}
	else
	{
		LButton.className = "launch-Button-normal";
		LButton.setAttribute("onClick", "GameLaunch()");
		LButton.value  = "게임실행";
	}
}