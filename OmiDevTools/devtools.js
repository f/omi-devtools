var getSelectedOmi = function() {
	const data = {__proto__: null}
	if ($0.props) data.props = $0.props
	if ($0.store && $0.store.data) data.data = $0.store.data
	if ($0.store) data.store = $0.store

	window.$o = data
	return data
}

chrome.devtools.panels.elements.createSidebarPane("Omi.js", function (sidebar) {
  function updateElementProperties() {
    sidebar.setExpression("(" + getSelectedOmi.toString() + ")()", 'Omi Element');
  }
  updateElementProperties();
  chrome.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);
});