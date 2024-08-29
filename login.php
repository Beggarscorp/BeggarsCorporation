<?php
include 'BackendAssets/mysqlcode/login.php';
include 'BackendAssets/components/header.php';
?>

<link rel="stylesheet" href="/BackendAssets/css/signup.css">
<div class="row">
  <div class="col-sm-12 p-3">
    <div class="main-of-signup text-center">
      <?php
      if (isset($_GET['msg'])) {
        echo "<div class='alert alert-danger' role='alert'>
              " . $_GET['msg'] . "
            </div>";
      }
      ?>
      <h3>Login from here</h3>
      <form action="/BackendAssets/mysqlcode/login.php" method="post">
        <div>
          <input type="email" name="email" placeholder="Insert your email address here" required>
        </div>
        <div>
          <input type="password" name="password" placeholder="Insert your password here" required>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
</div>
</div>
<?php
include 'BackendAssets/components/footer.php';
?>