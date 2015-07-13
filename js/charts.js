/**
 * Bridge between Chart.js and Jekyll.
 *
 * Copyright (c) 2015 Herman Bergwerf
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

Chart.defaults.global = {
	// Boolean - Whether to animate the chart
	animation: false,//window.innerWidth > 480,  // Disable on small screens.

	// Number - Number of animation steps
	animationSteps: 60,

	// String - Animation easing effect
	// Possible effects are:
	// [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
	//  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
	//  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
	//  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
	//  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
	//  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
	//  easeOutElastic, easeInCubic]
	animationEasing: "easeOutBounce",

	// Boolean - If we should show the scale at all
	showScale: true,

	// Boolean - If we want to override with a hard coded scale
	scaleOverride: false,

	// ** Required if scaleOverride is true **
	// Number - The number of steps in a hard coded scale
	scaleSteps: null,
	// Number - The value jump in the hard coded scale
	scaleStepWidth: null,
	// Number - The scale starting value
	scaleStartValue: null,

	// String - Colour of the scale line
	scaleLineColor: "rgba(0,0,0,.1)",

	// Number - Pixel width of the scale line
	scaleLineWidth: 1,

	// Boolean - Whether to show labels on the scale
	scaleShowLabels: true,

	// Interpolated JS string - can access value
	scaleLabel: "<%=value%>",

	// Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
	scaleIntegersOnly: true,

	// Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
	scaleBeginAtZero: false,

	// String - Scale label font declaration for the scale label
	scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

	// Number - Scale label font size in pixels
	scaleFontSize: 12,

	// String - Scale label font weight style
	scaleFontStyle: "normal",

	// String - Scale label font colour
	scaleFontColor: "#666",

	// Boolean - whether or not the chart should be responsive and resize when the browser does.
	responsive: true,

	// Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
	maintainAspectRatio: true,

	// Boolean - Determines whether to draw tooltips on the canvas or not
	showTooltips: true,

	// Function - Determines whether to execute the customTooltips function instead of drawing the built in tooltips (See [Advanced - External Tooltips](#advanced-usage-custom-tooltips))
	customTooltips: false,

	// Array - Array of string names to attach tooltip events
	tooltipEvents: ["mousemove", "touchstart", "touchmove"],

	// String - Tooltip background colour
	tooltipFillColor: "rgba(0,0,0,0.8)",

	// String - Tooltip label font declaration for the scale label
	tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

	// Number - Tooltip label font size in pixels
	tooltipFontSize: 14,

	// String - Tooltip font weight style
	tooltipFontStyle: "normal",

	// String - Tooltip label font colour
	tooltipFontColor: "#fff",

	// String - Tooltip title font declaration for the scale label
	tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

	// Number - Tooltip title font size in pixels
	tooltipTitleFontSize: 14,

	// String - Tooltip title font weight style
	tooltipTitleFontStyle: "bold",

	// String - Tooltip title font colour
	tooltipTitleFontColor: "#fff",

	// Number - pixel width of padding around tooltip text
	tooltipYPadding: 6,

	// Number - pixel width of padding around tooltip text
	tooltipXPadding: 6,

	// Number - Size of the caret on the tooltip
	tooltipCaretSize: 8,

	// Number - Pixel radius of the tooltip border
	tooltipCornerRadius: 6,

	// Number - Pixel offset from point x to tooltip edge
	tooltipXOffset: 10,

	// String - Template string for single tooltips
	tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

	// String - Template string for multiple tooltips
	multiTooltipTemplate: "<%= value %>",

	// Function - Will fire on animation progression.
	onAnimationProgress: function(){},

	// Function - Will fire on animation completion.
	onAnimationComplete: function(){}
};

var ChartPalette = [
	[ "#f44336", "#ef5350" ],
	[ "#673ab7", "#7e57c2" ],
	[ "#2196f3", "#42a5f5" ],
	[ "#ff9800", "#ffa726" ],
	[ "#4caf50", "#9ccc65" ],
	[ "#795548", "#8d6e63" ],
	[ "#cddc39", "#d4e157" ],
	[ "#607d8b", "#78909c" ]
];

var ChartJSBridge = {
	run: function() {
		$('canvas.chartjs-chart').each(function(i, elm) {
			// Load chart.
			$.getJSON($(elm).data('chart-source'), function(json) {
				// autocolor
				if (json.autocolor)
				{
					if (["Pie", "Doughnut", "PolarArea"].indexOf(json.type) != -1)
					{
						for (var i = 0; i < json.data.length; i++)
						{
							json.data[i].color = ChartPalette[i][0];
							json.data[i].highlight = ChartPalette[i][1];
						}
					}
				}
				// Wrap chart
				$(elm).wrap($('<div class="chartjs-wrapper"></div>'));
				// Initialize chart.
				var ctx = elm.getContext('2d');
				var chart = new Chart(ctx)[json.type](json.data, json.options);
				// Add legend to page.
				if (json.legend)
				{
					var legend = chart.generateLegend();
					$(elm).after(legend);
				}
			});
		});
	}
}

$(document).on('ready', function() {
	ChartJSBridge.run();
});
