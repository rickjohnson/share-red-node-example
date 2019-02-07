module.exports = function(RED) {
  function SharePropertyMapper(config) {
    RED.nodes.createNode(this, config)
      var node = this

      this.in_property_name = config.inpropname;
      this.out_property_name = config.outpropname;
      this.in_work = config.inwork;
    node.on("input", function(msg) {
      // This is where the magic happens
	// msg.payload is the primary input, and whatever you pass to node.send() is the output
	
	//config = msg.config;
	//shareMapping = config.shareMapping;

	out_work = {};
	//TODO: Make input object a typed object to select
	//TODO: Add handling if an array of values
	//TODO: Add handling if a nested property e.g., obj.property.property
	if (node.in_property_name && node.out_property_name){	    
	    //straight mapping of properties
	    in_work = msg;
	    //if (in_work[node.in_property_name] && in_work[node.property_name].isArray()){
		//out_obj = [];
		//in_obj = in_work[node.property_name];
	    //}
	    //out_work[node.out_property_name].push(in_work[node.in_property_name]);
	    msg[node.out_property_name] = msg[node.in_property_name];
	    //msg[node.out_property_name] = out_work[node.out_property_name];
	    //msg.payload = in_work;
	}
	
	
	node.send(msg)
    })
  }
  RED.nodes.registerType("share-property-mapper", SharePropertyMapper)
}
