var cmuuid = {
	created() {
		let uuid = (function() {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
				var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
				return v.toString(16);
			});
		})();
		
		this.$set(this.$options, 'uuid', uuid);
	}
	, mounted() {
		if ( this.hasOwnProperty('uuid') ) this.uuid = this.$options.uuid;
	}
}


try {
	module.exports.default = cmuuid;
} catch(ex) {
	
}
