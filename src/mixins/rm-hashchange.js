var rmhaschange = {
	watch: {
		'$route': {
			deep: true
			, handler() { 
				webpack.vue.nextTick(function() {
					window.dispatchEvent(new HashChangeEvent("hashchange")) 
				});
			}
		}
	}
}


try {
	module.exports.default = rmhaschange;
} catch(ex) {
	
}
