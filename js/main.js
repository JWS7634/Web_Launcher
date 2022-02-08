window.onload = function() {
	var VersionData = Get_Version();
	Check_Version(VersionData);
}
function Get_Version()
{
	var VersionData = "01.583.05b";
	/*
	var reader = new FileReader();
	var file = document.createElement("input");
	file.type = "type";
	file.path = "./Version.info"
	reader.readAsDataURL(file);
	*/
	document.getElementById('Version-info').textContent = "게임 버전: " + VersionData;
	return VersionData;
}
function Check_Version(VersionData)
{
	const LButton = document.getElementById('launch-Button');
	var localVersion = "01.583a.05b";
	var isInstalled = true;
	if(isInstalled)
	{
		if(VersionData != localVersion)
		{
			LButton.className = "launch-Button-outdated";
			LButton.value  = "업데이트";
		}
		else
		{
			LButton.className = "launch-Button-normal";
			LButton.value  = "게임실행";
		}
	}
	else
	{
		LButton.className = "launch-Button-notinstalled";
		LButton.value  = "설치";
	}
	return ;
}