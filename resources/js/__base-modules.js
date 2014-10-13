(function($) {
	if (window.jspackager && jspackager.jsPath !== undefined && jspackager.devmode) {
		var curScript = jspackager.jsList["__base-modules"];
		if (curScript && curScript.length) {
			if ($ && window.sssl && $(document.scripts || 'script').filter('[src*="__base-modules.js"]')[$.fn.prop ? 'prop' : 'attr']('async')) {
				sssl($.map(curScript, function(src) {
					return jspackager.jsPath + src + '.js';
				}));
			} else {
				for (var j = 0, leng = curScript.length; j < leng; j++) {
					document.write('<script src="' + jspackager.jsPath + curScript[j] + '.js"><\/script>');
				}
			}
		}
	}
})(window.jQuery);
if (this.jspackager && !jspackager.devmode) {
	Reveal.initialize({
		width: 1280,
		height: 700,
		controls: !0,
		progress: !0,
		history: !0,
		center: !0,
		fragments: !0,
		overview: !0,
		transition: "zoom",
		transitionSpeed: "fast",
		backgroundTransition: "zoom",
		theme: Reveal.getQueryHash().theme,
		transition: Reveal.getQueryHash().transition || "default",
		dependencies: [{
			src: "js/vendor/libs/classList.js",
			condition: function() {
				return !document.body.classList
			}
		}, {
			src: "js/vendor/plugins/markdown/marked.js",
			condition: function() {
				return !!document.querySelector("[data-markdown]")
			}
		}, {
			src: "js/vendor/plugins/markdown/markdown.js",
			condition: function() {
				return !!document.querySelector("[data-markdown]")
			}
		}, {
			src: "js/vendor/plugins/highlight/highlight.js",
			async: !0,
			callback: function() {
				hljs.initHighlightingOnLoad()
			}
		}, {
			src: "js/vendor/plugins/zoom-js/zoom.js",
			async: !0,
			condition: function() {
				return !!document.body.classList
			}
		}, {
			src: "js/vendor/plugins/notes/notes.js",
			async: !0,
			condition: function() {
				return !!document.body.classList
			}
		}]
	});
}
