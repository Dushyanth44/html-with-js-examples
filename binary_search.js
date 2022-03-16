<html>
<head>
<script>
recursiveFunction = function (arr, x, start, end)
{
if(start>end)
return false;
mid=Math.floor((start+end)/2);
if (arr[mid]==x)
return true;
if(arr[mid] > x)
        return recursiveFunction(arr, x, start, mid-1);
else
return recursiveFunction(arr, x, mid+1, end);
}
</script>
</head>
<body>
<script>
var n=parseInt(window.prompt("enter size of array:"));
var arr=new Array(n);
for(var i=0;i<n;i++)
{
arr[i]=parseInt(window.prompt("enter values into array:"));
}
var x=parseInt(window.prompt("enter value to be searched:"));
if (recursiveFunction(arr, x, 0, arr.length-1))
    document.write("Element found!<br>");
else document.write("Element not found!<br>");
</script>
</body>
</html>
