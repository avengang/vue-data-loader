module.exports = function(source) {
	if(source.replace(/\s*/gm, '').indexOf('exportdefault') !== -1) {
		source = source.replace(/export[\s]*default/gm, 'export default new window.VueData(').replace('</script>', ')</script>')
	} else {
		source = source.replace('<script>', '<script>export default new window.VueData({').replace('</script>', '})</script>')
	}
  return source;
};