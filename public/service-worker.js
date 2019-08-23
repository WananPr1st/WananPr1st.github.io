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
    "revision": "865121979d5539ca07832a9065ab4372"
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
    "url": "assets/js/10.62e4e82f.js",
    "revision": "33cbea8b8df8a155fea1945868e19b02"
  },
  {
    "url": "assets/js/11.57b6d8e4.js",
    "revision": "0faf90e2e18b7bb7de57c0f6dc963281"
  },
  {
    "url": "assets/js/12.d35feb1a.js",
    "revision": "4e3a94c37842177d77a3d60c4d56f0d3"
  },
  {
    "url": "assets/js/13.a1272d79.js",
    "revision": "203f2c9e8d79cef61340d71c7f0f6f2b"
  },
  {
    "url": "assets/js/14.a3eda75e.js",
    "revision": "8672134fa6b59160c3f453ac01cab737"
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
    "url": "assets/js/9.252af7ef.js",
    "revision": "591d8f4b56e418a5f7dd9829fa586dfe"
  },
  {
    "url": "assets/js/app.fd6399d3.js",
    "revision": "039678e4e39c040240c1adcd4ccc4efa"
  },
  {
    "url": "assets/js/vendors~flowchart.6800d08e.js",
    "revision": "4f0f0f721084cdec1a7906e08bcdbb2a"
  },
  {
    "url": "category/category1.html",
    "revision": "61aff564b50cc102aa311900846f56fd"
  },
  {
    "url": "category/category2.html",
    "revision": "bebf7710b786a9231cd6b6a0919769ac"
  },
  {
    "url": "category/index.html",
    "revision": "84e9051a7aaeb1d36aa76e941aae298a"
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
    "revision": "3a35fab17343034bcca20ab671f9222f"
  },
  {
    "url": "tag/index.html",
    "revision": "4c4560e13ab823ca108cd53f877c1ae6"
  },
  {
    "url": "tag/tag1.html",
    "revision": "fac14a5b6da10f7d5f4606f475bd94cb"
  },
  {
    "url": "tag/tag2.html",
    "revision": "79a6d541a1b5caedd078cc70a8f7ec9e"
  },
  {
    "url": "tag/tag3.html",
    "revision": "9630367fa40cef87c42aaca00557f2ab"
  },
  {
    "url": "tag/tag4.html",
    "revision": "52ad91215c9cbba4fb9299d7c5970570"
  },
  {
    "url": "timeLine/index.html",
    "revision": "45c1df1566e1c5450ff0fe60f206a421"
  },
  {
    "url": "views/category1/2018/121501.html",
    "revision": "1075806d3f4333dd46c50fcbdfe63857"
  },
  {
    "url": "views/category1/2019/092101.html",
    "revision": "c678790026512542df59e5dbc79679f4"
  },
  {
    "url": "views/category2/2016/121501.html",
    "revision": "90156c3170ec5b4f9c89b8e45e778b02"
  },
  {
    "url": "views/category2/2017/092101.html",
    "revision": "59f1f74964435d675ad3f80b0cab2faa"
  },
  {
    "url": "views/other/guide.html",
    "revision": "579cba49853b18f21717d4c929cfd7a4"
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
