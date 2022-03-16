<html>
<head>
<script>
function power(x , y) {
        if (y == 0)
            return 1;
        if (x == 0)
            return 0;
        else
        return x * power(x, y - 1);
    }
</script>
</head>
<body>
<script>
var y=window.prompt("enter a exponent:");  
var x=window.prompt("enter a number:");
document.write(power(x, y));
</script>
</body>
</html>
