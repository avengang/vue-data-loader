module.exports = function(source) {
	source = source.replace(/export[\s]*default/gm, 'export default new window.VueData(').replace('</script>', ')</script>')
  return source;
};