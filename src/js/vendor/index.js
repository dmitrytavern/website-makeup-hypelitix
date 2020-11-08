const devMode 	= process.env.NODE_ENV === 'development'



/*
* 	jQuery
* 	======
* 	GitHub: https://github.com/jquery/jquery
* 	Install: npm i jquery
* */

const $ = require('jquery')
window.$ = $
window.jQuery = $
if (devMode) console.log('[APP]: Add jQuery')




/*
* 	Bootstrap
* 	=========
* 	GitHub: https://github.com/twbs/bootstrap
* 	Install: npm install bootstrap
* 	Dep: popper.js, jQuery
* */

require('bootstrap/js/dist/dropdown')
// require('bootstrap/js/dist/collapse')
require('bootstrap/js/dist/modal')
if (devMode) console.log('[APP]: Add Bootstrap')