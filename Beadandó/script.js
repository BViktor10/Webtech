var inputtemp = document.getElementById("myCheckbox");

function ellenorzes()
{
	if (inputtemp.checked)
	{
		document.getElementById("teszt").innerHTML = "checked";
	}
	else
	{
		document.getElementById("teszt").innerHTML ="";
	}
}

function ellenorzes2(hatterszin)
{
	document.body.style.backgroundColor = hatterszin;
}

inputtemp.addEventListener('change',ellenorzes);

function oldalvaltas()
{
	var inputtemp2 = document.getElementById("oldalbekeres").value;
	
	switch(inputtemp2)
	{
		case "1":
		window.location.href = "index.html";
		break;
		case "2":
		window.location.href = "masodik.html";
		break;
		case "3":
		window.location.href = "harmadik.html";
		break;
		case "4":
		alert("Ez a negyedik oldal!");
		break;
		default:
		document.getElementById("hiba").innerHTML = "Hibás input! Csak is 1-4ig való számot lehet beírni!";
		document.getElementById("oldalbekeres").style.borderColor = "red";
		break;
	}
}

