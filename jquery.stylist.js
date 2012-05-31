/** 
 * stylist - Runtime Stylesheet Creation
 * Copyright (c) 2012 DIY Co
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this 
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under 
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF 
 * ANY KIND, either express or implied. See the License for the specific language 
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@diy.org>
 */

;(function($) {
	"use strict";
	
	$.stylist = function() {
		var selector, property, rule;
		var action = 'apply';
		
		// load existing rules
		var $stylist  = $('#stylist');
		var rules     = $stylist.data('rules') || {};
		var rules_new = {};
		
		// parse arguments
		switch (arguments.length) {
			case 1:
				if (typeof arguments[0] === 'string') action = arguments[0];
				if (typeof arguments[0] === 'object') rules_new = arguments[0];
				break;
			case 2:
				rules_new = {};
				rules_new[arguments[0]] = arguments[1];
				break;
			default:
				return;
		}
		
		// merge rules
		for (selector in rules_new) {
			if (rules_new.hasOwnProperty(selector)) {
				if (rules.hasOwnProperty(selector)) {
					rules[selector] = $.extend(rules[selector], rules_new[selector]);
				} else {
					rules[selector] = rules_new[selector];
				}
			}
		}
		delete rules_new;
		
		if (action === 'reset') {
			$stylist.remove();
			return;
		}
		
		if (action === 'apply') {
			// generate css
			var lines = [];
			for (selector in rules) {
				if (rules.hasOwnProperty(selector)) {
					rule = rules[selector];
					var props = [];
					for (property in rule) {
						if (rule.hasOwnProperty(property)) {
							var suffix = (rule[property].indexOf('!important') === -1) ? ' !important' : 0;
							props.push(property + ': ' + rule[property] + suffix);
						}
					}
					lines.push(selector + ' { ' + props.join('; ') + ' }');
				}
			}
			var css = lines.join('\n');
			
			// remove existing stylesheet
			$stylist.remove();
			
			// create stylesheet
			var styleNode = document.createElement('style');
			styleNode.type = 'text/css';
			if (styleNode.styleSheet) {
				styleNode.styleSheet.cssText = css;
			} else {
				styleNode.appendChild(document.createTextNode(css));
			}
				
			$stylist = $(styleNode);
			$stylist.attr('id', 'stylist');
			$stylist.data('rules', rules);
			$('head').append($stylist);
			
			return $stylist;
		}
		
	};
	
})(jQuery);