const mix = require("laravel-mix");

if (mix.inProduction()) {
    mix.options({
        terser: {
            terserOptions: {
                compress: {
                    drop_console: true
                }
            }
        }
    });

    mix.version();
}

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

mix.js("resources/js/main.js", "public/js").sass(
    "resources/sass/app.scss",
    "public/css"
);

mix.js("resources/js/admin.js", "public/js");
mix.js("resources/js/operaciones_grilla.js", "public/js");
