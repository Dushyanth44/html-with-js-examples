<html>
<head>
<script>
function bubbleSort(arr) {
  for (var i = arr.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
</script>
</head>
<body>
<script>
var n=parseInt(window.prompt("enter size of array:"));
var arr=new Array(n);
for(var i=0;i<n;i++)
arr[i]=parseInt(window.prompt("enter values into array:"));
document.writeln("before sorting values are:");
for(var i=0;i<n;i++)
document.writeln(arr[i]+" ");
bubbleSort(arr);
document.writeln("<br/>after sorting values are:");
for(var i=0;i<n;i++)
document.writeln(arr[i]+" ");
</script>
</body>
</html>
