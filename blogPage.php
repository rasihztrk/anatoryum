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
    <section class="blogArea">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="hoodArea">
                        <h6>Anatolia Protocol </h6>
                        <p class="where">Media / Blog</p>
                    </div>
                </div>
                <div class="col-12">
                    <div class="cardArea">
                        <img class="img-fluid" src="./assets/img/imgThree.png" alt="">
                    </div>
                    <div class="cardBottom">
                        <p>Crypto Sports Sponsorship Moves into <br> Fast Lane with OKX F1 Deal</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus tellus, quis vitae vestibulum mauris facilisis augue. Pharetra, commodo ultrices in mauris imperdiet. Scelerisque consequat id vestibulum semper tempor nullam gravida. Eu ut metus quis non amet tortor diam. At nam risus vitae gravida odio habitant felis. Et, porttitor non dui posuere nunc nunc vitae lectus donec.
                            Dui urna, gravida quis morbi. Ultrices amet, sit morbi in pulvinar. Pellentesque augue at posuere sed. Nisl, massa nunc fermentum sed placerat viverra convallis pellentesque. Quis nunc elit ultrices vitae consequat urna mi. Tristique eu lectus purus eget tristique arcu est enim. Dignissim dignissim quisque dapibus hac hendrerit auctor semper. In lectus nisl ut et ut. Fringilla tincidunt iaculis id imperdiet adipiscing scelerisque gravida bibendum. Egestas nunc, facilisi lorem ut. Donec elementum lectus pharetra nec. Vestibulum pulvinar potenti euismod gravida nisl cursus. Vestibulum scelerisque aliquam nunc facilisi et ac id varius. Nulla enim ipsum nec et mi urna.
                        </p>
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