

function calculate()
{
	//Get value from the inputs
	let large = document.getElementById("large").value;
	let small = document.getElementById("small").value;

	//Use the function below to insert the variables large and small
	let area_large = convertToArea(large)
	let area_small = convertToArea(small)

	//Get the percent of difference between large area and small area and round to whole numbers
	let percent = Math.round(((area_large - area_small)/area_large)*100)

	//Output text with the variables into the result html tag.
	document.getElementById("result").innerHTML = " The big screen is " + percent + " % bigger than the small screen. And the are accordingly " + area_large + " cm^2 and " + area_small + " cm^2.";
}


function convertToArea(number)
{
	//Find the diagonal in cm by multiplying 2.54
	let cm_diagonal =  number*2.54

	//Find the height of the tv by mulitplying the diagonal by 0.49
	let cm_horisontal = cm_diagonal * 0.49

	//Use the formula for straigh angle trinagles a^2 = b^2 + c^2 to find the "kathetos"
	let kathetos = Math.sqrt((cm_diagonal*cm_diagonal) - (cm_horisontal*cm_horisontal))

	//Return the area in cm^2
	return kathetos*cm_diagonal

}