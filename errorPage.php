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
    <section class="errorPage">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="hoodArea">
                        <p>Anatolia Protocol </p>
                        <p>Error</p>
                        <p>Sorry, the page <span> not found!</span></p>
                    </div>
                    <div class="backContact">
                        <a href="">
                            <button>back to home</button>
                        </a>
                        <a href="">
                            <button>contact</button>
                        </a>
                    </div>
                    <div class="textArea">
                        <textarea id="textArea">
                        </textarea>
                        <div class="buttonSpecial">
                            <button>send report</button>
                        </div>
                    </div>
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
    $(function() {
        var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            var links = this.el.find(".article-title");
            links.on(
                "click", {
                    el: this.el,
                    multiple: this.multiple,
                },
                this.dropdown
            );
        };

        Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el;
            ($this = $(this)), ($next = $this.next());

            $next.slideToggle();
            $this.parent().toggleClass("open");

            if (!e.data.multiple) {
                $el
                    .find(".accordion-content")
                    .not($next)
                    .slideUp()
                    .parent()
                    .removeClass("open");
            }
        };
        var accordion = new Accordion($(".accordion-container"), false);
    });
</script>

</html>