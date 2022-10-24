var userName = document.querySelector("#ember32 > div.ph5.pb5 > div.mt2.relative > div:nth-child(1) > div:nth-child(1) > h1").innerText;
var aboutUser = document.querySelector("#ember32 > div.ph5.pb5 > div.mt2.relative > div:nth-child(1) > div.text-body-medium.break-words").innerText;
var address = document.querySelector("#ember32 > div.ph5.pb5 > div.mt2.relative > div.pv-text-details__left-panel.reduced-spacing.mt2 > span.text-body-small.inline.t-black--light.break-words").innerText;
var contactInfo = document.querySelector("#top-card-text-details-contact-info").baseURI;

console.log({userName, aboutUser, address, contactInfo});
