var cmjson = {
	computed: {		
		json: function() {
			return JSON.stringify(this.$data, null, 4);
		}
		, string: function() {
			return JSON.stringify(this.$data);
		}
		, data: function() {
			return JSON.parse(JSON.stringify(this.$data));
		}
	}
}

try {
	module.exports.default = cmjson 
} catch(ex) {
	
}
