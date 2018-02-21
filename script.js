$(document).ready(function()
{

$("#web").click(function ()
{
	console.log("working");
	$(".web").toggleClass("brightened");
	$(".jeinne").removeClass("brightened");
	$(".inne").removeClass("brightened");
})

$("#inne").click(function ()
{
	console.log("working");
	$(".inne").toggleClass("brightened");
	$(".web").removeClass("brightened");
	$(".jeinne").removeClass("brightened");
})

$("#jeinne").click(function ()
{
	console.log("working");
	$(".jeinne").toggleClass("brightened");
	$(".web").removeClass("brightened");
	$(".inne").removeClass("brightened");
})

$("#reset").click(function()
{
	console.log("working");
$(".container div").removeClass("brightened");
});

});