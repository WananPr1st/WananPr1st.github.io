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
    "revision": "f5b98795bd8d573df7841cc57cda3b65"
  },
  {
    "url": "assets/css/0.styles.59644f6c.css",
    "revision": "437e3b295db5a8af3bcd4f9a100b5af2"
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
    "url": "assets/js/10.e5b821d2.js",
    "revision": "e9b17c18b2b4192c7eef5075df531acd"
  },
  {
    "url": "assets/js/11.25b0a2ec.js",
    "revision": "c12e66ddfdeae370d495f876be9bd45c"
  },
  {
    "url": "assets/js/12.9eba95c1.js",
    "revision": "c78ac063cb977290c3420d9ca62b5a6c"
  },
  {
    "url": "assets/js/13.4eb7f3d9.js",
    "revision": "be242ac7a5e40ec1ef4094141308b7d6"
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
    "url": "assets/js/app.8ebb675d.js",
    "revision": "dec785e07e158b06fb26a1e6db1781b9"
  },
  {
    "url": "assets/js/vendors~flowchart.6800d08e.js",
    "revision": "4f0f0f721084cdec1a7906e08bcdbb2a"
  },
  {
    "url": "category/category1.html",
    "revision": "4fe12661c88b37a349ba29020ab4caff"
  },
  {
    "url": "category/category2.html",
    "revision": "d126790d0db2dd3e49e9751a4d0adfcd"
  },
  {
    "url": "category/index.html",
    "revision": "b51c4bd507aa2688f0b3d8a73c0c4a42"
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
    "revision": "0ccfac7ce08efd559c69af9c11bdac9d"
  },
  {
    "url": "tag/index.html",
    "revision": "2008e475c8ac0a3f4ca850d4f0c27e7c"
  },
  {
    "url": "tag/tag1.html",
    "revision": "26eef2e734c639916493a2fe834a28ae"
  },
  {
    "url": "tag/tag2.html",
    "revision": "8bb678ca4c20b8a569aacf609b073300"
  },
  {
    "url": "tag/tag3.html",
    "revision": "e2af7b0e0069599aa21eaa7ceda047e9"
  },
  {
    "url": "tag/tag4.html",
    "revision": "196c9379fe7220ae69ee12bbd004f9bb"
  },
  {
    "url": "timeLine/index.html",
    "revision": "2d291ef0e58d1ae250583bc8fe7833e3"
  },
  {
    "url": "views/category1/2018/121501.html",
    "revision": "3af582c052e3a032eaed217ed6275703"
  },
  {
    "url": "views/category1/2019/092101.html",
    "revision": "51d84ddc6544c017c5a2a9d06b26c9ee"
  },
  {
    "url": "views/category2/2016/121501.html",
    "revision": "7c25740f311e9d23fd9b65fb81680d79"
  },
  {
    "url": "views/category2/2017/092101.html",
    "revision": "85d1ab9059c1c0dbe43b5efc164259c5"
  },
  {
    "url": "views/other/guide.html",
    "revision": "a0ef0f2d326ce94d3a807a6893c4c2a8"
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
