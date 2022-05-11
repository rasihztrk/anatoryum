$(document).ready(function () {
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

  $(".area").mouseenter(function () {
    $(".discort", this).attr("src", "../anatolia/assets/img/icon/discortB.png");
    $("p", this).css("color", "#7C89FF");
  });

  $(".area").mouseleave(function () {
    $(".discort", this).attr("src", "../anatolia/assets/img/icon/discort.png");
    $("p", this).css("color", "white");
  });

  $(".area").mouseenter(function () {
    $(".twitter", this).attr("src", "../anatolia/assets/img/icon/twitterB.png");
    $("p", this).css("color", "#7C89FF");
  });

  $(".area").mouseleave(function () {
    $(".twitter", this).attr("src", "../anatolia/assets/img/icon/twitter.png");
    $("p", this).css("color", "white");
  });

  $(".area").mouseenter(function () {
    $(".telegram", this).attr(
      "src",
      "../anatolia/assets/img/icon/telegramB.png"
    );
    $("p", this).css("color", "#7C89FF");
  });

  $(".area").mouseleave(function () {
    $(".telegram", this).attr(
      "src",
      "../anatolia/assets/img/icon/telegram.png"
    );
    $("p", this).css("color", "white");
  });
  


  $(".area").mouseenter(function () {
    $(".youtube", this).attr("src", "../anatolia/assets/img/icon/youtubeB.png");
    $("p", this).css("color", "#7C89FF");
  });

  $(".area").mouseleave(function () {
    $(".youtube", this).attr("src", "../anatolia/assets/img/icon/youtube.png");
    $("p", this).css("color", "white");
  });

  $(".area").mouseenter(function () {
    $(".reddit", this).attr("src", "../anatolia/assets/img/icon/redditB.png");
    $("p", this).css("color", "#7C89FF");
  });

  $(".area").mouseleave(function () {
    $(".reddit", this).attr("src", "../anatolia/assets/img/icon/reddit.png");
    $("p", this).css("color", "white");
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

  $("#pressGoUp").click(function (event) {
    $("html, body").animate({ scrollTop: 0 }, 300);
  });

  $("#pressGoUp").mouseenter(function (event) {
    $(".goUpIcon").attr("src", "../anatolia/assets/img/icon/goupTwo.png");
    $("#goupText").css("color", "#7C89FF");
  });

  $("#pressGoUp").mouseleave(function (event) {
    $(".goUpIcon").attr("src", "../anatolia/assets/img/icon/goUp.png");
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
      smallText:
        "Decentralized exchange for Terra community. Trade with zero gas fees, and low cost cross-chain transfer.",
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
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
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
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
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
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
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
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
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
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
      language: "English",
      hidden: false,
      controls: {
        minimize: true,
        close: true,
      },
      content: "a1.html",
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
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
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
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
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
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
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
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
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
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
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
    Bithumb: {
      title: "Bithumb",
      name: "Bithumb",
      centre: "centralized",
      hoodClass: "cbSeven",
      logo: "./assets/img/icon/bithumb.png",
      hoodText: "Bithumb",
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
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
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
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
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
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
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
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
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
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
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
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
    perpExchange: {
      title: "perp.exchange",
      name: "perp.exchange",
      centre: "decentralized",
      hoodClass: "cbNine",
      logo: "./assets/img/icon/perp.svg",
      hoodText: "Perp exchange",
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
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
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
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
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
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
    tradeDydxExchange: {
      title: "trade.dydx.exchange",
      name: "trade.dydx.exchange",
      centre: "decentralized",
      addImgClass: "dydx",
      hoodClass: "cbEight",
      logo: "./assets/img/icon/dydx.svg",
      hoodText: "Dydx exchange",
      smallText:
        "Picasso Exchange offers a sleek user interface to access decentralized spot and derivatives markets on Injective.",
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
                      <a href="${apps[k]["content"]}" target="_blank" class="d-block d-md-none">  
                        <button class="openLinkTwo" id="${k}">Trade Now</button>
                      </a>
                      <button class="openLink d-none d-md-block" id="${k}">Trade Now</button>
                    </div>
                  </div>
                <div class="textArea">
                   <p class="hoodText" >${apps[k]["hoodText"]} <p/>
                   <p class="smallText">${apps[k]["smallText"]} </p>
                   <button>${apps[k]["language"]}</button>
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
        <div class="tabArea">
            <p class="tabText">${apps[appName]["name"]}</p>
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

  console.log(location.href)

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
