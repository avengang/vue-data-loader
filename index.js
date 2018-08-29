module.exports = function(source) {
	if(source.indexOf('@vue-data') !== -1) {
		source = source.replace('@vue-data', ' new window.VueData(').replace('</script>', ')</script>')
	}
  return source;
};