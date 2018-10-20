var getSelectedOmi = function () {
	const data = {__proto__: null}
	if ($0.props) data.props = $0.props
	if ($0.store && $0.store.data) data.storeData = $0.store.data
	if ($0.data) data.localData = $0.data
	if ($0.store) data.store = $0.store
	if ($0.css && typeof $0.css === 'function') data.style = $0.css()

	window.$o = data
	return data
}

var getSelectedOmiStyle = function () {
	if ($0.css && typeof $0.css === 'function') {
		const styles = {__proto__: null}
		Array.prototype.slice.apply($0.shadowRoot.styleSheets[0].cssRules)
			.forEach(x => { styles[x.selectorText] = x.cssText })
		return styles
	}
}

chrome.devtools.panels.elements.createSidebarPane("Omi.js", function (sidebar) {
  function updateElementProperties() {
    sidebar.setExpression("(" + getSelectedOmi.toString() + ")()", 'Omi Element');
  }
  updateElementProperties();
  chrome.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);
});

chrome.devtools.panels.elements.createSidebarPane("Omi.js Style", function (sidebar) {
  function updateElementProperties() {
    sidebar.setExpression("(" + getSelectedOmiStyle.toString() + ")()", 'Omi Style');
  }
  updateElementProperties();
  chrome.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);
});