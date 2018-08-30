module.exports = function(source) {
	if(source.replace(/\s*/gm, '').indexOf('exportdefault') !== -1) {
		source = source.replace(/export[\s]*default/gm, 'export default new window.VueData(').replace('</script>', ')</script>')
	} else {
		if(source.replace(/\s*/gm, '').indexOf('<script>') !== -1) {
			source = source.replace('<script>', '<script>export default new window.VueData({').replace('</script>', '})</script>')
		} else {
			source = source + '<script>export default new window.VueData({})</script>'
		}
	}
  return source;
};