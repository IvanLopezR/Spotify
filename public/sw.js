/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./service-worker.js":
/*!***************************!*\
  !*** ./service-worker.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var workbox_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core */ "./node_modules/workbox-core/index.mjs");
/* harmony import */ var workbox_expiration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-expiration */ "./node_modules/workbox-expiration/index.mjs");
/* harmony import */ var workbox_strategies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-strategies */ "./node_modules/workbox-strategies/index.mjs");
/* harmony import */ var workbox_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-routing */ "./node_modules/workbox-routing/index.mjs");
/* harmony import */ var workbox_precaching__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-precaching */ "./node_modules/workbox-precaching/index.mjs");
/* module decorator */ module = __webpack_require__.hmd(module);





(0,workbox_core__WEBPACK_IMPORTED_MODULE_0__.skipWaiting)();
(0,workbox_core__WEBPACK_IMPORTED_MODULE_0__.clientsClaim)(); // must include following lines when using inject manifest module from workbox
// https://developers.google.com/web/tools/workbox/guides/precache-files/workbox-build#add_an_injection_point

var WB_MANIFEST = []; // Precache fallback route and image

WB_MANIFEST.push({
  url: '/fallback',
  revision: '1234567890'
});
(0,workbox_precaching__WEBPACK_IMPORTED_MODULE_4__.precacheAndRoute)(WB_MANIFEST);
(0,workbox_precaching__WEBPACK_IMPORTED_MODULE_4__.cleanupOutdatedCaches)();
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.registerRoute)('/', new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.NetworkFirst({
  cacheName: 'start-url',
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin({
    maxEntries: 1,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET');
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.registerRoute)(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.CacheFirst({
  cacheName: 'google-fonts',
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin({
    maxEntries: 4,
    maxAgeSeconds: 31536e3,
    purgeOnQuotaError: !0
  })]
}), 'GET');
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.registerRoute)(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.StaleWhileRevalidate({
  cacheName: 'static-font-assets',
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin({
    maxEntries: 4,
    maxAgeSeconds: 604800,
    purgeOnQuotaError: !0
  })]
}), 'GET'); // disable image cache, so we could observe the placeholder image when offline

(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.registerRoute)(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.NetworkOnly({
  cacheName: 'static-image-assets',
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin({
    maxEntries: 64,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET');
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.registerRoute)(/\.(?:js)$/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.StaleWhileRevalidate({
  cacheName: 'static-js-assets',
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin({
    maxEntries: 32,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET');
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.registerRoute)(/\.(?:css|less)$/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.StaleWhileRevalidate({
  cacheName: 'static-style-assets',
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin({
    maxEntries: 32,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET');
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.registerRoute)(/\.(?:json|xml|csv)$/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.NetworkFirst({
  cacheName: 'static-data-assets',
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin({
    maxEntries: 32,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET');
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.registerRoute)(/\/api\/.*$/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.NetworkFirst({
  cacheName: 'apis',
  networkTimeoutSeconds: 10,
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin({
    maxEntries: 16,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET');
(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.registerRoute)(/.*/i, new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.NetworkFirst({
  cacheName: 'others',
  networkTimeoutSeconds: 10,
  plugins: [new workbox_expiration__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin({
    maxEntries: 32,
    maxAgeSeconds: 86400,
    purgeOnQuotaError: !0
  })]
}), 'GET'); // following lines gives you control of the offline fallback strategies
// https://developers.google.com/web/tools/workbox/guides/advanced-recipes#comprehensive_fallbacks
// Use a stale-while-revalidate strategy for all other requests.

(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.setDefaultHandler)(new workbox_strategies__WEBPACK_IMPORTED_MODULE_2__.StaleWhileRevalidate()); // This "catch" handler is triggered when any of the other routes fail to
// generate a response.

(0,workbox_routing__WEBPACK_IMPORTED_MODULE_3__.setCatchHandler)(function (_ref) {
  var event = _ref.event;

  // The FALLBACK_URL entries must be added to the cache ahead of time, either
  // via runtime or precaching. If they are precached, then call
  // `matchPrecache(FALLBACK_URL)` (from the `workbox-precaching` package)
  // to get the response from the correct cache.
  //
  // Use event, request, and url to figure out how to respond.
  // One approach would be to use request.destination, see
  // https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c
  switch (event.request.destination) {
    case 'document':
      // If using precached URLs:
      return (0,workbox_precaching__WEBPACK_IMPORTED_MODULE_4__.matchPrecache)('/fallback'); // return caches.match('/fallback')

      break;

    case 'image':
      // If using precached URLs:
      return (0,workbox_precaching__WEBPACK_IMPORTED_MODULE_4__.matchPrecache)('/static/images/fallback.png'); // return caches.match('/static/images/fallback.png')

      break;

    case 'font': // If using precached URLs:
    // return matchPrecache(FALLBACK_FONT_URL);
    // return caches.match('/static/fonts/fallback.otf')
    // break

    default:
      // If we don't have a fallback, just return an error response.
      return Response.error();
  }
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/idb/build/esm/index.js":
/*!*********************************************!*\
  !*** ./node_modules/idb/build/esm/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unwrap": function() { return /* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u; },
/* harmony export */   "wrap": function() { return /* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w; },
/* harmony export */   "deleteDB": function() { return /* binding */ deleteDB; },
/* harmony export */   "openDB": function() { return /* binding */ openDB; }
/* harmony export */ });
/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-idb-value.js */ "./node_modules/idb/build/esm/wrap-idb-value.js");



/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event) => {
            upgrade((0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction));
        });
    }
    if (blocked)
        request.addEventListener('blocked', () => blocked());
    openPromise
        .then((db) => {
        if (terminated)
            db.addEventListener('close', () => terminated());
        if (blocking)
            db.addEventListener('versionchange', () => blocking());
    })
        .catch(() => { });
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked)
        request.addEventListener('blocked', () => blocked());
    return (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(() => undefined);
}

const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
const writeMethods = ['put', 'add', 'delete', 'clear'];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase &&
        !(prop in target) &&
        typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop))
        return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
        !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function (storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex)
            target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done,
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
}));




/***/ }),

/***/ "./node_modules/idb/build/esm/wrap-idb-value.js":
/*!******************************************************!*\
  !*** ./node_modules/idb/build/esm/wrap-idb-value.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ reverseTransformCache; },
/* harmony export */   "i": function() { return /* binding */ instanceOfAny; },
/* harmony export */   "r": function() { return /* binding */ replaceTraps; },
/* harmony export */   "u": function() { return /* binding */ unwrap; },
/* harmony export */   "w": function() { return /* binding */ wrap; }
/* harmony export */ });
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);

let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return (idbProxyableTypes ||
        (idbProxyableTypes = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
        ]));
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return (cursorAdvanceMethods ||
        (cursorAdvanceMethods = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
        ]));
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
        const unlisten = () => {
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = () => {
            resolve(wrap(request.result));
            unlisten();
        };
        const error = () => {
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    promise
        .then((value) => {
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
        }
        // Catching to avoid "Uncaught Promise exceptions"
    })
        .catch(() => { });
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx))
        return;
    const done = new Promise((resolve, reject) => {
        const unlisten = () => {
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = () => {
            resolve();
            unlisten();
        };
        const error = () => {
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done')
                return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') {
                return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1]
                    ? undefined
                    : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set(target, prop, value) {
        target[prop] = value;
        return true;
    },
    has(target, prop) {
        if (target instanceof IDBTransaction &&
            (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    },
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction &&
        !('objectStoreNames' in IDBTransaction.prototype)) {
        return function (storeNames, ...args) {
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
            return wrap(tx);
        };
    }
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function (...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(cursorRequestMap.get(this));
        };
    }
    return function (...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function')
        return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction)
        cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
        return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest)
        return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value))
        return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);




/***/ }),

/***/ "./node_modules/workbox-core/_private.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_private.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": function() { return /* reexport safe */ _private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert; },
/* harmony export */   "cacheMatchIgnoreParams": function() { return /* reexport safe */ _private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_2__.cacheMatchIgnoreParams; },
/* harmony export */   "cacheNames": function() { return /* reexport safe */ _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames; },
/* harmony export */   "canConstructReadableStream": function() { return /* reexport safe */ _private_canConstructReadableStream_js__WEBPACK_IMPORTED_MODULE_3__.canConstructReadableStream; },
/* harmony export */   "canConstructResponseFromBodyStream": function() { return /* reexport safe */ _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_4__.canConstructResponseFromBodyStream; },
/* harmony export */   "dontWaitFor": function() { return /* reexport safe */ _private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_5__.dontWaitFor; },
/* harmony export */   "Deferred": function() { return /* reexport safe */ _private_Deferred_js__WEBPACK_IMPORTED_MODULE_6__.Deferred; },
/* harmony export */   "executeQuotaErrorCallbacks": function() { return /* reexport safe */ _private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_7__.executeQuotaErrorCallbacks; },
/* harmony export */   "getFriendlyURL": function() { return /* reexport safe */ _private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_8__.getFriendlyURL; },
/* harmony export */   "logger": function() { return /* reexport safe */ _private_logger_js__WEBPACK_IMPORTED_MODULE_9__.logger; },
/* harmony export */   "resultingClientExists": function() { return /* reexport safe */ _private_resultingClientExists_js__WEBPACK_IMPORTED_MODULE_10__.resultingClientExists; },
/* harmony export */   "timeout": function() { return /* reexport safe */ _private_timeout_js__WEBPACK_IMPORTED_MODULE_11__.timeout; },
/* harmony export */   "waitUntil": function() { return /* reexport safe */ _private_waitUntil_js__WEBPACK_IMPORTED_MODULE_12__.waitUntil; },
/* harmony export */   "WorkboxError": function() { return /* reexport safe */ _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_13__.WorkboxError; }
/* harmony export */ });
/* harmony import */ var _private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var _private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_private/cacheMatchIgnoreParams.js */ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var _private_canConstructReadableStream_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_private/canConstructReadableStream.js */ "./node_modules/workbox-core/_private/canConstructReadableStream.js");
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_private/dontWaitFor.js */ "./node_modules/workbox-core/_private/dontWaitFor.js");
/* harmony import */ var _private_Deferred_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_private/Deferred.js */ "./node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var _private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_private/executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var _private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _private_resultingClientExists_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_private/resultingClientExists.js */ "./node_modules/workbox-core/_private/resultingClientExists.js");
/* harmony import */ var _private_timeout_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var _private_waitUntil_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_private/waitUntil.js */ "./node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_14__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/
// We either expose defaults or we expose every named export.


















/***/ }),

/***/ "./node_modules/workbox-core/_private/Deferred.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-core/_private/Deferred.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Deferred": function() { return /* binding */ Deferred; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */
class Deferred {
    /**
     * Creates a promise and exposes its resolve and reject functions as methods.
     */
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/WorkboxError.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-core/_private/WorkboxError.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkboxError": function() { return /* binding */ WorkboxError; }
/* harmony export */ });
/* harmony import */ var _models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/messages/messageGenerator.js */ "./node_modules/workbox-core/models/messages/messageGenerator.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Workbox errors should be thrown with this class.
 * This allows use to ensure the type easily in tests,
 * helps developers identify errors from workbox
 * easily and allows use to optimise error
 * messages correctly.
 *
 * @private
 */
class WorkboxError extends Error {
    /**
     *
     * @param {string} errorCode The error code that
     * identifies this particular error.
     * @param {Object=} details Any relevant arguments
     * that will help developers identify issues should
     * be added as a key on the context object.
     */
    constructor(errorCode, details) {
        const message = (0,_models_messages_messageGenerator_js__WEBPACK_IMPORTED_MODULE_0__.messageGenerator)(errorCode, details);
        super(message);
        this.name = errorCode;
        this.details = details;
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/assert.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/assert.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assert": function() { return /* binding */ finalAssertExports; }
/* harmony export */ });
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/*
 * This method throws if the supplied value is not an array.
 * The destructed values are required to produce a meaningful error for users.
 * The destructed and restructured object is so it's clear what is
 * needed.
 */
const isArray = (value, details) => {
    if (!Array.isArray(value)) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-an-array', details);
    }
};
const hasMethod = (object, expectedMethod, details) => {
    const type = typeof object[expectedMethod];
    if (type !== 'function') {
        details['expectedMethod'] = expectedMethod;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('missing-a-method', details);
    }
};
const isType = (object, expectedType, details) => {
    if (typeof object !== expectedType) {
        details['expectedType'] = expectedType;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-type', details);
    }
};
const isInstance = (object, 
// Need the general type to do the check later.
// eslint-disable-next-line @typescript-eslint/ban-types
expectedClass, details) => {
    if (!(object instanceof expectedClass)) {
        details['expectedClassName'] = expectedClass.name;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('incorrect-class', details);
    }
};
const isOneOf = (value, validValues, details) => {
    if (!validValues.includes(value)) {
        details['validValueDescription'] =
            `Valid values are ${JSON.stringify(validValues)}.`;
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('invalid-value', details);
    }
};
const isArrayOfClass = (value, 
// Need general type to do check later.
expectedClass, // eslint-disable-line
details) => {
    const error = new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('not-array-of-class', details);
    if (!Array.isArray(value)) {
        throw error;
    }
    for (const item of value) {
        if (!(item instanceof expectedClass)) {
            throw error;
        }
    }
};
const finalAssertExports =  false ? 0 : {
    hasMethod,
    isArray,
    isInstance,
    isOneOf,
    isType,
    isArrayOfClass,
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheMatchIgnoreParams": function() { return /* binding */ cacheMatchIgnoreParams; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

function stripParams(fullURL, ignoreParams) {
    const strippedURL = new URL(fullURL);
    for (const param of ignoreParams) {
        strippedURL.searchParams.delete(param);
    }
    return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */
async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
    const strippedRequestURL = stripParams(request.url, ignoreParams);
    // If the request doesn't include any ignored params, match as normal.
    if (request.url === strippedRequestURL) {
        return cache.match(request, matchOptions);
    }
    // Otherwise, match by comparing keys
    const keysOptions = Object.assign(Object.assign({}, matchOptions), { ignoreSearch: true });
    const cacheKeys = await cache.keys(request, keysOptions);
    for (const cacheKey of cacheKeys) {
        const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
        if (strippedRequestURL === strippedCacheKeyURL) {
            return cache.match(cacheKey, matchOptions);
        }
    }
    return;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/cacheNames.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/_private/cacheNames.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheNames": function() { return /* binding */ cacheNames; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const _cacheNameDetails = {
    googleAnalytics: 'googleAnalytics',
    precache: 'precache-v2',
    prefix: 'workbox',
    runtime: 'runtime',
    suffix: typeof registration !== 'undefined' ? registration.scope : '',
};
const _createCacheName = (cacheName) => {
    return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
        .filter((value) => value && value.length > 0)
        .join('-');
};
const eachCacheNameDetail = (fn) => {
    for (const key of Object.keys(_cacheNameDetails)) {
        fn(key);
    }
};
const cacheNames = {
    updateDetails: (details) => {
        eachCacheNameDetail((key) => {
            if (typeof details[key] === 'string') {
                _cacheNameDetails[key] = details[key];
            }
        });
    },
    getGoogleAnalyticsName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
    },
    getPrecacheName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.precache);
    },
    getPrefix: () => {
        return _cacheNameDetails.prefix;
    },
    getRuntimeName: (userCacheName) => {
        return userCacheName || _createCacheName(_cacheNameDetails.runtime);
    },
    getSuffix: () => {
        return _cacheNameDetails.suffix;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructReadableStream.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructReadableStream.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canConstructReadableStream": function() { return /* binding */ canConstructReadableStream; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream)
 * object.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `ReadableStream`, `false` otherwise.
 *
 * @private
 */
function canConstructReadableStream() {
    if (supportStatus === undefined) {
        // See https://github.com/GoogleChrome/workbox/issues/1473
        try {
            new ReadableStream({ start() { } });
            supportStatus = true;
        }
        catch (error) {
            supportStatus = false;
        }
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canConstructResponseFromBodyStream": function() { return /* binding */ canConstructResponseFromBodyStream; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

let supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */
function canConstructResponseFromBodyStream() {
    if (supportStatus === undefined) {
        const testResponse = new Response('');
        if ('body' in testResponse) {
            try {
                new Response(testResponse.body);
                supportStatus = true;
            }
            catch (error) {
                supportStatus = false;
            }
        }
        supportStatus = false;
    }
    return supportStatus;
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/dontWaitFor.js":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-core/_private/dontWaitFor.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dontWaitFor": function() { return /* binding */ dontWaitFor; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A helper function that prevents a promise from being flagged as unused.
 *
 * @private
 **/
function dontWaitFor(promise) {
    // Effective no-op.
    void promise.then(() => { });
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js":
/*!**************************************************************************!*\
  !*** ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "executeQuotaErrorCallbacks": function() { return /* binding */ executeQuotaErrorCallbacks; }
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof module:workbox-core
 * @private
 */
async function executeQuotaErrorCallbacks() {
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(`About to run ${_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks.size} ` +
            `callbacks to clean up caches.`);
    }
    for (const callback of _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__.quotaErrorCallbacks) {
        await callback();
        if (true) {
            _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(callback, 'is complete.');
        }
    }
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Finished running callbacks.');
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/_private/getFriendlyURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-core/_private/getFriendlyURL.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFriendlyURL": function() { return /* binding */ getFriendlyURL; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const getFriendlyURL = (url) => {
    const urlObj = new URL(String(url), location.href);
    // See https://github.com/GoogleChrome/workbox/issues/2323
    // We want to include everything, except for the origin if it's same-origin.
    return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
};



/***/ }),

/***/ "./node_modules/workbox-core/_private/logger.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-core/_private/logger.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logger": function() { return /* binding */ logger; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const logger = ( false ? 0 : (() => {
    // Don't overwrite this value if it's already set.
    // See https://github.com/GoogleChrome/workbox/pull/2284#issuecomment-560470923
    if (!('__WB_DISABLE_DEV_LOGS' in self)) {
        self.__WB_DISABLE_DEV_LOGS = false;
    }
    let inGroup = false;
    const methodToColorMap = {
        debug: `#7f8c8d`,
        log: `#2ecc71`,
        warn: `#f39c12`,
        error: `#c0392b`,
        groupCollapsed: `#3498db`,
        groupEnd: null,
    };
    const print = function (method, args) {
        if (self.__WB_DISABLE_DEV_LOGS) {
            return;
        }
        if (method === 'groupCollapsed') {
            // Safari doesn't print all console.groupCollapsed() arguments:
            // https://bugs.webkit.org/show_bug.cgi?id=182754
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
                console[method](...args);
                return;
            }
        }
        const styles = [
            `background: ${methodToColorMap[method]}`,
            `border-radius: 0.5em`,
            `color: white`,
            `font-weight: bold`,
            `padding: 2px 0.5em`,
        ];
        // When in a group, the workbox prefix is not displayed.
        const logPrefix = inGroup ? [] : ['%cworkbox', styles.join(';')];
        console[method](...logPrefix, ...args);
        if (method === 'groupCollapsed') {
            inGroup = true;
        }
        if (method === 'groupEnd') {
            inGroup = false;
        }
    };
    // eslint-disable-next-line @typescript-eslint/ban-types
    const api = {};
    const loggerMethods = Object.keys(methodToColorMap);
    for (const key of loggerMethods) {
        const method = key;
        api[method] = (...args) => {
            print(method, args);
        };
    }
    return api;
})());



/***/ }),

/***/ "./node_modules/workbox-core/_private/resultingClientExists.js":
/*!*********************************************************************!*\
  !*** ./node_modules/workbox-core/_private/resultingClientExists.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resultingClientExists": function() { return /* binding */ resultingClientExists; }
/* harmony export */ });
/* harmony import */ var _timeout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const MAX_RETRY_TIME = 2000;
/**
 * Returns a promise that resolves to a window client matching the passed
 * `resultingClientId`. For browsers that don't support `resultingClientId`
 * or if waiting for the resulting client to apper takes too long, resolve to
 * `undefined`.
 *
 * @param {string} [resultingClientId]
 * @return {Promise<Client|undefined>}
 * @private
 */
async function resultingClientExists(resultingClientId) {
    if (!resultingClientId) {
        return;
    }
    let existingWindows = await self.clients.matchAll({ type: 'window' });
    const existingWindowIds = new Set(existingWindows.map((w) => w.id));
    let resultingWindow;
    const startTime = performance.now();
    // Only wait up to `MAX_RETRY_TIME` to find a matching client.
    while (performance.now() - startTime < MAX_RETRY_TIME) {
        existingWindows = await self.clients.matchAll({ type: 'window' });
        resultingWindow = existingWindows.find((w) => {
            if (resultingClientId) {
                // If we have a `resultingClientId`, we can match on that.
                return w.id === resultingClientId;
            }
            else {
                // Otherwise match on finding a window not in `existingWindowIds`.
                return !existingWindowIds.has(w.id);
            }
        });
        if (resultingWindow) {
            break;
        }
        // Sleep for 100ms and retry.
        await (0,_timeout_js__WEBPACK_IMPORTED_MODULE_0__.timeout)(100);
    }
    return resultingWindow;
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/timeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-core/_private/timeout.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeout": function() { return /* binding */ timeout; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */
function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./node_modules/workbox-core/_private/waitUntil.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-core/_private/waitUntil.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "waitUntil": function() { return /* binding */ waitUntil; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */
function waitUntil(event, asyncFn) {
    const returnPromise = asyncFn();
    event.waitUntil(returnPromise);
    return returnPromise;
}



/***/ }),

/***/ "./node_modules/workbox-core/_version.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-core/_version.js ***!
  \***********************************************/
/***/ (function() {


// @ts-ignore
try {
    self['workbox:core:6.2.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-core/cacheNames.js":
/*!*************************************************!*\
  !*** ./node_modules/workbox-core/cacheNames.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheNames": function() { return /* binding */ cacheNames; }
/* harmony export */ });
/* harmony import */ var _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Get the current cache names and prefix/suffix used by Workbox.
 *
 * `cacheNames.precache` is used for precached assets,
 * `cacheNames.googleAnalytics` is used by `workbox-google-analytics` to
 * store `analytics.js`, and `cacheNames.runtime` is used for everything else.
 *
 * `cacheNames.prefix` can be used to retrieve just the current prefix value.
 * `cacheNames.suffix` can be used to retrieve just the current suffix value.
 *
 * @return {Object} An object with `precache`, `runtime`, `prefix`, and
 *     `googleAnalytics` properties.
 *
 * @memberof module:workbox-core
 */
const cacheNames = {
    get googleAnalytics() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getGoogleAnalyticsName();
    },
    get precache() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
    },
    get prefix() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrefix();
    },
    get runtime() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName();
    },
    get suffix() {
        return _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getSuffix();
    },
};



/***/ }),

/***/ "./node_modules/workbox-core/clientsClaim.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/clientsClaim.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clientsClaim": function() { return /* binding */ clientsClaim; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Claim any currently available clients once the service worker
 * becomes active. This is normally used in conjunction with `skipWaiting()`.
 *
 * @memberof module:workbox-core
 */
function clientsClaim() {
    self.addEventListener('activate', () => self.clients.claim());
}



/***/ }),

/***/ "./node_modules/workbox-core/copyResponse.js":
/*!***************************************************!*\
  !*** ./node_modules/workbox-core/copyResponse.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyResponse": function() { return /* binding */ copyResponse; }
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/canConstructResponseFromBodyStream.js */ "./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof module:workbox-core
 */
async function copyResponse(response, modifier) {
    let origin = null;
    // If response.url isn't set, assume it's cross-origin and keep origin null.
    if (response.url) {
        const responseURL = new URL(response.url);
        origin = responseURL.origin;
    }
    if (origin !== self.location.origin) {
        throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('cross-origin-copy-response', { origin });
    }
    const clonedResponse = response.clone();
    // Create a fresh `ResponseInit` object by cloning the headers.
    const responseInit = {
        headers: new Headers(clonedResponse.headers),
        status: clonedResponse.status,
        statusText: clonedResponse.statusText,
    };
    // Apply any user modifications.
    const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
    // Create the new response from the body stream and `ResponseInit`
    // modifications. Note: not all browsers support the Response.body stream,
    // so fall back to reading the entire body into memory as a blob.
    const body = (0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__.canConstructResponseFromBodyStream)() ?
        clonedResponse.body : await clonedResponse.blob();
    return new Response(body, modifiedResponseInit);
}



/***/ }),

/***/ "./node_modules/workbox-core/index.js":
/*!********************************************!*\
  !*** ./node_modules/workbox-core/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_private": function() { return /* reexport module object */ _private_js__WEBPACK_IMPORTED_MODULE_1__; },
/* harmony export */   "cacheNames": function() { return /* reexport safe */ _cacheNames_js__WEBPACK_IMPORTED_MODULE_2__.cacheNames; },
/* harmony export */   "clientsClaim": function() { return /* reexport safe */ _clientsClaim_js__WEBPACK_IMPORTED_MODULE_4__.clientsClaim; },
/* harmony export */   "copyResponse": function() { return /* reexport safe */ _copyResponse_js__WEBPACK_IMPORTED_MODULE_3__.copyResponse; },
/* harmony export */   "registerQuotaErrorCallback": function() { return /* reexport safe */ _registerQuotaErrorCallback_js__WEBPACK_IMPORTED_MODULE_0__.registerQuotaErrorCallback; },
/* harmony export */   "setCacheNameDetails": function() { return /* reexport safe */ _setCacheNameDetails_js__WEBPACK_IMPORTED_MODULE_5__.setCacheNameDetails; },
/* harmony export */   "skipWaiting": function() { return /* reexport safe */ _skipWaiting_js__WEBPACK_IMPORTED_MODULE_6__.skipWaiting; }
/* harmony export */ });
/* harmony import */ var _registerQuotaErrorCallback_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registerQuotaErrorCallback.js */ "./node_modules/workbox-core/registerQuotaErrorCallback.js");
/* harmony import */ var _private_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private.js */ "./node_modules/workbox-core/_private.js");
/* harmony import */ var _cacheNames_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cacheNames.js */ "./node_modules/workbox-core/cacheNames.js");
/* harmony import */ var _copyResponse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var _clientsClaim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clientsClaim.js */ "./node_modules/workbox-core/clientsClaim.js");
/* harmony import */ var _setCacheNameDetails_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setCacheNameDetails.js */ "./node_modules/workbox-core/setCacheNameDetails.js");
/* harmony import */ var _skipWaiting_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skipWaiting.js */ "./node_modules/workbox-core/skipWaiting.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types.js */ "./node_modules/workbox-core/types.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types_js__WEBPACK_IMPORTED_MODULE_8__) if(["default","_private","cacheNames","clientsClaim","copyResponse","registerQuotaErrorCallback","setCacheNameDetails","skipWaiting"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _types_js__WEBPACK_IMPORTED_MODULE_8__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * All of the Workbox service worker libraries use workbox-core for shared
 * code as well as setting default values that need to be shared (like cache
 * names).
 *
 * @module workbox-core
 */




/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messageGenerator.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messageGenerator.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messageGenerator": function() { return /* binding */ messageGenerator; }
/* harmony export */ });
/* harmony import */ var _messages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.js */ "./node_modules/workbox-core/models/messages/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const fallback = (code, ...args) => {
    let msg = code;
    if (args.length > 0) {
        msg += ` :: ${JSON.stringify(args)}`;
    }
    return msg;
};
const generatorFunction = (code, details = {}) => {
    const message = _messages_js__WEBPACK_IMPORTED_MODULE_0__.messages[code];
    if (!message) {
        throw new Error(`Unable to find message for code '${code}'.`);
    }
    return message(details);
};
const messageGenerator = ( false) ?
    0 : generatorFunction;


/***/ }),

/***/ "./node_modules/workbox-core/models/messages/messages.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-core/models/messages/messages.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": function() { return /* binding */ messages; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const messages = {
    'invalid-value': ({ paramName, validValueDescription, value }) => {
        if (!paramName || !validValueDescription) {
            throw new Error(`Unexpected input to 'invalid-value' error.`);
        }
        return `The '${paramName}' parameter was given a value with an ` +
            `unexpected value. ${validValueDescription} Received a value of ` +
            `${JSON.stringify(value)}.`;
    },
    'not-an-array': ({ moduleName, className, funcName, paramName }) => {
        if (!moduleName || !className || !funcName || !paramName) {
            throw new Error(`Unexpected input to 'not-an-array' error.`);
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${className}.${funcName}()' must be an array.`;
    },
    'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName }) => {
        if (!expectedType || !paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-type' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}` +
            `${funcName}()' must be of type ${expectedType}.`;
    },
    'incorrect-class': ({ expectedClassName, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
        if (!expectedClassName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'incorrect-class' error.`);
        }
        const classNameStr = className ? `${className}.` : '';
        if (isReturnValueProblem) {
            return `The return value from ` +
                `'${moduleName}.${classNameStr}${funcName}()' ` +
                `must be an instance of class ${expectedClassName}.`;
        }
        return `The parameter '${paramName}' passed into ` +
            `'${moduleName}.${classNameStr}${funcName}()' ` +
            `must be an instance of class ${expectedClassName}.`;
    },
    'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName }) => {
        if (!expectedMethod || !paramName || !moduleName || !className
            || !funcName) {
            throw new Error(`Unexpected input to 'missing-a-method' error.`);
        }
        return `${moduleName}.${className}.${funcName}() expected the ` +
            `'${paramName}' parameter to expose a '${expectedMethod}' method.`;
    },
    'add-to-cache-list-unexpected-type': ({ entry }) => {
        return `An unexpected entry was passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
            `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
            `strings with one or more characters, objects with a url property or ` +
            `Request objects.`;
    },
    'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
        if (!firstEntry || !secondEntry) {
            throw new Error(`Unexpected input to ` +
                `'add-to-cache-list-duplicate-entries' error.`);
        }
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${firstEntry} but different revision details. Workbox is ` +
            `unable to cache and version the asset correctly. Please remove one ` +
            `of the entries.`;
    },
    'plugin-error-request-will-fetch': ({ thrownErrorMessage }) => {
        if (!thrownErrorMessage) {
            throw new Error(`Unexpected input to ` +
                `'plugin-error-request-will-fetch', error.`);
        }
        return `An error was thrown by a plugins 'requestWillFetch()' method. ` +
            `The thrown error message was: '${thrownErrorMessage}'.`;
    },
    'invalid-cache-name': ({ cacheNameId, value }) => {
        if (!cacheNameId) {
            throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
        }
        return `You must provide a name containing at least one character for ` +
            `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
            `'${JSON.stringify(value)}'`;
    },
    'unregister-route-but-not-found-with-method': ({ method }) => {
        if (!method) {
            throw new Error(`Unexpected input to ` +
                `'unregister-route-but-not-found-with-method' error.`);
        }
        return `The route you're trying to unregister was not  previously ` +
            `registered for the method type '${method}'.`;
    },
    'unregister-route-route-not-registered': () => {
        return `The route you're trying to unregister was not previously ` +
            `registered.`;
    },
    'queue-replay-failed': ({ name }) => {
        return `Replaying the background sync queue '${name}' failed.`;
    },
    'duplicate-queue-name': ({ name }) => {
        return `The Queue name '${name}' is already being used. ` +
            `All instances of backgroundSync.Queue must be given unique names.`;
    },
    'expired-test-without-max-age': ({ methodName, paramName }) => {
        return `The '${methodName}()' method can only be used when the ` +
            `'${paramName}' is used in the constructor.`;
    },
    'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter was an unsupported type. ` +
            `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
            `valid input types.`;
    },
    'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
        return `The supplied '${paramName}' parameter must be an array of ` +
            `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
            `Please check the call to ${moduleName}.${className}.${funcName}() ` +
            `to fix the issue.`;
    },
    'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.maxEntries or config.maxAgeSeconds` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
        return `You must define either config.statuses or config.headers` +
            `in ${moduleName}.${className}.${funcName}`;
    },
    'invalid-string': ({ moduleName, funcName, paramName }) => {
        if (!paramName || !moduleName || !funcName) {
            throw new Error(`Unexpected input to 'invalid-string' error.`);
        }
        return `When using strings, the '${paramName}' parameter must start with ` +
            `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
            `Please see the docs for ${moduleName}.${funcName}() for ` +
            `more info.`;
    },
    'channel-name-required': () => {
        return `You must provide a channelName to construct a ` +
            `BroadcastCacheUpdate instance.`;
    },
    'invalid-responses-are-same-args': () => {
        return `The arguments passed into responsesAreSame() appear to be ` +
            `invalid. Please ensure valid Responses are used.`;
    },
    'expire-custom-caches-only': () => {
        return `You must provide a 'cacheName' property when using the ` +
            `expiration plugin with a runtime caching strategy.`;
    },
    'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
        }
        return `The 'unit' portion of the Range header must be set to 'bytes'. ` +
            `The Range header provided was "${normalizedRangeHeader}"`;
    },
    'single-range-only': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'single-range-only' error.`);
        }
        return `Multiple ranges are not supported. Please use a  single start ` +
            `value, and optional end value. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'invalid-range-values': ({ normalizedRangeHeader }) => {
        if (!normalizedRangeHeader) {
            throw new Error(`Unexpected input to 'invalid-range-values' error.`);
        }
        return `The Range header is missing both start and end values. At least ` +
            `one of those values is needed. The Range header provided was ` +
            `"${normalizedRangeHeader}"`;
    },
    'no-range-header': () => {
        return `No Range header was found in the Request provided.`;
    },
    'range-not-satisfiable': ({ size, start, end }) => {
        return `The start (${start}) and end (${end}) values in the Range are ` +
            `not satisfiable by the cached response, which is ${size} bytes.`;
    },
    'attempt-to-cache-non-get-request': ({ url, method }) => {
        return `Unable to cache '${url}' because it is a '${method}' request and ` +
            `only 'GET' requests can be cached.`;
    },
    'cache-put-with-no-response': ({ url }) => {
        return `There was an attempt to cache '${url}' but the response was not ` +
            `defined.`;
    },
    'no-response': ({ url, error }) => {
        let message = `The strategy could not generate a response for '${url}'.`;
        if (error) {
            message += ` The underlying error is ${error}.`;
        }
        return message;
    },
    'bad-precaching-response': ({ url, status }) => {
        return `The precaching request for '${url}' failed` +
            (status ? ` with an HTTP status of ${status}.` : `.`);
    },
    'non-precached-url': ({ url }) => {
        return `createHandlerBoundToURL('${url}') was called, but that URL is ` +
            `not precached. Please pass in a URL that is precached instead.`;
    },
    'add-to-cache-list-conflicting-integrities': ({ url }) => {
        return `Two of the entries passed to ` +
            `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
            `${url} with different integrity values. Please remove one of them.`;
    },
    'missing-precache-entry': ({ cacheName, url }) => {
        return `Unable to find a precached response in ${cacheName} for ${url}.`;
    },
    'cross-origin-copy-response': ({ origin }) => {
        return `workbox-core.copyResponse() can only be used with same-origin ` +
            `responses. It was passed a response with origin ${origin}.`;
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/models/quotaErrorCallbacks.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/models/quotaErrorCallbacks.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "quotaErrorCallbacks": function() { return /* binding */ quotaErrorCallbacks; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

// Callbacks to be executed whenever there's a quota error.
// Can't change Function type right now.
// eslint-disable-next-line @typescript-eslint/ban-types
const quotaErrorCallbacks = new Set();



/***/ }),

/***/ "./node_modules/workbox-core/registerQuotaErrorCallback.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-core/registerQuotaErrorCallback.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerQuotaErrorCallback": function() { return /* binding */ registerQuotaErrorCallback; }
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _private_assert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/quotaErrorCallbacks.js */ "./node_modules/workbox-core/models/quotaErrorCallbacks.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds a function to the set of quotaErrorCallbacks that will be executed if
 * there's a quota error.
 *
 * @param {Function} callback
 * @memberof module:workbox-core
 */
// Can't change Function type
// eslint-disable-next-line @typescript-eslint/ban-types
function registerQuotaErrorCallback(callback) {
    if (true) {
        _private_assert_js__WEBPACK_IMPORTED_MODULE_1__.assert.isType(callback, 'function', {
            moduleName: 'workbox-core',
            funcName: 'register',
            paramName: 'callback',
        });
    }
    _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_2__.quotaErrorCallbacks.add(callback);
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log('Registered a callback to respond to quota errors.', callback);
    }
}



/***/ }),

/***/ "./node_modules/workbox-core/setCacheNameDetails.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-core/setCacheNameDetails.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCacheNameDetails": function() { return /* binding */ setCacheNameDetails; }
/* harmony export */ });
/* harmony import */ var _private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Modifies the default cache names used by the Workbox packages.
 * Cache names are generated as `<prefix>-<Cache Name>-<suffix>`.
 *
 * @param {Object} details
 * @param {Object} [details.prefix] The string to add to the beginning of
 *     the precache and runtime cache names.
 * @param {Object} [details.suffix] The string to add to the end of
 *     the precache and runtime cache names.
 * @param {Object} [details.precache] The cache name to use for precache
 *     caching.
 * @param {Object} [details.runtime] The cache name to use for runtime caching.
 * @param {Object} [details.googleAnalytics] The cache name to use for
 *     `workbox-google-analytics` caching.
 *
 * @memberof module:workbox-core
 */
function setCacheNameDetails(details) {
    if (true) {
        Object.keys(details).forEach((key) => {
            _private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(details[key], 'string', {
                moduleName: 'workbox-core',
                funcName: 'setCacheNameDetails',
                paramName: `details.${key}`,
            });
        });
        if ('precache' in details && details['precache'].length === 0) {
            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('invalid-cache-name', {
                cacheNameId: 'precache',
                value: details['precache'],
            });
        }
        if ('runtime' in details && details['runtime'].length === 0) {
            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('invalid-cache-name', {
                cacheNameId: 'runtime',
                value: details['runtime'],
            });
        }
        if ('googleAnalytics' in details && details['googleAnalytics'].length === 0) {
            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('invalid-cache-name', {
                cacheNameId: 'googleAnalytics',
                value: details['googleAnalytics'],
            });
        }
    }
    _private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.updateDetails(details);
}



/***/ }),

/***/ "./node_modules/workbox-core/skipWaiting.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-core/skipWaiting.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skipWaiting": function() { return /* binding */ skipWaiting; }
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * This method is deprecated, and will be removed in Workbox v7.
 *
 * Calling self.skipWaiting() is equivalent, and should be used instead.
 *
 * @memberof module:workbox-core
 */
function skipWaiting() {
    // Just call self.skipWaiting() directly.
    // See https://github.com/GoogleChrome/workbox/issues/2525
    if (true) {
        _private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.warn(`skipWaiting() from workbox-core is no longer recommended ` +
            `and will be removed in Workbox v7. Using self.skipWaiting() instead ` +
            `is equivalent.`);
    }
    void self.skipWaiting();
}



/***/ }),

/***/ "./node_modules/workbox-core/types.js":
/*!********************************************!*\
  !*** ./node_modules/workbox-core/types.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-core/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/***/ }),

/***/ "./node_modules/workbox-expiration/CacheExpiration.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-expiration/CacheExpiration.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheExpiration": function() { return /* binding */ CacheExpiration; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/dontWaitFor.js */ "./node_modules/workbox-core/_private/dontWaitFor.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _models_CacheTimestampsModel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/CacheTimestampsModel.js */ "./node_modules/workbox-expiration/models/CacheTimestampsModel.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-expiration/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * The `CacheExpiration` class allows you define an expiration and / or
 * limit on the number of responses stored in a
 * [`Cache`](https://developer.mozilla.org/en-US/docs/Web/API/Cache).
 *
 * @memberof module:workbox-expiration
 */
class CacheExpiration {
    /**
     * To construct a new CacheExpiration instance you must provide at least
     * one of the `config` properties.
     *
     * @param {string} cacheName Name of the cache to apply restrictions to.
     * @param {Object} config
     * @param {number} [config.maxEntries] The maximum number of entries to cache.
     * Entries used the least will be removed as the maximum is reached.
     * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
     * it's treated as stale and removed.
     * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
     * that will be used when calling `delete()` on the cache.
     */
    constructor(cacheName, config = {}) {
        this._isRunning = false;
        this._rerunRequested = false;
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(cacheName, 'string', {
                moduleName: 'workbox-expiration',
                className: 'CacheExpiration',
                funcName: 'constructor',
                paramName: 'cacheName',
            });
            if (!(config.maxEntries || config.maxAgeSeconds)) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('max-entries-or-age-required', {
                    moduleName: 'workbox-expiration',
                    className: 'CacheExpiration',
                    funcName: 'constructor',
                });
            }
            if (config.maxEntries) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(config.maxEntries, 'number', {
                    moduleName: 'workbox-expiration',
                    className: 'CacheExpiration',
                    funcName: 'constructor',
                    paramName: 'config.maxEntries',
                });
            }
            if (config.maxAgeSeconds) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(config.maxAgeSeconds, 'number', {
                    moduleName: 'workbox-expiration',
                    className: 'CacheExpiration',
                    funcName: 'constructor',
                    paramName: 'config.maxAgeSeconds',
                });
            }
        }
        this._maxEntries = config.maxEntries;
        this._maxAgeSeconds = config.maxAgeSeconds;
        this._matchOptions = config.matchOptions;
        this._cacheName = cacheName;
        this._timestampModel = new _models_CacheTimestampsModel_js__WEBPACK_IMPORTED_MODULE_4__.CacheTimestampsModel(cacheName);
    }
    /**
     * Expires entries for the given cache and given criteria.
     */
    async expireEntries() {
        if (this._isRunning) {
            this._rerunRequested = true;
            return;
        }
        this._isRunning = true;
        const minTimestamp = this._maxAgeSeconds ?
            Date.now() - (this._maxAgeSeconds * 1000) : 0;
        const urlsExpired = await this._timestampModel.expireEntries(minTimestamp, this._maxEntries);
        // Delete URLs from the cache
        const cache = await self.caches.open(this._cacheName);
        for (const url of urlsExpired) {
            await cache.delete(url, this._matchOptions);
        }
        if (true) {
            if (urlsExpired.length > 0) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.groupCollapsed(`Expired ${urlsExpired.length} ` +
                    `${urlsExpired.length === 1 ? 'entry' : 'entries'} and removed ` +
                    `${urlsExpired.length === 1 ? 'it' : 'them'} from the ` +
                    `'${this._cacheName}' cache.`);
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`Expired the following ${urlsExpired.length === 1 ?
                    'URL' : 'URLs'}:`);
                urlsExpired.forEach((url) => workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`    ${url}`));
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.groupEnd();
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.debug(`Cache expiration ran and found no entries to remove.`);
            }
        }
        this._isRunning = false;
        if (this._rerunRequested) {
            this._rerunRequested = false;
            (0,workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_1__.dontWaitFor)(this.expireEntries());
        }
    }
    /**
     * Update the timestamp for the given URL. This ensures the when
     * removing entries based on maximum entries, most recently used
     * is accurate or when expiring, the timestamp is up-to-date.
     *
     * @param {string} url
     */
    async updateTimestamp(url) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(url, 'string', {
                moduleName: 'workbox-expiration',
                className: 'CacheExpiration',
                funcName: 'updateTimestamp',
                paramName: 'url',
            });
        }
        await this._timestampModel.setTimestamp(url, Date.now());
    }
    /**
     * Can be used to check if a URL has expired or not before it's used.
     *
     * This requires a look up from IndexedDB, so can be slow.
     *
     * Note: This method will not remove the cached entry, call
     * `expireEntries()` to remove indexedDB and Cache entries.
     *
     * @param {string} url
     * @return {boolean}
     */
    async isURLExpired(url) {
        if (!this._maxAgeSeconds) {
            if (true) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError(`expired-test-without-max-age`, {
                    methodName: 'isURLExpired',
                    paramName: 'maxAgeSeconds',
                });
            }
            return false;
        }
        else {
            const timestamp = await this._timestampModel.getTimestamp(url);
            const expireOlderThan = Date.now() - (this._maxAgeSeconds * 1000);
            return timestamp !== undefined ? (timestamp < expireOlderThan) : true;
        }
    }
    /**
     * Removes the IndexedDB object store used to keep track of cache expiration
     * metadata.
     */
    async delete() {
        // Make sure we don't attempt another rerun if we're called in the middle of
        // a cache expiration.
        this._rerunRequested = false;
        await this._timestampModel.expireEntries(Infinity); // Expires all.
    }
}



/***/ }),

/***/ "./node_modules/workbox-expiration/ExpirationPlugin.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-expiration/ExpirationPlugin.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpirationPlugin": function() { return /* binding */ ExpirationPlugin; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/dontWaitFor.js */ "./node_modules/workbox-core/_private/dontWaitFor.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_registerQuotaErrorCallback_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/registerQuotaErrorCallback.js */ "./node_modules/workbox-core/registerQuotaErrorCallback.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CacheExpiration.js */ "./node_modules/workbox-expiration/CacheExpiration.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-expiration/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









/**
 * This plugin can be used in a `workbox-strategy` to regularly enforce a
 * limit on the age and / or the number of cached requests.
 *
 * It can only be used with `workbox-strategy` instances that have a
 * [custom `cacheName` property set](/web/tools/workbox/guides/configure-workbox#custom_cache_names_in_strategies).
 * In other words, it can't be used to expire entries in strategy that uses the
 * default runtime cache name.
 *
 * Whenever a cached request is used or updated, this plugin will look
 * at the associated cache and remove any old or extra requests.
 *
 * When using `maxAgeSeconds`, requests may be used *once* after expiring
 * because the expiration clean up will not have occurred until *after* the
 * cached request has been used. If the request has a "Date" header, then
 * a light weight expiration check is performed and the request will not be
 * used immediately.
 *
 * When using `maxEntries`, the entry least-recently requested will be removed
 * from the cache first.
 *
 * @memberof module:workbox-expiration
 */
class ExpirationPlugin {
    /**
     * @param {ExpirationPluginOptions} config
     * @param {number} [config.maxEntries] The maximum number of entries to cache.
     * Entries used the least will be removed as the maximum is reached.
     * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
     * it's treated as stale and removed.
     * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
     * that will be used when calling `delete()` on the cache.
     * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
     * automatic deletion if the available storage quota has been exceeded.
     */
    constructor(config = {}) {
        /**
         * A "lifecycle" callback that will be triggered automatically by the
         * `workbox-strategies` handlers when a `Response` is about to be returned
         * from a [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache) to
         * the handler. It allows the `Response` to be inspected for freshness and
         * prevents it from being used if the `Response`'s `Date` header value is
         * older than the configured `maxAgeSeconds`.
         *
         * @param {Object} options
         * @param {string} options.cacheName Name of the cache the response is in.
         * @param {Response} options.cachedResponse The `Response` object that's been
         *     read from a cache and whose freshness should be checked.
         * @return {Response} Either the `cachedResponse`, if it's
         *     fresh, or `null` if the `Response` is older than `maxAgeSeconds`.
         *
         * @private
         */
        this.cachedResponseWillBeUsed = async ({ event, request, cacheName, cachedResponse }) => {
            if (!cachedResponse) {
                return null;
            }
            const isFresh = this._isResponseDateFresh(cachedResponse);
            // Expire entries to ensure that even if the expiration date has
            // expired, it'll only be used once.
            const cacheExpiration = this._getCacheExpiration(cacheName);
            (0,workbox_core_private_dontWaitFor_js__WEBPACK_IMPORTED_MODULE_2__.dontWaitFor)(cacheExpiration.expireEntries());
            // Update the metadata for the request URL to the current timestamp,
            // but don't `await` it as we don't want to block the response.
            const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
            if (event) {
                try {
                    event.waitUntil(updateTimestampDone);
                }
                catch (error) {
                    if (true) {
                        // The event may not be a fetch event; only log the URL if it is.
                        if ('request' in event) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_4__.logger.warn(`Unable to ensure service worker stays alive when ` +
                                `updating cache entry for ` +
                                `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(event.request.url)}'.`);
                        }
                    }
                }
            }
            return isFresh ? cachedResponse : null;
        };
        /**
         * A "lifecycle" callback that will be triggered automatically by the
         * `workbox-strategies` handlers when an entry is added to a cache.
         *
         * @param {Object} options
         * @param {string} options.cacheName Name of the cache that was updated.
         * @param {string} options.request The Request for the cached entry.
         *
         * @private
         */
        this.cacheDidUpdate = async ({ cacheName, request }) => {
            if (true) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(cacheName, 'string', {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'cacheDidUpdate',
                    paramName: 'cacheName',
                });
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'cacheDidUpdate',
                    paramName: 'request',
                });
            }
            const cacheExpiration = this._getCacheExpiration(cacheName);
            await cacheExpiration.updateTimestamp(request.url);
            await cacheExpiration.expireEntries();
        };
        if (true) {
            if (!(config.maxEntries || config.maxAgeSeconds)) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__.WorkboxError('max-entries-or-age-required', {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'constructor',
                });
            }
            if (config.maxEntries) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(config.maxEntries, 'number', {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'constructor',
                    paramName: 'config.maxEntries',
                });
            }
            if (config.maxAgeSeconds) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(config.maxAgeSeconds, 'number', {
                    moduleName: 'workbox-expiration',
                    className: 'Plugin',
                    funcName: 'constructor',
                    paramName: 'config.maxAgeSeconds',
                });
            }
        }
        this._config = config;
        this._maxAgeSeconds = config.maxAgeSeconds;
        this._cacheExpirations = new Map();
        if (config.purgeOnQuotaError) {
            (0,workbox_core_registerQuotaErrorCallback_js__WEBPACK_IMPORTED_MODULE_5__.registerQuotaErrorCallback)(() => this.deleteCacheAndMetadata());
        }
    }
    /**
     * A simple helper method to return a CacheExpiration instance for a given
     * cache name.
     *
     * @param {string} cacheName
     * @return {CacheExpiration}
     *
     * @private
     */
    _getCacheExpiration(cacheName) {
        if (cacheName === workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getRuntimeName()) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_6__.WorkboxError('expire-custom-caches-only');
        }
        let cacheExpiration = this._cacheExpirations.get(cacheName);
        if (!cacheExpiration) {
            cacheExpiration = new _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_7__.CacheExpiration(cacheName, this._config);
            this._cacheExpirations.set(cacheName, cacheExpiration);
        }
        return cacheExpiration;
    }
    /**
     * @param {Response} cachedResponse
     * @return {boolean}
     *
     * @private
     */
    _isResponseDateFresh(cachedResponse) {
        if (!this._maxAgeSeconds) {
            // We aren't expiring by age, so return true, it's fresh
            return true;
        }
        // Check if the 'date' header will suffice a quick expiration check.
        // See https://github.com/GoogleChromeLabs/sw-toolbox/issues/164 for
        // discussion.
        const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
        if (dateHeaderTimestamp === null) {
            // Unable to parse date, so assume it's fresh.
            return true;
        }
        // If we have a valid headerTime, then our response is fresh iff the
        // headerTime plus maxAgeSeconds is greater than the current time.
        const now = Date.now();
        return dateHeaderTimestamp >= now - (this._maxAgeSeconds * 1000);
    }
    /**
     * This method will extract the data header and parse it into a useful
     * value.
     *
     * @param {Response} cachedResponse
     * @return {number|null}
     *
     * @private
     */
    _getDateHeaderTimestamp(cachedResponse) {
        if (!cachedResponse.headers.has('date')) {
            return null;
        }
        const dateHeader = cachedResponse.headers.get('date');
        const parsedDate = new Date(dateHeader);
        const headerTime = parsedDate.getTime();
        // If the Date header was invalid for some reason, parsedDate.getTime()
        // will return NaN.
        if (isNaN(headerTime)) {
            return null;
        }
        return headerTime;
    }
    /**
     * This is a helper method that performs two operations:
     *
     * - Deletes *all* the underlying Cache instances associated with this plugin
     * instance, by calling caches.delete() on your behalf.
     * - Deletes the metadata from IndexedDB used to keep track of expiration
     * details for each Cache instance.
     *
     * When using cache expiration, calling this method is preferable to calling
     * `caches.delete()` directly, since this will ensure that the IndexedDB
     * metadata is also cleanly removed and open IndexedDB instances are deleted.
     *
     * Note that if you're *not* using cache expiration for a given cache, calling
     * `caches.delete()` and passing in the cache's name should be sufficient.
     * There is no Workbox-specific method needed for cleanup in that case.
     */
    async deleteCacheAndMetadata() {
        // Do this one at a time instead of all at once via `Promise.all()` to
        // reduce the chance of inconsistency if a promise rejects.
        for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
            await self.caches.delete(cacheName);
            await cacheExpiration.delete();
        }
        // Reset this._cacheExpirations to its initial state.
        this._cacheExpirations = new Map();
    }
}



/***/ }),

/***/ "./node_modules/workbox-expiration/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-expiration/_version.js ***!
  \*****************************************************/
/***/ (function() {


// @ts-ignore
try {
    self['workbox:expiration:6.2.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-expiration/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-expiration/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheExpiration": function() { return /* reexport safe */ _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_0__.CacheExpiration; },
/* harmony export */   "ExpirationPlugin": function() { return /* reexport safe */ _ExpirationPlugin_js__WEBPACK_IMPORTED_MODULE_1__.ExpirationPlugin; }
/* harmony export */ });
/* harmony import */ var _CacheExpiration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheExpiration.js */ "./node_modules/workbox-expiration/CacheExpiration.js");
/* harmony import */ var _ExpirationPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExpirationPlugin.js */ "./node_modules/workbox-expiration/ExpirationPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-expiration/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * @module workbox-expiration
 */



/***/ }),

/***/ "./node_modules/workbox-expiration/models/CacheTimestampsModel.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-expiration/models/CacheTimestampsModel.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheTimestampsModel": function() { return /* binding */ CacheTimestampsModel; }
/* harmony export */ });
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/esm/index.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-expiration/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


const DB_NAME = 'workbox-expiration';
const CACHE_OBJECT_STORE = 'cache-entries';
const normalizeURL = (unNormalizedUrl) => {
    const url = new URL(unNormalizedUrl, location.href);
    url.hash = '';
    return url.href;
};
/**
 * Returns the timestamp model.
 *
 * @private
 */
class CacheTimestampsModel {
    /**
     *
     * @param {string} cacheName
     *
     * @private
     */
    constructor(cacheName) {
        this._db = null;
        this._cacheName = cacheName;
    }
    /**
     * Performs an upgrade of indexedDB.
     *
     * @param {IDBPDatabase<CacheDbSchema>} db
     *
     * @private
     */
    _upgradeDb(db) {
        // TODO(philipwalton): EdgeHTML doesn't support arrays as a keyPath, so we
        // have to use the `id` keyPath here and create our own values (a
        // concatenation of `url + cacheName`) instead of simply using
        // `keyPath: ['url', 'cacheName']`, which is supported in other browsers.
        const objStore = db.createObjectStore(CACHE_OBJECT_STORE, { keyPath: 'id' });
        // TODO(philipwalton): once we don't have to support EdgeHTML, we can
        // create a single index with the keyPath `['cacheName', 'timestamp']`
        // instead of doing both these indexes.
        objStore.createIndex('cacheName', 'cacheName', { unique: false });
        objStore.createIndex('timestamp', 'timestamp', { unique: false });
    }
    /**
     * Performs an upgrade of indexedDB and deletes deprecated DBs.
     *
     * @param {IDBPDatabase<CacheDbSchema>} db
     *
     * @private
     */
    _upgradeDbAndDeleteOldDbs(db) {
        this._upgradeDb(db);
        if (this._cacheName) {
            void (0,idb__WEBPACK_IMPORTED_MODULE_0__.deleteDB)(this._cacheName);
        }
    }
    /**
     * @param {string} url
     * @param {number} timestamp
     *
     * @private
     */
    async setTimestamp(url, timestamp) {
        url = normalizeURL(url);
        const entry = {
            url,
            timestamp,
            cacheName: this._cacheName,
            // Creating an ID from the URL and cache name won't be necessary once
            // Edge switches to Chromium and all browsers we support work with
            // array keyPaths.
            id: this._getId(url),
        };
        const db = await this.getDb();
        const tx = db.transaction(CACHE_OBJECT_STORE, 'readwrite', { durability: 'relaxed' });
        await tx.store.put(entry);
        await tx.done;
    }
    /**
     * Returns the timestamp stored for a given URL.
     *
     * @param {string} url
     * @return {number | undefined}
     *
     * @private
     */
    async getTimestamp(url) {
        const db = await this.getDb();
        const entry = await db.get(CACHE_OBJECT_STORE, this._getId(url));
        return entry === null || entry === void 0 ? void 0 : entry.timestamp;
    }
    /**
     * Iterates through all the entries in the object store (from newest to
     * oldest) and removes entries once either `maxCount` is reached or the
     * entry's timestamp is less than `minTimestamp`.
     *
     * @param {number} minTimestamp
     * @param {number} maxCount
     * @return {Array<string>}
     *
     * @private
     */
    async expireEntries(minTimestamp, maxCount) {
        const db = await this.getDb();
        let cursor = await db.transaction(CACHE_OBJECT_STORE).store.index('timestamp').openCursor(null, 'prev');
        const entriesToDelete = [];
        let entriesNotDeletedCount = 0;
        while (cursor) {
            const result = cursor.value;
            // TODO(philipwalton): once we can use a multi-key index, we
            // won't have to check `cacheName` here.
            if (result.cacheName === this._cacheName) {
                // Delete an entry if it's older than the max age or
                // if we already have the max number allowed.
                if ((minTimestamp && result.timestamp < minTimestamp) ||
                    (maxCount && entriesNotDeletedCount >= maxCount)) {
                    // TODO(philipwalton): we should be able to delete the
                    // entry right here, but doing so causes an iteration
                    // bug in Safari stable (fixed in TP). Instead we can
                    // store the keys of the entries to delete, and then
                    // delete the separate transactions.
                    // https://github.com/GoogleChrome/workbox/issues/1978
                    // cursor.delete();
                    // We only need to return the URL, not the whole entry.
                    entriesToDelete.push(cursor.value);
                }
                else {
                    entriesNotDeletedCount++;
                }
            }
            cursor = await cursor.continue();
        }
        // TODO(philipwalton): once the Safari bug in the following issue is fixed,
        // we should be able to remove this loop and do the entry deletion in the
        // cursor loop above:
        // https://github.com/GoogleChrome/workbox/issues/1978
        const urlsDeleted = [];
        for (const entry of entriesToDelete) {
            await db.delete(CACHE_OBJECT_STORE, entry.id);
            urlsDeleted.push(entry.url);
        }
        return urlsDeleted;
    }
    /**
     * Takes a URL and returns an ID that will be unique in the object store.
     *
     * @param {string} url
     * @return {string}
     *
     * @private
     */
    _getId(url) {
        // Creating an ID from the URL and cache name won't be necessary once
        // Edge switches to Chromium and all browsers we support work with
        // array keyPaths.
        return this._cacheName + '|' + normalizeURL(url);
    }
    /**
      * Returns an open connection to the database.
      *
      * @private
      */
    async getDb() {
        if (!this._db) {
            this._db = await (0,idb__WEBPACK_IMPORTED_MODULE_0__.openDB)(DB_NAME, 1, {
                upgrade: this._upgradeDbAndDeleteOldDbs.bind(this),
            });
        }
        return this._db;
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheController.js":
/*!***************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheController.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheController": function() { return /* binding */ PrecacheController; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/waitUntil.js */ "./node_modules/workbox-core/_private/waitUntil.js");
/* harmony import */ var _utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/createCacheKey.js */ "./node_modules/workbox-precaching/utils/createCacheKey.js");
/* harmony import */ var _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PrecacheInstallReportPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js");
/* harmony import */ var _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PrecacheCacheKeyPlugin.js */ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js");
/* harmony import */ var _utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/printCleanupDetails.js */ "./node_modules/workbox-precaching/utils/printCleanupDetails.js");
/* harmony import */ var _utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/printInstallDetails.js */ "./node_modules/workbox-precaching/utils/printInstallDetails.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_11__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/












/**
 * Performs efficient precaching of assets.
 *
 * @memberof module:workbox-precaching
 */
class PrecacheController {
    /**
     * Create a new PrecacheController.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] The cache to use for precaching.
     * @param {string} [options.plugins] Plugins to use when precaching as well
     * as responding to fetch events for precached assets.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor({ cacheName, plugins = [], fallbackToNetwork = true } = {}) {
        this._urlsToCacheKeys = new Map();
        this._urlsToCacheModes = new Map();
        this._cacheKeysToIntegrities = new Map();
        this._strategy = new _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy({
            cacheName: workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(cacheName),
            plugins: [
                ...plugins,
                new _utils_PrecacheCacheKeyPlugin_js__WEBPACK_IMPORTED_MODULE_7__.PrecacheCacheKeyPlugin({ precacheController: this }),
            ],
            fallbackToNetwork,
        });
        // Bind the install and activate methods to the instance.
        this.install = this.install.bind(this);
        this.activate = this.activate.bind(this);
    }
    /**
     * @type {module:workbox-precaching.PrecacheStrategy} The strategy created by this controller and
     * used to cache assets and respond to fetch events.
     */
    get strategy() {
        return this._strategy;
    }
    /**
     * Adds items to the precache list, removing any duplicates and
     * stores the files in the
     * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
     * worker installs.
     *
     * This method can be called multiple times.
     *
     * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
     */
    precache(entries) {
        this.addToCacheList(entries);
        if (!this._installAndActiveListenersAdded) {
            self.addEventListener('install', this.install);
            self.addEventListener('activate', this.activate);
            this._installAndActiveListenersAdded = true;
        }
    }
    /**
     * This method will add items to the precache list, removing duplicates
     * and ensuring the information is valid.
     *
     * @param {Array<module:workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
     *     Array of entries to precache.
     */
    addToCacheList(entries) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArray(entries, {
                moduleName: 'workbox-precaching',
                className: 'PrecacheController',
                funcName: 'addToCacheList',
                paramName: 'entries',
            });
        }
        const urlsToWarnAbout = [];
        for (const entry of entries) {
            // See https://github.com/GoogleChrome/workbox/issues/2259
            if (typeof entry === 'string') {
                urlsToWarnAbout.push(entry);
            }
            else if (entry && entry.revision === undefined) {
                urlsToWarnAbout.push(entry.url);
            }
            const { cacheKey, url } = (0,_utils_createCacheKey_js__WEBPACK_IMPORTED_MODULE_5__.createCacheKey)(entry);
            const cacheMode = (typeof entry !== 'string' && entry.revision) ?
                'reload' : 'default';
            if (this._urlsToCacheKeys.has(url) &&
                this._urlsToCacheKeys.get(url) !== cacheKey) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-entries', {
                    firstEntry: this._urlsToCacheKeys.get(url),
                    secondEntry: cacheKey,
                });
            }
            if (typeof entry !== 'string' && entry.integrity) {
                if (this._cacheKeysToIntegrities.has(cacheKey) &&
                    this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('add-to-cache-list-conflicting-integrities', {
                        url,
                    });
                }
                this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
            }
            this._urlsToCacheKeys.set(url, cacheKey);
            this._urlsToCacheModes.set(url, cacheMode);
            if (urlsToWarnAbout.length > 0) {
                const warningMessage = `Workbox is precaching URLs without revision ` +
                    `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                    `Learn more at https://bit.ly/wb-precache`;
                if (false) {}
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.warn(warningMessage);
                }
            }
        }
    }
    /**
     * Precaches new and updated assets. Call this method from the service worker
     * install event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<module:workbox-precaching.InstallResult>}
     */
    install(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const installReportPlugin = new _utils_PrecacheInstallReportPlugin_js__WEBPACK_IMPORTED_MODULE_6__.PrecacheInstallReportPlugin();
            this.strategy.plugins.push(installReportPlugin);
            // Cache entries one at a time.
            // See https://github.com/GoogleChrome/workbox/issues/2528
            for (const [url, cacheKey] of this._urlsToCacheKeys) {
                const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                const cacheMode = this._urlsToCacheModes.get(url);
                const request = new Request(url, {
                    integrity,
                    cache: cacheMode,
                    credentials: 'same-origin',
                });
                await Promise.all(this.strategy.handleAll({
                    params: { cacheKey },
                    request,
                    event,
                }));
            }
            const { updatedURLs, notUpdatedURLs } = installReportPlugin;
            if (true) {
                (0,_utils_printInstallDetails_js__WEBPACK_IMPORTED_MODULE_9__.printInstallDetails)(updatedURLs, notUpdatedURLs);
            }
            return { updatedURLs, notUpdatedURLs };
        });
    }
    /**
     * Deletes assets that are no longer present in the current precache manifest.
     * Call this method from the service worker activate event.
     *
     * Note: this method calls `event.waitUntil()` for you, so you do not need
     * to call it yourself in your event handlers.
     *
     * @param {ExtendableEvent} event
     * @return {Promise<module:workbox-precaching.CleanupResult>}
     */
    activate(event) {
        // waitUntil returns Promise<any>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return (0,workbox_core_private_waitUntil_js__WEBPACK_IMPORTED_MODULE_4__.waitUntil)(event, async () => {
            const cache = await self.caches.open(this.strategy.cacheName);
            const currentlyCachedRequests = await cache.keys();
            const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
            const deletedURLs = [];
            for (const request of currentlyCachedRequests) {
                if (!expectedCacheKeys.has(request.url)) {
                    await cache.delete(request);
                    deletedURLs.push(request.url);
                }
            }
            if (true) {
                (0,_utils_printCleanupDetails_js__WEBPACK_IMPORTED_MODULE_8__.printCleanupDetails)(deletedURLs);
            }
            return { deletedURLs };
        });
    }
    /**
     * Returns a mapping of a precached URL to the corresponding cache key, taking
     * into account the revision information for the URL.
     *
     * @return {Map<string, string>} A URL to cache key mapping.
     */
    getURLsToCacheKeys() {
        return this._urlsToCacheKeys;
    }
    /**
     * Returns a list of all the URLs that have been precached by the current
     * service worker.
     *
     * @return {Array<string>} The precached URLs.
     */
    getCachedURLs() {
        return [...this._urlsToCacheKeys.keys()];
    }
    /**
     * Returns the cache key used for storing a given URL. If that URL is
     * unversioned, like `/index.html', then the cache key will be the original
     * URL with a search parameter appended to it.
     *
     * @param {string} url A URL whose cache key you want to look up.
     * @return {string} The versioned URL that corresponds to a cache key
     * for the original URL, or undefined if that URL isn't precached.
     */
    getCacheKeyForURL(url) {
        const urlObject = new URL(url, location.href);
        return this._urlsToCacheKeys.get(urlObject.href);
    }
    /**
     * @param {string} url A cache key whose SRI you want to look up.
     * @return {string} The subresource integrity associated with the cache key,
     * or undefined if it's not set.
     */
    getIntegrityForCacheKey(cacheKey) {
        return this._cacheKeysToIntegrities.get(cacheKey);
    }
    /**
     * This acts as a drop-in replacement for
     * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
     * with the following differences:
     *
     * - It knows what the name of the precache is, and only checks in that cache.
     * - It allows you to pass in an "original" URL without versioning parameters,
     * and it will automatically look up the correct cache key for the currently
     * active revision of that URL.
     *
     * E.g., `matchPrecache('index.html')` will find the correct precached
     * response for the currently active service worker, even if the actual cache
     * key is `'/index.html?__WB_REVISION__=1234abcd'`.
     *
     * @param {string|Request} request The key (without revisioning parameters)
     * to look up in the precache.
     * @return {Promise<Response|undefined>}
     */
    async matchPrecache(request) {
        const url = request instanceof Request ? request.url : request;
        const cacheKey = this.getCacheKeyForURL(url);
        if (cacheKey) {
            const cache = await self.caches.open(this.strategy.cacheName);
            return cache.match(cacheKey);
        }
        return undefined;
    }
    /**
     * Returns a function that looks up `url` in the precache (taking into
     * account revision information), and returns the corresponding `Response`.
     *
     * @param {string} url The precached URL which will be used to lookup the
     * `Response`.
     * @return {module:workbox-routing~handlerCallback}
     */
    createHandlerBoundToURL(url) {
        const cacheKey = this.getCacheKeyForURL(url);
        if (!cacheKey) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('non-precached-url', { url });
        }
        return (options) => {
            options.request = new Request(url);
            options.params = Object.assign({ cacheKey }, options.params);
            return this.strategy.handle(options);
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheFallbackPlugin.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheFallbackPlugin": function() { return /* binding */ PrecacheFallbackPlugin; }
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
 * response to be used when a given strategy is unable to generate a response.
 *
 * It does this by intercepting the `handlerDidError` plugin callback
 * and returning a precached response, taking the expected revision parameter
 * into account automatically.
 *
 * Unless you explicitly pass in a `PrecacheController` instance to the
 * constructor, the default instance will be used. Generally speaking, most
 * developers will end up using the default.
 *
 * @memberof module:workbox-precaching
 */
class PrecacheFallbackPlugin {
    /**
     * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
     *
     * @param {Object} config
     * @param {string} config.fallbackURL A precached URL to use as the fallback
     *     if the associated strategy can't generate a response.
     * @param {PrecacheController} [config.precacheController] An optional
     *     PrecacheController instance. If not provided, the default
     *     PrecacheController will be used.
     */
    constructor({ fallbackURL, precacheController }) {
        /**
         * @return {Promise<Response>} The precache response for the fallback URL.
         *
         * @private
         */
        this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
        this._fallbackURL = fallbackURL;
        this._precacheController = precacheController ||
            (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheRoute.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheRoute.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheRoute": function() { return /* binding */ PrecacheRoute; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-routing/Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateURLVariations.js */ "./node_modules/workbox-precaching/utils/generateURLVariations.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_4__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/





/**
 * A subclass of [Route]{@link module:workbox-routing.Route} that takes a
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * instance and uses it to match incoming requests and handle fetching
 * responses from the precache.
 *
 * @memberof module:workbox-precaching
 * @extends module:workbox-routing.Route
 */
class PrecacheRoute extends workbox_routing_Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * @param {PrecacheController} precacheController A `PrecacheController`
     * instance used to both match requests and respond to fetch events.
     * @param {Object} [options] Options to control how requests are matched
     * against the list of precached URLs.
     * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
     * check cache entries for a URLs ending with '/' to see if there is a hit when
     * appending the `directoryIndex` value.
     * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
     * array of regex's to remove search params when looking for a cache match.
     * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
     * check the cache for the URL with a `.html` added to the end of the end.
     * @param {module:workbox-precaching~urlManipulation} [options.urlManipulation]
     * This is a function that should take a URL and return an array of
     * alternative URLs that should be checked for precache matches.
     */
    constructor(precacheController, options) {
        const match = ({ request }) => {
            const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
            for (const possibleURL of (0,_utils_generateURLVariations_js__WEBPACK_IMPORTED_MODULE_3__.generateURLVariations)(request.url, options)) {
                const cacheKey = urlsToCacheKeys.get(possibleURL);
                if (cacheKey) {
                    const integrity = precacheController.getIntegrityForCacheKey(cacheKey);
                    return { cacheKey, integrity };
                }
            }
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`Precaching did not find a match for ` +
                    (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url));
            }
            return;
        };
        super(match, precacheController.strategy);
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/PrecacheStrategy.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/PrecacheStrategy.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheStrategy": function() { return /* binding */ PrecacheStrategy; }
/* harmony export */ });
/* harmony import */ var workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/copyResponse.js */ "./node_modules/workbox-core/copyResponse.js");
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-strategies/Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * A [Strategy]{@link module:workbox-strategies.Strategy} implementation
 * specifically designed to work with
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * to both cache and fetch precached assets.
 *
 * Note: an instance of this class is created automatically when creating a
 * `PrecacheController`; it's generally not necessary to create this yourself.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-precaching
 */
class PrecacheStrategy extends workbox_strategies_Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy {
    /**
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
     * of all fetch() requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
     * get the response from the network if there's a precache miss.
     */
    constructor(options = {}) {
        options.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_1__.cacheNames.getPrecacheName(options.cacheName);
        super(options);
        this._fallbackToNetwork =
            options.fallbackToNetwork === false ? false : true;
        // Redirected responses cannot be used to satisfy a navigation request, so
        // any redirected response must be "copied" rather than cloned, so the new
        // response doesn't contain the `redirected` flag. See:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
        this.plugins.push(PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const response = await handler.cacheMatch(request);
        if (response) {
            return response;
        }
        // If this is an `install` event for an entry that isn't already cached,
        // then populate the cache.
        if (handler.event && handler.event.type === 'install') {
            return await this._handleInstall(request, handler);
        }
        // Getting here means something went wrong. An entry that should have been
        // precached wasn't found in the cache.
        return await this._handleFetch(request, handler);
    }
    async _handleFetch(request, handler) {
        let response;
        const params = (handler.params || {});
        // Fall back to the network if we're configured to do so.
        if (this._fallbackToNetwork) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`The precached response for ` +
                    `${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} in ${this.cacheName} was not ` +
                    `found. Falling back to the network.`);
            }
            const integrityInManifest = params.integrity;
            const integrityInRequest = request.integrity;
            const noIntegrityConflict = !integrityInRequest || integrityInRequest === integrityInManifest;
            response = await handler.fetch(new Request(request, {
                integrity: integrityInRequest || integrityInManifest,
            }));
            // It's only "safe" to repair the cache if we're using SRI to guarantee
            // that the response matches the precache manifest's expectations,
            // and there's either a) no integrity property in the incoming request
            // or b) there is an integrity, and it matches the precache manifest.
            // See https://github.com/GoogleChrome/workbox/issues/2858
            if (integrityInManifest && noIntegrityConflict) {
                this._useDefaultCacheabilityPluginIfNeeded();
                const wasCached = await handler.cachePut(request, response.clone());
                if (true) {
                    if (wasCached) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`A response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url)} ` +
                            `was used to "repair" the precache.`);
                    }
                }
            }
        }
        else {
            // This shouldn't normally happen, but there are edge cases:
            // https://github.com/GoogleChrome/workbox/issues/1441
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('missing-precache-entry', {
                cacheName: this.cacheName,
                url: request.url,
            });
        }
        if (true) {
            const cacheKey = params.cacheKey || (await handler.getCacheKey(request, 'read'));
            // Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Precaching is responding to: ` + (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(request.url));
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(`Serving the precached url: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_2__.getFriendlyURL)(cacheKey instanceof Request ? cacheKey.url : cacheKey)}`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View request details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(request);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`View response details here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        return response;
    }
    async _handleInstall(request, handler) {
        this._useDefaultCacheabilityPluginIfNeeded();
        const response = await handler.fetch(request);
        // Make sure we defer cachePut() until after we know the response
        // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
        const wasCached = await handler.cachePut(request, response.clone());
        if (!wasCached) {
            // Throwing here will lead to the `install` handler failing, which
            // we want to do if *any* of the responses aren't safe to cache.
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_4__.WorkboxError('bad-precaching-response', {
                url: request.url,
                status: response.status,
            });
        }
        return response;
    }
    /**
     * This method is complex, as there a number of things to account for:
     *
     * The `plugins` array can be set at construction, and/or it might be added to
     * to at any time before the strategy is used.
     *
     * At the time the strategy is used (i.e. during an `install` event), there
     * needs to be at least one plugin that implements `cacheWillUpdate` in the
     * array, other than `copyRedirectedCacheableResponsesPlugin`.
     *
     * - If this method is called and there are no suitable `cacheWillUpdate`
     * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
     *
     * - If this method is called and there is exactly one `cacheWillUpdate`, then
     * we don't have to do anything (this might be a previously added
     * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
     *
     * - If this method is called and there is more than one `cacheWillUpdate`,
     * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
     * we need to remove it. (This situation is unlikely, but it could happen if
     * the strategy is used multiple times, the first without a `cacheWillUpdate`,
     * and then later on after manually adding a custom `cacheWillUpdate`.)
     *
     * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
     *
     * @private
     */
    _useDefaultCacheabilityPluginIfNeeded() {
        let defaultPluginIndex = null;
        let cacheWillUpdatePluginCount = 0;
        for (const [index, plugin] of this.plugins.entries()) {
            // Ignore the copy redirected plugin when determining what to do.
            if (plugin === PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                continue;
            }
            // Save the default plugin's index, in case it needs to be removed.
            if (plugin === PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                defaultPluginIndex = index;
            }
            if (plugin.cacheWillUpdate) {
                cacheWillUpdatePluginCount++;
            }
        }
        if (cacheWillUpdatePluginCount === 0) {
            this.plugins.push(PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
        }
        else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
            // Only remove the default plugin; multiple custom plugins are allowed.
            this.plugins.splice(defaultPluginIndex, 1);
        }
        // Nothing needs to be done if cacheWillUpdatePluginCount is 1
    }
}
PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
    async cacheWillUpdate({ response }) {
        if (!response || response.status >= 400) {
            return null;
        }
        return response;
    },
};
PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
    async cacheWillUpdate({ response }) {
        return response.redirected ? await (0,workbox_core_copyResponse_js__WEBPACK_IMPORTED_MODULE_0__.copyResponse)(response) : response;
    },
};



/***/ }),

/***/ "./node_modules/workbox-precaching/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/_version.js ***!
  \*****************************************************/
/***/ (function() {


// @ts-ignore
try {
    self['workbox:precaching:6.2.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-precaching/addPlugins.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-precaching/addPlugins.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPlugins": function() { return /* binding */ addPlugins; }
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds plugins to the precaching strategy.
 *
 * @param {Array<Object>} plugins
 *
 * @memberof module:workbox-precaching
 */
function addPlugins(plugins) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.strategy.plugins.push(...plugins);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/addRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/addRoute.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addRoute": function() { return /* binding */ addRoute; }
/* harmony export */ });
/* harmony import */ var workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-routing/registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Add a `fetch` listener to the service worker that will
 * respond to
 * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
 * with precached assets.
 *
 * Requests for assets that aren't precached, the `FetchEvent` will not be
 * responded to, allowing the event to fall through to other `fetch` event
 * listeners.
 *
 * @param {Object} [options] See
 * [PrecacheRoute options]{@link module:workbox-precaching.PrecacheRoute}.
 *
 * @memberof module:workbox-precaching
 */
function addRoute(options) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_1__.getOrCreatePrecacheController)();
    const precacheRoute = new _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_2__.PrecacheRoute(precacheController, options);
    (0,workbox_routing_registerRoute_js__WEBPACK_IMPORTED_MODULE_0__.registerRoute)(precacheRoute);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js":
/*!******************************************************************!*\
  !*** ./node_modules/workbox-precaching/cleanupOutdatedCaches.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cleanupOutdatedCaches": function() { return /* binding */ cleanupOutdatedCaches; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/deleteOutdatedCaches.js */ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Adds an `activate` event listener which will clean up incompatible
 * precaches that were created by older versions of Workbox.
 *
 * @memberof module:workbox-precaching
 */
function cleanupOutdatedCaches() {
    // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
    self.addEventListener('activate', ((event) => {
        const cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getPrecacheName();
        event.waitUntil((0,_utils_deleteOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.deleteOutdatedCaches)(cacheName).then((cachesDeleted) => {
            if (true) {
                if (cachesDeleted.length > 0) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The following out-of-date precaches were cleaned up ` +
                        `automatically:`, cachesDeleted);
                }
            }
        }));
    }));
}



/***/ }),

/***/ "./node_modules/workbox-precaching/createHandlerBoundToURL.js":
/*!********************************************************************!*\
  !*** ./node_modules/workbox-precaching/createHandlerBoundToURL.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHandlerBoundToURL": function() { return /* binding */ createHandlerBoundToURL; }
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#createHandlerBoundToURL} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call the
 * {@link PrecacheController#createHandlerBoundToURL} on that instance,
 * instead of using this function.
 *
 * @param {string} url The precached URL which will be used to lookup the
 * `Response`.
 * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
 * response from the network if there's a precache miss.
 * @return {module:workbox-routing~handlerCallback}
 *
 * @memberof module:workbox-precaching
 */
function createHandlerBoundToURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.createHandlerBoundToURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/getCacheKeyForURL.js":
/*!**************************************************************!*\
  !*** ./node_modules/workbox-precaching/getCacheKeyForURL.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCacheKeyForURL": function() { return /* binding */ getCacheKeyForURL; }
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Takes in a URL, and returns the corresponding URL that could be used to
 * lookup the entry in the precache.
 *
 * If a relative URL is provided, the location of the service worker file will
 * be used as the base.
 *
 * For precached entries without revision information, the cache key will be the
 * same as the original URL.
 *
 * For precached entries with revision information, the cache key will be the
 * original URL with the addition of a query parameter used for keeping track of
 * the revision info.
 *
 * @param {string} url The URL whose cache key to look up.
 * @return {string} The cache key that corresponds to that URL.
 *
 * @memberof module:workbox-precaching
 */
function getCacheKeyForURL(url) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.getCacheKeyForURL(url);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-precaching/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPlugins": function() { return /* reexport safe */ _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__.addPlugins; },
/* harmony export */   "addRoute": function() { return /* reexport safe */ _addRoute_js__WEBPACK_IMPORTED_MODULE_1__.addRoute; },
/* harmony export */   "cleanupOutdatedCaches": function() { return /* reexport safe */ _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__.cleanupOutdatedCaches; },
/* harmony export */   "createHandlerBoundToURL": function() { return /* reexport safe */ _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__.createHandlerBoundToURL; },
/* harmony export */   "getCacheKeyForURL": function() { return /* reexport safe */ _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__.getCacheKeyForURL; },
/* harmony export */   "matchPrecache": function() { return /* reexport safe */ _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__.matchPrecache; },
/* harmony export */   "precache": function() { return /* reexport safe */ _precache_js__WEBPACK_IMPORTED_MODULE_6__.precache; },
/* harmony export */   "precacheAndRoute": function() { return /* reexport safe */ _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__.precacheAndRoute; },
/* harmony export */   "PrecacheController": function() { return /* reexport safe */ _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__.PrecacheController; },
/* harmony export */   "PrecacheRoute": function() { return /* reexport safe */ _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__.PrecacheRoute; },
/* harmony export */   "PrecacheStrategy": function() { return /* reexport safe */ _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__.PrecacheStrategy; },
/* harmony export */   "PrecacheFallbackPlugin": function() { return /* reexport safe */ _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__.PrecacheFallbackPlugin; }
/* harmony export */ });
/* harmony import */ var _addPlugins_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addPlugins.js */ "./node_modules/workbox-precaching/addPlugins.js");
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _cleanupOutdatedCaches_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanupOutdatedCaches.js */ "./node_modules/workbox-precaching/cleanupOutdatedCaches.js");
/* harmony import */ var _createHandlerBoundToURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createHandlerBoundToURL.js */ "./node_modules/workbox-precaching/createHandlerBoundToURL.js");
/* harmony import */ var _getCacheKeyForURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getCacheKeyForURL.js */ "./node_modules/workbox-precaching/getCacheKeyForURL.js");
/* harmony import */ var _matchPrecache_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./matchPrecache.js */ "./node_modules/workbox-precaching/matchPrecache.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _precacheAndRoute_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./precacheAndRoute.js */ "./node_modules/workbox-precaching/precacheAndRoute.js");
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _PrecacheRoute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./PrecacheRoute.js */ "./node_modules/workbox-precaching/PrecacheRoute.js");
/* harmony import */ var _PrecacheStrategy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PrecacheStrategy.js */ "./node_modules/workbox-precaching/PrecacheStrategy.js");
/* harmony import */ var _PrecacheFallbackPlugin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PrecacheFallbackPlugin.js */ "./node_modules/workbox-precaching/PrecacheFallbackPlugin.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_12__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/













/**
 * Most consumers of this module will want to use the
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}
 * method to add assets to the cache and respond to network requests with these
 * cached assets.
 *
 * If you require more control over caching and routing, you can use the
 * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
 * interface.
 *
 * @module workbox-precaching
 */



/***/ }),

/***/ "./node_modules/workbox-precaching/matchPrecache.js":
/*!**********************************************************!*\
  !*** ./node_modules/workbox-precaching/matchPrecache.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchPrecache": function() { return /* binding */ matchPrecache; }
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Helper function that calls
 * {@link PrecacheController#matchPrecache} on the default
 * {@link PrecacheController} instance.
 *
 * If you are creating your own {@link PrecacheController}, then call
 * {@link PrecacheController#matchPrecache} on that instance,
 * instead of using this function.
 *
 * @param {string|Request} request The key (without revisioning parameters)
 * to look up in the precache.
 * @return {Promise<Response|undefined>}
 *
 * @memberof module:workbox-precaching
 */
function matchPrecache(request) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    return precacheController.matchPrecache(request);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precache.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-precaching/precache.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precache": function() { return /* binding */ precache; }
/* harmony export */ });
/* harmony import */ var _utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreatePrecacheController.js */ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Adds items to the precache list, removing any duplicates and
 * stores the files in the
 * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
 * worker installs.
 *
 * This method can be called multiple times.
 *
 * Please note: This method **will not** serve any of the cached files for you.
 * It only precaches files. To respond to a network request you call
 * [addRoute()]{@link module:workbox-precaching.addRoute}.
 *
 * If you have a single array of files to precache, you can just call
 * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}.
 *
 * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
 *
 * @memberof module:workbox-precaching
 */
function precache(entries) {
    const precacheController = (0,_utils_getOrCreatePrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreatePrecacheController)();
    precacheController.precache(entries);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/precacheAndRoute.js":
/*!*************************************************************!*\
  !*** ./node_modules/workbox-precaching/precacheAndRoute.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "precacheAndRoute": function() { return /* binding */ precacheAndRoute; }
/* harmony export */ });
/* harmony import */ var _addRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addRoute.js */ "./node_modules/workbox-precaching/addRoute.js");
/* harmony import */ var _precache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./precache.js */ "./node_modules/workbox-precaching/precache.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * This method will add entries to the precache list and add a route to
 * respond to fetch events.
 *
 * This is a convenience method that will call
 * [precache()]{@link module:workbox-precaching.precache} and
 * [addRoute()]{@link module:workbox-precaching.addRoute} in a single call.
 *
 * @param {Array<Object|string>} entries Array of entries to precache.
 * @param {Object} [options] See
 * [PrecacheRoute options]{@link module:workbox-precaching.PrecacheRoute}.
 *
 * @memberof module:workbox-precaching
 */
function precacheAndRoute(entries, options) {
    (0,_precache_js__WEBPACK_IMPORTED_MODULE_1__.precache)(entries);
    (0,_addRoute_js__WEBPACK_IMPORTED_MODULE_0__.addRoute)(options);
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js":
/*!*************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheCacheKeyPlugin": function() { return /* binding */ PrecacheCacheKeyPlugin; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to translate URLs into
 * the corresponding cache key, based on the current revision info.
 *
 * @private
 */
class PrecacheCacheKeyPlugin {
    constructor({ precacheController }) {
        this.cacheKeyWillBeUsed = async ({ request, params, }) => {
            // Params is type any, can't change right now.
            /* eslint-disable */
            const cacheKey = (params === null || params === void 0 ? void 0 : params.cacheKey) ||
                this._precacheController.getCacheKeyForURL(request.url);
            /* eslint-enable */
            return cacheKey
                ? new Request(cacheKey, { headers: request.headers })
                : request;
        };
        this._precacheController = precacheController;
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js":
/*!******************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrecacheInstallReportPlugin": function() { return /* binding */ PrecacheInstallReportPlugin; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A plugin, designed to be used with PrecacheController, to determine the
 * of assets that were updated (or not updated) during the install event.
 *
 * @private
 */
class PrecacheInstallReportPlugin {
    constructor() {
        this.updatedURLs = [];
        this.notUpdatedURLs = [];
        this.handlerWillStart = async ({ request, state, }) => {
            // TODO: `state` should never be undefined...
            if (state) {
                state.originalRequest = request;
            }
        };
        this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
            if (event.type === 'install') {
                if (state && state.originalRequest
                    && state.originalRequest instanceof Request) {
                    // TODO: `state` should never be undefined...
                    const url = state.originalRequest.url;
                    if (cachedResponse) {
                        this.notUpdatedURLs.push(url);
                    }
                    else {
                        this.updatedURLs.push(url);
                    }
                }
            }
            return cachedResponse;
        };
    }
}



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/createCacheKey.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/createCacheKey.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCacheKey": function() { return /* binding */ createCacheKey; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


// Name of the search parameter used to store revision info.
const REVISION_SEARCH_PARAM = '__WB_REVISION__';
/**
 * Converts a manifest entry into a versioned URL suitable for precaching.
 *
 * @param {Object|string} entry
 * @return {string} A URL with versioning info.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function createCacheKey(entry) {
    if (!entry) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If a precache manifest entry is a string, it's assumed to be a versioned
    // URL, like '/app.abcd1234.js'. Return as-is.
    if (typeof entry === 'string') {
        const urlObject = new URL(entry, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    const { revision, url } = entry;
    if (!url) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_0__.WorkboxError('add-to-cache-list-unexpected-type', { entry });
    }
    // If there's just a URL and no revision, then it's also assumed to be a
    // versioned URL.
    if (!revision) {
        const urlObject = new URL(url, location.href);
        return {
            cacheKey: urlObject.href,
            url: urlObject.href,
        };
    }
    // Otherwise, construct a properly versioned URL using the custom Workbox
    // search parameter along with the revision info.
    const cacheKeyURL = new URL(url, location.href);
    const originalURL = new URL(url, location.href);
    cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
    return {
        cacheKey: cacheKeyURL.href,
        url: originalURL.href,
    };
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js":
/*!***********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteOutdatedCaches": function() { return /* binding */ deleteOutdatedCaches; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const SUBSTRING_TO_FIND = '-precache-';
/**
 * Cleans up incompatible precaches that were created by older versions of
 * Workbox, by a service worker registered under the current scope.
 *
 * This is meant to be called as part of the `activate` event.
 *
 * This should be safe to use as long as you don't include `substringToFind`
 * (defaulting to `-precache-`) in your non-precache cache names.
 *
 * @param {string} currentPrecacheName The cache name currently in use for
 * precaching. This cache won't be deleted.
 * @param {string} [substringToFind='-precache-'] Cache names which include this
 * substring will be deleted (excluding `currentPrecacheName`).
 * @return {Array<string>} A list of all the cache names that were deleted.
 *
 * @private
 * @memberof module:workbox-precaching
 */
const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
    const cacheNames = await self.caches.keys();
    const cacheNamesToDelete = cacheNames.filter((cacheName) => {
        return cacheName.includes(substringToFind) &&
            cacheName.includes(self.registration.scope) &&
            cacheName !== currentPrecacheName;
    });
    await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
    return cacheNamesToDelete;
};



/***/ }),

/***/ "./node_modules/workbox-precaching/utils/generateURLVariations.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/generateURLVariations.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateURLVariations": function() { return /* binding */ generateURLVariations; }
/* harmony export */ });
/* harmony import */ var _removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./removeIgnoredSearchParams.js */ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Generator function that yields possible variations on the original URL to
 * check, one at a time.
 *
 * @param {string} url
 * @param {Object} options
 *
 * @private
 * @memberof module:workbox-precaching
 */
function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
    const urlObject = new URL(url, location.href);
    urlObject.hash = '';
    yield urlObject.href;
    const urlWithoutIgnoredParams = (0,_removeIgnoredSearchParams_js__WEBPACK_IMPORTED_MODULE_0__.removeIgnoredSearchParams)(urlObject, ignoreURLParametersMatching);
    yield urlWithoutIgnoredParams.href;
    if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
        const directoryURL = new URL(urlWithoutIgnoredParams.href);
        directoryURL.pathname += directoryIndex;
        yield directoryURL.href;
    }
    if (cleanURLs) {
        const cleanURL = new URL(urlWithoutIgnoredParams.href);
        cleanURL.pathname += '.html';
        yield cleanURL.href;
    }
    if (urlManipulation) {
        const additionalURLs = urlManipulation({ url: urlObject });
        for (const urlToAttempt of additionalURLs) {
            yield urlToAttempt.href;
        }
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js":
/*!********************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreatePrecacheController": function() { return /* binding */ getOrCreatePrecacheController; }
/* harmony export */ });
/* harmony import */ var _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PrecacheController.js */ "./node_modules/workbox-precaching/PrecacheController.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let precacheController;
/**
 * @return {PrecacheController}
 * @private
 */
const getOrCreatePrecacheController = () => {
    if (!precacheController) {
        precacheController = new _PrecacheController_js__WEBPACK_IMPORTED_MODULE_0__.PrecacheController();
    }
    return precacheController;
};


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printCleanupDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printCleanupDetails.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printCleanupDetails": function() { return /* binding */ printCleanupDetails; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} deletedURLs
 *
 * @private
 */
const logGroup = (groupTitle, deletedURLs) => {
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of deletedURLs) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
};
/**
 * @param {Array<string>} deletedURLs
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printCleanupDetails(deletedURLs) {
    const deletionCount = deletedURLs.length;
    if (deletionCount > 0) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`During precaching cleanup, ` +
            `${deletionCount} cached ` +
            `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
        logGroup('Deleted Cache Requests', deletedURLs);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/printInstallDetails.js":
/*!**********************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/printInstallDetails.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "printInstallDetails": function() { return /* binding */ printInstallDetails; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {string} groupTitle
 * @param {Array<string>} urls
 *
 * @private
 */
function _nestedGroup(groupTitle, urls) {
    if (urls.length === 0) {
        return;
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(groupTitle);
    for (const url of urls) {
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(url);
    }
    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
}
/**
 * @param {Array<string>} urlsToPrecache
 * @param {Array<string>} urlsAlreadyPrecached
 *
 * @private
 * @memberof module:workbox-precaching
 */
function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
    const precachedCount = urlsToPrecache.length;
    const alreadyPrecachedCount = urlsAlreadyPrecached.length;
    if (precachedCount || alreadyPrecachedCount) {
        let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
        if (alreadyPrecachedCount > 0) {
            message += ` ${alreadyPrecachedCount} ` +
                `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
        }
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(message);
        _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
        _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
    }
}


/***/ }),

/***/ "./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js":
/*!****************************************************************************!*\
  !*** ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeIgnoredSearchParams": function() { return /* binding */ removeIgnoredSearchParams; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-precaching/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Removes any URL search parameters that should be ignored.
 *
 * @param {URL} urlObject The original URL.
 * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
 * each search parameter name. Matches mean that the search parameter should be
 * ignored.
 * @return {URL} The URL with any ignored search parameters removed.
 *
 * @private
 * @memberof module:workbox-precaching
 */
function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
    // Convert the iterable into an array at the start of the loop to make sure
    // deletion doesn't mess up iteration.
    for (const paramName of [...urlObject.searchParams.keys()]) {
        if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
            urlObject.searchParams.delete(paramName);
        }
    }
    return urlObject;
}


/***/ }),

/***/ "./node_modules/workbox-routing/NavigationRoute.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/NavigationRoute.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationRoute": function() { return /* binding */ NavigationRoute; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * NavigationRoute makes it easy to create a
 * [Route]{@link module:workbox-routing.Route} that matches for browser
 * [navigation requests]{@link https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests}.
 *
 * It will only match incoming Requests whose
 * [`mode`]{@link https://fetch.spec.whatwg.org/#concept-request-mode}
 * is set to `navigate`.
 *
 * You can optionally only apply this route to a subset of navigation requests
 * by using one or both of the `denylist` and `allowlist` parameters.
 *
 * @memberof module:workbox-routing
 * @extends module:workbox-routing.Route
 */
class NavigationRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If both `denylist` and `allowlist` are provided, the `denylist` will
     * take precedence and the request will not match this route.
     *
     * The regular expressions in `allowlist` and `denylist`
     * are matched against the concatenated
     * [`pathname`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname}
     * and [`search`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search}
     * portions of the requested URL.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {Object} options
     * @param {Array<RegExp>} [options.denylist] If any of these patterns match,
     * the route will not handle the request (even if a allowlist RegExp matches).
     * @param {Array<RegExp>} [options.allowlist=[/./]] If any of these patterns
     * match the URL's pathname and search parameter, the route will handle the
     * request (assuming the denylist doesn't match).
     */
    constructor(handler, { allowlist = [/./], denylist = [] } = {}) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArrayOfClass(allowlist, RegExp, {
                moduleName: 'workbox-routing',
                className: 'NavigationRoute',
                funcName: 'constructor',
                paramName: 'options.allowlist',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isArrayOfClass(denylist, RegExp, {
                moduleName: 'workbox-routing',
                className: 'NavigationRoute',
                funcName: 'constructor',
                paramName: 'options.denylist',
            });
        }
        super((options) => this._match(options), handler);
        this._allowlist = allowlist;
        this._denylist = denylist;
    }
    /**
     * Routes match handler.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {Request} options.request
     * @return {boolean}
     *
     * @private
     */
    _match({ url, request }) {
        if (request && request.mode !== 'navigate') {
            return false;
        }
        const pathnameAndSearch = url.pathname + url.search;
        for (const regExp of this._denylist) {
            if (regExp.test(pathnameAndSearch)) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The navigation route ${pathnameAndSearch} is not ` +
                        `being used, since the URL matches this denylist pattern: ` +
                        `${regExp.toString()}`);
                }
                return false;
            }
        }
        if (this._allowlist.some((regExp) => regExp.test(pathnameAndSearch))) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The navigation route ${pathnameAndSearch} ` +
                    `is being used.`);
            }
            return true;
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`The navigation route ${pathnameAndSearch} is not ` +
                `being used, since the URL being navigated to doesn't ` +
                `match the allowlist.`);
        }
        return false;
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/RegExpRoute.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-routing/RegExpRoute.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegExpRoute": function() { return /* binding */ RegExpRoute; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * RegExpRoute makes it easy to create a regular expression based
 * [Route]{@link module:workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * [See the module docs for info.]{@link https://developers.google.com/web/tools/workbox/modules/workbox-routing}
 *
 * @memberof module:workbox-routing
 * @extends module:workbox-routing.Route
 */
class RegExpRoute extends _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route {
    /**
     * If the regular expression contains
     * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
     * the captured values will be passed to the
     * [handler's]{@link module:workbox-routing~handlerCallback} `params`
     * argument.
     *
     * @param {RegExp} regExp The regular expression to match against URLs.
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(regExp, handler, method) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(regExp, RegExp, {
                moduleName: 'workbox-routing',
                className: 'RegExpRoute',
                funcName: 'constructor',
                paramName: 'pattern',
            });
        }
        const match = ({ url }) => {
            const result = regExp.exec(url.href);
            // Return immediately if there's no match.
            if (!result) {
                return;
            }
            // Require that the match start at the first character in the URL string
            // if it's a cross-origin request.
            // See https://github.com/GoogleChrome/workbox/issues/281 for the context
            // behind this behavior.
            if ((url.origin !== location.origin) && (result.index !== 0)) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.debug(`The regular expression '${regExp.toString()}' only partially matched ` +
                        `against the cross-origin URL '${url.toString()}'. RegExpRoute's will only ` +
                        `handle cross-origin requests if they match the entire URL.`);
                }
                return;
            }
            // If the route matches, but there aren't any capture groups defined, then
            // this will return [], which is truthy and therefore sufficient to
            // indicate a match.
            // If there are capture groups, then it will return their values.
            return result.slice(1);
        };
        super(match, handler, method);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Route.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-routing/Route.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Route": function() { return /* binding */ Route; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof module:workbox-routing
 */
class Route {
    /**
     * Constructor for Route class.
     *
     * @param {module:workbox-routing~matchCallback} match
     * A callback function that determines whether the route matches a given
     * `fetch` event by returning a non-falsy value.
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response.
     * @param {string} [method='GET'] The HTTP method to match the Route
     * against.
     */
    constructor(match, handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.defaultMethod) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(match, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'match',
            });
            if (method) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isOneOf(method, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validMethods, { paramName: 'method' });
            }
        }
        // These values are referenced directly by Router so cannot be
        // altered by minificaton.
        this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
        this.match = match;
        this.method = method;
    }
    /**
     *
     * @param {module:workbox-routing-handlerCallback} handler A callback
     * function that returns a Promise resolving to a Response
     */
    setCatchHandler(handler) {
        this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__.normalizeHandler)(handler);
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/Router.js":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/Router.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Router": function() { return /* binding */ Router; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/constants.js */ "./node_modules/workbox-routing/utils/constants.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/normalizeHandler.js */ "./node_modules/workbox-routing/utils/normalizeHandler.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a FetchEvent through one or more
 * [Routes]{@link module:workbox-routing.Route} responding  with a Request if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof module:workbox-routing
 */
class Router {
    /**
     * Initializes a new Router.
     */
    constructor() {
        this._routes = new Map();
        this._defaultHandlerMap = new Map();
    }
    /**
     * @return {Map<string, Array<module:workbox-routing.Route>>} routes A `Map` of HTTP
     * method name ('GET', etc.) to an array of all the corresponding `Route`
     * instances that are registered.
     */
    get routes() {
        return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */
    addFetchListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('fetch', ((event) => {
            const { request } = event;
            const responsePromise = this.handleRequest({ request, event });
            if (responsePromise) {
                event.respondWith(responsePromise);
            }
        }));
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */
    addCacheListener() {
        // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
        self.addEventListener('message', ((event) => {
            // event.data is type 'any'
            if (event.data && event.data.type === 'CACHE_URLS') { // eslint-disable-line
                const { payload } = event.data; // eslint-disable-line
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Caching URLs from the window`, payload.urlsToCache);
                }
                const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                    if (typeof entry === 'string') {
                        entry = [entry];
                    }
                    const request = new Request(...entry);
                    return this.handleRequest({ request, event });
                    // TODO(philipwalton): TypeScript errors without this typecast for
                    // some reason (probably a bug). The real type here should work but
                    // doesn't: `Array<Promise<Response> | undefined>`.
                })); // TypeScript
                event.waitUntil(requestPromises);
                // If a MessageChannel was used, reply to the message on success.
                if (event.ports && event.ports[0]) {
                    void requestPromises.then(() => event.ports[0].postMessage(true));
                }
            }
        }));
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */
    handleRequest({ request, event }) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'handleRequest',
                paramName: 'options.request',
            });
        }
        const url = new URL(request.url, location.href);
        if (!url.protocol.startsWith('http')) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`Workbox Router only supports URLs that start with 'http'.`);
            }
            return;
        }
        const sameOrigin = url.origin === location.origin;
        const { params, route } = this.findMatchingRoute({
            event,
            request,
            sameOrigin,
            url,
        });
        let handler = route && route.handler;
        const debugMessages = [];
        if (true) {
            if (handler) {
                debugMessages.push([
                    `Found a route to handle this request:`, route,
                ]);
                if (params) {
                    debugMessages.push([
                        `Passing the following params to the route's handler:`, params,
                    ]);
                }
            }
        }
        // If we don't have a handler because there was no matching route, then
        // fall back to defaultHandler if that's defined.
        const method = request.method;
        if (!handler && this._defaultHandlerMap.has(method)) {
            if (true) {
                debugMessages.push(`Failed to find a matching route. Falling ` +
                    `back to the default handler for ${method}.`);
            }
            handler = this._defaultHandlerMap.get(method);
        }
        if (!handler) {
            if (true) {
                // No handler so Workbox will do nothing. If logs is set of debug
                // i.e. verbose, we should print out this information.
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.debug(`No route found for: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            }
            return;
        }
        if (true) {
            // We have a handler, meaning Workbox is going to handle the route.
            // print the routing details to the console.
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Router is responding to: ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}`);
            debugMessages.forEach((msg) => {
                if (Array.isArray(msg)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(...msg);
                }
                else {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.log(msg);
                }
            });
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
        }
        // Wrap in try and catch in case the handle method throws a synchronous
        // error. It should still callback to the catch handler.
        let responsePromise;
        try {
            responsePromise = handler.handle({ url, request, event, params });
        }
        catch (err) {
            responsePromise = Promise.reject(err);
        }
        // Get route's catch handler, if it exists
        const catchHandler = route && route.catchHandler;
        if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
            responsePromise = responsePromise.catch(async (err) => {
                // If there's a route catch handler, process that first
                if (catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to route's Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    try {
                        return await catchHandler.handle({ url, request, event, params });
                    }
                    catch (catchErr) {
                        if (catchErr instanceof Error) {
                            err = catchErr;
                        }
                    }
                }
                if (this._catchHandler) {
                    if (true) {
                        // Still include URL here as it will be async from the console group
                        // and may not make sense without the URL
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupCollapsed(`Error thrown when responding to: ` +
                            ` ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}. Falling back to global Catch Handler.`);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(`Error thrown by:`, route);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.error(err);
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.groupEnd();
                    }
                    return this._catchHandler.handle({ url, request, event });
                }
                throw err;
            });
        }
        return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */
    findMatchingRoute({ url, sameOrigin, request, event }) {
        const routes = this._routes.get(request.method) || [];
        for (const route of routes) {
            let params;
            // route.match returns type any, not possible to change right now.
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const matchResult = route.match({ url, sameOrigin, request, event });
            if (matchResult) {
                if (true) {
                    // Warn developers that using an async matchCallback is almost always
                    // not the right thing to do.
                    if (matchResult instanceof Promise) {
                        workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__.logger.warn(`While routing ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(url)}, an async ` +
                            `matchCallback function was used. Please convert the ` +
                            `following route to use a synchronous matchCallback function:`, route);
                    }
                }
                // See https://github.com/GoogleChrome/workbox/issues/2079
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                params = matchResult;
                if (Array.isArray(params) && params.length === 0) {
                    // Instead of passing an empty array in as params, use undefined.
                    params = undefined;
                }
                else if ((matchResult.constructor === Object && // eslint-disable-line
                    Object.keys(matchResult).length === 0)) {
                    // Instead of passing an empty object in as params, use undefined.
                    params = undefined;
                }
                else if (typeof matchResult === 'boolean') {
                    // For the boolean value true (rather than just something truth-y),
                    // don't set params.
                    // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                    params = undefined;
                }
                // Return early if have a match.
                return { route, params };
            }
        }
        // If no match was found above, return and empty object.
        return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */
    setDefaultHandler(handler, method = _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.defaultMethod) {
        this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */
    setCatchHandler(handler) {
        this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__.normalizeHandler)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to register.
     */
    registerRoute(route) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route, 'match', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.handler, 'object', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(route.handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.handler',
            });
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(route.method, 'string', {
                moduleName: 'workbox-routing',
                className: 'Router',
                funcName: 'registerRoute',
                paramName: 'route.method',
            });
        }
        if (!this._routes.has(route.method)) {
            this._routes.set(route.method, []);
        }
        // Give precedence to all of the earlier routes by adding this additional
        // route to the end of the array.
        this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to unregister.
     */
    unregisterRoute(route) {
        if (!this._routes.has(route.method)) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-but-not-found-with-method', {
                method: route.method,
            });
        }
        const routeIndex = this._routes.get(route.method).indexOf(route);
        if (routeIndex > -1) {
            this._routes.get(route.method).splice(routeIndex, 1);
        }
        else {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__.WorkboxError('unregister-route-route-not-registered');
        }
    }
}



/***/ }),

/***/ "./node_modules/workbox-routing/_version.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-routing/_version.js ***!
  \**************************************************/
/***/ (function() {


// @ts-ignore
try {
    self['workbox:routing:6.2.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-routing/index.js":
/*!***********************************************!*\
  !*** ./node_modules/workbox-routing/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationRoute": function() { return /* reexport safe */ _NavigationRoute_js__WEBPACK_IMPORTED_MODULE_0__.NavigationRoute; },
/* harmony export */   "RegExpRoute": function() { return /* reexport safe */ _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_1__.RegExpRoute; },
/* harmony export */   "registerRoute": function() { return /* reexport safe */ _registerRoute_js__WEBPACK_IMPORTED_MODULE_2__.registerRoute; },
/* harmony export */   "Route": function() { return /* reexport safe */ _Route_js__WEBPACK_IMPORTED_MODULE_3__.Route; },
/* harmony export */   "Router": function() { return /* reexport safe */ _Router_js__WEBPACK_IMPORTED_MODULE_4__.Router; },
/* harmony export */   "setCatchHandler": function() { return /* reexport safe */ _setCatchHandler_js__WEBPACK_IMPORTED_MODULE_5__.setCatchHandler; },
/* harmony export */   "setDefaultHandler": function() { return /* reexport safe */ _setDefaultHandler_js__WEBPACK_IMPORTED_MODULE_6__.setDefaultHandler; }
/* harmony export */ });
/* harmony import */ var _NavigationRoute_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigationRoute.js */ "./node_modules/workbox-routing/NavigationRoute.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _registerRoute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registerRoute.js */ "./node_modules/workbox-routing/registerRoute.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Router.js */ "./node_modules/workbox-routing/Router.js");
/* harmony import */ var _setCatchHandler_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setCatchHandler.js */ "./node_modules/workbox-routing/setCatchHandler.js");
/* harmony import */ var _setDefaultHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setDefaultHandler.js */ "./node_modules/workbox-routing/setDefaultHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_7__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * @module workbox-routing
 */



/***/ }),

/***/ "./node_modules/workbox-routing/registerRoute.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-routing/registerRoute.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerRoute": function() { return /* binding */ registerRoute; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route.js */ "./node_modules/workbox-routing/Route.js");
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExpRoute.js */ "./node_modules/workbox-routing/RegExpRoute.js");
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call [registerRoute()]{@link module:workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|module:workbox-routing.Route~matchCallback|module:workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {module:workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {module:workbox-routing.Route} The generated `Route`(Useful for
 * unregistering).
 *
 * @memberof module:workbox-routing
 */
function registerRoute(capture, handler, method) {
    let route;
    if (typeof capture === 'string') {
        const captureUrl = new URL(capture, location.href);
        if (true) {
            if (!(capture.startsWith('/') || capture.startsWith('http'))) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('invalid-string', {
                    moduleName: 'workbox-routing',
                    funcName: 'registerRoute',
                    paramName: 'capture',
                });
            }
            // We want to check if Express-style wildcards are in the pathname only.
            // TODO: Remove this log message in v4.
            const valueToCheck = capture.startsWith('http') ?
                captureUrl.pathname : capture;
            // See https://github.com/pillarjs/path-to-regexp#parameters
            const wildcards = '[*:?+]';
            if ((new RegExp(`${wildcards}`)).exec(valueToCheck)) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`The '$capture' parameter contains an Express-style wildcard ` +
                    `character (${wildcards}). Strings are now always interpreted as ` +
                    `exact matches; use a RegExp for partial or wildcard matches.`);
            }
        }
        const matchCallback = ({ url }) => {
            if (true) {
                if ((url.pathname === captureUrl.pathname) &&
                    (url.origin !== captureUrl.origin)) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.debug(`${capture} only partially matches the cross-origin URL ` +
                        `${url.toString()}. This route will only handle cross-origin requests ` +
                        `if they match the entire URL.`);
                }
            }
            return url.href === captureUrl.href;
        };
        // If `capture` is a string then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(matchCallback, handler, method);
    }
    else if (capture instanceof RegExp) {
        // If `capture` is a `RegExp` then `handler` and `method` must be present.
        route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__.RegExpRoute(capture, handler, method);
    }
    else if (typeof capture === 'function') {
        // If `capture` is a function then `handler` and `method` must be present.
        route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route(capture, handler, method);
    }
    else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__.Route) {
        route = capture;
    }
    else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('unsupported-route-type', {
            moduleName: 'workbox-routing',
            funcName: 'registerRoute',
            paramName: 'capture',
        });
    }
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__.getOrCreateDefaultRouter)();
    defaultRouter.registerRoute(route);
    return route;
}



/***/ }),

/***/ "./node_modules/workbox-routing/setCatchHandler.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/setCatchHandler.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCatchHandler": function() { return /* binding */ setCatchHandler; }
/* harmony export */ });
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * If a Route throws an error while handling a request, this `handler`
 * will be called and given a chance to provide a response.
 *
 * @param {module:workbox-routing~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 *
 * @memberof module:workbox-routing
 */
function setCatchHandler(handler) {
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreateDefaultRouter)();
    defaultRouter.setCatchHandler(handler);
}



/***/ }),

/***/ "./node_modules/workbox-routing/setDefaultHandler.js":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-routing/setDefaultHandler.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setDefaultHandler": function() { return /* binding */ setDefaultHandler; }
/* harmony export */ });
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/getOrCreateDefaultRouter.js */ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Define a default `handler` that's called when no routes explicitly
 * match the incoming request.
 *
 * Without a default handler, unmatched requests will go against the
 * network as if there were no service worker present.
 *
 * @param {module:workbox-routing~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 *
 * @memberof module:workbox-routing
 */
function setDefaultHandler(handler) {
    const defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_0__.getOrCreateDefaultRouter)();
    defaultRouter.setDefaultHandler(handler);
}



/***/ }),

/***/ "./node_modules/workbox-routing/utils/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-routing/utils/constants.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultMethod": function() { return /* binding */ defaultMethod; },
/* harmony export */   "validMethods": function() { return /* binding */ validMethods; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */
const defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */
const validMethods = [
    'DELETE',
    'GET',
    'HEAD',
    'PATCH',
    'POST',
    'PUT',
];


/***/ }),

/***/ "./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js":
/*!************************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getOrCreateDefaultRouter": function() { return /* binding */ getOrCreateDefaultRouter; }
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Router.js */ "./node_modules/workbox-routing/Router.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


let defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */
const getOrCreateDefaultRouter = () => {
    if (!defaultRouter) {
        defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__.Router();
        // The helpers that use the default Router assume these listeners exist.
        defaultRouter.addFetchListener();
        defaultRouter.addCacheListener();
    }
    return defaultRouter;
};


/***/ }),

/***/ "./node_modules/workbox-routing/utils/normalizeHandler.js":
/*!****************************************************************!*\
  !*** ./node_modules/workbox-routing/utils/normalizeHandler.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeHandler": function() { return /* binding */ normalizeHandler; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-routing/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */
const normalizeHandler = (handler) => {
    if (handler && typeof handler === 'object') {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.hasMethod(handler, 'handle', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return handler;
    }
    else {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(handler, 'function', {
                moduleName: 'workbox-routing',
                className: 'Route',
                funcName: 'constructor',
                paramName: 'handler',
            });
        }
        return { handle: handler };
    }
};


/***/ }),

/***/ "./node_modules/workbox-strategies/CacheFirst.js":
/*!*******************************************************!*\
  !*** ./node_modules/workbox-strategies/CacheFirst.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheFirst": function() { return /* binding */ CacheFirst; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An implementation of a [cache-first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network}
 * request strategy.
 *
 * A cache first strategy is useful for assets that have been revisioned,
 * such as URLs like `/styles/example.a8f5f1.css`, since they
 * can be cached for long periods of time.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */
class CacheFirst extends _Strategy_js__WEBPACK_IMPORTED_MODULE_3__.Strategy {
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const logs = [];
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: this.constructor.name,
                funcName: 'makeRequest',
                paramName: 'request',
            });
        }
        let response = await handler.cacheMatch(request);
        let error = undefined;
        if (!response) {
            if (true) {
                logs.push(`No response found in the '${this.cacheName}' cache. ` +
                    `Will respond with a network request.`);
            }
            try {
                response = await handler.fetchAndCachePut(request);
            }
            catch (err) {
                if (err instanceof Error) {
                    error = err;
                }
            }
            if (true) {
                if (response) {
                    logs.push(`Got response from network.`);
                }
                else {
                    logs.push(`Unable to get a response from the network.`);
                }
            }
        }
        else {
            if (true) {
                logs.push(`Found a cached response in the '${this.cacheName}' cache.`);
            }
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_4__.messages.strategyStart(this.constructor.name, request));
            for (const log of logs) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(log);
            }
            _utils_messages_js__WEBPACK_IMPORTED_MODULE_4__.messages.printFinalResponse(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('no-response', { url: request.url, error });
        }
        return response;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/CacheOnly.js":
/*!******************************************************!*\
  !*** ./node_modules/workbox-strategies/CacheOnly.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheOnly": function() { return /* binding */ CacheOnly; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An implementation of a
 * [cache-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-only}
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
 *
 * If there is no cache match, this will throw a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */
class CacheOnly extends _Strategy_js__WEBPACK_IMPORTED_MODULE_3__.Strategy {
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: this.constructor.name,
                funcName: 'makeRequest',
                paramName: 'request',
            });
        }
        const response = await handler.cacheMatch(request);
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_4__.messages.strategyStart(this.constructor.name, request));
            if (response) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`Found a cached response in the '${this.cacheName}' ` +
                    `cache.`);
                _utils_messages_js__WEBPACK_IMPORTED_MODULE_4__.messages.printFinalResponse(response);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`No response found in the '${this.cacheName}' cache.`);
            }
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('no-response', { url: request.url });
        }
        return response;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/NetworkFirst.js":
/*!*********************************************************!*\
  !*** ./node_modules/workbox-strategies/NetworkFirst.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkFirst": function() { return /* binding */ NetworkFirst; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/cacheOkAndOpaquePlugin.js */ "./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [network first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-falling-back-to-cache}
 * request strategy.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
 * Opaque responses are are cross-origin requests where the response doesn't
 * support [CORS]{@link https://enable-cors.org/}.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */
class NetworkFirst extends _Strategy_js__WEBPACK_IMPORTED_MODULE_4__.Strategy {
    /**
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     * @param {number} [options.networkTimeoutSeconds] If set, any network requests
     * that fail to respond within the timeout will fallback to the cache.
     *
     * This option can be used to combat
     * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
     * scenarios.
     */
    constructor(options = {}) {
        super(options);
        // If this instance contains no plugins with a 'cacheWillUpdate' callback,
        // prepend the `cacheOkAndOpaquePlugin` plugin to the plugins list.
        if (!this.plugins.some((p) => 'cacheWillUpdate' in p)) {
            this.plugins.unshift(_plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_3__.cacheOkAndOpaquePlugin);
        }
        this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
        if (true) {
            if (this._networkTimeoutSeconds) {
                workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isType(this._networkTimeoutSeconds, 'number', {
                    moduleName: 'workbox-strategies',
                    className: this.constructor.name,
                    funcName: 'constructor',
                    paramName: 'networkTimeoutSeconds',
                });
            }
        }
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const logs = [];
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: this.constructor.name,
                funcName: 'handle',
                paramName: 'makeRequest',
            });
        }
        const promises = [];
        let timeoutId;
        if (this._networkTimeoutSeconds) {
            const { id, promise } = this._getTimeoutPromise({ request, logs, handler });
            timeoutId = id;
            promises.push(promise);
        }
        const networkPromise = this._getNetworkPromise({ timeoutId, request, logs, handler });
        promises.push(networkPromise);
        const response = await handler.waitUntil((async () => {
            // Promise.race() will resolve as soon as the first promise resolves.
            return await handler.waitUntil(Promise.race(promises)) ||
                // If Promise.race() resolved with null, it might be due to a network
                // timeout + a cache miss. If that were to happen, we'd rather wait until
                // the networkPromise resolves instead of returning null.
                // Note that it's fine to await an already-resolved promise, so we don't
                // have to check to see if it's still "in flight".
                await networkPromise;
        })());
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.strategyStart(this.constructor.name, request));
            for (const log of logs) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(log);
            }
            _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.printFinalResponse(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('no-response', { url: request.url });
        }
        return response;
    }
    /**
     * @param {Object} options
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs array
     * @param {Event} options.event
     * @return {Promise<Response>}
     *
     * @private
     */
    _getTimeoutPromise({ request, logs, handler }) {
        let timeoutId;
        const timeoutPromise = new Promise((resolve) => {
            const onNetworkTimeout = async () => {
                if (true) {
                    logs.push(`Timing out the network response at ` +
                        `${this._networkTimeoutSeconds} seconds.`);
                }
                resolve(await handler.cacheMatch(request));
            };
            timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1000);
        });
        return {
            promise: timeoutPromise,
            id: timeoutId,
        };
    }
    /**
     * @param {Object} options
     * @param {number|undefined} options.timeoutId
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs Array.
     * @param {Event} options.event
     * @return {Promise<Response>}
     *
     * @private
     */
    async _getNetworkPromise({ timeoutId, request, logs, handler }) {
        let error;
        let response;
        try {
            response = await handler.fetchAndCachePut(request);
        }
        catch (fetchError) {
            if (fetchError instanceof Error) {
                error = fetchError;
            }
        }
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        if (true) {
            if (response) {
                logs.push(`Got response from network.`);
            }
            else {
                logs.push(`Unable to get a response from the network. Will respond ` +
                    `with a cached response.`);
            }
        }
        if (error || !response) {
            response = await handler.cacheMatch(request);
            if (true) {
                if (response) {
                    logs.push(`Found a cached response in the '${this.cacheName}'` +
                        ` cache.`);
                }
                else {
                    logs.push(`No response found in the '${this.cacheName}' cache.`);
                }
            }
        }
        return response;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/NetworkOnly.js":
/*!********************************************************!*\
  !*** ./node_modules/workbox-strategies/NetworkOnly.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkOnly": function() { return /* binding */ NetworkOnly; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [network-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-only}
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
 *
 * If the network request fails, this will throw a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */
class NetworkOnly extends _Strategy_js__WEBPACK_IMPORTED_MODULE_4__.Strategy {
    /**
     * @param {Object} [options]
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {number} [options.networkTimeoutSeconds] If set, any network requests
     * that fail to respond within the timeout will result in a network error.
     */
    constructor(options = {}) {
        super(options);
        this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: this.constructor.name,
                funcName: '_handle',
                paramName: 'request',
            });
        }
        let error = undefined;
        let response;
        try {
            const promises = [handler.fetch(request)];
            if (this._networkTimeoutSeconds) {
                const timeoutPromise = (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_2__.timeout)(this._networkTimeoutSeconds * 1000);
                promises.push(timeoutPromise);
            }
            response = await Promise.race(promises);
            if (!response) {
                throw new Error(`Timed out the network response after ` +
                    `${this._networkTimeoutSeconds} seconds.`);
            }
        }
        catch (err) {
            if (err instanceof Error) {
                error = err;
            }
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.strategyStart(this.constructor.name, request));
            if (response) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`Got response from network.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(`Unable to get a response from the network.`);
            }
            _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.printFinalResponse(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_3__.WorkboxError('no-response', { url: request.url, error });
        }
        return response;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/StaleWhileRevalidate.js":
/*!*****************************************************************!*\
  !*** ./node_modules/workbox-strategies/StaleWhileRevalidate.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StaleWhileRevalidate": function() { return /* binding */ StaleWhileRevalidate; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/cacheOkAndOpaquePlugin.js */ "./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/messages.js */ "./node_modules/workbox-strategies/utils/messages.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [stale-while-revalidate]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#stale-while-revalidate}
 * request strategy.
 *
 * Resources are requested from both the cache and the network in parallel.
 * The strategy will respond with the cached version if available, otherwise
 * wait for the network response. The cache is updated with the network response
 * with each successful request.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
 * Opaque responses are cross-origin requests where the response doesn't
 * support [CORS]{@link https://enable-cors.org/}.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */
class StaleWhileRevalidate extends _Strategy_js__WEBPACK_IMPORTED_MODULE_4__.Strategy {
    /**
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
     */
    constructor(options = {}) {
        super(options);
        // If this instance contains no plugins with a 'cacheWillUpdate' callback,
        // prepend the `cacheOkAndOpaquePlugin` plugin to the plugins list.
        if (!this.plugins.some((p) => 'cacheWillUpdate' in p)) {
            this.plugins.unshift(_plugins_cacheOkAndOpaquePlugin_js__WEBPACK_IMPORTED_MODULE_3__.cacheOkAndOpaquePlugin);
        }
    }
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    async _handle(request, handler) {
        const logs = [];
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(request, Request, {
                moduleName: 'workbox-strategies',
                className: this.constructor.name,
                funcName: 'handle',
                paramName: 'request',
            });
        }
        const fetchAndCachePromise = handler
            .fetchAndCachePut(request)
            .catch(() => {
            // Swallow this error because a 'no-response' error will be thrown in
            // main handler return flow. This will be in the `waitUntil()` flow.
        });
        let response = await handler.cacheMatch(request);
        let error;
        if (response) {
            if (true) {
                logs.push(`Found a cached response in the '${this.cacheName}'` +
                    ` cache. Will update with the network response in the background.`);
            }
        }
        else {
            if (true) {
                logs.push(`No response found in the '${this.cacheName}' cache. ` +
                    `Will wait for the network response.`);
            }
            try {
                // NOTE(philipwalton): Really annoying that we have to type cast here.
                // https://github.com/microsoft/TypeScript/issues/20006
                response = await fetchAndCachePromise;
            }
            catch (err) {
                if (err instanceof Error) {
                    error = err;
                }
            }
        }
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupCollapsed(_utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.strategyStart(this.constructor.name, request));
            for (const log of logs) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.log(log);
            }
            _utils_messages_js__WEBPACK_IMPORTED_MODULE_5__.messages.printFinalResponse(response);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__.logger.groupEnd();
        }
        if (!response) {
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_2__.WorkboxError('no-response', { url: request.url, error });
        }
        return response;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/Strategy.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/Strategy.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Strategy": function() { return /* binding */ Strategy; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/cacheNames.js */ "./node_modules/workbox-core/_private/cacheNames.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof module:workbox-strategies
 */
class Strategy {
    /**
     * Creates a new instance of the strategy and sets all documented option
     * properties as public instance properties.
     *
     * Note: if a custom strategy class extends the base Strategy class and does
     * not need more than these properties, it does not need to define its own
     * constructor.
     *
     * @param {Object} [options]
     * @param {string} [options.cacheName] Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * to use in conjunction with this caching strategy.
     * @param {Object} [options.fetchOptions] Values passed along to the
     * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
     * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
     * `fetch()` requests made by this strategy.
     * @param {Object} [options.matchOptions] The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     */
    constructor(options = {}) {
        /**
         * Cache name to store and retrieve
         * requests. Defaults to the cache names provided by
         * [workbox-core]{@link module:workbox-core.cacheNames}.
         *
         * @type {string}
         */
        this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__.cacheNames.getRuntimeName(options.cacheName);
        /**
         * The list
         * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
         * used by this strategy.
         *
         * @type {Array<Object>}
         */
        this.plugins = options.plugins || [];
        /**
         * Values passed along to the
         * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
         * of all fetch() requests made by this strategy.
         *
         * @type {Object}
         */
        this.fetchOptions = options.fetchOptions;
        /**
         * The
         * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
         * for any `cache.match()` or `cache.put()` calls made by this strategy.
         *
         * @type {Object}
         */
        this.matchOptions = options.matchOptions;
    }
    /**
     * Perform a request strategy and returns a `Promise` that will resolve with
     * a `Response`, invoking all relevant plugin callbacks.
     *
     * When a strategy instance is registered with a Workbox
     * [route]{@link module:workbox-routing.Route}, this method is automatically
     * called when the route matches.
     *
     * Alternatively, this method can be used in a standalone `FetchEvent`
     * listener by passing it to `event.respondWith()`.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     */
    handle(options) {
        const [responseDone] = this.handleAll(options);
        return responseDone;
    }
    /**
     * Similar to [`handle()`]{@link module:workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of [response, done] promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */
    handleAll(options) {
        // Allow for flexible options to be passed.
        if (options instanceof FetchEvent) {
            options = {
                event: options,
                request: options.request,
            };
        }
        const event = options.event;
        const request = typeof options.request === 'string' ?
            new Request(options.request) :
            options.request;
        const params = 'params' in options ? options.params : undefined;
        const handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__.StrategyHandler(this, { event, request, params });
        const responseDone = this._getResponse(handler, request, event);
        const handlerDone = this._awaitComplete(responseDone, handler, request, event);
        // Return an array of promises, suitable for use with Promise.all().
        return [responseDone, handlerDone];
    }
    async _getResponse(handler, request, event) {
        await handler.runCallbacks('handlerWillStart', { event, request });
        let response = undefined;
        try {
            response = await this._handle(request, handler);
            // The "official" Strategy subclasses all throw this error automatically,
            // but in case a third-party Strategy doesn't, ensure that we have a
            // consistent failure when there's no response or an error response.
            if (!response || response.type === 'error') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__.WorkboxError('no-response', { url: request.url });
            }
        }
        catch (error) {
            if (error instanceof Error) {
                for (const callback of handler.iterateCallbacks('handlerDidError')) {
                    response = await callback({ error, event, request });
                    if (response) {
                        break;
                    }
                }
            }
            if (!response) {
                throw error;
            }
            else if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__.logger.log(`While responding to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__.getFriendlyURL)(request.url)}', ` +
                    `an ${error instanceof Error ? error.toString() : ''} error occurred. Using a fallback response provided by ` +
                    `a handlerDidError plugin.`);
            }
        }
        for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
            response = await callback({ event, request, response });
        }
        return response;
    }
    async _awaitComplete(responseDone, handler, request, event) {
        let response;
        let error;
        try {
            response = await responseDone;
        }
        catch (error) {
            // Ignore errors, as response errors should be caught via the `response`
            // promise above. The `done` promise will only throw for errors in
            // promises passed to `handler.waitUntil()`.
        }
        try {
            await handler.runCallbacks('handlerDidRespond', {
                event,
                request,
                response,
            });
            await handler.doneWaiting();
        }
        catch (waitUntilError) {
            if (waitUntilError instanceof Error) {
                error = waitUntilError;
            }
        }
        await handler.runCallbacks('handlerDidComplete', {
            event,
            request,
            response,
            error: error,
        });
        handler.destroy();
        if (error) {
            throw error;
        }
    }
}

/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the [`handler`]{@link module:workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {module:workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof module:workbox-strategies.Strategy
 */


/***/ }),

/***/ "./node_modules/workbox-strategies/StrategyHandler.js":
/*!************************************************************!*\
  !*** ./node_modules/workbox-strategies/StrategyHandler.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StrategyHandler": function() { return /* binding */ StrategyHandler; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/assert.js */ "./node_modules/workbox-core/_private/assert.js");
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/cacheMatchIgnoreParams.js */ "./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js");
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! workbox-core/_private/Deferred.js */ "./node_modules/workbox-core/_private/Deferred.js");
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! workbox-core/_private/executeQuotaErrorCallbacks.js */ "./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! workbox-core/_private/timeout.js */ "./node_modules/workbox-core/_private/timeout.js");
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! workbox-core/_private/WorkboxError.js */ "./node_modules/workbox-core/_private/WorkboxError.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/









function toRequest(input) {
    return (typeof input === 'string') ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * [handle()]{@link module:workbox-strategies.Strategy~handle} or
 * [handleAll()]{@link module:workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof module:workbox-strategies
 */
class StrategyHandler {
    /**
     * Creates a new instance associated with the passed strategy and event
     * that's handling the request.
     *
     * The constructor also initializes the state that will be passed to each of
     * the plugins handling this request.
     *
     * @param {module:workbox-strategies.Strategy} strategy
     * @param {Object} options
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     *     [match callback]{@link module:workbox-routing~matchCallback},
     *     (if applicable).
     */
    constructor(strategy, options) {
        this._cacheKeys = {};
        /**
         * The request the strategy is performing (passed to the strategy's
         * `handle()` or `handleAll()` method).
         * @name request
         * @instance
         * @type {Request}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        /**
         * The event associated with this request.
         * @name event
         * @instance
         * @type {ExtendableEvent}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        /**
         * A `URL` instance of `request.url` (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `url` param will be present if the strategy was invoked
         * from a workbox `Route` object.
         * @name url
         * @instance
         * @type {URL|undefined}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        /**
         * A `param` value (if passed to the strategy's
         * `handle()` or `handleAll()` method).
         * Note: the `param` param will be present if the strategy was invoked
         * from a workbox `Route` object and the
         * [match callback]{@link module:workbox-routing~matchCallback} returned
         * a truthy value (it will be that value).
         * @name params
         * @instance
         * @type {*|undefined}
         * @memberof module:workbox-strategies.StrategyHandler
         */
        if (true) {
            workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__.assert.isInstance(options.event, ExtendableEvent, {
                moduleName: 'workbox-strategies',
                className: 'StrategyHandler',
                funcName: 'constructor',
                paramName: 'options.event',
            });
        }
        Object.assign(this, options);
        this.event = options.event;
        this._strategy = strategy;
        this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__.Deferred();
        this._extendLifetimePromises = [];
        // Copy the plugins list (since it's mutable on the strategy),
        // so any mutations don't affect this handler instance.
        this._plugins = [...strategy.plugins];
        this._pluginStateMap = new Map();
        for (const plugin of this._plugins) {
            this._pluginStateMap.set(plugin, {});
        }
        this.event.waitUntil(this._handlerDeferred.promise);
    }
    /**
     * Fetches a given request (and invokes any applicable plugin callback
     * methods) using the `fetchOptions` (for non-navigation requests) and
     * `plugins` defined on the `Strategy` object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - `requestWillFetch()`
     * - `fetchDidSucceed()`
     * - `fetchDidFail()`
     *
     * @param {Request|string} input The URL or request to fetch.
     * @return {Promise<Response>}
     */
    async fetch(input) {
        const { event } = this;
        let request = toRequest(input);
        if (request.mode === 'navigate' &&
            event instanceof FetchEvent &&
            event.preloadResponse) {
            const possiblePreloadResponse = await event.preloadResponse;
            if (possiblePreloadResponse) {
                if (true) {
                    workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Using a preloaded navigation response for ` +
                        `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}'`);
                }
                return possiblePreloadResponse;
            }
        }
        // If there is a fetchDidFail plugin, we need to save a clone of the
        // original request before it's either modified by a requestWillFetch
        // plugin or before the original request's body is consumed via fetch().
        const originalRequest = this.hasCallback('fetchDidFail') ?
            request.clone() : null;
        try {
            for (const cb of this.iterateCallbacks('requestWillFetch')) {
                request = await cb({ request: request.clone(), event });
            }
        }
        catch (err) {
            if (err instanceof Error) {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('plugin-error-request-will-fetch', { thrownErrorMessage: err.message });
            }
        }
        // The request can be altered by plugins with `requestWillFetch` making
        // the original request (most likely from a `fetch` event) different
        // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
        const pluginFilteredRequest = request.clone();
        try {
            let fetchResponse;
            // See https://github.com/GoogleChrome/workbox/issues/1796
            fetchResponse = await fetch(request, request.mode === 'navigate' ?
                undefined : this._strategy.fetchOptions);
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' returned a response with ` +
                    `status '${fetchResponse.status}'.`);
            }
            for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                fetchResponse = await callback({
                    event,
                    request: pluginFilteredRequest,
                    response: fetchResponse,
                });
            }
            return fetchResponse;
        }
        catch (error) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.log(`Network request for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(request.url)}' threw an error.`, error);
            }
            // `originalRequest` will only exist if a `fetchDidFail` callback
            // is being used (see above).
            if (originalRequest) {
                await this.runCallbacks('fetchDidFail', {
                    error: error,
                    event,
                    originalRequest: originalRequest.clone(),
                    request: pluginFilteredRequest.clone(),
                });
            }
            throw error;
        }
    }
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    async fetchAndCachePut(input) {
        const response = await this.fetch(input);
        const responseClone = response.clone();
        void this.waitUntil(this.cachePut(input, responseClone));
        return response;
    }
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */
    async cacheMatch(key) {
        const request = toRequest(key);
        let cachedResponse;
        const { cacheName, matchOptions } = this._strategy;
        const effectiveRequest = await this.getCacheKey(request, 'read');
        const multiMatchOptions = Object.assign(Object.assign({}, matchOptions), { cacheName });
        cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
        if (true) {
            if (cachedResponse) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Found a cached response in '${cacheName}'.`);
            }
            else {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`No cached response found in '${cacheName}'.`);
            }
        }
        for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
            cachedResponse = (await callback({
                cacheName,
                matchOptions,
                cachedResponse,
                request: effectiveRequest,
                event: this.event,
            })) || undefined;
        }
        return cachedResponse;
    }
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */
    async cachePut(key, response) {
        const request = toRequest(key);
        // Run in the next task to avoid blocking other cache reads.
        // https://github.com/w3c/ServiceWorker/issues/1397
        await (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__.timeout)(0);
        const effectiveRequest = await this.getCacheKey(request, 'write');
        if (true) {
            if (effectiveRequest.method && effectiveRequest.method !== 'GET') {
                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('attempt-to-cache-non-get-request', {
                    url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
                    method: effectiveRequest.method,
                });
            }
            // See https://github.com/GoogleChrome/workbox/issues/2818
            const vary = response.headers.get('Vary');
            if (vary) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)} ` +
                    `has a 'Vary: ${vary}' header. ` +
                    `Consider setting the {ignoreVary: true} option on your strategy ` +
                    `to ensure cache matching and deletion works as expected.`);
            }
        }
        if (!response) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.error(`Cannot cache non-existent response for ` +
                    `'${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}'.`);
            }
            throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__.WorkboxError('cache-put-with-no-response', {
                url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url),
            });
        }
        const responseToCache = await this._ensureResponseSafeToCache(response);
        if (!responseToCache) {
            if (true) {
                workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Response '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}' ` +
                    `will not be cached.`, responseToCache);
            }
            return false;
        }
        const { cacheName, matchOptions } = this._strategy;
        const cache = await self.caches.open(cacheName);
        const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
        const oldResponse = hasCacheUpdateCallback ? await (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__.cacheMatchIgnoreParams)(
        // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
        // feature. Consider into ways to only add this behavior if using
        // precaching.
        cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions) :
            null;
        if (true) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`Updating the '${cacheName}' cache with a new Response ` +
                `for ${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__.getFriendlyURL)(effectiveRequest.url)}.`);
        }
        try {
            await cache.put(effectiveRequest, hasCacheUpdateCallback ?
                responseToCache.clone() : responseToCache);
        }
        catch (error) {
            if (error instanceof Error) {
                // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
                if (error.name === 'QuotaExceededError') {
                    await (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__.executeQuotaErrorCallbacks)();
                }
                throw error;
            }
        }
        for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
            await callback({
                cacheName,
                oldResponse,
                newResponse: responseToCache.clone(),
                request: effectiveRequest,
                event: this.event,
            });
        }
        return true;
    }
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */
    async getCacheKey(request, mode) {
        if (!this._cacheKeys[mode]) {
            let effectiveRequest = request;
            for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                effectiveRequest = toRequest(await callback({
                    mode,
                    request: effectiveRequest,
                    event: this.event,
                    // params has a type any can't change right now.
                    params: this.params,
                }));
            }
            this._cacheKeys[mode] = effectiveRequest;
        }
        return this._cacheKeys[mode];
    }
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */
    hasCallback(name) {
        for (const plugin of this._strategy.plugins) {
            if (name in plugin) {
                return true;
            }
        }
        return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * [`iterateCallbacks()`]{@link module:workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */
    async runCallbacks(name, param) {
        for (const callback of this.iterateCallbacks(name)) {
            // TODO(philipwalton): not sure why `any` is needed. It seems like
            // this should work with `as WorkboxPluginCallbackParam[C]`.
            await callback(param);
        }
    }
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */
    *iterateCallbacks(name) {
        for (const plugin of this._strategy.plugins) {
            if (typeof plugin[name] === 'function') {
                const state = this._pluginStateMap.get(plugin);
                const statefulCallback = (param) => {
                    const statefulParam = Object.assign(Object.assign({}, param), { state });
                    // TODO(philipwalton): not sure why `any` is needed. It seems like
                    // this should work with `as WorkboxPluginCallbackParam[C]`.
                    return plugin[name](statefulParam);
                };
                yield statefulCallback;
            }
        }
    }
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * [`doneWaiting()`]{@link module:workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */
    waitUntil(promise) {
        this._extendLifetimePromises.push(promise);
        return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * [`waitUntil()`]{@link module:workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */
    async doneWaiting() {
        let promise;
        while (promise = this._extendLifetimePromises.shift()) {
            await promise;
        }
    }
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */
    destroy() {
        this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */
    async _ensureResponseSafeToCache(response) {
        let responseToCache = response;
        let pluginsUsed = false;
        for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
            responseToCache = (await callback({
                request: this.request,
                response: responseToCache,
                event: this.event,
            })) || undefined;
            pluginsUsed = true;
            if (!responseToCache) {
                break;
            }
        }
        if (!pluginsUsed) {
            if (responseToCache && responseToCache.status !== 200) {
                responseToCache = undefined;
            }
            if (true) {
                if (responseToCache) {
                    if (responseToCache.status !== 200) {
                        if (responseToCache.status === 0) {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.warn(`The response for '${this.request.url}' ` +
                                `is an opaque response. The caching strategy that you're ` +
                                `using will not cache opaque responses by default.`);
                        }
                        else {
                            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__.logger.debug(`The response for '${this.request.url}' ` +
                                `returned a status code of '${response.status}' and won't ` +
                                `be cached as a result.`);
                        }
                    }
                }
            }
        }
        return responseToCache;
    }
}



/***/ }),

/***/ "./node_modules/workbox-strategies/_version.js":
/*!*****************************************************!*\
  !*** ./node_modules/workbox-strategies/_version.js ***!
  \*****************************************************/
/***/ (function() {


// @ts-ignore
try {
    self['workbox:strategies:6.2.4'] && _();
}
catch (e) { }


/***/ }),

/***/ "./node_modules/workbox-strategies/index.js":
/*!**************************************************!*\
  !*** ./node_modules/workbox-strategies/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CacheFirst": function() { return /* reexport safe */ _CacheFirst_js__WEBPACK_IMPORTED_MODULE_0__.CacheFirst; },
/* harmony export */   "CacheOnly": function() { return /* reexport safe */ _CacheOnly_js__WEBPACK_IMPORTED_MODULE_1__.CacheOnly; },
/* harmony export */   "NetworkFirst": function() { return /* reexport safe */ _NetworkFirst_js__WEBPACK_IMPORTED_MODULE_2__.NetworkFirst; },
/* harmony export */   "NetworkOnly": function() { return /* reexport safe */ _NetworkOnly_js__WEBPACK_IMPORTED_MODULE_3__.NetworkOnly; },
/* harmony export */   "StaleWhileRevalidate": function() { return /* reexport safe */ _StaleWhileRevalidate_js__WEBPACK_IMPORTED_MODULE_4__.StaleWhileRevalidate; },
/* harmony export */   "Strategy": function() { return /* reexport safe */ _Strategy_js__WEBPACK_IMPORTED_MODULE_5__.Strategy; },
/* harmony export */   "StrategyHandler": function() { return /* reexport safe */ _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_6__.StrategyHandler; }
/* harmony export */ });
/* harmony import */ var _CacheFirst_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheFirst.js */ "./node_modules/workbox-strategies/CacheFirst.js");
/* harmony import */ var _CacheOnly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CacheOnly.js */ "./node_modules/workbox-strategies/CacheOnly.js");
/* harmony import */ var _NetworkFirst_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NetworkFirst.js */ "./node_modules/workbox-strategies/NetworkFirst.js");
/* harmony import */ var _NetworkOnly_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NetworkOnly.js */ "./node_modules/workbox-strategies/NetworkOnly.js");
/* harmony import */ var _StaleWhileRevalidate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StaleWhileRevalidate.js */ "./node_modules/workbox-strategies/StaleWhileRevalidate.js");
/* harmony import */ var _Strategy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Strategy.js */ "./node_modules/workbox-strategies/Strategy.js");
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StrategyHandler.js */ "./node_modules/workbox-strategies/StrategyHandler.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_7__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * There are common caching strategies that most service workers will need
 * and use. This module provides simple implementations of these strategies.
 *
 * @module workbox-strategies
 */



/***/ }),

/***/ "./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js":
/*!***************************************************************************!*\
  !*** ./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cacheOkAndOpaquePlugin": function() { return /* binding */ cacheOkAndOpaquePlugin; }
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

const cacheOkAndOpaquePlugin = {
    /**
     * Returns a valid response (to allow caching) if the status is 200 (OK) or
     * 0 (opaque).
     *
     * @param {Object} options
     * @param {Response} options.response
     * @return {Response|null}
     *
     * @private
     */
    cacheWillUpdate: async ({ response }) => {
        if (response.status === 200 || response.status === 0) {
            return response;
        }
        return null;
    },
};


/***/ }),

/***/ "./node_modules/workbox-strategies/utils/messages.js":
/*!***********************************************************!*\
  !*** ./node_modules/workbox-strategies/utils/messages.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "messages": function() { return /* binding */ messages; }
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-core/_private/logger.js */ "./node_modules/workbox-core/_private/logger.js");
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! workbox-core/_private/getFriendlyURL.js */ "./node_modules/workbox-core/_private/getFriendlyURL.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_version.js */ "./node_modules/workbox-strategies/_version.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



const messages = {
    strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${(0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__.getFriendlyURL)(request.url)}'`,
    printFinalResponse: (response) => {
        if (response) {
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupCollapsed(`View the final response here.`);
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.log(response || '[No response returned]');
            workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__.logger.groupEnd();
        }
    },
};


/***/ }),

/***/ "./node_modules/workbox-core/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/workbox-core/index.mjs ***!
  \*********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-core/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _index_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/workbox-expiration/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-expiration/index.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-expiration/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _index_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/workbox-precaching/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-precaching/index.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-precaching/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _index_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/workbox-routing/index.mjs":
/*!************************************************!*\
  !*** ./node_modules/workbox-routing/index.mjs ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-routing/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _index_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/workbox-strategies/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/workbox-strategies/index.mjs ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/workbox-strategies/index.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _index_js__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	!function() {
/******/ 		if (__webpack_require__.i) {
/******/ 		__webpack_require__.i.push(function(options) {
/******/ 			var originalFactory = options.factory;
/******/ 			options.factory = function(moduleObject, moduleExports, webpackRequire) {
/******/ 				var hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 				var cleanup = hasRefresh ? self.$RefreshInterceptModuleExecution$(moduleObject.id) : function() {};
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					cleanup();
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./service-worker.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vcHVibGljL3N3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBQSx5REFBVztBQUNYQywwREFBWSxJQUVaO0FBQ0E7O0FBQ0EsSUFBTVksV0FBVyxHQUFHQyxJQUFJLENBQUNDLGFBQXpCLEVBQ0E7O0FBQ0FGLFdBQVcsQ0FBQ0csSUFBWixDQUNJO0FBQ0lDLEVBQUFBLEdBQUcsRUFBRSxXQURUO0FBRUlDLEVBQUFBLFFBQVEsRUFBRTtBQUZkLENBREo7QUFNQVAsb0VBQWdCLENBQUNFLFdBQUQsQ0FBaEI7QUFFQUQseUVBQXFCO0FBQ3JCTCw4REFBYSxDQUNULEdBRFMsRUFFVCxJQUFJSCw0REFBSixDQUFpQjtBQUNiZSxFQUFBQSxTQUFTLEVBQUUsV0FERTtBQUViQyxFQUFBQSxPQUFPLEVBQUUsQ0FBQyxJQUFJbEIsZ0VBQUosQ0FBcUI7QUFBRW1CLElBQUFBLFVBQVUsRUFBRSxDQUFkO0FBQWlCQyxJQUFBQSxhQUFhLEVBQUUsS0FBaEM7QUFBdUNDLElBQUFBLGlCQUFpQixFQUFFLENBQUM7QUFBM0QsR0FBckIsQ0FBRDtBQUZJLENBQWpCLENBRlMsRUFNVCxLQU5TLENBQWI7QUFRQWhCLDhEQUFhLENBQ1Qsb0RBRFMsRUFFVCxJQUFJRiwwREFBSixDQUFlO0FBQ1hjLEVBQUFBLFNBQVMsRUFBRSxjQURBO0FBRVhDLEVBQUFBLE9BQU8sRUFBRSxDQUFDLElBQUlsQixnRUFBSixDQUFxQjtBQUFFbUIsSUFBQUEsVUFBVSxFQUFFLENBQWQ7QUFBaUJDLElBQUFBLGFBQWEsRUFBRSxPQUFoQztBQUF5Q0MsSUFBQUEsaUJBQWlCLEVBQUUsQ0FBQztBQUE3RCxHQUFyQixDQUFEO0FBRkUsQ0FBZixDQUZTLEVBTVQsS0FOUyxDQUFiO0FBUUFoQiw4REFBYSxDQUNULDZDQURTLEVBRVQsSUFBSUQsb0VBQUosQ0FBeUI7QUFDckJhLEVBQUFBLFNBQVMsRUFBRSxvQkFEVTtBQUVyQkMsRUFBQUEsT0FBTyxFQUFFLENBQUMsSUFBSWxCLGdFQUFKLENBQXFCO0FBQUVtQixJQUFBQSxVQUFVLEVBQUUsQ0FBZDtBQUFpQkMsSUFBQUEsYUFBYSxFQUFFLE1BQWhDO0FBQXdDQyxJQUFBQSxpQkFBaUIsRUFBRSxDQUFDO0FBQTVELEdBQXJCLENBQUQ7QUFGWSxDQUF6QixDQUZTLEVBTVQsS0FOUyxDQUFiLEVBUUE7O0FBQ0FoQiw4REFBYSxDQUNULHVDQURTLEVBRVQsSUFBSUosMkRBQUosQ0FBZ0I7QUFDWmdCLEVBQUFBLFNBQVMsRUFBRSxxQkFEQztBQUVaQyxFQUFBQSxPQUFPLEVBQUUsQ0FBQyxJQUFJbEIsZ0VBQUosQ0FBcUI7QUFBRW1CLElBQUFBLFVBQVUsRUFBRSxFQUFkO0FBQWtCQyxJQUFBQSxhQUFhLEVBQUUsS0FBakM7QUFBd0NDLElBQUFBLGlCQUFpQixFQUFFLENBQUM7QUFBNUQsR0FBckIsQ0FBRDtBQUZHLENBQWhCLENBRlMsRUFNVCxLQU5TLENBQWI7QUFRQWhCLDhEQUFhLENBQ1QsWUFEUyxFQUVULElBQUlELG9FQUFKLENBQXlCO0FBQ3JCYSxFQUFBQSxTQUFTLEVBQUUsa0JBRFU7QUFFckJDLEVBQUFBLE9BQU8sRUFBRSxDQUFDLElBQUlsQixnRUFBSixDQUFxQjtBQUFFbUIsSUFBQUEsVUFBVSxFQUFFLEVBQWQ7QUFBa0JDLElBQUFBLGFBQWEsRUFBRSxLQUFqQztBQUF3Q0MsSUFBQUEsaUJBQWlCLEVBQUUsQ0FBQztBQUE1RCxHQUFyQixDQUFEO0FBRlksQ0FBekIsQ0FGUyxFQU1ULEtBTlMsQ0FBYjtBQVFBaEIsOERBQWEsQ0FDVCxrQkFEUyxFQUVULElBQUlELG9FQUFKLENBQXlCO0FBQ3JCYSxFQUFBQSxTQUFTLEVBQUUscUJBRFU7QUFFckJDLEVBQUFBLE9BQU8sRUFBRSxDQUFDLElBQUlsQixnRUFBSixDQUFxQjtBQUFFbUIsSUFBQUEsVUFBVSxFQUFFLEVBQWQ7QUFBa0JDLElBQUFBLGFBQWEsRUFBRSxLQUFqQztBQUF3Q0MsSUFBQUEsaUJBQWlCLEVBQUUsQ0FBQztBQUE1RCxHQUFyQixDQUFEO0FBRlksQ0FBekIsQ0FGUyxFQU1ULEtBTlMsQ0FBYjtBQVFBaEIsOERBQWEsQ0FDVCxzQkFEUyxFQUVULElBQUlILDREQUFKLENBQWlCO0FBQ2JlLEVBQUFBLFNBQVMsRUFBRSxvQkFERTtBQUViQyxFQUFBQSxPQUFPLEVBQUUsQ0FBQyxJQUFJbEIsZ0VBQUosQ0FBcUI7QUFBRW1CLElBQUFBLFVBQVUsRUFBRSxFQUFkO0FBQWtCQyxJQUFBQSxhQUFhLEVBQUUsS0FBakM7QUFBd0NDLElBQUFBLGlCQUFpQixFQUFFLENBQUM7QUFBNUQsR0FBckIsQ0FBRDtBQUZJLENBQWpCLENBRlMsRUFNVCxLQU5TLENBQWI7QUFRQWhCLDhEQUFhLENBQ1QsYUFEUyxFQUVULElBQUlILDREQUFKLENBQWlCO0FBQ2JlLEVBQUFBLFNBQVMsRUFBRSxNQURFO0FBRWJLLEVBQUFBLHFCQUFxQixFQUFFLEVBRlY7QUFHYkosRUFBQUEsT0FBTyxFQUFFLENBQUMsSUFBSWxCLGdFQUFKLENBQXFCO0FBQUVtQixJQUFBQSxVQUFVLEVBQUUsRUFBZDtBQUFrQkMsSUFBQUEsYUFBYSxFQUFFLEtBQWpDO0FBQXdDQyxJQUFBQSxpQkFBaUIsRUFBRSxDQUFDO0FBQTVELEdBQXJCLENBQUQ7QUFISSxDQUFqQixDQUZTLEVBT1QsS0FQUyxDQUFiO0FBU0FoQiw4REFBYSxDQUNULEtBRFMsRUFFVCxJQUFJSCw0REFBSixDQUFpQjtBQUNiZSxFQUFBQSxTQUFTLEVBQUUsUUFERTtBQUViSyxFQUFBQSxxQkFBcUIsRUFBRSxFQUZWO0FBR2JKLEVBQUFBLE9BQU8sRUFBRSxDQUFDLElBQUlsQixnRUFBSixDQUFxQjtBQUFFbUIsSUFBQUEsVUFBVSxFQUFFLEVBQWQ7QUFBa0JDLElBQUFBLGFBQWEsRUFBRSxLQUFqQztBQUF3Q0MsSUFBQUEsaUJBQWlCLEVBQUUsQ0FBQztBQUE1RCxHQUFyQixDQUFEO0FBSEksQ0FBakIsQ0FGUyxFQU9ULEtBUFMsQ0FBYixFQVVBO0FBQ0E7QUFFQTs7QUFDQWYsa0VBQWlCLENBQUMsSUFBSUYsb0VBQUosRUFBRCxDQUFqQixFQUVBO0FBQ0E7O0FBQ0FHLGdFQUFlLENBQUMsZ0JBQWU7QUFBQSxNQUFaZ0IsS0FBWSxRQUFaQSxLQUFZOztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUUEsS0FBSyxDQUFDQyxPQUFOLENBQWNDLFdBQXRCO0FBQ0ksU0FBSyxVQUFMO0FBQ0k7QUFDQSxhQUFPakIsaUVBQWEsQ0FBQyxXQUFELENBQXBCLENBRkosQ0FHSTs7QUFDQTs7QUFDSixTQUFLLE9BQUw7QUFDSTtBQUNBLGFBQU9BLGlFQUFhLENBQUMsNkJBQUQsQ0FBcEIsQ0FGSixDQUdJOztBQUNBOztBQUNKLFNBQUssTUFBTCxDQVhKLENBWVE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0o7QUFDSTtBQUNBLGFBQU9rQixRQUFRLENBQUNDLEtBQVQsRUFBUDtBQWxCUjtBQW9CSCxDQTdCYyxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVHbUU7QUFDTjs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMseUNBQXlDLElBQUk7QUFDOUU7QUFDQSx3QkFBd0IscURBQUk7QUFDNUI7QUFDQTtBQUNBLG9CQUFvQixxREFBSSxzREFBc0QscURBQUk7QUFDbEYsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVSxJQUFJO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLFdBQVcscURBQUk7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkY1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VNbkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsR0FBRztVQUNIO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDaENBO1dBQ0E7V0FDQTtXQUNBLGVBQWUsNEJBQTRCO1dBQzNDLGVBQWU7V0FDZixpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBOzs7OztXQ1ZBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBO1dBQ0EsQ0FBQztXQUNEOzs7Ozs7VUNYQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7Ozs7VUVWQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZXJ2aWNlLXdvcmtlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lkYi9idWlsZC9lc20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pZGIvYnVpbGQvZXNtL3dyYXAtaWRiLXZhbHVlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL0RlZmVycmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVNYXRjaElnbm9yZVBhcmFtcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2NhbkNvbnN0cnVjdFJlYWRhYmxlU3RyZWFtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL2NhbkNvbnN0cnVjdFJlc3BvbnNlRnJvbUJvZHlTdHJlYW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvZG9udFdhaXRGb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL3Jlc3VsdGluZ0NsaWVudEV4aXN0cy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fcHJpdmF0ZS90aW1lb3V0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL19wcml2YXRlL3dhaXRVbnRpbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9fdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9jYWNoZU5hbWVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL2NsaWVudHNDbGFpbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtY29yZS9jb3B5UmVzcG9uc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvbW9kZWxzL21lc3NhZ2VzL21lc3NhZ2VHZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvbW9kZWxzL21lc3NhZ2VzL21lc3NhZ2VzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL21vZGVscy9xdW90YUVycm9yQ2FsbGJhY2tzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL3JlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL3NldENhY2hlTmFtZURldGFpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvc2tpcFdhaXRpbmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWNvcmUvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWV4cGlyYXRpb24vQ2FjaGVFeHBpcmF0aW9uLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1leHBpcmF0aW9uL0V4cGlyYXRpb25QbHVnaW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWV4cGlyYXRpb24vX3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWV4cGlyYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LWV4cGlyYXRpb24vbW9kZWxzL0NhY2hlVGltZXN0YW1wc01vZGVsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL1ByZWNhY2hlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9QcmVjYWNoZUZhbGxiYWNrUGx1Z2luLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL1ByZWNhY2hlUm91dGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvUHJlY2FjaGVTdHJhdGVneS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9fdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9hZGRQbHVnaW5zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL2FkZFJvdXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL2NsZWFudXBPdXRkYXRlZENhY2hlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9jcmVhdGVIYW5kbGVyQm91bmRUb1VSTC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9nZXRDYWNoZUtleUZvclVSTC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy9tYXRjaFByZWNhY2hlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3ByZWNhY2hlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3ByZWNhY2hlQW5kUm91dGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvUHJlY2FjaGVDYWNoZUtleVBsdWdpbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9QcmVjYWNoZUluc3RhbGxSZXBvcnRQbHVnaW4uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvY3JlYXRlQ2FjaGVLZXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvZGVsZXRlT3V0ZGF0ZWRDYWNoZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvZ2VuZXJhdGVVUkxWYXJpYXRpb25zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1wcmVjYWNoaW5nL3V0aWxzL3ByaW50Q2xlYW51cERldGFpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvdXRpbHMvcHJpbnRJbnN0YWxsRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcHJlY2FjaGluZy91dGlscy9yZW1vdmVJZ25vcmVkU2VhcmNoUGFyYW1zLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL05hdmlnYXRpb25Sb3V0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9SZWdFeHBSb3V0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9Sb3V0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvX3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvcmVnaXN0ZXJSb3V0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy9zZXRDYXRjaEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvc2V0RGVmYXVsdEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXJvdXRpbmcvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL3V0aWxzL2dldE9yQ3JlYXRlRGVmYXVsdFJvdXRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtcm91dGluZy91dGlscy9ub3JtYWxpemVIYW5kbGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL0NhY2hlRmlyc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvQ2FjaGVPbmx5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL05ldHdvcmtGaXJzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9OZXR3b3JrT25seS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9TdGFsZVdoaWxlUmV2YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9TdHJhdGVneS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9TdHJhdGVneUhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvX3ZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXN0cmF0ZWdpZXMvcGx1Z2lucy9jYWNoZU9rQW5kT3BhcXVlUGx1Z2luLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1zdHJhdGVnaWVzL3V0aWxzL21lc3NhZ2VzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1jb3JlL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtZXhwaXJhdGlvbi9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy93b3JrYm94LXByZWNhY2hpbmcvaW5kZXgubWpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvd29ya2JveC1yb3V0aW5nL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dvcmtib3gtc3RyYXRlZ2llcy9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vX05fRS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9fTl9FL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL19OX0Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL19OX0Uvd2VicGFjay9ydW50aW1lL2hhcm1vbnkgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9fTl9FL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vX05fRS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL19OX0Uvd2VicGFjay9ydW50aW1lL3JlYWN0IHJlZnJlc2giLCJ3ZWJwYWNrOi8vX05fRS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0Iiwid2VicGFjazovL19OX0Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9fTl9FL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9fTl9FL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBza2lwV2FpdGluZywgY2xpZW50c0NsYWltIH0gZnJvbSAnd29ya2JveC1jb3JlJztcclxuaW1wb3J0IHsgRXhwaXJhdGlvblBsdWdpbiB9IGZyb20gJ3dvcmtib3gtZXhwaXJhdGlvbic7XHJcbmltcG9ydCB7XHJcbiAgICBOZXR3b3JrT25seSwgTmV0d29ya0ZpcnN0LCBDYWNoZUZpcnN0LCBTdGFsZVdoaWxlUmV2YWxpZGF0ZSxcclxufSBmcm9tICd3b3JrYm94LXN0cmF0ZWdpZXMnO1xyXG5pbXBvcnQgeyByZWdpc3RlclJvdXRlLCBzZXREZWZhdWx0SGFuZGxlciwgc2V0Q2F0Y2hIYW5kbGVyIH0gZnJvbSAnd29ya2JveC1yb3V0aW5nJztcclxuaW1wb3J0IHsgbWF0Y2hQcmVjYWNoZSwgcHJlY2FjaGVBbmRSb3V0ZSwgY2xlYW51cE91dGRhdGVkQ2FjaGVzIH0gZnJvbSAnd29ya2JveC1wcmVjYWNoaW5nJztcclxuXHJcbnNraXBXYWl0aW5nKCk7XHJcbmNsaWVudHNDbGFpbSgpO1xyXG5cclxuLy8gbXVzdCBpbmNsdWRlIGZvbGxvd2luZyBsaW5lcyB3aGVuIHVzaW5nIGluamVjdCBtYW5pZmVzdCBtb2R1bGUgZnJvbSB3b3JrYm94XHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy9wcmVjYWNoZS1maWxlcy93b3JrYm94LWJ1aWxkI2FkZF9hbl9pbmplY3Rpb25fcG9pbnRcclxuY29uc3QgV0JfTUFOSUZFU1QgPSBzZWxmLl9fV0JfTUFOSUZFU1Q7XHJcbi8vIFByZWNhY2hlIGZhbGxiYWNrIHJvdXRlIGFuZCBpbWFnZVxyXG5XQl9NQU5JRkVTVC5wdXNoKFxyXG4gICAge1xyXG4gICAgICAgIHVybDogJy9mYWxsYmFjaycsXHJcbiAgICAgICAgcmV2aXNpb246ICcxMjM0NTY3ODkwJyxcclxuICAgIH0sXHJcbik7XHJcbnByZWNhY2hlQW5kUm91dGUoV0JfTUFOSUZFU1QpO1xyXG5cclxuY2xlYW51cE91dGRhdGVkQ2FjaGVzKCk7XHJcbnJlZ2lzdGVyUm91dGUoXHJcbiAgICAnLycsXHJcbiAgICBuZXcgTmV0d29ya0ZpcnN0KHtcclxuICAgICAgICBjYWNoZU5hbWU6ICdzdGFydC11cmwnLFxyXG4gICAgICAgIHBsdWdpbnM6IFtuZXcgRXhwaXJhdGlvblBsdWdpbih7IG1heEVudHJpZXM6IDEsIG1heEFnZVNlY29uZHM6IDg2NDAwLCBwdXJnZU9uUXVvdGFFcnJvcjogITAgfSldLFxyXG4gICAgfSksXHJcbiAgICAnR0VUJyxcclxuKTtcclxucmVnaXN0ZXJSb3V0ZShcclxuICAgIC9eaHR0cHM6XFwvXFwvZm9udHNcXC4oPzpnb29nbGVhcGlzfGdzdGF0aWMpXFwuY29tXFwvLiovaSxcclxuICAgIG5ldyBDYWNoZUZpcnN0KHtcclxuICAgICAgICBjYWNoZU5hbWU6ICdnb29nbGUtZm9udHMnLFxyXG4gICAgICAgIHBsdWdpbnM6IFtuZXcgRXhwaXJhdGlvblBsdWdpbih7IG1heEVudHJpZXM6IDQsIG1heEFnZVNlY29uZHM6IDMxNTM2ZTMsIHB1cmdlT25RdW90YUVycm9yOiAhMCB9KV0sXHJcbiAgICB9KSxcclxuICAgICdHRVQnLFxyXG4pO1xyXG5yZWdpc3RlclJvdXRlKFxyXG4gICAgL1xcLig/OmVvdHxvdGZ8dHRjfHR0Znx3b2ZmfHdvZmYyfGZvbnQuY3NzKSQvaSxcclxuICAgIG5ldyBTdGFsZVdoaWxlUmV2YWxpZGF0ZSh7XHJcbiAgICAgICAgY2FjaGVOYW1lOiAnc3RhdGljLWZvbnQtYXNzZXRzJyxcclxuICAgICAgICBwbHVnaW5zOiBbbmV3IEV4cGlyYXRpb25QbHVnaW4oeyBtYXhFbnRyaWVzOiA0LCBtYXhBZ2VTZWNvbmRzOiA2MDQ4MDAsIHB1cmdlT25RdW90YUVycm9yOiAhMCB9KV0sXHJcbiAgICB9KSxcclxuICAgICdHRVQnLFxyXG4pO1xyXG4vLyBkaXNhYmxlIGltYWdlIGNhY2hlLCBzbyB3ZSBjb3VsZCBvYnNlcnZlIHRoZSBwbGFjZWhvbGRlciBpbWFnZSB3aGVuIG9mZmxpbmVcclxucmVnaXN0ZXJSb3V0ZShcclxuICAgIC9cXC4oPzpqcGd8anBlZ3xnaWZ8cG5nfHN2Z3xpY298d2VicCkkL2ksXHJcbiAgICBuZXcgTmV0d29ya09ubHkoe1xyXG4gICAgICAgIGNhY2hlTmFtZTogJ3N0YXRpYy1pbWFnZS1hc3NldHMnLFxyXG4gICAgICAgIHBsdWdpbnM6IFtuZXcgRXhwaXJhdGlvblBsdWdpbih7IG1heEVudHJpZXM6IDY0LCBtYXhBZ2VTZWNvbmRzOiA4NjQwMCwgcHVyZ2VPblF1b3RhRXJyb3I6ICEwIH0pXSxcclxuICAgIH0pLFxyXG4gICAgJ0dFVCcsXHJcbik7XHJcbnJlZ2lzdGVyUm91dGUoXHJcbiAgICAvXFwuKD86anMpJC9pLFxyXG4gICAgbmV3IFN0YWxlV2hpbGVSZXZhbGlkYXRlKHtcclxuICAgICAgICBjYWNoZU5hbWU6ICdzdGF0aWMtanMtYXNzZXRzJyxcclxuICAgICAgICBwbHVnaW5zOiBbbmV3IEV4cGlyYXRpb25QbHVnaW4oeyBtYXhFbnRyaWVzOiAzMiwgbWF4QWdlU2Vjb25kczogODY0MDAsIHB1cmdlT25RdW90YUVycm9yOiAhMCB9KV0sXHJcbiAgICB9KSxcclxuICAgICdHRVQnLFxyXG4pO1xyXG5yZWdpc3RlclJvdXRlKFxyXG4gICAgL1xcLig/OmNzc3xsZXNzKSQvaSxcclxuICAgIG5ldyBTdGFsZVdoaWxlUmV2YWxpZGF0ZSh7XHJcbiAgICAgICAgY2FjaGVOYW1lOiAnc3RhdGljLXN0eWxlLWFzc2V0cycsXHJcbiAgICAgICAgcGx1Z2luczogW25ldyBFeHBpcmF0aW9uUGx1Z2luKHsgbWF4RW50cmllczogMzIsIG1heEFnZVNlY29uZHM6IDg2NDAwLCBwdXJnZU9uUXVvdGFFcnJvcjogITAgfSldLFxyXG4gICAgfSksXHJcbiAgICAnR0VUJyxcclxuKTtcclxucmVnaXN0ZXJSb3V0ZShcclxuICAgIC9cXC4oPzpqc29ufHhtbHxjc3YpJC9pLFxyXG4gICAgbmV3IE5ldHdvcmtGaXJzdCh7XHJcbiAgICAgICAgY2FjaGVOYW1lOiAnc3RhdGljLWRhdGEtYXNzZXRzJyxcclxuICAgICAgICBwbHVnaW5zOiBbbmV3IEV4cGlyYXRpb25QbHVnaW4oeyBtYXhFbnRyaWVzOiAzMiwgbWF4QWdlU2Vjb25kczogODY0MDAsIHB1cmdlT25RdW90YUVycm9yOiAhMCB9KV0sXHJcbiAgICB9KSxcclxuICAgICdHRVQnLFxyXG4pO1xyXG5yZWdpc3RlclJvdXRlKFxyXG4gICAgL1xcL2FwaVxcLy4qJC9pLFxyXG4gICAgbmV3IE5ldHdvcmtGaXJzdCh7XHJcbiAgICAgICAgY2FjaGVOYW1lOiAnYXBpcycsXHJcbiAgICAgICAgbmV0d29ya1RpbWVvdXRTZWNvbmRzOiAxMCxcclxuICAgICAgICBwbHVnaW5zOiBbbmV3IEV4cGlyYXRpb25QbHVnaW4oeyBtYXhFbnRyaWVzOiAxNiwgbWF4QWdlU2Vjb25kczogODY0MDAsIHB1cmdlT25RdW90YUVycm9yOiAhMCB9KV0sXHJcbiAgICB9KSxcclxuICAgICdHRVQnLFxyXG4pO1xyXG5yZWdpc3RlclJvdXRlKFxyXG4gICAgLy4qL2ksXHJcbiAgICBuZXcgTmV0d29ya0ZpcnN0KHtcclxuICAgICAgICBjYWNoZU5hbWU6ICdvdGhlcnMnLFxyXG4gICAgICAgIG5ldHdvcmtUaW1lb3V0U2Vjb25kczogMTAsXHJcbiAgICAgICAgcGx1Z2luczogW25ldyBFeHBpcmF0aW9uUGx1Z2luKHsgbWF4RW50cmllczogMzIsIG1heEFnZVNlY29uZHM6IDg2NDAwLCBwdXJnZU9uUXVvdGFFcnJvcjogITAgfSldLFxyXG4gICAgfSksXHJcbiAgICAnR0VUJyxcclxuKTtcclxuXHJcbi8vIGZvbGxvd2luZyBsaW5lcyBnaXZlcyB5b3UgY29udHJvbCBvZiB0aGUgb2ZmbGluZSBmYWxsYmFjayBzdHJhdGVnaWVzXHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy9hZHZhbmNlZC1yZWNpcGVzI2NvbXByZWhlbnNpdmVfZmFsbGJhY2tzXHJcblxyXG4vLyBVc2UgYSBzdGFsZS13aGlsZS1yZXZhbGlkYXRlIHN0cmF0ZWd5IGZvciBhbGwgb3RoZXIgcmVxdWVzdHMuXHJcbnNldERlZmF1bHRIYW5kbGVyKG5ldyBTdGFsZVdoaWxlUmV2YWxpZGF0ZSgpKTtcclxuXHJcbi8vIFRoaXMgXCJjYXRjaFwiIGhhbmRsZXIgaXMgdHJpZ2dlcmVkIHdoZW4gYW55IG9mIHRoZSBvdGhlciByb3V0ZXMgZmFpbCB0b1xyXG4vLyBnZW5lcmF0ZSBhIHJlc3BvbnNlLlxyXG5zZXRDYXRjaEhhbmRsZXIoKHsgZXZlbnQgfSkgPT4ge1xyXG4gICAgLy8gVGhlIEZBTExCQUNLX1VSTCBlbnRyaWVzIG11c3QgYmUgYWRkZWQgdG8gdGhlIGNhY2hlIGFoZWFkIG9mIHRpbWUsIGVpdGhlclxyXG4gICAgLy8gdmlhIHJ1bnRpbWUgb3IgcHJlY2FjaGluZy4gSWYgdGhleSBhcmUgcHJlY2FjaGVkLCB0aGVuIGNhbGxcclxuICAgIC8vIGBtYXRjaFByZWNhY2hlKEZBTExCQUNLX1VSTClgIChmcm9tIHRoZSBgd29ya2JveC1wcmVjYWNoaW5nYCBwYWNrYWdlKVxyXG4gICAgLy8gdG8gZ2V0IHRoZSByZXNwb25zZSBmcm9tIHRoZSBjb3JyZWN0IGNhY2hlLlxyXG4gICAgLy9cclxuICAgIC8vIFVzZSBldmVudCwgcmVxdWVzdCwgYW5kIHVybCB0byBmaWd1cmUgb3V0IGhvdyB0byByZXNwb25kLlxyXG4gICAgLy8gT25lIGFwcHJvYWNoIHdvdWxkIGJlIHRvIHVzZSByZXF1ZXN0LmRlc3RpbmF0aW9uLCBzZWVcclxuICAgIC8vIGh0dHBzOi8vbWVkaXVtLmNvbS9kZXYtY2hhbm5lbC9zZXJ2aWNlLXdvcmtlci1jYWNoaW5nLXN0cmF0ZWdpZXMtYmFzZWQtb24tcmVxdWVzdC10eXBlcy01NzQxMWRkNzY1MmNcclxuICAgIHN3aXRjaCAoZXZlbnQucmVxdWVzdC5kZXN0aW5hdGlvbikge1xyXG4gICAgICAgIGNhc2UgJ2RvY3VtZW50JzpcclxuICAgICAgICAgICAgLy8gSWYgdXNpbmcgcHJlY2FjaGVkIFVSTHM6XHJcbiAgICAgICAgICAgIHJldHVybiBtYXRjaFByZWNhY2hlKCcvZmFsbGJhY2snKTtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIGNhY2hlcy5tYXRjaCgnL2ZhbGxiYWNrJylcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgICAgICAvLyBJZiB1c2luZyBwcmVjYWNoZWQgVVJMczpcclxuICAgICAgICAgICAgcmV0dXJuIG1hdGNoUHJlY2FjaGUoJy9zdGF0aWMvaW1hZ2VzL2ZhbGxiYWNrLnBuZycpO1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gY2FjaGVzLm1hdGNoKCcvc3RhdGljL2ltYWdlcy9mYWxsYmFjay5wbmcnKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdmb250JzpcclxuICAgICAgICAgICAgLy8gSWYgdXNpbmcgcHJlY2FjaGVkIFVSTHM6XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBtYXRjaFByZWNhY2hlKEZBTExCQUNLX0ZPTlRfVVJMKTtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIGNhY2hlcy5tYXRjaCgnL3N0YXRpYy9mb250cy9mYWxsYmFjay5vdGYnKVxyXG4gICAgICAgICAgICAvLyBicmVha1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIC8vIElmIHdlIGRvbid0IGhhdmUgYSBmYWxsYmFjaywganVzdCByZXR1cm4gYW4gZXJyb3IgcmVzcG9uc2UuXHJcbiAgICAgICAgICAgIHJldHVybiBSZXNwb25zZS5lcnJvcigpO1xyXG4gICAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHsgdyBhcyB3cmFwLCByIGFzIHJlcGxhY2VUcmFwcyB9IGZyb20gJy4vd3JhcC1pZGItdmFsdWUuanMnO1xuZXhwb3J0IHsgdSBhcyB1bndyYXAsIHcgYXMgd3JhcCB9IGZyb20gJy4vd3JhcC1pZGItdmFsdWUuanMnO1xuXG4vKipcbiAqIE9wZW4gYSBkYXRhYmFzZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAqIEBwYXJhbSB2ZXJzaW9uIFNjaGVtYSB2ZXJzaW9uLlxuICogQHBhcmFtIGNhbGxiYWNrcyBBZGRpdGlvbmFsIGNhbGxiYWNrcy5cbiAqL1xuZnVuY3Rpb24gb3BlbkRCKG5hbWUsIHZlcnNpb24sIHsgYmxvY2tlZCwgdXBncmFkZSwgYmxvY2tpbmcsIHRlcm1pbmF0ZWQgfSA9IHt9KSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKG5hbWUsIHZlcnNpb24pO1xuICAgIGNvbnN0IG9wZW5Qcm9taXNlID0gd3JhcChyZXF1ZXN0KTtcbiAgICBpZiAodXBncmFkZSkge1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3VwZ3JhZGVuZWVkZWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHVwZ3JhZGUod3JhcChyZXF1ZXN0LnJlc3VsdCksIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIHdyYXAocmVxdWVzdC50cmFuc2FjdGlvbikpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJsb2NrZWQpXG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignYmxvY2tlZCcsICgpID0+IGJsb2NrZWQoKSk7XG4gICAgb3BlblByb21pc2VcbiAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgIGlmICh0ZXJtaW5hdGVkKVxuICAgICAgICAgICAgZGIuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoKSA9PiB0ZXJtaW5hdGVkKCkpO1xuICAgICAgICBpZiAoYmxvY2tpbmcpXG4gICAgICAgICAgICBkYi5hZGRFdmVudExpc3RlbmVyKCd2ZXJzaW9uY2hhbmdlJywgKCkgPT4gYmxvY2tpbmcoKSk7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgcmV0dXJuIG9wZW5Qcm9taXNlO1xufVxuLyoqXG4gKiBEZWxldGUgYSBkYXRhYmFzZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAqL1xuZnVuY3Rpb24gZGVsZXRlREIobmFtZSwgeyBibG9ja2VkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIuZGVsZXRlRGF0YWJhc2UobmFtZSk7XG4gICAgaWYgKGJsb2NrZWQpXG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignYmxvY2tlZCcsICgpID0+IGJsb2NrZWQoKSk7XG4gICAgcmV0dXJuIHdyYXAocmVxdWVzdCkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xufVxuXG5jb25zdCByZWFkTWV0aG9kcyA9IFsnZ2V0JywgJ2dldEtleScsICdnZXRBbGwnLCAnZ2V0QWxsS2V5cycsICdjb3VudCddO1xuY29uc3Qgd3JpdGVNZXRob2RzID0gWydwdXQnLCAnYWRkJywgJ2RlbGV0ZScsICdjbGVhciddO1xuY29uc3QgY2FjaGVkTWV0aG9kcyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHtcbiAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBJREJEYXRhYmFzZSAmJlxuICAgICAgICAhKHByb3AgaW4gdGFyZ2V0KSAmJlxuICAgICAgICB0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApKVxuICAgICAgICByZXR1cm4gY2FjaGVkTWV0aG9kcy5nZXQocHJvcCk7XG4gICAgY29uc3QgdGFyZ2V0RnVuY05hbWUgPSBwcm9wLnJlcGxhY2UoL0Zyb21JbmRleCQvLCAnJyk7XG4gICAgY29uc3QgdXNlSW5kZXggPSBwcm9wICE9PSB0YXJnZXRGdW5jTmFtZTtcbiAgICBjb25zdCBpc1dyaXRlID0gd3JpdGVNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKTtcbiAgICBpZiAoXG4gICAgLy8gQmFpbCBpZiB0aGUgdGFyZ2V0IGRvZXNuJ3QgZXhpc3Qgb24gdGhlIHRhcmdldC4gRWcsIGdldEFsbCBpc24ndCBpbiBFZGdlLlxuICAgICEodGFyZ2V0RnVuY05hbWUgaW4gKHVzZUluZGV4ID8gSURCSW5kZXggOiBJREJPYmplY3RTdG9yZSkucHJvdG90eXBlKSB8fFxuICAgICAgICAhKGlzV3JpdGUgfHwgcmVhZE1ldGhvZHMuaW5jbHVkZXModGFyZ2V0RnVuY05hbWUpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1ldGhvZCA9IGFzeW5jIGZ1bmN0aW9uIChzdG9yZU5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gaXNXcml0ZSA/ICdyZWFkd3JpdGUnIDogdW5kZWZpbmVkIGd6aXBwcyBiZXR0ZXIsIGJ1dCBmYWlscyBpbiBFZGdlIDooXG4gICAgICAgIGNvbnN0IHR4ID0gdGhpcy50cmFuc2FjdGlvbihzdG9yZU5hbWUsIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6ICdyZWFkb25seScpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdHguc3RvcmU7XG4gICAgICAgIGlmICh1c2VJbmRleClcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5pbmRleChhcmdzLnNoaWZ0KCkpO1xuICAgICAgICAvLyBNdXN0IHJlamVjdCBpZiBvcCByZWplY3RzLlxuICAgICAgICAvLyBJZiBpdCdzIGEgd3JpdGUgb3BlcmF0aW9uLCBtdXN0IHJlamVjdCBpZiB0eC5kb25lIHJlamVjdHMuXG4gICAgICAgIC8vIE11c3QgcmVqZWN0IHdpdGggb3AgcmVqZWN0aW9uIGZpcnN0LlxuICAgICAgICAvLyBNdXN0IHJlc29sdmUgd2l0aCBvcCB2YWx1ZS5cbiAgICAgICAgLy8gTXVzdCBoYW5kbGUgYm90aCBwcm9taXNlcyAobm8gdW5oYW5kbGVkIHJlamVjdGlvbnMpXG4gICAgICAgIHJldHVybiAoYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGFyZ2V0W3RhcmdldEZ1bmNOYW1lXSguLi5hcmdzKSxcbiAgICAgICAgICAgIGlzV3JpdGUgJiYgdHguZG9uZSxcbiAgICAgICAgXSkpWzBdO1xuICAgIH07XG4gICAgY2FjaGVkTWV0aG9kcy5zZXQocHJvcCwgbWV0aG9kKTtcbiAgICByZXR1cm4gbWV0aG9kO1xufVxucmVwbGFjZVRyYXBzKChvbGRUcmFwcykgPT4gKHtcbiAgICAuLi5vbGRUcmFwcyxcbiAgICBnZXQ6ICh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSA9PiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlciksXG4gICAgaGFzOiAodGFyZ2V0LCBwcm9wKSA9PiAhIWdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHx8IG9sZFRyYXBzLmhhcyh0YXJnZXQsIHByb3ApLFxufSkpO1xuXG5leHBvcnQgeyBkZWxldGVEQiwgb3BlbkRCIH07XG4iLCJjb25zdCBpbnN0YW5jZU9mQW55ID0gKG9iamVjdCwgY29uc3RydWN0b3JzKSA9PiBjb25zdHJ1Y3RvcnMuc29tZSgoYykgPT4gb2JqZWN0IGluc3RhbmNlb2YgYyk7XG5cbmxldCBpZGJQcm94eWFibGVUeXBlcztcbmxldCBjdXJzb3JBZHZhbmNlTWV0aG9kcztcbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0SWRiUHJveHlhYmxlVHlwZXMoKSB7XG4gICAgcmV0dXJuIChpZGJQcm94eWFibGVUeXBlcyB8fFxuICAgICAgICAoaWRiUHJveHlhYmxlVHlwZXMgPSBbXG4gICAgICAgICAgICBJREJEYXRhYmFzZSxcbiAgICAgICAgICAgIElEQk9iamVjdFN0b3JlLFxuICAgICAgICAgICAgSURCSW5kZXgsXG4gICAgICAgICAgICBJREJDdXJzb3IsXG4gICAgICAgICAgICBJREJUcmFuc2FjdGlvbixcbiAgICAgICAgXSkpO1xufVxuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpIHtcbiAgICByZXR1cm4gKGN1cnNvckFkdmFuY2VNZXRob2RzIHx8XG4gICAgICAgIChjdXJzb3JBZHZhbmNlTWV0aG9kcyA9IFtcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuYWR2YW5jZSxcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWUsXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlUHJpbWFyeUtleSxcbiAgICAgICAgXSkpO1xufVxuY29uc3QgY3Vyc29yUmVxdWVzdE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2FjdGlvbkRvbmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgICAgICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUod3JhcChyZXF1ZXN0LnJlc3VsdCkpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICB9KTtcbiAgICBwcm9taXNlXG4gICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICAvLyBTaW5jZSBjdXJzb3JpbmcgcmV1c2VzIHRoZSBJREJSZXF1ZXN0ICgqc2lnaCopLCB3ZSBjYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsXG4gICAgICAgIC8vIChzZWUgd3JhcEZ1bmN0aW9uKS5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCQ3Vyc29yKSB7XG4gICAgICAgICAgICBjdXJzb3JSZXF1ZXN0TWFwLnNldCh2YWx1ZSwgcmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2F0Y2hpbmcgdG8gYXZvaWQgXCJVbmNhdWdodCBQcm9taXNlIGV4Y2VwdGlvbnNcIlxuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIC8vIFRoaXMgbWFwcGluZyBleGlzdHMgaW4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlIGJ1dCBkb2Vzbid0IGRvZXNuJ3QgZXhpc3QgaW4gdHJhbnNmb3JtQ2FjaGUuIFRoaXNcbiAgICAvLyBpcyBiZWNhdXNlIHdlIGNyZWF0ZSBtYW55IHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdC5cbiAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KHByb21pc2UsIHJlcXVlc3QpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuZnVuY3Rpb24gY2FjaGVEb25lUHJvbWlzZUZvclRyYW5zYWN0aW9uKHR4KSB7XG4gICAgLy8gRWFybHkgYmFpbCBpZiB3ZSd2ZSBhbHJlYWR5IGNyZWF0ZWQgYSBkb25lIHByb21pc2UgZm9yIHRoaXMgdHJhbnNhY3Rpb24uXG4gICAgaWYgKHRyYW5zYWN0aW9uRG9uZU1hcC5oYXModHgpKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgZG9uZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QodHguZXJyb3IgfHwgbmV3IERPTUV4Y2VwdGlvbignQWJvcnRFcnJvcicsICdBYm9ydEVycm9yJykpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGVycm9yKTtcbiAgICB9KTtcbiAgICAvLyBDYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsLlxuICAgIHRyYW5zYWN0aW9uRG9uZU1hcC5zZXQodHgsIGRvbmUpO1xufVxubGV0IGlkYlByb3h5VHJhcHMgPSB7XG4gICAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciB0cmFuc2FjdGlvbi5kb25lLlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdkb25lJylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb25Eb25lTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgLy8gUG9seWZpbGwgZm9yIG9iamVjdFN0b3JlTmFtZXMgYmVjYXVzZSBvZiBFZGdlLlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdvYmplY3RTdG9yZU5hbWVzJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQub2JqZWN0U3RvcmVOYW1lcyB8fCB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHR4LnN0b3JlIHJldHVybiB0aGUgb25seSBzdG9yZSBpbiB0aGUgdHJhbnNhY3Rpb24sIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBhcmUgbWFueS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3RvcmUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgOiByZWNlaXZlci5vYmplY3RTdG9yZShyZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFbHNlIHRyYW5zZm9ybSB3aGF0ZXZlciB3ZSBnZXQgYmFjay5cbiAgICAgICAgcmV0dXJuIHdyYXAodGFyZ2V0W3Byb3BdKTtcbiAgICB9LFxuICAgIHNldCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uICYmXG4gICAgICAgICAgICAocHJvcCA9PT0gJ2RvbmUnIHx8IHByb3AgPT09ICdzdG9yZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQ7XG4gICAgfSxcbn07XG5mdW5jdGlvbiByZXBsYWNlVHJhcHMoY2FsbGJhY2spIHtcbiAgICBpZGJQcm94eVRyYXBzID0gY2FsbGJhY2soaWRiUHJveHlUcmFwcyk7XG59XG5mdW5jdGlvbiB3cmFwRnVuY3Rpb24oZnVuYykge1xuICAgIC8vIER1ZSB0byBleHBlY3RlZCBvYmplY3QgZXF1YWxpdHkgKHdoaWNoIGlzIGVuZm9yY2VkIGJ5IHRoZSBjYWNoaW5nIGluIGB3cmFwYCksIHdlXG4gICAgLy8gb25seSBjcmVhdGUgb25lIG5ldyBmdW5jIHBlciBmdW5jLlxuICAgIC8vIEVkZ2UgZG9lc24ndCBzdXBwb3J0IG9iamVjdFN0b3JlTmFtZXMgKGJvb28pLCBzbyB3ZSBwb2x5ZmlsbCBpdCBoZXJlLlxuICAgIGlmIChmdW5jID09PSBJREJEYXRhYmFzZS5wcm90b3R5cGUudHJhbnNhY3Rpb24gJiZcbiAgICAgICAgISgnb2JqZWN0U3RvcmVOYW1lcycgaW4gSURCVHJhbnNhY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHN0b3JlTmFtZXMsIC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHR4ID0gZnVuYy5jYWxsKHVud3JhcCh0aGlzKSwgc3RvcmVOYW1lcywgLi4uYXJncyk7XG4gICAgICAgICAgICB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAuc2V0KHR4LCBzdG9yZU5hbWVzLnNvcnQgPyBzdG9yZU5hbWVzLnNvcnQoKSA6IFtzdG9yZU5hbWVzXSk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcCh0eCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIEN1cnNvciBtZXRob2RzIGFyZSBzcGVjaWFsLCBhcyB0aGUgYmVoYXZpb3VyIGlzIGEgbGl0dGxlIG1vcmUgZGlmZmVyZW50IHRvIHN0YW5kYXJkIElEQi4gSW5cbiAgICAvLyBJREIsIHlvdSBhZHZhbmNlIHRoZSBjdXJzb3IgYW5kIHdhaXQgZm9yIGEgbmV3ICdzdWNjZXNzJyBvbiB0aGUgSURCUmVxdWVzdCB0aGF0IGdhdmUgeW91IHRoZVxuICAgIC8vIGN1cnNvci4gSXQncyBraW5kYSBsaWtlIGEgcHJvbWlzZSB0aGF0IGNhbiByZXNvbHZlIHdpdGggbWFueSB2YWx1ZXMuIFRoYXQgZG9lc24ndCBtYWtlIHNlbnNlXG4gICAgLy8gd2l0aCByZWFsIHByb21pc2VzLCBzbyBlYWNoIGFkdmFuY2UgbWV0aG9kcyByZXR1cm5zIGEgbmV3IHByb21pc2UgZm9yIHRoZSBjdXJzb3Igb2JqZWN0LCBvclxuICAgIC8vIHVuZGVmaW5lZCBpZiB0aGUgZW5kIG9mIHRoZSBjdXJzb3IgaGFzIGJlZW4gcmVhY2hlZC5cbiAgICBpZiAoZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKS5pbmNsdWRlcyhmdW5jKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAgICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgICAgICBmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcChjdXJzb3JSZXF1ZXN0TWFwLmdldCh0aGlzKSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm94eSBhcyAndGhpcycgY2F1c2VzIElMTEVHQUwgSU5WT0NBVElPTiwgc28gd2UgdXNlXG4gICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgIHJldHVybiB3cmFwKGZ1bmMuYXBwbHkodW53cmFwKHRoaXMpLCBhcmdzKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKVxuICAgICAgICByZXR1cm4gd3JhcEZ1bmN0aW9uKHZhbHVlKTtcbiAgICAvLyBUaGlzIGRvZXNuJ3QgcmV0dXJuLCBpdCBqdXN0IGNyZWF0ZXMgYSAnZG9uZScgcHJvbWlzZSBmb3IgdGhlIHRyYW5zYWN0aW9uLFxuICAgIC8vIHdoaWNoIGlzIGxhdGVyIHJldHVybmVkIGZvciB0cmFuc2FjdGlvbi5kb25lIChzZWUgaWRiT2JqZWN0SGFuZGxlcikuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pXG4gICAgICAgIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih2YWx1ZSk7XG4gICAgaWYgKGluc3RhbmNlT2ZBbnkodmFsdWUsIGdldElkYlByb3h5YWJsZVR5cGVzKCkpKVxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHZhbHVlLCBpZGJQcm94eVRyYXBzKTtcbiAgICAvLyBSZXR1cm4gdGhlIHNhbWUgdmFsdWUgYmFjayBpZiB3ZSdyZSBub3QgZ29pbmcgdG8gdHJhbnNmb3JtIGl0LlxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHdyYXAodmFsdWUpIHtcbiAgICAvLyBXZSBzb21ldGltZXMgZ2VuZXJhdGUgbXVsdGlwbGUgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0IChlZyB3aGVuIGN1cnNvcmluZyksIGJlY2F1c2VcbiAgICAvLyBJREIgaXMgd2VpcmQgYW5kIGEgc2luZ2xlIElEQlJlcXVlc3QgY2FuIHlpZWxkIG1hbnkgcmVzcG9uc2VzLCBzbyB0aGVzZSBjYW4ndCBiZSBjYWNoZWQuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCUmVxdWVzdClcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3QodmFsdWUpO1xuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgdHJhbnNmb3JtZWQgdGhpcyB2YWx1ZSBiZWZvcmUsIHJldXNlIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZS5cbiAgICAvLyBUaGlzIGlzIGZhc3RlciwgYnV0IGl0IGFsc28gcHJvdmlkZXMgb2JqZWN0IGVxdWFsaXR5LlxuICAgIGlmICh0cmFuc2Zvcm1DYWNoZS5oYXModmFsdWUpKVxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWUpO1xuICAgIC8vIE5vdCBhbGwgdHlwZXMgYXJlIHRyYW5zZm9ybWVkLlxuICAgIC8vIFRoZXNlIG1heSBiZSBwcmltaXRpdmUgdHlwZXMsIHNvIHRoZXkgY2FuJ3QgYmUgV2Vha01hcCBrZXlzLlxuICAgIGlmIChuZXdWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdHJhbnNmb3JtQ2FjaGUuc2V0KHZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQobmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuY29uc3QgdW53cmFwID0gKHZhbHVlKSA9PiByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcblxuZXhwb3J0IHsgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlIGFzIGEsIGluc3RhbmNlT2ZBbnkgYXMgaSwgcmVwbGFjZVRyYXBzIGFzIHIsIHVud3JhcCBhcyB1LCB3cmFwIGFzIHcgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbi8vIFdlIGVpdGhlciBleHBvc2UgZGVmYXVsdHMgb3Igd2UgZXhwb3NlIGV2ZXJ5IG5hbWVkIGV4cG9ydC5cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJy4vX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGNhY2hlTmFtZXMgfSBmcm9tICcuL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHsgY2FjaGVNYXRjaElnbm9yZVBhcmFtcyB9IGZyb20gJy4vX3ByaXZhdGUvY2FjaGVNYXRjaElnbm9yZVBhcmFtcy5qcyc7XG5pbXBvcnQgeyBjYW5Db25zdHJ1Y3RSZWFkYWJsZVN0cmVhbSB9IGZyb20gJy4vX3ByaXZhdGUvY2FuQ29uc3RydWN0UmVhZGFibGVTdHJlYW0uanMnO1xuaW1wb3J0IHsgY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbSB9IGZyb20gJy4vX3ByaXZhdGUvY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbS5qcyc7XG5pbXBvcnQgeyBkb250V2FpdEZvciB9IGZyb20gJy4vX3ByaXZhdGUvZG9udFdhaXRGb3IuanMnO1xuaW1wb3J0IHsgRGVmZXJyZWQgfSBmcm9tICcuL19wcml2YXRlL0RlZmVycmVkLmpzJztcbmltcG9ydCB7IGV4ZWN1dGVRdW90YUVycm9yQ2FsbGJhY2tzIH0gZnJvbSAnLi9fcHJpdmF0ZS9leGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcy5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJy4vX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgcmVzdWx0aW5nQ2xpZW50RXhpc3RzIH0gZnJvbSAnLi9fcHJpdmF0ZS9yZXN1bHRpbmdDbGllbnRFeGlzdHMuanMnO1xuaW1wb3J0IHsgdGltZW91dCB9IGZyb20gJy4vX3ByaXZhdGUvdGltZW91dC5qcyc7XG5pbXBvcnQgeyB3YWl0VW50aWwgfSBmcm9tICcuL19wcml2YXRlL3dhaXRVbnRpbC5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICcuL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuZXhwb3J0IHsgYXNzZXJ0LCBjYWNoZU1hdGNoSWdub3JlUGFyYW1zLCBjYWNoZU5hbWVzLCBjYW5Db25zdHJ1Y3RSZWFkYWJsZVN0cmVhbSwgY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbSwgZG9udFdhaXRGb3IsIERlZmVycmVkLCBleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcywgZ2V0RnJpZW5kbHlVUkwsIGxvZ2dlciwgcmVzdWx0aW5nQ2xpZW50RXhpc3RzLCB0aW1lb3V0LCB3YWl0VW50aWwsIFdvcmtib3hFcnJvciwgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBUaGUgRGVmZXJyZWQgY2xhc3MgY29tcG9zZXMgUHJvbWlzZXMgaW4gYSB3YXkgdGhhdCBhbGxvd3MgZm9yIHRoZW0gdG8gYmVcbiAqIHJlc29sdmVkIG9yIHJlamVjdGVkIGZyb20gb3V0c2lkZSB0aGUgY29uc3RydWN0b3IuIEluIG1vc3QgY2FzZXMgcHJvbWlzZXNcbiAqIHNob3VsZCBiZSB1c2VkIGRpcmVjdGx5LCBidXQgRGVmZXJyZWRzIGNhbiBiZSBuZWNlc3Nhcnkgd2hlbiB0aGUgbG9naWMgdG9cbiAqIHJlc29sdmUgYSBwcm9taXNlIG11c3QgYmUgc2VwYXJhdGUuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgRGVmZXJyZWQge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBwcm9taXNlIGFuZCBleHBvc2VzIGl0cyByZXNvbHZlIGFuZCByZWplY3QgZnVuY3Rpb25zIGFzIG1ldGhvZHMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IHsgRGVmZXJyZWQgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IG1lc3NhZ2VHZW5lcmF0b3IgfSBmcm9tICcuLi9tb2RlbHMvbWVzc2FnZXMvbWVzc2FnZUdlbmVyYXRvci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogV29ya2JveCBlcnJvcnMgc2hvdWxkIGJlIHRocm93biB3aXRoIHRoaXMgY2xhc3MuXG4gKiBUaGlzIGFsbG93cyB1c2UgdG8gZW5zdXJlIHRoZSB0eXBlIGVhc2lseSBpbiB0ZXN0cyxcbiAqIGhlbHBzIGRldmVsb3BlcnMgaWRlbnRpZnkgZXJyb3JzIGZyb20gd29ya2JveFxuICogZWFzaWx5IGFuZCBhbGxvd3MgdXNlIHRvIG9wdGltaXNlIGVycm9yXG4gKiBtZXNzYWdlcyBjb3JyZWN0bHkuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgV29ya2JveEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVycm9yQ29kZSBUaGUgZXJyb3IgY29kZSB0aGF0XG4gICAgICogaWRlbnRpZmllcyB0aGlzIHBhcnRpY3VsYXIgZXJyb3IuXG4gICAgICogQHBhcmFtIHtPYmplY3Q9fSBkZXRhaWxzIEFueSByZWxldmFudCBhcmd1bWVudHNcbiAgICAgKiB0aGF0IHdpbGwgaGVscCBkZXZlbG9wZXJzIGlkZW50aWZ5IGlzc3VlcyBzaG91bGRcbiAgICAgKiBiZSBhZGRlZCBhcyBhIGtleSBvbiB0aGUgY29udGV4dCBvYmplY3QuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZXJyb3JDb2RlLCBkZXRhaWxzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBtZXNzYWdlR2VuZXJhdG9yKGVycm9yQ29kZSwgZGV0YWlscyk7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSBlcnJvckNvZGU7XG4gICAgICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG4gICAgfVxufVxuZXhwb3J0IHsgV29ya2JveEVycm9yIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICcuLi9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKlxuICogVGhpcyBtZXRob2QgdGhyb3dzIGlmIHRoZSBzdXBwbGllZCB2YWx1ZSBpcyBub3QgYW4gYXJyYXkuXG4gKiBUaGUgZGVzdHJ1Y3RlZCB2YWx1ZXMgYXJlIHJlcXVpcmVkIHRvIHByb2R1Y2UgYSBtZWFuaW5nZnVsIGVycm9yIGZvciB1c2Vycy5cbiAqIFRoZSBkZXN0cnVjdGVkIGFuZCByZXN0cnVjdHVyZWQgb2JqZWN0IGlzIHNvIGl0J3MgY2xlYXIgd2hhdCBpc1xuICogbmVlZGVkLlxuICovXG5jb25zdCBpc0FycmF5ID0gKHZhbHVlLCBkZXRhaWxzKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdub3QtYW4tYXJyYXknLCBkZXRhaWxzKTtcbiAgICB9XG59O1xuY29uc3QgaGFzTWV0aG9kID0gKG9iamVjdCwgZXhwZWN0ZWRNZXRob2QsIGRldGFpbHMpID0+IHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIG9iamVjdFtleHBlY3RlZE1ldGhvZF07XG4gICAgaWYgKHR5cGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZGV0YWlsc1snZXhwZWN0ZWRNZXRob2QnXSA9IGV4cGVjdGVkTWV0aG9kO1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdtaXNzaW5nLWEtbWV0aG9kJywgZGV0YWlscyk7XG4gICAgfVxufTtcbmNvbnN0IGlzVHlwZSA9IChvYmplY3QsIGV4cGVjdGVkVHlwZSwgZGV0YWlscykgPT4ge1xuICAgIGlmICh0eXBlb2Ygb2JqZWN0ICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgZGV0YWlsc1snZXhwZWN0ZWRUeXBlJ10gPSBleHBlY3RlZFR5cGU7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2luY29ycmVjdC10eXBlJywgZGV0YWlscyk7XG4gICAgfVxufTtcbmNvbnN0IGlzSW5zdGFuY2UgPSAob2JqZWN0LCBcbi8vIE5lZWQgdGhlIGdlbmVyYWwgdHlwZSB0byBkbyB0aGUgY2hlY2sgbGF0ZXIuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuZXhwZWN0ZWRDbGFzcywgZGV0YWlscykgPT4ge1xuICAgIGlmICghKG9iamVjdCBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIGRldGFpbHNbJ2V4cGVjdGVkQ2xhc3NOYW1lJ10gPSBleHBlY3RlZENsYXNzLm5hbWU7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2luY29ycmVjdC1jbGFzcycsIGRldGFpbHMpO1xuICAgIH1cbn07XG5jb25zdCBpc09uZU9mID0gKHZhbHVlLCB2YWxpZFZhbHVlcywgZGV0YWlscykgPT4ge1xuICAgIGlmICghdmFsaWRWYWx1ZXMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICAgIGRldGFpbHNbJ3ZhbGlkVmFsdWVEZXNjcmlwdGlvbiddID1cbiAgICAgICAgICAgIGBWYWxpZCB2YWx1ZXMgYXJlICR7SlNPTi5zdHJpbmdpZnkodmFsaWRWYWx1ZXMpfS5gO1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbnZhbGlkLXZhbHVlJywgZGV0YWlscyk7XG4gICAgfVxufTtcbmNvbnN0IGlzQXJyYXlPZkNsYXNzID0gKHZhbHVlLCBcbi8vIE5lZWQgZ2VuZXJhbCB0eXBlIHRvIGRvIGNoZWNrIGxhdGVyLlxuZXhwZWN0ZWRDbGFzcywgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuZGV0YWlscykgPT4ge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IFdvcmtib3hFcnJvcignbm90LWFycmF5LW9mLWNsYXNzJywgZGV0YWlscyk7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICAgIGlmICghKGl0ZW0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgZmluYWxBc3NlcnRFeHBvcnRzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IG51bGwgOiB7XG4gICAgaGFzTWV0aG9kLFxuICAgIGlzQXJyYXksXG4gICAgaXNJbnN0YW5jZSxcbiAgICBpc09uZU9mLFxuICAgIGlzVHlwZSxcbiAgICBpc0FycmF5T2ZDbGFzcyxcbn07XG5leHBvcnQgeyBmaW5hbEFzc2VydEV4cG9ydHMgYXMgYXNzZXJ0IH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5mdW5jdGlvbiBzdHJpcFBhcmFtcyhmdWxsVVJMLCBpZ25vcmVQYXJhbXMpIHtcbiAgICBjb25zdCBzdHJpcHBlZFVSTCA9IG5ldyBVUkwoZnVsbFVSTCk7XG4gICAgZm9yIChjb25zdCBwYXJhbSBvZiBpZ25vcmVQYXJhbXMpIHtcbiAgICAgICAgc3RyaXBwZWRVUkwuc2VhcmNoUGFyYW1zLmRlbGV0ZShwYXJhbSk7XG4gICAgfVxuICAgIHJldHVybiBzdHJpcHBlZFVSTC5ocmVmO1xufVxuLyoqXG4gKiBNYXRjaGVzIGFuIGl0ZW0gaW4gdGhlIGNhY2hlLCBpZ25vcmluZyBzcGVjaWZpYyBVUkwgcGFyYW1zLiBUaGlzIGlzIHNpbWlsYXJcbiAqIHRvIHRoZSBgaWdub3JlU2VhcmNoYCBvcHRpb24sIGJ1dCBpdCBhbGxvd3MgeW91IHRvIGlnbm9yZSBqdXN0IHNwZWNpZmljXG4gKiBwYXJhbXMgKHdoaWxlIGNvbnRpbnVpbmcgdG8gbWF0Y2ggb24gdGhlIG90aGVycykuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Q2FjaGV9IGNhY2hlXG4gKiBAcGFyYW0ge1JlcXVlc3R9IHJlcXVlc3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXRjaE9wdGlvbnNcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gaWdub3JlUGFyYW1zXG4gKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlfHVuZGVmaW5lZD59XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNhY2hlTWF0Y2hJZ25vcmVQYXJhbXMoY2FjaGUsIHJlcXVlc3QsIGlnbm9yZVBhcmFtcywgbWF0Y2hPcHRpb25zKSB7XG4gICAgY29uc3Qgc3RyaXBwZWRSZXF1ZXN0VVJMID0gc3RyaXBQYXJhbXMocmVxdWVzdC51cmwsIGlnbm9yZVBhcmFtcyk7XG4gICAgLy8gSWYgdGhlIHJlcXVlc3QgZG9lc24ndCBpbmNsdWRlIGFueSBpZ25vcmVkIHBhcmFtcywgbWF0Y2ggYXMgbm9ybWFsLlxuICAgIGlmIChyZXF1ZXN0LnVybCA9PT0gc3RyaXBwZWRSZXF1ZXN0VVJMKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5tYXRjaChyZXF1ZXN0LCBtYXRjaE9wdGlvbnMpO1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIG1hdGNoIGJ5IGNvbXBhcmluZyBrZXlzXG4gICAgY29uc3Qga2V5c09wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG1hdGNoT3B0aW9ucyksIHsgaWdub3JlU2VhcmNoOiB0cnVlIH0pO1xuICAgIGNvbnN0IGNhY2hlS2V5cyA9IGF3YWl0IGNhY2hlLmtleXMocmVxdWVzdCwga2V5c09wdGlvbnMpO1xuICAgIGZvciAoY29uc3QgY2FjaGVLZXkgb2YgY2FjaGVLZXlzKSB7XG4gICAgICAgIGNvbnN0IHN0cmlwcGVkQ2FjaGVLZXlVUkwgPSBzdHJpcFBhcmFtcyhjYWNoZUtleS51cmwsIGlnbm9yZVBhcmFtcyk7XG4gICAgICAgIGlmIChzdHJpcHBlZFJlcXVlc3RVUkwgPT09IHN0cmlwcGVkQ2FjaGVLZXlVUkwpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZS5tYXRjaChjYWNoZUtleSwgbWF0Y2hPcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG59XG5leHBvcnQgeyBjYWNoZU1hdGNoSWdub3JlUGFyYW1zIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmNvbnN0IF9jYWNoZU5hbWVEZXRhaWxzID0ge1xuICAgIGdvb2dsZUFuYWx5dGljczogJ2dvb2dsZUFuYWx5dGljcycsXG4gICAgcHJlY2FjaGU6ICdwcmVjYWNoZS12MicsXG4gICAgcHJlZml4OiAnd29ya2JveCcsXG4gICAgcnVudGltZTogJ3J1bnRpbWUnLFxuICAgIHN1ZmZpeDogdHlwZW9mIHJlZ2lzdHJhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgPyByZWdpc3RyYXRpb24uc2NvcGUgOiAnJyxcbn07XG5jb25zdCBfY3JlYXRlQ2FjaGVOYW1lID0gKGNhY2hlTmFtZSkgPT4ge1xuICAgIHJldHVybiBbX2NhY2hlTmFtZURldGFpbHMucHJlZml4LCBjYWNoZU5hbWUsIF9jYWNoZU5hbWVEZXRhaWxzLnN1ZmZpeF1cbiAgICAgICAgLmZpbHRlcigodmFsdWUpID0+IHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDApXG4gICAgICAgIC5qb2luKCctJyk7XG59O1xuY29uc3QgZWFjaENhY2hlTmFtZURldGFpbCA9IChmbikgPT4ge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKF9jYWNoZU5hbWVEZXRhaWxzKSkge1xuICAgICAgICBmbihrZXkpO1xuICAgIH1cbn07XG5leHBvcnQgY29uc3QgY2FjaGVOYW1lcyA9IHtcbiAgICB1cGRhdGVEZXRhaWxzOiAoZGV0YWlscykgPT4ge1xuICAgICAgICBlYWNoQ2FjaGVOYW1lRGV0YWlsKChrZXkpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGV0YWlsc1trZXldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIF9jYWNoZU5hbWVEZXRhaWxzW2tleV0gPSBkZXRhaWxzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZ2V0R29vZ2xlQW5hbHl0aWNzTmFtZTogKHVzZXJDYWNoZU5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHVzZXJDYWNoZU5hbWUgfHwgX2NyZWF0ZUNhY2hlTmFtZShfY2FjaGVOYW1lRGV0YWlscy5nb29nbGVBbmFseXRpY3MpO1xuICAgIH0sXG4gICAgZ2V0UHJlY2FjaGVOYW1lOiAodXNlckNhY2hlTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gdXNlckNhY2hlTmFtZSB8fCBfY3JlYXRlQ2FjaGVOYW1lKF9jYWNoZU5hbWVEZXRhaWxzLnByZWNhY2hlKTtcbiAgICB9LFxuICAgIGdldFByZWZpeDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gX2NhY2hlTmFtZURldGFpbHMucHJlZml4O1xuICAgIH0sXG4gICAgZ2V0UnVudGltZU5hbWU6ICh1c2VyQ2FjaGVOYW1lKSA9PiB7XG4gICAgICAgIHJldHVybiB1c2VyQ2FjaGVOYW1lIHx8IF9jcmVhdGVDYWNoZU5hbWUoX2NhY2hlTmFtZURldGFpbHMucnVudGltZSk7XG4gICAgfSxcbiAgICBnZXRTdWZmaXg6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIF9jYWNoZU5hbWVEZXRhaWxzLnN1ZmZpeDtcbiAgICB9LFxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xubGV0IHN1cHBvcnRTdGF0dXM7XG4vKipcbiAqIEEgdXRpbGl0eSBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzXG4gKiBjb25zdHJ1Y3RpbmcgYSBbYFJlYWRhYmxlU3RyZWFtYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1JlYWRhYmxlU3RyZWFtL1JlYWRhYmxlU3RyZWFtKVxuICogb2JqZWN0LlxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59IGB0cnVlYCwgaWYgdGhlIGN1cnJlbnQgYnJvd3NlciBjYW4gc3VjY2Vzc2Z1bGx5XG4gKiAgICAgY29uc3RydWN0IGEgYFJlYWRhYmxlU3RyZWFtYCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2FuQ29uc3RydWN0UmVhZGFibGVTdHJlYW0oKSB7XG4gICAgaWYgKHN1cHBvcnRTdGF0dXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNDczXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXcgUmVhZGFibGVTdHJlYW0oeyBzdGFydCgpIHsgfSB9KTtcbiAgICAgICAgICAgIHN1cHBvcnRTdGF0dXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc3VwcG9ydFN0YXR1cyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0U3RhdHVzO1xufVxuZXhwb3J0IHsgY2FuQ29uc3RydWN0UmVhZGFibGVTdHJlYW0gfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xubGV0IHN1cHBvcnRTdGF0dXM7XG4vKipcbiAqIEEgdXRpbGl0eSBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzXG4gKiBjb25zdHJ1Y3RpbmcgYSBuZXcgYFJlc3BvbnNlYCBmcm9tIGEgYHJlc3BvbnNlLmJvZHlgIHN0cmVhbS5cbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAsIGlmIHRoZSBjdXJyZW50IGJyb3dzZXIgY2FuIHN1Y2Nlc3NmdWxseVxuICogICAgIGNvbnN0cnVjdCBhIGBSZXNwb25zZWAgZnJvbSBhIGByZXNwb25zZS5ib2R5YCBzdHJlYW0sIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNhbkNvbnN0cnVjdFJlc3BvbnNlRnJvbUJvZHlTdHJlYW0oKSB7XG4gICAgaWYgKHN1cHBvcnRTdGF0dXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCB0ZXN0UmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoJycpO1xuICAgICAgICBpZiAoJ2JvZHknIGluIHRlc3RSZXNwb25zZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBuZXcgUmVzcG9uc2UodGVzdFJlc3BvbnNlLmJvZHkpO1xuICAgICAgICAgICAgICAgIHN1cHBvcnRTdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgc3VwcG9ydFN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1cHBvcnRTdGF0dXMgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRTdGF0dXM7XG59XG5leHBvcnQgeyBjYW5Db25zdHJ1Y3RSZXNwb25zZUZyb21Cb2R5U3RyZWFtIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEEgaGVscGVyIGZ1bmN0aW9uIHRoYXQgcHJldmVudHMgYSBwcm9taXNlIGZyb20gYmVpbmcgZmxhZ2dlZCBhcyB1bnVzZWQuXG4gKlxuICogQHByaXZhdGVcbiAqKi9cbmV4cG9ydCBmdW5jdGlvbiBkb250V2FpdEZvcihwcm9taXNlKSB7XG4gICAgLy8gRWZmZWN0aXZlIG5vLW9wLlxuICAgIHZvaWQgcHJvbWlzZS50aGVuKCgpID0+IHsgfSk7XG59XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICcuLi9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgcXVvdGFFcnJvckNhbGxiYWNrcyB9IGZyb20gJy4uL21vZGVscy9xdW90YUVycm9yQ2FsbGJhY2tzLmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBSdW5zIGFsbCBvZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb25zLCBvbmUgYXQgYSB0aW1lIHNlcXVlbnRpYWxseSwgaW4gdGhlIG9yZGVyXG4gKiBpbiB3aGljaCB0aGV5IHdlcmUgcmVnaXN0ZXJlZC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtY29yZVxuICogQHByaXZhdGVcbiAqL1xuYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyhgQWJvdXQgdG8gcnVuICR7cXVvdGFFcnJvckNhbGxiYWNrcy5zaXplfSBgICtcbiAgICAgICAgICAgIGBjYWxsYmFja3MgdG8gY2xlYW4gdXAgY2FjaGVzLmApO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHF1b3RhRXJyb3JDYWxsYmFja3MpIHtcbiAgICAgICAgYXdhaXQgY2FsbGJhY2soKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5sb2coY2FsbGJhY2ssICdpcyBjb21wbGV0ZS4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBsb2dnZXIubG9nKCdGaW5pc2hlZCBydW5uaW5nIGNhbGxiYWNrcy4nKTtcbiAgICB9XG59XG5leHBvcnQgeyBleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBnZXRGcmllbmRseVVSTCA9ICh1cmwpID0+IHtcbiAgICBjb25zdCB1cmxPYmogPSBuZXcgVVJMKFN0cmluZyh1cmwpLCBsb2NhdGlvbi5ocmVmKTtcbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yMzIzXG4gICAgLy8gV2Ugd2FudCB0byBpbmNsdWRlIGV2ZXJ5dGhpbmcsIGV4Y2VwdCBmb3IgdGhlIG9yaWdpbiBpZiBpdCdzIHNhbWUtb3JpZ2luLlxuICAgIHJldHVybiB1cmxPYmouaHJlZi5yZXBsYWNlKG5ldyBSZWdFeHAoYF4ke2xvY2F0aW9uLm9yaWdpbn1gKSwgJycpO1xufTtcbmV4cG9ydCB7IGdldEZyaWVuZGx5VVJMIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBsb2dnZXIgPSAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IG51bGwgOiAoKCkgPT4ge1xuICAgIC8vIERvbid0IG92ZXJ3cml0ZSB0aGlzIHZhbHVlIGlmIGl0J3MgYWxyZWFkeSBzZXQuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9wdWxsLzIyODQjaXNzdWVjb21tZW50LTU2MDQ3MDkyM1xuICAgIGlmICghKCdfX1dCX0RJU0FCTEVfREVWX0xPR1MnIGluIHNlbGYpKSB7XG4gICAgICAgIHNlbGYuX19XQl9ESVNBQkxFX0RFVl9MT0dTID0gZmFsc2U7XG4gICAgfVxuICAgIGxldCBpbkdyb3VwID0gZmFsc2U7XG4gICAgY29uc3QgbWV0aG9kVG9Db2xvck1hcCA9IHtcbiAgICAgICAgZGVidWc6IGAjN2Y4YzhkYCxcbiAgICAgICAgbG9nOiBgIzJlY2M3MWAsXG4gICAgICAgIHdhcm46IGAjZjM5YzEyYCxcbiAgICAgICAgZXJyb3I6IGAjYzAzOTJiYCxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IGAjMzQ5OGRiYCxcbiAgICAgICAgZ3JvdXBFbmQ6IG51bGwsXG4gICAgfTtcbiAgICBjb25zdCBwcmludCA9IGZ1bmN0aW9uIChtZXRob2QsIGFyZ3MpIHtcbiAgICAgICAgaWYgKHNlbGYuX19XQl9ESVNBQkxFX0RFVl9MT0dTKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ2dyb3VwQ29sbGFwc2VkJykge1xuICAgICAgICAgICAgLy8gU2FmYXJpIGRvZXNuJ3QgcHJpbnQgYWxsIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoKSBhcmd1bWVudHM6XG4gICAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTgyNzU0XG4gICAgICAgICAgICBpZiAoL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGVbbWV0aG9kXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3R5bGVzID0gW1xuICAgICAgICAgICAgYGJhY2tncm91bmQ6ICR7bWV0aG9kVG9Db2xvck1hcFttZXRob2RdfWAsXG4gICAgICAgICAgICBgYm9yZGVyLXJhZGl1czogMC41ZW1gLFxuICAgICAgICAgICAgYGNvbG9yOiB3aGl0ZWAsXG4gICAgICAgICAgICBgZm9udC13ZWlnaHQ6IGJvbGRgLFxuICAgICAgICAgICAgYHBhZGRpbmc6IDJweCAwLjVlbWAsXG4gICAgICAgIF07XG4gICAgICAgIC8vIFdoZW4gaW4gYSBncm91cCwgdGhlIHdvcmtib3ggcHJlZml4IGlzIG5vdCBkaXNwbGF5ZWQuXG4gICAgICAgIGNvbnN0IGxvZ1ByZWZpeCA9IGluR3JvdXAgPyBbXSA6IFsnJWN3b3JrYm94Jywgc3R5bGVzLmpvaW4oJzsnKV07XG4gICAgICAgIGNvbnNvbGVbbWV0aG9kXSguLi5sb2dQcmVmaXgsIC4uLmFyZ3MpO1xuICAgICAgICBpZiAobWV0aG9kID09PSAnZ3JvdXBDb2xsYXBzZWQnKSB7XG4gICAgICAgICAgICBpbkdyb3VwID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kID09PSAnZ3JvdXBFbmQnKSB7XG4gICAgICAgICAgICBpbkdyb3VwID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG4gICAgY29uc3QgYXBpID0ge307XG4gICAgY29uc3QgbG9nZ2VyTWV0aG9kcyA9IE9iamVjdC5rZXlzKG1ldGhvZFRvQ29sb3JNYXApO1xuICAgIGZvciAoY29uc3Qga2V5IG9mIGxvZ2dlck1ldGhvZHMpIHtcbiAgICAgICAgY29uc3QgbWV0aG9kID0ga2V5O1xuICAgICAgICBhcGlbbWV0aG9kXSA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICBwcmludChtZXRob2QsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gYXBpO1xufSkoKSk7XG5leHBvcnQgeyBsb2dnZXIgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyB0aW1lb3V0IH0gZnJvbSAnLi90aW1lb3V0LmpzJztcbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuY29uc3QgTUFYX1JFVFJZX1RJTUUgPSAyMDAwO1xuLyoqXG4gKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGEgd2luZG93IGNsaWVudCBtYXRjaGluZyB0aGUgcGFzc2VkXG4gKiBgcmVzdWx0aW5nQ2xpZW50SWRgLiBGb3IgYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IGByZXN1bHRpbmdDbGllbnRJZGBcbiAqIG9yIGlmIHdhaXRpbmcgZm9yIHRoZSByZXN1bHRpbmcgY2xpZW50IHRvIGFwcGVyIHRha2VzIHRvbyBsb25nLCByZXNvbHZlIHRvXG4gKiBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3Jlc3VsdGluZ0NsaWVudElkXVxuICogQHJldHVybiB7UHJvbWlzZTxDbGllbnR8dW5kZWZpbmVkPn1cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXN1bHRpbmdDbGllbnRFeGlzdHMocmVzdWx0aW5nQ2xpZW50SWQpIHtcbiAgICBpZiAoIXJlc3VsdGluZ0NsaWVudElkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGV4aXN0aW5nV2luZG93cyA9IGF3YWl0IHNlbGYuY2xpZW50cy5tYXRjaEFsbCh7IHR5cGU6ICd3aW5kb3cnIH0pO1xuICAgIGNvbnN0IGV4aXN0aW5nV2luZG93SWRzID0gbmV3IFNldChleGlzdGluZ1dpbmRvd3MubWFwKCh3KSA9PiB3LmlkKSk7XG4gICAgbGV0IHJlc3VsdGluZ1dpbmRvdztcbiAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAvLyBPbmx5IHdhaXQgdXAgdG8gYE1BWF9SRVRSWV9USU1FYCB0byBmaW5kIGEgbWF0Y2hpbmcgY2xpZW50LlxuICAgIHdoaWxlIChwZXJmb3JtYW5jZS5ub3coKSAtIHN0YXJ0VGltZSA8IE1BWF9SRVRSWV9USU1FKSB7XG4gICAgICAgIGV4aXN0aW5nV2luZG93cyA9IGF3YWl0IHNlbGYuY2xpZW50cy5tYXRjaEFsbCh7IHR5cGU6ICd3aW5kb3cnIH0pO1xuICAgICAgICByZXN1bHRpbmdXaW5kb3cgPSBleGlzdGluZ1dpbmRvd3MuZmluZCgodykgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3VsdGluZ0NsaWVudElkKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIGByZXN1bHRpbmdDbGllbnRJZGAsIHdlIGNhbiBtYXRjaCBvbiB0aGF0LlxuICAgICAgICAgICAgICAgIHJldHVybiB3LmlkID09PSByZXN1bHRpbmdDbGllbnRJZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSBtYXRjaCBvbiBmaW5kaW5nIGEgd2luZG93IG5vdCBpbiBgZXhpc3RpbmdXaW5kb3dJZHNgLlxuICAgICAgICAgICAgICAgIHJldHVybiAhZXhpc3RpbmdXaW5kb3dJZHMuaGFzKHcuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3VsdGluZ1dpbmRvdykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU2xlZXAgZm9yIDEwMG1zIGFuZCByZXRyeS5cbiAgICAgICAgYXdhaXQgdGltZW91dCgxMDApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0aW5nV2luZG93O1xufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGFuZCB0aGUgcGFzc2VkIG51bWJlciBvZiBtaWxsaXNlY29uZHMuXG4gKiBUaGlzIHV0aWxpdHkgaXMgYW4gYXN5bmMvYXdhaXQtZnJpZW5kbHkgdmVyc2lvbiBvZiBgc2V0VGltZW91dGAuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtQcm9taXNlfVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRpbWVvdXQobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogQSB1dGlsaXR5IG1ldGhvZCB0aGF0IG1ha2VzIGl0IGVhc2llciB0byB1c2UgYGV2ZW50LndhaXRVbnRpbGAgd2l0aFxuICogYXN5bmMgZnVuY3Rpb25zIGFuZCByZXR1cm4gdGhlIHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFzeW5jRm5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gd2FpdFVudGlsKGV2ZW50LCBhc3luY0ZuKSB7XG4gICAgY29uc3QgcmV0dXJuUHJvbWlzZSA9IGFzeW5jRm4oKTtcbiAgICBldmVudC53YWl0VW50aWwocmV0dXJuUHJvbWlzZSk7XG4gICAgcmV0dXJuIHJldHVyblByb21pc2U7XG59XG5leHBvcnQgeyB3YWl0VW50aWwgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLy8gQHRzLWlnbm9yZVxudHJ5IHtcbiAgICBzZWxmWyd3b3JrYm94OmNvcmU6Ni4yLjQnXSAmJiBfKCk7XG59XG5jYXRjaCAoZSkgeyB9XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBjYWNoZU5hbWVzIGFzIF9jYWNoZU5hbWVzIH0gZnJvbSAnLi9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEdldCB0aGUgY3VycmVudCBjYWNoZSBuYW1lcyBhbmQgcHJlZml4L3N1ZmZpeCB1c2VkIGJ5IFdvcmtib3guXG4gKlxuICogYGNhY2hlTmFtZXMucHJlY2FjaGVgIGlzIHVzZWQgZm9yIHByZWNhY2hlZCBhc3NldHMsXG4gKiBgY2FjaGVOYW1lcy5nb29nbGVBbmFseXRpY3NgIGlzIHVzZWQgYnkgYHdvcmtib3gtZ29vZ2xlLWFuYWx5dGljc2AgdG9cbiAqIHN0b3JlIGBhbmFseXRpY3MuanNgLCBhbmQgYGNhY2hlTmFtZXMucnVudGltZWAgaXMgdXNlZCBmb3IgZXZlcnl0aGluZyBlbHNlLlxuICpcbiAqIGBjYWNoZU5hbWVzLnByZWZpeGAgY2FuIGJlIHVzZWQgdG8gcmV0cmlldmUganVzdCB0aGUgY3VycmVudCBwcmVmaXggdmFsdWUuXG4gKiBgY2FjaGVOYW1lcy5zdWZmaXhgIGNhbiBiZSB1c2VkIHRvIHJldHJpZXZlIGp1c3QgdGhlIGN1cnJlbnQgc3VmZml4IHZhbHVlLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gQW4gb2JqZWN0IHdpdGggYHByZWNhY2hlYCwgYHJ1bnRpbWVgLCBgcHJlZml4YCwgYW5kXG4gKiAgICAgYGdvb2dsZUFuYWx5dGljc2AgcHJvcGVydGllcy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtY29yZVxuICovXG5jb25zdCBjYWNoZU5hbWVzID0ge1xuICAgIGdldCBnb29nbGVBbmFseXRpY3MoKSB7XG4gICAgICAgIHJldHVybiBfY2FjaGVOYW1lcy5nZXRHb29nbGVBbmFseXRpY3NOYW1lKCk7XG4gICAgfSxcbiAgICBnZXQgcHJlY2FjaGUoKSB7XG4gICAgICAgIHJldHVybiBfY2FjaGVOYW1lcy5nZXRQcmVjYWNoZU5hbWUoKTtcbiAgICB9LFxuICAgIGdldCBwcmVmaXgoKSB7XG4gICAgICAgIHJldHVybiBfY2FjaGVOYW1lcy5nZXRQcmVmaXgoKTtcbiAgICB9LFxuICAgIGdldCBydW50aW1lKCkge1xuICAgICAgICByZXR1cm4gX2NhY2hlTmFtZXMuZ2V0UnVudGltZU5hbWUoKTtcbiAgICB9LFxuICAgIGdldCBzdWZmaXgoKSB7XG4gICAgICAgIHJldHVybiBfY2FjaGVOYW1lcy5nZXRTdWZmaXgoKTtcbiAgICB9LFxufTtcbmV4cG9ydCB7IGNhY2hlTmFtZXMgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIENsYWltIGFueSBjdXJyZW50bHkgYXZhaWxhYmxlIGNsaWVudHMgb25jZSB0aGUgc2VydmljZSB3b3JrZXJcbiAqIGJlY29tZXMgYWN0aXZlLiBUaGlzIGlzIG5vcm1hbGx5IHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgc2tpcFdhaXRpbmcoKWAuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LWNvcmVcbiAqL1xuZnVuY3Rpb24gY2xpZW50c0NsYWltKCkge1xuICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCAoKSA9PiBzZWxmLmNsaWVudHMuY2xhaW0oKSk7XG59XG5leHBvcnQgeyBjbGllbnRzQ2xhaW0gfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGNhbkNvbnN0cnVjdFJlc3BvbnNlRnJvbUJvZHlTdHJlYW0gfSBmcm9tICcuL19wcml2YXRlL2NhbkNvbnN0cnVjdFJlc3BvbnNlRnJvbUJvZHlTdHJlYW0uanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnLi9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQWxsb3dzIGRldmVsb3BlcnMgdG8gY29weSBhIHJlc3BvbnNlIGFuZCBtb2RpZnkgaXRzIGBoZWFkZXJzYCwgYHN0YXR1c2AsXG4gKiBvciBgc3RhdHVzVGV4dGAgdmFsdWVzICh0aGUgdmFsdWVzIHNldHRhYmxlIHZpYSBhXG4gKiBbYFJlc3BvbnNlSW5pdGBde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9SZXNwb25zZS9SZXNwb25zZSNTeW50YXh9XG4gKiBvYmplY3QgaW4gdGhlIGNvbnN0cnVjdG9yKS5cbiAqIFRvIG1vZGlmeSB0aGVzZSB2YWx1ZXMsIHBhc3MgYSBmdW5jdGlvbiBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LiBUaGF0XG4gKiBmdW5jdGlvbiB3aWxsIGJlIGludm9rZWQgd2l0aCBhIHNpbmdsZSBvYmplY3Qgd2l0aCB0aGUgcmVzcG9uc2UgcHJvcGVydGllc1xuICogYHtoZWFkZXJzLCBzdGF0dXMsIHN0YXR1c1RleHR9YC4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGlzIGZ1bmN0aW9uIHdpbGxcbiAqIGJlIHVzZWQgYXMgdGhlIGBSZXNwb25zZUluaXRgIGZvciB0aGUgbmV3IGBSZXNwb25zZWAuIFRvIGNoYW5nZSB0aGUgdmFsdWVzXG4gKiBlaXRoZXIgbW9kaWZ5IHRoZSBwYXNzZWQgcGFyYW1ldGVyKHMpIGFuZCByZXR1cm4gaXQsIG9yIHJldHVybiBhIHRvdGFsbHlcbiAqIG5ldyBvYmplY3QuXG4gKlxuICogVGhpcyBtZXRob2QgaXMgaW50ZW50aW9uYWxseSBsaW1pdGVkIHRvIHNhbWUtb3JpZ2luIHJlc3BvbnNlcywgcmVnYXJkbGVzcyBvZlxuICogd2hldGhlciBDT1JTIHdhcyB1c2VkIG9yIG5vdC5cbiAqXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNwb25zZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gbW9kaWZpZXJcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1jb3JlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGNvcHlSZXNwb25zZShyZXNwb25zZSwgbW9kaWZpZXIpIHtcbiAgICBsZXQgb3JpZ2luID0gbnVsbDtcbiAgICAvLyBJZiByZXNwb25zZS51cmwgaXNuJ3Qgc2V0LCBhc3N1bWUgaXQncyBjcm9zcy1vcmlnaW4gYW5kIGtlZXAgb3JpZ2luIG51bGwuXG4gICAgaWYgKHJlc3BvbnNlLnVybCkge1xuICAgICAgICBjb25zdCByZXNwb25zZVVSTCA9IG5ldyBVUkwocmVzcG9uc2UudXJsKTtcbiAgICAgICAgb3JpZ2luID0gcmVzcG9uc2VVUkwub3JpZ2luO1xuICAgIH1cbiAgICBpZiAob3JpZ2luICE9PSBzZWxmLmxvY2F0aW9uLm9yaWdpbikge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdjcm9zcy1vcmlnaW4tY29weS1yZXNwb25zZScsIHsgb3JpZ2luIH0pO1xuICAgIH1cbiAgICBjb25zdCBjbG9uZWRSZXNwb25zZSA9IHJlc3BvbnNlLmNsb25lKCk7XG4gICAgLy8gQ3JlYXRlIGEgZnJlc2ggYFJlc3BvbnNlSW5pdGAgb2JqZWN0IGJ5IGNsb25pbmcgdGhlIGhlYWRlcnMuXG4gICAgY29uc3QgcmVzcG9uc2VJbml0ID0ge1xuICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyhjbG9uZWRSZXNwb25zZS5oZWFkZXJzKSxcbiAgICAgICAgc3RhdHVzOiBjbG9uZWRSZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IGNsb25lZFJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgfTtcbiAgICAvLyBBcHBseSBhbnkgdXNlciBtb2RpZmljYXRpb25zLlxuICAgIGNvbnN0IG1vZGlmaWVkUmVzcG9uc2VJbml0ID0gbW9kaWZpZXIgPyBtb2RpZmllcihyZXNwb25zZUluaXQpIDogcmVzcG9uc2VJbml0O1xuICAgIC8vIENyZWF0ZSB0aGUgbmV3IHJlc3BvbnNlIGZyb20gdGhlIGJvZHkgc3RyZWFtIGFuZCBgUmVzcG9uc2VJbml0YFxuICAgIC8vIG1vZGlmaWNhdGlvbnMuIE5vdGU6IG5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB0aGUgUmVzcG9uc2UuYm9keSBzdHJlYW0sXG4gICAgLy8gc28gZmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIGVudGlyZSBib2R5IGludG8gbWVtb3J5IGFzIGEgYmxvYi5cbiAgICBjb25zdCBib2R5ID0gY2FuQ29uc3RydWN0UmVzcG9uc2VGcm9tQm9keVN0cmVhbSgpID9cbiAgICAgICAgY2xvbmVkUmVzcG9uc2UuYm9keSA6IGF3YWl0IGNsb25lZFJlc3BvbnNlLmJsb2IoKTtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKGJvZHksIG1vZGlmaWVkUmVzcG9uc2VJbml0KTtcbn1cbmV4cG9ydCB7IGNvcHlSZXNwb25zZSB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2sgfSBmcm9tICcuL3JlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrLmpzJztcbmltcG9ydCAqIGFzIF9wcml2YXRlIGZyb20gJy4vX3ByaXZhdGUuanMnO1xuaW1wb3J0IHsgY2FjaGVOYW1lcyB9IGZyb20gJy4vY2FjaGVOYW1lcy5qcyc7XG5pbXBvcnQgeyBjb3B5UmVzcG9uc2UgfSBmcm9tICcuL2NvcHlSZXNwb25zZS5qcyc7XG5pbXBvcnQgeyBjbGllbnRzQ2xhaW0gfSBmcm9tICcuL2NsaWVudHNDbGFpbS5qcyc7XG5pbXBvcnQgeyBzZXRDYWNoZU5hbWVEZXRhaWxzIH0gZnJvbSAnLi9zZXRDYWNoZU5hbWVEZXRhaWxzLmpzJztcbmltcG9ydCB7IHNraXBXYWl0aW5nIH0gZnJvbSAnLi9za2lwV2FpdGluZy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBbGwgb2YgdGhlIFdvcmtib3ggc2VydmljZSB3b3JrZXIgbGlicmFyaWVzIHVzZSB3b3JrYm94LWNvcmUgZm9yIHNoYXJlZFxuICogY29kZSBhcyB3ZWxsIGFzIHNldHRpbmcgZGVmYXVsdCB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHNoYXJlZCAobGlrZSBjYWNoZVxuICogbmFtZXMpLlxuICpcbiAqIEBtb2R1bGUgd29ya2JveC1jb3JlXG4gKi9cbmV4cG9ydCB7IF9wcml2YXRlLCBjYWNoZU5hbWVzLCBjbGllbnRzQ2xhaW0sIGNvcHlSZXNwb25zZSwgcmVnaXN0ZXJRdW90YUVycm9yQ2FsbGJhY2ssIHNldENhY2hlTmFtZURldGFpbHMsIHNraXBXYWl0aW5nLCB9O1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcy5qcyc7XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBtZXNzYWdlcyB9IGZyb20gJy4vbWVzc2FnZXMuanMnO1xuaW1wb3J0ICcuLi8uLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBmYWxsYmFjayA9IChjb2RlLCAuLi5hcmdzKSA9PiB7XG4gICAgbGV0IG1zZyA9IGNvZGU7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICBtc2cgKz0gYCA6OiAke0pTT04uc3RyaW5naWZ5KGFyZ3MpfWA7XG4gICAgfVxuICAgIHJldHVybiBtc2c7XG59O1xuY29uc3QgZ2VuZXJhdG9yRnVuY3Rpb24gPSAoY29kZSwgZGV0YWlscyA9IHt9KSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IG1lc3NhZ2VzW2NvZGVdO1xuICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuYWJsZSB0byBmaW5kIG1lc3NhZ2UgZm9yIGNvZGUgJyR7Y29kZX0nLmApO1xuICAgIH1cbiAgICByZXR1cm4gbWVzc2FnZShkZXRhaWxzKTtcbn07XG5leHBvcnQgY29uc3QgbWVzc2FnZUdlbmVyYXRvciA9IChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSA/XG4gICAgZmFsbGJhY2sgOiBnZW5lcmF0b3JGdW5jdGlvbjtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vLi4vX3ZlcnNpb24uanMnO1xuZXhwb3J0IGNvbnN0IG1lc3NhZ2VzID0ge1xuICAgICdpbnZhbGlkLXZhbHVlJzogKHsgcGFyYW1OYW1lLCB2YWxpZFZhbHVlRGVzY3JpcHRpb24sIHZhbHVlIH0pID0+IHtcbiAgICAgICAgaWYgKCFwYXJhbU5hbWUgfHwgIXZhbGlkVmFsdWVEZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbnZhbGlkLXZhbHVlJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFRoZSAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgd2FzIGdpdmVuIGEgdmFsdWUgd2l0aCBhbiBgICtcbiAgICAgICAgICAgIGB1bmV4cGVjdGVkIHZhbHVlLiAke3ZhbGlkVmFsdWVEZXNjcmlwdGlvbn0gUmVjZWl2ZWQgYSB2YWx1ZSBvZiBgICtcbiAgICAgICAgICAgIGAke0pTT04uc3RyaW5naWZ5KHZhbHVlKX0uYDtcbiAgICB9LFxuICAgICdub3QtYW4tYXJyYXknOiAoeyBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWUgfSkgPT4ge1xuICAgICAgICBpZiAoIW1vZHVsZU5hbWUgfHwgIWNsYXNzTmFtZSB8fCAhZnVuY05hbWUgfHwgIXBhcmFtTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdub3QtYW4tYXJyYXknIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgVGhlIHBhcmFtZXRlciAnJHtwYXJhbU5hbWV9JyBwYXNzZWQgaW50byBgICtcbiAgICAgICAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0oKScgbXVzdCBiZSBhbiBhcnJheS5gO1xuICAgIH0sXG4gICAgJ2luY29ycmVjdC10eXBlJzogKHsgZXhwZWN0ZWRUeXBlLCBwYXJhbU5hbWUsIG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUgfSkgPT4ge1xuICAgICAgICBpZiAoIWV4cGVjdGVkVHlwZSB8fCAhcGFyYW1OYW1lIHx8ICFtb2R1bGVOYW1lIHx8ICFmdW5jTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbmNvcnJlY3QtdHlwZScgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2xhc3NOYW1lU3RyID0gY2xhc3NOYW1lID8gYCR7Y2xhc3NOYW1lfS5gIDogJyc7XG4gICAgICAgIHJldHVybiBgVGhlIHBhcmFtZXRlciAnJHtwYXJhbU5hbWV9JyBwYXNzZWQgaW50byBgICtcbiAgICAgICAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZVN0cn1gICtcbiAgICAgICAgICAgIGAke2Z1bmNOYW1lfSgpJyBtdXN0IGJlIG9mIHR5cGUgJHtleHBlY3RlZFR5cGV9LmA7XG4gICAgfSxcbiAgICAnaW5jb3JyZWN0LWNsYXNzJzogKHsgZXhwZWN0ZWRDbGFzc05hbWUsIHBhcmFtTmFtZSwgbW9kdWxlTmFtZSwgY2xhc3NOYW1lLCBmdW5jTmFtZSwgaXNSZXR1cm5WYWx1ZVByb2JsZW0gfSkgPT4ge1xuICAgICAgICBpZiAoIWV4cGVjdGVkQ2xhc3NOYW1lIHx8ICFtb2R1bGVOYW1lIHx8ICFmdW5jTmFtZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvICdpbmNvcnJlY3QtY2xhc3MnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZVN0ciA9IGNsYXNzTmFtZSA/IGAke2NsYXNzTmFtZX0uYCA6ICcnO1xuICAgICAgICBpZiAoaXNSZXR1cm5WYWx1ZVByb2JsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBgVGhlIHJldHVybiB2YWx1ZSBmcm9tIGAgK1xuICAgICAgICAgICAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZVN0cn0ke2Z1bmNOYW1lfSgpJyBgICtcbiAgICAgICAgICAgICAgICBgbXVzdCBiZSBhbiBpbnN0YW5jZSBvZiBjbGFzcyAke2V4cGVjdGVkQ2xhc3NOYW1lfS5gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgVGhlIHBhcmFtZXRlciAnJHtwYXJhbU5hbWV9JyBwYXNzZWQgaW50byBgICtcbiAgICAgICAgICAgIGAnJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZVN0cn0ke2Z1bmNOYW1lfSgpJyBgICtcbiAgICAgICAgICAgIGBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIGNsYXNzICR7ZXhwZWN0ZWRDbGFzc05hbWV9LmA7XG4gICAgfSxcbiAgICAnbWlzc2luZy1hLW1ldGhvZCc6ICh7IGV4cGVjdGVkTWV0aG9kLCBwYXJhbU5hbWUsIG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUgfSkgPT4ge1xuICAgICAgICBpZiAoIWV4cGVjdGVkTWV0aG9kIHx8ICFwYXJhbU5hbWUgfHwgIW1vZHVsZU5hbWUgfHwgIWNsYXNzTmFtZVxuICAgICAgICAgICAgfHwgIWZ1bmNOYW1lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ21pc3NpbmctYS1tZXRob2QnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0oKSBleHBlY3RlZCB0aGUgYCArXG4gICAgICAgICAgICBgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIHRvIGV4cG9zZSBhICcke2V4cGVjdGVkTWV0aG9kfScgbWV0aG9kLmA7XG4gICAgfSxcbiAgICAnYWRkLXRvLWNhY2hlLWxpc3QtdW5leHBlY3RlZC10eXBlJzogKHsgZW50cnkgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYEFuIHVuZXhwZWN0ZWQgZW50cnkgd2FzIHBhc3NlZCB0byBgICtcbiAgICAgICAgICAgIGAnd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlci5hZGRUb0NhY2hlTGlzdCgpJyBUaGUgZW50cnkgYCArXG4gICAgICAgICAgICBgJyR7SlNPTi5zdHJpbmdpZnkoZW50cnkpfScgaXNuJ3Qgc3VwcG9ydGVkLiBZb3UgbXVzdCBzdXBwbHkgYW4gYXJyYXkgb2YgYCArXG4gICAgICAgICAgICBgc3RyaW5ncyB3aXRoIG9uZSBvciBtb3JlIGNoYXJhY3RlcnMsIG9iamVjdHMgd2l0aCBhIHVybCBwcm9wZXJ0eSBvciBgICtcbiAgICAgICAgICAgIGBSZXF1ZXN0IG9iamVjdHMuYDtcbiAgICB9LFxuICAgICdhZGQtdG8tY2FjaGUtbGlzdC1jb25mbGljdGluZy1lbnRyaWVzJzogKHsgZmlyc3RFbnRyeSwgc2Vjb25kRW50cnkgfSkgPT4ge1xuICAgICAgICBpZiAoIWZpcnN0RW50cnkgfHwgIXNlY29uZEVudHJ5KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gYCArXG4gICAgICAgICAgICAgICAgYCdhZGQtdG8tY2FjaGUtbGlzdC1kdXBsaWNhdGUtZW50cmllcycgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBUd28gb2YgdGhlIGVudHJpZXMgcGFzc2VkIHRvIGAgK1xuICAgICAgICAgICAgYCd3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyLmFkZFRvQ2FjaGVMaXN0KCknIGhhZCB0aGUgVVJMIGAgK1xuICAgICAgICAgICAgYCR7Zmlyc3RFbnRyeX0gYnV0IGRpZmZlcmVudCByZXZpc2lvbiBkZXRhaWxzLiBXb3JrYm94IGlzIGAgK1xuICAgICAgICAgICAgYHVuYWJsZSB0byBjYWNoZSBhbmQgdmVyc2lvbiB0aGUgYXNzZXQgY29ycmVjdGx5LiBQbGVhc2UgcmVtb3ZlIG9uZSBgICtcbiAgICAgICAgICAgIGBvZiB0aGUgZW50cmllcy5gO1xuICAgIH0sXG4gICAgJ3BsdWdpbi1lcnJvci1yZXF1ZXN0LXdpbGwtZmV0Y2gnOiAoeyB0aHJvd25FcnJvck1lc3NhZ2UgfSkgPT4ge1xuICAgICAgICBpZiAoIXRocm93bkVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvIGAgK1xuICAgICAgICAgICAgICAgIGAncGx1Z2luLWVycm9yLXJlcXVlc3Qtd2lsbC1mZXRjaCcsIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgQW4gZXJyb3Igd2FzIHRocm93biBieSBhIHBsdWdpbnMgJ3JlcXVlc3RXaWxsRmV0Y2goKScgbWV0aG9kLiBgICtcbiAgICAgICAgICAgIGBUaGUgdGhyb3duIGVycm9yIG1lc3NhZ2Ugd2FzOiAnJHt0aHJvd25FcnJvck1lc3NhZ2V9Jy5gO1xuICAgIH0sXG4gICAgJ2ludmFsaWQtY2FjaGUtbmFtZSc6ICh7IGNhY2hlTmFtZUlkLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgIGlmICghY2FjaGVOYW1lSWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYSAnY2FjaGVOYW1lSWQnIGZvciBlcnJvciAnaW52YWxpZC1jYWNoZS1uYW1lJ2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgWW91IG11c3QgcHJvdmlkZSBhIG5hbWUgY29udGFpbmluZyBhdCBsZWFzdCBvbmUgY2hhcmFjdGVyIGZvciBgICtcbiAgICAgICAgICAgIGBzZXRDYWNoZURldGFpbHMoeyR7Y2FjaGVOYW1lSWR9OiAnLi4uJ30pLiBSZWNlaXZlZCBhIHZhbHVlIG9mIGAgK1xuICAgICAgICAgICAgYCcke0pTT04uc3RyaW5naWZ5KHZhbHVlKX0nYDtcbiAgICB9LFxuICAgICd1bnJlZ2lzdGVyLXJvdXRlLWJ1dC1ub3QtZm91bmQtd2l0aC1tZXRob2QnOiAoeyBtZXRob2QgfSkgPT4ge1xuICAgICAgICBpZiAoIW1ldGhvZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIGlucHV0IHRvIGAgK1xuICAgICAgICAgICAgICAgIGAndW5yZWdpc3Rlci1yb3V0ZS1idXQtbm90LWZvdW5kLXdpdGgtbWV0aG9kJyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYFRoZSByb3V0ZSB5b3UncmUgdHJ5aW5nIHRvIHVucmVnaXN0ZXIgd2FzIG5vdCAgcHJldmlvdXNseSBgICtcbiAgICAgICAgICAgIGByZWdpc3RlcmVkIGZvciB0aGUgbWV0aG9kIHR5cGUgJyR7bWV0aG9kfScuYDtcbiAgICB9LFxuICAgICd1bnJlZ2lzdGVyLXJvdXRlLXJvdXRlLW5vdC1yZWdpc3RlcmVkJzogKCkgPT4ge1xuICAgICAgICByZXR1cm4gYFRoZSByb3V0ZSB5b3UncmUgdHJ5aW5nIHRvIHVucmVnaXN0ZXIgd2FzIG5vdCBwcmV2aW91c2x5IGAgK1xuICAgICAgICAgICAgYHJlZ2lzdGVyZWQuYDtcbiAgICB9LFxuICAgICdxdWV1ZS1yZXBsYXktZmFpbGVkJzogKHsgbmFtZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgUmVwbGF5aW5nIHRoZSBiYWNrZ3JvdW5kIHN5bmMgcXVldWUgJyR7bmFtZX0nIGZhaWxlZC5gO1xuICAgIH0sXG4gICAgJ2R1cGxpY2F0ZS1xdWV1ZS1uYW1lJzogKHsgbmFtZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgVGhlIFF1ZXVlIG5hbWUgJyR7bmFtZX0nIGlzIGFscmVhZHkgYmVpbmcgdXNlZC4gYCArXG4gICAgICAgICAgICBgQWxsIGluc3RhbmNlcyBvZiBiYWNrZ3JvdW5kU3luYy5RdWV1ZSBtdXN0IGJlIGdpdmVuIHVuaXF1ZSBuYW1lcy5gO1xuICAgIH0sXG4gICAgJ2V4cGlyZWQtdGVzdC13aXRob3V0LW1heC1hZ2UnOiAoeyBtZXRob2ROYW1lLCBwYXJhbU5hbWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFRoZSAnJHttZXRob2ROYW1lfSgpJyBtZXRob2QgY2FuIG9ubHkgYmUgdXNlZCB3aGVuIHRoZSBgICtcbiAgICAgICAgICAgIGAnJHtwYXJhbU5hbWV9JyBpcyB1c2VkIGluIHRoZSBjb25zdHJ1Y3Rvci5gO1xuICAgIH0sXG4gICAgJ3Vuc3VwcG9ydGVkLXJvdXRlLXR5cGUnOiAoeyBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFRoZSBzdXBwbGllZCAnJHtwYXJhbU5hbWV9JyBwYXJhbWV0ZXIgd2FzIGFuIHVuc3VwcG9ydGVkIHR5cGUuIGAgK1xuICAgICAgICAgICAgYFBsZWFzZSBjaGVjayB0aGUgZG9jcyBmb3IgJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX0gZm9yIGAgK1xuICAgICAgICAgICAgYHZhbGlkIGlucHV0IHR5cGVzLmA7XG4gICAgfSxcbiAgICAnbm90LWFycmF5LW9mLWNsYXNzJzogKHsgdmFsdWUsIGV4cGVjdGVkQ2xhc3MsIG1vZHVsZU5hbWUsIGNsYXNzTmFtZSwgZnVuY05hbWUsIHBhcmFtTmFtZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgVGhlIHN1cHBsaWVkICcke3BhcmFtTmFtZX0nIHBhcmFtZXRlciBtdXN0IGJlIGFuIGFycmF5IG9mIGAgK1xuICAgICAgICAgICAgYCcke2V4cGVjdGVkQ2xhc3N9JyBvYmplY3RzLiBSZWNlaXZlZCAnJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9LCcuIGAgK1xuICAgICAgICAgICAgYFBsZWFzZSBjaGVjayB0aGUgY2FsbCB0byAke21vZHVsZU5hbWV9LiR7Y2xhc3NOYW1lfS4ke2Z1bmNOYW1lfSgpIGAgK1xuICAgICAgICAgICAgYHRvIGZpeCB0aGUgaXNzdWUuYDtcbiAgICB9LFxuICAgICdtYXgtZW50cmllcy1vci1hZ2UtcmVxdWlyZWQnOiAoeyBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBZb3UgbXVzdCBkZWZpbmUgZWl0aGVyIGNvbmZpZy5tYXhFbnRyaWVzIG9yIGNvbmZpZy5tYXhBZ2VTZWNvbmRzYCArXG4gICAgICAgICAgICBgaW4gJHttb2R1bGVOYW1lfS4ke2NsYXNzTmFtZX0uJHtmdW5jTmFtZX1gO1xuICAgIH0sXG4gICAgJ3N0YXR1c2VzLW9yLWhlYWRlcnMtcmVxdWlyZWQnOiAoeyBtb2R1bGVOYW1lLCBjbGFzc05hbWUsIGZ1bmNOYW1lIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBZb3UgbXVzdCBkZWZpbmUgZWl0aGVyIGNvbmZpZy5zdGF0dXNlcyBvciBjb25maWcuaGVhZGVyc2AgK1xuICAgICAgICAgICAgYGluICR7bW9kdWxlTmFtZX0uJHtjbGFzc05hbWV9LiR7ZnVuY05hbWV9YDtcbiAgICB9LFxuICAgICdpbnZhbGlkLXN0cmluZyc6ICh7IG1vZHVsZU5hbWUsIGZ1bmNOYW1lLCBwYXJhbU5hbWUgfSkgPT4ge1xuICAgICAgICBpZiAoIXBhcmFtTmFtZSB8fCAhbW9kdWxlTmFtZSB8fCAhZnVuY05hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW52YWxpZC1zdHJpbmcnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgV2hlbiB1c2luZyBzdHJpbmdzLCB0aGUgJyR7cGFyYW1OYW1lfScgcGFyYW1ldGVyIG11c3Qgc3RhcnQgd2l0aCBgICtcbiAgICAgICAgICAgIGAnaHR0cCcgKGZvciBjcm9zcy1vcmlnaW4gbWF0Y2hlcykgb3IgJy8nIChmb3Igc2FtZS1vcmlnaW4gbWF0Y2hlcykuIGAgK1xuICAgICAgICAgICAgYFBsZWFzZSBzZWUgdGhlIGRvY3MgZm9yICR7bW9kdWxlTmFtZX0uJHtmdW5jTmFtZX0oKSBmb3IgYCArXG4gICAgICAgICAgICBgbW9yZSBpbmZvLmA7XG4gICAgfSxcbiAgICAnY2hhbm5lbC1uYW1lLXJlcXVpcmVkJzogKCkgPT4ge1xuICAgICAgICByZXR1cm4gYFlvdSBtdXN0IHByb3ZpZGUgYSBjaGFubmVsTmFtZSB0byBjb25zdHJ1Y3QgYSBgICtcbiAgICAgICAgICAgIGBCcm9hZGNhc3RDYWNoZVVwZGF0ZSBpbnN0YW5jZS5gO1xuICAgIH0sXG4gICAgJ2ludmFsaWQtcmVzcG9uc2VzLWFyZS1zYW1lLWFyZ3MnOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgVGhlIGFyZ3VtZW50cyBwYXNzZWQgaW50byByZXNwb25zZXNBcmVTYW1lKCkgYXBwZWFyIHRvIGJlIGAgK1xuICAgICAgICAgICAgYGludmFsaWQuIFBsZWFzZSBlbnN1cmUgdmFsaWQgUmVzcG9uc2VzIGFyZSB1c2VkLmA7XG4gICAgfSxcbiAgICAnZXhwaXJlLWN1c3RvbS1jYWNoZXMtb25seSc6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGBZb3UgbXVzdCBwcm92aWRlIGEgJ2NhY2hlTmFtZScgcHJvcGVydHkgd2hlbiB1c2luZyB0aGUgYCArXG4gICAgICAgICAgICBgZXhwaXJhdGlvbiBwbHVnaW4gd2l0aCBhIHJ1bnRpbWUgY2FjaGluZyBzdHJhdGVneS5gO1xuICAgIH0sXG4gICAgJ3VuaXQtbXVzdC1iZS1ieXRlcyc6ICh7IG5vcm1hbGl6ZWRSYW5nZUhlYWRlciB9KSA9PiB7XG4gICAgICAgIGlmICghbm9ybWFsaXplZFJhbmdlSGVhZGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ3VuaXQtbXVzdC1iZS1ieXRlcycgZXJyb3IuYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGBUaGUgJ3VuaXQnIHBvcnRpb24gb2YgdGhlIFJhbmdlIGhlYWRlciBtdXN0IGJlIHNldCB0byAnYnl0ZXMnLiBgICtcbiAgICAgICAgICAgIGBUaGUgUmFuZ2UgaGVhZGVyIHByb3ZpZGVkIHdhcyBcIiR7bm9ybWFsaXplZFJhbmdlSGVhZGVyfVwiYDtcbiAgICB9LFxuICAgICdzaW5nbGUtcmFuZ2Utb25seSc6ICh7IG5vcm1hbGl6ZWRSYW5nZUhlYWRlciB9KSA9PiB7XG4gICAgICAgIGlmICghbm9ybWFsaXplZFJhbmdlSGVhZGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgaW5wdXQgdG8gJ3NpbmdsZS1yYW5nZS1vbmx5JyBlcnJvci5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYE11bHRpcGxlIHJhbmdlcyBhcmUgbm90IHN1cHBvcnRlZC4gUGxlYXNlIHVzZSBhICBzaW5nbGUgc3RhcnQgYCArXG4gICAgICAgICAgICBgdmFsdWUsIGFuZCBvcHRpb25hbCBlbmQgdmFsdWUuIFRoZSBSYW5nZSBoZWFkZXIgcHJvdmlkZWQgd2FzIGAgK1xuICAgICAgICAgICAgYFwiJHtub3JtYWxpemVkUmFuZ2VIZWFkZXJ9XCJgO1xuICAgIH0sXG4gICAgJ2ludmFsaWQtcmFuZ2UtdmFsdWVzJzogKHsgbm9ybWFsaXplZFJhbmdlSGVhZGVyIH0pID0+IHtcbiAgICAgICAgaWYgKCFub3JtYWxpemVkUmFuZ2VIZWFkZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBpbnB1dCB0byAnaW52YWxpZC1yYW5nZS12YWx1ZXMnIGVycm9yLmApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgVGhlIFJhbmdlIGhlYWRlciBpcyBtaXNzaW5nIGJvdGggc3RhcnQgYW5kIGVuZCB2YWx1ZXMuIEF0IGxlYXN0IGAgK1xuICAgICAgICAgICAgYG9uZSBvZiB0aG9zZSB2YWx1ZXMgaXMgbmVlZGVkLiBUaGUgUmFuZ2UgaGVhZGVyIHByb3ZpZGVkIHdhcyBgICtcbiAgICAgICAgICAgIGBcIiR7bm9ybWFsaXplZFJhbmdlSGVhZGVyfVwiYDtcbiAgICB9LFxuICAgICduby1yYW5nZS1oZWFkZXInOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgTm8gUmFuZ2UgaGVhZGVyIHdhcyBmb3VuZCBpbiB0aGUgUmVxdWVzdCBwcm92aWRlZC5gO1xuICAgIH0sXG4gICAgJ3JhbmdlLW5vdC1zYXRpc2ZpYWJsZSc6ICh7IHNpemUsIHN0YXJ0LCBlbmQgfSkgPT4ge1xuICAgICAgICByZXR1cm4gYFRoZSBzdGFydCAoJHtzdGFydH0pIGFuZCBlbmQgKCR7ZW5kfSkgdmFsdWVzIGluIHRoZSBSYW5nZSBhcmUgYCArXG4gICAgICAgICAgICBgbm90IHNhdGlzZmlhYmxlIGJ5IHRoZSBjYWNoZWQgcmVzcG9uc2UsIHdoaWNoIGlzICR7c2l6ZX0gYnl0ZXMuYDtcbiAgICB9LFxuICAgICdhdHRlbXB0LXRvLWNhY2hlLW5vbi1nZXQtcmVxdWVzdCc6ICh7IHVybCwgbWV0aG9kIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBVbmFibGUgdG8gY2FjaGUgJyR7dXJsfScgYmVjYXVzZSBpdCBpcyBhICcke21ldGhvZH0nIHJlcXVlc3QgYW5kIGAgK1xuICAgICAgICAgICAgYG9ubHkgJ0dFVCcgcmVxdWVzdHMgY2FuIGJlIGNhY2hlZC5gO1xuICAgIH0sXG4gICAgJ2NhY2hlLXB1dC13aXRoLW5vLXJlc3BvbnNlJzogKHsgdXJsIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBUaGVyZSB3YXMgYW4gYXR0ZW1wdCB0byBjYWNoZSAnJHt1cmx9JyBidXQgdGhlIHJlc3BvbnNlIHdhcyBub3QgYCArXG4gICAgICAgICAgICBgZGVmaW5lZC5gO1xuICAgIH0sXG4gICAgJ25vLXJlc3BvbnNlJzogKHsgdXJsLCBlcnJvciB9KSA9PiB7XG4gICAgICAgIGxldCBtZXNzYWdlID0gYFRoZSBzdHJhdGVneSBjb3VsZCBub3QgZ2VuZXJhdGUgYSByZXNwb25zZSBmb3IgJyR7dXJsfScuYDtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBtZXNzYWdlICs9IGAgVGhlIHVuZGVybHlpbmcgZXJyb3IgaXMgJHtlcnJvcn0uYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcbiAgICB9LFxuICAgICdiYWQtcHJlY2FjaGluZy1yZXNwb25zZSc6ICh7IHVybCwgc3RhdHVzIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBUaGUgcHJlY2FjaGluZyByZXF1ZXN0IGZvciAnJHt1cmx9JyBmYWlsZWRgICtcbiAgICAgICAgICAgIChzdGF0dXMgPyBgIHdpdGggYW4gSFRUUCBzdGF0dXMgb2YgJHtzdGF0dXN9LmAgOiBgLmApO1xuICAgIH0sXG4gICAgJ25vbi1wcmVjYWNoZWQtdXJsJzogKHsgdXJsIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIGBjcmVhdGVIYW5kbGVyQm91bmRUb1VSTCgnJHt1cmx9Jykgd2FzIGNhbGxlZCwgYnV0IHRoYXQgVVJMIGlzIGAgK1xuICAgICAgICAgICAgYG5vdCBwcmVjYWNoZWQuIFBsZWFzZSBwYXNzIGluIGEgVVJMIHRoYXQgaXMgcHJlY2FjaGVkIGluc3RlYWQuYDtcbiAgICB9LFxuICAgICdhZGQtdG8tY2FjaGUtbGlzdC1jb25mbGljdGluZy1pbnRlZ3JpdGllcyc6ICh7IHVybCB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgVHdvIG9mIHRoZSBlbnRyaWVzIHBhc3NlZCB0byBgICtcbiAgICAgICAgICAgIGAnd29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlci5hZGRUb0NhY2hlTGlzdCgpJyBoYWQgdGhlIFVSTCBgICtcbiAgICAgICAgICAgIGAke3VybH0gd2l0aCBkaWZmZXJlbnQgaW50ZWdyaXR5IHZhbHVlcy4gUGxlYXNlIHJlbW92ZSBvbmUgb2YgdGhlbS5gO1xuICAgIH0sXG4gICAgJ21pc3NpbmctcHJlY2FjaGUtZW50cnknOiAoeyBjYWNoZU5hbWUsIHVybCB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgVW5hYmxlIHRvIGZpbmQgYSBwcmVjYWNoZWQgcmVzcG9uc2UgaW4gJHtjYWNoZU5hbWV9IGZvciAke3VybH0uYDtcbiAgICB9LFxuICAgICdjcm9zcy1vcmlnaW4tY29weS1yZXNwb25zZSc6ICh7IG9yaWdpbiB9KSA9PiB7XG4gICAgICAgIHJldHVybiBgd29ya2JveC1jb3JlLmNvcHlSZXNwb25zZSgpIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBzYW1lLW9yaWdpbiBgICtcbiAgICAgICAgICAgIGByZXNwb25zZXMuIEl0IHdhcyBwYXNzZWQgYSByZXNwb25zZSB3aXRoIG9yaWdpbiAke29yaWdpbn0uYDtcbiAgICB9LFxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLy8gQ2FsbGJhY2tzIHRvIGJlIGV4ZWN1dGVkIHdoZW5ldmVyIHRoZXJlJ3MgYSBxdW90YSBlcnJvci5cbi8vIENhbid0IGNoYW5nZSBGdW5jdGlvbiB0eXBlIHJpZ2h0IG5vdy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5jb25zdCBxdW90YUVycm9yQ2FsbGJhY2tzID0gbmV3IFNldCgpO1xuZXhwb3J0IHsgcXVvdGFFcnJvckNhbGxiYWNrcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnLi9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgcXVvdGFFcnJvckNhbGxiYWNrcyB9IGZyb20gJy4vbW9kZWxzL3F1b3RhRXJyb3JDYWxsYmFja3MuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQWRkcyBhIGZ1bmN0aW9uIHRvIHRoZSBzZXQgb2YgcXVvdGFFcnJvckNhbGxiYWNrcyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgaWZcbiAqIHRoZXJlJ3MgYSBxdW90YSBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LWNvcmVcbiAqL1xuLy8gQ2FuJ3QgY2hhbmdlIEZ1bmN0aW9uIHR5cGVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5mdW5jdGlvbiByZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjayhjYWxsYmFjaykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGFzc2VydC5pc1R5cGUoY2FsbGJhY2ssICdmdW5jdGlvbicsIHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWNvcmUnLFxuICAgICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlcicsXG4gICAgICAgICAgICBwYXJhbU5hbWU6ICdjYWxsYmFjaycsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBxdW90YUVycm9yQ2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbG9nZ2VyLmxvZygnUmVnaXN0ZXJlZCBhIGNhbGxiYWNrIHRvIHJlc3BvbmQgdG8gcXVvdGEgZXJyb3JzLicsIGNhbGxiYWNrKTtcbiAgICB9XG59XG5leHBvcnQgeyByZWdpc3RlclF1b3RhRXJyb3JDYWxsYmFjayB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnLi9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgY2FjaGVOYW1lcyB9IGZyb20gJy4vX3ByaXZhdGUvY2FjaGVOYW1lcy5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICcuL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBNb2RpZmllcyB0aGUgZGVmYXVsdCBjYWNoZSBuYW1lcyB1c2VkIGJ5IHRoZSBXb3JrYm94IHBhY2thZ2VzLlxuICogQ2FjaGUgbmFtZXMgYXJlIGdlbmVyYXRlZCBhcyBgPHByZWZpeD4tPENhY2hlIE5hbWU+LTxzdWZmaXg+YC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGV0YWlsc1xuICogQHBhcmFtIHtPYmplY3R9IFtkZXRhaWxzLnByZWZpeF0gVGhlIHN0cmluZyB0byBhZGQgdG8gdGhlIGJlZ2lubmluZyBvZlxuICogICAgIHRoZSBwcmVjYWNoZSBhbmQgcnVudGltZSBjYWNoZSBuYW1lcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbZGV0YWlscy5zdWZmaXhdIFRoZSBzdHJpbmcgdG8gYWRkIHRvIHRoZSBlbmQgb2ZcbiAqICAgICB0aGUgcHJlY2FjaGUgYW5kIHJ1bnRpbWUgY2FjaGUgbmFtZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW2RldGFpbHMucHJlY2FjaGVdIFRoZSBjYWNoZSBuYW1lIHRvIHVzZSBmb3IgcHJlY2FjaGVcbiAqICAgICBjYWNoaW5nLlxuICogQHBhcmFtIHtPYmplY3R9IFtkZXRhaWxzLnJ1bnRpbWVdIFRoZSBjYWNoZSBuYW1lIHRvIHVzZSBmb3IgcnVudGltZSBjYWNoaW5nLlxuICogQHBhcmFtIHtPYmplY3R9IFtkZXRhaWxzLmdvb2dsZUFuYWx5dGljc10gVGhlIGNhY2hlIG5hbWUgdG8gdXNlIGZvclxuICogICAgIGB3b3JrYm94LWdvb2dsZS1hbmFseXRpY3NgIGNhY2hpbmcuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LWNvcmVcbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVOYW1lRGV0YWlscyhkZXRhaWxzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZGV0YWlscykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICBhc3NlcnQuaXNUeXBlKGRldGFpbHNba2V5XSwgJ3N0cmluZycsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1jb3JlJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ3NldENhY2hlTmFtZURldGFpbHMnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogYGRldGFpbHMuJHtrZXl9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCdwcmVjYWNoZScgaW4gZGV0YWlscyAmJiBkZXRhaWxzWydwcmVjYWNoZSddLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignaW52YWxpZC1jYWNoZS1uYW1lJywge1xuICAgICAgICAgICAgICAgIGNhY2hlTmFtZUlkOiAncHJlY2FjaGUnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBkZXRhaWxzWydwcmVjYWNoZSddLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdydW50aW1lJyBpbiBkZXRhaWxzICYmIGRldGFpbHNbJ3J1bnRpbWUnXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2ludmFsaWQtY2FjaGUtbmFtZScsIHtcbiAgICAgICAgICAgICAgICBjYWNoZU5hbWVJZDogJ3J1bnRpbWUnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBkZXRhaWxzWydydW50aW1lJ10sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ2dvb2dsZUFuYWx5dGljcycgaW4gZGV0YWlscyAmJiBkZXRhaWxzWydnb29nbGVBbmFseXRpY3MnXS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2ludmFsaWQtY2FjaGUtbmFtZScsIHtcbiAgICAgICAgICAgICAgICBjYWNoZU5hbWVJZDogJ2dvb2dsZUFuYWx5dGljcycsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGRldGFpbHNbJ2dvb2dsZUFuYWx5dGljcyddLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2FjaGVOYW1lcy51cGRhdGVEZXRhaWxzKGRldGFpbHMpO1xufVxuZXhwb3J0IHsgc2V0Q2FjaGVOYW1lRGV0YWlscyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnLi9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogVGhpcyBtZXRob2QgaXMgZGVwcmVjYXRlZCwgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBXb3JrYm94IHY3LlxuICpcbiAqIENhbGxpbmcgc2VsZi5za2lwV2FpdGluZygpIGlzIGVxdWl2YWxlbnQsIGFuZCBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1jb3JlXG4gKi9cbmZ1bmN0aW9uIHNraXBXYWl0aW5nKCkge1xuICAgIC8vIEp1c3QgY2FsbCBzZWxmLnNraXBXYWl0aW5nKCkgZGlyZWN0bHkuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjUyNVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGxvZ2dlci53YXJuKGBza2lwV2FpdGluZygpIGZyb20gd29ya2JveC1jb3JlIGlzIG5vIGxvbmdlciByZWNvbW1lbmRlZCBgICtcbiAgICAgICAgICAgIGBhbmQgd2lsbCBiZSByZW1vdmVkIGluIFdvcmtib3ggdjcuIFVzaW5nIHNlbGYuc2tpcFdhaXRpbmcoKSBpbnN0ZWFkIGAgK1xuICAgICAgICAgICAgYGlzIGVxdWl2YWxlbnQuYCk7XG4gICAgfVxuICAgIHZvaWQgc2VsZi5za2lwV2FpdGluZygpO1xufVxuZXhwb3J0IHsgc2tpcFdhaXRpbmcgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGRvbnRXYWl0Rm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2RvbnRXYWl0Rm9yLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBDYWNoZVRpbWVzdGFtcHNNb2RlbCB9IGZyb20gJy4vbW9kZWxzL0NhY2hlVGltZXN0YW1wc01vZGVsLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRoZSBgQ2FjaGVFeHBpcmF0aW9uYCBjbGFzcyBhbGxvd3MgeW91IGRlZmluZSBhbiBleHBpcmF0aW9uIGFuZCAvIG9yXG4gKiBsaW1pdCBvbiB0aGUgbnVtYmVyIG9mIHJlc3BvbnNlcyBzdG9yZWQgaW4gYVxuICogW2BDYWNoZWBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYWNoZSkuXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LWV4cGlyYXRpb25cbiAqL1xuY2xhc3MgQ2FjaGVFeHBpcmF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBUbyBjb25zdHJ1Y3QgYSBuZXcgQ2FjaGVFeHBpcmF0aW9uIGluc3RhbmNlIHlvdSBtdXN0IHByb3ZpZGUgYXQgbGVhc3RcbiAgICAgKiBvbmUgb2YgdGhlIGBjb25maWdgIHByb3BlcnRpZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2FjaGVOYW1lIE5hbWUgb2YgdGhlIGNhY2hlIHRvIGFwcGx5IHJlc3RyaWN0aW9ucyB0by5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gY29uZmlnXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtjb25maWcubWF4RW50cmllc10gVGhlIG1heGltdW0gbnVtYmVyIG9mIGVudHJpZXMgdG8gY2FjaGUuXG4gICAgICogRW50cmllcyB1c2VkIHRoZSBsZWFzdCB3aWxsIGJlIHJlbW92ZWQgYXMgdGhlIG1heGltdW0gaXMgcmVhY2hlZC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5tYXhBZ2VTZWNvbmRzXSBUaGUgbWF4aW11bSBhZ2Ugb2YgYW4gZW50cnkgYmVmb3JlXG4gICAgICogaXQncyB0cmVhdGVkIGFzIHN0YWxlIGFuZCByZW1vdmVkLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbY29uZmlnLm1hdGNoT3B0aW9uc10gVGhlIFtgQ2FjaGVRdWVyeU9wdGlvbnNgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FjaGUvZGVsZXRlI1BhcmFtZXRlcnMpXG4gICAgICogdGhhdCB3aWxsIGJlIHVzZWQgd2hlbiBjYWxsaW5nIGBkZWxldGUoKWAgb24gdGhlIGNhY2hlLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNhY2hlTmFtZSwgY29uZmlnID0ge30pIHtcbiAgICAgICAgdGhpcy5faXNSdW5uaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3JlcnVuUmVxdWVzdGVkID0gZmFsc2U7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNUeXBlKGNhY2hlTmFtZSwgJ3N0cmluZycsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdDYWNoZUV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NhY2hlTmFtZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghKGNvbmZpZy5tYXhFbnRyaWVzIHx8IGNvbmZpZy5tYXhBZ2VTZWNvbmRzKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ21heC1lbnRyaWVzLW9yLWFnZS1yZXF1aXJlZCcsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZy5tYXhFbnRyaWVzKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShjb25maWcubWF4RW50cmllcywgJ251bWJlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdjb25maWcubWF4RW50cmllcycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29uZmlnLm1heEFnZVNlY29uZHMpIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuaXNUeXBlKGNvbmZpZy5tYXhBZ2VTZWNvbmRzLCAnbnVtYmVyJywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnQ2FjaGVFeHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NvbmZpZy5tYXhBZ2VTZWNvbmRzJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9tYXhFbnRyaWVzID0gY29uZmlnLm1heEVudHJpZXM7XG4gICAgICAgIHRoaXMuX21heEFnZVNlY29uZHMgPSBjb25maWcubWF4QWdlU2Vjb25kcztcbiAgICAgICAgdGhpcy5fbWF0Y2hPcHRpb25zID0gY29uZmlnLm1hdGNoT3B0aW9ucztcbiAgICAgICAgdGhpcy5fY2FjaGVOYW1lID0gY2FjaGVOYW1lO1xuICAgICAgICB0aGlzLl90aW1lc3RhbXBNb2RlbCA9IG5ldyBDYWNoZVRpbWVzdGFtcHNNb2RlbChjYWNoZU5hbWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFeHBpcmVzIGVudHJpZXMgZm9yIHRoZSBnaXZlbiBjYWNoZSBhbmQgZ2l2ZW4gY3JpdGVyaWEuXG4gICAgICovXG4gICAgYXN5bmMgZXhwaXJlRW50cmllcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUnVubmluZykge1xuICAgICAgICAgICAgdGhpcy5fcmVydW5SZXF1ZXN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzUnVubmluZyA9IHRydWU7XG4gICAgICAgIGNvbnN0IG1pblRpbWVzdGFtcCA9IHRoaXMuX21heEFnZVNlY29uZHMgP1xuICAgICAgICAgICAgRGF0ZS5ub3coKSAtICh0aGlzLl9tYXhBZ2VTZWNvbmRzICogMTAwMCkgOiAwO1xuICAgICAgICBjb25zdCB1cmxzRXhwaXJlZCA9IGF3YWl0IHRoaXMuX3RpbWVzdGFtcE1vZGVsLmV4cGlyZUVudHJpZXMobWluVGltZXN0YW1wLCB0aGlzLl9tYXhFbnRyaWVzKTtcbiAgICAgICAgLy8gRGVsZXRlIFVSTHMgZnJvbSB0aGUgY2FjaGVcbiAgICAgICAgY29uc3QgY2FjaGUgPSBhd2FpdCBzZWxmLmNhY2hlcy5vcGVuKHRoaXMuX2NhY2hlTmFtZSk7XG4gICAgICAgIGZvciAoY29uc3QgdXJsIG9mIHVybHNFeHBpcmVkKSB7XG4gICAgICAgICAgICBhd2FpdCBjYWNoZS5kZWxldGUodXJsLCB0aGlzLl9tYXRjaE9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodXJsc0V4cGlyZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgRXhwaXJlZCAke3VybHNFeHBpcmVkLmxlbmd0aH0gYCArXG4gICAgICAgICAgICAgICAgICAgIGAke3VybHNFeHBpcmVkLmxlbmd0aCA9PT0gMSA/ICdlbnRyeScgOiAnZW50cmllcyd9IGFuZCByZW1vdmVkIGAgK1xuICAgICAgICAgICAgICAgICAgICBgJHt1cmxzRXhwaXJlZC5sZW5ndGggPT09IDEgPyAnaXQnIDogJ3RoZW0nfSBmcm9tIHRoZSBgICtcbiAgICAgICAgICAgICAgICAgICAgYCcke3RoaXMuX2NhY2hlTmFtZX0nIGNhY2hlLmApO1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYEV4cGlyZWQgdGhlIGZvbGxvd2luZyAke3VybHNFeHBpcmVkLmxlbmd0aCA9PT0gMSA/XG4gICAgICAgICAgICAgICAgICAgICdVUkwnIDogJ1VSTHMnfTpgKTtcbiAgICAgICAgICAgICAgICB1cmxzRXhwaXJlZC5mb3JFYWNoKCh1cmwpID0+IGxvZ2dlci5sb2coYCAgICAke3VybH1gKSk7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYENhY2hlIGV4cGlyYXRpb24gcmFuIGFuZCBmb3VuZCBubyBlbnRyaWVzIHRvIHJlbW92ZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX3JlcnVuUmVxdWVzdGVkKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXJ1blJlcXVlc3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgZG9udFdhaXRGb3IodGhpcy5leHBpcmVFbnRyaWVzKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgdGltZXN0YW1wIGZvciB0aGUgZ2l2ZW4gVVJMLiBUaGlzIGVuc3VyZXMgdGhlIHdoZW5cbiAgICAgKiByZW1vdmluZyBlbnRyaWVzIGJhc2VkIG9uIG1heGltdW0gZW50cmllcywgbW9zdCByZWNlbnRseSB1c2VkXG4gICAgICogaXMgYWNjdXJhdGUgb3Igd2hlbiBleHBpcmluZywgdGhlIHRpbWVzdGFtcCBpcyB1cC10by1kYXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqL1xuICAgIGFzeW5jIHVwZGF0ZVRpbWVzdGFtcCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc1R5cGUodXJsLCAnc3RyaW5nJywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ0NhY2hlRXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICd1cGRhdGVUaW1lc3RhbXAnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ3VybCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLl90aW1lc3RhbXBNb2RlbC5zZXRUaW1lc3RhbXAodXJsLCBEYXRlLm5vdygpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FuIGJlIHVzZWQgdG8gY2hlY2sgaWYgYSBVUkwgaGFzIGV4cGlyZWQgb3Igbm90IGJlZm9yZSBpdCdzIHVzZWQuXG4gICAgICpcbiAgICAgKiBUaGlzIHJlcXVpcmVzIGEgbG9vayB1cCBmcm9tIEluZGV4ZWREQiwgc28gY2FuIGJlIHNsb3cuXG4gICAgICpcbiAgICAgKiBOb3RlOiBUaGlzIG1ldGhvZCB3aWxsIG5vdCByZW1vdmUgdGhlIGNhY2hlZCBlbnRyeSwgY2FsbFxuICAgICAqIGBleHBpcmVFbnRyaWVzKClgIHRvIHJlbW92ZSBpbmRleGVkREIgYW5kIENhY2hlIGVudHJpZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBhc3luYyBpc1VSTEV4cGlyZWQodXJsKSB7XG4gICAgICAgIGlmICghdGhpcy5fbWF4QWdlU2Vjb25kcykge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKGBleHBpcmVkLXRlc3Qtd2l0aG91dC1tYXgtYWdlYCwge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2ROYW1lOiAnaXNVUkxFeHBpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnbWF4QWdlU2Vjb25kcycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBhd2FpdCB0aGlzLl90aW1lc3RhbXBNb2RlbC5nZXRUaW1lc3RhbXAodXJsKTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZU9sZGVyVGhhbiA9IERhdGUubm93KCkgLSAodGhpcy5fbWF4QWdlU2Vjb25kcyAqIDEwMDApO1xuICAgICAgICAgICAgcmV0dXJuIHRpbWVzdGFtcCAhPT0gdW5kZWZpbmVkID8gKHRpbWVzdGFtcCA8IGV4cGlyZU9sZGVyVGhhbikgOiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgdGhlIEluZGV4ZWREQiBvYmplY3Qgc3RvcmUgdXNlZCB0byBrZWVwIHRyYWNrIG9mIGNhY2hlIGV4cGlyYXRpb25cbiAgICAgKiBtZXRhZGF0YS5cbiAgICAgKi9cbiAgICBhc3luYyBkZWxldGUoKSB7XG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCBhdHRlbXB0IGFub3RoZXIgcmVydW4gaWYgd2UncmUgY2FsbGVkIGluIHRoZSBtaWRkbGUgb2ZcbiAgICAgICAgLy8gYSBjYWNoZSBleHBpcmF0aW9uLlxuICAgICAgICB0aGlzLl9yZXJ1blJlcXVlc3RlZCA9IGZhbHNlO1xuICAgICAgICBhd2FpdCB0aGlzLl90aW1lc3RhbXBNb2RlbC5leHBpcmVFbnRyaWVzKEluZmluaXR5KTsgLy8gRXhwaXJlcyBhbGwuXG4gICAgfVxufVxuZXhwb3J0IHsgQ2FjaGVFeHBpcmF0aW9uIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGNhY2hlTmFtZXMgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5qcyc7XG5pbXBvcnQgeyBkb250V2FpdEZvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9kb250V2FpdEZvci5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IHJlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrIH0gZnJvbSAnd29ya2JveC1jb3JlL3JlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHsgQ2FjaGVFeHBpcmF0aW9uIH0gZnJvbSAnLi9DYWNoZUV4cGlyYXRpb24uanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogVGhpcyBwbHVnaW4gY2FuIGJlIHVzZWQgaW4gYSBgd29ya2JveC1zdHJhdGVneWAgdG8gcmVndWxhcmx5IGVuZm9yY2UgYVxuICogbGltaXQgb24gdGhlIGFnZSBhbmQgLyBvciB0aGUgbnVtYmVyIG9mIGNhY2hlZCByZXF1ZXN0cy5cbiAqXG4gKiBJdCBjYW4gb25seSBiZSB1c2VkIHdpdGggYHdvcmtib3gtc3RyYXRlZ3lgIGluc3RhbmNlcyB0aGF0IGhhdmUgYVxuICogW2N1c3RvbSBgY2FjaGVOYW1lYCBwcm9wZXJ0eSBzZXRdKC93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvY29uZmlndXJlLXdvcmtib3gjY3VzdG9tX2NhY2hlX25hbWVzX2luX3N0cmF0ZWdpZXMpLlxuICogSW4gb3RoZXIgd29yZHMsIGl0IGNhbid0IGJlIHVzZWQgdG8gZXhwaXJlIGVudHJpZXMgaW4gc3RyYXRlZ3kgdGhhdCB1c2VzIHRoZVxuICogZGVmYXVsdCBydW50aW1lIGNhY2hlIG5hbWUuXG4gKlxuICogV2hlbmV2ZXIgYSBjYWNoZWQgcmVxdWVzdCBpcyB1c2VkIG9yIHVwZGF0ZWQsIHRoaXMgcGx1Z2luIHdpbGwgbG9va1xuICogYXQgdGhlIGFzc29jaWF0ZWQgY2FjaGUgYW5kIHJlbW92ZSBhbnkgb2xkIG9yIGV4dHJhIHJlcXVlc3RzLlxuICpcbiAqIFdoZW4gdXNpbmcgYG1heEFnZVNlY29uZHNgLCByZXF1ZXN0cyBtYXkgYmUgdXNlZCAqb25jZSogYWZ0ZXIgZXhwaXJpbmdcbiAqIGJlY2F1c2UgdGhlIGV4cGlyYXRpb24gY2xlYW4gdXAgd2lsbCBub3QgaGF2ZSBvY2N1cnJlZCB1bnRpbCAqYWZ0ZXIqIHRoZVxuICogY2FjaGVkIHJlcXVlc3QgaGFzIGJlZW4gdXNlZC4gSWYgdGhlIHJlcXVlc3QgaGFzIGEgXCJEYXRlXCIgaGVhZGVyLCB0aGVuXG4gKiBhIGxpZ2h0IHdlaWdodCBleHBpcmF0aW9uIGNoZWNrIGlzIHBlcmZvcm1lZCBhbmQgdGhlIHJlcXVlc3Qgd2lsbCBub3QgYmVcbiAqIHVzZWQgaW1tZWRpYXRlbHkuXG4gKlxuICogV2hlbiB1c2luZyBgbWF4RW50cmllc2AsIHRoZSBlbnRyeSBsZWFzdC1yZWNlbnRseSByZXF1ZXN0ZWQgd2lsbCBiZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBjYWNoZSBmaXJzdC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtZXhwaXJhdGlvblxuICovXG5jbGFzcyBFeHBpcmF0aW9uUGx1Z2luIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0V4cGlyYXRpb25QbHVnaW5PcHRpb25zfSBjb25maWdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2NvbmZpZy5tYXhFbnRyaWVzXSBUaGUgbWF4aW11bSBudW1iZXIgb2YgZW50cmllcyB0byBjYWNoZS5cbiAgICAgKiBFbnRyaWVzIHVzZWQgdGhlIGxlYXN0IHdpbGwgYmUgcmVtb3ZlZCBhcyB0aGUgbWF4aW11bSBpcyByZWFjaGVkLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbY29uZmlnLm1heEFnZVNlY29uZHNdIFRoZSBtYXhpbXVtIGFnZSBvZiBhbiBlbnRyeSBiZWZvcmVcbiAgICAgKiBpdCdzIHRyZWF0ZWQgYXMgc3RhbGUgYW5kIHJlbW92ZWQuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtjb25maWcubWF0Y2hPcHRpb25zXSBUaGUgW2BDYWNoZVF1ZXJ5T3B0aW9uc2BdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYWNoZS9kZWxldGUjUGFyYW1ldGVycylcbiAgICAgKiB0aGF0IHdpbGwgYmUgdXNlZCB3aGVuIGNhbGxpbmcgYGRlbGV0ZSgpYCBvbiB0aGUgY2FjaGUuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbY29uZmlnLnB1cmdlT25RdW90YUVycm9yXSBXaGV0aGVyIHRvIG9wdCB0aGlzIGNhY2hlIGluIHRvXG4gICAgICogYXV0b21hdGljIGRlbGV0aW9uIGlmIHRoZSBhdmFpbGFibGUgc3RvcmFnZSBxdW90YSBoYXMgYmVlbiBleGNlZWRlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihjb25maWcgPSB7fSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQSBcImxpZmVjeWNsZVwiIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSB0cmlnZ2VyZWQgYXV0b21hdGljYWxseSBieSB0aGVcbiAgICAgICAgICogYHdvcmtib3gtc3RyYXRlZ2llc2AgaGFuZGxlcnMgd2hlbiBhIGBSZXNwb25zZWAgaXMgYWJvdXQgdG8gYmUgcmV0dXJuZWRcbiAgICAgICAgICogZnJvbSBhIFtDYWNoZV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhY2hlKSB0b1xuICAgICAgICAgKiB0aGUgaGFuZGxlci4gSXQgYWxsb3dzIHRoZSBgUmVzcG9uc2VgIHRvIGJlIGluc3BlY3RlZCBmb3IgZnJlc2huZXNzIGFuZFxuICAgICAgICAgKiBwcmV2ZW50cyBpdCBmcm9tIGJlaW5nIHVzZWQgaWYgdGhlIGBSZXNwb25zZWAncyBgRGF0ZWAgaGVhZGVyIHZhbHVlIGlzXG4gICAgICAgICAqIG9sZGVyIHRoYW4gdGhlIGNvbmZpZ3VyZWQgYG1heEFnZVNlY29uZHNgLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5jYWNoZU5hbWUgTmFtZSBvZiB0aGUgY2FjaGUgdGhlIHJlc3BvbnNlIGlzIGluLlxuICAgICAgICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSBvcHRpb25zLmNhY2hlZFJlc3BvbnNlIFRoZSBgUmVzcG9uc2VgIG9iamVjdCB0aGF0J3MgYmVlblxuICAgICAgICAgKiAgICAgcmVhZCBmcm9tIGEgY2FjaGUgYW5kIHdob3NlIGZyZXNobmVzcyBzaG91bGQgYmUgY2hlY2tlZC5cbiAgICAgICAgICogQHJldHVybiB7UmVzcG9uc2V9IEVpdGhlciB0aGUgYGNhY2hlZFJlc3BvbnNlYCwgaWYgaXQnc1xuICAgICAgICAgKiAgICAgZnJlc2gsIG9yIGBudWxsYCBpZiB0aGUgYFJlc3BvbnNlYCBpcyBvbGRlciB0aGFuIGBtYXhBZ2VTZWNvbmRzYC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkID0gYXN5bmMgKHsgZXZlbnQsIHJlcXVlc3QsIGNhY2hlTmFtZSwgY2FjaGVkUmVzcG9uc2UgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjYWNoZWRSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXNGcmVzaCA9IHRoaXMuX2lzUmVzcG9uc2VEYXRlRnJlc2goY2FjaGVkUmVzcG9uc2UpO1xuICAgICAgICAgICAgLy8gRXhwaXJlIGVudHJpZXMgdG8gZW5zdXJlIHRoYXQgZXZlbiBpZiB0aGUgZXhwaXJhdGlvbiBkYXRlIGhhc1xuICAgICAgICAgICAgLy8gZXhwaXJlZCwgaXQnbGwgb25seSBiZSB1c2VkIG9uY2UuXG4gICAgICAgICAgICBjb25zdCBjYWNoZUV4cGlyYXRpb24gPSB0aGlzLl9nZXRDYWNoZUV4cGlyYXRpb24oY2FjaGVOYW1lKTtcbiAgICAgICAgICAgIGRvbnRXYWl0Rm9yKGNhY2hlRXhwaXJhdGlvbi5leHBpcmVFbnRyaWVzKCkpO1xuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBtZXRhZGF0YSBmb3IgdGhlIHJlcXVlc3QgVVJMIHRvIHRoZSBjdXJyZW50IHRpbWVzdGFtcCxcbiAgICAgICAgICAgIC8vIGJ1dCBkb24ndCBgYXdhaXRgIGl0IGFzIHdlIGRvbid0IHdhbnQgdG8gYmxvY2sgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgY29uc3QgdXBkYXRlVGltZXN0YW1wRG9uZSA9IGNhY2hlRXhwaXJhdGlvbi51cGRhdGVUaW1lc3RhbXAocmVxdWVzdC51cmwpO1xuICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQud2FpdFVudGlsKHVwZGF0ZVRpbWVzdGFtcERvbmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBldmVudCBtYXkgbm90IGJlIGEgZmV0Y2ggZXZlbnQ7IG9ubHkgbG9nIHRoZSBVUkwgaWYgaXQgaXMuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJ3JlcXVlc3QnIGluIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oYFVuYWJsZSB0byBlbnN1cmUgc2VydmljZSB3b3JrZXIgc3RheXMgYWxpdmUgd2hlbiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHVwZGF0aW5nIGNhY2hlIGVudHJ5IGZvciBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCcke2dldEZyaWVuZGx5VVJMKGV2ZW50LnJlcXVlc3QudXJsKX0nLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGlzRnJlc2ggPyBjYWNoZWRSZXNwb25zZSA6IG51bGw7XG4gICAgICAgIH07XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIFwibGlmZWN5Y2xlXCIgY2FsbGJhY2sgdGhhdCB3aWxsIGJlIHRyaWdnZXJlZCBhdXRvbWF0aWNhbGx5IGJ5IHRoZVxuICAgICAgICAgKiBgd29ya2JveC1zdHJhdGVnaWVzYCBoYW5kbGVycyB3aGVuIGFuIGVudHJ5IGlzIGFkZGVkIHRvIGEgY2FjaGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLmNhY2hlTmFtZSBOYW1lIG9mIHRoZSBjYWNoZSB0aGF0IHdhcyB1cGRhdGVkLlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IFRoZSBSZXF1ZXN0IGZvciB0aGUgY2FjaGVkIGVudHJ5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jYWNoZURpZFVwZGF0ZSA9IGFzeW5jICh7IGNhY2hlTmFtZSwgcmVxdWVzdCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGFzc2VydC5pc1R5cGUoY2FjaGVOYW1lLCAnc3RyaW5nJywge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjYWNoZURpZFVwZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NhY2hlTmFtZScsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1leHBpcmF0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUGx1Z2luJyxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjYWNoZURpZFVwZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ3JlcXVlc3QnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVFeHBpcmF0aW9uID0gdGhpcy5fZ2V0Q2FjaGVFeHBpcmF0aW9uKGNhY2hlTmFtZSk7XG4gICAgICAgICAgICBhd2FpdCBjYWNoZUV4cGlyYXRpb24udXBkYXRlVGltZXN0YW1wKHJlcXVlc3QudXJsKTtcbiAgICAgICAgICAgIGF3YWl0IGNhY2hlRXhwaXJhdGlvbi5leHBpcmVFbnRyaWVzKCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoIShjb25maWcubWF4RW50cmllcyB8fCBjb25maWcubWF4QWdlU2Vjb25kcykpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdtYXgtZW50cmllcy1vci1hZ2UtcmVxdWlyZWQnLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb25maWcubWF4RW50cmllcykge1xuICAgICAgICAgICAgICAgIGFzc2VydC5pc1R5cGUoY29uZmlnLm1heEVudHJpZXMsICdudW1iZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LWV4cGlyYXRpb24nLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdQbHVnaW4nLFxuICAgICAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnY29uZmlnLm1heEVudHJpZXMnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbmZpZy5tYXhBZ2VTZWNvbmRzKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShjb25maWcubWF4QWdlU2Vjb25kcywgJ251bWJlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtZXhwaXJhdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1BsdWdpbicsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdjb25maWcubWF4QWdlU2Vjb25kcycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLl9tYXhBZ2VTZWNvbmRzID0gY29uZmlnLm1heEFnZVNlY29uZHM7XG4gICAgICAgIHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIGlmIChjb25maWcucHVyZ2VPblF1b3RhRXJyb3IpIHtcbiAgICAgICAgICAgIHJlZ2lzdGVyUXVvdGFFcnJvckNhbGxiYWNrKCgpID0+IHRoaXMuZGVsZXRlQ2FjaGVBbmRNZXRhZGF0YSgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBBIHNpbXBsZSBoZWxwZXIgbWV0aG9kIHRvIHJldHVybiBhIENhY2hlRXhwaXJhdGlvbiBpbnN0YW5jZSBmb3IgYSBnaXZlblxuICAgICAqIGNhY2hlIG5hbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2FjaGVOYW1lXG4gICAgICogQHJldHVybiB7Q2FjaGVFeHBpcmF0aW9ufVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfZ2V0Q2FjaGVFeHBpcmF0aW9uKGNhY2hlTmFtZSkge1xuICAgICAgICBpZiAoY2FjaGVOYW1lID09PSBjYWNoZU5hbWVzLmdldFJ1bnRpbWVOYW1lKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2V4cGlyZS1jdXN0b20tY2FjaGVzLW9ubHknKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2FjaGVFeHBpcmF0aW9uID0gdGhpcy5fY2FjaGVFeHBpcmF0aW9ucy5nZXQoY2FjaGVOYW1lKTtcbiAgICAgICAgaWYgKCFjYWNoZUV4cGlyYXRpb24pIHtcbiAgICAgICAgICAgIGNhY2hlRXhwaXJhdGlvbiA9IG5ldyBDYWNoZUV4cGlyYXRpb24oY2FjaGVOYW1lLCB0aGlzLl9jb25maWcpO1xuICAgICAgICAgICAgdGhpcy5fY2FjaGVFeHBpcmF0aW9ucy5zZXQoY2FjaGVOYW1lLCBjYWNoZUV4cGlyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWNoZUV4cGlyYXRpb247XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7UmVzcG9uc2V9IGNhY2hlZFJlc3BvbnNlXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2lzUmVzcG9uc2VEYXRlRnJlc2goY2FjaGVkUmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9tYXhBZ2VTZWNvbmRzKSB7XG4gICAgICAgICAgICAvLyBXZSBhcmVuJ3QgZXhwaXJpbmcgYnkgYWdlLCBzbyByZXR1cm4gdHJ1ZSwgaXQncyBmcmVzaFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlICdkYXRlJyBoZWFkZXIgd2lsbCBzdWZmaWNlIGEgcXVpY2sgZXhwaXJhdGlvbiBjaGVjay5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3N3LXRvb2xib3gvaXNzdWVzLzE2NCBmb3JcbiAgICAgICAgLy8gZGlzY3Vzc2lvbi5cbiAgICAgICAgY29uc3QgZGF0ZUhlYWRlclRpbWVzdGFtcCA9IHRoaXMuX2dldERhdGVIZWFkZXJUaW1lc3RhbXAoY2FjaGVkUmVzcG9uc2UpO1xuICAgICAgICBpZiAoZGF0ZUhlYWRlclRpbWVzdGFtcCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gVW5hYmxlIHRvIHBhcnNlIGRhdGUsIHNvIGFzc3VtZSBpdCdzIGZyZXNoLlxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIHZhbGlkIGhlYWRlclRpbWUsIHRoZW4gb3VyIHJlc3BvbnNlIGlzIGZyZXNoIGlmZiB0aGVcbiAgICAgICAgLy8gaGVhZGVyVGltZSBwbHVzIG1heEFnZVNlY29uZHMgaXMgZ3JlYXRlciB0aGFuIHRoZSBjdXJyZW50IHRpbWUuXG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHJldHVybiBkYXRlSGVhZGVyVGltZXN0YW1wID49IG5vdyAtICh0aGlzLl9tYXhBZ2VTZWNvbmRzICogMTAwMCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgZXh0cmFjdCB0aGUgZGF0YSBoZWFkZXIgYW5kIHBhcnNlIGl0IGludG8gYSB1c2VmdWxcbiAgICAgKiB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVzcG9uc2V9IGNhY2hlZFJlc3BvbnNlXG4gICAgICogQHJldHVybiB7bnVtYmVyfG51bGx9XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9nZXREYXRlSGVhZGVyVGltZXN0YW1wKGNhY2hlZFJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghY2FjaGVkUmVzcG9uc2UuaGVhZGVycy5oYXMoJ2RhdGUnKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0ZUhlYWRlciA9IGNhY2hlZFJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdkYXRlJyk7XG4gICAgICAgIGNvbnN0IHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkYXRlSGVhZGVyKTtcbiAgICAgICAgY29uc3QgaGVhZGVyVGltZSA9IHBhcnNlZERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAvLyBJZiB0aGUgRGF0ZSBoZWFkZXIgd2FzIGludmFsaWQgZm9yIHNvbWUgcmVhc29uLCBwYXJzZWREYXRlLmdldFRpbWUoKVxuICAgICAgICAvLyB3aWxsIHJldHVybiBOYU4uXG4gICAgICAgIGlmIChpc05hTihoZWFkZXJUaW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhlYWRlclRpbWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgaXMgYSBoZWxwZXIgbWV0aG9kIHRoYXQgcGVyZm9ybXMgdHdvIG9wZXJhdGlvbnM6XG4gICAgICpcbiAgICAgKiAtIERlbGV0ZXMgKmFsbCogdGhlIHVuZGVybHlpbmcgQ2FjaGUgaW5zdGFuY2VzIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHBsdWdpblxuICAgICAqIGluc3RhbmNlLCBieSBjYWxsaW5nIGNhY2hlcy5kZWxldGUoKSBvbiB5b3VyIGJlaGFsZi5cbiAgICAgKiAtIERlbGV0ZXMgdGhlIG1ldGFkYXRhIGZyb20gSW5kZXhlZERCIHVzZWQgdG8ga2VlcCB0cmFjayBvZiBleHBpcmF0aW9uXG4gICAgICogZGV0YWlscyBmb3IgZWFjaCBDYWNoZSBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIFdoZW4gdXNpbmcgY2FjaGUgZXhwaXJhdGlvbiwgY2FsbGluZyB0aGlzIG1ldGhvZCBpcyBwcmVmZXJhYmxlIHRvIGNhbGxpbmdcbiAgICAgKiBgY2FjaGVzLmRlbGV0ZSgpYCBkaXJlY3RseSwgc2luY2UgdGhpcyB3aWxsIGVuc3VyZSB0aGF0IHRoZSBJbmRleGVkREJcbiAgICAgKiBtZXRhZGF0YSBpcyBhbHNvIGNsZWFubHkgcmVtb3ZlZCBhbmQgb3BlbiBJbmRleGVkREIgaW5zdGFuY2VzIGFyZSBkZWxldGVkLlxuICAgICAqXG4gICAgICogTm90ZSB0aGF0IGlmIHlvdSdyZSAqbm90KiB1c2luZyBjYWNoZSBleHBpcmF0aW9uIGZvciBhIGdpdmVuIGNhY2hlLCBjYWxsaW5nXG4gICAgICogYGNhY2hlcy5kZWxldGUoKWAgYW5kIHBhc3NpbmcgaW4gdGhlIGNhY2hlJ3MgbmFtZSBzaG91bGQgYmUgc3VmZmljaWVudC5cbiAgICAgKiBUaGVyZSBpcyBubyBXb3JrYm94LXNwZWNpZmljIG1ldGhvZCBuZWVkZWQgZm9yIGNsZWFudXAgaW4gdGhhdCBjYXNlLlxuICAgICAqL1xuICAgIGFzeW5jIGRlbGV0ZUNhY2hlQW5kTWV0YWRhdGEoKSB7XG4gICAgICAgIC8vIERvIHRoaXMgb25lIGF0IGEgdGltZSBpbnN0ZWFkIG9mIGFsbCBhdCBvbmNlIHZpYSBgUHJvbWlzZS5hbGwoKWAgdG9cbiAgICAgICAgLy8gcmVkdWNlIHRoZSBjaGFuY2Ugb2YgaW5jb25zaXN0ZW5jeSBpZiBhIHByb21pc2UgcmVqZWN0cy5cbiAgICAgICAgZm9yIChjb25zdCBbY2FjaGVOYW1lLCBjYWNoZUV4cGlyYXRpb25dIG9mIHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMpIHtcbiAgICAgICAgICAgIGF3YWl0IHNlbGYuY2FjaGVzLmRlbGV0ZShjYWNoZU5hbWUpO1xuICAgICAgICAgICAgYXdhaXQgY2FjaGVFeHBpcmF0aW9uLmRlbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlc2V0IHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMgdG8gaXRzIGluaXRpYWwgc3RhdGUuXG4gICAgICAgIHRoaXMuX2NhY2hlRXhwaXJhdGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgfVxufVxuZXhwb3J0IHsgRXhwaXJhdGlvblBsdWdpbiB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBAdHMtaWdub3JlXG50cnkge1xuICAgIHNlbGZbJ3dvcmtib3g6ZXhwaXJhdGlvbjo2LjIuNCddICYmIF8oKTtcbn1cbmNhdGNoIChlKSB7IH1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IENhY2hlRXhwaXJhdGlvbiB9IGZyb20gJy4vQ2FjaGVFeHBpcmF0aW9uLmpzJztcbmltcG9ydCB7IEV4cGlyYXRpb25QbHVnaW4gfSBmcm9tICcuL0V4cGlyYXRpb25QbHVnaW4uanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQG1vZHVsZSB3b3JrYm94LWV4cGlyYXRpb25cbiAqL1xuZXhwb3J0IHsgQ2FjaGVFeHBpcmF0aW9uLCBFeHBpcmF0aW9uUGx1Z2luLCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgb3BlbkRCLCBkZWxldGVEQiB9IGZyb20gJ2lkYic7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmNvbnN0IERCX05BTUUgPSAnd29ya2JveC1leHBpcmF0aW9uJztcbmNvbnN0IENBQ0hFX09CSkVDVF9TVE9SRSA9ICdjYWNoZS1lbnRyaWVzJztcbmNvbnN0IG5vcm1hbGl6ZVVSTCA9ICh1bk5vcm1hbGl6ZWRVcmwpID0+IHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHVuTm9ybWFsaXplZFVybCwgbG9jYXRpb24uaHJlZik7XG4gICAgdXJsLmhhc2ggPSAnJztcbiAgICByZXR1cm4gdXJsLmhyZWY7XG59O1xuLyoqXG4gKiBSZXR1cm5zIHRoZSB0aW1lc3RhbXAgbW9kZWwuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgQ2FjaGVUaW1lc3RhbXBzTW9kZWwge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNhY2hlTmFtZVxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihjYWNoZU5hbWUpIHtcbiAgICAgICAgdGhpcy5fZGIgPSBudWxsO1xuICAgICAgICB0aGlzLl9jYWNoZU5hbWUgPSBjYWNoZU5hbWU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGFuIHVwZ3JhZGUgb2YgaW5kZXhlZERCLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtJREJQRGF0YWJhc2U8Q2FjaGVEYlNjaGVtYT59IGRiXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF91cGdyYWRlRGIoZGIpIHtcbiAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBFZGdlSFRNTCBkb2Vzbid0IHN1cHBvcnQgYXJyYXlzIGFzIGEga2V5UGF0aCwgc28gd2VcbiAgICAgICAgLy8gaGF2ZSB0byB1c2UgdGhlIGBpZGAga2V5UGF0aCBoZXJlIGFuZCBjcmVhdGUgb3VyIG93biB2YWx1ZXMgKGFcbiAgICAgICAgLy8gY29uY2F0ZW5hdGlvbiBvZiBgdXJsICsgY2FjaGVOYW1lYCkgaW5zdGVhZCBvZiBzaW1wbHkgdXNpbmdcbiAgICAgICAgLy8gYGtleVBhdGg6IFsndXJsJywgJ2NhY2hlTmFtZSddYCwgd2hpY2ggaXMgc3VwcG9ydGVkIGluIG90aGVyIGJyb3dzZXJzLlxuICAgICAgICBjb25zdCBvYmpTdG9yZSA9IGRiLmNyZWF0ZU9iamVjdFN0b3JlKENBQ0hFX09CSkVDVF9TVE9SRSwgeyBrZXlQYXRoOiAnaWQnIH0pO1xuICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IG9uY2Ugd2UgZG9uJ3QgaGF2ZSB0byBzdXBwb3J0IEVkZ2VIVE1MLCB3ZSBjYW5cbiAgICAgICAgLy8gY3JlYXRlIGEgc2luZ2xlIGluZGV4IHdpdGggdGhlIGtleVBhdGggYFsnY2FjaGVOYW1lJywgJ3RpbWVzdGFtcCddYFxuICAgICAgICAvLyBpbnN0ZWFkIG9mIGRvaW5nIGJvdGggdGhlc2UgaW5kZXhlcy5cbiAgICAgICAgb2JqU3RvcmUuY3JlYXRlSW5kZXgoJ2NhY2hlTmFtZScsICdjYWNoZU5hbWUnLCB7IHVuaXF1ZTogZmFsc2UgfSk7XG4gICAgICAgIG9ialN0b3JlLmNyZWF0ZUluZGV4KCd0aW1lc3RhbXAnLCAndGltZXN0YW1wJywgeyB1bmlxdWU6IGZhbHNlIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhbiB1cGdyYWRlIG9mIGluZGV4ZWREQiBhbmQgZGVsZXRlcyBkZXByZWNhdGVkIERCcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SURCUERhdGFiYXNlPENhY2hlRGJTY2hlbWE+fSBkYlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfdXBncmFkZURiQW5kRGVsZXRlT2xkRGJzKGRiKSB7XG4gICAgICAgIHRoaXMuX3VwZ3JhZGVEYihkYik7XG4gICAgICAgIGlmICh0aGlzLl9jYWNoZU5hbWUpIHtcbiAgICAgICAgICAgIHZvaWQgZGVsZXRlREIodGhpcy5fY2FjaGVOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcFxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBhc3luYyBzZXRUaW1lc3RhbXAodXJsLCB0aW1lc3RhbXApIHtcbiAgICAgICAgdXJsID0gbm9ybWFsaXplVVJMKHVybCk7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0ge1xuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgdGltZXN0YW1wLFxuICAgICAgICAgICAgY2FjaGVOYW1lOiB0aGlzLl9jYWNoZU5hbWUsXG4gICAgICAgICAgICAvLyBDcmVhdGluZyBhbiBJRCBmcm9tIHRoZSBVUkwgYW5kIGNhY2hlIG5hbWUgd29uJ3QgYmUgbmVjZXNzYXJ5IG9uY2VcbiAgICAgICAgICAgIC8vIEVkZ2Ugc3dpdGNoZXMgdG8gQ2hyb21pdW0gYW5kIGFsbCBicm93c2VycyB3ZSBzdXBwb3J0IHdvcmsgd2l0aFxuICAgICAgICAgICAgLy8gYXJyYXkga2V5UGF0aHMuXG4gICAgICAgICAgICBpZDogdGhpcy5fZ2V0SWQodXJsKSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZGIgPSBhd2FpdCB0aGlzLmdldERiKCk7XG4gICAgICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oQ0FDSEVfT0JKRUNUX1NUT1JFLCAncmVhZHdyaXRlJywgeyBkdXJhYmlsaXR5OiAncmVsYXhlZCcgfSk7XG4gICAgICAgIGF3YWl0IHR4LnN0b3JlLnB1dChlbnRyeSk7XG4gICAgICAgIGF3YWl0IHR4LmRvbmU7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHRpbWVzdGFtcCBzdG9yZWQgZm9yIGEgZ2l2ZW4gVVJMLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge251bWJlciB8IHVuZGVmaW5lZH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgZ2V0VGltZXN0YW1wKHVybCkge1xuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IHRoaXMuZ2V0RGIoKTtcbiAgICAgICAgY29uc3QgZW50cnkgPSBhd2FpdCBkYi5nZXQoQ0FDSEVfT0JKRUNUX1NUT1JFLCB0aGlzLl9nZXRJZCh1cmwpKTtcbiAgICAgICAgcmV0dXJuIGVudHJ5ID09PSBudWxsIHx8IGVudHJ5ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbnRyeS50aW1lc3RhbXA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEl0ZXJhdGVzIHRocm91Z2ggYWxsIHRoZSBlbnRyaWVzIGluIHRoZSBvYmplY3Qgc3RvcmUgKGZyb20gbmV3ZXN0IHRvXG4gICAgICogb2xkZXN0KSBhbmQgcmVtb3ZlcyBlbnRyaWVzIG9uY2UgZWl0aGVyIGBtYXhDb3VudGAgaXMgcmVhY2hlZCBvciB0aGVcbiAgICAgKiBlbnRyeSdzIHRpbWVzdGFtcCBpcyBsZXNzIHRoYW4gYG1pblRpbWVzdGFtcGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluVGltZXN0YW1wXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heENvdW50XG4gICAgICogQHJldHVybiB7QXJyYXk8c3RyaW5nPn1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgZXhwaXJlRW50cmllcyhtaW5UaW1lc3RhbXAsIG1heENvdW50KSB7XG4gICAgICAgIGNvbnN0IGRiID0gYXdhaXQgdGhpcy5nZXREYigpO1xuICAgICAgICBsZXQgY3Vyc29yID0gYXdhaXQgZGIudHJhbnNhY3Rpb24oQ0FDSEVfT0JKRUNUX1NUT1JFKS5zdG9yZS5pbmRleCgndGltZXN0YW1wJykub3BlbkN1cnNvcihudWxsLCAncHJldicpO1xuICAgICAgICBjb25zdCBlbnRyaWVzVG9EZWxldGUgPSBbXTtcbiAgICAgICAgbGV0IGVudHJpZXNOb3REZWxldGVkQ291bnQgPSAwO1xuICAgICAgICB3aGlsZSAoY3Vyc29yKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjdXJzb3IudmFsdWU7XG4gICAgICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IG9uY2Ugd2UgY2FuIHVzZSBhIG11bHRpLWtleSBpbmRleCwgd2VcbiAgICAgICAgICAgIC8vIHdvbid0IGhhdmUgdG8gY2hlY2sgYGNhY2hlTmFtZWAgaGVyZS5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuY2FjaGVOYW1lID09PSB0aGlzLl9jYWNoZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAvLyBEZWxldGUgYW4gZW50cnkgaWYgaXQncyBvbGRlciB0aGFuIHRoZSBtYXggYWdlIG9yXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYWxyZWFkeSBoYXZlIHRoZSBtYXggbnVtYmVyIGFsbG93ZWQuXG4gICAgICAgICAgICAgICAgaWYgKChtaW5UaW1lc3RhbXAgJiYgcmVzdWx0LnRpbWVzdGFtcCA8IG1pblRpbWVzdGFtcCkgfHxcbiAgICAgICAgICAgICAgICAgICAgKG1heENvdW50ICYmIGVudHJpZXNOb3REZWxldGVkQ291bnQgPj0gbWF4Q291bnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogd2Ugc2hvdWxkIGJlIGFibGUgdG8gZGVsZXRlIHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyBlbnRyeSByaWdodCBoZXJlLCBidXQgZG9pbmcgc28gY2F1c2VzIGFuIGl0ZXJhdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyBidWcgaW4gU2FmYXJpIHN0YWJsZSAoZml4ZWQgaW4gVFApLiBJbnN0ZWFkIHdlIGNhblxuICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUga2V5cyBvZiB0aGUgZW50cmllcyB0byBkZWxldGUsIGFuZCB0aGVuXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgc2VwYXJhdGUgdHJhbnNhY3Rpb25zLlxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE5NzhcbiAgICAgICAgICAgICAgICAgICAgLy8gY3Vyc29yLmRlbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBXZSBvbmx5IG5lZWQgdG8gcmV0dXJuIHRoZSBVUkwsIG5vdCB0aGUgd2hvbGUgZW50cnkuXG4gICAgICAgICAgICAgICAgICAgIGVudHJpZXNUb0RlbGV0ZS5wdXNoKGN1cnNvci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbnRyaWVzTm90RGVsZXRlZENvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3Vyc29yID0gYXdhaXQgY3Vyc29yLmNvbnRpbnVlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBvbmNlIHRoZSBTYWZhcmkgYnVnIGluIHRoZSBmb2xsb3dpbmcgaXNzdWUgaXMgZml4ZWQsXG4gICAgICAgIC8vIHdlIHNob3VsZCBiZSBhYmxlIHRvIHJlbW92ZSB0aGlzIGxvb3AgYW5kIGRvIHRoZSBlbnRyeSBkZWxldGlvbiBpbiB0aGVcbiAgICAgICAgLy8gY3Vyc29yIGxvb3AgYWJvdmU6XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMTk3OFxuICAgICAgICBjb25zdCB1cmxzRGVsZXRlZCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXNUb0RlbGV0ZSkge1xuICAgICAgICAgICAgYXdhaXQgZGIuZGVsZXRlKENBQ0hFX09CSkVDVF9TVE9SRSwgZW50cnkuaWQpO1xuICAgICAgICAgICAgdXJsc0RlbGV0ZWQucHVzaChlbnRyeS51cmwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmxzRGVsZXRlZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGFrZXMgYSBVUkwgYW5kIHJldHVybnMgYW4gSUQgdGhhdCB3aWxsIGJlIHVuaXF1ZSBpbiB0aGUgb2JqZWN0IHN0b3JlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2dldElkKHVybCkge1xuICAgICAgICAvLyBDcmVhdGluZyBhbiBJRCBmcm9tIHRoZSBVUkwgYW5kIGNhY2hlIG5hbWUgd29uJ3QgYmUgbmVjZXNzYXJ5IG9uY2VcbiAgICAgICAgLy8gRWRnZSBzd2l0Y2hlcyB0byBDaHJvbWl1bSBhbmQgYWxsIGJyb3dzZXJzIHdlIHN1cHBvcnQgd29yayB3aXRoXG4gICAgICAgIC8vIGFycmF5IGtleVBhdGhzLlxuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVOYW1lICsgJ3wnICsgbm9ybWFsaXplVVJMKHVybCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAgKiBSZXR1cm5zIGFuIG9wZW4gY29ubmVjdGlvbiB0byB0aGUgZGF0YWJhc2UuXG4gICAgICAqXG4gICAgICAqIEBwcml2YXRlXG4gICAgICAqL1xuICAgIGFzeW5jIGdldERiKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2RiKSB7XG4gICAgICAgICAgICB0aGlzLl9kYiA9IGF3YWl0IG9wZW5EQihEQl9OQU1FLCAxLCB7XG4gICAgICAgICAgICAgICAgdXBncmFkZTogdGhpcy5fdXBncmFkZURiQW5kRGVsZXRlT2xkRGJzLmJpbmQodGhpcyksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fZGI7XG4gICAgfVxufVxuZXhwb3J0IHsgQ2FjaGVUaW1lc3RhbXBzTW9kZWwgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgY2FjaGVOYW1lcyB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9jYWNoZU5hbWVzLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyB3YWl0VW50aWwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvd2FpdFVudGlsLmpzJztcbmltcG9ydCB7IGNyZWF0ZUNhY2hlS2V5IH0gZnJvbSAnLi91dGlscy9jcmVhdGVDYWNoZUtleS5qcyc7XG5pbXBvcnQgeyBQcmVjYWNoZUluc3RhbGxSZXBvcnRQbHVnaW4gfSBmcm9tICcuL3V0aWxzL1ByZWNhY2hlSW5zdGFsbFJlcG9ydFBsdWdpbi5qcyc7XG5pbXBvcnQgeyBQcmVjYWNoZUNhY2hlS2V5UGx1Z2luIH0gZnJvbSAnLi91dGlscy9QcmVjYWNoZUNhY2hlS2V5UGx1Z2luLmpzJztcbmltcG9ydCB7IHByaW50Q2xlYW51cERldGFpbHMgfSBmcm9tICcuL3V0aWxzL3ByaW50Q2xlYW51cERldGFpbHMuanMnO1xuaW1wb3J0IHsgcHJpbnRJbnN0YWxsRGV0YWlscyB9IGZyb20gJy4vdXRpbHMvcHJpbnRJbnN0YWxsRGV0YWlscy5qcyc7XG5pbXBvcnQgeyBQcmVjYWNoZVN0cmF0ZWd5IH0gZnJvbSAnLi9QcmVjYWNoZVN0cmF0ZWd5LmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFBlcmZvcm1zIGVmZmljaWVudCBwcmVjYWNoaW5nIG9mIGFzc2V0cy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5jbGFzcyBQcmVjYWNoZUNvbnRyb2xsZXIge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBQcmVjYWNoZUNvbnRyb2xsZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhY2hlTmFtZV0gVGhlIGNhY2hlIHRvIHVzZSBmb3IgcHJlY2FjaGluZy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucGx1Z2luc10gUGx1Z2lucyB0byB1c2Ugd2hlbiBwcmVjYWNoaW5nIGFzIHdlbGxcbiAgICAgKiBhcyByZXNwb25kaW5nIHRvIGZldGNoIGV2ZW50cyBmb3IgcHJlY2FjaGVkIGFzc2V0cy5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmZhbGxiYWNrVG9OZXR3b3JrPXRydWVdIFdoZXRoZXIgdG8gYXR0ZW1wdCB0b1xuICAgICAqIGdldCB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgbmV0d29yayBpZiB0aGVyZSdzIGEgcHJlY2FjaGUgbWlzcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih7IGNhY2hlTmFtZSwgcGx1Z2lucyA9IFtdLCBmYWxsYmFja1RvTmV0d29yayA9IHRydWUgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuX3VybHNUb0NhY2hlS2V5cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVNb2RlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fY2FjaGVLZXlzVG9JbnRlZ3JpdGllcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fc3RyYXRlZ3kgPSBuZXcgUHJlY2FjaGVTdHJhdGVneSh7XG4gICAgICAgICAgICBjYWNoZU5hbWU6IGNhY2hlTmFtZXMuZ2V0UHJlY2FjaGVOYW1lKGNhY2hlTmFtZSksXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgLi4ucGx1Z2lucyxcbiAgICAgICAgICAgICAgICBuZXcgUHJlY2FjaGVDYWNoZUtleVBsdWdpbih7IHByZWNhY2hlQ29udHJvbGxlcjogdGhpcyB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmYWxsYmFja1RvTmV0d29yayxcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEJpbmQgdGhlIGluc3RhbGwgYW5kIGFjdGl2YXRlIG1ldGhvZHMgdG8gdGhlIGluc3RhbmNlLlxuICAgICAgICB0aGlzLmluc3RhbGwgPSB0aGlzLmluc3RhbGwuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZSA9IHRoaXMuYWN0aXZhdGUuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHR5cGUge21vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVTdHJhdGVneX0gVGhlIHN0cmF0ZWd5IGNyZWF0ZWQgYnkgdGhpcyBjb250cm9sbGVyIGFuZFxuICAgICAqIHVzZWQgdG8gY2FjaGUgYXNzZXRzIGFuZCByZXNwb25kIHRvIGZldGNoIGV2ZW50cy5cbiAgICAgKi9cbiAgICBnZXQgc3RyYXRlZ3koKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdHJhdGVneTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBpdGVtcyB0byB0aGUgcHJlY2FjaGUgbGlzdCwgcmVtb3ZpbmcgYW55IGR1cGxpY2F0ZXMgYW5kXG4gICAgICogc3RvcmVzIHRoZSBmaWxlcyBpbiB0aGVcbiAgICAgKiBbXCJwcmVjYWNoZSBjYWNoZVwiXXtAbGluayBtb2R1bGU6d29ya2JveC1jb3JlLmNhY2hlTmFtZXN9IHdoZW4gdGhlIHNlcnZpY2VcbiAgICAgKiB3b3JrZXIgaW5zdGFsbHMuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheTxPYmplY3R8c3RyaW5nPn0gW2VudHJpZXM9W11dIEFycmF5IG9mIGVudHJpZXMgdG8gcHJlY2FjaGUuXG4gICAgICovXG4gICAgcHJlY2FjaGUoZW50cmllcykge1xuICAgICAgICB0aGlzLmFkZFRvQ2FjaGVMaXN0KGVudHJpZXMpO1xuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbGxBbmRBY3RpdmVMaXN0ZW5lcnNBZGRlZCkge1xuICAgICAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdpbnN0YWxsJywgdGhpcy5pbnN0YWxsKTtcbiAgICAgICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCB0aGlzLmFjdGl2YXRlKTtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbGxBbmRBY3RpdmVMaXN0ZW5lcnNBZGRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2Qgd2lsbCBhZGQgaXRlbXMgdG8gdGhlIHByZWNhY2hlIGxpc3QsIHJlbW92aW5nIGR1cGxpY2F0ZXNcbiAgICAgKiBhbmQgZW5zdXJpbmcgdGhlIGluZm9ybWF0aW9uIGlzIHZhbGlkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheTxtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlci5QcmVjYWNoZUVudHJ5fHN0cmluZz59IGVudHJpZXNcbiAgICAgKiAgICAgQXJyYXkgb2YgZW50cmllcyB0byBwcmVjYWNoZS5cbiAgICAgKi9cbiAgICBhZGRUb0NhY2hlTGlzdChlbnRyaWVzKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNBcnJheShlbnRyaWVzLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcHJlY2FjaGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUHJlY2FjaGVDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2FkZFRvQ2FjaGVMaXN0JyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdlbnRyaWVzJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVybHNUb1dhcm5BYm91dCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzIyNTlcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZW50cnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdXJsc1RvV2FybkFib3V0LnB1c2goZW50cnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkgJiYgZW50cnkucmV2aXNpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHVybHNUb1dhcm5BYm91dC5wdXNoKGVudHJ5LnVybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IGNhY2hlS2V5LCB1cmwgfSA9IGNyZWF0ZUNhY2hlS2V5KGVudHJ5KTtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlTW9kZSA9ICh0eXBlb2YgZW50cnkgIT09ICdzdHJpbmcnICYmIGVudHJ5LnJldmlzaW9uKSA/XG4gICAgICAgICAgICAgICAgJ3JlbG9hZCcgOiAnZGVmYXVsdCc7XG4gICAgICAgICAgICBpZiAodGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmhhcyh1cmwpICYmXG4gICAgICAgICAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVLZXlzLmdldCh1cmwpICE9PSBjYWNoZUtleSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2FkZC10by1jYWNoZS1saXN0LWNvbmZsaWN0aW5nLWVudHJpZXMnLCB7XG4gICAgICAgICAgICAgICAgICAgIGZpcnN0RW50cnk6IHRoaXMuX3VybHNUb0NhY2hlS2V5cy5nZXQodXJsKSxcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kRW50cnk6IGNhY2hlS2V5LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbnRyeSAhPT0gJ3N0cmluZycgJiYgZW50cnkuaW50ZWdyaXR5KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlS2V5c1RvSW50ZWdyaXRpZXMuaGFzKGNhY2hlS2V5KSAmJlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleXNUb0ludGVncml0aWVzLmdldChjYWNoZUtleSkgIT09IGVudHJ5LmludGVncml0eSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdhZGQtdG8tY2FjaGUtbGlzdC1jb25mbGljdGluZy1pbnRlZ3JpdGllcycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5c1RvSW50ZWdyaXRpZXMuc2V0KGNhY2hlS2V5LCBlbnRyeS5pbnRlZ3JpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fdXJsc1RvQ2FjaGVLZXlzLnNldCh1cmwsIGNhY2hlS2V5KTtcbiAgICAgICAgICAgIHRoaXMuX3VybHNUb0NhY2hlTW9kZXMuc2V0KHVybCwgY2FjaGVNb2RlKTtcbiAgICAgICAgICAgIGlmICh1cmxzVG9XYXJuQWJvdXQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhcm5pbmdNZXNzYWdlID0gYFdvcmtib3ggaXMgcHJlY2FjaGluZyBVUkxzIHdpdGhvdXQgcmV2aXNpb24gYCArXG4gICAgICAgICAgICAgICAgICAgIGBpbmZvOiAke3VybHNUb1dhcm5BYm91dC5qb2luKCcsICcpfVxcblRoaXMgaXMgZ2VuZXJhbGx5IE5PVCBzYWZlLiBgICtcbiAgICAgICAgICAgICAgICAgICAgYExlYXJuIG1vcmUgYXQgaHR0cHM6Ly9iaXQubHkvd2ItcHJlY2FjaGVgO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSBjb25zb2xlIGRpcmVjdGx5IHRvIGRpc3BsYXkgdGhpcyB3YXJuaW5nIHdpdGhvdXQgYmxvYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgLy8gYnVuZGxlIHNpemVzIGJ5IHB1bGxpbmcgaW4gYWxsIG9mIHRoZSBsb2dnZXIgY29kZWJhc2UgaW4gcHJvZC5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci53YXJuKHdhcm5pbmdNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlY2FjaGVzIG5ldyBhbmQgdXBkYXRlZCBhc3NldHMuIENhbGwgdGhpcyBtZXRob2QgZnJvbSB0aGUgc2VydmljZSB3b3JrZXJcbiAgICAgKiBpbnN0YWxsIGV2ZW50LlxuICAgICAqXG4gICAgICogTm90ZTogdGhpcyBtZXRob2QgY2FsbHMgYGV2ZW50LndhaXRVbnRpbCgpYCBmb3IgeW91LCBzbyB5b3UgZG8gbm90IG5lZWRcbiAgICAgKiB0byBjYWxsIGl0IHlvdXJzZWxmIGluIHlvdXIgZXZlbnQgaGFuZGxlcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuSW5zdGFsbFJlc3VsdD59XG4gICAgICovXG4gICAgaW5zdGFsbChldmVudCkge1xuICAgICAgICAvLyB3YWl0VW50aWwgcmV0dXJucyBQcm9taXNlPGFueT5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtcmV0dXJuXG4gICAgICAgIHJldHVybiB3YWl0VW50aWwoZXZlbnQsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluc3RhbGxSZXBvcnRQbHVnaW4gPSBuZXcgUHJlY2FjaGVJbnN0YWxsUmVwb3J0UGx1Z2luKCk7XG4gICAgICAgICAgICB0aGlzLnN0cmF0ZWd5LnBsdWdpbnMucHVzaChpbnN0YWxsUmVwb3J0UGx1Z2luKTtcbiAgICAgICAgICAgIC8vIENhY2hlIGVudHJpZXMgb25lIGF0IGEgdGltZS5cbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzI1MjhcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3VybCwgY2FjaGVLZXldIG9mIHRoaXMuX3VybHNUb0NhY2hlS2V5cykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGludGVncml0eSA9IHRoaXMuX2NhY2hlS2V5c1RvSW50ZWdyaXRpZXMuZ2V0KGNhY2hlS2V5KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZU1vZGUgPSB0aGlzLl91cmxzVG9DYWNoZU1vZGVzLmdldCh1cmwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwsIHtcbiAgICAgICAgICAgICAgICAgICAgaW50ZWdyaXR5LFxuICAgICAgICAgICAgICAgICAgICBjYWNoZTogY2FjaGVNb2RlLFxuICAgICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbCh0aGlzLnN0cmF0ZWd5LmhhbmRsZUFsbCh7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBjYWNoZUtleSB9LFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IHVwZGF0ZWRVUkxzLCBub3RVcGRhdGVkVVJMcyB9ID0gaW5zdGFsbFJlcG9ydFBsdWdpbjtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcHJpbnRJbnN0YWxsRGV0YWlscyh1cGRhdGVkVVJMcywgbm90VXBkYXRlZFVSTHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgdXBkYXRlZFVSTHMsIG5vdFVwZGF0ZWRVUkxzIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIGFzc2V0cyB0aGF0IGFyZSBubyBsb25nZXIgcHJlc2VudCBpbiB0aGUgY3VycmVudCBwcmVjYWNoZSBtYW5pZmVzdC5cbiAgICAgKiBDYWxsIHRoaXMgbWV0aG9kIGZyb20gdGhlIHNlcnZpY2Ugd29ya2VyIGFjdGl2YXRlIGV2ZW50LlxuICAgICAqXG4gICAgICogTm90ZTogdGhpcyBtZXRob2QgY2FsbHMgYGV2ZW50LndhaXRVbnRpbCgpYCBmb3IgeW91LCBzbyB5b3UgZG8gbm90IG5lZWRcbiAgICAgKiB0byBjYWxsIGl0IHlvdXJzZWxmIGluIHlvdXIgZXZlbnQgaGFuZGxlcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuQ2xlYW51cFJlc3VsdD59XG4gICAgICovXG4gICAgYWN0aXZhdGUoZXZlbnQpIHtcbiAgICAgICAgLy8gd2FpdFVudGlsIHJldHVybnMgUHJvbWlzZTxhbnk+XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLXJldHVyblxuICAgICAgICByZXR1cm4gd2FpdFVudGlsKGV2ZW50LCBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjYWNoZSA9IGF3YWl0IHNlbGYuY2FjaGVzLm9wZW4odGhpcy5zdHJhdGVneS5jYWNoZU5hbWUpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudGx5Q2FjaGVkUmVxdWVzdHMgPSBhd2FpdCBjYWNoZS5rZXlzKCk7XG4gICAgICAgICAgICBjb25zdCBleHBlY3RlZENhY2hlS2V5cyA9IG5ldyBTZXQodGhpcy5fdXJsc1RvQ2FjaGVLZXlzLnZhbHVlcygpKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWRVUkxzID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJlcXVlc3Qgb2YgY3VycmVudGx5Q2FjaGVkUmVxdWVzdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWV4cGVjdGVkQ2FjaGVLZXlzLmhhcyhyZXF1ZXN0LnVybCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgY2FjaGUuZGVsZXRlKHJlcXVlc3QpO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGVkVVJMcy5wdXNoKHJlcXVlc3QudXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHByaW50Q2xlYW51cERldGFpbHMoZGVsZXRlZFVSTHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHsgZGVsZXRlZFVSTHMgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBtYXBwaW5nIG9mIGEgcHJlY2FjaGVkIFVSTCB0byB0aGUgY29ycmVzcG9uZGluZyBjYWNoZSBrZXksIHRha2luZ1xuICAgICAqIGludG8gYWNjb3VudCB0aGUgcmV2aXNpb24gaW5mb3JtYXRpb24gZm9yIHRoZSBVUkwuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtNYXA8c3RyaW5nLCBzdHJpbmc+fSBBIFVSTCB0byBjYWNoZSBrZXkgbWFwcGluZy5cbiAgICAgKi9cbiAgICBnZXRVUkxzVG9DYWNoZUtleXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl91cmxzVG9DYWNoZUtleXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsaXN0IG9mIGFsbCB0aGUgVVJMcyB0aGF0IGhhdmUgYmVlbiBwcmVjYWNoZWQgYnkgdGhlIGN1cnJlbnRcbiAgICAgKiBzZXJ2aWNlIHdvcmtlci5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59IFRoZSBwcmVjYWNoZWQgVVJMcy5cbiAgICAgKi9cbiAgICBnZXRDYWNoZWRVUkxzKCkge1xuICAgICAgICByZXR1cm4gWy4uLnRoaXMuX3VybHNUb0NhY2hlS2V5cy5rZXlzKCldO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjYWNoZSBrZXkgdXNlZCBmb3Igc3RvcmluZyBhIGdpdmVuIFVSTC4gSWYgdGhhdCBVUkwgaXNcbiAgICAgKiB1bnZlcnNpb25lZCwgbGlrZSBgL2luZGV4Lmh0bWwnLCB0aGVuIHRoZSBjYWNoZSBrZXkgd2lsbCBiZSB0aGUgb3JpZ2luYWxcbiAgICAgKiBVUkwgd2l0aCBhIHNlYXJjaCBwYXJhbWV0ZXIgYXBwZW5kZWQgdG8gaXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIEEgVVJMIHdob3NlIGNhY2hlIGtleSB5b3Ugd2FudCB0byBsb29rIHVwLlxuICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHZlcnNpb25lZCBVUkwgdGhhdCBjb3JyZXNwb25kcyB0byBhIGNhY2hlIGtleVxuICAgICAqIGZvciB0aGUgb3JpZ2luYWwgVVJMLCBvciB1bmRlZmluZWQgaWYgdGhhdCBVUkwgaXNuJ3QgcHJlY2FjaGVkLlxuICAgICAqL1xuICAgIGdldENhY2hlS2V5Rm9yVVJMKHVybCkge1xuICAgICAgICBjb25zdCB1cmxPYmplY3QgPSBuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZik7XG4gICAgICAgIHJldHVybiB0aGlzLl91cmxzVG9DYWNoZUtleXMuZ2V0KHVybE9iamVjdC5ocmVmKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBBIGNhY2hlIGtleSB3aG9zZSBTUkkgeW91IHdhbnQgdG8gbG9vayB1cC5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBzdWJyZXNvdXJjZSBpbnRlZ3JpdHkgYXNzb2NpYXRlZCB3aXRoIHRoZSBjYWNoZSBrZXksXG4gICAgICogb3IgdW5kZWZpbmVkIGlmIGl0J3Mgbm90IHNldC5cbiAgICAgKi9cbiAgICBnZXRJbnRlZ3JpdHlGb3JDYWNoZUtleShjYWNoZUtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVLZXlzVG9JbnRlZ3JpdGllcy5nZXQoY2FjaGVLZXkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIGFjdHMgYXMgYSBkcm9wLWluIHJlcGxhY2VtZW50IGZvclxuICAgICAqIFtgY2FjaGUubWF0Y2goKWBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYWNoZS9tYXRjaClcbiAgICAgKiB3aXRoIHRoZSBmb2xsb3dpbmcgZGlmZmVyZW5jZXM6XG4gICAgICpcbiAgICAgKiAtIEl0IGtub3dzIHdoYXQgdGhlIG5hbWUgb2YgdGhlIHByZWNhY2hlIGlzLCBhbmQgb25seSBjaGVja3MgaW4gdGhhdCBjYWNoZS5cbiAgICAgKiAtIEl0IGFsbG93cyB5b3UgdG8gcGFzcyBpbiBhbiBcIm9yaWdpbmFsXCIgVVJMIHdpdGhvdXQgdmVyc2lvbmluZyBwYXJhbWV0ZXJzLFxuICAgICAqIGFuZCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgbG9vayB1cCB0aGUgY29ycmVjdCBjYWNoZSBrZXkgZm9yIHRoZSBjdXJyZW50bHlcbiAgICAgKiBhY3RpdmUgcmV2aXNpb24gb2YgdGhhdCBVUkwuXG4gICAgICpcbiAgICAgKiBFLmcuLCBgbWF0Y2hQcmVjYWNoZSgnaW5kZXguaHRtbCcpYCB3aWxsIGZpbmQgdGhlIGNvcnJlY3QgcHJlY2FjaGVkXG4gICAgICogcmVzcG9uc2UgZm9yIHRoZSBjdXJyZW50bHkgYWN0aXZlIHNlcnZpY2Ugd29ya2VyLCBldmVuIGlmIHRoZSBhY3R1YWwgY2FjaGVcbiAgICAgKiBrZXkgaXMgYCcvaW5kZXguaHRtbD9fX1dCX1JFVklTSU9OX189MTIzNGFiY2QnYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfFJlcXVlc3R9IHJlcXVlc3QgVGhlIGtleSAod2l0aG91dCByZXZpc2lvbmluZyBwYXJhbWV0ZXJzKVxuICAgICAqIHRvIGxvb2sgdXAgaW4gdGhlIHByZWNhY2hlLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2V8dW5kZWZpbmVkPn1cbiAgICAgKi9cbiAgICBhc3luYyBtYXRjaFByZWNhY2hlKHJlcXVlc3QpIHtcbiAgICAgICAgY29uc3QgdXJsID0gcmVxdWVzdCBpbnN0YW5jZW9mIFJlcXVlc3QgPyByZXF1ZXN0LnVybCA6IHJlcXVlc3Q7XG4gICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gdGhpcy5nZXRDYWNoZUtleUZvclVSTCh1cmwpO1xuICAgICAgICBpZiAoY2FjaGVLZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgc2VsZi5jYWNoZXMub3Blbih0aGlzLnN0cmF0ZWd5LmNhY2hlTmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGUubWF0Y2goY2FjaGVLZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGxvb2tzIHVwIGB1cmxgIGluIHRoZSBwcmVjYWNoZSAodGFraW5nIGludG9cbiAgICAgKiBhY2NvdW50IHJldmlzaW9uIGluZm9ybWF0aW9uKSwgYW5kIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgYFJlc3BvbnNlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIHByZWNhY2hlZCBVUkwgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIGxvb2t1cCB0aGVcbiAgICAgKiBgUmVzcG9uc2VgLlxuICAgICAqIEByZXR1cm4ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfVxuICAgICAqL1xuICAgIGNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMKHVybCkge1xuICAgICAgICBjb25zdCBjYWNoZUtleSA9IHRoaXMuZ2V0Q2FjaGVLZXlGb3JVUkwodXJsKTtcbiAgICAgICAgaWYgKCFjYWNoZUtleSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm9uLXByZWNhY2hlZC11cmwnLCB7IHVybCB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG9wdGlvbnMpID0+IHtcbiAgICAgICAgICAgIG9wdGlvbnMucmVxdWVzdCA9IG5ldyBSZXF1ZXN0KHVybCk7XG4gICAgICAgICAgICBvcHRpb25zLnBhcmFtcyA9IE9iamVjdC5hc3NpZ24oeyBjYWNoZUtleSB9LCBvcHRpb25zLnBhcmFtcyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zdHJhdGVneS5oYW5kbGUob3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0IHsgUHJlY2FjaGVDb250cm9sbGVyIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4vdXRpbHMvZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogYFByZWNhY2hlRmFsbGJhY2tQbHVnaW5gIGFsbG93cyB5b3UgdG8gc3BlY2lmeSBhbiBcIm9mZmxpbmUgZmFsbGJhY2tcIlxuICogcmVzcG9uc2UgdG8gYmUgdXNlZCB3aGVuIGEgZ2l2ZW4gc3RyYXRlZ3kgaXMgdW5hYmxlIHRvIGdlbmVyYXRlIGEgcmVzcG9uc2UuXG4gKlxuICogSXQgZG9lcyB0aGlzIGJ5IGludGVyY2VwdGluZyB0aGUgYGhhbmRsZXJEaWRFcnJvcmAgcGx1Z2luIGNhbGxiYWNrXG4gKiBhbmQgcmV0dXJuaW5nIGEgcHJlY2FjaGVkIHJlc3BvbnNlLCB0YWtpbmcgdGhlIGV4cGVjdGVkIHJldmlzaW9uIHBhcmFtZXRlclxuICogaW50byBhY2NvdW50IGF1dG9tYXRpY2FsbHkuXG4gKlxuICogVW5sZXNzIHlvdSBleHBsaWNpdGx5IHBhc3MgaW4gYSBgUHJlY2FjaGVDb250cm9sbGVyYCBpbnN0YW5jZSB0byB0aGVcbiAqIGNvbnN0cnVjdG9yLCB0aGUgZGVmYXVsdCBpbnN0YW5jZSB3aWxsIGJlIHVzZWQuIEdlbmVyYWxseSBzcGVha2luZywgbW9zdFxuICogZGV2ZWxvcGVycyB3aWxsIGVuZCB1cCB1c2luZyB0aGUgZGVmYXVsdC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5jbGFzcyBQcmVjYWNoZUZhbGxiYWNrUGx1Z2luIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RzIGEgbmV3IFByZWNhY2hlRmFsbGJhY2tQbHVnaW4gd2l0aCB0aGUgYXNzb2NpYXRlZCBmYWxsYmFja1VSTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29uZmlnLmZhbGxiYWNrVVJMIEEgcHJlY2FjaGVkIFVSTCB0byB1c2UgYXMgdGhlIGZhbGxiYWNrXG4gICAgICogICAgIGlmIHRoZSBhc3NvY2lhdGVkIHN0cmF0ZWd5IGNhbid0IGdlbmVyYXRlIGEgcmVzcG9uc2UuXG4gICAgICogQHBhcmFtIHtQcmVjYWNoZUNvbnRyb2xsZXJ9IFtjb25maWcucHJlY2FjaGVDb250cm9sbGVyXSBBbiBvcHRpb25hbFxuICAgICAqICAgICBQcmVjYWNoZUNvbnRyb2xsZXIgaW5zdGFuY2UuIElmIG5vdCBwcm92aWRlZCwgdGhlIGRlZmF1bHRcbiAgICAgKiAgICAgUHJlY2FjaGVDb250cm9sbGVyIHdpbGwgYmUgdXNlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih7IGZhbGxiYWNrVVJMLCBwcmVjYWNoZUNvbnRyb2xsZXIgfSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59IFRoZSBwcmVjYWNoZSByZXNwb25zZSBmb3IgdGhlIGZhbGxiYWNrIFVSTC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaGFuZGxlckRpZEVycm9yID0gKCkgPT4gdGhpcy5fcHJlY2FjaGVDb250cm9sbGVyLm1hdGNoUHJlY2FjaGUodGhpcy5fZmFsbGJhY2tVUkwpO1xuICAgICAgICB0aGlzLl9mYWxsYmFja1VSTCA9IGZhbGxiYWNrVVJMO1xuICAgICAgICB0aGlzLl9wcmVjYWNoZUNvbnRyb2xsZXIgPSBwcmVjYWNoZUNvbnRyb2xsZXIgfHxcbiAgICAgICAgICAgIGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgfVxufVxuZXhwb3J0IHsgUHJlY2FjaGVGYWxsYmFja1BsdWdpbiB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgeyBSb3V0ZSB9IGZyb20gJ3dvcmtib3gtcm91dGluZy9Sb3V0ZS5qcyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVVSTFZhcmlhdGlvbnMgfSBmcm9tICcuL3V0aWxzL2dlbmVyYXRlVVJMVmFyaWF0aW9ucy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBIHN1YmNsYXNzIG9mIFtSb3V0ZV17QGxpbmsgbW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZX0gdGhhdCB0YWtlcyBhXG4gKiBbUHJlY2FjaGVDb250cm9sbGVyXXtAbGluayBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlcn1cbiAqIGluc3RhbmNlIGFuZCB1c2VzIGl0IHRvIG1hdGNoIGluY29taW5nIHJlcXVlc3RzIGFuZCBoYW5kbGUgZmV0Y2hpbmdcbiAqIHJlc3BvbnNlcyBmcm9tIHRoZSBwcmVjYWNoZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICogQGV4dGVuZHMgbW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZVxuICovXG5jbGFzcyBQcmVjYWNoZVJvdXRlIGV4dGVuZHMgUm91dGUge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7UHJlY2FjaGVDb250cm9sbGVyfSBwcmVjYWNoZUNvbnRyb2xsZXIgQSBgUHJlY2FjaGVDb250cm9sbGVyYFxuICAgICAqIGluc3RhbmNlIHVzZWQgdG8gYm90aCBtYXRjaCByZXF1ZXN0cyBhbmQgcmVzcG9uZCB0byBmZXRjaCBldmVudHMuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBPcHRpb25zIHRvIGNvbnRyb2wgaG93IHJlcXVlc3RzIGFyZSBtYXRjaGVkXG4gICAgICogYWdhaW5zdCB0aGUgbGlzdCBvZiBwcmVjYWNoZWQgVVJMcy5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuZGlyZWN0b3J5SW5kZXg9aW5kZXguaHRtbF0gVGhlIGBkaXJlY3RvcnlJbmRleGAgd2lsbFxuICAgICAqIGNoZWNrIGNhY2hlIGVudHJpZXMgZm9yIGEgVVJMcyBlbmRpbmcgd2l0aCAnLycgdG8gc2VlIGlmIHRoZXJlIGlzIGEgaGl0IHdoZW5cbiAgICAgKiBhcHBlbmRpbmcgdGhlIGBkaXJlY3RvcnlJbmRleGAgdmFsdWUuXG4gICAgICogQHBhcmFtIHtBcnJheTxSZWdFeHA+fSBbb3B0aW9ucy5pZ25vcmVVUkxQYXJhbWV0ZXJzTWF0Y2hpbmc9Wy9edXRtXy8sIC9eZmJjbGlkJC9dXSBBblxuICAgICAqIGFycmF5IG9mIHJlZ2V4J3MgdG8gcmVtb3ZlIHNlYXJjaCBwYXJhbXMgd2hlbiBsb29raW5nIGZvciBhIGNhY2hlIG1hdGNoLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuY2xlYW5VUkxzPXRydWVdIFRoZSBgY2xlYW5VUkxzYCBvcHRpb24gd2lsbFxuICAgICAqIGNoZWNrIHRoZSBjYWNoZSBmb3IgdGhlIFVSTCB3aXRoIGEgYC5odG1sYCBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBlbmQuXG4gICAgICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nfnVybE1hbmlwdWxhdGlvbn0gW29wdGlvbnMudXJsTWFuaXB1bGF0aW9uXVxuICAgICAqIFRoaXMgaXMgYSBmdW5jdGlvbiB0aGF0IHNob3VsZCB0YWtlIGEgVVJMIGFuZCByZXR1cm4gYW4gYXJyYXkgb2ZcbiAgICAgKiBhbHRlcm5hdGl2ZSBVUkxzIHRoYXQgc2hvdWxkIGJlIGNoZWNrZWQgZm9yIHByZWNhY2hlIG1hdGNoZXMuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJlY2FjaGVDb250cm9sbGVyLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gKHsgcmVxdWVzdCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmxzVG9DYWNoZUtleXMgPSBwcmVjYWNoZUNvbnRyb2xsZXIuZ2V0VVJMc1RvQ2FjaGVLZXlzKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBvc3NpYmxlVVJMIG9mIGdlbmVyYXRlVVJMVmFyaWF0aW9ucyhyZXF1ZXN0LnVybCwgb3B0aW9ucykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZUtleSA9IHVybHNUb0NhY2hlS2V5cy5nZXQocG9zc2libGVVUkwpO1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZUtleSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnRlZ3JpdHkgPSBwcmVjYWNoZUNvbnRyb2xsZXIuZ2V0SW50ZWdyaXR5Rm9yQ2FjaGVLZXkoY2FjaGVLZXkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBjYWNoZUtleSwgaW50ZWdyaXR5IH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYFByZWNhY2hpbmcgZGlkIG5vdCBmaW5kIGEgbWF0Y2ggZm9yIGAgK1xuICAgICAgICAgICAgICAgICAgICBnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgICAgICBzdXBlcihtYXRjaCwgcHJlY2FjaGVDb250cm9sbGVyLnN0cmF0ZWd5KTtcbiAgICB9XG59XG5leHBvcnQgeyBQcmVjYWNoZVJvdXRlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBjb3B5UmVzcG9uc2UgfSBmcm9tICd3b3JrYm94LWNvcmUvY29weVJlc3BvbnNlLmpzJztcbmltcG9ydCB7IGNhY2hlTmFtZXMgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVOYW1lcy5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHsgU3RyYXRlZ3kgfSBmcm9tICd3b3JrYm94LXN0cmF0ZWdpZXMvU3RyYXRlZ3kuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQSBbU3RyYXRlZ3lde0BsaW5rIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3l9IGltcGxlbWVudGF0aW9uXG4gKiBzcGVjaWZpY2FsbHkgZGVzaWduZWQgdG8gd29yayB3aXRoXG4gKiBbUHJlY2FjaGVDb250cm9sbGVyXXtAbGluayBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nLlByZWNhY2hlQ29udHJvbGxlcn1cbiAqIHRvIGJvdGggY2FjaGUgYW5kIGZldGNoIHByZWNhY2hlZCBhc3NldHMuXG4gKlxuICogTm90ZTogYW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBpcyBjcmVhdGVkIGF1dG9tYXRpY2FsbHkgd2hlbiBjcmVhdGluZyBhXG4gKiBgUHJlY2FjaGVDb250cm9sbGVyYDsgaXQncyBnZW5lcmFsbHkgbm90IG5lY2Vzc2FyeSB0byBjcmVhdGUgdGhpcyB5b3Vyc2VsZi5cbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5XG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5jbGFzcyBQcmVjYWNoZVN0cmF0ZWd5IGV4dGVuZHMgU3RyYXRlZ3kge1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYWNoZU5hbWVdIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIHRoZSBjYWNoZSBuYW1lcyBwcm92aWRlZCBieVxuICAgICAqIFt3b3JrYm94LWNvcmVde0BsaW5rIG1vZHVsZTp3b3JrYm94LWNvcmUuY2FjaGVOYW1lc30uXG4gICAgICogQHBhcmFtIHtBcnJheTxPYmplY3Q+fSBbb3B0aW9ucy5wbHVnaW5zXSBbUGx1Z2luc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL3VzaW5nLXBsdWdpbnN9XG4gICAgICogdG8gdXNlIGluIGNvbmp1bmN0aW9uIHdpdGggdGhpcyBjYWNoaW5nIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5mZXRjaE9wdGlvbnNdIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAgICogW2Bpbml0YF17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd09yV29ya2VyR2xvYmFsU2NvcGUvZmV0Y2gjUGFyYW1ldGVyc31cbiAgICAgKiBvZiBhbGwgZmV0Y2goKSByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm1hdGNoT3B0aW9uc10gVGhlXG4gICAgICogW2BDYWNoZVF1ZXJ5T3B0aW9uc2Bde0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNkaWN0ZGVmLWNhY2hlcXVlcnlvcHRpb25zfVxuICAgICAqIGZvciBhbnkgYGNhY2hlLm1hdGNoKClgIG9yIGBjYWNoZS5wdXQoKWAgY2FsbHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZmFsbGJhY2tUb05ldHdvcms9dHJ1ZV0gV2hldGhlciB0byBhdHRlbXB0IHRvXG4gICAgICogZ2V0IHRoZSByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrIGlmIHRoZXJlJ3MgYSBwcmVjYWNoZSBtaXNzLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBvcHRpb25zLmNhY2hlTmFtZSA9IGNhY2hlTmFtZXMuZ2V0UHJlY2FjaGVOYW1lKG9wdGlvbnMuY2FjaGVOYW1lKTtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX2ZhbGxiYWNrVG9OZXR3b3JrID1cbiAgICAgICAgICAgIG9wdGlvbnMuZmFsbGJhY2tUb05ldHdvcmsgPT09IGZhbHNlID8gZmFsc2UgOiB0cnVlO1xuICAgICAgICAvLyBSZWRpcmVjdGVkIHJlc3BvbnNlcyBjYW5ub3QgYmUgdXNlZCB0byBzYXRpc2Z5IGEgbmF2aWdhdGlvbiByZXF1ZXN0LCBzb1xuICAgICAgICAvLyBhbnkgcmVkaXJlY3RlZCByZXNwb25zZSBtdXN0IGJlIFwiY29waWVkXCIgcmF0aGVyIHRoYW4gY2xvbmVkLCBzbyB0aGUgbmV3XG4gICAgICAgIC8vIHJlc3BvbnNlIGRvZXNuJ3QgY29udGFpbiB0aGUgYHJlZGlyZWN0ZWRgIGZsYWcuIFNlZTpcbiAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NjY5MzYzJmRlc2M9MiNjMVxuICAgICAgICB0aGlzLnBsdWdpbnMucHVzaChQcmVjYWNoZVN0cmF0ZWd5LmNvcHlSZWRpcmVjdGVkQ2FjaGVhYmxlUmVzcG9uc2VzUGx1Z2luKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSByZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn0gaGFuZGxlciBUaGUgZXZlbnQgdGhhdFxuICAgICAqICAgICB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAgICovXG4gICAgYXN5bmMgX2hhbmRsZShyZXF1ZXN0LCBoYW5kbGVyKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5jYWNoZU1hdGNoKHJlcXVlc3QpO1xuICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGlzIGlzIGFuIGBpbnN0YWxsYCBldmVudCBmb3IgYW4gZW50cnkgdGhhdCBpc24ndCBhbHJlYWR5IGNhY2hlZCxcbiAgICAgICAgLy8gdGhlbiBwb3B1bGF0ZSB0aGUgY2FjaGUuXG4gICAgICAgIGlmIChoYW5kbGVyLmV2ZW50ICYmIGhhbmRsZXIuZXZlbnQudHlwZSA9PT0gJ2luc3RhbGwnKSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5faGFuZGxlSW5zdGFsbChyZXF1ZXN0LCBoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBHZXR0aW5nIGhlcmUgbWVhbnMgc29tZXRoaW5nIHdlbnQgd3JvbmcuIEFuIGVudHJ5IHRoYXQgc2hvdWxkIGhhdmUgYmVlblxuICAgICAgICAvLyBwcmVjYWNoZWQgd2Fzbid0IGZvdW5kIGluIHRoZSBjYWNoZS5cbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuX2hhbmRsZUZldGNoKHJlcXVlc3QsIGhhbmRsZXIpO1xuICAgIH1cbiAgICBhc3luYyBfaGFuZGxlRmV0Y2gocmVxdWVzdCwgaGFuZGxlcikge1xuICAgICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IChoYW5kbGVyLnBhcmFtcyB8fCB7fSk7XG4gICAgICAgIC8vIEZhbGwgYmFjayB0byB0aGUgbmV0d29yayBpZiB3ZSdyZSBjb25maWd1cmVkIHRvIGRvIHNvLlxuICAgICAgICBpZiAodGhpcy5fZmFsbGJhY2tUb05ldHdvcmspIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oYFRoZSBwcmVjYWNoZWQgcmVzcG9uc2UgZm9yIGAgK1xuICAgICAgICAgICAgICAgICAgICBgJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9IGluICR7dGhpcy5jYWNoZU5hbWV9IHdhcyBub3QgYCArXG4gICAgICAgICAgICAgICAgICAgIGBmb3VuZC4gRmFsbGluZyBiYWNrIHRvIHRoZSBuZXR3b3JrLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW50ZWdyaXR5SW5NYW5pZmVzdCA9IHBhcmFtcy5pbnRlZ3JpdHk7XG4gICAgICAgICAgICBjb25zdCBpbnRlZ3JpdHlJblJlcXVlc3QgPSByZXF1ZXN0LmludGVncml0eTtcbiAgICAgICAgICAgIGNvbnN0IG5vSW50ZWdyaXR5Q29uZmxpY3QgPSAhaW50ZWdyaXR5SW5SZXF1ZXN0IHx8IGludGVncml0eUluUmVxdWVzdCA9PT0gaW50ZWdyaXR5SW5NYW5pZmVzdDtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5mZXRjaChuZXcgUmVxdWVzdChyZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgaW50ZWdyaXR5OiBpbnRlZ3JpdHlJblJlcXVlc3QgfHwgaW50ZWdyaXR5SW5NYW5pZmVzdCxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIC8vIEl0J3Mgb25seSBcInNhZmVcIiB0byByZXBhaXIgdGhlIGNhY2hlIGlmIHdlJ3JlIHVzaW5nIFNSSSB0byBndWFyYW50ZWVcbiAgICAgICAgICAgIC8vIHRoYXQgdGhlIHJlc3BvbnNlIG1hdGNoZXMgdGhlIHByZWNhY2hlIG1hbmlmZXN0J3MgZXhwZWN0YXRpb25zLFxuICAgICAgICAgICAgLy8gYW5kIHRoZXJlJ3MgZWl0aGVyIGEpIG5vIGludGVncml0eSBwcm9wZXJ0eSBpbiB0aGUgaW5jb21pbmcgcmVxdWVzdFxuICAgICAgICAgICAgLy8gb3IgYikgdGhlcmUgaXMgYW4gaW50ZWdyaXR5LCBhbmQgaXQgbWF0Y2hlcyB0aGUgcHJlY2FjaGUgbWFuaWZlc3QuXG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yODU4XG4gICAgICAgICAgICBpZiAoaW50ZWdyaXR5SW5NYW5pZmVzdCAmJiBub0ludGVncml0eUNvbmZsaWN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlRGVmYXVsdENhY2hlYWJpbGl0eVBsdWdpbklmTmVlZGVkKCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FzQ2FjaGVkID0gYXdhaXQgaGFuZGxlci5jYWNoZVB1dChyZXF1ZXN0LCByZXNwb25zZS5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2FzQ2FjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBBIHJlc3BvbnNlIGZvciAke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYHdhcyB1c2VkIHRvIFwicmVwYWlyXCIgdGhlIHByZWNhY2hlLmApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gVGhpcyBzaG91bGRuJ3Qgbm9ybWFsbHkgaGFwcGVuLCBidXQgdGhlcmUgYXJlIGVkZ2UgY2FzZXM6XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE0NDFcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ21pc3NpbmctcHJlY2FjaGUtZW50cnknLCB7XG4gICAgICAgICAgICAgICAgY2FjaGVOYW1lOiB0aGlzLmNhY2hlTmFtZSxcbiAgICAgICAgICAgICAgICB1cmw6IHJlcXVlc3QudXJsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gcGFyYW1zLmNhY2hlS2V5IHx8IChhd2FpdCBoYW5kbGVyLmdldENhY2hlS2V5KHJlcXVlc3QsICdyZWFkJykpO1xuICAgICAgICAgICAgLy8gV29ya2JveCBpcyBnb2luZyB0byBoYW5kbGUgdGhlIHJvdXRlLlxuICAgICAgICAgICAgLy8gcHJpbnQgdGhlIHJvdXRpbmcgZGV0YWlscyB0byB0aGUgY29uc29sZS5cbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgUHJlY2FjaGluZyBpcyByZXNwb25kaW5nIHRvOiBgICsgZ2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpKTtcbiAgICAgICAgICAgIGxvZ2dlci5sb2coYFNlcnZpbmcgdGhlIHByZWNhY2hlZCB1cmw6ICR7Z2V0RnJpZW5kbHlVUkwoY2FjaGVLZXkgaW5zdGFuY2VvZiBSZXF1ZXN0ID8gY2FjaGVLZXkudXJsIDogY2FjaGVLZXkpfWApO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IHJlcXVlc3QgZGV0YWlscyBoZXJlLmApO1xuICAgICAgICAgICAgbG9nZ2VyLmxvZyhyZXF1ZXN0KTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBWaWV3IHJlc3BvbnNlIGRldGFpbHMgaGVyZS5gKTtcbiAgICAgICAgICAgIGxvZ2dlci5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIGFzeW5jIF9oYW5kbGVJbnN0YWxsKHJlcXVlc3QsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fdXNlRGVmYXVsdENhY2hlYWJpbGl0eVBsdWdpbklmTmVlZGVkKCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5mZXRjaChyZXF1ZXN0KTtcbiAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRlZmVyIGNhY2hlUHV0KCkgdW50aWwgYWZ0ZXIgd2Uga25vdyB0aGUgcmVzcG9uc2VcbiAgICAgICAgLy8gc2hvdWxkIGJlIGNhY2hlZDsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjczN1xuICAgICAgICBjb25zdCB3YXNDYWNoZWQgPSBhd2FpdCBoYW5kbGVyLmNhY2hlUHV0KHJlcXVlc3QsIHJlc3BvbnNlLmNsb25lKCkpO1xuICAgICAgICBpZiAoIXdhc0NhY2hlZCkge1xuICAgICAgICAgICAgLy8gVGhyb3dpbmcgaGVyZSB3aWxsIGxlYWQgdG8gdGhlIGBpbnN0YWxsYCBoYW5kbGVyIGZhaWxpbmcsIHdoaWNoXG4gICAgICAgICAgICAvLyB3ZSB3YW50IHRvIGRvIGlmICphbnkqIG9mIHRoZSByZXNwb25zZXMgYXJlbid0IHNhZmUgdG8gY2FjaGUuXG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdiYWQtcHJlY2FjaGluZy1yZXNwb25zZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6IHJlcXVlc3QudXJsLFxuICAgICAgICAgICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBjb21wbGV4LCBhcyB0aGVyZSBhIG51bWJlciBvZiB0aGluZ3MgdG8gYWNjb3VudCBmb3I6XG4gICAgICpcbiAgICAgKiBUaGUgYHBsdWdpbnNgIGFycmF5IGNhbiBiZSBzZXQgYXQgY29uc3RydWN0aW9uLCBhbmQvb3IgaXQgbWlnaHQgYmUgYWRkZWQgdG9cbiAgICAgKiB0byBhdCBhbnkgdGltZSBiZWZvcmUgdGhlIHN0cmF0ZWd5IGlzIHVzZWQuXG4gICAgICpcbiAgICAgKiBBdCB0aGUgdGltZSB0aGUgc3RyYXRlZ3kgaXMgdXNlZCAoaS5lLiBkdXJpbmcgYW4gYGluc3RhbGxgIGV2ZW50KSwgdGhlcmVcbiAgICAgKiBuZWVkcyB0byBiZSBhdCBsZWFzdCBvbmUgcGx1Z2luIHRoYXQgaW1wbGVtZW50cyBgY2FjaGVXaWxsVXBkYXRlYCBpbiB0aGVcbiAgICAgKiBhcnJheSwgb3RoZXIgdGhhbiBgY29weVJlZGlyZWN0ZWRDYWNoZWFibGVSZXNwb25zZXNQbHVnaW5gLlxuICAgICAqXG4gICAgICogLSBJZiB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgYW5kIHRoZXJlIGFyZSBubyBzdWl0YWJsZSBgY2FjaGVXaWxsVXBkYXRlYFxuICAgICAqIHBsdWdpbnMsIHdlIG5lZWQgdG8gYWRkIGBkZWZhdWx0UHJlY2FjaGVDYWNoZWFiaWxpdHlQbHVnaW5gLlxuICAgICAqXG4gICAgICogLSBJZiB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgYW5kIHRoZXJlIGlzIGV4YWN0bHkgb25lIGBjYWNoZVdpbGxVcGRhdGVgLCB0aGVuXG4gICAgICogd2UgZG9uJ3QgaGF2ZSB0byBkbyBhbnl0aGluZyAodGhpcyBtaWdodCBiZSBhIHByZXZpb3VzbHkgYWRkZWRcbiAgICAgKiBgZGVmYXVsdFByZWNhY2hlQ2FjaGVhYmlsaXR5UGx1Z2luYCwgb3IgaXQgbWlnaHQgYmUgYSBjdXN0b20gcGx1Z2luKS5cbiAgICAgKlxuICAgICAqIC0gSWYgdGhpcyBtZXRob2QgaXMgY2FsbGVkIGFuZCB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIGBjYWNoZVdpbGxVcGRhdGVgLFxuICAgICAqIHRoZW4gd2UgbmVlZCB0byBjaGVjayBpZiBvbmUgaXMgYGRlZmF1bHRQcmVjYWNoZUNhY2hlYWJpbGl0eVBsdWdpbmAuIElmIHNvLFxuICAgICAqIHdlIG5lZWQgdG8gcmVtb3ZlIGl0LiAoVGhpcyBzaXR1YXRpb24gaXMgdW5saWtlbHksIGJ1dCBpdCBjb3VsZCBoYXBwZW4gaWZcbiAgICAgKiB0aGUgc3RyYXRlZ3kgaXMgdXNlZCBtdWx0aXBsZSB0aW1lcywgdGhlIGZpcnN0IHdpdGhvdXQgYSBgY2FjaGVXaWxsVXBkYXRlYCxcbiAgICAgKiBhbmQgdGhlbiBsYXRlciBvbiBhZnRlciBtYW51YWxseSBhZGRpbmcgYSBjdXN0b20gYGNhY2hlV2lsbFVwZGF0ZWAuKVxuICAgICAqXG4gICAgICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjczNyBmb3IgbW9yZSBjb250ZXh0LlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfdXNlRGVmYXVsdENhY2hlYWJpbGl0eVBsdWdpbklmTmVlZGVkKCkge1xuICAgICAgICBsZXQgZGVmYXVsdFBsdWdpbkluZGV4ID0gbnVsbDtcbiAgICAgICAgbGV0IGNhY2hlV2lsbFVwZGF0ZVBsdWdpbkNvdW50ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBbaW5kZXgsIHBsdWdpbl0gb2YgdGhpcy5wbHVnaW5zLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgLy8gSWdub3JlIHRoZSBjb3B5IHJlZGlyZWN0ZWQgcGx1Z2luIHdoZW4gZGV0ZXJtaW5pbmcgd2hhdCB0byBkby5cbiAgICAgICAgICAgIGlmIChwbHVnaW4gPT09IFByZWNhY2hlU3RyYXRlZ3kuY29weVJlZGlyZWN0ZWRDYWNoZWFibGVSZXNwb25zZXNQbHVnaW4pIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNhdmUgdGhlIGRlZmF1bHQgcGx1Z2luJ3MgaW5kZXgsIGluIGNhc2UgaXQgbmVlZHMgdG8gYmUgcmVtb3ZlZC5cbiAgICAgICAgICAgIGlmIChwbHVnaW4gPT09IFByZWNhY2hlU3RyYXRlZ3kuZGVmYXVsdFByZWNhY2hlQ2FjaGVhYmlsaXR5UGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdFBsdWdpbkluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGx1Z2luLmNhY2hlV2lsbFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgIGNhY2hlV2lsbFVwZGF0ZVBsdWdpbkNvdW50Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhY2hlV2lsbFVwZGF0ZVBsdWdpbkNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbnMucHVzaChQcmVjYWNoZVN0cmF0ZWd5LmRlZmF1bHRQcmVjYWNoZUNhY2hlYWJpbGl0eVBsdWdpbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2FjaGVXaWxsVXBkYXRlUGx1Z2luQ291bnQgPiAxICYmIGRlZmF1bHRQbHVnaW5JbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gT25seSByZW1vdmUgdGhlIGRlZmF1bHQgcGx1Z2luOyBtdWx0aXBsZSBjdXN0b20gcGx1Z2lucyBhcmUgYWxsb3dlZC5cbiAgICAgICAgICAgIHRoaXMucGx1Z2lucy5zcGxpY2UoZGVmYXVsdFBsdWdpbkluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBOb3RoaW5nIG5lZWRzIHRvIGJlIGRvbmUgaWYgY2FjaGVXaWxsVXBkYXRlUGx1Z2luQ291bnQgaXMgMVxuICAgIH1cbn1cblByZWNhY2hlU3RyYXRlZ3kuZGVmYXVsdFByZWNhY2hlQ2FjaGVhYmlsaXR5UGx1Z2luID0ge1xuICAgIGFzeW5jIGNhY2hlV2lsbFVwZGF0ZSh7IHJlc3BvbnNlIH0pIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS5zdGF0dXMgPj0gNDAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSxcbn07XG5QcmVjYWNoZVN0cmF0ZWd5LmNvcHlSZWRpcmVjdGVkQ2FjaGVhYmxlUmVzcG9uc2VzUGx1Z2luID0ge1xuICAgIGFzeW5jIGNhY2hlV2lsbFVwZGF0ZSh7IHJlc3BvbnNlIH0pIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnJlZGlyZWN0ZWQgPyBhd2FpdCBjb3B5UmVzcG9uc2UocmVzcG9uc2UpIDogcmVzcG9uc2U7XG4gICAgfSxcbn07XG5leHBvcnQgeyBQcmVjYWNoZVN0cmF0ZWd5IH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIEB0cy1pZ25vcmVcbnRyeSB7XG4gICAgc2VsZlsnd29ya2JveDpwcmVjYWNoaW5nOjYuMi40J10gJiYgXygpO1xufVxuY2F0Y2ggKGUpIHsgfVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFkZHMgcGx1Z2lucyB0byB0aGUgcHJlY2FjaGluZyBzdHJhdGVneS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IHBsdWdpbnNcbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5mdW5jdGlvbiBhZGRQbHVnaW5zKHBsdWdpbnMpIHtcbiAgICBjb25zdCBwcmVjYWNoZUNvbnRyb2xsZXIgPSBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlcigpO1xuICAgIHByZWNhY2hlQ29udHJvbGxlci5zdHJhdGVneS5wbHVnaW5zLnB1c2goLi4ucGx1Z2lucyk7XG59XG5leHBvcnQgeyBhZGRQbHVnaW5zIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgcmVnaXN0ZXJSb3V0ZSB9IGZyb20gJ3dvcmtib3gtcm91dGluZy9yZWdpc3RlclJvdXRlLmpzJztcbmltcG9ydCB7IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyIH0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgeyBQcmVjYWNoZVJvdXRlIH0gZnJvbSAnLi9QcmVjYWNoZVJvdXRlLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFkZCBhIGBmZXRjaGAgbGlzdGVuZXIgdG8gdGhlIHNlcnZpY2Ugd29ya2VyIHRoYXQgd2lsbFxuICogcmVzcG9uZCB0b1xuICogW25ldHdvcmsgcmVxdWVzdHNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9TZXJ2aWNlX1dvcmtlcl9BUEkvVXNpbmdfU2VydmljZV9Xb3JrZXJzI0N1c3RvbV9yZXNwb25zZXNfdG9fcmVxdWVzdHN9XG4gKiB3aXRoIHByZWNhY2hlZCBhc3NldHMuXG4gKlxuICogUmVxdWVzdHMgZm9yIGFzc2V0cyB0aGF0IGFyZW4ndCBwcmVjYWNoZWQsIHRoZSBgRmV0Y2hFdmVudGAgd2lsbCBub3QgYmVcbiAqIHJlc3BvbmRlZCB0bywgYWxsb3dpbmcgdGhlIGV2ZW50IHRvIGZhbGwgdGhyb3VnaCB0byBvdGhlciBgZmV0Y2hgIGV2ZW50XG4gKiBsaXN0ZW5lcnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSBTZWVcbiAqIFtQcmVjYWNoZVJvdXRlIG9wdGlvbnNde0BsaW5rIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVSb3V0ZX0uXG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gYWRkUm91dGUob3B0aW9ucykge1xuICAgIGNvbnN0IHByZWNhY2hlQ29udHJvbGxlciA9IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgY29uc3QgcHJlY2FjaGVSb3V0ZSA9IG5ldyBQcmVjYWNoZVJvdXRlKHByZWNhY2hlQ29udHJvbGxlciwgb3B0aW9ucyk7XG4gICAgcmVnaXN0ZXJSb3V0ZShwcmVjYWNoZVJvdXRlKTtcbn1cbmV4cG9ydCB7IGFkZFJvdXRlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBkZWxldGVPdXRkYXRlZENhY2hlcyB9IGZyb20gJy4vdXRpbHMvZGVsZXRlT3V0ZGF0ZWRDYWNoZXMuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQWRkcyBhbiBgYWN0aXZhdGVgIGV2ZW50IGxpc3RlbmVyIHdoaWNoIHdpbGwgY2xlYW4gdXAgaW5jb21wYXRpYmxlXG4gKiBwcmVjYWNoZXMgdGhhdCB3ZXJlIGNyZWF0ZWQgYnkgb2xkZXIgdmVyc2lvbnMgb2YgV29ya2JveC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5mdW5jdGlvbiBjbGVhbnVwT3V0ZGF0ZWRDYWNoZXMoKSB7XG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjgzNTcjaXNzdWVjb21tZW50LTQzNjQ4NDcwNVxuICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignYWN0aXZhdGUnLCAoKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGNhY2hlTmFtZSA9IGNhY2hlTmFtZXMuZ2V0UHJlY2FjaGVOYW1lKCk7XG4gICAgICAgIGV2ZW50LndhaXRVbnRpbChkZWxldGVPdXRkYXRlZENhY2hlcyhjYWNoZU5hbWUpLnRoZW4oKGNhY2hlc0RlbGV0ZWQpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlc0RlbGV0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBUaGUgZm9sbG93aW5nIG91dC1vZi1kYXRlIHByZWNhY2hlcyB3ZXJlIGNsZWFuZWQgdXAgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgYXV0b21hdGljYWxseTpgLCBjYWNoZXNEZWxldGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9KSk7XG59XG5leHBvcnQgeyBjbGVhbnVwT3V0ZGF0ZWRDYWNoZXMgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyIH0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjYWxsc1xuICoge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlciNjcmVhdGVIYW5kbGVyQm91bmRUb1VSTH0gb24gdGhlIGRlZmF1bHRcbiAqIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXJ9IGluc3RhbmNlLlxuICpcbiAqIElmIHlvdSBhcmUgY3JlYXRpbmcgeW91ciBvd24ge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlcn0sIHRoZW4gY2FsbCB0aGVcbiAqIHtAbGluayBQcmVjYWNoZUNvbnRyb2xsZXIjY3JlYXRlSGFuZGxlckJvdW5kVG9VUkx9IG9uIHRoYXQgaW5zdGFuY2UsXG4gKiBpbnN0ZWFkIG9mIHVzaW5nIHRoaXMgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgcHJlY2FjaGVkIFVSTCB3aGljaCB3aWxsIGJlIHVzZWQgdG8gbG9va3VwIHRoZVxuICogYFJlc3BvbnNlYC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2ZhbGxiYWNrVG9OZXR3b3JrPXRydWVdIFdoZXRoZXIgdG8gYXR0ZW1wdCB0byBnZXQgdGhlXG4gKiByZXNwb25zZSBmcm9tIHRoZSBuZXR3b3JrIGlmIHRoZXJlJ3MgYSBwcmVjYWNoZSBtaXNzLlxuICogQHJldHVybiB7bW9kdWxlOndvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9XG4gKlxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSGFuZGxlckJvdW5kVG9VUkwodXJsKSB7XG4gICAgY29uc3QgcHJlY2FjaGVDb250cm9sbGVyID0gZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIoKTtcbiAgICByZXR1cm4gcHJlY2FjaGVDb250cm9sbGVyLmNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMKHVybCk7XG59XG5leHBvcnQgeyBjcmVhdGVIYW5kbGVyQm91bmRUb1VSTCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRha2VzIGluIGEgVVJMLCBhbmQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBVUkwgdGhhdCBjb3VsZCBiZSB1c2VkIHRvXG4gKiBsb29rdXAgdGhlIGVudHJ5IGluIHRoZSBwcmVjYWNoZS5cbiAqXG4gKiBJZiBhIHJlbGF0aXZlIFVSTCBpcyBwcm92aWRlZCwgdGhlIGxvY2F0aW9uIG9mIHRoZSBzZXJ2aWNlIHdvcmtlciBmaWxlIHdpbGxcbiAqIGJlIHVzZWQgYXMgdGhlIGJhc2UuXG4gKlxuICogRm9yIHByZWNhY2hlZCBlbnRyaWVzIHdpdGhvdXQgcmV2aXNpb24gaW5mb3JtYXRpb24sIHRoZSBjYWNoZSBrZXkgd2lsbCBiZSB0aGVcbiAqIHNhbWUgYXMgdGhlIG9yaWdpbmFsIFVSTC5cbiAqXG4gKiBGb3IgcHJlY2FjaGVkIGVudHJpZXMgd2l0aCByZXZpc2lvbiBpbmZvcm1hdGlvbiwgdGhlIGNhY2hlIGtleSB3aWxsIGJlIHRoZVxuICogb3JpZ2luYWwgVVJMIHdpdGggdGhlIGFkZGl0aW9uIG9mIGEgcXVlcnkgcGFyYW1ldGVyIHVzZWQgZm9yIGtlZXBpbmcgdHJhY2sgb2ZcbiAqIHRoZSByZXZpc2lvbiBpbmZvLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB3aG9zZSBjYWNoZSBrZXkgdG8gbG9vayB1cC5cbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIGNhY2hlIGtleSB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoYXQgVVJMLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmZ1bmN0aW9uIGdldENhY2hlS2V5Rm9yVVJMKHVybCkge1xuICAgIGNvbnN0IHByZWNhY2hlQ29udHJvbGxlciA9IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgcmV0dXJuIHByZWNhY2hlQ29udHJvbGxlci5nZXRDYWNoZUtleUZvclVSTCh1cmwpO1xufVxuZXhwb3J0IHsgZ2V0Q2FjaGVLZXlGb3JVUkwgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFkZFBsdWdpbnMgfSBmcm9tICcuL2FkZFBsdWdpbnMuanMnO1xuaW1wb3J0IHsgYWRkUm91dGUgfSBmcm9tICcuL2FkZFJvdXRlLmpzJztcbmltcG9ydCB7IGNsZWFudXBPdXRkYXRlZENhY2hlcyB9IGZyb20gJy4vY2xlYW51cE91dGRhdGVkQ2FjaGVzLmpzJztcbmltcG9ydCB7IGNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMIH0gZnJvbSAnLi9jcmVhdGVIYW5kbGVyQm91bmRUb1VSTC5qcyc7XG5pbXBvcnQgeyBnZXRDYWNoZUtleUZvclVSTCB9IGZyb20gJy4vZ2V0Q2FjaGVLZXlGb3JVUkwuanMnO1xuaW1wb3J0IHsgbWF0Y2hQcmVjYWNoZSB9IGZyb20gJy4vbWF0Y2hQcmVjYWNoZS5qcyc7XG5pbXBvcnQgeyBwcmVjYWNoZSB9IGZyb20gJy4vcHJlY2FjaGUuanMnO1xuaW1wb3J0IHsgcHJlY2FjaGVBbmRSb3V0ZSB9IGZyb20gJy4vcHJlY2FjaGVBbmRSb3V0ZS5qcyc7XG5pbXBvcnQgeyBQcmVjYWNoZUNvbnRyb2xsZXIgfSBmcm9tICcuL1ByZWNhY2hlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgeyBQcmVjYWNoZVJvdXRlIH0gZnJvbSAnLi9QcmVjYWNoZVJvdXRlLmpzJztcbmltcG9ydCB7IFByZWNhY2hlU3RyYXRlZ3kgfSBmcm9tICcuL1ByZWNhY2hlU3RyYXRlZ3kuanMnO1xuaW1wb3J0IHsgUHJlY2FjaGVGYWxsYmFja1BsdWdpbiB9IGZyb20gJy4vUHJlY2FjaGVGYWxsYmFja1BsdWdpbi5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBNb3N0IGNvbnN1bWVycyBvZiB0aGlzIG1vZHVsZSB3aWxsIHdhbnQgdG8gdXNlIHRoZVxuICogW3ByZWNhY2hlQW5kUm91dGUoKV17QGxpbmsgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5wcmVjYWNoZUFuZFJvdXRlfVxuICogbWV0aG9kIHRvIGFkZCBhc3NldHMgdG8gdGhlIGNhY2hlIGFuZCByZXNwb25kIHRvIG5ldHdvcmsgcmVxdWVzdHMgd2l0aCB0aGVzZVxuICogY2FjaGVkIGFzc2V0cy5cbiAqXG4gKiBJZiB5b3UgcmVxdWlyZSBtb3JlIGNvbnRyb2wgb3ZlciBjYWNoaW5nIGFuZCByb3V0aW5nLCB5b3UgY2FuIHVzZSB0aGVcbiAqIFtQcmVjYWNoZUNvbnRyb2xsZXJde0BsaW5rIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmcuUHJlY2FjaGVDb250cm9sbGVyfVxuICogaW50ZXJmYWNlLlxuICpcbiAqIEBtb2R1bGUgd29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmV4cG9ydCB7IGFkZFBsdWdpbnMsIGFkZFJvdXRlLCBjbGVhbnVwT3V0ZGF0ZWRDYWNoZXMsIGNyZWF0ZUhhbmRsZXJCb3VuZFRvVVJMLCBnZXRDYWNoZUtleUZvclVSTCwgbWF0Y2hQcmVjYWNoZSwgcHJlY2FjaGUsIHByZWNhY2hlQW5kUm91dGUsIFByZWNhY2hlQ29udHJvbGxlciwgUHJlY2FjaGVSb3V0ZSwgUHJlY2FjaGVTdHJhdGVneSwgUHJlY2FjaGVGYWxsYmFja1BsdWdpbiwgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyIH0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdGhhdCBjYWxsc1xuICoge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlciNtYXRjaFByZWNhY2hlfSBvbiB0aGUgZGVmYXVsdFxuICoge0BsaW5rIFByZWNhY2hlQ29udHJvbGxlcn0gaW5zdGFuY2UuXG4gKlxuICogSWYgeW91IGFyZSBjcmVhdGluZyB5b3VyIG93biB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyfSwgdGhlbiBjYWxsXG4gKiB7QGxpbmsgUHJlY2FjaGVDb250cm9sbGVyI21hdGNoUHJlY2FjaGV9IG9uIHRoYXQgaW5zdGFuY2UsXG4gKiBpbnN0ZWFkIG9mIHVzaW5nIHRoaXMgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8UmVxdWVzdH0gcmVxdWVzdCBUaGUga2V5ICh3aXRob3V0IHJldmlzaW9uaW5nIHBhcmFtZXRlcnMpXG4gKiB0byBsb29rIHVwIGluIHRoZSBwcmVjYWNoZS5cbiAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2V8dW5kZWZpbmVkPn1cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5mdW5jdGlvbiBtYXRjaFByZWNhY2hlKHJlcXVlc3QpIHtcbiAgICBjb25zdCBwcmVjYWNoZUNvbnRyb2xsZXIgPSBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlcigpO1xuICAgIHJldHVybiBwcmVjYWNoZUNvbnRyb2xsZXIubWF0Y2hQcmVjYWNoZShyZXF1ZXN0KTtcbn1cbmV4cG9ydCB7IG1hdGNoUHJlY2FjaGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGdldE9yQ3JlYXRlUHJlY2FjaGVDb250cm9sbGVyIH0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBZGRzIGl0ZW1zIHRvIHRoZSBwcmVjYWNoZSBsaXN0LCByZW1vdmluZyBhbnkgZHVwbGljYXRlcyBhbmRcbiAqIHN0b3JlcyB0aGUgZmlsZXMgaW4gdGhlXG4gKiBbXCJwcmVjYWNoZSBjYWNoZVwiXXtAbGluayBtb2R1bGU6d29ya2JveC1jb3JlLmNhY2hlTmFtZXN9IHdoZW4gdGhlIHNlcnZpY2VcbiAqIHdvcmtlciBpbnN0YWxscy5cbiAqXG4gKiBUaGlzIG1ldGhvZCBjYW4gYmUgY2FsbGVkIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIFBsZWFzZSBub3RlOiBUaGlzIG1ldGhvZCAqKndpbGwgbm90Kiogc2VydmUgYW55IG9mIHRoZSBjYWNoZWQgZmlsZXMgZm9yIHlvdS5cbiAqIEl0IG9ubHkgcHJlY2FjaGVzIGZpbGVzLiBUbyByZXNwb25kIHRvIGEgbmV0d29yayByZXF1ZXN0IHlvdSBjYWxsXG4gKiBbYWRkUm91dGUoKV17QGxpbmsgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5hZGRSb3V0ZX0uXG4gKlxuICogSWYgeW91IGhhdmUgYSBzaW5nbGUgYXJyYXkgb2YgZmlsZXMgdG8gcHJlY2FjaGUsIHlvdSBjYW4ganVzdCBjYWxsXG4gKiBbcHJlY2FjaGVBbmRSb3V0ZSgpXXtAbGluayBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nLnByZWNhY2hlQW5kUm91dGV9LlxuICpcbiAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0fHN0cmluZz59IFtlbnRyaWVzPVtdXSBBcnJheSBvZiBlbnRyaWVzIHRvIHByZWNhY2hlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmZ1bmN0aW9uIHByZWNhY2hlKGVudHJpZXMpIHtcbiAgICBjb25zdCBwcmVjYWNoZUNvbnRyb2xsZXIgPSBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlcigpO1xuICAgIHByZWNhY2hlQ29udHJvbGxlci5wcmVjYWNoZShlbnRyaWVzKTtcbn1cbmV4cG9ydCB7IHByZWNhY2hlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhZGRSb3V0ZSB9IGZyb20gJy4vYWRkUm91dGUuanMnO1xuaW1wb3J0IHsgcHJlY2FjaGUgfSBmcm9tICcuL3ByZWNhY2hlLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRoaXMgbWV0aG9kIHdpbGwgYWRkIGVudHJpZXMgdG8gdGhlIHByZWNhY2hlIGxpc3QgYW5kIGFkZCBhIHJvdXRlIHRvXG4gKiByZXNwb25kIHRvIGZldGNoIGV2ZW50cy5cbiAqXG4gKiBUaGlzIGlzIGEgY29udmVuaWVuY2UgbWV0aG9kIHRoYXQgd2lsbCBjYWxsXG4gKiBbcHJlY2FjaGUoKV17QGxpbmsgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5wcmVjYWNoZX0gYW5kXG4gKiBbYWRkUm91dGUoKV17QGxpbmsgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5hZGRSb3V0ZX0gaW4gYSBzaW5nbGUgY2FsbC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdHxzdHJpbmc+fSBlbnRyaWVzIEFycmF5IG9mIGVudHJpZXMgdG8gcHJlY2FjaGUuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIFNlZVxuICogW1ByZWNhY2hlUm91dGUgb3B0aW9uc117QGxpbmsgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZy5QcmVjYWNoZVJvdXRlfS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5mdW5jdGlvbiBwcmVjYWNoZUFuZFJvdXRlKGVudHJpZXMsIG9wdGlvbnMpIHtcbiAgICBwcmVjYWNoZShlbnRyaWVzKTtcbiAgICBhZGRSb3V0ZShvcHRpb25zKTtcbn1cbmV4cG9ydCB7IHByZWNhY2hlQW5kUm91dGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBIHBsdWdpbiwgZGVzaWduZWQgdG8gYmUgdXNlZCB3aXRoIFByZWNhY2hlQ29udHJvbGxlciwgdG8gdHJhbnNsYXRlIFVSTHMgaW50b1xuICogdGhlIGNvcnJlc3BvbmRpbmcgY2FjaGUga2V5LCBiYXNlZCBvbiB0aGUgY3VycmVudCByZXZpc2lvbiBpbmZvLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIFByZWNhY2hlQ2FjaGVLZXlQbHVnaW4ge1xuICAgIGNvbnN0cnVjdG9yKHsgcHJlY2FjaGVDb250cm9sbGVyIH0pIHtcbiAgICAgICAgdGhpcy5jYWNoZUtleVdpbGxCZVVzZWQgPSBhc3luYyAoeyByZXF1ZXN0LCBwYXJhbXMsIH0pID0+IHtcbiAgICAgICAgICAgIC8vIFBhcmFtcyBpcyB0eXBlIGFueSwgY2FuJ3QgY2hhbmdlIHJpZ2h0IG5vdy5cbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgICAgICAgICBjb25zdCBjYWNoZUtleSA9IChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuY2FjaGVLZXkpIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJlY2FjaGVDb250cm9sbGVyLmdldENhY2hlS2V5Rm9yVVJMKHJlcXVlc3QudXJsKTtcbiAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgKi9cbiAgICAgICAgICAgIHJldHVybiBjYWNoZUtleVxuICAgICAgICAgICAgICAgID8gbmV3IFJlcXVlc3QoY2FjaGVLZXksIHsgaGVhZGVyczogcmVxdWVzdC5oZWFkZXJzIH0pXG4gICAgICAgICAgICAgICAgOiByZXF1ZXN0O1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9wcmVjYWNoZUNvbnRyb2xsZXIgPSBwcmVjYWNoZUNvbnRyb2xsZXI7XG4gICAgfVxufVxuZXhwb3J0IHsgUHJlY2FjaGVDYWNoZUtleVBsdWdpbiB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEEgcGx1Z2luLCBkZXNpZ25lZCB0byBiZSB1c2VkIHdpdGggUHJlY2FjaGVDb250cm9sbGVyLCB0byBkZXRlcm1pbmUgdGhlXG4gKiBvZiBhc3NldHMgdGhhdCB3ZXJlIHVwZGF0ZWQgKG9yIG5vdCB1cGRhdGVkKSBkdXJpbmcgdGhlIGluc3RhbGwgZXZlbnQuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgUHJlY2FjaGVJbnN0YWxsUmVwb3J0UGx1Z2luIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy51cGRhdGVkVVJMcyA9IFtdO1xuICAgICAgICB0aGlzLm5vdFVwZGF0ZWRVUkxzID0gW107XG4gICAgICAgIHRoaXMuaGFuZGxlcldpbGxTdGFydCA9IGFzeW5jICh7IHJlcXVlc3QsIHN0YXRlLCB9KSA9PiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBgc3RhdGVgIHNob3VsZCBuZXZlciBiZSB1bmRlZmluZWQuLi5cbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLm9yaWdpbmFsUmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkID0gYXN5bmMgKHsgZXZlbnQsIHN0YXRlLCBjYWNoZWRSZXNwb25zZSwgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdpbnN0YWxsJykge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS5vcmlnaW5hbFJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgJiYgc3RhdGUub3JpZ2luYWxSZXF1ZXN0IGluc3RhbmNlb2YgUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBgc3RhdGVgIHNob3VsZCBuZXZlciBiZSB1bmRlZmluZWQuLi5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gc3RhdGUub3JpZ2luYWxSZXF1ZXN0LnVybDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhY2hlZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vdFVwZGF0ZWRVUkxzLnB1c2godXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlZFVSTHMucHVzaCh1cmwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFJlc3BvbnNlO1xuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydCB7IFByZWNhY2hlSW5zdGFsbFJlcG9ydFBsdWdpbiB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8vIE5hbWUgb2YgdGhlIHNlYXJjaCBwYXJhbWV0ZXIgdXNlZCB0byBzdG9yZSByZXZpc2lvbiBpbmZvLlxuY29uc3QgUkVWSVNJT05fU0VBUkNIX1BBUkFNID0gJ19fV0JfUkVWSVNJT05fXyc7XG4vKipcbiAqIENvbnZlcnRzIGEgbWFuaWZlc3QgZW50cnkgaW50byBhIHZlcnNpb25lZCBVUkwgc3VpdGFibGUgZm9yIHByZWNhY2hpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8c3RyaW5nfSBlbnRyeVxuICogQHJldHVybiB7c3RyaW5nfSBBIFVSTCB3aXRoIHZlcnNpb25pbmcgaW5mby5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhY2hlS2V5KGVudHJ5KSB7XG4gICAgaWYgKCFlbnRyeSkge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdhZGQtdG8tY2FjaGUtbGlzdC11bmV4cGVjdGVkLXR5cGUnLCB7IGVudHJ5IH0pO1xuICAgIH1cbiAgICAvLyBJZiBhIHByZWNhY2hlIG1hbmlmZXN0IGVudHJ5IGlzIGEgc3RyaW5nLCBpdCdzIGFzc3VtZWQgdG8gYmUgYSB2ZXJzaW9uZWRcbiAgICAvLyBVUkwsIGxpa2UgJy9hcHAuYWJjZDEyMzQuanMnLiBSZXR1cm4gYXMtaXMuXG4gICAgaWYgKHR5cGVvZiBlbnRyeSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgdXJsT2JqZWN0ID0gbmV3IFVSTChlbnRyeSwgbG9jYXRpb24uaHJlZik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYWNoZUtleTogdXJsT2JqZWN0LmhyZWYsXG4gICAgICAgICAgICB1cmw6IHVybE9iamVjdC5ocmVmLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7IHJldmlzaW9uLCB1cmwgfSA9IGVudHJ5O1xuICAgIGlmICghdXJsKSB7XG4gICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ2FkZC10by1jYWNoZS1saXN0LXVuZXhwZWN0ZWQtdHlwZScsIHsgZW50cnkgfSk7XG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3MganVzdCBhIFVSTCBhbmQgbm8gcmV2aXNpb24sIHRoZW4gaXQncyBhbHNvIGFzc3VtZWQgdG8gYmUgYVxuICAgIC8vIHZlcnNpb25lZCBVUkwuXG4gICAgaWYgKCFyZXZpc2lvbikge1xuICAgICAgICBjb25zdCB1cmxPYmplY3QgPSBuZXcgVVJMKHVybCwgbG9jYXRpb24uaHJlZik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjYWNoZUtleTogdXJsT2JqZWN0LmhyZWYsXG4gICAgICAgICAgICB1cmw6IHVybE9iamVjdC5ocmVmLFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvLyBPdGhlcndpc2UsIGNvbnN0cnVjdCBhIHByb3Blcmx5IHZlcnNpb25lZCBVUkwgdXNpbmcgdGhlIGN1c3RvbSBXb3JrYm94XG4gICAgLy8gc2VhcmNoIHBhcmFtZXRlciBhbG9uZyB3aXRoIHRoZSByZXZpc2lvbiBpbmZvLlxuICAgIGNvbnN0IGNhY2hlS2V5VVJMID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgIGNvbnN0IG9yaWdpbmFsVVJMID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgIGNhY2hlS2V5VVJMLnNlYXJjaFBhcmFtcy5zZXQoUkVWSVNJT05fU0VBUkNIX1BBUkFNLCByZXZpc2lvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2FjaGVLZXk6IGNhY2hlS2V5VVJMLmhyZWYsXG4gICAgICAgIHVybDogb3JpZ2luYWxVUkwuaHJlZixcbiAgICB9O1xufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5jb25zdCBTVUJTVFJJTkdfVE9fRklORCA9ICctcHJlY2FjaGUtJztcbi8qKlxuICogQ2xlYW5zIHVwIGluY29tcGF0aWJsZSBwcmVjYWNoZXMgdGhhdCB3ZXJlIGNyZWF0ZWQgYnkgb2xkZXIgdmVyc2lvbnMgb2ZcbiAqIFdvcmtib3gsIGJ5IGEgc2VydmljZSB3b3JrZXIgcmVnaXN0ZXJlZCB1bmRlciB0aGUgY3VycmVudCBzY29wZS5cbiAqXG4gKiBUaGlzIGlzIG1lYW50IHRvIGJlIGNhbGxlZCBhcyBwYXJ0IG9mIHRoZSBgYWN0aXZhdGVgIGV2ZW50LlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIHNhZmUgdG8gdXNlIGFzIGxvbmcgYXMgeW91IGRvbid0IGluY2x1ZGUgYHN1YnN0cmluZ1RvRmluZGBcbiAqIChkZWZhdWx0aW5nIHRvIGAtcHJlY2FjaGUtYCkgaW4geW91ciBub24tcHJlY2FjaGUgY2FjaGUgbmFtZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGN1cnJlbnRQcmVjYWNoZU5hbWUgVGhlIGNhY2hlIG5hbWUgY3VycmVudGx5IGluIHVzZSBmb3JcbiAqIHByZWNhY2hpbmcuIFRoaXMgY2FjaGUgd29uJ3QgYmUgZGVsZXRlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3Vic3RyaW5nVG9GaW5kPSctcHJlY2FjaGUtJ10gQ2FjaGUgbmFtZXMgd2hpY2ggaW5jbHVkZSB0aGlzXG4gKiBzdWJzdHJpbmcgd2lsbCBiZSBkZWxldGVkIChleGNsdWRpbmcgYGN1cnJlbnRQcmVjYWNoZU5hbWVgKS5cbiAqIEByZXR1cm4ge0FycmF5PHN0cmluZz59IEEgbGlzdCBvZiBhbGwgdGhlIGNhY2hlIG5hbWVzIHRoYXQgd2VyZSBkZWxldGVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5jb25zdCBkZWxldGVPdXRkYXRlZENhY2hlcyA9IGFzeW5jIChjdXJyZW50UHJlY2FjaGVOYW1lLCBzdWJzdHJpbmdUb0ZpbmQgPSBTVUJTVFJJTkdfVE9fRklORCkgPT4ge1xuICAgIGNvbnN0IGNhY2hlTmFtZXMgPSBhd2FpdCBzZWxmLmNhY2hlcy5rZXlzKCk7XG4gICAgY29uc3QgY2FjaGVOYW1lc1RvRGVsZXRlID0gY2FjaGVOYW1lcy5maWx0ZXIoKGNhY2hlTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gY2FjaGVOYW1lLmluY2x1ZGVzKHN1YnN0cmluZ1RvRmluZCkgJiZcbiAgICAgICAgICAgIGNhY2hlTmFtZS5pbmNsdWRlcyhzZWxmLnJlZ2lzdHJhdGlvbi5zY29wZSkgJiZcbiAgICAgICAgICAgIGNhY2hlTmFtZSAhPT0gY3VycmVudFByZWNhY2hlTmFtZTtcbiAgICB9KTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChjYWNoZU5hbWVzVG9EZWxldGUubWFwKChjYWNoZU5hbWUpID0+IHNlbGYuY2FjaGVzLmRlbGV0ZShjYWNoZU5hbWUpKSk7XG4gICAgcmV0dXJuIGNhY2hlTmFtZXNUb0RlbGV0ZTtcbn07XG5leHBvcnQgeyBkZWxldGVPdXRkYXRlZENhY2hlcyB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgcmVtb3ZlSWdub3JlZFNlYXJjaFBhcmFtcyB9IGZyb20gJy4vcmVtb3ZlSWdub3JlZFNlYXJjaFBhcmFtcy5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogR2VuZXJhdG9yIGZ1bmN0aW9uIHRoYXQgeWllbGRzIHBvc3NpYmxlIHZhcmlhdGlvbnMgb24gdGhlIG9yaWdpbmFsIFVSTCB0b1xuICogY2hlY2ssIG9uZSBhdCBhIHRpbWUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqXG4gKiBAcHJpdmF0ZVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXByZWNhY2hpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uKiBnZW5lcmF0ZVVSTFZhcmlhdGlvbnModXJsLCB7IGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZyA9IFsvXnV0bV8vLCAvXmZiY2xpZCQvXSwgZGlyZWN0b3J5SW5kZXggPSAnaW5kZXguaHRtbCcsIGNsZWFuVVJMcyA9IHRydWUsIHVybE1hbmlwdWxhdGlvbiwgfSA9IHt9KSB7XG4gICAgY29uc3QgdXJsT2JqZWN0ID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgIHVybE9iamVjdC5oYXNoID0gJyc7XG4gICAgeWllbGQgdXJsT2JqZWN0LmhyZWY7XG4gICAgY29uc3QgdXJsV2l0aG91dElnbm9yZWRQYXJhbXMgPSByZW1vdmVJZ25vcmVkU2VhcmNoUGFyYW1zKHVybE9iamVjdCwgaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nKTtcbiAgICB5aWVsZCB1cmxXaXRob3V0SWdub3JlZFBhcmFtcy5ocmVmO1xuICAgIGlmIChkaXJlY3RvcnlJbmRleCAmJiB1cmxXaXRob3V0SWdub3JlZFBhcmFtcy5wYXRobmFtZS5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIGNvbnN0IGRpcmVjdG9yeVVSTCA9IG5ldyBVUkwodXJsV2l0aG91dElnbm9yZWRQYXJhbXMuaHJlZik7XG4gICAgICAgIGRpcmVjdG9yeVVSTC5wYXRobmFtZSArPSBkaXJlY3RvcnlJbmRleDtcbiAgICAgICAgeWllbGQgZGlyZWN0b3J5VVJMLmhyZWY7XG4gICAgfVxuICAgIGlmIChjbGVhblVSTHMpIHtcbiAgICAgICAgY29uc3QgY2xlYW5VUkwgPSBuZXcgVVJMKHVybFdpdGhvdXRJZ25vcmVkUGFyYW1zLmhyZWYpO1xuICAgICAgICBjbGVhblVSTC5wYXRobmFtZSArPSAnLmh0bWwnO1xuICAgICAgICB5aWVsZCBjbGVhblVSTC5ocmVmO1xuICAgIH1cbiAgICBpZiAodXJsTWFuaXB1bGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxVUkxzID0gdXJsTWFuaXB1bGF0aW9uKHsgdXJsOiB1cmxPYmplY3QgfSk7XG4gICAgICAgIGZvciAoY29uc3QgdXJsVG9BdHRlbXB0IG9mIGFkZGl0aW9uYWxVUkxzKSB7XG4gICAgICAgICAgICB5aWVsZCB1cmxUb0F0dGVtcHQuaHJlZjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IFByZWNhY2hlQ29udHJvbGxlciB9IGZyb20gJy4uL1ByZWNhY2hlQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmxldCBwcmVjYWNoZUNvbnRyb2xsZXI7XG4vKipcbiAqIEByZXR1cm4ge1ByZWNhY2hlQ29udHJvbGxlcn1cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPckNyZWF0ZVByZWNhY2hlQ29udHJvbGxlciA9ICgpID0+IHtcbiAgICBpZiAoIXByZWNhY2hlQ29udHJvbGxlcikge1xuICAgICAgICBwcmVjYWNoZUNvbnRyb2xsZXIgPSBuZXcgUHJlY2FjaGVDb250cm9sbGVyKCk7XG4gICAgfVxuICAgIHJldHVybiBwcmVjYWNoZUNvbnRyb2xsZXI7XG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwVGl0bGVcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gZGVsZXRlZFVSTHNcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBsb2dHcm91cCA9IChncm91cFRpdGxlLCBkZWxldGVkVVJMcykgPT4ge1xuICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChncm91cFRpdGxlKTtcbiAgICBmb3IgKGNvbnN0IHVybCBvZiBkZWxldGVkVVJMcykge1xuICAgICAgICBsb2dnZXIubG9nKHVybCk7XG4gICAgfVxuICAgIGxvZ2dlci5ncm91cEVuZCgpO1xufTtcbi8qKlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSBkZWxldGVkVVJMc1xuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRDbGVhbnVwRGV0YWlscyhkZWxldGVkVVJMcykge1xuICAgIGNvbnN0IGRlbGV0aW9uQ291bnQgPSBkZWxldGVkVVJMcy5sZW5ndGg7XG4gICAgaWYgKGRlbGV0aW9uQ291bnQgPiAwKSB7XG4gICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgRHVyaW5nIHByZWNhY2hpbmcgY2xlYW51cCwgYCArXG4gICAgICAgICAgICBgJHtkZWxldGlvbkNvdW50fSBjYWNoZWQgYCArXG4gICAgICAgICAgICBgcmVxdWVzdCR7ZGVsZXRpb25Db3VudCA9PT0gMSA/ICcgd2FzJyA6ICdzIHdlcmUnfSBkZWxldGVkLmApO1xuICAgICAgICBsb2dHcm91cCgnRGVsZXRlZCBDYWNoZSBSZXF1ZXN0cycsIGRlbGV0ZWRVUkxzKTtcbiAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgfVxufVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGdyb3VwVGl0bGVcbiAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nPn0gdXJsc1xuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIF9uZXN0ZWRHcm91cChncm91cFRpdGxlLCB1cmxzKSB7XG4gICAgaWYgKHVybHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGdyb3VwVGl0bGUpO1xuICAgIGZvciAoY29uc3QgdXJsIG9mIHVybHMpIHtcbiAgICAgICAgbG9nZ2VyLmxvZyh1cmwpO1xuICAgIH1cbiAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbn1cbi8qKlxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB1cmxzVG9QcmVjYWNoZVxuICogQHBhcmFtIHtBcnJheTxzdHJpbmc+fSB1cmxzQWxyZWFkeVByZWNhY2hlZFxuICpcbiAqIEBwcml2YXRlXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcHJlY2FjaGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRJbnN0YWxsRGV0YWlscyh1cmxzVG9QcmVjYWNoZSwgdXJsc0FscmVhZHlQcmVjYWNoZWQpIHtcbiAgICBjb25zdCBwcmVjYWNoZWRDb3VudCA9IHVybHNUb1ByZWNhY2hlLmxlbmd0aDtcbiAgICBjb25zdCBhbHJlYWR5UHJlY2FjaGVkQ291bnQgPSB1cmxzQWxyZWFkeVByZWNhY2hlZC5sZW5ndGg7XG4gICAgaWYgKHByZWNhY2hlZENvdW50IHx8IGFscmVhZHlQcmVjYWNoZWRDb3VudCkge1xuICAgICAgICBsZXQgbWVzc2FnZSA9IGBQcmVjYWNoaW5nICR7cHJlY2FjaGVkQ291bnR9IGZpbGUke3ByZWNhY2hlZENvdW50ID09PSAxID8gJycgOiAncyd9LmA7XG4gICAgICAgIGlmIChhbHJlYWR5UHJlY2FjaGVkQ291bnQgPiAwKSB7XG4gICAgICAgICAgICBtZXNzYWdlICs9IGAgJHthbHJlYWR5UHJlY2FjaGVkQ291bnR9IGAgK1xuICAgICAgICAgICAgICAgIGBmaWxlJHthbHJlYWR5UHJlY2FjaGVkQ291bnQgPT09IDEgPyAnIGlzJyA6ICdzIGFyZSd9IGFscmVhZHkgY2FjaGVkLmA7XG4gICAgICAgIH1cbiAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKG1lc3NhZ2UpO1xuICAgICAgICBfbmVzdGVkR3JvdXAoYFZpZXcgbmV3bHkgcHJlY2FjaGVkIFVSTHMuYCwgdXJsc1RvUHJlY2FjaGUpO1xuICAgICAgICBfbmVzdGVkR3JvdXAoYFZpZXcgcHJldmlvdXNseSBwcmVjYWNoZWQgVVJMcy5gLCB1cmxzQWxyZWFkeVByZWNhY2hlZCk7XG4gICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgIH1cbn1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCAnLi4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBSZW1vdmVzIGFueSBVUkwgc2VhcmNoIHBhcmFtZXRlcnMgdGhhdCBzaG91bGQgYmUgaWdub3JlZC5cbiAqXG4gKiBAcGFyYW0ge1VSTH0gdXJsT2JqZWN0IFRoZSBvcmlnaW5hbCBVUkwuXG4gKiBAcGFyYW0ge0FycmF5PFJlZ0V4cD59IGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZyBSZWdFeHBzIHRvIHRlc3QgYWdhaW5zdFxuICogZWFjaCBzZWFyY2ggcGFyYW1ldGVyIG5hbWUuIE1hdGNoZXMgbWVhbiB0aGF0IHRoZSBzZWFyY2ggcGFyYW1ldGVyIHNob3VsZCBiZVxuICogaWdub3JlZC5cbiAqIEByZXR1cm4ge1VSTH0gVGhlIFVSTCB3aXRoIGFueSBpZ25vcmVkIHNlYXJjaCBwYXJhbWV0ZXJzIHJlbW92ZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1wcmVjYWNoaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVJZ25vcmVkU2VhcmNoUGFyYW1zKHVybE9iamVjdCwgaWdub3JlVVJMUGFyYW1ldGVyc01hdGNoaW5nID0gW10pIHtcbiAgICAvLyBDb252ZXJ0IHRoZSBpdGVyYWJsZSBpbnRvIGFuIGFycmF5IGF0IHRoZSBzdGFydCBvZiB0aGUgbG9vcCB0byBtYWtlIHN1cmVcbiAgICAvLyBkZWxldGlvbiBkb2Vzbid0IG1lc3MgdXAgaXRlcmF0aW9uLlxuICAgIGZvciAoY29uc3QgcGFyYW1OYW1lIG9mIFsuLi51cmxPYmplY3Quc2VhcmNoUGFyYW1zLmtleXMoKV0pIHtcbiAgICAgICAgaWYgKGlnbm9yZVVSTFBhcmFtZXRlcnNNYXRjaGluZy5zb21lKChyZWdFeHApID0+IHJlZ0V4cC50ZXN0KHBhcmFtTmFtZSkpKSB7XG4gICAgICAgICAgICB1cmxPYmplY3Quc2VhcmNoUGFyYW1zLmRlbGV0ZShwYXJhbU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1cmxPYmplY3Q7XG59XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICcuL1JvdXRlLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIE5hdmlnYXRpb25Sb3V0ZSBtYWtlcyBpdCBlYXN5IHRvIGNyZWF0ZSBhXG4gKiBbUm91dGVde0BsaW5rIG1vZHVsZTp3b3JrYm94LXJvdXRpbmcuUm91dGV9IHRoYXQgbWF0Y2hlcyBmb3IgYnJvd3NlclxuICogW25hdmlnYXRpb24gcmVxdWVzdHNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvcHJpbWVycy9zZXJ2aWNlLXdvcmtlcnMvaGlnaC1wZXJmb3JtYW5jZS1sb2FkaW5nI2ZpcnN0X3doYXRfYXJlX25hdmlnYXRpb25fcmVxdWVzdHN9LlxuICpcbiAqIEl0IHdpbGwgb25seSBtYXRjaCBpbmNvbWluZyBSZXF1ZXN0cyB3aG9zZVxuICogW2Btb2RlYF17QGxpbmsgaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtcmVxdWVzdC1tb2RlfVxuICogaXMgc2V0IHRvIGBuYXZpZ2F0ZWAuXG4gKlxuICogWW91IGNhbiBvcHRpb25hbGx5IG9ubHkgYXBwbHkgdGhpcyByb3V0ZSB0byBhIHN1YnNldCBvZiBuYXZpZ2F0aW9uIHJlcXVlc3RzXG4gKiBieSB1c2luZyBvbmUgb3IgYm90aCBvZiB0aGUgYGRlbnlsaXN0YCBhbmQgYGFsbG93bGlzdGAgcGFyYW1ldGVycy5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcm91dGluZ1xuICogQGV4dGVuZHMgbW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZVxuICovXG5jbGFzcyBOYXZpZ2F0aW9uUm91dGUgZXh0ZW5kcyBSb3V0ZSB7XG4gICAgLyoqXG4gICAgICogSWYgYm90aCBgZGVueWxpc3RgIGFuZCBgYWxsb3dsaXN0YCBhcmUgcHJvdmlkZWQsIHRoZSBgZGVueWxpc3RgIHdpbGxcbiAgICAgKiB0YWtlIHByZWNlZGVuY2UgYW5kIHRoZSByZXF1ZXN0IHdpbGwgbm90IG1hdGNoIHRoaXMgcm91dGUuXG4gICAgICpcbiAgICAgKiBUaGUgcmVndWxhciBleHByZXNzaW9ucyBpbiBgYWxsb3dsaXN0YCBhbmQgYGRlbnlsaXN0YFxuICAgICAqIGFyZSBtYXRjaGVkIGFnYWluc3QgdGhlIGNvbmNhdGVuYXRlZFxuICAgICAqIFtgcGF0aG5hbWVgXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEh5cGVybGlua0VsZW1lbnRVdGlscy9wYXRobmFtZX1cbiAgICAgKiBhbmQgW2BzZWFyY2hgXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEh5cGVybGlua0VsZW1lbnRVdGlscy9zZWFyY2h9XG4gICAgICogcG9ydGlvbnMgb2YgdGhlIHJlcXVlc3RlZCBVUkwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtBcnJheTxSZWdFeHA+fSBbb3B0aW9ucy5kZW55bGlzdF0gSWYgYW55IG9mIHRoZXNlIHBhdHRlcm5zIG1hdGNoLFxuICAgICAqIHRoZSByb3V0ZSB3aWxsIG5vdCBoYW5kbGUgdGhlIHJlcXVlc3QgKGV2ZW4gaWYgYSBhbGxvd2xpc3QgUmVnRXhwIG1hdGNoZXMpLlxuICAgICAqIEBwYXJhbSB7QXJyYXk8UmVnRXhwPn0gW29wdGlvbnMuYWxsb3dsaXN0PVsvLi9dXSBJZiBhbnkgb2YgdGhlc2UgcGF0dGVybnNcbiAgICAgKiBtYXRjaCB0aGUgVVJMJ3MgcGF0aG5hbWUgYW5kIHNlYXJjaCBwYXJhbWV0ZXIsIHRoZSByb3V0ZSB3aWxsIGhhbmRsZSB0aGVcbiAgICAgKiByZXF1ZXN0IChhc3N1bWluZyB0aGUgZGVueWxpc3QgZG9lc24ndCBtYXRjaCkuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoaGFuZGxlciwgeyBhbGxvd2xpc3QgPSBbLy4vXSwgZGVueWxpc3QgPSBbXSB9ID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0FycmF5T2ZDbGFzcyhhbGxvd2xpc3QsIFJlZ0V4cCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ05hdmlnYXRpb25Sb3V0ZScsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnb3B0aW9ucy5hbGxvd2xpc3QnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhc3NlcnQuaXNBcnJheU9mQ2xhc3MoZGVueWxpc3QsIFJlZ0V4cCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ05hdmlnYXRpb25Sb3V0ZScsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnb3B0aW9ucy5kZW55bGlzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlcigob3B0aW9ucykgPT4gdGhpcy5fbWF0Y2gob3B0aW9ucyksIGhhbmRsZXIpO1xuICAgICAgICB0aGlzLl9hbGxvd2xpc3QgPSBhbGxvd2xpc3Q7XG4gICAgICAgIHRoaXMuX2RlbnlsaXN0ID0gZGVueWxpc3Q7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJvdXRlcyBtYXRjaCBoYW5kbGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge1VSTH0gb3B0aW9ucy51cmxcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9tYXRjaCh7IHVybCwgcmVxdWVzdCB9KSB7XG4gICAgICAgIGlmIChyZXF1ZXN0ICYmIHJlcXVlc3QubW9kZSAhPT0gJ25hdmlnYXRlJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lQW5kU2VhcmNoID0gdXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaDtcbiAgICAgICAgZm9yIChjb25zdCByZWdFeHAgb2YgdGhpcy5fZGVueWxpc3QpIHtcbiAgICAgICAgICAgIGlmIChyZWdFeHAudGVzdChwYXRobmFtZUFuZFNlYXJjaCkpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBUaGUgbmF2aWdhdGlvbiByb3V0ZSAke3BhdGhuYW1lQW5kU2VhcmNofSBpcyBub3QgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgYmVpbmcgdXNlZCwgc2luY2UgdGhlIFVSTCBtYXRjaGVzIHRoaXMgZGVueWxpc3QgcGF0dGVybjogYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtyZWdFeHAudG9TdHJpbmcoKX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9hbGxvd2xpc3Quc29tZSgocmVnRXhwKSA9PiByZWdFeHAudGVzdChwYXRobmFtZUFuZFNlYXJjaCkpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgVGhlIG5hdmlnYXRpb24gcm91dGUgJHtwYXRobmFtZUFuZFNlYXJjaH0gYCArXG4gICAgICAgICAgICAgICAgICAgIGBpcyBiZWluZyB1c2VkLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5sb2coYFRoZSBuYXZpZ2F0aW9uIHJvdXRlICR7cGF0aG5hbWVBbmRTZWFyY2h9IGlzIG5vdCBgICtcbiAgICAgICAgICAgICAgICBgYmVpbmcgdXNlZCwgc2luY2UgdGhlIFVSTCBiZWluZyBuYXZpZ2F0ZWQgdG8gZG9lc24ndCBgICtcbiAgICAgICAgICAgICAgICBgbWF0Y2ggdGhlIGFsbG93bGlzdC5gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0IHsgTmF2aWdhdGlvblJvdXRlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICcuL1JvdXRlLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFJlZ0V4cFJvdXRlIG1ha2VzIGl0IGVhc3kgdG8gY3JlYXRlIGEgcmVndWxhciBleHByZXNzaW9uIGJhc2VkXG4gKiBbUm91dGVde0BsaW5rIG1vZHVsZTp3b3JrYm94LXJvdXRpbmcuUm91dGV9LlxuICpcbiAqIEZvciBzYW1lLW9yaWdpbiByZXF1ZXN0cyB0aGUgUmVnRXhwIG9ubHkgbmVlZHMgdG8gbWF0Y2ggcGFydCBvZiB0aGUgVVJMLiBGb3JcbiAqIHJlcXVlc3RzIGFnYWluc3QgdGhpcmQtcGFydHkgc2VydmVycywgeW91IG11c3QgZGVmaW5lIGEgUmVnRXhwIHRoYXQgbWF0Y2hlc1xuICogdGhlIHN0YXJ0IG9mIHRoZSBVUkwuXG4gKlxuICogW1NlZSB0aGUgbW9kdWxlIGRvY3MgZm9yIGluZm8uXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9tb2R1bGVzL3dvcmtib3gtcm91dGluZ31cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcm91dGluZ1xuICogQGV4dGVuZHMgbW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZVxuICovXG5jbGFzcyBSZWdFeHBSb3V0ZSBleHRlbmRzIFJvdXRlIHtcbiAgICAvKipcbiAgICAgKiBJZiB0aGUgcmVndWxhciBleHByZXNzaW9uIGNvbnRhaW5zXG4gICAgICogW2NhcHR1cmUgZ3JvdXBzXXtAbGluayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9SZWdFeHAjZ3JvdXBpbmctYmFjay1yZWZlcmVuY2VzfSxcbiAgICAgKiB0aGUgY2FwdHVyZWQgdmFsdWVzIHdpbGwgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAqIFtoYW5kbGVyJ3Nde0BsaW5rIG1vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBgcGFyYW1zYFxuICAgICAqIGFyZ3VtZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZWdFeHB9IHJlZ0V4cCBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3QgVVJMcy5cbiAgICAgKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kPSdHRVQnXSBUaGUgSFRUUCBtZXRob2QgdG8gbWF0Y2ggdGhlIFJvdXRlXG4gICAgICogYWdhaW5zdC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZWdFeHAsIGhhbmRsZXIsIG1ldGhvZCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVnRXhwLCBSZWdFeHAsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSZWdFeHBSb3V0ZScsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncGF0dGVybicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtYXRjaCA9ICh7IHVybCB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZWdFeHAuZXhlYyh1cmwuaHJlZik7XG4gICAgICAgICAgICAvLyBSZXR1cm4gaW1tZWRpYXRlbHkgaWYgdGhlcmUncyBubyBtYXRjaC5cbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUmVxdWlyZSB0aGF0IHRoZSBtYXRjaCBzdGFydCBhdCB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIHRoZSBVUkwgc3RyaW5nXG4gICAgICAgICAgICAvLyBpZiBpdCdzIGEgY3Jvc3Mtb3JpZ2luIHJlcXVlc3QuXG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8yODEgZm9yIHRoZSBjb250ZXh0XG4gICAgICAgICAgICAvLyBiZWhpbmQgdGhpcyBiZWhhdmlvci5cbiAgICAgICAgICAgIGlmICgodXJsLm9yaWdpbiAhPT0gbG9jYXRpb24ub3JpZ2luKSAmJiAocmVzdWx0LmluZGV4ICE9PSAwKSkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiAnJHtyZWdFeHAudG9TdHJpbmcoKX0nIG9ubHkgcGFydGlhbGx5IG1hdGNoZWQgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgYWdhaW5zdCB0aGUgY3Jvc3Mtb3JpZ2luIFVSTCAnJHt1cmwudG9TdHJpbmcoKX0nLiBSZWdFeHBSb3V0ZSdzIHdpbGwgb25seSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBoYW5kbGUgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIGlmIHRoZXkgbWF0Y2ggdGhlIGVudGlyZSBVUkwuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSByb3V0ZSBtYXRjaGVzLCBidXQgdGhlcmUgYXJlbid0IGFueSBjYXB0dXJlIGdyb3VwcyBkZWZpbmVkLCB0aGVuXG4gICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmV0dXJuIFtdLCB3aGljaCBpcyB0cnV0aHkgYW5kIHRoZXJlZm9yZSBzdWZmaWNpZW50IHRvXG4gICAgICAgICAgICAvLyBpbmRpY2F0ZSBhIG1hdGNoLlxuICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIGNhcHR1cmUgZ3JvdXBzLCB0aGVuIGl0IHdpbGwgcmV0dXJuIHRoZWlyIHZhbHVlcy5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuc2xpY2UoMSk7XG4gICAgICAgIH07XG4gICAgICAgIHN1cGVyKG1hdGNoLCBoYW5kbGVyLCBtZXRob2QpO1xuICAgIH1cbn1cbmV4cG9ydCB7IFJlZ0V4cFJvdXRlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGRlZmF1bHRNZXRob2QsIHZhbGlkTWV0aG9kcyB9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IG5vcm1hbGl6ZUhhbmRsZXIgfSBmcm9tICcuL3V0aWxzL25vcm1hbGl6ZUhhbmRsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQSBgUm91dGVgIGNvbnNpc3RzIG9mIGEgcGFpciBvZiBjYWxsYmFjayBmdW5jdGlvbnMsIFwibWF0Y2hcIiBhbmQgXCJoYW5kbGVyXCIuXG4gKiBUaGUgXCJtYXRjaFwiIGNhbGxiYWNrIGRldGVybWluZSBpZiBhIHJvdXRlIHNob3VsZCBiZSB1c2VkIHRvIFwiaGFuZGxlXCIgYVxuICogcmVxdWVzdCBieSByZXR1cm5pbmcgYSBub24tZmFsc3kgdmFsdWUgaWYgaXQgY2FuLiBUaGUgXCJoYW5kbGVyXCIgY2FsbGJhY2tcbiAqIGlzIGNhbGxlZCB3aGVuIHRoZXJlIGlzIGEgbWF0Y2ggYW5kIHNob3VsZCByZXR1cm4gYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXNcbiAqIHRvIGEgYFJlc3BvbnNlYC5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcm91dGluZ1xuICovXG5jbGFzcyBSb3V0ZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IgZm9yIFJvdXRlIGNsYXNzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1yb3V0aW5nfm1hdGNoQ2FsbGJhY2t9IG1hdGNoXG4gICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgd2hldGhlciB0aGUgcm91dGUgbWF0Y2hlcyBhIGdpdmVuXG4gICAgICogYGZldGNoYCBldmVudCBieSByZXR1cm5pbmcgYSBub24tZmFsc3kgdmFsdWUuXG4gICAgICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gICAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXNvbHZpbmcgdG8gYSBSZXNwb25zZS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW21ldGhvZD0nR0VUJ10gVGhlIEhUVFAgbWV0aG9kIHRvIG1hdGNoIHRoZSBSb3V0ZVxuICAgICAqIGFnYWluc3QuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobWF0Y2gsIGhhbmRsZXIsIG1ldGhvZCA9IGRlZmF1bHRNZXRob2QpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc1R5cGUobWF0Y2gsICdmdW5jdGlvbicsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZScsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnbWF0Y2gnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzT25lT2YobWV0aG9kLCB2YWxpZE1ldGhvZHMsIHsgcGFyYW1OYW1lOiAnbWV0aG9kJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUaGVzZSB2YWx1ZXMgYXJlIHJlZmVyZW5jZWQgZGlyZWN0bHkgYnkgUm91dGVyIHNvIGNhbm5vdCBiZVxuICAgICAgICAvLyBhbHRlcmVkIGJ5IG1pbmlmaWNhdG9uLlxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBub3JtYWxpemVIYW5kbGVyKGhhbmRsZXIpO1xuICAgICAgICB0aGlzLm1hdGNoID0gbWF0Y2g7XG4gICAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICAgIH1cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bW9kdWxlOndvcmtib3gtcm91dGluZy1oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzb2x2aW5nIHRvIGEgUmVzcG9uc2VcbiAgICAgKi9cbiAgICBzZXRDYXRjaEhhbmRsZXIoaGFuZGxlcikge1xuICAgICAgICB0aGlzLmNhdGNoSGFuZGxlciA9IG5vcm1hbGl6ZUhhbmRsZXIoaGFuZGxlcik7XG4gICAgfVxufVxuZXhwb3J0IHsgUm91dGUgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0IHsgZGVmYXVsdE1ldGhvZCB9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzLmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgbm9ybWFsaXplSGFuZGxlciB9IGZyb20gJy4vdXRpbHMvbm9ybWFsaXplSGFuZGxlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIFRoZSBSb3V0ZXIgY2FuIGJlIHVzZWQgdG8gcHJvY2VzcyBhIEZldGNoRXZlbnQgdGhyb3VnaCBvbmUgb3IgbW9yZVxuICogW1JvdXRlc117QGxpbmsgbW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZX0gcmVzcG9uZGluZyAgd2l0aCBhIFJlcXVlc3QgaWZcbiAqIGEgbWF0Y2hpbmcgcm91dGUgZXhpc3RzLlxuICpcbiAqIElmIG5vIHJvdXRlIG1hdGNoZXMgYSBnaXZlbiBhIHJlcXVlc3QsIHRoZSBSb3V0ZXIgd2lsbCB1c2UgYSBcImRlZmF1bHRcIlxuICogaGFuZGxlciBpZiBvbmUgaXMgZGVmaW5lZC5cbiAqXG4gKiBTaG91bGQgdGhlIG1hdGNoaW5nIFJvdXRlIHRocm93IGFuIGVycm9yLCB0aGUgUm91dGVyIHdpbGwgdXNlIGEgXCJjYXRjaFwiXG4gKiBoYW5kbGVyIGlmIG9uZSBpcyBkZWZpbmVkIHRvIGdyYWNlZnVsbHkgZGVhbCB3aXRoIGlzc3VlcyBhbmQgcmVzcG9uZCB3aXRoIGFcbiAqIFJlcXVlc3QuXG4gKlxuICogSWYgYSByZXF1ZXN0IG1hdGNoZXMgbXVsdGlwbGUgcm91dGVzLCB0aGUgKiplYXJsaWVzdCoqIHJlZ2lzdGVyZWQgcm91dGUgd2lsbFxuICogYmUgdXNlZCB0byByZXNwb25kIHRvIHRoZSByZXF1ZXN0LlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1yb3V0aW5nXG4gKi9cbmNsYXNzIFJvdXRlciB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgYSBuZXcgUm91dGVyLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9yb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRIYW5kbGVyTWFwID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHtNYXA8c3RyaW5nLCBBcnJheTxtb2R1bGU6d29ya2JveC1yb3V0aW5nLlJvdXRlPj59IHJvdXRlcyBBIGBNYXBgIG9mIEhUVFBcbiAgICAgKiBtZXRob2QgbmFtZSAoJ0dFVCcsIGV0Yy4pIHRvIGFuIGFycmF5IG9mIGFsbCB0aGUgY29ycmVzcG9uZGluZyBgUm91dGVgXG4gICAgICogaW5zdGFuY2VzIHRoYXQgYXJlIHJlZ2lzdGVyZWQuXG4gICAgICovXG4gICAgZ2V0IHJvdXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JvdXRlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIGZldGNoIGV2ZW50IGxpc3RlbmVyIHRvIHJlc3BvbmQgdG8gZXZlbnRzIHdoZW4gYSByb3V0ZSBtYXRjaGVzXG4gICAgICogdGhlIGV2ZW50J3MgcmVxdWVzdC5cbiAgICAgKi9cbiAgICBhZGRGZXRjaExpc3RlbmVyKCkge1xuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0L2lzc3Vlcy8yODM1NyNpc3N1ZWNvbW1lbnQtNDM2NDg0NzA1XG4gICAgICAgIHNlbGYuYWRkRXZlbnRMaXN0ZW5lcignZmV0Y2gnLCAoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHJlcXVlc3QgfSA9IGV2ZW50O1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VQcm9taXNlID0gdGhpcy5oYW5kbGVSZXF1ZXN0KHsgcmVxdWVzdCwgZXZlbnQgfSk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2VQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucmVzcG9uZFdpdGgocmVzcG9uc2VQcm9taXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgbWVzc2FnZSBldmVudCBsaXN0ZW5lciBmb3IgVVJMcyB0byBjYWNoZSBmcm9tIHRoZSB3aW5kb3cuXG4gICAgICogVGhpcyBpcyB1c2VmdWwgdG8gY2FjaGUgcmVzb3VyY2VzIGxvYWRlZCBvbiB0aGUgcGFnZSBwcmlvciB0byB3aGVuIHRoZVxuICAgICAqIHNlcnZpY2Ugd29ya2VyIHN0YXJ0ZWQgY29udHJvbGxpbmcgaXQuXG4gICAgICpcbiAgICAgKiBUaGUgZm9ybWF0IG9mIHRoZSBtZXNzYWdlIGRhdGEgc2VudCBmcm9tIHRoZSB3aW5kb3cgc2hvdWxkIGJlIGFzIGZvbGxvd3MuXG4gICAgICogV2hlcmUgdGhlIGB1cmxzVG9DYWNoZWAgYXJyYXkgbWF5IGNvbnNpc3Qgb2YgVVJMIHN0cmluZ3Mgb3IgYW4gYXJyYXkgb2ZcbiAgICAgKiBVUkwgc3RyaW5nICsgYHJlcXVlc3RJbml0YCBvYmplY3QgKHRoZSBzYW1lIGFzIHlvdSdkIHBhc3MgdG8gYGZldGNoKClgKS5cbiAgICAgKlxuICAgICAqIGBgYFxuICAgICAqIHtcbiAgICAgKiAgIHR5cGU6ICdDQUNIRV9VUkxTJyxcbiAgICAgKiAgIHBheWxvYWQ6IHtcbiAgICAgKiAgICAgdXJsc1RvQ2FjaGU6IFtcbiAgICAgKiAgICAgICAnLi9zY3JpcHQxLmpzJyxcbiAgICAgKiAgICAgICAnLi9zY3JpcHQyLmpzJyxcbiAgICAgKiAgICAgICBbJy4vc2NyaXB0My5qcycsIHttb2RlOiAnbm8tY29ycyd9XSxcbiAgICAgKiAgICAgXSxcbiAgICAgKiAgIH0sXG4gICAgICogfVxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGFkZENhY2hlTGlzdGVuZXIoKSB7XG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzI4MzU3I2lzc3VlY29tbWVudC00MzY0ODQ3MDVcbiAgICAgICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKChldmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gZXZlbnQuZGF0YSBpcyB0eXBlICdhbnknXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YSAmJiBldmVudC5kYXRhLnR5cGUgPT09ICdDQUNIRV9VUkxTJykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXlsb2FkIH0gPSBldmVudC5kYXRhOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBDYWNoaW5nIFVSTHMgZnJvbSB0aGUgd2luZG93YCwgcGF5bG9hZC51cmxzVG9DYWNoZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RQcm9taXNlcyA9IFByb21pc2UuYWxsKHBheWxvYWQudXJsc1RvQ2FjaGUubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkgPSBbZW50cnldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCguLi5lbnRyeSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlcXVlc3QoeyByZXF1ZXN0LCBldmVudCB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiBUeXBlU2NyaXB0IGVycm9ycyB3aXRob3V0IHRoaXMgdHlwZWNhc3QgZm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIHNvbWUgcmVhc29uIChwcm9iYWJseSBhIGJ1ZykuIFRoZSByZWFsIHR5cGUgaGVyZSBzaG91bGQgd29yayBidXRcbiAgICAgICAgICAgICAgICAgICAgLy8gZG9lc24ndDogYEFycmF5PFByb21pc2U8UmVzcG9uc2U+IHwgdW5kZWZpbmVkPmAuXG4gICAgICAgICAgICAgICAgfSkpOyAvLyBUeXBlU2NyaXB0XG4gICAgICAgICAgICAgICAgZXZlbnQud2FpdFVudGlsKHJlcXVlc3RQcm9taXNlcyk7XG4gICAgICAgICAgICAgICAgLy8gSWYgYSBNZXNzYWdlQ2hhbm5lbCB3YXMgdXNlZCwgcmVwbHkgdG8gdGhlIG1lc3NhZ2Ugb24gc3VjY2Vzcy5cbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQucG9ydHMgJiYgZXZlbnQucG9ydHNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgdm9pZCByZXF1ZXN0UHJvbWlzZXMudGhlbigoKSA9PiBldmVudC5wb3J0c1swXS5wb3N0TWVzc2FnZSh0cnVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFwcGx5IHRoZSByb3V0aW5nIHJ1bGVzIHRvIGEgRmV0Y2hFdmVudCBvYmplY3QgdG8gZ2V0IGEgUmVzcG9uc2UgZnJvbSBhblxuICAgICAqIGFwcHJvcHJpYXRlIFJvdXRlJ3MgaGFuZGxlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fSBvcHRpb25zLnJlcXVlc3QgVGhlIHJlcXVlc3QgdG8gaGFuZGxlLlxuICAgICAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBvcHRpb25zLmV2ZW50IFRoZSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGVcbiAgICAgKiAgICAgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPnx1bmRlZmluZWR9IEEgcHJvbWlzZSBpcyByZXR1cm5lZCBpZiBhXG4gICAgICogICAgIHJlZ2lzdGVyZWQgcm91dGUgY2FuIGhhbmRsZSB0aGUgcmVxdWVzdC4gSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmdcbiAgICAgKiAgICAgcm91dGUgYW5kIHRoZXJlJ3Mgbm8gYGRlZmF1bHRIYW5kbGVyYCwgYHVuZGVmaW5lZGAgaXMgcmV0dXJuZWQuXG4gICAgICovXG4gICAgaGFuZGxlUmVxdWVzdCh7IHJlcXVlc3QsIGV2ZW50IH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnaGFuZGxlUmVxdWVzdCcsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnb3B0aW9ucy5yZXF1ZXN0JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxdWVzdC51cmwsIGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAoIXVybC5wcm90b2NvbC5zdGFydHNXaXRoKCdodHRwJykpIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKGBXb3JrYm94IFJvdXRlciBvbmx5IHN1cHBvcnRzIFVSTHMgdGhhdCBzdGFydCB3aXRoICdodHRwJy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzYW1lT3JpZ2luID0gdXJsLm9yaWdpbiA9PT0gbG9jYXRpb24ub3JpZ2luO1xuICAgICAgICBjb25zdCB7IHBhcmFtcywgcm91dGUgfSA9IHRoaXMuZmluZE1hdGNoaW5nUm91dGUoe1xuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgc2FtZU9yaWdpbixcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBoYW5kbGVyID0gcm91dGUgJiYgcm91dGUuaGFuZGxlcjtcbiAgICAgICAgY29uc3QgZGVidWdNZXNzYWdlcyA9IFtdO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBkZWJ1Z01lc3NhZ2VzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICBgRm91bmQgYSByb3V0ZSB0byBoYW5kbGUgdGhpcyByZXF1ZXN0OmAsIHJvdXRlLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdNZXNzYWdlcy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGBQYXNzaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1zIHRvIHRoZSByb3V0ZSdzIGhhbmRsZXI6YCwgcGFyYW1zLFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgZG9uJ3QgaGF2ZSBhIGhhbmRsZXIgYmVjYXVzZSB0aGVyZSB3YXMgbm8gbWF0Y2hpbmcgcm91dGUsIHRoZW5cbiAgICAgICAgLy8gZmFsbCBiYWNrIHRvIGRlZmF1bHRIYW5kbGVyIGlmIHRoYXQncyBkZWZpbmVkLlxuICAgICAgICBjb25zdCBtZXRob2QgPSByZXF1ZXN0Lm1ldGhvZDtcbiAgICAgICAgaWYgKCFoYW5kbGVyICYmIHRoaXMuX2RlZmF1bHRIYW5kbGVyTWFwLmhhcyhtZXRob2QpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGRlYnVnTWVzc2FnZXMucHVzaChgRmFpbGVkIHRvIGZpbmQgYSBtYXRjaGluZyByb3V0ZS4gRmFsbGluZyBgICtcbiAgICAgICAgICAgICAgICAgICAgYGJhY2sgdG8gdGhlIGRlZmF1bHQgaGFuZGxlciBmb3IgJHttZXRob2R9LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlciA9IHRoaXMuX2RlZmF1bHRIYW5kbGVyTWFwLmdldChtZXRob2QpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaGFuZGxlcikge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAvLyBObyBoYW5kbGVyIHNvIFdvcmtib3ggd2lsbCBkbyBub3RoaW5nLiBJZiBsb2dzIGlzIHNldCBvZiBkZWJ1Z1xuICAgICAgICAgICAgICAgIC8vIGkuZS4gdmVyYm9zZSwgd2Ugc2hvdWxkIHByaW50IG91dCB0aGlzIGluZm9ybWF0aW9uLlxuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgTm8gcm91dGUgZm91bmQgZm9yOiAke2dldEZyaWVuZGx5VVJMKHVybCl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIC8vIFdlIGhhdmUgYSBoYW5kbGVyLCBtZWFuaW5nIFdvcmtib3ggaXMgZ29pbmcgdG8gaGFuZGxlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgIC8vIHByaW50IHRoZSByb3V0aW5nIGRldGFpbHMgdG8gdGhlIGNvbnNvbGUuXG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQoYFJvdXRlciBpcyByZXNwb25kaW5nIHRvOiAke2dldEZyaWVuZGx5VVJMKHVybCl9YCk7XG4gICAgICAgICAgICBkZWJ1Z01lc3NhZ2VzLmZvckVhY2goKG1zZykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1zZykpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyguLi5tc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhtc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gV3JhcCBpbiB0cnkgYW5kIGNhdGNoIGluIGNhc2UgdGhlIGhhbmRsZSBtZXRob2QgdGhyb3dzIGEgc3luY2hyb25vdXNcbiAgICAgICAgLy8gZXJyb3IuIEl0IHNob3VsZCBzdGlsbCBjYWxsYmFjayB0byB0aGUgY2F0Y2ggaGFuZGxlci5cbiAgICAgICAgbGV0IHJlc3BvbnNlUHJvbWlzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3BvbnNlUHJvbWlzZSA9IGhhbmRsZXIuaGFuZGxlKHsgdXJsLCByZXF1ZXN0LCBldmVudCwgcGFyYW1zIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlUHJvbWlzZSA9IFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHJvdXRlJ3MgY2F0Y2ggaGFuZGxlciwgaWYgaXQgZXhpc3RzXG4gICAgICAgIGNvbnN0IGNhdGNoSGFuZGxlciA9IHJvdXRlICYmIHJvdXRlLmNhdGNoSGFuZGxlcjtcbiAgICAgICAgaWYgKHJlc3BvbnNlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgJiYgKHRoaXMuX2NhdGNoSGFuZGxlciB8fCBjYXRjaEhhbmRsZXIpKSB7XG4gICAgICAgICAgICByZXNwb25zZVByb21pc2UgPSByZXNwb25zZVByb21pc2UuY2F0Y2goYXN5bmMgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgYSByb3V0ZSBjYXRjaCBoYW5kbGVyLCBwcm9jZXNzIHRoYXQgZmlyc3RcbiAgICAgICAgICAgICAgICBpZiAoY2F0Y2hIYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdGlsbCBpbmNsdWRlIFVSTCBoZXJlIGFzIGl0IHdpbGwgYmUgYXN5bmMgZnJvbSB0aGUgY29uc29sZSBncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIG1heSBub3QgbWFrZSBzZW5zZSB3aXRob3V0IHRoZSBVUkxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgRXJyb3IgdGhyb3duIHdoZW4gcmVzcG9uZGluZyB0bzogYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCAke2dldEZyaWVuZGx5VVJMKHVybCl9LiBGYWxsaW5nIGJhY2sgdG8gcm91dGUncyBDYXRjaCBIYW5kbGVyLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGBFcnJvciB0aHJvd24gYnk6YCwgcm91dGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNhdGNoSGFuZGxlci5oYW5kbGUoeyB1cmwsIHJlcXVlc3QsIGV2ZW50LCBwYXJhbXMgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGNhdGNoRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2F0Y2hFcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyciA9IGNhdGNoRXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYXRjaEhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0aWxsIGluY2x1ZGUgVVJMIGhlcmUgYXMgaXQgd2lsbCBiZSBhc3luYyBmcm9tIHRoZSBjb25zb2xlIGdyb3VwXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgbWF5IG5vdCBtYWtlIHNlbnNlIHdpdGhvdXQgdGhlIFVSTFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKGBFcnJvciB0aHJvd24gd2hlbiByZXNwb25kaW5nIHRvOiBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgICR7Z2V0RnJpZW5kbHlVUkwodXJsKX0uIEZhbGxpbmcgYmFjayB0byBnbG9iYWwgQ2F0Y2ggSGFuZGxlci5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihgRXJyb3IgdGhyb3duIGJ5OmAsIHJvdXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NhdGNoSGFuZGxlci5oYW5kbGUoeyB1cmwsIHJlcXVlc3QsIGV2ZW50IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2VQcm9taXNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDaGVja3MgYSByZXF1ZXN0IGFuZCBVUkwgKGFuZCBvcHRpb25hbGx5IGFuIGV2ZW50KSBhZ2FpbnN0IHRoZSBsaXN0IG9mXG4gICAgICogcmVnaXN0ZXJlZCByb3V0ZXMsIGFuZCBpZiB0aGVyZSdzIGEgbWF0Y2gsIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmdcbiAgICAgKiByb3V0ZSBhbG9uZyB3aXRoIGFueSBwYXJhbXMgZ2VuZXJhdGVkIGJ5IHRoZSBtYXRjaC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtVUkx9IG9wdGlvbnMudXJsXG4gICAgICogQHBhcmFtIHtib29sZWFufSBvcHRpb25zLnNhbWVPcmlnaW4gVGhlIHJlc3VsdCBvZiBjb21wYXJpbmcgYHVybC5vcmlnaW5gXG4gICAgICogICAgIGFnYWluc3QgdGhlIGN1cnJlbnQgb3JpZ2luLlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0IFRoZSByZXF1ZXN0IHRvIG1hdGNoLlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGNvcnJlc3BvbmRpbmcgZXZlbnQuXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2l0aCBgcm91dGVgIGFuZCBgcGFyYW1zYCBwcm9wZXJ0aWVzLlxuICAgICAqICAgICBUaGV5IGFyZSBwb3B1bGF0ZWQgaWYgYSBtYXRjaGluZyByb3V0ZSB3YXMgZm91bmQgb3IgYHVuZGVmaW5lZGBcbiAgICAgKiAgICAgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGZpbmRNYXRjaGluZ1JvdXRlKHsgdXJsLCBzYW1lT3JpZ2luLCByZXF1ZXN0LCBldmVudCB9KSB7XG4gICAgICAgIGNvbnN0IHJvdXRlcyA9IHRoaXMuX3JvdXRlcy5nZXQocmVxdWVzdC5tZXRob2QpIHx8IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IHJvdXRlIG9mIHJvdXRlcykge1xuICAgICAgICAgICAgbGV0IHBhcmFtcztcbiAgICAgICAgICAgIC8vIHJvdXRlLm1hdGNoIHJldHVybnMgdHlwZSBhbnksIG5vdCBwb3NzaWJsZSB0byBjaGFuZ2UgcmlnaHQgbm93LlxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnNhZmUtYXNzaWdubWVudFxuICAgICAgICAgICAgY29uc3QgbWF0Y2hSZXN1bHQgPSByb3V0ZS5tYXRjaCh7IHVybCwgc2FtZU9yaWdpbiwgcmVxdWVzdCwgZXZlbnQgfSk7XG4gICAgICAgICAgICBpZiAobWF0Y2hSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBXYXJuIGRldmVsb3BlcnMgdGhhdCB1c2luZyBhbiBhc3luYyBtYXRjaENhbGxiYWNrIGlzIGFsbW9zdCBhbHdheXNcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90IHRoZSByaWdodCB0aGluZyB0byBkby5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoUmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oYFdoaWxlIHJvdXRpbmcgJHtnZXRGcmllbmRseVVSTCh1cmwpfSwgYW4gYXN5bmMgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYG1hdGNoQ2FsbGJhY2sgZnVuY3Rpb24gd2FzIHVzZWQuIFBsZWFzZSBjb252ZXJ0IHRoZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgZm9sbG93aW5nIHJvdXRlIHRvIHVzZSBhIHN5bmNocm9ub3VzIG1hdGNoQ2FsbGJhY2sgZnVuY3Rpb246YCwgcm91dGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzIwNzlcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1hc3NpZ25tZW50XG4gICAgICAgICAgICAgICAgcGFyYW1zID0gbWF0Y2hSZXN1bHQ7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyYW1zKSAmJiBwYXJhbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEluc3RlYWQgb2YgcGFzc2luZyBhbiBlbXB0eSBhcnJheSBpbiBhcyBwYXJhbXMsIHVzZSB1bmRlZmluZWQuXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoKG1hdGNoUmVzdWx0LmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiYgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhtYXRjaFJlc3VsdCkubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJbnN0ZWFkIG9mIHBhc3NpbmcgYW4gZW1wdHkgb2JqZWN0IGluIGFzIHBhcmFtcywgdXNlIHVuZGVmaW5lZC5cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgbWF0Y2hSZXN1bHQgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgdGhlIGJvb2xlYW4gdmFsdWUgdHJ1ZSAocmF0aGVyIHRoYW4ganVzdCBzb21ldGhpbmcgdHJ1dGgteSksXG4gICAgICAgICAgICAgICAgICAgIC8vIGRvbid0IHNldCBwYXJhbXMuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvcHVsbC8yMTM0I2lzc3VlY29tbWVudC01MTM5MjQzNTNcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBSZXR1cm4gZWFybHkgaWYgaGF2ZSBhIG1hdGNoLlxuICAgICAgICAgICAgICAgIHJldHVybiB7IHJvdXRlLCBwYXJhbXMgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBubyBtYXRjaCB3YXMgZm91bmQgYWJvdmUsIHJldHVybiBhbmQgZW1wdHkgb2JqZWN0LlxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIC8qKlxuICAgICAqIERlZmluZSBhIGRlZmF1bHQgYGhhbmRsZXJgIHRoYXQncyBjYWxsZWQgd2hlbiBubyByb3V0ZXMgZXhwbGljaXRseVxuICAgICAqIG1hdGNoIHRoZSBpbmNvbWluZyByZXF1ZXN0LlxuICAgICAqXG4gICAgICogRWFjaCBIVFRQIG1ldGhvZCAoJ0dFVCcsICdQT1NUJywgZXRjLikgZ2V0cyBpdHMgb3duIGRlZmF1bHQgaGFuZGxlci5cbiAgICAgKlxuICAgICAqIFdpdGhvdXQgYSBkZWZhdWx0IGhhbmRsZXIsIHVubWF0Y2hlZCByZXF1ZXN0cyB3aWxsIGdvIGFnYWluc3QgdGhlXG4gICAgICogbmV0d29yayBhcyBpZiB0aGVyZSB3ZXJlIG5vIHNlcnZpY2Ugd29ya2VyIHByZXNlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBoYW5kbGVyIEEgY2FsbGJhY2tcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kPSdHRVQnXSBUaGUgSFRUUCBtZXRob2QgdG8gYXNzb2NpYXRlIHdpdGggdGhpc1xuICAgICAqIGRlZmF1bHQgaGFuZGxlci4gRWFjaCBtZXRob2QgaGFzIGl0cyBvd24gZGVmYXVsdC5cbiAgICAgKi9cbiAgICBzZXREZWZhdWx0SGFuZGxlcihoYW5kbGVyLCBtZXRob2QgPSBkZWZhdWx0TWV0aG9kKSB7XG4gICAgICAgIHRoaXMuX2RlZmF1bHRIYW5kbGVyTWFwLnNldChtZXRob2QsIG5vcm1hbGl6ZUhhbmRsZXIoaGFuZGxlcikpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJZiBhIFJvdXRlIHRocm93cyBhbiBlcnJvciB3aGlsZSBoYW5kbGluZyBhIHJlcXVlc3QsIHRoaXMgYGhhbmRsZXJgXG4gICAgICogd2lsbCBiZSBjYWxsZWQgYW5kIGdpdmVuIGEgY2hhbmNlIHRvIHByb3ZpZGUgYSByZXNwb25zZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bW9kdWxlOndvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIFByb21pc2UgcmVzdWx0aW5nIGluIGEgUmVzcG9uc2UuXG4gICAgICovXG4gICAgc2V0Q2F0Y2hIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fY2F0Y2hIYW5kbGVyID0gbm9ybWFsaXplSGFuZGxlcihoYW5kbGVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgcm91dGUgd2l0aCB0aGUgcm91dGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1yb3V0aW5nLlJvdXRlfSByb3V0ZSBUaGUgcm91dGUgdG8gcmVnaXN0ZXIuXG4gICAgICovXG4gICAgcmVnaXN0ZXJSb3V0ZShyb3V0ZSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShyb3V0ZSwgJ29iamVjdCcsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncm91dGUnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhc3NlcnQuaGFzTWV0aG9kKHJvdXRlLCAnbWF0Y2gnLCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnUm91dGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ3JvdXRlJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZShyb3V0ZS5oYW5kbGVyLCAnb2JqZWN0Jywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZScsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzc2VydC5oYXNNZXRob2Qocm91dGUuaGFuZGxlciwgJ2hhbmRsZScsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1yb3V0aW5nJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdSb3V0ZXInLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncm91dGUuaGFuZGxlcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFzc2VydC5pc1R5cGUocm91dGUubWV0aG9kLCAnc3RyaW5nJywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlcicsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdyZWdpc3RlclJvdXRlJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyb3V0ZS5tZXRob2QnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLl9yb3V0ZXMuaGFzKHJvdXRlLm1ldGhvZCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlcy5zZXQocm91dGUubWV0aG9kLCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2l2ZSBwcmVjZWRlbmNlIHRvIGFsbCBvZiB0aGUgZWFybGllciByb3V0ZXMgYnkgYWRkaW5nIHRoaXMgYWRkaXRpb25hbFxuICAgICAgICAvLyByb3V0ZSB0byB0aGUgZW5kIG9mIHRoZSBhcnJheS5cbiAgICAgICAgdGhpcy5fcm91dGVzLmdldChyb3V0ZS5tZXRob2QpLnB1c2gocm91dGUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVycyBhIHJvdXRlIHdpdGggdGhlIHJvdXRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZX0gcm91dGUgVGhlIHJvdXRlIHRvIHVucmVnaXN0ZXIuXG4gICAgICovXG4gICAgdW5yZWdpc3RlclJvdXRlKHJvdXRlKSB7XG4gICAgICAgIGlmICghdGhpcy5fcm91dGVzLmhhcyhyb3V0ZS5tZXRob2QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCd1bnJlZ2lzdGVyLXJvdXRlLWJ1dC1ub3QtZm91bmQtd2l0aC1tZXRob2QnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiByb3V0ZS5tZXRob2QsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZUluZGV4ID0gdGhpcy5fcm91dGVzLmdldChyb3V0ZS5tZXRob2QpLmluZGV4T2Yocm91dGUpO1xuICAgICAgICBpZiAocm91dGVJbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9yb3V0ZXMuZ2V0KHJvdXRlLm1ldGhvZCkuc3BsaWNlKHJvdXRlSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcigndW5yZWdpc3Rlci1yb3V0ZS1yb3V0ZS1ub3QtcmVnaXN0ZXJlZCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IHsgUm91dGVyIH07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8vIEB0cy1pZ25vcmVcbnRyeSB7XG4gICAgc2VsZlsnd29ya2JveDpyb3V0aW5nOjYuMi40J10gJiYgXygpO1xufVxuY2F0Y2ggKGUpIHsgfVxuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgTmF2aWdhdGlvblJvdXRlIH0gZnJvbSAnLi9OYXZpZ2F0aW9uUm91dGUuanMnO1xuaW1wb3J0IHsgUmVnRXhwUm91dGUgfSBmcm9tICcuL1JlZ0V4cFJvdXRlLmpzJztcbmltcG9ydCB7IHJlZ2lzdGVyUm91dGUgfSBmcm9tICcuL3JlZ2lzdGVyUm91dGUuanMnO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tICcuL1JvdXRlLmpzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4vUm91dGVyLmpzJztcbmltcG9ydCB7IHNldENhdGNoSGFuZGxlciB9IGZyb20gJy4vc2V0Q2F0Y2hIYW5kbGVyLmpzJztcbmltcG9ydCB7IHNldERlZmF1bHRIYW5kbGVyIH0gZnJvbSAnLi9zZXREZWZhdWx0SGFuZGxlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBAbW9kdWxlIHdvcmtib3gtcm91dGluZ1xuICovXG5leHBvcnQgeyBOYXZpZ2F0aW9uUm91dGUsIFJlZ0V4cFJvdXRlLCByZWdpc3RlclJvdXRlLCBSb3V0ZSwgUm91dGVyLCBzZXRDYXRjaEhhbmRsZXIsIHNldERlZmF1bHRIYW5kbGVyLCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IFJvdXRlIH0gZnJvbSAnLi9Sb3V0ZS5qcyc7XG5pbXBvcnQgeyBSZWdFeHBSb3V0ZSB9IGZyb20gJy4vUmVnRXhwUm91dGUuanMnO1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyIH0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogRWFzaWx5IHJlZ2lzdGVyIGEgUmVnRXhwLCBzdHJpbmcsIG9yIGZ1bmN0aW9uIHdpdGggYSBjYWNoaW5nXG4gKiBzdHJhdGVneSB0byBhIHNpbmdsZXRvbiBSb3V0ZXIgaW5zdGFuY2UuXG4gKlxuICogVGhpcyBtZXRob2Qgd2lsbCBnZW5lcmF0ZSBhIFJvdXRlIGZvciB5b3UgaWYgbmVlZGVkIGFuZFxuICogY2FsbCBbcmVnaXN0ZXJSb3V0ZSgpXXtAbGluayBtb2R1bGU6d29ya2JveC1yb3V0aW5nLlJvdXRlciNyZWdpc3RlclJvdXRlfS5cbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cHxzdHJpbmd8bW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZX5tYXRjaENhbGxiYWNrfG1vZHVsZTp3b3JrYm94LXJvdXRpbmcuUm91dGV9IGNhcHR1cmVcbiAqIElmIHRoZSBjYXB0dXJlIHBhcmFtIGlzIGEgYFJvdXRlYCwgYWxsIG90aGVyIGFyZ3VtZW50cyB3aWxsIGJlIGlnbm9yZWQuXG4gKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXJvdXRpbmd+aGFuZGxlckNhbGxiYWNrfSBbaGFuZGxlcl0gQSBjYWxsYmFja1xuICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS4gVGhpcyBwYXJhbWV0ZXJcbiAqIGlzIHJlcXVpcmVkIGlmIGBjYXB0dXJlYCBpcyBub3QgYSBgUm91dGVgIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbWV0aG9kPSdHRVQnXSBUaGUgSFRUUCBtZXRob2QgdG8gbWF0Y2ggdGhlIFJvdXRlXG4gKiBhZ2FpbnN0LlxuICogQHJldHVybiB7bW9kdWxlOndvcmtib3gtcm91dGluZy5Sb3V0ZX0gVGhlIGdlbmVyYXRlZCBgUm91dGVgKFVzZWZ1bCBmb3JcbiAqIHVucmVnaXN0ZXJpbmcpLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1yb3V0aW5nXG4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyUm91dGUoY2FwdHVyZSwgaGFuZGxlciwgbWV0aG9kKSB7XG4gICAgbGV0IHJvdXRlO1xuICAgIGlmICh0eXBlb2YgY2FwdHVyZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3QgY2FwdHVyZVVybCA9IG5ldyBVUkwoY2FwdHVyZSwgbG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoIShjYXB0dXJlLnN0YXJ0c1dpdGgoJy8nKSB8fCBjYXB0dXJlLnN0YXJ0c1dpdGgoJ2h0dHAnKSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdpbnZhbGlkLXN0cmluZycsIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAncmVnaXN0ZXJSb3V0ZScsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2NhcHR1cmUnLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gV2Ugd2FudCB0byBjaGVjayBpZiBFeHByZXNzLXN0eWxlIHdpbGRjYXJkcyBhcmUgaW4gdGhlIHBhdGhuYW1lIG9ubHkuXG4gICAgICAgICAgICAvLyBUT0RPOiBSZW1vdmUgdGhpcyBsb2cgbWVzc2FnZSBpbiB2NC5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlVG9DaGVjayA9IGNhcHR1cmUuc3RhcnRzV2l0aCgnaHR0cCcpID9cbiAgICAgICAgICAgICAgICBjYXB0dXJlVXJsLnBhdGhuYW1lIDogY2FwdHVyZTtcbiAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcGlsbGFyanMvcGF0aC10by1yZWdleHAjcGFyYW1ldGVyc1xuICAgICAgICAgICAgY29uc3Qgd2lsZGNhcmRzID0gJ1sqOj8rXSc7XG4gICAgICAgICAgICBpZiAoKG5ldyBSZWdFeHAoYCR7d2lsZGNhcmRzfWApKS5leGVjKHZhbHVlVG9DaGVjaykpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYFRoZSAnJGNhcHR1cmUnIHBhcmFtZXRlciBjb250YWlucyBhbiBFeHByZXNzLXN0eWxlIHdpbGRjYXJkIGAgK1xuICAgICAgICAgICAgICAgICAgICBgY2hhcmFjdGVyICgke3dpbGRjYXJkc30pLiBTdHJpbmdzIGFyZSBub3cgYWx3YXlzIGludGVycHJldGVkIGFzIGAgK1xuICAgICAgICAgICAgICAgICAgICBgZXhhY3QgbWF0Y2hlczsgdXNlIGEgUmVnRXhwIGZvciBwYXJ0aWFsIG9yIHdpbGRjYXJkIG1hdGNoZXMuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWF0Y2hDYWxsYmFjayA9ICh7IHVybCB9KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICgodXJsLnBhdGhuYW1lID09PSBjYXB0dXJlVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICAodXJsLm9yaWdpbiAhPT0gY2FwdHVyZVVybC5vcmlnaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgJHtjYXB0dXJlfSBvbmx5IHBhcnRpYWxseSBtYXRjaGVzIHRoZSBjcm9zcy1vcmlnaW4gVVJMIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCR7dXJsLnRvU3RyaW5nKCl9LiBUaGlzIHJvdXRlIHdpbGwgb25seSBoYW5kbGUgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYGlmIHRoZXkgbWF0Y2ggdGhlIGVudGlyZSBVUkwuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVybC5ocmVmID09PSBjYXB0dXJlVXJsLmhyZWY7XG4gICAgICAgIH07XG4gICAgICAgIC8vIElmIGBjYXB0dXJlYCBpcyBhIHN0cmluZyB0aGVuIGBoYW5kbGVyYCBhbmQgYG1ldGhvZGAgbXVzdCBiZSBwcmVzZW50LlxuICAgICAgICByb3V0ZSA9IG5ldyBSb3V0ZShtYXRjaENhbGxiYWNrLCBoYW5kbGVyLCBtZXRob2QpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjYXB0dXJlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIC8vIElmIGBjYXB0dXJlYCBpcyBhIGBSZWdFeHBgIHRoZW4gYGhhbmRsZXJgIGFuZCBgbWV0aG9kYCBtdXN0IGJlIHByZXNlbnQuXG4gICAgICAgIHJvdXRlID0gbmV3IFJlZ0V4cFJvdXRlKGNhcHR1cmUsIGhhbmRsZXIsIG1ldGhvZCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBjYXB0dXJlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIElmIGBjYXB0dXJlYCBpcyBhIGZ1bmN0aW9uIHRoZW4gYGhhbmRsZXJgIGFuZCBgbWV0aG9kYCBtdXN0IGJlIHByZXNlbnQuXG4gICAgICAgIHJvdXRlID0gbmV3IFJvdXRlKGNhcHR1cmUsIGhhbmRsZXIsIG1ldGhvZCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNhcHR1cmUgaW5zdGFuY2VvZiBSb3V0ZSkge1xuICAgICAgICByb3V0ZSA9IGNhcHR1cmU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCd1bnN1cHBvcnRlZC1yb3V0ZS10eXBlJywge1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtcm91dGluZycsXG4gICAgICAgICAgICBmdW5jTmFtZTogJ3JlZ2lzdGVyUm91dGUnLFxuICAgICAgICAgICAgcGFyYW1OYW1lOiAnY2FwdHVyZScsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBkZWZhdWx0Um91dGVyID0gZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyKCk7XG4gICAgZGVmYXVsdFJvdXRlci5yZWdpc3RlclJvdXRlKHJvdXRlKTtcbiAgICByZXR1cm4gcm91dGU7XG59XG5leHBvcnQgeyByZWdpc3RlclJvdXRlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIgfSBmcm9tICcuL3V0aWxzL2dldE9yQ3JlYXRlRGVmYXVsdFJvdXRlci5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBJZiBhIFJvdXRlIHRocm93cyBhbiBlcnJvciB3aGlsZSBoYW5kbGluZyBhIHJlcXVlc3QsIHRoaXMgYGhhbmRsZXJgXG4gKiB3aWxsIGJlIGNhbGxlZCBhbmQgZ2l2ZW4gYSBjaGFuY2UgdG8gcHJvdmlkZSBhIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOndvcmtib3gtcm91dGluZ35oYW5kbGVyQ2FsbGJhY2t9IGhhbmRsZXIgQSBjYWxsYmFja1xuICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgUHJvbWlzZSByZXN1bHRpbmcgaW4gYSBSZXNwb25zZS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtcm91dGluZ1xuICovXG5mdW5jdGlvbiBzZXRDYXRjaEhhbmRsZXIoaGFuZGxlcikge1xuICAgIGNvbnN0IGRlZmF1bHRSb3V0ZXIgPSBnZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIoKTtcbiAgICBkZWZhdWx0Um91dGVyLnNldENhdGNoSGFuZGxlcihoYW5kbGVyKTtcbn1cbmV4cG9ydCB7IHNldENhdGNoSGFuZGxlciB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyIH0gZnJvbSAnLi91dGlscy9nZXRPckNyZWF0ZURlZmF1bHRSb3V0ZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogRGVmaW5lIGEgZGVmYXVsdCBgaGFuZGxlcmAgdGhhdCdzIGNhbGxlZCB3aGVuIG5vIHJvdXRlcyBleHBsaWNpdGx5XG4gKiBtYXRjaCB0aGUgaW5jb21pbmcgcmVxdWVzdC5cbiAqXG4gKiBXaXRob3V0IGEgZGVmYXVsdCBoYW5kbGVyLCB1bm1hdGNoZWQgcmVxdWVzdHMgd2lsbCBnbyBhZ2FpbnN0IHRoZVxuICogbmV0d29yayBhcyBpZiB0aGVyZSB3ZXJlIG5vIHNlcnZpY2Ugd29ya2VyIHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1yb3V0aW5nfmhhbmRsZXJDYWxsYmFja30gaGFuZGxlciBBIGNhbGxiYWNrXG4gKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBQcm9taXNlIHJlc3VsdGluZyBpbiBhIFJlc3BvbnNlLlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1yb3V0aW5nXG4gKi9cbmZ1bmN0aW9uIHNldERlZmF1bHRIYW5kbGVyKGhhbmRsZXIpIHtcbiAgICBjb25zdCBkZWZhdWx0Um91dGVyID0gZ2V0T3JDcmVhdGVEZWZhdWx0Um91dGVyKCk7XG4gICAgZGVmYXVsdFJvdXRlci5zZXREZWZhdWx0SGFuZGxlcihoYW5kbGVyKTtcbn1cbmV4cG9ydCB7IHNldERlZmF1bHRIYW5kbGVyIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogVGhlIGRlZmF1bHQgSFRUUCBtZXRob2QsICdHRVQnLCB1c2VkIHdoZW4gdGhlcmUncyBubyBzcGVjaWZpYyBtZXRob2RcbiAqIGNvbmZpZ3VyZWQgZm9yIGEgcm91dGUuXG4gKlxuICogQHR5cGUge3N0cmluZ31cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgZGVmYXVsdE1ldGhvZCA9ICdHRVQnO1xuLyoqXG4gKiBUaGUgbGlzdCBvZiB2YWxpZCBIVFRQIG1ldGhvZHMgYXNzb2NpYXRlZCB3aXRoIHJlcXVlc3RzIHRoYXQgY291bGQgYmUgcm91dGVkLlxuICpcbiAqIEB0eXBlIHtBcnJheTxzdHJpbmc+fVxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCB2YWxpZE1ldGhvZHMgPSBbXG4gICAgJ0RFTEVURScsXG4gICAgJ0dFVCcsXG4gICAgJ0hFQUQnLFxuICAgICdQQVRDSCcsXG4gICAgJ1BPU1QnLFxuICAgICdQVVQnLFxuXTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL1JvdXRlci5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbmxldCBkZWZhdWx0Um91dGVyO1xuLyoqXG4gKiBDcmVhdGVzIGEgbmV3LCBzaW5nbGV0b24gUm91dGVyIGluc3RhbmNlIGlmIG9uZSBkb2VzIG5vdCBleGlzdC4gSWYgb25lXG4gKiBkb2VzIGFscmVhZHkgZXhpc3QsIHRoYXQgaW5zdGFuY2UgaXMgcmV0dXJuZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEByZXR1cm4ge1JvdXRlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldE9yQ3JlYXRlRGVmYXVsdFJvdXRlciA9ICgpID0+IHtcbiAgICBpZiAoIWRlZmF1bHRSb3V0ZXIpIHtcbiAgICAgICAgZGVmYXVsdFJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcbiAgICAgICAgLy8gVGhlIGhlbHBlcnMgdGhhdCB1c2UgdGhlIGRlZmF1bHQgUm91dGVyIGFzc3VtZSB0aGVzZSBsaXN0ZW5lcnMgZXhpc3QuXG4gICAgICAgIGRlZmF1bHRSb3V0ZXIuYWRkRmV0Y2hMaXN0ZW5lcigpO1xuICAgICAgICBkZWZhdWx0Um91dGVyLmFkZENhY2hlTGlzdGVuZXIoKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRSb3V0ZXI7XG59O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0IHsgYXNzZXJ0IH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2Fzc2VydC5qcyc7XG5pbXBvcnQgJy4uL192ZXJzaW9uLmpzJztcbi8qKlxuICogQHBhcmFtIHtmdW5jdGlvbigpfE9iamVjdH0gaGFuZGxlciBFaXRoZXIgYSBmdW5jdGlvbiwgb3IgYW4gb2JqZWN0IHdpdGggYVxuICogJ2hhbmRsZScgbWV0aG9kLlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2l0aCBhIGhhbmRsZSBtZXRob2QuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZUhhbmRsZXIgPSAoaGFuZGxlcikgPT4ge1xuICAgIGlmIChoYW5kbGVyICYmIHR5cGVvZiBoYW5kbGVyID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0Lmhhc01ldGhvZChoYW5kbGVyLCAnaGFuZGxlJywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdoYW5kbGVyJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYW5kbGVyO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc1R5cGUoaGFuZGxlciwgJ2Z1bmN0aW9uJywge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXJvdXRpbmcnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ1JvdXRlJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdoYW5kbGVyJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGhhbmRsZTogaGFuZGxlciB9O1xuICAgIH1cbn07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBTdHJhdGVneSB9IGZyb20gJy4vU3RyYXRlZ3kuanMnO1xuaW1wb3J0IHsgbWVzc2FnZXMgfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGEgW2NhY2hlLWZpcnN0XXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL2luc3RhbnQtYW5kLW9mZmxpbmUvb2ZmbGluZS1jb29rYm9vay8jY2FjaGUtZmFsbGluZy1iYWNrLXRvLW5ldHdvcmt9XG4gKiByZXF1ZXN0IHN0cmF0ZWd5LlxuICpcbiAqIEEgY2FjaGUgZmlyc3Qgc3RyYXRlZ3kgaXMgdXNlZnVsIGZvciBhc3NldHMgdGhhdCBoYXZlIGJlZW4gcmV2aXNpb25lZCxcbiAqIHN1Y2ggYXMgVVJMcyBsaWtlIGAvc3R5bGVzL2V4YW1wbGUuYThmNWYxLmNzc2AsIHNpbmNlIHRoZXlcbiAqIGNhbiBiZSBjYWNoZWQgZm9yIGxvbmcgcGVyaW9kcyBvZiB0aW1lLlxuICpcbiAqIElmIHRoZSBuZXR3b3JrIHJlcXVlc3QgZmFpbHMsIGFuZCB0aGVyZSBpcyBubyBjYWNoZSBtYXRjaCwgdGhpcyB3aWxsIHRocm93XG4gKiBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5XG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBDYWNoZUZpcnN0IGV4dGVuZHMgU3RyYXRlZ3kge1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gcmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgICAqIEBwYXJhbSB7bW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9IGhhbmRsZXIgVGhlIGV2ZW50IHRoYXRcbiAgICAgKiAgICAgdHJpZ2dlcmVkIHRoZSByZXF1ZXN0LlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgICAqL1xuICAgIGFzeW5jIF9oYW5kbGUocmVxdWVzdCwgaGFuZGxlcikge1xuICAgICAgICBjb25zdCBsb2dzID0gW107XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBhc3NlcnQuaXNJbnN0YW5jZShyZXF1ZXN0LCBSZXF1ZXN0LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUsXG4gICAgICAgICAgICAgICAgZnVuY05hbWU6ICdtYWtlUmVxdWVzdCcsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBoYW5kbGVyLmNhY2hlTWF0Y2gocmVxdWVzdCk7XG4gICAgICAgIGxldCBlcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dzLnB1c2goYE5vIHJlc3BvbnNlIGZvdW5kIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nIGNhY2hlLiBgICtcbiAgICAgICAgICAgICAgICAgICAgYFdpbGwgcmVzcG9uZCB3aXRoIGEgbmV0d29yayByZXF1ZXN0LmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuZmV0Y2hBbmRDYWNoZVB1dChyZXF1ZXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBHb3QgcmVzcG9uc2UgZnJvbSBuZXR3b3JrLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBVbmFibGUgdG8gZ2V0IGEgcmVzcG9uc2UgZnJvbSB0aGUgbmV0d29yay5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ3MucHVzaChgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfScgY2FjaGUuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChtZXNzYWdlcy5zdHJhdGVneVN0YXJ0KHRoaXMuY29uc3RydWN0b3IubmFtZSwgcmVxdWVzdCkpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBsb2cgb2YgbG9ncykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2cobG9nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lc3NhZ2VzLnByaW50RmluYWxSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCduby1yZXNwb25zZScsIHsgdXJsOiByZXF1ZXN0LnVybCwgZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbn1cbmV4cG9ydCB7IENhY2hlRmlyc3QgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IFN0cmF0ZWd5IH0gZnJvbSAnLi9TdHJhdGVneS5qcyc7XG5pbXBvcnQgeyBtZXNzYWdlcyB9IGZyb20gJy4vdXRpbHMvbWVzc2FnZXMuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogQW4gaW1wbGVtZW50YXRpb24gb2YgYVxuICogW2NhY2hlLW9ubHlde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvaW5zdGFudC1hbmQtb2ZmbGluZS9vZmZsaW5lLWNvb2tib29rLyNjYWNoZS1vbmx5fVxuICogcmVxdWVzdCBzdHJhdGVneS5cbiAqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWZ1bCBpZiB5b3Ugd2FudCB0byB0YWtlIGFkdmFudGFnZSBvZiBhbnlcbiAqIFtXb3JrYm94IHBsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfS5cbiAqXG4gKiBJZiB0aGVyZSBpcyBubyBjYWNoZSBtYXRjaCwgdGhpcyB3aWxsIHRocm93IGEgYFdvcmtib3hFcnJvcmAgZXhjZXB0aW9uLlxuICpcbiAqIEBleHRlbmRzIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIENhY2hlT25seSBleHRlbmRzIFN0cmF0ZWd5IHtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IHJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICAgKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyIFRoZSBldmVudCB0aGF0XG4gICAgICogICAgIHRyaWdnZXJlZCB0aGUgcmVxdWVzdC5cbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKi9cbiAgICBhc3luYyBfaGFuZGxlKHJlcXVlc3QsIGhhbmRsZXIpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ21ha2VSZXF1ZXN0JyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdyZXF1ZXN0JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5jYWNoZU1hdGNoKHJlcXVlc3QpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCByZXF1ZXN0KSk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBGb3VuZCBhIGNhY2hlZCByZXNwb25zZSBpbiB0aGUgJyR7dGhpcy5jYWNoZU5hbWV9JyBgICtcbiAgICAgICAgICAgICAgICAgICAgYGNhY2hlLmApO1xuICAgICAgICAgICAgICAgIG1lc3NhZ2VzLnByaW50RmluYWxSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBObyByZXNwb25zZSBmb3VuZCBpbiB0aGUgJyR7dGhpcy5jYWNoZU5hbWV9JyBjYWNoZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywgeyB1cmw6IHJlcXVlc3QudXJsIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG59XG5leHBvcnQgeyBDYWNoZU9ubHkgfTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGFzc2VydCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9hc3NlcnQuanMnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2xvZ2dlci5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCB7IGNhY2hlT2tBbmRPcGFxdWVQbHVnaW4gfSBmcm9tICcuL3BsdWdpbnMvY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbi5qcyc7XG5pbXBvcnQgeyBTdHJhdGVneSB9IGZyb20gJy4vU3RyYXRlZ3kuanMnO1xuaW1wb3J0IHsgbWVzc2FnZXMgfSBmcm9tICcuL3V0aWxzL21lc3NhZ2VzLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFuIGltcGxlbWVudGF0aW9uIG9mIGFcbiAqIFtuZXR3b3JrIGZpcnN0XXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL2luc3RhbnQtYW5kLW9mZmxpbmUvb2ZmbGluZS1jb29rYm9vay8jbmV0d29yay1mYWxsaW5nLWJhY2stdG8tY2FjaGV9XG4gKiByZXF1ZXN0IHN0cmF0ZWd5LlxuICpcbiAqIEJ5IGRlZmF1bHQsIHRoaXMgc3RyYXRlZ3kgd2lsbCBjYWNoZSByZXNwb25zZXMgd2l0aCBhIDIwMCBzdGF0dXMgY29kZSBhc1xuICogd2VsbCBhcyBbb3BhcXVlIHJlc3BvbnNlc117QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3Rvb2xzL3dvcmtib3gvZ3VpZGVzL2hhbmRsZS10aGlyZC1wYXJ0eS1yZXF1ZXN0c30uXG4gKiBPcGFxdWUgcmVzcG9uc2VzIGFyZSBhcmUgY3Jvc3Mtb3JpZ2luIHJlcXVlc3RzIHdoZXJlIHRoZSByZXNwb25zZSBkb2Vzbid0XG4gKiBzdXBwb3J0IFtDT1JTXXtAbGluayBodHRwczovL2VuYWJsZS1jb3JzLm9yZy99LlxuICpcbiAqIElmIHRoZSBuZXR3b3JrIHJlcXVlc3QgZmFpbHMsIGFuZCB0aGVyZSBpcyBubyBjYWNoZSBtYXRjaCwgdGhpcyB3aWxsIHRocm93XG4gKiBhIGBXb3JrYm94RXJyb3JgIGV4Y2VwdGlvbi5cbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5XG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBOZXR3b3JrRmlyc3QgZXh0ZW5kcyBTdHJhdGVneSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYWNoZU5hbWVdIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAgICogW3dvcmtib3gtY29yZV17QGxpbmsgbW9kdWxlOndvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnNdIFtQbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc31cbiAgICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmZldGNoT3B0aW9uc10gVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICAgKiBbYGluaXRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzKVxuICAgICAqIG9mIFtub24tbmF2aWdhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2KVxuICAgICAqIGBmZXRjaCgpYCByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm1hdGNoT3B0aW9uc10gW2BDYWNoZVF1ZXJ5T3B0aW9uc2BdKGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNkaWN0ZGVmLWNhY2hlcXVlcnlvcHRpb25zKVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5uZXR3b3JrVGltZW91dFNlY29uZHNdIElmIHNldCwgYW55IG5ldHdvcmsgcmVxdWVzdHNcbiAgICAgKiB0aGF0IGZhaWwgdG8gcmVzcG9uZCB3aXRoaW4gdGhlIHRpbWVvdXQgd2lsbCBmYWxsYmFjayB0byB0aGUgY2FjaGUuXG4gICAgICpcbiAgICAgKiBUaGlzIG9wdGlvbiBjYW4gYmUgdXNlZCB0byBjb21iYXRcbiAgICAgKiBcIltsaWUtZmlde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvcGVyZm9ybWFuY2UvcG9vci1jb25uZWN0aXZpdHkvI2xpZS1maX1cIlxuICAgICAqIHNjZW5hcmlvcy5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIC8vIElmIHRoaXMgaW5zdGFuY2UgY29udGFpbnMgbm8gcGx1Z2lucyB3aXRoIGEgJ2NhY2hlV2lsbFVwZGF0ZScgY2FsbGJhY2ssXG4gICAgICAgIC8vIHByZXBlbmQgdGhlIGBjYWNoZU9rQW5kT3BhcXVlUGx1Z2luYCBwbHVnaW4gdG8gdGhlIHBsdWdpbnMgbGlzdC5cbiAgICAgICAgaWYgKCF0aGlzLnBsdWdpbnMuc29tZSgocCkgPT4gJ2NhY2hlV2lsbFVwZGF0ZScgaW4gcCkpIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2lucy51bnNoaWZ0KGNhY2hlT2tBbmRPcGFxdWVQbHVnaW4pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcyA9IG9wdGlvbnMubmV0d29ya1RpbWVvdXRTZWNvbmRzIHx8IDA7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzKSB7XG4gICAgICAgICAgICAgICAgYXNzZXJ0LmlzVHlwZSh0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMsICdudW1iZXInLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY05hbWU6ICdjb25zdHJ1Y3RvcicsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ25ldHdvcmtUaW1lb3V0U2Vjb25kcycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSByZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn0gaGFuZGxlciBUaGUgZXZlbnQgdGhhdFxuICAgICAqICAgICB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAgICovXG4gICAgYXN5bmMgX2hhbmRsZShyZXF1ZXN0LCBoYW5kbGVyKSB7XG4gICAgICAgIGNvbnN0IGxvZ3MgPSBbXTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2hhbmRsZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAnbWFrZVJlcXVlc3QnLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgbGV0IHRpbWVvdXRJZDtcbiAgICAgICAgaWYgKHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcykge1xuICAgICAgICAgICAgY29uc3QgeyBpZCwgcHJvbWlzZSB9ID0gdGhpcy5fZ2V0VGltZW91dFByb21pc2UoeyByZXF1ZXN0LCBsb2dzLCBoYW5kbGVyIH0pO1xuICAgICAgICAgICAgdGltZW91dElkID0gaWQ7XG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ldHdvcmtQcm9taXNlID0gdGhpcy5fZ2V0TmV0d29ya1Byb21pc2UoeyB0aW1lb3V0SWQsIHJlcXVlc3QsIGxvZ3MsIGhhbmRsZXIgfSk7XG4gICAgICAgIHByb21pc2VzLnB1c2gobmV0d29ya1Byb21pc2UpO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIud2FpdFVudGlsKChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAvLyBQcm9taXNlLnJhY2UoKSB3aWxsIHJlc29sdmUgYXMgc29vbiBhcyB0aGUgZmlyc3QgcHJvbWlzZSByZXNvbHZlcy5cbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBoYW5kbGVyLndhaXRVbnRpbChQcm9taXNlLnJhY2UocHJvbWlzZXMpKSB8fFxuICAgICAgICAgICAgICAgIC8vIElmIFByb21pc2UucmFjZSgpIHJlc29sdmVkIHdpdGggbnVsbCwgaXQgbWlnaHQgYmUgZHVlIHRvIGEgbmV0d29ya1xuICAgICAgICAgICAgICAgIC8vIHRpbWVvdXQgKyBhIGNhY2hlIG1pc3MuIElmIHRoYXQgd2VyZSB0byBoYXBwZW4sIHdlJ2QgcmF0aGVyIHdhaXQgdW50aWxcbiAgICAgICAgICAgICAgICAvLyB0aGUgbmV0d29ya1Byb21pc2UgcmVzb2x2ZXMgaW5zdGVhZCBvZiByZXR1cm5pbmcgbnVsbC5cbiAgICAgICAgICAgICAgICAvLyBOb3RlIHRoYXQgaXQncyBmaW5lIHRvIGF3YWl0IGFuIGFscmVhZHktcmVzb2x2ZWQgcHJvbWlzZSwgc28gd2UgZG9uJ3RcbiAgICAgICAgICAgICAgICAvLyBoYXZlIHRvIGNoZWNrIHRvIHNlZSBpZiBpdCdzIHN0aWxsIFwiaW4gZmxpZ2h0XCIuXG4gICAgICAgICAgICAgICAgYXdhaXQgbmV0d29ya1Byb21pc2U7XG4gICAgICAgIH0pKCkpO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgbG9nZ2VyLmdyb3VwQ29sbGFwc2VkKG1lc3NhZ2VzLnN0cmF0ZWd5U3RhcnQodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCByZXF1ZXN0KSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGxvZyBvZiBsb2dzKSB7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhsb2cpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWVzc2FnZXMucHJpbnRGaW5hbFJlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ25vLXJlc3BvbnNlJywgeyB1cmw6IHJlcXVlc3QudXJsIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdFxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9wdGlvbnMubG9ncyBBIHJlZmVyZW5jZSB0byB0aGUgbG9ncyBhcnJheVxuICAgICAqIEBwYXJhbSB7RXZlbnR9IG9wdGlvbnMuZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgX2dldFRpbWVvdXRQcm9taXNlKHsgcmVxdWVzdCwgbG9ncywgaGFuZGxlciB9KSB7XG4gICAgICAgIGxldCB0aW1lb3V0SWQ7XG4gICAgICAgIGNvbnN0IHRpbWVvdXRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9uTmV0d29ya1RpbWVvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBUaW1pbmcgb3V0IHRoZSBuZXR3b3JrIHJlc3BvbnNlIGF0IGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzfSBzZWNvbmRzLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKGF3YWl0IGhhbmRsZXIuY2FjaGVNYXRjaChyZXF1ZXN0KSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGltZW91dElkID0gc2V0VGltZW91dChvbk5ldHdvcmtUaW1lb3V0LCB0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMgKiAxMDAwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9taXNlOiB0aW1lb3V0UHJvbWlzZSxcbiAgICAgICAgICAgIGlkOiB0aW1lb3V0SWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtudW1iZXJ8dW5kZWZpbmVkfSBvcHRpb25zLnRpbWVvdXRJZFxuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gb3B0aW9ucy5yZXF1ZXN0XG4gICAgICogQHBhcmFtIHtBcnJheX0gb3B0aW9ucy5sb2dzIEEgcmVmZXJlbmNlIHRvIHRoZSBsb2dzIEFycmF5LlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IG9wdGlvbnMuZXZlbnRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgYXN5bmMgX2dldE5ldHdvcmtQcm9taXNlKHsgdGltZW91dElkLCByZXF1ZXN0LCBsb2dzLCBoYW5kbGVyIH0pIHtcbiAgICAgICAgbGV0IGVycm9yO1xuICAgICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuZmV0Y2hBbmRDYWNoZVB1dChyZXF1ZXN0KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZmV0Y2hFcnJvcikge1xuICAgICAgICAgICAgaWYgKGZldGNoRXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGVycm9yID0gZmV0Y2hFcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGltZW91dElkKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBHb3QgcmVzcG9uc2UgZnJvbSBuZXR3b3JrLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9ncy5wdXNoKGBVbmFibGUgdG8gZ2V0IGEgcmVzcG9uc2UgZnJvbSB0aGUgbmV0d29yay4gV2lsbCByZXNwb25kIGAgK1xuICAgICAgICAgICAgICAgICAgICBgd2l0aCBhIGNhY2hlZCByZXNwb25zZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgfHwgIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGhhbmRsZXIuY2FjaGVNYXRjaChyZXF1ZXN0KTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ3MucHVzaChgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfSdgICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGAgY2FjaGUuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsb2dzLnB1c2goYE5vIHJlc3BvbnNlIGZvdW5kIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nIGNhY2hlLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxufVxuZXhwb3J0IHsgTmV0d29ya0ZpcnN0IH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgdGltZW91dCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS90aW1lb3V0LmpzJztcbmltcG9ydCB7IFdvcmtib3hFcnJvciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9Xb3JrYm94RXJyb3IuanMnO1xuaW1wb3J0IHsgU3RyYXRlZ3kgfSBmcm9tICcuL1N0cmF0ZWd5LmpzJztcbmltcG9ydCB7IG1lc3NhZ2VzIH0gZnJvbSAnLi91dGlscy9tZXNzYWdlcy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBhXG4gKiBbbmV0d29yay1vbmx5XXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL2luc3RhbnQtYW5kLW9mZmxpbmUvb2ZmbGluZS1jb29rYm9vay8jbmV0d29yay1vbmx5fVxuICogcmVxdWVzdCBzdHJhdGVneS5cbiAqXG4gKiBUaGlzIGNsYXNzIGlzIHVzZWZ1bCBpZiB5b3Ugd2FudCB0byB0YWtlIGFkdmFudGFnZSBvZiBhbnlcbiAqIFtXb3JrYm94IHBsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfS5cbiAqXG4gKiBJZiB0aGUgbmV0d29yayByZXF1ZXN0IGZhaWxzLCB0aGlzIHdpbGwgdGhyb3cgYSBgV29ya2JveEVycm9yYCBleGNlcHRpb24uXG4gKlxuICogQGV4dGVuZHMgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgTmV0d29ya09ubHkgZXh0ZW5kcyBTdHJhdGVneSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEBwYXJhbSB7QXJyYXk8T2JqZWN0Pn0gW29wdGlvbnMucGx1Z2luc10gW1BsdWdpbnNde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi90b29scy93b3JrYm94L2d1aWRlcy91c2luZy1wbHVnaW5zfVxuICAgICAqIHRvIHVzZSBpbiBjb25qdW5jdGlvbiB3aXRoIHRoaXMgY2FjaGluZyBzdHJhdGVneS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZmV0Y2hPcHRpb25zXSBWYWx1ZXMgcGFzc2VkIGFsb25nIHRvIHRoZVxuICAgICAqIFtgaW5pdGBdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnMpXG4gICAgICogb2YgW25vbi1uYXZpZ2F0aW9uXShodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL3dvcmtib3gvaXNzdWVzLzE3OTYpXG4gICAgICogYGZldGNoKClgIHJlcXVlc3RzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubmV0d29ya1RpbWVvdXRTZWNvbmRzXSBJZiBzZXQsIGFueSBuZXR3b3JrIHJlcXVlc3RzXG4gICAgICogdGhhdCBmYWlsIHRvIHJlc3BvbmQgd2l0aGluIHRoZSB0aW1lb3V0IHdpbGwgcmVzdWx0IGluIGEgbmV0d29yayBlcnJvci5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcyA9IG9wdGlvbnMubmV0d29ya1RpbWVvdXRTZWNvbmRzIHx8IDA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gcmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgICAqIEBwYXJhbSB7bW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ9IGhhbmRsZXIgVGhlIGV2ZW50IHRoYXRcbiAgICAgKiAgICAgdHJpZ2dlcmVkIHRoZSByZXF1ZXN0LlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgICAqL1xuICAgIGFzeW5jIF9oYW5kbGUocmVxdWVzdCwgaGFuZGxlcikge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2UocmVxdWVzdCwgUmVxdWVzdCwge1xuICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6ICd3b3JrYm94LXN0cmF0ZWdpZXMnLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLFxuICAgICAgICAgICAgICAgIGZ1bmNOYW1lOiAnX2hhbmRsZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgICAgIGxldCByZXNwb25zZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2VzID0gW2hhbmRsZXIuZmV0Y2gocmVxdWVzdCldO1xuICAgICAgICAgICAgaWYgKHRoaXMuX25ldHdvcmtUaW1lb3V0U2Vjb25kcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRQcm9taXNlID0gdGltZW91dCh0aGlzLl9uZXR3b3JrVGltZW91dFNlY29uZHMgKiAxMDAwKTtcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRpbWVvdXRQcm9taXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgUHJvbWlzZS5yYWNlKHByb21pc2VzKTtcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRpbWVkIG91dCB0aGUgbmV0d29yayByZXNwb25zZSBhZnRlciBgICtcbiAgICAgICAgICAgICAgICAgICAgYCR7dGhpcy5fbmV0d29ya1RpbWVvdXRTZWNvbmRzfSBzZWNvbmRzLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGVycm9yID0gZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBDb2xsYXBzZWQobWVzc2FnZXMuc3RyYXRlZ3lTdGFydCh0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHJlcXVlc3QpKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYEdvdCByZXNwb25zZSBmcm9tIG5ldHdvcmsuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIubG9nKGBVbmFibGUgdG8gZ2V0IGEgcmVzcG9uc2UgZnJvbSB0aGUgbmV0d29yay5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lc3NhZ2VzLnByaW50RmluYWxSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCduby1yZXNwb25zZScsIHsgdXJsOiByZXF1ZXN0LnVybCwgZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbn1cbmV4cG9ydCB7IE5ldHdvcmtPbmx5IH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBjYWNoZU9rQW5kT3BhcXVlUGx1Z2luIH0gZnJvbSAnLi9wbHVnaW5zL2NhY2hlT2tBbmRPcGFxdWVQbHVnaW4uanMnO1xuaW1wb3J0IHsgU3RyYXRlZ3kgfSBmcm9tICcuL1N0cmF0ZWd5LmpzJztcbmltcG9ydCB7IG1lc3NhZ2VzIH0gZnJvbSAnLi91dGlscy9tZXNzYWdlcy5qcyc7XG5pbXBvcnQgJy4vX3ZlcnNpb24uanMnO1xuLyoqXG4gKiBBbiBpbXBsZW1lbnRhdGlvbiBvZiBhXG4gKiBbc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZV17QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL2Z1bmRhbWVudGFscy9pbnN0YW50LWFuZC1vZmZsaW5lL29mZmxpbmUtY29va2Jvb2svI3N0YWxlLXdoaWxlLXJldmFsaWRhdGV9XG4gKiByZXF1ZXN0IHN0cmF0ZWd5LlxuICpcbiAqIFJlc291cmNlcyBhcmUgcmVxdWVzdGVkIGZyb20gYm90aCB0aGUgY2FjaGUgYW5kIHRoZSBuZXR3b3JrIGluIHBhcmFsbGVsLlxuICogVGhlIHN0cmF0ZWd5IHdpbGwgcmVzcG9uZCB3aXRoIHRoZSBjYWNoZWQgdmVyc2lvbiBpZiBhdmFpbGFibGUsIG90aGVyd2lzZVxuICogd2FpdCBmb3IgdGhlIG5ldHdvcmsgcmVzcG9uc2UuIFRoZSBjYWNoZSBpcyB1cGRhdGVkIHdpdGggdGhlIG5ldHdvcmsgcmVzcG9uc2VcbiAqIHdpdGggZWFjaCBzdWNjZXNzZnVsIHJlcXVlc3QuXG4gKlxuICogQnkgZGVmYXVsdCwgdGhpcyBzdHJhdGVneSB3aWxsIGNhY2hlIHJlc3BvbnNlcyB3aXRoIGEgMjAwIHN0YXR1cyBjb2RlIGFzXG4gKiB3ZWxsIGFzIFtvcGFxdWUgcmVzcG9uc2VzXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvaGFuZGxlLXRoaXJkLXBhcnR5LXJlcXVlc3RzfS5cbiAqIE9wYXF1ZSByZXNwb25zZXMgYXJlIGNyb3NzLW9yaWdpbiByZXF1ZXN0cyB3aGVyZSB0aGUgcmVzcG9uc2UgZG9lc24ndFxuICogc3VwcG9ydCBbQ09SU117QGxpbmsgaHR0cHM6Ly9lbmFibGUtY29ycy5vcmcvfS5cbiAqXG4gKiBJZiB0aGUgbmV0d29yayByZXF1ZXN0IGZhaWxzLCBhbmQgdGhlcmUgaXMgbm8gY2FjaGUgbWF0Y2gsIHRoaXMgd2lsbCB0aHJvd1xuICogYSBgV29ya2JveEVycm9yYCBleGNlcHRpb24uXG4gKlxuICogQGV4dGVuZHMgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneVxuICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXNcbiAqL1xuY2xhc3MgU3RhbGVXaGlsZVJldmFsaWRhdGUgZXh0ZW5kcyBTdHJhdGVneSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5jYWNoZU5hbWVdIENhY2hlIG5hbWUgdG8gc3RvcmUgYW5kIHJldHJpZXZlXG4gICAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAgICogW3dvcmtib3gtY29yZV17QGxpbmsgbW9kdWxlOndvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnNdIFtQbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc31cbiAgICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmZldGNoT3B0aW9uc10gVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICAgKiBbYGluaXRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzKVxuICAgICAqIG9mIFtub24tbmF2aWdhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2KVxuICAgICAqIGBmZXRjaCgpYCByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm1hdGNoT3B0aW9uc10gW2BDYWNoZVF1ZXJ5T3B0aW9uc2BdKGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNkaWN0ZGVmLWNhY2hlcXVlcnlvcHRpb25zKVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICAgICAgLy8gSWYgdGhpcyBpbnN0YW5jZSBjb250YWlucyBubyBwbHVnaW5zIHdpdGggYSAnY2FjaGVXaWxsVXBkYXRlJyBjYWxsYmFjayxcbiAgICAgICAgLy8gcHJlcGVuZCB0aGUgYGNhY2hlT2tBbmRPcGFxdWVQbHVnaW5gIHBsdWdpbiB0byB0aGUgcGx1Z2lucyBsaXN0LlxuICAgICAgICBpZiAoIXRoaXMucGx1Z2lucy5zb21lKChwKSA9PiAnY2FjaGVXaWxsVXBkYXRlJyBpbiBwKSkge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW5zLnVuc2hpZnQoY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSByZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHttb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlcn0gaGFuZGxlciBUaGUgZXZlbnQgdGhhdFxuICAgICAqICAgICB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAgICovXG4gICAgYXN5bmMgX2hhbmRsZShyZXF1ZXN0LCBoYW5kbGVyKSB7XG4gICAgICAgIGNvbnN0IGxvZ3MgPSBbXTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGFzc2VydC5pc0luc3RhbmNlKHJlcXVlc3QsIFJlcXVlc3QsIHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiAnd29ya2JveC1zdHJhdGVnaWVzJyxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMuY29uc3RydWN0b3IubmFtZSxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2hhbmRsZScsXG4gICAgICAgICAgICAgICAgcGFyYW1OYW1lOiAncmVxdWVzdCcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmZXRjaEFuZENhY2hlUHJvbWlzZSA9IGhhbmRsZXJcbiAgICAgICAgICAgIC5mZXRjaEFuZENhY2hlUHV0KHJlcXVlc3QpXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgLy8gU3dhbGxvdyB0aGlzIGVycm9yIGJlY2F1c2UgYSAnbm8tcmVzcG9uc2UnIGVycm9yIHdpbGwgYmUgdGhyb3duIGluXG4gICAgICAgICAgICAvLyBtYWluIGhhbmRsZXIgcmV0dXJuIGZsb3cuIFRoaXMgd2lsbCBiZSBpbiB0aGUgYHdhaXRVbnRpbCgpYCBmbG93LlxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgaGFuZGxlci5jYWNoZU1hdGNoKHJlcXVlc3QpO1xuICAgICAgICBsZXQgZXJyb3I7XG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dzLnB1c2goYEZvdW5kIGEgY2FjaGVkIHJlc3BvbnNlIGluIHRoZSAnJHt0aGlzLmNhY2hlTmFtZX0nYCArXG4gICAgICAgICAgICAgICAgICAgIGAgY2FjaGUuIFdpbGwgdXBkYXRlIHdpdGggdGhlIG5ldHdvcmsgcmVzcG9uc2UgaW4gdGhlIGJhY2tncm91bmQuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ3MucHVzaChgTm8gcmVzcG9uc2UgZm91bmQgaW4gdGhlICcke3RoaXMuY2FjaGVOYW1lfScgY2FjaGUuIGAgK1xuICAgICAgICAgICAgICAgICAgICBgV2lsbCB3YWl0IGZvciB0aGUgbmV0d29yayByZXNwb25zZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gTk9URShwaGlsaXB3YWx0b24pOiBSZWFsbHkgYW5ub3lpbmcgdGhhdCB3ZSBoYXZlIHRvIHR5cGUgY2FzdCBoZXJlLlxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC9pc3N1ZXMvMjAwMDZcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoQW5kQ2FjaGVQcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChtZXNzYWdlcy5zdHJhdGVneVN0YXJ0KHRoaXMuY29uc3RydWN0b3IubmFtZSwgcmVxdWVzdCkpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBsb2cgb2YgbG9ncykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2cobG9nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1lc3NhZ2VzLnByaW50RmluYWxSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICBsb2dnZXIuZ3JvdXBFbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCduby1yZXNwb25zZScsIHsgdXJsOiByZXF1ZXN0LnVybCwgZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbn1cbmV4cG9ydCB7IFN0YWxlV2hpbGVSZXZhbGlkYXRlIH07XG4iLCIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBjYWNoZU5hbWVzIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2NhY2hlTmFtZXMuanMnO1xuaW1wb3J0IHsgV29ya2JveEVycm9yIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL1dvcmtib3hFcnJvci5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IGdldEZyaWVuZGx5VVJMIH0gZnJvbSAnd29ya2JveC1jb3JlL19wcml2YXRlL2dldEZyaWVuZGx5VVJMLmpzJztcbmltcG9ydCB7IFN0cmF0ZWd5SGFuZGxlciB9IGZyb20gJy4vU3RyYXRlZ3lIYW5kbGVyLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG4vKipcbiAqIEFuIGFic3RyYWN0IGJhc2UgY2xhc3MgdGhhdCBhbGwgb3RoZXIgc3RyYXRlZ3kgY2xhc3NlcyBtdXN0IGV4dGVuZCBmcm9tOlxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzXG4gKi9cbmNsYXNzIFN0cmF0ZWd5IHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoZSBzdHJhdGVneSBhbmQgc2V0cyBhbGwgZG9jdW1lbnRlZCBvcHRpb25cbiAgICAgKiBwcm9wZXJ0aWVzIGFzIHB1YmxpYyBpbnN0YW5jZSBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogTm90ZTogaWYgYSBjdXN0b20gc3RyYXRlZ3kgY2xhc3MgZXh0ZW5kcyB0aGUgYmFzZSBTdHJhdGVneSBjbGFzcyBhbmQgZG9lc1xuICAgICAqIG5vdCBuZWVkIG1vcmUgdGhhbiB0aGVzZSBwcm9wZXJ0aWVzLCBpdCBkb2VzIG5vdCBuZWVkIHRvIGRlZmluZSBpdHMgb3duXG4gICAgICogY29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNhY2hlTmFtZV0gQ2FjaGUgbmFtZSB0byBzdG9yZSBhbmQgcmV0cmlldmVcbiAgICAgKiByZXF1ZXN0cy4gRGVmYXVsdHMgdG8gdGhlIGNhY2hlIG5hbWVzIHByb3ZpZGVkIGJ5XG4gICAgICogW3dvcmtib3gtY29yZV17QGxpbmsgbW9kdWxlOndvcmtib3gtY29yZS5jYWNoZU5hbWVzfS5cbiAgICAgKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IFtvcHRpb25zLnBsdWdpbnNdIFtQbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc31cbiAgICAgKiB0byB1c2UgaW4gY29uanVuY3Rpb24gd2l0aCB0aGlzIGNhY2hpbmcgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmZldGNoT3B0aW9uc10gVmFsdWVzIHBhc3NlZCBhbG9uZyB0byB0aGVcbiAgICAgKiBbYGluaXRgXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvV2luZG93T3JXb3JrZXJHbG9iYWxTY29wZS9mZXRjaCNQYXJhbWV0ZXJzKVxuICAgICAqIG9mIFtub24tbmF2aWdhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2KVxuICAgICAqIGBmZXRjaCgpYCByZXF1ZXN0cyBtYWRlIGJ5IHRoaXMgc3RyYXRlZ3kuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm1hdGNoT3B0aW9uc10gVGhlXG4gICAgICogW2BDYWNoZVF1ZXJ5T3B0aW9uc2Bde0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNkaWN0ZGVmLWNhY2hlcXVlcnlvcHRpb25zfVxuICAgICAqIGZvciBhbnkgYGNhY2hlLm1hdGNoKClgIG9yIGBjYWNoZS5wdXQoKWAgY2FsbHMgbWFkZSBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2FjaGUgbmFtZSB0byBzdG9yZSBhbmQgcmV0cmlldmVcbiAgICAgICAgICogcmVxdWVzdHMuIERlZmF1bHRzIHRvIHRoZSBjYWNoZSBuYW1lcyBwcm92aWRlZCBieVxuICAgICAgICAgKiBbd29ya2JveC1jb3JlXXtAbGluayBtb2R1bGU6d29ya2JveC1jb3JlLmNhY2hlTmFtZXN9LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jYWNoZU5hbWUgPSBjYWNoZU5hbWVzLmdldFJ1bnRpbWVOYW1lKG9wdGlvbnMuY2FjaGVOYW1lKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBsaXN0XG4gICAgICAgICAqIFtQbHVnaW5zXXtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvdG9vbHMvd29ya2JveC9ndWlkZXMvdXNpbmctcGx1Z2luc31cbiAgICAgICAgICogdXNlZCBieSB0aGlzIHN0cmF0ZWd5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7QXJyYXk8T2JqZWN0Pn1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMucGx1Z2lucyA9IG9wdGlvbnMucGx1Z2lucyB8fCBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVlcyBwYXNzZWQgYWxvbmcgdG8gdGhlXG4gICAgICAgICAqIFtgaW5pdGBde0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL2ZldGNoI1BhcmFtZXRlcnN9XG4gICAgICAgICAqIG9mIGFsbCBmZXRjaCgpIHJlcXVlc3RzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZmV0Y2hPcHRpb25zID0gb3B0aW9ucy5mZXRjaE9wdGlvbnM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGVcbiAgICAgICAgICogW2BDYWNoZVF1ZXJ5T3B0aW9uc2Bde0BsaW5rIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9TZXJ2aWNlV29ya2VyLyNkaWN0ZGVmLWNhY2hlcXVlcnlvcHRpb25zfVxuICAgICAgICAgKiBmb3IgYW55IGBjYWNoZS5tYXRjaCgpYCBvciBgY2FjaGUucHV0KClgIGNhbGxzIG1hZGUgYnkgdGhpcyBzdHJhdGVneS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMubWF0Y2hPcHRpb25zID0gb3B0aW9ucy5tYXRjaE9wdGlvbnM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm0gYSByZXF1ZXN0IHN0cmF0ZWd5IGFuZCByZXR1cm5zIGEgYFByb21pc2VgIHRoYXQgd2lsbCByZXNvbHZlIHdpdGhcbiAgICAgKiBhIGBSZXNwb25zZWAsIGludm9raW5nIGFsbCByZWxldmFudCBwbHVnaW4gY2FsbGJhY2tzLlxuICAgICAqXG4gICAgICogV2hlbiBhIHN0cmF0ZWd5IGluc3RhbmNlIGlzIHJlZ2lzdGVyZWQgd2l0aCBhIFdvcmtib3hcbiAgICAgKiBbcm91dGVde0BsaW5rIG1vZHVsZTp3b3JrYm94LXJvdXRpbmcuUm91dGV9LCB0aGlzIG1ldGhvZCBpcyBhdXRvbWF0aWNhbGx5XG4gICAgICogY2FsbGVkIHdoZW4gdGhlIHJvdXRlIG1hdGNoZXMuXG4gICAgICpcbiAgICAgKiBBbHRlcm5hdGl2ZWx5LCB0aGlzIG1ldGhvZCBjYW4gYmUgdXNlZCBpbiBhIHN0YW5kYWxvbmUgYEZldGNoRXZlbnRgXG4gICAgICogbGlzdGVuZXIgYnkgcGFzc2luZyBpdCB0byBgZXZlbnQucmVzcG9uZFdpdGgoKWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0ZldGNoRXZlbnR8T2JqZWN0fSBvcHRpb25zIEEgYEZldGNoRXZlbnRgIG9yIGFuIG9iamVjdCB3aXRoIHRoZVxuICAgICAqICAgICBwcm9wZXJ0aWVzIGxpc3RlZCBiZWxvdy5cbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBvcHRpb25zLnJlcXVlc3QgQSByZXF1ZXN0IHRvIHJ1biB0aGlzIHN0cmF0ZWd5IGZvci5cbiAgICAgKiBAcGFyYW0ge0V4dGVuZGFibGVFdmVudH0gb3B0aW9ucy5ldmVudCBUaGUgZXZlbnQgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICAgICAqICAgICByZXF1ZXN0LlxuICAgICAqIEBwYXJhbSB7VVJMfSBbb3B0aW9ucy51cmxdXG4gICAgICogQHBhcmFtIHsqfSBbb3B0aW9ucy5wYXJhbXNdXG4gICAgICovXG4gICAgaGFuZGxlKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgW3Jlc3BvbnNlRG9uZV0gPSB0aGlzLmhhbmRsZUFsbChvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlRG9uZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogU2ltaWxhciB0byBbYGhhbmRsZSgpYF17QGxpbmsgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneX5oYW5kbGV9LCBidXRcbiAgICAgKiBpbnN0ZWFkIG9mIGp1c3QgcmV0dXJuaW5nIGEgYFByb21pc2VgIHRoYXQgcmVzb2x2ZXMgdG8gYSBgUmVzcG9uc2VgIGl0XG4gICAgICogaXQgd2lsbCByZXR1cm4gYW4gdHVwbGUgb2YgW3Jlc3BvbnNlLCBkb25lXSBwcm9taXNlcywgd2hlcmUgdGhlIGZvcm1lclxuICAgICAqIChgcmVzcG9uc2VgKSBpcyBlcXVpdmFsZW50IHRvIHdoYXQgYGhhbmRsZSgpYCByZXR1cm5zLCBhbmQgdGhlIGxhdHRlciBpcyBhXG4gICAgICogUHJvbWlzZSB0aGF0IHdpbGwgcmVzb2x2ZSBvbmNlIGFueSBwcm9taXNlcyB0aGF0IHdlcmUgYWRkZWQgdG9cbiAgICAgKiBgZXZlbnQud2FpdFVudGlsKClgIGFzIHBhcnQgb2YgcGVyZm9ybWluZyB0aGUgc3RyYXRlZ3kgaGF2ZSBjb21wbGV0ZWQuXG4gICAgICpcbiAgICAgKiBZb3UgY2FuIGF3YWl0IHRoZSBgZG9uZWAgcHJvbWlzZSB0byBlbnN1cmUgYW55IGV4dHJhIHdvcmsgcGVyZm9ybWVkIGJ5XG4gICAgICogdGhlIHN0cmF0ZWd5ICh1c3VhbGx5IGNhY2hpbmcgcmVzcG9uc2VzKSBjb21wbGV0ZXMgc3VjY2Vzc2Z1bGx5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGZXRjaEV2ZW50fE9iamVjdH0gb3B0aW9ucyBBIGBGZXRjaEV2ZW50YCBvciBhbiBvYmplY3Qgd2l0aCB0aGVcbiAgICAgKiAgICAgcHJvcGVydGllcyBsaXN0ZWQgYmVsb3cuXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gb3B0aW9ucy5yZXF1ZXN0IEEgcmVxdWVzdCB0byBydW4gdGhpcyBzdHJhdGVneSBmb3IuXG4gICAgICogQHBhcmFtIHtFeHRlbmRhYmxlRXZlbnR9IG9wdGlvbnMuZXZlbnQgVGhlIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAgICAgKiAgICAgcmVxdWVzdC5cbiAgICAgKiBAcGFyYW0ge1VSTH0gW29wdGlvbnMudXJsXVxuICAgICAqIEBwYXJhbSB7Kn0gW29wdGlvbnMucGFyYW1zXVxuICAgICAqIEByZXR1cm4ge0FycmF5PFByb21pc2U+fSBBIHR1cGxlIG9mIFtyZXNwb25zZSwgZG9uZV1cbiAgICAgKiAgICAgcHJvbWlzZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBkZXRlcm1pbmUgd2hlbiB0aGUgcmVzcG9uc2UgcmVzb2x2ZXMgYXNcbiAgICAgKiAgICAgd2VsbCBhcyB3aGVuIHRoZSBoYW5kbGVyIGhhcyBjb21wbGV0ZWQgYWxsIGl0cyB3b3JrLlxuICAgICAqL1xuICAgIGhhbmRsZUFsbChvcHRpb25zKSB7XG4gICAgICAgIC8vIEFsbG93IGZvciBmbGV4aWJsZSBvcHRpb25zIHRvIGJlIHBhc3NlZC5cbiAgICAgICAgaWYgKG9wdGlvbnMgaW5zdGFuY2VvZiBGZXRjaEV2ZW50KSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGV2ZW50OiBvcHRpb25zLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IG9wdGlvbnMucmVxdWVzdCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXZlbnQgPSBvcHRpb25zLmV2ZW50O1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdHlwZW9mIG9wdGlvbnMucmVxdWVzdCA9PT0gJ3N0cmluZycgP1xuICAgICAgICAgICAgbmV3IFJlcXVlc3Qob3B0aW9ucy5yZXF1ZXN0KSA6XG4gICAgICAgICAgICBvcHRpb25zLnJlcXVlc3Q7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9ICdwYXJhbXMnIGluIG9wdGlvbnMgPyBvcHRpb25zLnBhcmFtcyA6IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IG5ldyBTdHJhdGVneUhhbmRsZXIodGhpcywgeyBldmVudCwgcmVxdWVzdCwgcGFyYW1zIH0pO1xuICAgICAgICBjb25zdCByZXNwb25zZURvbmUgPSB0aGlzLl9nZXRSZXNwb25zZShoYW5kbGVyLCByZXF1ZXN0LCBldmVudCk7XG4gICAgICAgIGNvbnN0IGhhbmRsZXJEb25lID0gdGhpcy5fYXdhaXRDb21wbGV0ZShyZXNwb25zZURvbmUsIGhhbmRsZXIsIHJlcXVlc3QsIGV2ZW50KTtcbiAgICAgICAgLy8gUmV0dXJuIGFuIGFycmF5IG9mIHByb21pc2VzLCBzdWl0YWJsZSBmb3IgdXNlIHdpdGggUHJvbWlzZS5hbGwoKS5cbiAgICAgICAgcmV0dXJuIFtyZXNwb25zZURvbmUsIGhhbmRsZXJEb25lXTtcbiAgICB9XG4gICAgYXN5bmMgX2dldFJlc3BvbnNlKGhhbmRsZXIsIHJlcXVlc3QsIGV2ZW50KSB7XG4gICAgICAgIGF3YWl0IGhhbmRsZXIucnVuQ2FsbGJhY2tzKCdoYW5kbGVyV2lsbFN0YXJ0JywgeyBldmVudCwgcmVxdWVzdCB9KTtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gdW5kZWZpbmVkO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9oYW5kbGUocmVxdWVzdCwgaGFuZGxlcik7XG4gICAgICAgICAgICAvLyBUaGUgXCJvZmZpY2lhbFwiIFN0cmF0ZWd5IHN1YmNsYXNzZXMgYWxsIHRocm93IHRoaXMgZXJyb3IgYXV0b21hdGljYWxseSxcbiAgICAgICAgICAgIC8vIGJ1dCBpbiBjYXNlIGEgdGhpcmQtcGFydHkgU3RyYXRlZ3kgZG9lc24ndCwgZW5zdXJlIHRoYXQgd2UgaGF2ZSBhXG4gICAgICAgICAgICAvLyBjb25zaXN0ZW50IGZhaWx1cmUgd2hlbiB0aGVyZSdzIG5vIHJlc3BvbnNlIG9yIGFuIGVycm9yIHJlc3BvbnNlLlxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignbm8tcmVzcG9uc2UnLCB7IHVybDogcmVxdWVzdC51cmwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgaGFuZGxlci5pdGVyYXRlQ2FsbGJhY2tzKCdoYW5kbGVyRGlkRXJyb3InKSkge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGNhbGxiYWNrKHsgZXJyb3IsIGV2ZW50LCByZXF1ZXN0IH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYFdoaWxlIHJlc3BvbmRpbmcgdG8gJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfScsIGAgK1xuICAgICAgICAgICAgICAgICAgICBgYW4gJHtlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IudG9TdHJpbmcoKSA6ICcnfSBlcnJvciBvY2N1cnJlZC4gVXNpbmcgYSBmYWxsYmFjayByZXNwb25zZSBwcm92aWRlZCBieSBgICtcbiAgICAgICAgICAgICAgICAgICAgYGEgaGFuZGxlckRpZEVycm9yIHBsdWdpbi5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIGhhbmRsZXIuaXRlcmF0ZUNhbGxiYWNrcygnaGFuZGxlcldpbGxSZXNwb25kJykpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgY2FsbGJhY2soeyBldmVudCwgcmVxdWVzdCwgcmVzcG9uc2UgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICBhc3luYyBfYXdhaXRDb21wbGV0ZShyZXNwb25zZURvbmUsIGhhbmRsZXIsIHJlcXVlc3QsIGV2ZW50KSB7XG4gICAgICAgIGxldCByZXNwb25zZTtcbiAgICAgICAgbGV0IGVycm9yO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZURvbmU7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBJZ25vcmUgZXJyb3JzLCBhcyByZXNwb25zZSBlcnJvcnMgc2hvdWxkIGJlIGNhdWdodCB2aWEgdGhlIGByZXNwb25zZWBcbiAgICAgICAgICAgIC8vIHByb21pc2UgYWJvdmUuIFRoZSBgZG9uZWAgcHJvbWlzZSB3aWxsIG9ubHkgdGhyb3cgZm9yIGVycm9ycyBpblxuICAgICAgICAgICAgLy8gcHJvbWlzZXMgcGFzc2VkIHRvIGBoYW5kbGVyLndhaXRVbnRpbCgpYC5cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgaGFuZGxlci5ydW5DYWxsYmFja3MoJ2hhbmRsZXJEaWRSZXNwb25kJywge1xuICAgICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICAgIHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZXIuZG9uZVdhaXRpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAod2FpdFVudGlsRXJyb3IpIHtcbiAgICAgICAgICAgIGlmICh3YWl0VW50aWxFcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSB3YWl0VW50aWxFcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBoYW5kbGVyLnJ1bkNhbGxiYWNrcygnaGFuZGxlckRpZENvbXBsZXRlJywge1xuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICByZXF1ZXN0LFxuICAgICAgICAgICAgcmVzcG9uc2UsXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgIH0pO1xuICAgICAgICBoYW5kbGVyLmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCB7IFN0cmF0ZWd5IH07XG4vKipcbiAqIENsYXNzZXMgZXh0ZW5kaW5nIHRoZSBgU3RyYXRlZ3lgIGJhc2VkIGNsYXNzIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QsXG4gKiBhbmQgbGV2ZXJhZ2UgdGhlIFtgaGFuZGxlcmBde0BsaW5rIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfVxuICogYXJnIHRvIHBlcmZvcm0gYWxsIGZldGNoaW5nIGFuZCBjYWNoZSBsb2dpYywgd2hpY2ggd2lsbCBlbnN1cmUgYWxsIHJlbGV2YW50XG4gKiBjYWNoZSwgY2FjaGUgb3B0aW9ucywgZmV0Y2ggb3B0aW9ucyBhbmQgcGx1Z2lucyBhcmUgdXNlZCAocGVyIHRoZSBjdXJyZW50XG4gKiBzdHJhdGVneSBpbnN0YW5jZSkuXG4gKlxuICogQG5hbWUgX2hhbmRsZVxuICogQGluc3RhbmNlXG4gKiBAYWJzdHJhY3RcbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gKiBAcGFyYW0ge21vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfSBoYW5kbGVyXG4gKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlPn1cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneVxuICovXG4iLCIvKlxuICBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG5cbiAgVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlXG4gIGxpY2Vuc2UgdGhhdCBjYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBvciBhdFxuICBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVC5cbiovXG5pbXBvcnQgeyBhc3NlcnQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvYXNzZXJ0LmpzJztcbmltcG9ydCB7IGNhY2hlTWF0Y2hJZ25vcmVQYXJhbXMgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvY2FjaGVNYXRjaElnbm9yZVBhcmFtcy5qcyc7XG5pbXBvcnQgeyBEZWZlcnJlZCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9EZWZlcnJlZC5qcyc7XG5pbXBvcnQgeyBleGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcyB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9leGVjdXRlUXVvdGFFcnJvckNhbGxiYWNrcy5qcyc7XG5pbXBvcnQgeyBnZXRGcmllbmRseVVSTCB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9nZXRGcmllbmRseVVSTC5qcyc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvbG9nZ2VyLmpzJztcbmltcG9ydCB7IHRpbWVvdXQgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvdGltZW91dC5qcyc7XG5pbXBvcnQgeyBXb3JrYm94RXJyb3IgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvV29ya2JveEVycm9yLmpzJztcbmltcG9ydCAnLi9fdmVyc2lvbi5qcyc7XG5mdW5jdGlvbiB0b1JlcXVlc3QoaW5wdXQpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpID8gbmV3IFJlcXVlc3QoaW5wdXQpIDogaW5wdXQ7XG59XG4vKipcbiAqIEEgY2xhc3MgY3JlYXRlZCBldmVyeSB0aW1lIGEgU3RyYXRlZ3kgaW5zdGFuY2UgaW5zdGFuY2UgY2FsbHNcbiAqIFtoYW5kbGUoKV17QGxpbmsgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneX5oYW5kbGV9IG9yXG4gKiBbaGFuZGxlQWxsKClde0BsaW5rIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3l+aGFuZGxlQWxsfSB0aGF0IHdyYXBzIGFsbCBmZXRjaCBhbmRcbiAqIGNhY2hlIGFjdGlvbnMgYXJvdW5kIHBsdWdpbiBjYWxsYmFja3MgYW5kIGtlZXBzIHRyYWNrIG9mIHdoZW4gdGhlIHN0cmF0ZWd5XG4gKiBpcyBcImRvbmVcIiAoaS5lLiBhbGwgYWRkZWQgYGV2ZW50LndhaXRVbnRpbCgpYCBwcm9taXNlcyBoYXZlIHJlc29sdmVkKS5cbiAqXG4gKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llc1xuICovXG5jbGFzcyBTdHJhdGVneUhhbmRsZXIge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBwYXNzZWQgc3RyYXRlZ3kgYW5kIGV2ZW50XG4gICAgICogdGhhdCdzIGhhbmRsaW5nIHRoZSByZXF1ZXN0LlxuICAgICAqXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIGFsc28gaW5pdGlhbGl6ZXMgdGhlIHN0YXRlIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gZWFjaCBvZlxuICAgICAqIHRoZSBwbHVnaW5zIGhhbmRsaW5nIHRoaXMgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneX0gc3RyYXRlZ3lcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IG9wdGlvbnMucmVxdWVzdCBBIHJlcXVlc3QgdG8gcnVuIHRoaXMgc3RyYXRlZ3kgZm9yLlxuICAgICAqIEBwYXJhbSB7RXh0ZW5kYWJsZUV2ZW50fSBvcHRpb25zLmV2ZW50IFRoZSBldmVudCBhc3NvY2lhdGVkIHdpdGggdGhlXG4gICAgICogICAgIHJlcXVlc3QuXG4gICAgICogQHBhcmFtIHtVUkx9IFtvcHRpb25zLnVybF1cbiAgICAgKiBAcGFyYW0geyp9IFtvcHRpb25zLnBhcmFtc11cbiAgICAgKiAgICAgW21hdGNoIGNhbGxiYWNrXXtAbGluayBtb2R1bGU6d29ya2JveC1yb3V0aW5nfm1hdGNoQ2FsbGJhY2t9LFxuICAgICAqICAgICAoaWYgYXBwbGljYWJsZSkuXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc3RyYXRlZ3ksIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fY2FjaGVLZXlzID0ge307XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcmVxdWVzdCB0aGUgc3RyYXRlZ3kgaXMgcGVyZm9ybWluZyAocGFzc2VkIHRvIHRoZSBzdHJhdGVneSdzXG4gICAgICAgICAqIGBoYW5kbGUoKWAgb3IgYGhhbmRsZUFsbCgpYCBtZXRob2QpLlxuICAgICAgICAgKiBAbmFtZSByZXF1ZXN0XG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSB7UmVxdWVzdH1cbiAgICAgICAgICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyXG4gICAgICAgICAqL1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGlzIHJlcXVlc3QuXG4gICAgICAgICAqIEBuYW1lIGV2ZW50XG4gICAgICAgICAqIEBpbnN0YW5jZVxuICAgICAgICAgKiBAdHlwZSB7RXh0ZW5kYWJsZUV2ZW50fVxuICAgICAgICAgKiBAbWVtYmVyb2YgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJcbiAgICAgICAgICovXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGBVUkxgIGluc3RhbmNlIG9mIGByZXF1ZXN0LnVybGAgKGlmIHBhc3NlZCB0byB0aGUgc3RyYXRlZ3knc1xuICAgICAgICAgKiBgaGFuZGxlKClgIG9yIGBoYW5kbGVBbGwoKWAgbWV0aG9kKS5cbiAgICAgICAgICogTm90ZTogdGhlIGB1cmxgIHBhcmFtIHdpbGwgYmUgcHJlc2VudCBpZiB0aGUgc3RyYXRlZ3kgd2FzIGludm9rZWRcbiAgICAgICAgICogZnJvbSBhIHdvcmtib3ggYFJvdXRlYCBvYmplY3QuXG4gICAgICAgICAqIEBuYW1lIHVybFxuICAgICAgICAgKiBAaW5zdGFuY2VcbiAgICAgICAgICogQHR5cGUge1VSTHx1bmRlZmluZWR9XG4gICAgICAgICAqIEBtZW1iZXJvZiBtb2R1bGU6d29ya2JveC1zdHJhdGVnaWVzLlN0cmF0ZWd5SGFuZGxlclxuICAgICAgICAgKi9cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgYHBhcmFtYCB2YWx1ZSAoaWYgcGFzc2VkIHRvIHRoZSBzdHJhdGVneSdzXG4gICAgICAgICAqIGBoYW5kbGUoKWAgb3IgYGhhbmRsZUFsbCgpYCBtZXRob2QpLlxuICAgICAgICAgKiBOb3RlOiB0aGUgYHBhcmFtYCBwYXJhbSB3aWxsIGJlIHByZXNlbnQgaWYgdGhlIHN0cmF0ZWd5IHdhcyBpbnZva2VkXG4gICAgICAgICAqIGZyb20gYSB3b3JrYm94IGBSb3V0ZWAgb2JqZWN0IGFuZCB0aGVcbiAgICAgICAgICogW21hdGNoIGNhbGxiYWNrXXtAbGluayBtb2R1bGU6d29ya2JveC1yb3V0aW5nfm1hdGNoQ2FsbGJhY2t9IHJldHVybmVkXG4gICAgICAgICAqIGEgdHJ1dGh5IHZhbHVlIChpdCB3aWxsIGJlIHRoYXQgdmFsdWUpLlxuICAgICAgICAgKiBAbmFtZSBwYXJhbXNcbiAgICAgICAgICogQGluc3RhbmNlXG4gICAgICAgICAqIEB0eXBlIHsqfHVuZGVmaW5lZH1cbiAgICAgICAgICogQG1lbWJlcm9mIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyXG4gICAgICAgICAqL1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgYXNzZXJ0LmlzSW5zdGFuY2Uob3B0aW9ucy5ldmVudCwgRXh0ZW5kYWJsZUV2ZW50LCB7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogJ3dvcmtib3gtc3RyYXRlZ2llcycsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnU3RyYXRlZ3lIYW5kbGVyJyxcbiAgICAgICAgICAgICAgICBmdW5jTmFtZTogJ2NvbnN0cnVjdG9yJyxcbiAgICAgICAgICAgICAgICBwYXJhbU5hbWU6ICdvcHRpb25zLmV2ZW50JyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZXZlbnQgPSBvcHRpb25zLmV2ZW50O1xuICAgICAgICB0aGlzLl9zdHJhdGVneSA9IHN0cmF0ZWd5O1xuICAgICAgICB0aGlzLl9oYW5kbGVyRGVmZXJyZWQgPSBuZXcgRGVmZXJyZWQoKTtcbiAgICAgICAgdGhpcy5fZXh0ZW5kTGlmZXRpbWVQcm9taXNlcyA9IFtdO1xuICAgICAgICAvLyBDb3B5IHRoZSBwbHVnaW5zIGxpc3QgKHNpbmNlIGl0J3MgbXV0YWJsZSBvbiB0aGUgc3RyYXRlZ3kpLFxuICAgICAgICAvLyBzbyBhbnkgbXV0YXRpb25zIGRvbid0IGFmZmVjdCB0aGlzIGhhbmRsZXIgaW5zdGFuY2UuXG4gICAgICAgIHRoaXMuX3BsdWdpbnMgPSBbLi4uc3RyYXRlZ3kucGx1Z2luc107XG4gICAgICAgIHRoaXMuX3BsdWdpblN0YXRlTWFwID0gbmV3IE1hcCgpO1xuICAgICAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiB0aGlzLl9wbHVnaW5zKSB7XG4gICAgICAgICAgICB0aGlzLl9wbHVnaW5TdGF0ZU1hcC5zZXQocGx1Z2luLCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ldmVudC53YWl0VW50aWwodGhpcy5faGFuZGxlckRlZmVycmVkLnByb21pc2UpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBGZXRjaGVzIGEgZ2l2ZW4gcmVxdWVzdCAoYW5kIGludm9rZXMgYW55IGFwcGxpY2FibGUgcGx1Z2luIGNhbGxiYWNrXG4gICAgICogbWV0aG9kcykgdXNpbmcgdGhlIGBmZXRjaE9wdGlvbnNgIChmb3Igbm9uLW5hdmlnYXRpb24gcmVxdWVzdHMpIGFuZFxuICAgICAqIGBwbHVnaW5zYCBkZWZpbmVkIG9uIHRoZSBgU3RyYXRlZ3lgIG9iamVjdC5cbiAgICAgKlxuICAgICAqIFRoZSBmb2xsb3dpbmcgcGx1Z2luIGxpZmVjeWNsZSBtZXRob2RzIGFyZSBpbnZva2VkIHdoZW4gdXNpbmcgdGhpcyBtZXRob2Q6XG4gICAgICogLSBgcmVxdWVzdFdpbGxGZXRjaCgpYFxuICAgICAqIC0gYGZldGNoRGlkU3VjY2VlZCgpYFxuICAgICAqIC0gYGZldGNoRGlkRmFpbCgpYFxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30gaW5wdXQgVGhlIFVSTCBvciByZXF1ZXN0IHRvIGZldGNoLlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2U+fVxuICAgICAqL1xuICAgIGFzeW5jIGZldGNoKGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHsgZXZlbnQgfSA9IHRoaXM7XG4gICAgICAgIGxldCByZXF1ZXN0ID0gdG9SZXF1ZXN0KGlucHV0KTtcbiAgICAgICAgaWYgKHJlcXVlc3QubW9kZSA9PT0gJ25hdmlnYXRlJyAmJlxuICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBGZXRjaEV2ZW50ICYmXG4gICAgICAgICAgICBldmVudC5wcmVsb2FkUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlID0gYXdhaXQgZXZlbnQucHJlbG9hZFJlc3BvbnNlO1xuICAgICAgICAgICAgaWYgKHBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmxvZyhgVXNpbmcgYSBwcmVsb2FkZWQgbmF2aWdhdGlvbiByZXNwb25zZSBmb3IgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwocmVxdWVzdC51cmwpfSdgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc3NpYmxlUHJlbG9hZFJlc3BvbnNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgZmV0Y2hEaWRGYWlsIHBsdWdpbiwgd2UgbmVlZCB0byBzYXZlIGEgY2xvbmUgb2YgdGhlXG4gICAgICAgIC8vIG9yaWdpbmFsIHJlcXVlc3QgYmVmb3JlIGl0J3MgZWl0aGVyIG1vZGlmaWVkIGJ5IGEgcmVxdWVzdFdpbGxGZXRjaFxuICAgICAgICAvLyBwbHVnaW4gb3IgYmVmb3JlIHRoZSBvcmlnaW5hbCByZXF1ZXN0J3MgYm9keSBpcyBjb25zdW1lZCB2aWEgZmV0Y2goKS5cbiAgICAgICAgY29uc3Qgb3JpZ2luYWxSZXF1ZXN0ID0gdGhpcy5oYXNDYWxsYmFjaygnZmV0Y2hEaWRGYWlsJykgP1xuICAgICAgICAgICAgcmVxdWVzdC5jbG9uZSgpIDogbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2Igb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdyZXF1ZXN0V2lsbEZldGNoJykpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0ID0gYXdhaXQgY2IoeyByZXF1ZXN0OiByZXF1ZXN0LmNsb25lKCksIGV2ZW50IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBXb3JrYm94RXJyb3IoJ3BsdWdpbi1lcnJvci1yZXF1ZXN0LXdpbGwtZmV0Y2gnLCB7IHRocm93bkVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHJlcXVlc3QgY2FuIGJlIGFsdGVyZWQgYnkgcGx1Z2lucyB3aXRoIGByZXF1ZXN0V2lsbEZldGNoYCBtYWtpbmdcbiAgICAgICAgLy8gdGhlIG9yaWdpbmFsIHJlcXVlc3QgKG1vc3QgbGlrZWx5IGZyb20gYSBgZmV0Y2hgIGV2ZW50KSBkaWZmZXJlbnRcbiAgICAgICAgLy8gZnJvbSB0aGUgUmVxdWVzdCB3ZSBtYWtlLiBQYXNzIGJvdGggdG8gYGZldGNoRGlkRmFpbGAgdG8gYWlkIGRlYnVnZ2luZy5cbiAgICAgICAgY29uc3QgcGx1Z2luRmlsdGVyZWRSZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGZldGNoUmVzcG9uc2U7XG4gICAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS93b3JrYm94L2lzc3Vlcy8xNzk2XG4gICAgICAgICAgICBmZXRjaFJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdCwgcmVxdWVzdC5tb2RlID09PSAnbmF2aWdhdGUnID9cbiAgICAgICAgICAgICAgICB1bmRlZmluZWQgOiB0aGlzLl9zdHJhdGVneS5mZXRjaE9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYE5ldHdvcmsgcmVxdWVzdCBmb3IgYCArXG4gICAgICAgICAgICAgICAgICAgIGAnJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9JyByZXR1cm5lZCBhIHJlc3BvbnNlIHdpdGggYCArXG4gICAgICAgICAgICAgICAgICAgIGBzdGF0dXMgJyR7ZmV0Y2hSZXNwb25zZS5zdGF0dXN9Jy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdmZXRjaERpZFN1Y2NlZWQnKSkge1xuICAgICAgICAgICAgICAgIGZldGNoUmVzcG9uc2UgPSBhd2FpdCBjYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiBwbHVnaW5GaWx0ZXJlZFJlcXVlc3QsXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBmZXRjaFJlc3BvbnNlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZldGNoUmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5sb2coYE5ldHdvcmsgcmVxdWVzdCBmb3IgYCArXG4gICAgICAgICAgICAgICAgICAgIGAnJHtnZXRGcmllbmRseVVSTChyZXF1ZXN0LnVybCl9JyB0aHJldyBhbiBlcnJvci5gLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBgb3JpZ2luYWxSZXF1ZXN0YCB3aWxsIG9ubHkgZXhpc3QgaWYgYSBgZmV0Y2hEaWRGYWlsYCBjYWxsYmFja1xuICAgICAgICAgICAgLy8gaXMgYmVpbmcgdXNlZCAoc2VlIGFib3ZlKS5cbiAgICAgICAgICAgIGlmIChvcmlnaW5hbFJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnJ1bkNhbGxiYWNrcygnZmV0Y2hEaWRGYWlsJywge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFJlcXVlc3Q6IG9yaWdpbmFsUmVxdWVzdC5jbG9uZSgpLFxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiBwbHVnaW5GaWx0ZXJlZFJlcXVlc3QuY2xvbmUoKSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxzIGB0aGlzLmZldGNoKClgIGFuZCAoaW4gdGhlIGJhY2tncm91bmQpIHJ1bnMgYHRoaXMuY2FjaGVQdXQoKWAgb25cbiAgICAgKiB0aGUgcmVzcG9uc2UgZ2VuZXJhdGVkIGJ5IGB0aGlzLmZldGNoKClgLlxuICAgICAqXG4gICAgICogVGhlIGNhbGwgdG8gYHRoaXMuY2FjaGVQdXQoKWAgYXV0b21hdGljYWxseSBpbnZva2VzIGB0aGlzLndhaXRVbnRpbCgpYCxcbiAgICAgKiBzbyB5b3UgZG8gbm90IGhhdmUgdG8gbWFudWFsbHkgY2FsbCBgd2FpdFVudGlsKClgIG9uIHRoZSBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdHxzdHJpbmd9IGlucHV0IFRoZSByZXF1ZXN0IG9yIFVSTCB0byBmZXRjaCBhbmQgY2FjaGUuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXNwb25zZT59XG4gICAgICovXG4gICAgYXN5bmMgZmV0Y2hBbmRDYWNoZVB1dChpbnB1dCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZmV0Y2goaW5wdXQpO1xuICAgICAgICBjb25zdCByZXNwb25zZUNsb25lID0gcmVzcG9uc2UuY2xvbmUoKTtcbiAgICAgICAgdm9pZCB0aGlzLndhaXRVbnRpbCh0aGlzLmNhY2hlUHV0KGlucHV0LCByZXNwb25zZUNsb25lKSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWF0Y2hlcyBhIHJlcXVlc3QgZnJvbSB0aGUgY2FjaGUgKGFuZCBpbnZva2VzIGFueSBhcHBsaWNhYmxlIHBsdWdpblxuICAgICAqIGNhbGxiYWNrIG1ldGhvZHMpIHVzaW5nIHRoZSBgY2FjaGVOYW1lYCwgYG1hdGNoT3B0aW9uc2AsIGFuZCBgcGx1Z2luc2BcbiAgICAgKiBkZWZpbmVkIG9uIHRoZSBzdHJhdGVneSBvYmplY3QuXG4gICAgICpcbiAgICAgKiBUaGUgZm9sbG93aW5nIHBsdWdpbiBsaWZlY3ljbGUgbWV0aG9kcyBhcmUgaW52b2tlZCB3aGVuIHVzaW5nIHRoaXMgbWV0aG9kOlxuICAgICAqIC0gY2FjaGVLZXlXaWxsQnlVc2VkKClcbiAgICAgKiAtIGNhY2hlZFJlc3BvbnNlV2lsbEJ5VXNlZCgpXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R8c3RyaW5nfSBrZXkgVGhlIFJlcXVlc3Qgb3IgVVJMIHRvIHVzZSBhcyB0aGUgY2FjaGUga2V5LlxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8UmVzcG9uc2V8dW5kZWZpbmVkPn0gQSBtYXRjaGluZyByZXNwb25zZSwgaWYgZm91bmQuXG4gICAgICovXG4gICAgYXN5bmMgY2FjaGVNYXRjaChrZXkpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IHRvUmVxdWVzdChrZXkpO1xuICAgICAgICBsZXQgY2FjaGVkUmVzcG9uc2U7XG4gICAgICAgIGNvbnN0IHsgY2FjaGVOYW1lLCBtYXRjaE9wdGlvbnMgfSA9IHRoaXMuX3N0cmF0ZWd5O1xuICAgICAgICBjb25zdCBlZmZlY3RpdmVSZXF1ZXN0ID0gYXdhaXQgdGhpcy5nZXRDYWNoZUtleShyZXF1ZXN0LCAncmVhZCcpO1xuICAgICAgICBjb25zdCBtdWx0aU1hdGNoT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgbWF0Y2hPcHRpb25zKSwgeyBjYWNoZU5hbWUgfSk7XG4gICAgICAgIGNhY2hlZFJlc3BvbnNlID0gYXdhaXQgY2FjaGVzLm1hdGNoKGVmZmVjdGl2ZVJlcXVlc3QsIG11bHRpTWF0Y2hPcHRpb25zKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgRm91bmQgYSBjYWNoZWQgcmVzcG9uc2UgaW4gJyR7Y2FjaGVOYW1lfScuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYE5vIGNhY2hlZCByZXNwb25zZSBmb3VuZCBpbiAnJHtjYWNoZU5hbWV9Jy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcygnY2FjaGVkUmVzcG9uc2VXaWxsQmVVc2VkJykpIHtcbiAgICAgICAgICAgIGNhY2hlZFJlc3BvbnNlID0gKGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICBjYWNoZU5hbWUsXG4gICAgICAgICAgICAgICAgbWF0Y2hPcHRpb25zLFxuICAgICAgICAgICAgICAgIGNhY2hlZFJlc3BvbnNlLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IGVmZmVjdGl2ZVJlcXVlc3QsXG4gICAgICAgICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgICAgICB9KSkgfHwgdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYWNoZWRSZXNwb25zZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHV0cyBhIHJlcXVlc3QvcmVzcG9uc2UgcGFpciBpbiB0aGUgY2FjaGUgKGFuZCBpbnZva2VzIGFueSBhcHBsaWNhYmxlXG4gICAgICogcGx1Z2luIGNhbGxiYWNrIG1ldGhvZHMpIHVzaW5nIHRoZSBgY2FjaGVOYW1lYCBhbmQgYHBsdWdpbnNgIGRlZmluZWQgb25cbiAgICAgKiB0aGUgc3RyYXRlZ3kgb2JqZWN0LlxuICAgICAqXG4gICAgICogVGhlIGZvbGxvd2luZyBwbHVnaW4gbGlmZWN5Y2xlIG1ldGhvZHMgYXJlIGludm9rZWQgd2hlbiB1c2luZyB0aGlzIG1ldGhvZDpcbiAgICAgKiAtIGNhY2hlS2V5V2lsbEJ5VXNlZCgpXG4gICAgICogLSBjYWNoZVdpbGxVcGRhdGUoKVxuICAgICAqIC0gY2FjaGVEaWRVcGRhdGUoKVxuICAgICAqXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fHN0cmluZ30ga2V5IFRoZSByZXF1ZXN0IG9yIFVSTCB0byB1c2UgYXMgdGhlIGNhY2hlIGtleS5cbiAgICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNwb25zZSBUaGUgcmVzcG9uc2UgdG8gY2FjaGUuXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn0gYGZhbHNlYCBpZiBhIGNhY2hlV2lsbFVwZGF0ZSBjYXVzZWQgdGhlIHJlc3BvbnNlXG4gICAgICogbm90IGJlIGNhY2hlZCwgYW5kIGB0cnVlYCBvdGhlcndpc2UuXG4gICAgICovXG4gICAgYXN5bmMgY2FjaGVQdXQoa2V5LCByZXNwb25zZSkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gdG9SZXF1ZXN0KGtleSk7XG4gICAgICAgIC8vIFJ1biBpbiB0aGUgbmV4dCB0YXNrIHRvIGF2b2lkIGJsb2NraW5nIG90aGVyIGNhY2hlIHJlYWRzLlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdzNjL1NlcnZpY2VXb3JrZXIvaXNzdWVzLzEzOTdcbiAgICAgICAgYXdhaXQgdGltZW91dCgwKTtcbiAgICAgICAgY29uc3QgZWZmZWN0aXZlUmVxdWVzdCA9IGF3YWl0IHRoaXMuZ2V0Q2FjaGVLZXkocmVxdWVzdCwgJ3dyaXRlJyk7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoZWZmZWN0aXZlUmVxdWVzdC5tZXRob2QgJiYgZWZmZWN0aXZlUmVxdWVzdC5tZXRob2QgIT09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFdvcmtib3hFcnJvcignYXR0ZW1wdC10by1jYWNoZS1ub24tZ2V0LXJlcXVlc3QnLCB7XG4gICAgICAgICAgICAgICAgICAgIHVybDogZ2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IGVmZmVjdGl2ZVJlcXVlc3QubWV0aG9kLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWUvd29ya2JveC9pc3N1ZXMvMjgxOFxuICAgICAgICAgICAgY29uc3QgdmFyeSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdWYXJ5Jyk7XG4gICAgICAgICAgICBpZiAodmFyeSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgVGhlIHJlc3BvbnNlIGZvciAke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0gYCArXG4gICAgICAgICAgICAgICAgICAgIGBoYXMgYSAnVmFyeTogJHt2YXJ5fScgaGVhZGVyLiBgICtcbiAgICAgICAgICAgICAgICAgICAgYENvbnNpZGVyIHNldHRpbmcgdGhlIHtpZ25vcmVWYXJ5OiB0cnVlfSBvcHRpb24gb24geW91ciBzdHJhdGVneSBgICtcbiAgICAgICAgICAgICAgICAgICAgYHRvIGVuc3VyZSBjYWNoZSBtYXRjaGluZyBhbmQgZGVsZXRpb24gd29ya3MgYXMgZXhwZWN0ZWQuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZXJyb3IoYENhbm5vdCBjYWNoZSBub24tZXhpc3RlbnQgcmVzcG9uc2UgZm9yIGAgK1xuICAgICAgICAgICAgICAgICAgICBgJyR7Z2V0RnJpZW5kbHlVUkwoZWZmZWN0aXZlUmVxdWVzdC51cmwpfScuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgV29ya2JveEVycm9yKCdjYWNoZS1wdXQtd2l0aC1uby1yZXNwb25zZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6IGdldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlVG9DYWNoZSA9IGF3YWl0IHRoaXMuX2Vuc3VyZVJlc3BvbnNlU2FmZVRvQ2FjaGUocmVzcG9uc2UpO1xuICAgICAgICBpZiAoIXJlc3BvbnNlVG9DYWNoZSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoYFJlc3BvbnNlICcke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0nIGAgK1xuICAgICAgICAgICAgICAgICAgICBgd2lsbCBub3QgYmUgY2FjaGVkLmAsIHJlc3BvbnNlVG9DYWNoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBjYWNoZU5hbWUsIG1hdGNoT3B0aW9ucyB9ID0gdGhpcy5fc3RyYXRlZ3k7XG4gICAgICAgIGNvbnN0IGNhY2hlID0gYXdhaXQgc2VsZi5jYWNoZXMub3BlbihjYWNoZU5hbWUpO1xuICAgICAgICBjb25zdCBoYXNDYWNoZVVwZGF0ZUNhbGxiYWNrID0gdGhpcy5oYXNDYWxsYmFjaygnY2FjaGVEaWRVcGRhdGUnKTtcbiAgICAgICAgY29uc3Qgb2xkUmVzcG9uc2UgPSBoYXNDYWNoZVVwZGF0ZUNhbGxiYWNrID8gYXdhaXQgY2FjaGVNYXRjaElnbm9yZVBhcmFtcyhcbiAgICAgICAgLy8gVE9ETyhwaGlsaXB3YWx0b24pOiB0aGUgYF9fV0JfUkVWSVNJT05fX2AgcGFyYW0gaXMgYSBwcmVjYWNoaW5nXG4gICAgICAgIC8vIGZlYXR1cmUuIENvbnNpZGVyIGludG8gd2F5cyB0byBvbmx5IGFkZCB0aGlzIGJlaGF2aW9yIGlmIHVzaW5nXG4gICAgICAgIC8vIHByZWNhY2hpbmcuXG4gICAgICAgIGNhY2hlLCBlZmZlY3RpdmVSZXF1ZXN0LmNsb25lKCksIFsnX19XQl9SRVZJU0lPTl9fJ10sIG1hdGNoT3B0aW9ucykgOlxuICAgICAgICAgICAgbnVsbDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgVXBkYXRpbmcgdGhlICcke2NhY2hlTmFtZX0nIGNhY2hlIHdpdGggYSBuZXcgUmVzcG9uc2UgYCArXG4gICAgICAgICAgICAgICAgYGZvciAke2dldEZyaWVuZGx5VVJMKGVmZmVjdGl2ZVJlcXVlc3QudXJsKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGNhY2hlLnB1dChlZmZlY3RpdmVSZXF1ZXN0LCBoYXNDYWNoZVVwZGF0ZUNhbGxiYWNrID9cbiAgICAgICAgICAgICAgICByZXNwb25zZVRvQ2FjaGUuY2xvbmUoKSA6IHJlc3BvbnNlVG9DYWNoZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NRXhjZXB0aW9uI2V4Y2VwdGlvbi1RdW90YUV4Y2VlZGVkRXJyb3JcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ1F1b3RhRXhjZWVkZWRFcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZXhlY3V0ZVF1b3RhRXJyb3JDYWxsYmFja3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiB0aGlzLml0ZXJhdGVDYWxsYmFja3MoJ2NhY2hlRGlkVXBkYXRlJykpIHtcbiAgICAgICAgICAgIGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICBjYWNoZU5hbWUsXG4gICAgICAgICAgICAgICAgb2xkUmVzcG9uc2UsXG4gICAgICAgICAgICAgICAgbmV3UmVzcG9uc2U6IHJlc3BvbnNlVG9DYWNoZS5jbG9uZSgpLFxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IGVmZmVjdGl2ZVJlcXVlc3QsXG4gICAgICAgICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHRoZSBsaXN0IG9mIHBsdWdpbnMgZm9yIHRoZSBgY2FjaGVLZXlXaWxsQmVVc2VkYCBjYWxsYmFjaywgYW5kXG4gICAgICogZXhlY3V0ZXMgYW55IG9mIHRob3NlIGNhbGxiYWNrcyBmb3VuZCBpbiBzZXF1ZW5jZS4gVGhlIGZpbmFsIGBSZXF1ZXN0YFxuICAgICAqIG9iamVjdCByZXR1cm5lZCBieSB0aGUgbGFzdCBwbHVnaW4gaXMgdHJlYXRlZCBhcyB0aGUgY2FjaGUga2V5IGZvciBjYWNoZVxuICAgICAqIHJlYWRzIGFuZC9vciB3cml0ZXMuIElmIG5vIGBjYWNoZUtleVdpbGxCZVVzZWRgIHBsdWdpbiBjYWxsYmFja3MgaGF2ZVxuICAgICAqIGJlZW4gcmVnaXN0ZXJlZCwgdGhlIHBhc3NlZCByZXF1ZXN0IGlzIHJldHVybmVkIHVubW9kaWZpZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxdWVzdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtb2RlXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxSZXF1ZXN0Pn1cbiAgICAgKi9cbiAgICBhc3luYyBnZXRDYWNoZUtleShyZXF1ZXN0LCBtb2RlKSB7XG4gICAgICAgIGlmICghdGhpcy5fY2FjaGVLZXlzW21vZGVdKSB7XG4gICAgICAgICAgICBsZXQgZWZmZWN0aXZlUmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuaXRlcmF0ZUNhbGxiYWNrcygnY2FjaGVLZXlXaWxsQmVVc2VkJykpIHtcbiAgICAgICAgICAgICAgICBlZmZlY3RpdmVSZXF1ZXN0ID0gdG9SZXF1ZXN0KGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZSxcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogZWZmZWN0aXZlUmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHRoaXMuZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIC8vIHBhcmFtcyBoYXMgYSB0eXBlIGFueSBjYW4ndCBjaGFuZ2UgcmlnaHQgbm93LlxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5c1ttb2RlXSA9IGVmZmVjdGl2ZVJlcXVlc3Q7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlS2V5c1ttb2RlXTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBzdHJhdGVneSBoYXMgYXQgbGVhc3Qgb25lIHBsdWdpbiB3aXRoIHRoZSBnaXZlblxuICAgICAqIGNhbGxiYWNrLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNhbGxiYWNrIHRvIGNoZWNrIGZvci5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgICAqL1xuICAgIGhhc0NhbGxiYWNrKG5hbWUpIHtcbiAgICAgICAgZm9yIChjb25zdCBwbHVnaW4gb2YgdGhpcy5fc3RyYXRlZ3kucGx1Z2lucykge1xuICAgICAgICAgICAgaWYgKG5hbWUgaW4gcGx1Z2luKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSdW5zIGFsbCBwbHVnaW4gY2FsbGJhY2tzIG1hdGNoaW5nIHRoZSBnaXZlbiBuYW1lLCBpbiBvcmRlciwgcGFzc2luZyB0aGVcbiAgICAgKiBnaXZlbiBwYXJhbSBvYmplY3QgKG1lcmdlZCBpdGggdGhlIGN1cnJlbnQgcGx1Z2luIHN0YXRlKSBhcyB0aGUgb25seVxuICAgICAqIGFyZ3VtZW50LlxuICAgICAqXG4gICAgICogTm90ZTogc2luY2UgdGhpcyBtZXRob2QgcnVucyBhbGwgcGx1Z2lucywgaXQncyBub3Qgc3VpdGFibGUgZm9yIGNhc2VzXG4gICAgICogd2hlcmUgdGhlIHJldHVybiB2YWx1ZSBvZiBhIGNhbGxiYWNrIG5lZWRzIHRvIGJlIGFwcGxpZWQgcHJpb3IgdG8gY2FsbGluZ1xuICAgICAqIHRoZSBuZXh0IGNhbGxiYWNrLiBTZWVcbiAgICAgKiBbYGl0ZXJhdGVDYWxsYmFja3MoKWBde0BsaW5rIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyI2l0ZXJhdGVDYWxsYmFja3N9XG4gICAgICogYmVsb3cgZm9yIGhvdyB0byBoYW5kbGUgdGhhdCBjYXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGNhbGxiYWNrIHRvIHJ1biB3aXRoaW4gZWFjaCBwbHVnaW4uXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtIFRoZSBvYmplY3QgdG8gcGFzcyBhcyB0aGUgZmlyc3QgKGFuZCBvbmx5KSBwYXJhbVxuICAgICAqICAgICB3aGVuIGV4ZWN1dGluZyBlYWNoIGNhbGxiYWNrLiBUaGlzIG9iamVjdCB3aWxsIGJlIG1lcmdlZCB3aXRoIHRoZVxuICAgICAqICAgICBjdXJyZW50IHBsdWdpbiBzdGF0ZSBwcmlvciB0byBjYWxsYmFjayBleGVjdXRpb24uXG4gICAgICovXG4gICAgYXN5bmMgcnVuQ2FsbGJhY2tzKG5hbWUsIHBhcmFtKSB7XG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKG5hbWUpKSB7XG4gICAgICAgICAgICAvLyBUT0RPKHBoaWxpcHdhbHRvbik6IG5vdCBzdXJlIHdoeSBgYW55YCBpcyBuZWVkZWQuIEl0IHNlZW1zIGxpa2VcbiAgICAgICAgICAgIC8vIHRoaXMgc2hvdWxkIHdvcmsgd2l0aCBgYXMgV29ya2JveFBsdWdpbkNhbGxiYWNrUGFyYW1bQ11gLlxuICAgICAgICAgICAgYXdhaXQgY2FsbGJhY2socGFyYW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEFjY2VwdHMgYSBjYWxsYmFjayBhbmQgcmV0dXJucyBhbiBpdGVyYWJsZSBvZiBtYXRjaGluZyBwbHVnaW4gY2FsbGJhY2tzLFxuICAgICAqIHdoZXJlIGVhY2ggY2FsbGJhY2sgaXMgd3JhcHBlZCB3aXRoIHRoZSBjdXJyZW50IGhhbmRsZXIgc3RhdGUgKGkuZS4gd2hlblxuICAgICAqIHlvdSBjYWxsIGVhY2ggY2FsbGJhY2ssIHdoYXRldmVyIG9iamVjdCBwYXJhbWV0ZXIgeW91IHBhc3MgaXQgd2lsbFxuICAgICAqIGJlIG1lcmdlZCB3aXRoIHRoZSBwbHVnaW4ncyBjdXJyZW50IHN0YXRlKS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIGZvIHRoZSBjYWxsYmFjayB0byBydW5cbiAgICAgKiBAcmV0dXJuIHtBcnJheTxGdW5jdGlvbj59XG4gICAgICovXG4gICAgKml0ZXJhdGVDYWxsYmFja3MobmFtZSkge1xuICAgICAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiB0aGlzLl9zdHJhdGVneS5wbHVnaW5zKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBsdWdpbltuYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5fcGx1Z2luU3RhdGVNYXAuZ2V0KHBsdWdpbik7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVmdWxDYWxsYmFjayA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZWZ1bFBhcmFtID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwYXJhbSksIHsgc3RhdGUgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8ocGhpbGlwd2FsdG9uKTogbm90IHN1cmUgd2h5IGBhbnlgIGlzIG5lZWRlZC4gSXQgc2VlbXMgbGlrZVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHNob3VsZCB3b3JrIHdpdGggYGFzIFdvcmtib3hQbHVnaW5DYWxsYmFja1BhcmFtW0NdYC5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBsdWdpbltuYW1lXShzdGF0ZWZ1bFBhcmFtKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHlpZWxkIHN0YXRlZnVsQ2FsbGJhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogQWRkcyBhIHByb21pc2UgdG8gdGhlXG4gICAgICogW2V4dGVuZCBsaWZldGltZSBwcm9taXNlc117QGxpbmsgaHR0cHM6Ly93M2MuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvI2V4dGVuZGFibGVldmVudC1leHRlbmQtbGlmZXRpbWUtcHJvbWlzZXN9XG4gICAgICogb2YgdGhlIGV2ZW50IGV2ZW50IGFzc29jaWF0ZWQgd2l0aCB0aGUgcmVxdWVzdCBiZWluZyBoYW5kbGVkICh1c3VhbGx5IGFcbiAgICAgKiBgRmV0Y2hFdmVudGApLlxuICAgICAqXG4gICAgICogTm90ZTogeW91IGNhbiBhd2FpdFxuICAgICAqIFtgZG9uZVdhaXRpbmcoKWBde0BsaW5rIG1vZHVsZTp3b3JrYm94LXN0cmF0ZWdpZXMuU3RyYXRlZ3lIYW5kbGVyfmRvbmVXYWl0aW5nfVxuICAgICAqIHRvIGtub3cgd2hlbiBhbGwgYWRkZWQgcHJvbWlzZXMgaGF2ZSBzZXR0bGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQcm9taXNlfSBwcm9taXNlIEEgcHJvbWlzZSB0byBhZGQgdG8gdGhlIGV4dGVuZCBsaWZldGltZSBwcm9taXNlc1xuICAgICAqICAgICBvZiB0aGUgZXZlbnQgdGhhdCB0cmlnZ2VyZWQgdGhlIHJlcXVlc3QuXG4gICAgICovXG4gICAgd2FpdFVudGlsKHByb21pc2UpIHtcbiAgICAgICAgdGhpcy5fZXh0ZW5kTGlmZXRpbWVQcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBvbmNlIGFsbCBwcm9taXNlcyBwYXNzZWQgdG9cbiAgICAgKiBbYHdhaXRVbnRpbCgpYF17QGxpbmsgbW9kdWxlOndvcmtib3gtc3RyYXRlZ2llcy5TdHJhdGVneUhhbmRsZXJ+d2FpdFVudGlsfVxuICAgICAqIGhhdmUgc2V0dGxlZC5cbiAgICAgKlxuICAgICAqIE5vdGU6IGFueSB3b3JrIGRvbmUgYWZ0ZXIgYGRvbmVXYWl0aW5nKClgIHNldHRsZXMgc2hvdWxkIGJlIG1hbnVhbGx5XG4gICAgICogcGFzc2VkIHRvIGFuIGV2ZW50J3MgYHdhaXRVbnRpbCgpYCBtZXRob2QgKG5vdCB0aGlzIGhhbmRsZXInc1xuICAgICAqIGB3YWl0VW50aWwoKWAgbWV0aG9kKSwgb3RoZXJ3aXNlIHRoZSBzZXJ2aWNlIHdvcmtlciB0aHJlYWQgbXkgYmUga2lsbGVkXG4gICAgICogcHJpb3IgdG8geW91ciB3b3JrIGNvbXBsZXRpbmcuXG4gICAgICovXG4gICAgYXN5bmMgZG9uZVdhaXRpbmcoKSB7XG4gICAgICAgIGxldCBwcm9taXNlO1xuICAgICAgICB3aGlsZSAocHJvbWlzZSA9IHRoaXMuX2V4dGVuZExpZmV0aW1lUHJvbWlzZXMuc2hpZnQoKSkge1xuICAgICAgICAgICAgYXdhaXQgcHJvbWlzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdG9wcyBydW5uaW5nIHRoZSBzdHJhdGVneSBhbmQgaW1tZWRpYXRlbHkgcmVzb2x2ZXMgYW55IHBlbmRpbmdcbiAgICAgKiBgd2FpdFVudGlsKClgIHByb21pc2VzLlxuICAgICAqL1xuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJEZWZlcnJlZC5yZXNvbHZlKG51bGwpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIGNhbGwgY2FjaGVXaWxsVXBkYXRlIG9uIHRoZSBhdmFpbGFibGUgcGx1Z2lucyAob3IgdXNlXG4gICAgICogc3RhdHVzID09PSAyMDApIHRvIGRldGVybWluZSBpZiB0aGUgUmVzcG9uc2UgaXMgc2FmZSBhbmQgdmFsaWQgdG8gY2FjaGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3R9IG9wdGlvbnMucmVxdWVzdFxuICAgICAqIEBwYXJhbSB7UmVzcG9uc2V9IG9wdGlvbnMucmVzcG9uc2VcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFJlc3BvbnNlfHVuZGVmaW5lZD59XG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGFzeW5jIF9lbnN1cmVSZXNwb25zZVNhZmVUb0NhY2hlKHJlc3BvbnNlKSB7XG4gICAgICAgIGxldCByZXNwb25zZVRvQ2FjaGUgPSByZXNwb25zZTtcbiAgICAgICAgbGV0IHBsdWdpbnNVc2VkID0gZmFsc2U7XG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5pdGVyYXRlQ2FsbGJhY2tzKCdjYWNoZVdpbGxVcGRhdGUnKSkge1xuICAgICAgICAgICAgcmVzcG9uc2VUb0NhY2hlID0gKGF3YWl0IGNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiB0aGlzLnJlcXVlc3QsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IHJlc3BvbnNlVG9DYWNoZSxcbiAgICAgICAgICAgICAgICBldmVudDogdGhpcy5ldmVudCxcbiAgICAgICAgICAgIH0pKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICBwbHVnaW5zVXNlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlVG9DYWNoZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghcGx1Z2luc1VzZWQpIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUgJiYgcmVzcG9uc2VUb0NhY2hlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUb0NhY2hlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VUb0NhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVRvQ2FjaGUuc3RhdHVzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLndhcm4oYFRoZSByZXNwb25zZSBmb3IgJyR7dGhpcy5yZXF1ZXN0LnVybH0nIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgaXMgYW4gb3BhcXVlIHJlc3BvbnNlLiBUaGUgY2FjaGluZyBzdHJhdGVneSB0aGF0IHlvdSdyZSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHVzaW5nIHdpbGwgbm90IGNhY2hlIG9wYXF1ZSByZXNwb25zZXMgYnkgZGVmYXVsdC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZyhgVGhlIHJlc3BvbnNlIGZvciAnJHt0aGlzLnJlcXVlc3QudXJsfScgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGByZXR1cm5lZCBhIHN0YXR1cyBjb2RlIG9mICcke3Jlc3BvbnNlLnN0YXR1c30nIGFuZCB3b24ndCBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGJlIGNhY2hlZCBhcyBhIHJlc3VsdC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2VUb0NhY2hlO1xuICAgIH1cbn1cbmV4cG9ydCB7IFN0cmF0ZWd5SGFuZGxlciB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyBAdHMtaWdub3JlXG50cnkge1xuICAgIHNlbGZbJ3dvcmtib3g6c3RyYXRlZ2llczo2LjIuNCddICYmIF8oKTtcbn1cbmNhdGNoIChlKSB7IH1cbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IENhY2hlRmlyc3QgfSBmcm9tICcuL0NhY2hlRmlyc3QuanMnO1xuaW1wb3J0IHsgQ2FjaGVPbmx5IH0gZnJvbSAnLi9DYWNoZU9ubHkuanMnO1xuaW1wb3J0IHsgTmV0d29ya0ZpcnN0IH0gZnJvbSAnLi9OZXR3b3JrRmlyc3QuanMnO1xuaW1wb3J0IHsgTmV0d29ya09ubHkgfSBmcm9tICcuL05ldHdvcmtPbmx5LmpzJztcbmltcG9ydCB7IFN0YWxlV2hpbGVSZXZhbGlkYXRlIH0gZnJvbSAnLi9TdGFsZVdoaWxlUmV2YWxpZGF0ZS5qcyc7XG5pbXBvcnQgeyBTdHJhdGVneSB9IGZyb20gJy4vU3RyYXRlZ3kuanMnO1xuaW1wb3J0IHsgU3RyYXRlZ3lIYW5kbGVyIH0gZnJvbSAnLi9TdHJhdGVneUhhbmRsZXIuanMnO1xuaW1wb3J0ICcuL192ZXJzaW9uLmpzJztcbi8qKlxuICogVGhlcmUgYXJlIGNvbW1vbiBjYWNoaW5nIHN0cmF0ZWdpZXMgdGhhdCBtb3N0IHNlcnZpY2Ugd29ya2VycyB3aWxsIG5lZWRcbiAqIGFuZCB1c2UuIFRoaXMgbW9kdWxlIHByb3ZpZGVzIHNpbXBsZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlc2Ugc3RyYXRlZ2llcy5cbiAqXG4gKiBAbW9kdWxlIHdvcmtib3gtc3RyYXRlZ2llc1xuICovXG5leHBvcnQgeyBDYWNoZUZpcnN0LCBDYWNoZU9ubHksIE5ldHdvcmtGaXJzdCwgTmV0d29ya09ubHksIFN0YWxlV2hpbGVSZXZhbGlkYXRlLCBTdHJhdGVneSwgU3RyYXRlZ3lIYW5kbGVyLCB9O1xuIiwiLypcbiAgQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuXG4gIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZVxuICBsaWNlbnNlIHRoYXQgY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgb3IgYXRcbiAgaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVQuXG4qL1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5leHBvcnQgY29uc3QgY2FjaGVPa0FuZE9wYXF1ZVBsdWdpbiA9IHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdmFsaWQgcmVzcG9uc2UgKHRvIGFsbG93IGNhY2hpbmcpIGlmIHRoZSBzdGF0dXMgaXMgMjAwIChPSykgb3JcbiAgICAgKiAwIChvcGFxdWUpLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge1Jlc3BvbnNlfSBvcHRpb25zLnJlc3BvbnNlXG4gICAgICogQHJldHVybiB7UmVzcG9uc2V8bnVsbH1cbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgY2FjaGVXaWxsVXBkYXRlOiBhc3luYyAoeyByZXNwb25zZSB9KSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fCByZXNwb25zZS5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxufTtcbiIsIi8qXG4gIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcblxuICBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGVcbiAgbGljZW5zZSB0aGF0IGNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIG9yIGF0XG4gIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlULlxuKi9cbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3dvcmtib3gtY29yZS9fcHJpdmF0ZS9sb2dnZXIuanMnO1xuaW1wb3J0IHsgZ2V0RnJpZW5kbHlVUkwgfSBmcm9tICd3b3JrYm94LWNvcmUvX3ByaXZhdGUvZ2V0RnJpZW5kbHlVUkwuanMnO1xuaW1wb3J0ICcuLi9fdmVyc2lvbi5qcyc7XG5leHBvcnQgY29uc3QgbWVzc2FnZXMgPSB7XG4gICAgc3RyYXRlZ3lTdGFydDogKHN0cmF0ZWd5TmFtZSwgcmVxdWVzdCkgPT4gYFVzaW5nICR7c3RyYXRlZ3lOYW1lfSB0byByZXNwb25kIHRvICcke2dldEZyaWVuZGx5VVJMKHJlcXVlc3QudXJsKX0nYCxcbiAgICBwcmludEZpbmFsUmVzcG9uc2U6IChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cENvbGxhcHNlZChgVmlldyB0aGUgZmluYWwgcmVzcG9uc2UgaGVyZS5gKTtcbiAgICAgICAgICAgIGxvZ2dlci5sb2cocmVzcG9uc2UgfHwgJ1tObyByZXNwb25zZSByZXR1cm5lZF0nKTtcbiAgICAgICAgICAgIGxvZ2dlci5ncm91cEVuZCgpO1xuICAgICAgICB9XG4gICAgfSxcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL2luZGV4LmpzJzsiLCJleHBvcnQgKiBmcm9tICcuL2luZGV4LmpzJzsiLCJleHBvcnQgKiBmcm9tICcuL2luZGV4LmpzJzsiLCJleHBvcnQgKiBmcm9tICcuL2luZGV4LmpzJzsiLCJleHBvcnQgKiBmcm9tICcuL2luZGV4LmpzJzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0aWYgKGNhY2hlZE1vZHVsZS5lcnJvciAhPT0gdW5kZWZpbmVkKSB0aHJvdyBjYWNoZWRNb2R1bGUuZXJyb3I7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdHZhciB0aHJldyA9IHRydWU7XG5cdHRyeSB7XG5cdFx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0dGhyZXcgPSBmYWxzZTtcblx0fSBmaW5hbGx5IHtcblx0XHRpZih0aHJldykgZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdH1cblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obWQgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0bW9kdWxlID0gT2JqZWN0LmNyZWF0ZShtb2R1bGUpO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0c2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignRVMgTW9kdWxlcyBtYXkgbm90IGFzc2lnbiBtb2R1bGUuZXhwb3J0cyBvciBleHBvcnRzLiosIFVzZSBFU00gZXhwb3J0IHN5bnRheCwgaW5zdGVhZDogJyArIG1vZHVsZS5pZCk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaWYgKF9fd2VicGFja19yZXF1aXJlX18uaSkge1xuX193ZWJwYWNrX3JlcXVpcmVfXy5pLnB1c2goZnVuY3Rpb24ob3B0aW9ucykge1xuXHR2YXIgb3JpZ2luYWxGYWN0b3J5ID0gb3B0aW9ucy5mYWN0b3J5O1xuXHRvcHRpb25zLmZhY3RvcnkgPSBmdW5jdGlvbihtb2R1bGVPYmplY3QsIG1vZHVsZUV4cG9ydHMsIHdlYnBhY2tSZXF1aXJlKSB7XG5cdFx0dmFyIGhhc1JlZnJlc2ggPSB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiAhIXNlbGYuJFJlZnJlc2hJbnRlcmNlcHRNb2R1bGVFeGVjdXRpb24kO1xuXHRcdHZhciBjbGVhbnVwID0gaGFzUmVmcmVzaCA/IHNlbGYuJFJlZnJlc2hJbnRlcmNlcHRNb2R1bGVFeGVjdXRpb24kKG1vZHVsZU9iamVjdC5pZCkgOiBmdW5jdGlvbigpIHt9O1xuXHRcdHRyeSB7XG5cdFx0XHRvcmlnaW5hbEZhY3RvcnkuY2FsbCh0aGlzLCBtb2R1bGVPYmplY3QsIG1vZHVsZUV4cG9ydHMsIHdlYnBhY2tSZXF1aXJlKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0Y2xlYW51cCgpO1xuXHRcdH1cblx0fVxufSlcbn0iLCJcblxuLy8gbm9vcCBmbnMgdG8gcHJldmVudCBydW50aW1lIGVycm9ycyBkdXJpbmcgaW5pdGlhbGl6YXRpb25cbmlmICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRzZWxmLiRSZWZyZXNoUmVnJCA9IGZ1bmN0aW9uICgpIHt9O1xuXHRzZWxmLiRSZWZyZXNoU2lnJCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKHR5cGUpIHtcblx0XHRcdHJldHVybiB0eXBlO1xuXHRcdH07XG5cdH07XG59IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zZXJ2aWNlLXdvcmtlci5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6WyJza2lwV2FpdGluZyIsImNsaWVudHNDbGFpbSIsIkV4cGlyYXRpb25QbHVnaW4iLCJOZXR3b3JrT25seSIsIk5ldHdvcmtGaXJzdCIsIkNhY2hlRmlyc3QiLCJTdGFsZVdoaWxlUmV2YWxpZGF0ZSIsInJlZ2lzdGVyUm91dGUiLCJzZXREZWZhdWx0SGFuZGxlciIsInNldENhdGNoSGFuZGxlciIsIm1hdGNoUHJlY2FjaGUiLCJwcmVjYWNoZUFuZFJvdXRlIiwiY2xlYW51cE91dGRhdGVkQ2FjaGVzIiwiV0JfTUFOSUZFU1QiLCJzZWxmIiwiX19XQl9NQU5JRkVTVCIsInB1c2giLCJ1cmwiLCJyZXZpc2lvbiIsImNhY2hlTmFtZSIsInBsdWdpbnMiLCJtYXhFbnRyaWVzIiwibWF4QWdlU2Vjb25kcyIsInB1cmdlT25RdW90YUVycm9yIiwibmV0d29ya1RpbWVvdXRTZWNvbmRzIiwiZXZlbnQiLCJyZXF1ZXN0IiwiZGVzdGluYXRpb24iLCJSZXNwb25zZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==