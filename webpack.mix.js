const mix = require("laravel-mix")

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

//  scripts
mix.js("resources/js/app.js", "public/js").version()

// styles
// mix.sass("resources/sass/app.scss", "public/css")
mix.styles(
    [
        "node_modules/@mdi/font/css/materialdesignicons.css",
        "node_modules/vuetify/dist/vuetify.min.css"
    ],
    "public/css/app.css"
)

mix.copy("node_modules/@mdi/font/fonts", "public/fonts")
