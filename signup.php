  <?php 
  include("BackendAssets/Components/header.php");

  ?>
  <link rel="stylesheet" href="BackendAssets/css/signup.css">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 p-3">
        <div class="main-of-signup text-center">
        <form action="/BackendAssets/mysqlcode/signup.php" method="post">
        <h3>Sign up from here</h3>
        <div>
          <input type="text" name="fname" placeholder="Insert your first name here">
        </div>
        <div>
          <input type="text" name="lname" placeholder="Insert your last name here">
        </div>
        <div>
          <input type="email" name="email" placeholder="Insert your email address here" pattern="[a-zA-Z0-9._%+-]+@gmail\.com">
        </div>
        <div>
          <input type="password" name="password" placeholder="Insert your password here"> 
        </div>
        <input type="submit" value="Sign up">
        </form>
        </div>
        </div>
      </div>
    </div>
<?php
 include("BackendAssets/Components/footer.php");
?>