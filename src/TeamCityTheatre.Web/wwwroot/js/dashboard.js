webpackJsonp([0],{

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export allViews */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectView; });
/* unused harmony export selectedViews */
/* unused harmony export getSelectedViewData */
/* unused harmony export selectedViewData */
/* unused harmony export getState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return state; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_dom_ajax__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_dom_ajax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_dom_ajax__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_defer__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_defer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_defer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_combineLatest__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_merge__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_repeat__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_repeat___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_repeat__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_startWith__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_startWith__);












// fetching the initial set of views
var allViews = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].defer(function () { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].ajax.getJSON("api/views"); });
// selecting a view
var selectedViewsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
var selectView = function (view) { return selectedViewsSubject.next(view); };
var selectedViews = selectedViewsSubject;
// fetching the data of a view
var getSelectedViewData = function (selectedViews) { return selectedViews.switchMap(function (selectedView) { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(null)
    .delay(3000)
    .mergeMap(function () { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].ajax.getJSON("api/viewdata/" + selectedView.id); })
    .repeat()
    .merge(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].ajax.getJSON("api/viewdata/" + selectedView.id)); }); };
var selectedViewData = getSelectedViewData(selectedViews);
var getState = function (allViews, selectedViews, selectedViewData) { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].combineLatest(allViews.startWith(null), selectedViews.startWith(null), selectedViewData.startWith(null), function (views, selectedView, viewData) {
    var s = {
        views: views,
        selectedView: selectedView,
        selectedViewData: viewData
    };
    return s;
}); };
var state = getState(allViews, selectedViews, selectedViewData);
//# sourceMappingURL=Dashboard.Core.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Dashboard_Core__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_parse__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_add_seconds__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_add_seconds___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_add_seconds__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_distance_in_words_to_now__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_distance_in_words_to_now___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_distance_in_words_to_now__);






/**Root dispatching component
 */
var Dashboard = function (props) {
    if (props.views === null)
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", null,
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("i", { className: "fa fa-spin fa-cog" }),
            " Loading views");
    if (props.selectedView === null)
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Views, { views: props.views });
    if (props.selectedViewData === null)
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", null,
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("i", { className: "fa fa-spin fa-cog" }),
            " Loading view data");
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(View, { view: props.selectedView, data: props.selectedViewData });
};
/**
 * List of views to choose from
 */
var Views = function (props) { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { id: "views" }, props.views.map(function (view) { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("a", { className: "btn btn-primary view", id: view.id, onClick: function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__Dashboard_Core__["b" /* selectView */])(view); } },
    view.name,
    " ",
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("span", { className: "badge" },
        view.tiles.length,
        " tiles"))); }))); };
/**
 * Details of a single view
 */
var View = function (props) { return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { id: props.view.id },
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { id: "tiles" },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "tiles-wrapper" }, props.data.tiles.map(function (tile) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Tile, { view: props.view, data: tile }); }))))); };
/**
 * A single tile of a view
 */
var Tile = function (props) {
    var buildStatus = __WEBPACK_IMPORTED_MODULE_2__Models__["a" /* BuildStatus */][props.data.combinedBuildStatus].toLowerCase();
    var height = "height-" + props.view.defaultNumberOfBranchesPerTile;
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { id: props.data.id, className: "tile " + buildStatus + " " + height + " col-xs-6 col-sm-4 col-md-3 col-lg-2" },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("h4", { className: "tile-title" }, props.data.label),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "tile-builds" }, props.data.builds.map(function (build) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Build, { build: build }); }))));
};
/**
 * A single build in a tile
 */
var Build = function (props) {
    var isFinished = props.build.state === "finished";
    var isRunning = props.build.state === "running";
    var isSuccess = props.build.status === __WEBPACK_IMPORTED_MODULE_2__Models__["a" /* BuildStatus */].Success;
    var buildStatus = __WEBPACK_IMPORTED_MODULE_2__Models__["a" /* BuildStatus */][props.build.status].toLowerCase();
    var percentageCompleted = isFinished ? 100 : props.build.percentageComplete;
    var progressBarTheme = isSuccess ? "progress-bar-success" : "progress-bar-danger";
    var progressBarAnimation = isRunning ? "progress-bar-striped active" : "";
    //const remaining = !!props.build.estimatedTotalSeconds && !!props.build.elapsedSeconds
    //  ? build.
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { id: props.build.id, className: "tile-build " + buildStatus },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "progress" },
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { className: "progress-bar " + progressBarTheme + " " + progressBarAnimation, style: { width: percentageCompleted + "%" } },
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("span", { className: "branch" }, props.build.branchName),
                isFinished ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(FinishDate, { build: props.build }) : null,
                isRunning ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(TimeRemaining, { build: props.build }) : null))));
};
var FinishDate = function (props) {
    var finishDate = __WEBPACK_IMPORTED_MODULE_3_date_fns_parse__(props.build.finishDate);
    var differenceWithNow = __WEBPACK_IMPORTED_MODULE_5_date_fns_distance_in_words_to_now__(finishDate, { includeSeconds: true, addSuffix: true });
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("span", { className: "execution-timestamp" }, "Finished: " + differenceWithNow));
};
var TimeRemaining = function (props) {
    var estimatedFinishDate = __WEBPACK_IMPORTED_MODULE_4_date_fns_add_seconds__(__WEBPACK_IMPORTED_MODULE_3_date_fns_parse__(props.build.startDate), props.build.estimatedTotalSeconds);
    var differenceWithNow = __WEBPACK_IMPORTED_MODULE_5_date_fns_distance_in_words_to_now__(estimatedFinishDate, { includeSeconds: true, addSuffix: true });
    return (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("span", { className: "remaining" }, "Estimated finish: " + differenceWithNow));
};
//# sourceMappingURL=Dashboard.Components.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dashboard_Components__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Dashboard_Core__ = __webpack_require__(27);




var root = document.getElementById("root");
__WEBPACK_IMPORTED_MODULE_3__Dashboard_Core__["a" /* state */].subscribe(function (s) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_2__Dashboard_Components__["a" /* Dashboard */], { views: s.views, selectedView: s.selectedView, selectedViewData: s.selectedViewData }), root); });
//# sourceMappingURL=Dashboard.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuildStatus; });
var BuildStatus;
(function (BuildStatus) {
    BuildStatus[BuildStatus["Unknown"] = 0] = "Unknown";
    BuildStatus[BuildStatus["Success"] = 1] = "Success";
    BuildStatus[BuildStatus["Failure"] = 2] = "Failure";
    BuildStatus[BuildStatus["Error"] = 3] = "Error";
})(BuildStatus || (BuildStatus = {}));
//# sourceMappingURL=Models.js.map

/***/ })

},[42]);