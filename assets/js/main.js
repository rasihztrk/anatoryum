$(document).ready(function () {
  $(".undefinedT").removeAttr("target");

  console.log($(".undefinedT").attr("target"));

  $(".owl-one").owlCarousel({
    loop: true,
    margin: 30,
    padding: 20,
    autoplay: true,
    center: true,
    slideTransition: "linear",
    autoplaySpeed: 6000,
    smartSpeed: 6000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 8,
      },
      1000: {
        items: 12,
      },
    },
  });

  $(".owl-two").owlCarousel({
    autoplay: false,
    rewind: true,
    items: 3,
    margin: 30,
    responsiveClass: true,
    autoHeight: true,
    smartSpeed: 800,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  $(".owl-Three").owlCarousel({
    item: 1,
    loop: true,
    margin: 30,
    padding: 20,
    autoplay: true,
    center: true,
    slideTransition: "linear",
    autoplaySpeed: 6000,
    smartSpeed: 6000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  $(".owl-Four").owlCarousel({
    autoplay: false,
    rewind: true,
    items: 1,
    margin: 30,
    responsiveClass: true,
    autoHeight: true,
    smartSpeed: 800,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
    },
  });

  
  $(".instagramwb").mouseenter(function () {
    $(".instagramwb").attr("src", "./assets/img/icon/instagramBj.png");
  });

    
  $(".instagramwb").mouseleave(function () {
    $(".instagramwb").attr("src", "./assets/img/icon/instagramWj.png");
  });

        
  $(".facebookwj").mouseenter(function () {
    $(".facebookwj").attr("src", "./assets/img/icon/facebookBj.png");
  });

      
  $(".facebookwj").mouseleave(function () {
    $(".facebookwj").attr("src", "./assets/img/icon/facebookWj.png");
  });


  $(".facebookw").mouseenter(function () {
    $(".facebookw").attr("src", "./assets/img/icon/facebookwTwo.png");
  });

  $(".linkedin").mouseenter(function () {
    $(".linkedin").attr("src", "./assets/img/icon/linkedinBJ.png");
  });

  $(".twitterw").mouseenter(function () {
    $(".twitterw").attr("src", "./assets/img/icon/twitterwTwo.png");
  });

  $(".instagramw").mouseenter(function () {
    $(".instagramw").attr("src", "./assets/img/icon/instagramwTwo.png");
  });

  $(".piterestw").mouseenter(function () {
    $(".piterestw").attr("src", "./assets/img/icon/pinterestwTwo.png");
  });

  $(".linkedin").mouseleave(function () {
    $(".linkedin").attr("src", "./assets/img/icon/linkedinWJ.png");
  });


  $(".facebookw").mouseleave(function () {
    $(".facebookw").attr("src", "./assets/img/icon/facebookW.png");
  });

  $(".twitterw").mouseleave(function () {
    $(".twitterw").attr("src", "./assets/img/icon/twitterW.png");
  });

  $(".instagramw").mouseleave(function () {
    $(".instagramw").attr("src", "./assets/img/icon/instagramW.png");
  });

  $(".piterestw").mouseleave(function () {
    $(".piterestw").attr("src", "./assets/img/icon/pinterestW.png");
  });

  $(".area").mouseenter(function () {
    $(".discort", this).attr("src", "./assets/img/icon/discortB.png");
  });

  $(".area").mouseleave(function () {
    $(".discort", this).attr("src", "./assets/img/icon/discort.png");
  });

  $(".area").mouseenter(function () {
    $(".twitter", this).attr("src", "./assets/img/icon/twitterB.png");
  });

  $(".area").mouseleave(function () {
    $(".twitter", this).attr("src", "./assets/img/icon/twitter.png");
  });

  $(".area").mouseenter(function () {
    $(".telegram", this).attr("src", "./assets/img/icon/telegramB.png");
  });

  $(".area").mouseleave(function () {
    $(".telegram", this).attr("src", "./assets/img/icon/telegram.png");
  });

  $(".area").mouseenter(function () {
    $(".youtube", this).attr("src", "./assets/img/icon/youtubeB.png");
  });

  $(".area").mouseleave(function () {
    $(".youtube", this).attr("src", "./assets/img/icon/youtube.png");
  });

  $(".area").mouseenter(function () {
    $(".reddit", this).attr("src", "./assets/img/icon/redditB.png");
  });

  $(".area").mouseleave(function () {
    $(".reddit", this).attr("src", "./assets/img/icon/reddit.png");
  });

  var a = $(".slidearea").width();

  $(".slidearea").css({
    right: -a,
  });

  $(".tradeOn").click(function () {
    $(".slidearea").animate(
      {
        right: "0px",
      },
      1000
    );
  });

  $(".close").click(function () {
    $(".slidearea").animate(
      {
        right: -a,
      },
      1000
    );
  });

  $(".goUpBuy").click(function (event) {
    $("html, body").animate({ scrollTop: 0 }, 300);
  });

  $("#pressGoUp").click(function (event) {
    $("html, body").animate({ scrollTop: 0 }, 300);
  });

  $("#pressGoUp").mouseenter(function (event) {
    $(".goUpIcon").attr("src", "./assets/img/icon/goupTwo.png");
    $("#goupText").css("color", "#7C89FF");
  });

  $("#pressGoUp").mouseleave(function (event) {
    $(".goUpIcon").attr("src", "./assets/img/icon/goUp.png");
    $("#goupText").css("color", "white");
  });
});

$(document).ready(function () {
  const apps = {
    Binance: {
      title: "Binance",
      name: "Binance",
      centre: "centralized",
      hoodClass: "cbThree",
      logo: "./assets/img/icon/binance.png",
      hoodText: "Binance",
      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://www.binance.com/",
      screenSizes: {
        width: 500,
        height: 500,
      },
    },
    CoinBase: {
      title: "Coin Base",
      name: "Coin Base",
      centre: "centralized",
      hoodClass: "cbFour",
      logo: "./assets/img/icon/coinbase.svg",
      hoodText: "Coin Base",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://pro.coinbase.com/",
      screenSizes: {
        width: 500,
        height: 500,
      },
    },
    Ftx: {
      title: "Ftx",
      name: "Ftx",
      centre: "centralized",
      hoodClass: "cbThree",
      logo: "./assets/img/icon/ftx.png",
      hoodText: "Ftx",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://ftx.com/",
      screenSizes: {
        width: 769,
        height: 500,
      },
    },
    Kraken: {
      title: "Kraken",
      name: "Kraken",
      centre: "centralized",
      hoodClass: "cbFour",
      logo: "./assets/img/icon/kraken.webp",
      hoodText: "Kraken",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://www.kraken.com/tr-tr/",
      screenSizes: {
        width: 769,
        height: 500,
      },
    },
    Kucoin: {
      title: "Kucoin",
      name: "Kucoin",
      centre: "centralized",
      hoodClass: "cbFive",
      logo: "./assets/img/icon/kuTwo.png",
      hoodText: "Kucoin",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://www.kucoin.com/",
      screenSizes: {
        width: 769,
        height: 500,
      },
    },
    "Gate.io": {
      title: "Gate.io",
      name: "Gate.io",
      centre: "centralized",
      hoodClass: "cbSix",
      logo: "./assets/img/icon/gateio.png",
      hoodText: "Gate.io",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://www.gate.io/tr",
      screenSizes: {
        width: 769,
        height: 500,
      },
    },
    Bitfinex: {
      title: "Bitfinex",
      name: "Bitfinex",
      centre: "centralized",
      hoodClass: "cbEight",
      logo: "./assets/img/icon/bitfinex-logo.svg",
      hoodText: "Bitfinex",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://www.bitfinex.com/",
      screenSizes: {
        width: 769,
        height: 500,
      },
    },
    Huobi: {
      title: "Huobi",
      name: "Huobi",
      centre: "centralized",
      hoodClass: "cbSeven",
      logo: "./assets/img/icon/huobi.svg",
      hoodText: "Huobi",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://www.huobi.com/",
      screenSizes: {
        width: 769,
        height: 500,
      },
    },
    Gemini: {
      title: "Gemini",
      name: "Gemini",
      centre: "centralized",
      hoodClass: "cbFour",
      logo: "./assets/img/icon/gemini.webp",
      hoodText: "Gemini",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://www.gemini.com/",
      screenSizes: {
        width: 769,
        height: 500,
      },
    },
    Crypto: {
      title: "Crypto",
      name: "Crypto",
      centre: "centralized",
      hoodClass: "cbThree",
      logo: "./assets/img/icon/crypto.svg",
      hoodText: "Crypto",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://crypto.com/exchange",
      screenSizes: {
        width: 769,
        height: 500,
      },
    },
    Mexc: {
      title: "Mexc",
      name: "Mexc",
      centre: "centralized",
      hoodClass: "cbSix",
      logo: "./assets/img/icon/mexc.svg",
      hoodText: "Mexc",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://www.mexc.com/",
      screenSizes: {
        width: 769,
        height: 500,
      },
    },
    Bithumb: {
      title: "Bithumb",
      name: "Bithumb",
      centre: "centralized",
      hoodClass: "cbSeven",
      logo: "./assets/img/icon/bithumb.png",
      hoodText: "Bithumb",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://www.bithumb.com/",
      screenSizes: {
        width: 769,
        height: 500,
      },
    },
    Blockchain: {
      title: "Blockchain",
      name: "Blockchain",
      centre: "centralized",
      hoodClass: "cbOne",
      logo: "./assets/img/icon/blockchain.png",
      hoodText: "Blockchain",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://blockchain.com/",
      screenSizes: {
        width: 769,
        height: 500,
      },
    },
    Bitmart: {
      title: "Bitmart",
      name: "Bitmart",
      centre: "centralized",
      hoodClass: "cbThree",
      logo: "./assets/img/icon/bitmart.svg",
      hoodText: "Bitmart",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://www.bitmart.com/",
      screenSizes: {
        width: 769,
        height: 500,
      },
    },
    Okx: {
      title: "Okx",
      name: "Okx",
      centre: "centralized",
      hoodClass: "cbTwo",
      logo: "./assets/img/icon/okx.png",
      hoodText: "Okx",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://www.okx.com/tr",
      screenSizes: {
        width: 769,
        height: 500,
      },
    },
    kine: {
      title: "kine.vc",
      name: "kine.vc",
      centre: "decentralized",
      hoodClass: "cbFive",
      logo: "./assets/img/icon/kine.png",
      hoodText: "kine.vc",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://www.kine.vc/exchange",
      screenSizes: {
        width: 769,
        height: 500,
      },
    },
    driftTrade: {
      title: "drift.trade",
      name: "drift trade",
      centre: "decentralized",
      hoodClass: "cbSeven",
      logo: "./assets/img/icon/drift.png",
      hoodText: "Drift trade",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://www.drift.trade/",
      screenSizes: {
        width: 769,
        height: 500,
      },
    },
    perpExchange: {
      title: "perp.exchange",
      name: "perp.exchange",
      centre: "decentralized",
      hoodClass: "cbNine",
      logo: "./assets/img/icon/perp.svg",
      hoodText: "Perp exchange",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://perp.exchange/",
      screenSizes: {
        width: 769,
        height: 500,
      },
    },
    bnbchainWorld: {
      title: "bnbchain.world",
      name: "bnbchain.world",
      centre: "decentralized",
      hoodClass: "cbTwo",
      logo: "./assets/img/icon/BNB_Chain.svg",
      hoodText: "Bnbchain world",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://www.bnbchain.world/",
      screenSizes: {
        width: 769,
        height: 500,
      },
    },
    apolloxFinance: {
      title: "apollox.finance",
      name: "apollox.finance",
      centre: "decentralized",
      hoodClass: "cbThree",
      logo: "./assets/img/icon/apollox.svg",
      hoodText: "Apollox finance",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://www.apollox.finance/",
      screenSizes: {
        width: 769,
        height: 500,
      },
    },
    dydxExchange: {
      title: "dydx.exchange",
      name: "dydx.exchange",
      centre: "decentralized",
      addImgClass: "dydx",
      hoodClass: "cbEight",
      logo: "./assets/img/icon/dydx.svg",
      hoodText: "Dydx exchange",

      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "https://trade.dydx.exchange/",
      screenSizes: {
        width: 769,
        height: 500,
      },
    },
  };

  const openedApps = [];
  $(document).ready(() => {
    if (Object.keys(apps).length >= 1) {
      Object.keys(apps).forEach((k) => {
        try {
          if (!apps[k]["hidden"]) {
            $(".programs").append(
              `<div class="col-12 col-sm-6 col-md-4 filterItem  ${apps[k]["centre"]}" title="${apps[k]["hoodText"]}">
                <div class="program" >
                <div class="specialCard" id="sandbox">
                  <div class="${apps[k]["hoodClass"]}">
                    <div class="cardHood">
                      <img class="${apps[k]["addImgClass"]}" src="${apps[k]["logo"]}" alt="${apps[k]["name"]}" />
                      <a href="${apps[k]["content"]}" target="_blank" class="d-block">  
                        <button class="openLinkTwo" id="${k}">Trade Now</button>
                      </a>
                      <button class="openLink d-none" id="${k}">Trade Now</button>
                    </div>
                  </div>
                <div class="textArea">
                   <p class="hoodText" >${apps[k]["hoodText"]} <p/>
                </div>
              </div>
              </div>
           </div>`
            );
          }
        } catch (err) {}
      });
    }

    $(".openLink").click(function () {
      $(".sectionModalBox").removeClass("d-none");
      const appName = $(this).attr("id");
      $(".box").prepend(
        `
    <div class="wrapper">
    <header class="boxHeader">
      <div class="headerInside">
      <img class="reloadImg" src="./assets/img/icon/reload.png" >
        <div class="tabArea">
            <p class="tabText"><img src="./assets/img/icon/Boxlock.png" >  ${apps[appName]["name"]}</p>
          </div>
      </div>
    </header>
    <img id="cBtn" class="closeBtn" src="./assets/img/icon/closeBtn.png" />
    <iframe src="${apps[appName]["content"]}"
      target="_self" frameBorder="0"></iframe>
    </div>
    `
      );
      $("#cBtn").click(function (event) {
        event.preventDefault();
        $(this).parent().remove();
      });

      const wrapper = document.querySelector(".wrapper"),
        header = wrapper.querySelector("header");

      function onDrag({ movementX, movementY }) {
        let getStyle = window.getComputedStyle(wrapper);
        let leftVal = parseInt(getStyle.left);
        let topVal = parseInt(getStyle.top);
        wrapper.style.left = `${leftVal + movementX}px`;
        wrapper.style.top = `${topVal + movementY}px`;
      }

      header.addEventListener("mousedown", () => {
        header.classList.add("active");
        header.addEventListener("mousemove", onDrag);
      });

      document.addEventListener("mouseup", () => {
        header.classList.remove("active");
        header.removeEventListener("mousemove", onDrag);
      });
      // important Area wrapper WRAPPER
      if ($(".box").find(".wrapper")) {
        $(".wrapper:nth-child(2)").remove();
      }
    });

    $("#search").on("keyup change", function () {
      var value = $(this).val().toLowerCase();
      $(".filterItem").filter(function () {
        $(this).toggle($(this).prop("title").toLowerCase().indexOf(value) > -1);
      });
    });
  });
});

$(document).ready(function () {
  $(".btnSpecial").click(function () {
    $(".btnSpecial").removeClass("activeBtn");
    $(this).addClass("activeBtn");
  });

  $("#centralized").click(function () {
    $(".decentralized").addClass("d-none");
    $(".centralized").removeClass("d-none");
  });

  $("#decentralized").click(function () {
    $(".decentralized").removeClass("d-none");
    $(".centralized").addClass("d-none");
  });

  $("#seeAll").click(function () {
    $(".decentralized").removeClass("d-none");
    $(".centralized").removeClass("d-none");
  });

  console.log(location.href);
});

if (window.location.hash) {
  if (location.hash == "#socialArea") {
    if ($(document).width() > 768) {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: 4878,
        },
        100
      );
    } else {
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: 6155,
        },
        100
      );
    }
  }
}
