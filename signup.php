  <?php
  include("BackendAssets/Components/header.php");
  include("BackendAssets/db.php");
  $msg="";
  if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['user_submit']))
{
      $fname=$_POST['fname'];
      $lname=$_POST['lname'];
      $email=$_POST['email'];
      $password=$_POST['password'];

      if(!isset($_SESSION['user']))
      {
        $sql="SELECT * FROM `user` WHERE `email` = '$email'";
      $result=mysqli_query($conn, $sql);
      if(mysqli_num_rows($result) == 0)
      {
        $hash=password_hash($password, PASSWORD_DEFAULT );
        $sql = "INSERT INTO user (`First-name`, `Last-name`,`email`,`password`) VALUES ('$fname', '$lname','$email','$hash')";
        if ($conn->query($sql) === TRUE) {

          $msg="Verification link send to your email <strong>$email</strong>";
        }
         else 
         {
          $msg="User already exists";
          
        }
      }
      else
      {
        $msg="User already exists";
        
      }

      }
      else
      {
        $msg="User already Logged in";
      }
}



  ?>
  <link rel="stylesheet" href="BackendAssets/css/signup.css">
  <div class="main-of-signup signup_bg_image">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6 p-0 ">
          <div class="text-center small_signup_div">
            <?php
            if (isset($_GET['msg'])) {
              echo "<div class='alert alert-danger' role='alert'>
                      " . $_GET['msg'] . "
                    </div>";
            }
            ?>
            <h3 style="color: #fff;">Sign up from here</h3>
            <form action="" method="post">
              <div>
                <input type="text" name="fname" placeholder="First name here" required>
              </div>
              <div>
                <input type="text" name="lname" placeholder="Last name here" required>
              </div>
              <div>
                <input type="email" name="email" placeholder="Email address here" pattern="[a-zA-Z0-9._%+-]+@gmail\.com" required>
              </div>
              <div>
                <input type="password" name="password" placeholder="Password here" required>
              </div>
              <button type="submit" name="user_submit">Sign up</button>
              <div style="color:#dcdcdc;">
              <?php
              echo $msg;
              ?>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </div>

  <?php
  include("BackendAssets/Components/footer.php");
  ?>