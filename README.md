# FullStack-JavaScript
Information Technology Specialist

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p id= "demo">  </p>

  <button class="btn btn-btn-primary" onclick="clicked()"> Click me</button>

  <script>
    function clicked()
      {
        let var_click = document.getElementById("demo").innerHTML = "Hello , there i am clicked";

        return true;
      }

    
  </script>
</body>
</html>
