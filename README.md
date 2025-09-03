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

  <button class="btn btn-primary" onclick="clicked()"> Click me</button>

  <script>
    function clicked()
      {
         document.getElementById("demo").innerHTML = "Hello , there i am clicked";

        return true;
      }

    
  </script>
</body>
</html>

# 09_03_2025  Self Practice

# Admission Form 

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>

<nav class="navbar navbar-expand-sm bg-light">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Contact Us</a>
      </li>
    </ul>
  </div>
</nav>

<div class="container-fluid mt-3">
  <h3>Admission Form</h3>
  <form>
  <div class="row">
   
        <div class="col-md-4">
            <div class="mb-3 form-group">
                <label for="Fullname">Full Name</label>
                <input type="text" class="form-control" id="fullname" name="fullname">
            </div>
        </div>
        <div class="col-md-4">
            <div class="mb-3 form-group">
                <label for="Fullname">Father Name</label>
                <input type="text" class="form-control" id="fullname" name="fullname">
            </div>
        </div>
        <div class="col-md-4">
            <div class="mb-3 form-group">
                <label for="Fullname">CNIC</label>
                <input type="text" class="form-control" id="fullname" name="fullname">
            </div>
        </div>
        <div class="col-md-4">
            <div class="mb-3 form-group">
                <label for="Fullname">Course Selection</label>
                <input type="text" class="form-control" id="fullname" name="fullname">
            </div>
        </div>
        <div class="col-md-4">
            <div class="mb-3 form-group">
                <label for="Fullname">Teacher Selection</label>
                <input type="text" class="form-control" id="fullname" name="fullname">
            </div>
        </div>
        <div class="mb-3 form-group">
        <div class="col-md-4">
            
                <label for="Terms_and_condition">Agree to Terms and condition</label>
                <input type="checkbox" class="form-control" id="Terms_and_condition" name="Terms_and_condition">
            </div>
        </div>
            <div class="row">
                <div class="col-md-6">
                    <button type="submit" class="btn btn-primary" id="submit_button" name="submit">Submit</button>
                </div>
            </div>
     

  </div>



</form>

</div>

</body>
</html>


# After Correction Admission Form 





