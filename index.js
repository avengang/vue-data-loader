module.exports = function(source) {
	var moduleName = this.resourcePath.replace(__dirname.split('node_modules')[0], '').replace(/\//g, "_").replace(/\\/g, "_").replace(/.js$/, "").replace(/.vue$/, "")
	var scriptIndex = source.lastIndexOf('<script')
	if(scriptIndex !== -1) { // 有<script>
		var sourcepart1 = source.substring(0, scriptIndex)
		var sourcepart2 = source.substr(scriptIndex)
		if(sourcepart2.replace(/\s*/gm, '').indexOf('exportdefault') !== -1) { // 有export default
			sourcepart2 = sourcepart2.replace(/export[\s]*default/gm, 'export default new window.VueData(').replace(/}[\s]*[,|;]?[\s]*<\/script>/, '})</script>')
		} else { // 没有export default
      var scriptRightIndex = sourcepart2.indexOf('>')
      var sourcepart21 = sourcepart2.substring(0, scriptRightIndex)
      var sourcepart22 = sourcepart2.substr(scriptRightIndex)
			sourcepart22 = sourcepart22.replace('>', '>export default new window.VueData({').replace('</script>', '})</script>')
      sourcepart2 = sourcepart21 + sourcepart22
		}
		source = sourcepart1 + sourcepart2
	} else { // 没有<script>
		source = source + '<script>export default new window.VueData({})</script>'
	}
	source = source.replace(/new window.VueData\([\s]*\{/m, 'new window.VueData({viewname:"'+moduleName+'",')
  return source
};