
<?php
include 'BackendAssets/Components/header.php';
?>

<link rel="stylesheet" href="/BackendAssets/css/signup.css">
<div class="container-fluid">
<div class="row">
  <div class="main-of-signup signup_bg_image">
    <div class="col-sm-3"></div>
  <div class="col-sm-6 p-0">
    <div class="text-center small_signup_div">
      <?php
      if (isset($_GET['msg'])) {
        echo "<div class='alert alert-danger' role='alert'>
              " . $_GET['msg'] . "
            </div>";
      }
      ?>
      <h3 style="color:#fff;">Login from here</h3>
      <form action="/BackendAssets/mysqlcode/login.php" method="post">
        <div>
          <input type="email" name="email" placeholder="Insert your email address here" required style="margin:20px 0 !important;">
        </div>
        <div>
          <input type="password" name="password" placeholder="Insert your password here" required style="margin:20px 0 !important;">
        </div>
        <button type="submit">Login</button>
      </form>
        <div class="forgot_password">
            <a href="/forgot_password.php"><span>Forgot password</span></a>&nbsp;
            <a href="/signup.php" style="text-decoration: underline !important;font-size:15px;"><span>Create account</span></a>
        </div>
    </div>
  </div>
  <div class="col-sm-3"></div>
  </div>
</div>
</div>
<?php
include 'BackendAssets/Components/footer.php';
?>