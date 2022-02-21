function GameInstall()
{
	var http = new XMLHttpRequest();
    http.open('GET', "https://github.com/JWS7634/Web_Launcher/releases/download/Web_Test/Setup.exe", false);
    http.send();
}
function GameUpdate()
{
	
}
function GameLaunch()
{
	window.open("JWSTestGame://StartByWeblauncher");
}