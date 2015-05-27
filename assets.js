// assets to be used by the 'hapi-assets' module based on process.env.NODE_ENV
module.exports = {
    development: {
        js: ['/js/search.js'],
        css: ['/css/bootstrap-3.3.4.min.css','/css/font-awesome.min.css','/css/video-js.min.css'
        ,'/css/select2.min.css','/css/mystyle.css']
    },
    production: {
        js: ['js/scripts.js'],
        css: ['css/styles.css']
    }
}