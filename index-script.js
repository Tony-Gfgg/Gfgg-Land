// Wow, there was no need for this! Maybe I could put a secret here someday...
// Okay I do need to put the fake ads script in here though.

let ad = Math.floor(Math.random() * 5);
console.log(ad)
ad_img = document.getElementById("fake_ad")
if (ad === 0) {
    ad_img.src = "FakeAds/1.png"
} else if (ad === 1) {
    ad_img.src = "FakeAds/2.png"
} else if (ad === 2) {
    ad_img.src = "FakeAds/3.png"
} else if (ad === 3) {
    ad_img.src = "FakeAds/4.png"
} else if (ad === 4) {
    ad_img.src = "FakeAds/5.png"
}

// You found Secret 3! (This was never used..)