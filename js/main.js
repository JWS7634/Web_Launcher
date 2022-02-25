function GameInstall()
{
	var download = document.createElement('a');
	download.href = "https://github.com/JWS7634/Web_Launcher/releases/download/WindowsInstaller/Setup.exe";
	download.click();
	//window.open("https://github.com/JWS7634/Web_Launcher/releases/download/WindowsInstaller/Setup.exe");
}
function GameUpdate()
{
	window.open("JWSTestGame://UpdateByWeblauncher");
}
function GameLaunch()
{
	window.open("JWSTestGame://StartByWeblauncher");
}