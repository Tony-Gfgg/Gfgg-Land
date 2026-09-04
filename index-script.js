// Wow, there was no need for this! Maybe I could put a secret here someday...
// Okay I do need to put the fake ads script in here though.

let ad = Math.floor(Math.random() * 5);
console.log(ad);
ad_img = document.getElementById("fake_ad");
if (ad === 0) {
    ad_img.src = "FakeAds/1.png";
} else if (ad === 1) {
    ad_img.src = "FakeAds/2.png";
} else if (ad === 2) {
    ad_img.src = "FakeAds/3.png";
} else if (ad === 3) {
    ad_img.src = "FakeAds/4.png";
} else if (ad === 4) {
    ad_img.src = "FakeAds/5.png";
}

// You found Secret 3! (This was never used..)

function ad_click() {
    if (ad === 0) {
        window.location.href = "https://tony-gfgg.itch.io/"
    } else if (ad === 1) {
        window.location.href = "AdSites/Gfgg_Land/surprise.html";
    } else if (ad === 2) {
        window.location.href = "AdSites/Ad_Buy/ad-buy.html"
    } else if (ad === 3) {
        window.location.href = "AdSites/Joe-T/joes-trombones.html";
    } else if (ad === 4) {
        window.location.href = "AdSites/Gfgg_Land_2/index.html";
    }
}