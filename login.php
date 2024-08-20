<?php
// include 'BackendAssets/mysqlcode/login.php';
include 'BackendAssets/components/header.php';
?>

<link rel="stylesheet" href="/BackendAssets/css/signup.css">
<div class="row">
  <div class="col-sm-12 p-3">
    <div class="main-of-signup text-center">
      <h3>Login from here</h3>
          <form action="/BackendAssets/mysqlcode/login.php" method="post">
            <div>
              <input type="email" name="email" placeholder="Insert your email address here" required>
            </div>
            <div>
              <input type="password" name="password" placeholder="Insert your password here" required>
            </div>
            <div>
              <input type="password" name="confirm-password" placeholder="Confirm your password here" required>
            </div>
            <input type="submit" value="Login" >
          </form>
        </div>
      </div>
    </div>
  </div>
<?php
  include 'BackendAssets/components/footer.php';
?>