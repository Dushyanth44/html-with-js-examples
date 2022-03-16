<html>
<head><title>Multiplication of 2 matrices</title>
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
for(var a=0;a<row;a++)
{
for(var b=0;b<col;b++)
{
arr2[a][b]=0;
}
}
for(var p=0;p<row;p++)
for(var q=0;q<col;q++)
arr1[p][q]=parseInt(window.prompt("enter a value ["+p+"]["+q+"]"));
document.writeln("multiplication of matrices <br/>");
for(var s=0;s<row;s++)
for(var t=0;t<col;t++)
for(var u=0;u<row;u++)
arr2[s][t]=arr2[s][t]+arr[s][u]*arr1[u][t];
for(var a=0;a<row;a++)
{
for(var b=0;b<col;b++)
{
document.writeln(arr2[a][b]+" ");
}
document.writeln("<br/>");
}
</script>
</body>
</html>
