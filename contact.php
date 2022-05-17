<!DOCTYPE html>
<html lang="en">
<title>ABOUT</title>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/jpg" href="./assets/img/icon/logoFI.png" />
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
    <link rel="stylesheet" href="./assets/css/owl.carousel.min.css" />
    <link rel="stylesheet" type="text/css" href="./assets/css/main.css">
    <link rel="stylesheet" type="text/css" href="./assets/css/subPageces.css">
</head>

<body>
    <?php include './layers/header.php'; ?>
    <section class="contact">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="hoodArea">
                        <h6>Anatoryum Protocol</h6>
                        <p class="where">Contact</p>
                        <p class="littleP">Crypto Sports Sponsorship Moves into Fast Lane with OKX F1 Deal</p>
                    </div>
                </div>
                <div class="col-12">
                    <form action="">
                        <div class="formAreas">
                            <div class="formAreaOne">
                                <input type="text" placeholder="name">
                                <input type="text" placeholder="Sourname">
                                <input type="text" placeholder="Age">
                            </div>
                            <div class="formAreaTwo">
                                <input type="text" placeholder="Mail Adress">
                                <input type="text" placeholder="Country">
                                <input type="text" placeholder="City">
                            </div>
                            <div class="formAreaThree">
                                <div class="textArea">
                                    <label>Message:</label>
                                    <div class="number">
                                        <p class="textNumber">0 </p><span>/100</span>
                                    </div>
                                </div>
                                <textarea id="formContactText" onkeydown="myFunction()" maxlength="100">
                                </textarea>
                            </div>
                        </div>
                        <div class="buttonArea">
                            <button>send report</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <?php include './layers/footer.php'; ?>
</body>
<script src="./assets/js/jquery-3.6.0.min.js"></script>
<script src="./assets/js/owl.carousel.min.js"></script>
<script src="./assets/bootstrap/js/bootstrap.min.js"></script>
<script src="./assets/js/main.js"></script>
<script type="text/javascript">
    function myFunction() {
        var a = $("#formContactText").val().length;
        $(".textNumber").text(a)

    }
</script>

</html>