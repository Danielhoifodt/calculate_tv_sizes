

function calculate() {
	//Get value from the inputs
	let large = document.getElementById("large").value
	let small = document.getElementById("small").value

	//Check to see if inputs have errors
	if (large == "" || small == "") {
		document.getElementById("error_container").style.display = "flex"
		document.getElementById("error").innerHTML = "You need to fill in all fields!"
		document.getElementById("result").innerHTML = ""
		return
	}
	else if (parseInt(small) >= parseInt(large))
	{
		document.getElementById("error_container").style.display = "flex"
		document.getElementById("error").innerHTML = "The biggest screen size cannot be smaller than the smallest screen size or equal!"
		document.getElementById("result").innerHTML = ""
		return
	}
	else
	{
		document.getElementById("error_container").style.display = "none";
		document.getElementById("error").innerHTML = ""
	}

	//Use the function below to insert the variables large and small
	let area_large = convertToArea(large)
	let area_small = convertToArea(small)

	//Get the percent of difference between large area and small area and round to whole numbers
	let percent = Math.round(((area_large - area_small) / area_large) * 100)

	//Round the areas to whole number
	let area_large_round = Math.round(area_large)
	let area_small_round = Math.round(area_small)

	//Output text with the variables into the result html tag.
	document.getElementById("result").innerHTML = " The big screen is <span style='color:green;font-weight: bold;'>" + percent + "" +
		"</span> % bigger than the small screen. And they are accordingly " +
		"<span style='color:red;font-weight: bold;'>" + area_large_round +
		"</span> cm^2 and <span style='color:red;font-weight:bold;'>" +
		area_small_round + "</span> cm^2."
}


function convertToArea(number)
{
	//Find the diagonal in cm by multiplying 2.54
	let cm_diagonal =  number * 2.54

	//Find the height of the tv by multiplying the diagonal by 0.49
	let cm_horizontal = cm_diagonal * 0.49

	//Use the formula for strigth angle triangles a^2 = b^2 + c^2 to find the "kathetos"
	let kathetos = Math.sqrt((cm_diagonal * cm_diagonal) - (cm_horizontal * cm_horizontal))

	//Return the area in cm^2
	return kathetos * cm_diagonal

}