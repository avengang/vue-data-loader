module.exports = function(source) {
	source = source.replace('@vue-data', ' new window.VueData').replace('</script>', ')</script>')
  return source;
};