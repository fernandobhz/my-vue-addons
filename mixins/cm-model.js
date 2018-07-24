var cmmodel = {
	props: ['value']
	, created: function() {
		if ( this.object ) {
			this.object = this.value;
			
			this.$watch(
				'object'
				, function(value) {
					this.$emit('input', value)
				}
				, {
					deep: true
				}
			);
		}
		}
}

try {
	module.exports.default = cmmodel;
} catch(ex) {
	
}
