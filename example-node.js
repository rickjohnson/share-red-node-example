module.exports = function(RED) {
  function ExampleNode(config) {
    RED.nodes.createNode(this, config)
    var node = this
    node.on("input", function(msg) {
      // This is where the magic happens
      // msg.payload is the primary input, and whatever you pass to node.send() is the output
      msg.payload = msg.payload.toLowerCase()
      node.send(msg)
    })
  }
  RED.nodes.registerType("example-node", ExampleNode)
}
