<html>
<head>
<script>
function reverse()
{
var n=window.prompt("Enter a number:");
var reverse=0;
while(n!=0) {
var remainder=n%10;
reverse=(reverse*10)+remainder;
n=parseInt(n/10);
}
document.writeln("reversed number is:"+reverse);
}
</script>
</head>
<body>
<script>
reverse();
</script>
</body>
</html>
