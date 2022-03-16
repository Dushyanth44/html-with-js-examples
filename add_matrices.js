<html>
<head><title>Addition of 2 matrices</title>
</head>
<body>
<script>
var row=parseInt(window.prompt("enter row size:"));
var arr=new Array(row);
var col=parseInt(window.prompt("enter col size:"));
for(var m=0;m<arr.length;m++)
arr[m]=new Array(col);
for(var i=0;i<row;i++)
for(var j=0;j<col;j++)
arr[i][j]=parseInt(window.prompt("enter a value ["+i+"]["+j+"]"));
var arr1=new Array(row);
for(var n=0;n<arr1.length;n++)
arr1[n]=new Array(col);
var arr2=new Array(row);
for(var n=0;n<arr2.length;n++)
arr2[n]=new Array(col);
for(var p=0;p<row;p++)
for(var q=0;q<col;q++)
arr1[p][q]=parseInt(window.prompt("enter a value ["+p+"]["+q+"]"));
document.writeln("addition of matrices <br/>");
for(var s=0;s<row;s++)
{
for(var t=0;t<col;t++)
{
arr2[s][t]=arr[s][t]+arr1[s][t];
document.writeln(arr2[s][t]+" ");
}
document.writeln("<br/>");
}
</script>
</body>
</html>
