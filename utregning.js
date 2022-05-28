

function calculate()
{
	let large = document.getElementById("large").value;
	let small = document.getElementById("small").value;

	let area_large = convertToArea(large)
	let area_small = convertToArea(small)

	let percent = Math.round((area_small *100)/area_large)

	document.getElementById("result").innerHTML = " Den store skjermen er " + percent + " % større enn den miste skjermen. Og de er henholdsvis " + area_large + " cm^2 og " + area_small + " cm^2.";
}


function convertToArea(number)
{
	let cm_diagonal =  number*2.54

	let cm_horisontal = cm_diagonal * (9/16)

	let katet = Math.sqrt((cm_diagonal*cm_diagonal) - (cm_horisontal*cm_horisontal))

	return katet*cm_diagonal

}