var cmgetset = {
	created: function() {
		if ( this.$el.hasAttribue('data-get-set') ) {
			if ( ! this.hasOwnProperty('id') ) {
				throw new Error('get-set mixins require an id property');
			}
			
			this.$options.getset = {
				instanceId: function() {
					var id = this.$props.id;
					if ( ! id ) id = "uniqueInstance";
					return id;
				}
				, element: function() {
					//this is a template element != vm.$el
					var selector = "#" + this.$options.name;
					return document.querySelector(selector);
				}
				, keys: function() {
					return Object.keys(this.$data);
				}
				, data: function() {
					var ret = {};
					
					var keys = this.keys();
					var model = this.$options.model();
					
					for ( var i = 0; i < keys.length; i++ ) {
						var key = keys[i];
						ret[key] = model[key];
					}
					return ret;
				}
				, get: function() {
					var iid = this.instanceId();
					var keys = this.keys();

					if ( ! this.element().data ) this.element().data = {};
					if ( ! this.element().data[iid] ) this.element().data[iid] = this.data();

					for ( var i = 0; i < keys.length; i++ ) {
						var key = keys[i];
						this[key] = this.element().data[iid][key];
					}
				}
				, set: function() {
					var iid = this.instanceId();
					
					var keys = Object.keys(this.$data);

					for ( var i = 0; i < keys.length; i++ ) {
						var key = keys[i];
						this.element().data[iid][key] = this[key];
					}
				}
			}
			
			this.$options.getset.get();
			
			this.$watch('id', this.$options.getset.get);
			this.$watch('$data', this.$options.getset.set, {deep: true });
		}
	}
}

try {
	module.exports.default = cmjson;
} catch(ex) {
	
}
