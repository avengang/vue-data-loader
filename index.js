module.exports = function(source) {
	var scriptIndex = source.lastIndexOf('<script>')
	if(scriptIndex !== -1) { // 有<script>
		var sourcepart1 = source.substring(0, scriptIndex)
		var sourcepart2 = source.substr(scriptIndex)
		
		if(sourcepart2.replace(/\s*/gm, '').indexOf('exportdefault') !== -1) { // 有export default
			sourcepart2 = sourcepart2.replace(/export[\s]*default/gm, 'export default new window.VueData(').replace('</script>', ')</script>')
		} else { // 没有export default
			sourcepart2 = sourcepart2.replace('<script>', '<script>export default new window.VueData({').replace('</script>', '})</script>')
		}
		source = sourcepart1 + sourcepart2
	} else { // 没有<script>
		source = source + '<script>export default new window.VueData({})</script>'
	}
  return source;
};