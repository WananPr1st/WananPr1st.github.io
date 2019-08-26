/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "771240e392b7b555cf87669dc923a13e"
  },
  {
    "url": "assets/css/0.styles.f65a91e7.css",
    "revision": "ac7ea6f1aa8a07cc22e7bed39308c64c"
  },
  {
    "url": "assets/img/home-bg.f5396e30.jpg",
    "revision": "f5396e308f85adecbf70b6f59918b5bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.c81cff37.js",
    "revision": "39b9dcb200dca625e2f9c525db4c09cb"
  },
  {
    "url": "assets/js/10.472f38b1.js",
    "revision": "73bbfbae4b76478a0ec43038436b751a"
  },
  {
    "url": "assets/js/11.5f75a29e.js",
    "revision": "02cb975e26bcd016c17e57a3b817ea98"
  },
  {
    "url": "assets/js/12.d35feb1a.js",
    "revision": "4e3a94c37842177d77a3d60c4d56f0d3"
  },
  {
    "url": "assets/js/13.40c6907b.js",
    "revision": "b6743690eb2b4b3bddb882adfc1dfb16"
  },
  {
    "url": "assets/js/14.aab0a423.js",
    "revision": "5e03d5d3275f4b88307cb1588a71e3f3"
  },
  {
    "url": "assets/js/15.184f96d0.js",
    "revision": "c6c7ff2ddab7c984466b11660983c945"
  },
  {
    "url": "assets/js/16.6cff0a04.js",
    "revision": "9db91d0396e632e6016410fe4d60158a"
  },
  {
    "url": "assets/js/4.c402f76a.js",
    "revision": "3217fd7e20219e605e7f6013437c9aa3"
  },
  {
    "url": "assets/js/5.da387a4c.js",
    "revision": "f67815f7991659786c8779371127e06f"
  },
  {
    "url": "assets/js/6.772926a6.js",
    "revision": "aa48bd8db864a987dcc95c6c9330ec67"
  },
  {
    "url": "assets/js/7.0eae9ed6.js",
    "revision": "0596b8f3a3685f332452e681d82df7ee"
  },
  {
    "url": "assets/js/8.58eb9161.js",
    "revision": "7881bc2b85edec203ae93f10fbab6c43"
  },
  {
    "url": "assets/js/9.1b61830d.js",
    "revision": "3c5f0cba4301703e5ac6d80a93c44b59"
  },
  {
    "url": "assets/js/app.4c509b62.js",
    "revision": "309fe506d6ebd7b24ae0862d3471fa81"
  },
  {
    "url": "assets/js/vendors~flowchart.6800d08e.js",
    "revision": "4f0f0f721084cdec1a7906e08bcdbb2a"
  },
  {
    "url": "category/category1.html",
    "revision": "7b05f868cf628cef9566e4d9bea7b752"
  },
  {
    "url": "category/category2.html",
    "revision": "2834e4e874cd88940452af1bf3684f25"
  },
  {
    "url": "category/index.html",
    "revision": "4a264c6f6215bbab0717b3205f2686e2"
  },
  {
    "url": "head.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "index.html",
    "revision": "fa45c8af97686754033a22e21481bc0c"
  },
  {
    "url": "tag/index.html",
    "revision": "fb2ebc37372494f4b193b39609e1e49c"
  },
  {
    "url": "tag/tag1.html",
    "revision": "bca93ba7126c8fad3e1055c2e8af1395"
  },
  {
    "url": "tag/tag2.html",
    "revision": "e1aec617b5c72ca387d71c8e172910cd"
  },
  {
    "url": "tag/tag3.html",
    "revision": "11878eaaf2b9e6599e5573f48f516725"
  },
  {
    "url": "tag/tag4.html",
    "revision": "aa58a5ba60a18203de94b67cea493779"
  },
  {
    "url": "timeLine/index.html",
    "revision": "5082a59121fea285226abfcd392d5dc1"
  },
  {
    "url": "views/category1/2018/121501.html",
    "revision": "d9e2c90f2e9edbc357c492d86d9fff04"
  },
  {
    "url": "views/category1/2019/092101.html",
    "revision": "84a30dfc9049ccb18eda2346be94d338"
  },
  {
    "url": "views/category2/2016/121501.html",
    "revision": "6838d10894d8a0fe5176364843f9d718"
  },
  {
    "url": "views/category2/2017/092101.html",
    "revision": "8fdfcd5e609772cfe3ea41f8e53c2202"
  },
  {
    "url": "views/other/guide.html",
    "revision": "46cd39c0458fe52150713d19ac791912"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
