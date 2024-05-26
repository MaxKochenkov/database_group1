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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "3b68be0cc9bce3670ad77d50474b80a3"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.067ba4ca.css",
    "revision": "843456d9f77745851fd7535365b989d7"
  },
  {
    "url": "assets/img/diagram.46a9e59a.png",
    "revision": "46a9e59a13feed862bdcbb267932cecb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/User_create_sql.0caecdc5.jpg",
    "revision": "0caecdc5b5b595b9afa4b54217b66c29"
  },
  {
    "url": "assets/img/User_create.920b9546.jpg",
    "revision": "920b9546a341e0297d3d3b22689b3fcf"
  },
  {
    "url": "assets/img/User_delete_not_found.f3305b10.jpg",
    "revision": "f3305b10b798297df7f72c9602afd7dc"
  },
  {
    "url": "assets/img/User_delete_sql.ba4124ee.jpg",
    "revision": "ba4124eebb988235b9b56d27ea871635"
  },
  {
    "url": "assets/img/User_delete.c426faa1.jpg",
    "revision": "c426faa1b666a22f09eefe3417a9dce3"
  },
  {
    "url": "assets/img/User_email.0a07b739.jpg",
    "revision": "0a07b739baf1544893c2f7bf47b9da95"
  },
  {
    "url": "assets/img/User_id.7d4d8292.jpg",
    "revision": "7d4d8292199f37c36e843bc15721308e"
  },
  {
    "url": "assets/img/User_nickname.c277b8d8.jpg",
    "revision": "c277b8d8fc385c49d123c2b90fe70cbb"
  },
  {
    "url": "assets/img/User_update.dffbd930.jpg",
    "revision": "dffbd930ae1582e3b19ca8f0c05b50d5"
  },
  {
    "url": "assets/img/Users_1.e08ed77b.jpg",
    "revision": "e08ed77bf7e6fc2793c0e7564fb6f311"
  },
  {
    "url": "assets/img/Users_2.a00a071d.jpg",
    "revision": "a00a071db7332c9ff04a7b585ca9afb9"
  },
  {
    "url": "assets/img/Users_sql.a45e278c.jpg",
    "revision": "a45e278c3e2f7308d6311ff3186194bd"
  },
  {
    "url": "assets/js/10.01d8e812.js",
    "revision": "135383e37e9f4f687ab1f33ca46b6cea"
  },
  {
    "url": "assets/js/11.06a196d5.js",
    "revision": "125d74e2158cb76e3eaff1b6ef5cbdb2"
  },
  {
    "url": "assets/js/12.cd56407f.js",
    "revision": "95fa4098449e58a4b502ff1b664685ca"
  },
  {
    "url": "assets/js/13.cf177d46.js",
    "revision": "11671c6c2685fb5a39b78946abe2237a"
  },
  {
    "url": "assets/js/14.03ab53de.js",
    "revision": "aafe6b3f342dce116fd6ca2853988bd1"
  },
  {
    "url": "assets/js/15.8b38903a.js",
    "revision": "c9ffaa61b8d5f7b0bebc04c72183c5a3"
  },
  {
    "url": "assets/js/16.df20b6db.js",
    "revision": "fe8adbff18dfc792c791261569b12c9b"
  },
  {
    "url": "assets/js/17.6f8294bc.js",
    "revision": "cbf16df73fbccaac954bd8e991f62a8a"
  },
  {
    "url": "assets/js/18.ef6ea8db.js",
    "revision": "81117b39958be3a8795276d75f9f77cb"
  },
  {
    "url": "assets/js/19.c7fbc51a.js",
    "revision": "07874fca9295299db1e0b233742d75fe"
  },
  {
    "url": "assets/js/2.3b82c84a.js",
    "revision": "34d33f2dd73983bbfa074236a61708eb"
  },
  {
    "url": "assets/js/20.a5bdfb94.js",
    "revision": "a5e46ced8cb3c954fe4e2e9e0744fa30"
  },
  {
    "url": "assets/js/21.d8f5c6fd.js",
    "revision": "902f46b91b6bfe80d6d05803fc86532f"
  },
  {
    "url": "assets/js/22.39ef798d.js",
    "revision": "f25245df637cd7f4caf39e8ea08bfe23"
  },
  {
    "url": "assets/js/23.7abaf40c.js",
    "revision": "4f064549d43f35d3280ffc790f95806e"
  },
  {
    "url": "assets/js/24.df226a1d.js",
    "revision": "5e0e43787a64a28ce7474f51bcaba5d3"
  },
  {
    "url": "assets/js/26.33977650.js",
    "revision": "5d37626a175e8b6345685c8ce2e57b08"
  },
  {
    "url": "assets/js/3.06951fac.js",
    "revision": "88b5c751e177a9d432d428eaa1359270"
  },
  {
    "url": "assets/js/4.1de18f73.js",
    "revision": "d72745ba9d2b49a9b4f809d9f9eec987"
  },
  {
    "url": "assets/js/5.c557493c.js",
    "revision": "6d82c535d3855b481baa112c0eeab35c"
  },
  {
    "url": "assets/js/6.026c5087.js",
    "revision": "eacf175154cd8bc659e21ed28d3c8a7e"
  },
  {
    "url": "assets/js/7.93505fd5.js",
    "revision": "deb62e3887caa1138fdf2087d5185f64"
  },
  {
    "url": "assets/js/8.87a67c4b.js",
    "revision": "772037e63387f9601863e230fad28db5"
  },
  {
    "url": "assets/js/9.a719d9f4.js",
    "revision": "e6b7802eb2f7d7c8abab04cf4e047a83"
  },
  {
    "url": "assets/js/app.cb224244.js",
    "revision": "e15961c8e34d4f9c9b0fc1afdee861a0"
  },
  {
    "url": "conclusion/index.html",
    "revision": "623cb029d061beeb72f964338c16cba1"
  },
  {
    "url": "design/index.html",
    "revision": "c6657634cecdbe801aec8df90d6cc515"
  },
  {
    "url": "index.html",
    "revision": "39a6e9af1e25a92643da8e4db0d485da"
  },
  {
    "url": "intro/index.html",
    "revision": "e78ac91628ba9c0a83dee8a31ae4e5e1"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "a53dbb383d159619c91ffe6be7f6ace0"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "cd32fde75a189c1723e7fdd58d2ba955"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "78fd3918889d298d72043f61d2ac61d3"
  },
  {
    "url": "software/index.html",
    "revision": "04dd292729d9141ae12671c8eb899fc9"
  },
  {
    "url": "test/index.html",
    "revision": "d29b22351fe659ac43e85603dfe4d019"
  },
  {
    "url": "use cases/index.html",
    "revision": "74009f8c2d99ea4904d2beb46fc688e8"
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
