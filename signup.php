  <?php 
  include("BackendAssets/Components/header.php");

  ?>
  <link rel="stylesheet" href="BackendAssets/css/signup.css">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 p-3">
        <div class="main-of-signup text-center">
            <?php
              if(isset($_GET['msg']))
              {
                echo "<div class='alert alert-danger' role='alert'>
                      ".$_GET['msg']."
                    </div>";
              }
          ?>
          <h3>Sign up from here</h3>
        <form action="/BackendAssets/mysqlcode/signup.php" method="post">
        <div>
          <input type="text" name="fname" placeholder="Insert your first name here" required>
        </div>
        <div>
          <input type="text" name="lname" placeholder="Insert your last name here" required>
        </div>
        <div>
          <input type="email" name="email" placeholder="Insert your email address here" pattern="[a-zA-Z0-9._%+-]+@gmail\.com" required>
        </div>
        <div>
          <input type="password" name="password" placeholder="Insert your password here" required> 
        </div>
        <button type="submit">Sign up</button>
        </form>
        </div>
        </div>
      </div>
    </div>
<?php
 include("BackendAssets/Components/footer.php");
?>