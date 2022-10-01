window.onload = function() {
	var OnlineVersionData;
	var LocalVersionData;
	var Architecture;

	//Save LocalVersion after install
	if ('true' == getParameterByName('InstallComplete') || 'true' == getParameterByName('UpdateComplete'))
	{
		localStorage.setItem('Game_Version', OnlineVersionData);
		location.replace("https://jws7634.github.io/Web_Launcher/");
		return;
	}
	else if('true' == getParameterByName('UninstallComplete'))
	{
		localStorage.removeItem('Game_Version');
		location.replace("https://jws7634.github.io/Web_Launcher/");
		return;
	}

	if(null == localStorage.getItem('Player-Name'))
	{
		location.replace("./register/");
		return;
	}
	document.getElementById("player-info").textContent  = "환영합니다 " + localStorage.getItem("Player-Name") + " 님";

	window.navigator.userAgentData.getHighEntropyValues(["bitness"])
		.then(ua => { Architecture = ua['bitness']; document.getElementById('Version-info').textContent = "게임 버전: " + OnlineVersionData + "_x" + Architecture;});

	OnlineVersionData = Get_Version("https://jws7634.github.io/Web_Launcher/Version.info");
	document.getElementById('Version-info').textContent = "게임 버전: " + OnlineVersionData + "_" + Architecture;

	//Check installation
	Change_Button(OnlineVersionData);
}

window.onfocus = function() {
	OnlineVersionData = Get_Version("https://jws7634.github.io/Web_Launcher/Version.info");
	Change_Button(OnlineVersionData);
}

function getParameterByName(name)
{
	name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)")
	var results = regex.exec(location.search);
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); 
}

function Change_Button(OnlineVersionData)
{
	if(null != localStorage.getItem('Game_Version'))
	{
		LocalVersionData = localStorage.getItem('Game_Version');
		Check_Version(OnlineVersionData, LocalVersionData);
	}
	else
	{
		execChange("launch-Button-notinstalled", "GameInstall()", "설치");
	}
}

function Get_Version(url)
{
    var http = new XMLHttpRequest();
    http.open('GET', url, false);
    http.send();
	return http.responseText;
}

function Check_Version(OnlineVersionData, LocalVersionData)
{
	if(OnlineVersionData != LocalVersionData)
		execChange("launch-Button-outdated", "GameUpdate()", "업데이트");
	else
		execChange("launch-Button-normal", "GameLaunch()", "게임실행");
}

function execChange(classname, func, value)
{
	document.getElementById('launch-Button').className = classname;
	document.getElementById('launch-Button').setAttribute("onClick", func);
	document.getElementById('launch-Button').value = value;
}