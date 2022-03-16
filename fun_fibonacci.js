<html>
<head>
<script>
function fibonacci(num) {
    if(num < 2)
    {
        return num;
    }
    else
    {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}
</script>
</head>
<body>
<script>
const n=window.prompt('Enter the number of terms: ');

if(n<=0) {
    document.write('Enter a positive integer.');
}
else {
    for(var i = 0; i < n; i++) {
        document.write(fibonacci(i)+"\t");
    }
}
</script>
</body>
</html>

