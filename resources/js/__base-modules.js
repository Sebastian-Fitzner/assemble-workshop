(function($){if(window.jspackager && jspackager.jsPath !== undefined && jspackager.devmode){var curScript = jspackager.jsList["__base-modules"];if(curScript && curScript.length){if($ && window.sssl && $(document.scripts || 'script').filter('[src*="__base-modules.js"]')[$.fn.prop ? 'prop' : 'attr']('async')){sssl($.map(curScript, function(src){return jspackager.jsPath+src+'.js';}));} else {for(var j = 0, leng = curScript.length; j < leng; j++){document.write('<script src="'+jspackager.jsPath+curScript[j]+'.js"><\/script>');}}}}})(window.jQuery);if(this.jspackager && !jspackager.devmode) {Reveal.initialize({width:1280,height:700,controls:!0,progress:!0,history:!0,center:!0,theme:Reveal.getQueryHash().theme,transition:Reveal.getQueryHash().transition||"default",dependencies:[{src:"lib/js/classList.js",condition:function(){return!document.body.classList}},{src:"plugin/markdown/marked.js",condition:function(){return!!document.querySelector("[data-markdown]")}},{src:"plugin/markdown/markdown.js",condition:function(){return!!document.querySelector("[data-markdown]")}},{src:"plugin/highlight/highlight.js",async:!0,callback:function(){hljs.initHighlightingOnLoad()}},{src:"plugin/zoom-js/zoom.js",async:!0,condition:function(){return!!document.body.classList}},{src:"plugin/notes/notes.js",async:!0,condition:function(){return!!document.body.classList}}]});}