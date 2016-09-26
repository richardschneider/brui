// require.js looks for the following global when initializing
var require = {
    baseUrl: ".",
    paths: {
        "bootstrap":            "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min",
        "jquery":               "https://code.jquery.com/jquery-3.1.1.min",
        "knockout":             "https://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min",
        "bridge":				"https://unpkg.com/bridge.js/dist/bridge.min",
        "cards":                "https://unpkg.com/cardsJS/dist/cards.min",
        "cards-ko":             "https://unpkg.com/cardsJS/dist/cards-ko.min",
        "crossroads":           "bower_modules/crossroads/dist/crossroads.min",
        "hasher":               "bower_modules/hasher/dist/js/hasher.min",
        "knockout-projections": "bower_modules/knockout-projections/dist/knockout-projections",
        "signals":              "bower_modules/js-signals/dist/signals.min",
        "text":                 "bower_modules/requirejs-text/text"
    },
    shim: {
        "bootstrap": { deps: ["jquery"] }
    }
};
