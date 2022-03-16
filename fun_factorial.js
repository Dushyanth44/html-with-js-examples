<html>
<head>
<script>
function factorial(x)
{
if(x>=1)
{
return (x*factorial(x-1));
}
else
{
return 1;
}
}
</script>
</head>
<body>
<script>
var x=window.prompt("enter a number:");
document.writeln(factorial(x));
</script>
</body>
</html>


