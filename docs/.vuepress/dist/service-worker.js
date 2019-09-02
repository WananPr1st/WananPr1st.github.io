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
    "revision": "7e0c0f51ac29f360d5b4d14bcd8361de"
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
    "url": "assets/js/11.5f75a29e.js",
    "revision": "02cb975e26bcd016c17e57a3b817ea98"
  },
  {
    "url": "assets/js/12.a365a498.js",
    "revision": "e14b31f34cc16bdf558408b50adf8da7"
  },
  {
    "url": "assets/js/13.4eb7f3d9.js",
    "revision": "be242ac7a5e40ec1ef4094141308b7d6"
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
    "url": "assets/js/9.252af7ef.js",
    "revision": "591d8f4b56e418a5f7dd9829fa586dfe"
  },
  {
    "url": "assets/js/app.9a34df5a.js",
    "revision": "8c5644acb46d5f3c8129dae46cabfd33"
  },
  {
    "url": "assets/js/vendors~flowchart.6800d08e.js",
    "revision": "4f0f0f721084cdec1a7906e08bcdbb2a"
  },
  {
    "url": "category/category1.html",
    "revision": "3e6269a6e75e9ab5eb14799b0befc56f"
  },
  {
    "url": "category/category2.html",
    "revision": "b6abd1d94f8e7683798c18d3d912de8a"
  },
  {
    "url": "category/index.html",
    "revision": "2032b018d6832be50308eb55432f33c4"
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
    "revision": "f2ab9f287300363492312746e41fc338"
  },
  {
    "url": "tag/index.html",
    "revision": "9bb4824da795f90b9e1d8e019c7d8af8"
  },
  {
    "url": "tag/tag1.html",
    "revision": "752222af74dd76ad880bf911e93e14fa"
  },
  {
    "url": "tag/tag2.html",
    "revision": "18e314d41c78df4d369cdf2e40d1b031"
  },
  {
    "url": "tag/tag3.html",
    "revision": "c1189c8fa2a014026bfdcd4ae7580b58"
  },
  {
    "url": "tag/tag4.html",
    "revision": "e3698543bd84fa056268bebc00028bf0"
  },
  {
    "url": "timeLine/index.html",
    "revision": "367b0c66ee214077d9ec22193e2acb76"
  },
  {
    "url": "views/category1/2018/121501.html",
    "revision": "31a3771867e74cd6281f314b71969c27"
  },
  {
    "url": "views/category1/2019/092101.html",
    "revision": "04bd90f2d9b743d0f3bb3164975f5c7b"
  },
  {
    "url": "views/category2/2016/121501.html",
    "revision": "b76c245755a69a89cc5a0244bcf30f58"
  },
  {
    "url": "views/category2/2017/092101.html",
    "revision": "f620cba01a385648278e554253958f46"
  },
  {
    "url": "views/other/guide.html",
    "revision": "0212edfc8f02adf8a8cb4eb7ceda1820"
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
