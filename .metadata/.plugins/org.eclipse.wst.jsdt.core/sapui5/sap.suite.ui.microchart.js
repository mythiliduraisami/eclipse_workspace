
// ---- sap.suite.ui.microchart --------------------------------------------------------------------------


// ---- sap.suite.ui.microchart.AreaMicroChart --------------------------------------------------------------------------

/**
 * Constructor for a new AreaMicroChart control.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSize size} : sap.m.Size (default: Auto)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getMaxXValue maxXValue} : float</li>
 * <li>{@link #getMinXValue minXValue} : float</li>
 * <li>{@link #getMaxYValue maxYValue} : float</li>
 * <li>{@link #getMinYValue minYValue} : float</li>
 * <li>{@link #getView view} : sap.suite.ui.microchart.AreaMicroChartViewType (default: Normal)</li>
 * <li>{@link #getColorPalette colorPalette} : string[] (default: [])</li>
 * <li>{@link #getShowLabel showLabel} : boolean (default: true)</li>
 * <li>{@link #getIsResponsive isResponsive} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getChart chart} : sap.suite.ui.microchart.AreaMicroChartItem</li>
 * <li>{@link #getMaxThreshold maxThreshold} : sap.suite.ui.microchart.AreaMicroChartItem</li>
 * <li>{@link #getInnerMaxThreshold innerMaxThreshold} : sap.suite.ui.microchart.AreaMicroChartItem</li>
 * <li>{@link #getInnerMinThreshold innerMinThreshold} : sap.suite.ui.microchart.AreaMicroChartItem</li>
 * <li>{@link #getMinThreshold minThreshold} : sap.suite.ui.microchart.AreaMicroChartItem</li>
 * <li>{@link #getTarget target} : sap.suite.ui.microchart.AreaMicroChartItem</li>
 * <li>{@link #getFirstXLabel firstXLabel} : sap.suite.ui.microchart.AreaMicroChartLabel</li>
 * <li>{@link #getFirstYLabel firstYLabel} : sap.suite.ui.microchart.AreaMicroChartLabel</li>
 * <li>{@link #getLastXLabel lastXLabel} : sap.suite.ui.microchart.AreaMicroChartLabel</li>
 * <li>{@link #getLastYLabel lastYLabel} : sap.suite.ui.microchart.AreaMicroChartLabel</li>
 * <li>{@link #getMaxLabel maxLabel} : sap.suite.ui.microchart.AreaMicroChartLabel</li>
 * <li>{@link #getMinLabel minLabel} : sap.suite.ui.microchart.AreaMicroChartLabel</li>
 * <li>{@link #getLines lines} : sap.suite.ui.microchart.AreaMicroChartItem[] (default)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * <br>Note: You can assign a custom tooltip for this microchart. The custom tooltip can be set using expression binding. When no custom tooltip is defined, the tooltip is generated automatically based on the logic described in {@link sap.ui.core.Element#getTooltip_AsString}. For a combination of a generated and a custom tooltip, use <code>((AltText))</code> inside of the tooltip string. The aggregated data of the microchart can also be customized.
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * @since 1.34
 * 
 * @public
 * @ui5-metamodel This control will also be described in the UI5 (legacy) design time metamodel
 * 
 */
sap.suite.ui.microchart.AreaMicroChart = function(sId,mSettings) {};
/**
 * The event is triggered when the chart is pressed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.press = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Adds some line to the aggregation {@link #getLines lines}.
 * @param {sap.suite.ui.microchart.AreaMicroChartItem}
 *            oLine The line to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.addLine = function(oLine) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.microchart.AreaMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.AreaMicroChart</code> itself.
 * 
 * The event is triggered when the chart is pressed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.AreaMicroChart</code> itself
 * 
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Binds aggregation {@link #getChart chart} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.bindChart = function(oBindingInfo) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Binds aggregation {@link #getLines lines} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.bindLines = function(oBindingInfo) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Binds aggregation {@link #getTarget target} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.bindTarget = function(oBindingInfo) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the chart in the aggregation {@link #getChart chart}.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyChart = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the firstXLabel in the aggregation {@link #getFirstXLabel firstXLabel}.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyFirstXLabel = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the firstYLabel in the aggregation {@link #getFirstYLabel firstYLabel}.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyFirstYLabel = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the innerMaxThreshold in the aggregation {@link #getInnerMaxThreshold innerMaxThreshold}.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyInnerMaxThreshold = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the innerMinThreshold in the aggregation {@link #getInnerMinThreshold innerMinThreshold}.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyInnerMinThreshold = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the lastXLabel in the aggregation {@link #getLastXLabel lastXLabel}.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyLastXLabel = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the lastYLabel in the aggregation {@link #getLastYLabel lastYLabel}.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyLastYLabel = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys all the lines in the aggregation {@link #getLines lines}.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyLines = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the maxLabel in the aggregation {@link #getMaxLabel maxLabel}.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyMaxLabel = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the maxThreshold in the aggregation {@link #getMaxThreshold maxThreshold}.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyMaxThreshold = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the minLabel in the aggregation {@link #getMinLabel minLabel}.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyMinLabel = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the minThreshold in the aggregation {@link #getMinThreshold minThreshold}.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyMinThreshold = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Destroys the target in the aggregation {@link #getTarget target}.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.destroyTarget = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.microchart.AreaMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Enables x-values of all points are automatically indexed with numeric, equidistant values.
 * 
 * @param {boolean} useIndex Flag to activate automatic index
 * @protected
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.enableXIndexing = function(useIndex) {  };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.AreaMicroChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.firePress = function(mParameters) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getChart chart}.
 * 
 * The configuration of the actual values line.
 * The color property defines the color of the line.
 * Points are rendered in the same sequence as in this aggregation.
 * 
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getChart = function() { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Gets current value of property {@link #getColorPalette colorPalette}.
 * 
 * The color palette for the chart. If this property is set,
 * semantic colors defined in AreaMicroChartItem are ignored.
 * As a result, colors of the palette are assigned to each line.
 * When all the palette colors are used up, assignment of the colors starts again from the beginning of the palette.
 * 
 * Default value is <code>[]</code>.
 * @returns {string[]} Value of property <code>colorPalette</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getColorPalette = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getFirstXLabel firstXLabel}.
 * 
 * The label on X axis for the first point of the chart.
 * 
 * @returns {sap.suite.ui.microchart.AreaMicroChartLabel}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getFirstXLabel = function() { return new sap.suite.ui.microchart.AreaMicroChartLabel(); };

/**
 * Gets content of aggregation {@link #getFirstYLabel firstYLabel}.
 * 
 * The label on Y axis for the first point of the chart.
 * 
 * @returns {sap.suite.ui.microchart.AreaMicroChartLabel}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getFirstYLabel = function() { return new sap.suite.ui.microchart.AreaMicroChartLabel(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * The height of the chart. Overrides the height specified in the <code>size</code> property.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets content of aggregation {@link #getInnerMaxThreshold innerMaxThreshold}.
 * 
 * The configuration of the upper line of the inner threshold area. The color property defines the color of the area between inner thresholds. For rendering of the inner threshold area, both innerMaxThreshold and innerMinThreshold aggregations must be defined. Points are rendered in the same sequence as in this aggregation.
 * 
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getInnerMaxThreshold = function() { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Gets content of aggregation {@link #getInnerMinThreshold innerMinThreshold}.
 * 
 * The configuration of the bottom line of the inner threshold area. The color property is ignored. For rendering of the inner threshold area, both innerMaxThreshold and innerMinThreshold aggregations must be defined. Points are rendered in the same sequence as in this aggregation.
 * 
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getInnerMinThreshold = function() { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Gets current value of property {@link #getIsResponsive isResponsive}.
 * 
 * If this set to true, width and height of the control are determined by the width and height of the container in which the control is placed or by the width and height property.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>isResponsive</code>
 * @since 1.38.0
 * @deprecated Since 1.60
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getIsResponsive = function() { return false; };

/**
 * Gets content of aggregation {@link #getLastXLabel lastXLabel}.
 * 
 * The label on X axis for the last point of the chart.
 * 
 * @returns {sap.suite.ui.microchart.AreaMicroChartLabel}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getLastXLabel = function() { return new sap.suite.ui.microchart.AreaMicroChartLabel(); };

/**
 * Gets content of aggregation {@link #getLastYLabel lastYLabel}.
 * 
 * The label on Y axis for the last point of the chart.
 * 
 * @returns {sap.suite.ui.microchart.AreaMicroChartLabel}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getLastYLabel = function() { return new sap.suite.ui.microchart.AreaMicroChartLabel(); };

/**
 * Gets content of aggregation {@link #getLines lines}.
 * 
 * The set of lines.
 * 
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem[]}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getLines = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getMaxLabel maxLabel}.
 * 
 * The label for the maximum point of the chart.
 * 
 * @returns {sap.suite.ui.microchart.AreaMicroChartLabel}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getMaxLabel = function() { return new sap.suite.ui.microchart.AreaMicroChartLabel(); };

/**
 * Gets content of aggregation {@link #getMaxThreshold maxThreshold}.
 * 
 * The configuration of the max threshold area. The color property defines the color of the area above the max threshold line. Points are rendered in the same sequence as in this aggregation.
 * 
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getMaxThreshold = function() { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Gets current value of property {@link #getMaxXValue maxXValue}.
 * 
 * If this property is set, it indicates the value the X-axis ends with.
 * 
 * @returns {float} Value of property <code>maxXValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getMaxXValue = function() { return 0.0; };

/**
 * Gets current value of property {@link #getMaxYValue maxYValue}.
 * 
 * If this property is set it indicates the value X axis ends with.
 * 
 * @returns {float} Value of property <code>maxYValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getMaxYValue = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.AreaMicroChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getMinLabel minLabel}.
 * 
 * The label for the minimum point of the chart.
 * 
 * @returns {sap.suite.ui.microchart.AreaMicroChartLabel}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getMinLabel = function() { return new sap.suite.ui.microchart.AreaMicroChartLabel(); };

/**
 * Gets content of aggregation {@link #getMinThreshold minThreshold}.
 * 
 * The configuration of the min threshold area. The color property defines the color of the area below the min threshold line. Points are rendered in the same sequence as in this aggregation.
 * 
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getMinThreshold = function() { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Gets current value of property {@link #getMinXValue minXValue}.
 * 
 * If this property is set it indicates the value X axis ends with.
 * 
 * @returns {float} Value of property <code>minXValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getMinXValue = function() { return 0.0; };

/**
 * Gets current value of property {@link #getMinYValue minYValue}.
 * 
 * If this property is set it indicates the value X axis ends with.
 * 
 * @returns {float} Value of property <code>minYValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getMinYValue = function() { return 0.0; };

/**
 * Gets current value of property {@link #getShowLabel showLabel}.
 * 
 * Determines if the labels are displayed or not.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showLabel</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getShowLabel = function() { return false; };

/**
 * Gets current value of property {@link #getSize size}.
 * 
 * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
 * Responsive size takes width and height of the parent container where the bullet micro chart is included.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.m.Size} Value of property <code>size</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getSize = function() { return new sap.m.Size(); };

/**
 * Gets content of aggregation {@link #getTarget target}.
 * 
 * The configuration of the target values line. The color property defines the color of the line. Points are rendered in the same sequence as in this aggregation.
 * 
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getTarget = function() { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Gets current value of property {@link #getView view}.
 * 
 * The view of the chart.
 * 
 * Default value is <code>Normal</code>.
 * @returns {sap.suite.ui.microchart.AreaMicroChartViewType} Value of property <code>view</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getView = function() { return new sap.suite.ui.microchart.AreaMicroChartViewType(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * The width of the chart. Overrides the width specified in the <code>size</code> property.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.suite.ui.microchart.AreaMicroChartItem</code> in the aggregation {@link #getLines lines}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.microchart.AreaMicroChartItem}
 *           oLine The line whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.indexOfLine = function(oLine) { return 0; };

/**
 * Inserts a line into the aggregation {@link #getLines lines}.
 * 
 * @param {sap.suite.ui.microchart.AreaMicroChartItem}
 *            oLine The line to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the line should be inserted at; for
 *              a negative value of <code>iIndex</code>, the line is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the line is inserted at
 *              the last position
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.insertLine = function(oLine,iIndex) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getLines lines}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.removeAllLines = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Removes a line from the aggregation {@link #getLines lines}.
 * 
 * @param {int | string | sap.suite.ui.microchart.AreaMicroChartItem} vLine The line to remove or its index or id
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem} The removed line or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.removeLine = function(vLine) { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Sets the aggregated {@link #getChart chart}.
 * @param {sap.suite.ui.microchart.AreaMicroChartItem} oChart The chart to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setChart = function(oChart) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets a new value for property {@link #getColorPalette colorPalette}.
 * 
 * The color palette for the chart. If this property is set,
 * semantic colors defined in AreaMicroChartItem are ignored.
 * As a result, colors of the palette are assigned to each line.
 * When all the palette colors are used up, assignment of the colors starts again from the beginning of the palette.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {string[]} sColorPalette New value for property <code>colorPalette</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setColorPalette = function(sColorPalette) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets the aggregated {@link #getFirstXLabel firstXLabel}.
 * @param {sap.suite.ui.microchart.AreaMicroChartLabel} oFirstXLabel The firstXLabel to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setFirstXLabel = function(oFirstXLabel) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets the aggregated {@link #getFirstYLabel firstYLabel}.
 * @param {sap.suite.ui.microchart.AreaMicroChartLabel} oFirstYLabel The firstYLabel to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setFirstYLabel = function(oFirstYLabel) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * The height of the chart. Overrides the height specified in the <code>size</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setHeight = function(sHeight) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets the aggregated {@link #getInnerMaxThreshold innerMaxThreshold}.
 * @param {sap.suite.ui.microchart.AreaMicroChartItem} oInnerMaxThreshold The innerMaxThreshold to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setInnerMaxThreshold = function(oInnerMaxThreshold) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets the aggregated {@link #getInnerMinThreshold innerMinThreshold}.
 * @param {sap.suite.ui.microchart.AreaMicroChartItem} oInnerMinThreshold The innerMinThreshold to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setInnerMinThreshold = function(oInnerMinThreshold) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets a new value for property {@link #getIsResponsive isResponsive}.
 * 
 * If this set to true, width and height of the control are determined by the width and height of the container in which the control is placed or by the width and height property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIsResponsive New value for property <code>isResponsive</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.38.0
 * @deprecated Since 1.60
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setIsResponsive = function(bIsResponsive) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets the aggregated {@link #getLastXLabel lastXLabel}.
 * @param {sap.suite.ui.microchart.AreaMicroChartLabel} oLastXLabel The lastXLabel to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setLastXLabel = function(oLastXLabel) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets the aggregated {@link #getLastYLabel lastYLabel}.
 * @param {sap.suite.ui.microchart.AreaMicroChartLabel} oLastYLabel The lastYLabel to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setLastYLabel = function(oLastYLabel) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets the aggregated {@link #getMaxLabel maxLabel}.
 * @param {sap.suite.ui.microchart.AreaMicroChartLabel} oMaxLabel The maxLabel to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setMaxLabel = function(oMaxLabel) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets the aggregated {@link #getMaxThreshold maxThreshold}.
 * @param {sap.suite.ui.microchart.AreaMicroChartItem} oMaxThreshold The maxThreshold to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setMaxThreshold = function(oMaxThreshold) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Property setter for the Max X value
 * 
 * @param {float} value - new value Max X
 * @param {boolean} bSuppressInvalidate - Suppress in validate
 * @returns {void}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setMaxXValue = function(value,bSuppressInvalidate) { return null; };

/**
 * Property setter for the Max Y value
 * 
 * @param {float} value - new value Max Y
 * @param {boolean} bSuppressInvalidate - Suppress in validate
 * @returns {void}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setMaxYValue = function(value,bSuppressInvalidate) { return null; };

/**
 * Sets the aggregated {@link #getMinLabel minLabel}.
 * @param {sap.suite.ui.microchart.AreaMicroChartLabel} oMinLabel The minLabel to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setMinLabel = function(oMinLabel) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets the aggregated {@link #getMinThreshold minThreshold}.
 * @param {sap.suite.ui.microchart.AreaMicroChartItem} oMinThreshold The minThreshold to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setMinThreshold = function(oMinThreshold) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Property setter for the Min X value
 * 
 * @param {float} value - new value Min X
 * @param {boolean} bSuppressInvalidate - Suppress in validate
 * @returns {void}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setMinXValue = function(value,bSuppressInvalidate) { return null; };

/**
 * Property setter for the Min Y value
 * 
 * @param {float} value - new value Min Y
 * @param {boolean} bSuppressInvalidate - Suppress in validate
 * @returns {void}
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setMinYValue = function(value,bSuppressInvalidate) { return null; };

/**
 * Sets a new value for property {@link #getShowLabel showLabel}.
 * 
 * Determines if the labels are displayed or not.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowLabel New value for property <code>showLabel</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setShowLabel = function(bShowLabel) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets a new value for property {@link #getSize size}.
 * 
 * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
 * Responsive size takes width and height of the parent container where the bullet micro chart is included.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.m.Size} sSize New value for property <code>size</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setSize = function(sSize) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets the aggregated {@link #getTarget target}.
 * @param {sap.suite.ui.microchart.AreaMicroChartItem} oTarget The target to set
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setTarget = function(oTarget) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets a new value for property {@link #getView view}.
 * 
 * The view of the chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Normal</code>.
 * @param {sap.suite.ui.microchart.AreaMicroChartViewType} sView New value for property <code>view</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setView = function(sView) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * The width of the chart. Overrides the width specified in the <code>size</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.setWidth = function(sWidth) { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Unbinds aggregation {@link #getChart chart} from model data.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.unbindChart = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Unbinds aggregation {@link #getLines lines} from model data.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.unbindLines = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };

/**
 * Unbinds aggregation {@link #getTarget target} from model data.
 * @returns {sap.suite.ui.microchart.AreaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChart.prototype.unbindTarget = function() { return new sap.suite.ui.microchart.AreaMicroChart(); };


// ---- sap.suite.ui.microchart.AreaMicroChartItem --------------------------------------------------------------------------

/**
 * The configuration of the graphic element on the chart.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColor color} : sap.m.ValueCSSColor (default: Neutral)</li>
 * <li>{@link #getTitle title} : string</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPoints points} : sap.suite.ui.microchart.AreaMicroChartPoint[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Graphical representation of the area micro chart regarding the value lines, the thresholds, and the target values.
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * @since 1.34
 * 
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem = function(sId,mSettings) {};
/**
 * Adds some point to the aggregation {@link #getPoints points}.
 * @param {sap.suite.ui.microchart.AreaMicroChartPoint}
 *            oPoint The point to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.addPoint = function(oPoint) { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Binds aggregation {@link #getPoints points} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.bindPoints = function(oBindingInfo) { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Destroys all the points in the aggregation {@link #getPoints points}.
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.destroyPoints = function() { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.AreaMicroChartItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getColor color}.
 * 
 * The graphic element color.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueCSSColor} Value of property <code>color</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.getColor = function() { return new sap.m.ValueCSSColor(); };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.AreaMicroChartItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getPoints points}.
 * 
 * The set of points for this graphic element.
 * 
 * @returns {sap.suite.ui.microchart.AreaMicroChartPoint[]}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.getPoints = function() { return new Array(); };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * The line title.
 * 
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.getTitle = function() { return ""; };

/**
 * Checks for the provided <code>sap.suite.ui.microchart.AreaMicroChartPoint</code> in the aggregation {@link #getPoints points}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.microchart.AreaMicroChartPoint}
 *           oPoint The point whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.indexOfPoint = function(oPoint) { return 0; };

/**
 * Inserts a point into the aggregation {@link #getPoints points}.
 * 
 * @param {sap.suite.ui.microchart.AreaMicroChartPoint}
 *            oPoint The point to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the point should be inserted at; for
 *              a negative value of <code>iIndex</code>, the point is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the point is inserted at
 *              the last position
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.insertPoint = function(oPoint,iIndex) { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Removes all the controls from the aggregation {@link #getPoints points}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.microchart.AreaMicroChartPoint[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.removeAllPoints = function() { return new Array(); };

/**
 * Removes a point from the aggregation {@link #getPoints points}.
 * 
 * @param {int | string | sap.suite.ui.microchart.AreaMicroChartPoint} vPoint The point to remove or its index or id
 * @returns {sap.suite.ui.microchart.AreaMicroChartPoint} The removed point or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.removePoint = function(vPoint) { return new sap.suite.ui.microchart.AreaMicroChartPoint(); };

/**
 * Sets a new value for property {@link #getColor color}.
 * 
 * The graphic element color.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueCSSColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * The line title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.setTitle = function(sTitle) { return new sap.suite.ui.microchart.AreaMicroChartItem(); };

/**
 * Unbinds aggregation {@link #getPoints points} from model data.
 * @returns {sap.suite.ui.microchart.AreaMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartItem.prototype.unbindPoints = function() { return new sap.suite.ui.microchart.AreaMicroChartItem(); };


// ---- sap.suite.ui.microchart.AreaMicroChartLabel --------------------------------------------------------------------------

/**
 * Constructor for a new AreaMicroChart control.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColor color} : sap.m.ValueCSSColor (default: Neutral)</li>
 * <li>{@link #getLabel label} : string (default: )</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Displays or hides the labels for start and end dates, start and end values, and minimum and maximum values.
 * @extends sap.ui.core.Element
 * 
 * @version 1.71.0
 * @since 1.34
 * 
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.AreaMicroChartLabel = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.microchart.AreaMicroChartLabel with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.AreaMicroChartLabel.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getColor color}.
 * 
 * The graphic element color.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueCSSColor} Value of property <code>color</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartLabel.prototype.getColor = function() { return new sap.m.ValueCSSColor(); };

/**
 * Gets current value of property {@link #getLabel label}.
 * 
 * The line title.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>label</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartLabel.prototype.getLabel = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.AreaMicroChartLabel.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.AreaMicroChartLabel.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getColor color}.
 * 
 * The graphic element color.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueCSSColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChartLabel} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartLabel.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.AreaMicroChartLabel(); };

/**
 * Sets a new value for property {@link #getLabel label}.
 * 
 * The line title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sLabel New value for property <code>label</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChartLabel} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartLabel.prototype.setLabel = function(sLabel) { return new sap.suite.ui.microchart.AreaMicroChartLabel(); };


// ---- sap.suite.ui.microchart.AreaMicroChartPoint --------------------------------------------------------------------------

/**
 * This control contains data for the point.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getX x} : float</li>
 * <li>{@link #getY y} : float</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Contains the data for the point.
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * @since 1.34
 * 
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.AreaMicroChartPoint = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.microchart.AreaMicroChartPoint with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.AreaMicroChartPoint.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.AreaMicroChartPoint.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.AreaMicroChartPoint.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getX x}.
 * 
 * X value for the given point.
 * 
 * @returns {float} Value of property <code>x</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartPoint.prototype.getX = function() { return 0.0; };

/**
 * Returns the x value. It returns 'undefined', if the x property was not set or an invalid number was set.
 * 
 * @public
 * @returns {float} The x-value, or undefined if the value set was invalid
 * 
 */
sap.suite.ui.microchart.AreaMicroChartPoint.prototype.getXValue = function() { return 0.0; };

/**
 * Gets current value of property {@link #getY y}.
 * 
 * Y value for the given point.
 * 
 * @returns {float} Value of property <code>y</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartPoint.prototype.getY = function() { return 0.0; };

/**
 * Returns the y value. It returns 'undefined', if the y property was not set or an invalid number was set.
 * 
 * @public
 * @returns {float} The y-value, or undefined if the value set was invalid
 * 
 */
sap.suite.ui.microchart.AreaMicroChartPoint.prototype.getYValue = function() { return 0.0; };

/**
 * Sets a new value for property {@link #getX x}.
 * 
 * X value for the given point.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fX New value for property <code>x</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChartPoint} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartPoint.prototype.setX = function(fX) { return new sap.suite.ui.microchart.AreaMicroChartPoint(); };

/**
 * Sets a new value for property {@link #getY y}.
 * 
 * Y value for the given point.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fY New value for property <code>y</code>
 * @returns {sap.suite.ui.microchart.AreaMicroChartPoint} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartPoint.prototype.setY = function(fY) { return new sap.suite.ui.microchart.AreaMicroChartPoint(); };


// ---- sap.suite.ui.microchart.AreaMicroChartViewType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.microchart.AreaMicroChartViewType.toString = function() { return ""; };

// ---- sap.suite.ui.microchart.BulletMicroChart --------------------------------------------------------------------------

/**
 * Constructor for a new BulletMicroChart control.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSize size} : sap.m.Size (default: Auto)</li>
 * <li>{@link #getMode mode} : sap.suite.ui.microchart.BulletMicroChartModeType (default: Actual)</li>
 * <li>{@link #getScale scale} : string (default: )</li>
 * <li>{@link #getForecastValue forecastValue} : float</li>
 * <li>{@link #getTargetValue targetValue} : float</li>
 * <li>{@link #getMinValue minValue} : float</li>
 * <li>{@link #getMaxValue maxValue} : float</li>
 * <li>{@link #getShowActualValue showActualValue} : boolean (default: true)</li>
 * <li>{@link #getShowDeltaValue showDeltaValue} : boolean (default: true)</li>
 * <li>{@link #getShowActualValueInDeltaMode showActualValueInDeltaMode} : boolean (default: false)</li>
 * <li>{@link #getShowTargetValue showTargetValue} : boolean (default: true)</li>
 * <li>{@link #getShowValueMarker showValueMarker} : boolean (default: false)</li>
 * <li>{@link #getShowThresholds showThresholds} : boolean (default: true)</li>
 * <li>{@link #getActualValueLabel actualValueLabel} : string (default: )</li>
 * <li>{@link #getDeltaValueLabel deltaValueLabel} : string (default: )</li>
 * <li>{@link #getTargetValueLabel targetValueLabel} : string (default: )</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getScaleColor scaleColor} : sap.suite.ui.microchart.CommonBackgroundType (default: MediumLight)</li>
 * <li>{@link #getIsResponsive isResponsive} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getActual actual} : sap.suite.ui.microchart.BulletMicroChartData (default)</li>
 * <li>{@link #getThresholds thresholds} : sap.suite.ui.microchart.BulletMicroChartData[]</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Displays a colored horizontal bar representing a current value on top of a background bar representing the compared value. The vertical bars can represent the numeric values, the scaling factors, the thresholds, and the target values.  This control replaces the deprecated sap.suite.ui.commons.BulletChart.
 * <br>Note: You can assign a custom tooltip for this microchart. The custom tooltip can be set using expression binding. When no custom tooltip is defined, the tooltip is generated automatically based on the logic described in {@link sap.ui.core.Element#getTooltip_AsString}. For a combination of a generated and a custom tooltip, use <code>((AltText))</code> inside of the tooltip string. The aggregated data of the microchart can also be customized.
 * @extends sap.ui.core.Control
 * 
 * @version 1.71.0
 * @since 1.34
 * 
 * @public
 * @ui5-metamodel This control will also be described in the UI5 (legacy) design time metamodel
 * 
 */
sap.suite.ui.microchart.BulletMicroChart = function(sId,mSettings) {};
/**
 * The event is triggered when the chart is pressed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.press = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Adds some threshold to the aggregation {@link #getThresholds thresholds}.
 * @param {sap.suite.ui.microchart.BulletMicroChartData}
 *            oThreshold The threshold to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.addThreshold = function(oThreshold) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.microchart.BulletMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.BulletMicroChart</code> itself.
 * 
 * The event is triggered when the chart is pressed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.BulletMicroChart</code> itself
 * 
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Binds aggregation {@link #getActual actual} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.bindActual = function(oBindingInfo) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Binds aggregation {@link #getThresholds thresholds} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.bindThresholds = function(oBindingInfo) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Destroys the actual in the aggregation {@link #getActual actual}.
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.destroyActual = function() { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Destroys all the thresholds in the aggregation {@link #getThresholds thresholds}.
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.destroyThresholds = function() { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.microchart.BulletMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.BulletMicroChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.firePress = function(mParameters) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Gets content of aggregation {@link #getActual actual}.
 * 
 * Actual data of the BulletMicroChart.
 * 
 * @returns {sap.suite.ui.microchart.BulletMicroChartData}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getActual = function() { return new sap.suite.ui.microchart.BulletMicroChartData(); };

/**
 * Gets current value of property {@link #getActualValueLabel actualValueLabel}.
 * 
 * If set, displays a specified label instead of the numeric actual value.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>actualValueLabel</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getActualValueLabel = function() { return ""; };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property {@link #getDeltaValueLabel deltaValueLabel}.
 * 
 * If set, displays a specified label instead of the calculated numeric delta value.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>deltaValueLabel</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getDeltaValueLabel = function() { return ""; };

/**
 * Gets current value of property {@link #getForecastValue forecastValue}.
 * 
 * The forecast value that is displayed in Actual  mode only. If set, the forecast value bar appears in the background of the actual value bar.
 * 
 * @returns {float} Value of property <code>forecastValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getForecastValue = function() { return 0.0; };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * The height of the chart. Overrides the height specified in the <code>size</code> property.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getIsResponsive isResponsive}.
 * 
 * If this set to true, width and height of the control are determined by the width and height of the container in which the control is placed or by the width and height property.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>isResponsive</code>
 * @since 1.38.0
 * @deprecated Since 1.58
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getIsResponsive = function() { return false; };

/**
 * Gets current value of property {@link #getMaxValue maxValue}.
 * 
 * The maximum scale value for the bar chart used for defining a fixed size of the scale in different instances of this control.
 * 
 * @returns {float} Value of property <code>maxValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getMaxValue = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.BulletMicroChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMinValue minValue}.
 * 
 * The minimum scale value for the bar chart used for defining a fixed size of the scale in different instances of this control.
 * 
 * @returns {float} Value of property <code>minValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getMinValue = function() { return 0.0; };

/**
 * Gets current value of property {@link #getMode mode}.
 * 
 * The mode of displaying the actual value itself or the delta between the actual value and the target value. If not set, the actual value is displayed.
 * 
 * Default value is <code>Actual</code>.
 * @returns {sap.suite.ui.microchart.BulletMicroChartModeType} Value of property <code>mode</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getMode = function() { return new sap.suite.ui.microchart.BulletMicroChartModeType(); };

/**
 * Gets current value of property {@link #getScale scale}.
 * 
 * The scaling suffix that is added to all values.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>scale</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getScale = function() { return ""; };

/**
 * Gets current value of property {@link #getScaleColor scaleColor}.
 * 
 * The background color of the scale. The theming is enabled only for the default value of this property.
 * 
 * Default value is <code>MediumLight</code>.
 * @returns {sap.suite.ui.microchart.CommonBackgroundType} Value of property <code>scaleColor</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getScaleColor = function() { return new sap.suite.ui.microchart.CommonBackgroundType(); };

/**
 * Gets current value of property {@link #getShowActualValue showActualValue}.
 * 
 * If set to true, shows the numeric actual value. This property works in Actual mode only.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showActualValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getShowActualValue = function() { return false; };

/**
 * Gets current value of property {@link #getShowActualValueInDeltaMode showActualValueInDeltaMode}.
 * 
 * If set to true, shows the numeric actual value and possibly hides the delta value, if showDeltaValue is set to true.
 * This property works in Delta mode only and has priority over showDeltaValue.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showActualValueInDeltaMode</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getShowActualValueInDeltaMode = function() { return false; };

/**
 * Gets current value of property {@link #getShowDeltaValue showDeltaValue}.
 * 
 * If set to true, shows the calculated delta value instead of the numeric actual value regardless of the showActualValue setting. This property works in Delta mode only.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showDeltaValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getShowDeltaValue = function() { return false; };

/**
 * Gets current value of property {@link #getShowTargetValue showTargetValue}.
 * 
 * If set to true, shows the numeric target value.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showTargetValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getShowTargetValue = function() { return false; };

/**
 * Gets current value of property {@link #getShowThresholds showThresholds}.
 * 
 * If set to true, shows the threshold markers.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showThresholds</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getShowThresholds = function() { return false; };

/**
 * Gets current value of property {@link #getShowValueMarker showValueMarker}.
 * 
 * If set to true, shows the value marker.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showValueMarker</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getShowValueMarker = function() { return false; };

/**
 * Gets current value of property {@link #getSize size}.
 * 
 * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
 * Responsive size takes width and height of the parent container where the bullet micro chart is included.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.m.Size} Value of property <code>size</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getSize = function() { return new sap.m.Size(); };

/**
 * Gets current value of property {@link #getTargetValue targetValue}.
 * 
 * The target value that is displayed as a black vertical bar.
 * 
 * @returns {float} Value of property <code>targetValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getTargetValue = function() { return 0.0; };

/**
 * Gets current value of property {@link #getTargetValueLabel targetValueLabel}.
 * 
 * If set, displays a specified label instead of the numeric target value.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>targetValueLabel</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getTargetValueLabel = function() { return ""; };

/**
 * Gets content of aggregation {@link #getThresholds thresholds}.
 * 
 * Threshold data of the BulletMicroChart.
 * 
 * @returns {sap.suite.ui.microchart.BulletMicroChartData[]}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getThresholds = function() { return new Array(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * The width of the chart. Overrides the width specified in the <code>size</code> property.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.suite.ui.microchart.BulletMicroChartData</code> in the aggregation {@link #getThresholds thresholds}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.microchart.BulletMicroChartData}
 *           oThreshold The threshold whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.indexOfThreshold = function(oThreshold) { return 0; };

/**
 * Inserts a threshold into the aggregation {@link #getThresholds thresholds}.
 * 
 * @param {sap.suite.ui.microchart.BulletMicroChartData}
 *            oThreshold The threshold to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the threshold should be inserted at; for
 *              a negative value of <code>iIndex</code>, the threshold is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the threshold is inserted at
 *              the last position
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.insertThreshold = function(oThreshold,iIndex) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getThresholds thresholds}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.microchart.BulletMicroChartData[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.removeAllThresholds = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Removes a threshold from the aggregation {@link #getThresholds thresholds}.
 * 
 * @param {int | string | sap.suite.ui.microchart.BulletMicroChartData} vThreshold The threshold to remove or its index or id
 * @returns {sap.suite.ui.microchart.BulletMicroChartData} The removed threshold or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.removeThreshold = function(vThreshold) { return new sap.suite.ui.microchart.BulletMicroChartData(); };

/**
 * Sets the aggregated {@link #getActual actual}.
 * @param {sap.suite.ui.microchart.BulletMicroChartData} oActual The actual to set
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setActual = function(oActual) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getActualValueLabel actualValueLabel}.
 * 
 * If set, displays a specified label instead of the numeric actual value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sActualValueLabel New value for property <code>actualValueLabel</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setActualValueLabel = function(sActualValueLabel) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getDeltaValueLabel deltaValueLabel}.
 * 
 * If set, displays a specified label instead of the calculated numeric delta value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sDeltaValueLabel New value for property <code>deltaValueLabel</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setDeltaValueLabel = function(sDeltaValueLabel) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getForecastValue forecastValue}.
 * 
 * The forecast value that is displayed in Actual  mode only. If set, the forecast value bar appears in the background of the actual value bar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fForecastValue New value for property <code>forecastValue</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setForecastValue = function(fForecastValue) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * The height of the chart. Overrides the height specified in the <code>size</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setHeight = function(sHeight) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getIsResponsive isResponsive}.
 * 
 * If this set to true, width and height of the control are determined by the width and height of the container in which the control is placed or by the width and height property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIsResponsive New value for property <code>isResponsive</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.38.0
 * @deprecated Since 1.58
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setIsResponsive = function(bIsResponsive) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getMaxValue maxValue}.
 * 
 * The maximum scale value for the bar chart used for defining a fixed size of the scale in different instances of this control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fMaxValue New value for property <code>maxValue</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setMaxValue = function(fMaxValue) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getMinValue minValue}.
 * 
 * The minimum scale value for the bar chart used for defining a fixed size of the scale in different instances of this control.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fMinValue New value for property <code>minValue</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setMinValue = function(fMinValue) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getMode mode}.
 * 
 * The mode of displaying the actual value itself or the delta between the actual value and the target value. If not set, the actual value is displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Actual</code>.
 * @param {sap.suite.ui.microchart.BulletMicroChartModeType} sMode New value for property <code>mode</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setMode = function(sMode) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getScale scale}.
 * 
 * The scaling suffix that is added to all values.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sScale New value for property <code>scale</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setScale = function(sScale) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getScaleColor scaleColor}.
 * 
 * The background color of the scale. The theming is enabled only for the default value of this property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>MediumLight</code>.
 * @param {sap.suite.ui.microchart.CommonBackgroundType} sScaleColor New value for property <code>scaleColor</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setScaleColor = function(sScaleColor) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getShowActualValue showActualValue}.
 * 
 * If set to true, shows the numeric actual value. This property works in Actual mode only.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowActualValue New value for property <code>showActualValue</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setShowActualValue = function(bShowActualValue) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getShowActualValueInDeltaMode showActualValueInDeltaMode}.
 * 
 * If set to true, shows the numeric actual value and possibly hides the delta value, if showDeltaValue is set to true.
 * This property works in Delta mode only and has priority over showDeltaValue.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowActualValueInDeltaMode New value for property <code>showActualValueInDeltaMode</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setShowActualValueInDeltaMode = function(bShowActualValueInDeltaMode) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getShowDeltaValue showDeltaValue}.
 * 
 * If set to true, shows the calculated delta value instead of the numeric actual value regardless of the showActualValue setting. This property works in Delta mode only.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowDeltaValue New value for property <code>showDeltaValue</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setShowDeltaValue = function(bShowDeltaValue) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getShowTargetValue showTargetValue}.
 * 
 * If set to true, shows the numeric target value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowTargetValue New value for property <code>showTargetValue</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setShowTargetValue = function(bShowTargetValue) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getShowThresholds showThresholds}.
 * 
 * If set to true, shows the threshold markers.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowThresholds New value for property <code>showThresholds</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setShowThresholds = function(bShowThresholds) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getShowValueMarker showValueMarker}.
 * 
 * If set to true, shows the value marker.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowValueMarker New value for property <code>showValueMarker</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setShowValueMarker = function(bShowValueMarker) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getSize size}.
 * 
 * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
 * Responsive size takes width and height of the parent container where the bullet micro chart is included.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.m.Size} sSize New value for property <code>size</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setSize = function(sSize) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getTargetValue targetValue}.
 * 
 * The target value that is displayed as a black vertical bar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fTargetValue New value for property <code>targetValue</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setTargetValue = function(fTargetValue) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getTargetValueLabel targetValueLabel}.
 * 
 * If set, displays a specified label instead of the numeric target value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sTargetValueLabel New value for property <code>targetValueLabel</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setTargetValueLabel = function(sTargetValueLabel) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * The width of the chart. Overrides the width specified in the <code>size</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.setWidth = function(sWidth) { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Unbinds aggregation {@link #getActual actual} from model data.
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.unbindActual = function() { return new sap.suite.ui.microchart.BulletMicroChart(); };

/**
 * Unbinds aggregation {@link #getThresholds thresholds} from model data.
 * @returns {sap.suite.ui.microchart.BulletMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChart.prototype.unbindThresholds = function() { return new sap.suite.ui.microchart.BulletMicroChart(); };


// ---- sap.suite.ui.microchart.BulletMicroChartData --------------------------------------------------------------------------

/**
 * Constructor for a new BulletMicroChartData.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getValue value} : float (default: 0)</li>
 * <li>{@link #getColor color} : sap.m.ValueColor (default: Neutral)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Contains the thresholds data.
 * @extends sap.ui.core.Element
 * 
 * @version 1.71.0
 * @since 1.34
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.BulletMicroChartData = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.microchart.BulletMicroChartData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.BulletMicroChartData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getColor color}.
 * 
 * The semantic color of the actual value.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueColor} Value of property <code>color</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChartData.prototype.getColor = function() { return new sap.m.ValueColor(); };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.BulletMicroChartData.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.BulletMicroChartData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getValue value}.
 * 
 * The actual value.
 * 
 * Default value is <code>0</code>.
 * @returns {float} Value of property <code>value</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChartData.prototype.getValue = function() { return 0.0; };

/**
 * Sets a new value for property {@link #getColor color}.
 * 
 * The semantic color of the actual value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChartData.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.BulletMicroChartData(); };

/**
 * Sets a new value for property {@link #getValue value}.
 * 
 * The actual value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {float} fValue New value for property <code>value</code>
 * @returns {sap.suite.ui.microchart.BulletMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChartData.prototype.setValue = function(fValue) { return new sap.suite.ui.microchart.BulletMicroChartData(); };


// ---- sap.suite.ui.microchart.BulletMicroChartModeType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.microchart.BulletMicroChartModeType.toString = function() { return ""; };

// ---- sap.suite.ui.microchart.ColumnMicroChart --------------------------------------------------------------------------

/**
 * Constructor for a new ColumnMicroChart control.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSize size} : sap.m.Size (default: Auto)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getIsResponsive isResponsive} : boolean (default: false)</li>
 * <li>{@link #getShowTopLabels showTopLabels} : boolean (default: true)</li>
 * <li>{@link #getShowBottomLabels showBottomLabels} : boolean (default: true)</li>
 * <li>{@link #getAllowColumnLabels allowColumnLabels} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getColumns columns} : sap.suite.ui.microchart.ColumnMicroChartData[] (default)</li>
 * <li>{@link #getLeftTopLabel leftTopLabel} : sap.suite.ui.microchart.ColumnMicroChartLabel</li>
 * <li>{@link #getRightTopLabel rightTopLabel} : sap.suite.ui.microchart.ColumnMicroChartLabel</li>
 * <li>{@link #getLeftBottomLabel leftBottomLabel} : sap.suite.ui.microchart.ColumnMicroChartLabel</li>
 * <li>{@link #getRightBottomLabel rightBottomLabel} : sap.suite.ui.microchart.ColumnMicroChartLabel</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Compares different values which are represented as vertical bars. This control replaces the deprecated sap.suite.ui.commons.ColumnMicroChart.
 * <br>Note: You can assign a custom tooltip for this microchart. The custom tooltip can be set using expression binding. When no custom tooltip is defined, the tooltip is generated automatically based on the logic described in {@link sap.ui.core.Element#getTooltip_AsString}. For a combination of a generated and a custom tooltip, use <code>((AltText))</code> inside of the tooltip string. The aggregated data of the microchart can also be customized.
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * @since 1.34
 * 
 * @public
 * @ui5-metamodel This control will also be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart = function(sId,mSettings) {};
/**
 * The event is triggered when the chart is pressed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.press = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Adds some column to the aggregation {@link #getColumns columns}.
 * @param {sap.suite.ui.microchart.ColumnMicroChartData}
 *            oColumn The column to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.addColumn = function(oColumn) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.microchart.ColumnMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.ColumnMicroChart</code> itself.
 * 
 * The event is triggered when the chart is pressed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.ColumnMicroChart</code> itself
 * 
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Binds aggregation {@link #getColumns columns} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.bindColumns = function(oBindingInfo) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Destroys all the columns in the aggregation {@link #getColumns columns}.
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.destroyColumns = function() { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Destroys the leftBottomLabel in the aggregation {@link #getLeftBottomLabel leftBottomLabel}.
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.destroyLeftBottomLabel = function() { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Destroys the leftTopLabel in the aggregation {@link #getLeftTopLabel leftTopLabel}.
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.destroyLeftTopLabel = function() { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Destroys the rightBottomLabel in the aggregation {@link #getRightBottomLabel rightBottomLabel}.
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.destroyRightBottomLabel = function() { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Destroys the rightTopLabel in the aggregation {@link #getRightTopLabel rightTopLabel}.
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.destroyRightTopLabel = function() { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.microchart.ColumnMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.ColumnMicroChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.firePress = function(mParameters) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Gets current value of property {@link #getAllowColumnLabels allowColumnLabels}.
 * 
 * If set to true and there is enough space, top labels of the chart are hidden and labels for each column are shown instead.
 * @since 1.60.0
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>allowColumnLabels</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getAllowColumnLabels = function() { return false; };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getColumns columns}.
 * 
 * The column chart data.
 * 
 * @returns {sap.suite.ui.microchart.ColumnMicroChartData[]}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getColumns = function() { return new Array(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * The height of the chart. Overrides the height specified in the <code>size</code> property.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getIsResponsive isResponsive}.
 * 
 * If set to true, width and height of the control are determined by the width and height of the container in which the control is placed. Size, width and height properties are ignored in this case.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>isResponsive</code>
 * @since 1.38.0
 * @deprecated Since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getIsResponsive = function() { return false; };

/**
 * Gets content of aggregation {@link #getLeftBottomLabel leftBottomLabel}.
 * 
 * The label on the left bottom corner of the chart.
 * 
 * @returns {sap.suite.ui.microchart.ColumnMicroChartLabel}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getLeftBottomLabel = function() { return new sap.suite.ui.microchart.ColumnMicroChartLabel(); };

/**
 * Gets content of aggregation {@link #getLeftTopLabel leftTopLabel}.
 * 
 * The label on the left top corner of the chart.
 * 
 * @returns {sap.suite.ui.microchart.ColumnMicroChartLabel}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getLeftTopLabel = function() { return new sap.suite.ui.microchart.ColumnMicroChartLabel(); };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.ColumnMicroChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getRightBottomLabel rightBottomLabel}.
 * 
 * The label on the right bottom corner of the chart.
 * 
 * @returns {sap.suite.ui.microchart.ColumnMicroChartLabel}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getRightBottomLabel = function() { return new sap.suite.ui.microchart.ColumnMicroChartLabel(); };

/**
 * Gets content of aggregation {@link #getRightTopLabel rightTopLabel}.
 * 
 * The label on the right top corner of the chart.
 * 
 * @returns {sap.suite.ui.microchart.ColumnMicroChartLabel}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getRightTopLabel = function() { return new sap.suite.ui.microchart.ColumnMicroChartLabel(); };

/**
 * Gets current value of property {@link #getShowBottomLabels showBottomLabels}.
 * 
 * If this property is set to <code>false</code>, both bottom labels are hidden.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showBottomLabels</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getShowBottomLabels = function() { return false; };

/**
 * Gets current value of property {@link #getShowTopLabels showTopLabels}.
 * 
 * If this property is set to <code>false</code>, both top labels are hidden.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showTopLabels</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getShowTopLabels = function() { return false; };

/**
 * Gets current value of property {@link #getSize size}.
 * 
 * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
 * Responsive size takes width and height of the parent container where the column micro chart is included.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.m.Size} Value of property <code>size</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getSize = function() { return new sap.m.Size(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * The width of the chart. Overrides the width specified in the <code>size</code> property.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.suite.ui.microchart.ColumnMicroChartData</code> in the aggregation {@link #getColumns columns}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.microchart.ColumnMicroChartData}
 *           oColumn The column whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.indexOfColumn = function(oColumn) { return 0; };

/**
 * Inserts a column into the aggregation {@link #getColumns columns}.
 * 
 * @param {sap.suite.ui.microchart.ColumnMicroChartData}
 *            oColumn The column to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the column should be inserted at; for
 *              a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the column is inserted at
 *              the last position
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.insertColumn = function(oColumn,iIndex) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getColumns columns}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.microchart.ColumnMicroChartData[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.removeAllColumns = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Removes a column from the aggregation {@link #getColumns columns}.
 * 
 * @param {int | string | sap.suite.ui.microchart.ColumnMicroChartData} vColumn The column to remove or its index or id
 * @returns {sap.suite.ui.microchart.ColumnMicroChartData} The removed column or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.removeColumn = function(vColumn) { return new sap.suite.ui.microchart.ColumnMicroChartData(); };

/**
 * Sets a new value for property {@link #getAllowColumnLabels allowColumnLabels}.
 * 
 * If set to true and there is enough space, top labels of the chart are hidden and labels for each column are shown instead.
 * @since 1.60.0
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bAllowColumnLabels New value for property <code>allowColumnLabels</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.setAllowColumnLabels = function(bAllowColumnLabels) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * The height of the chart. Overrides the height specified in the <code>size</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.setHeight = function(sHeight) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Sets a new value for property {@link #getIsResponsive isResponsive}.
 * 
 * If set to true, width and height of the control are determined by the width and height of the container in which the control is placed. Size, width and height properties are ignored in this case.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIsResponsive New value for property <code>isResponsive</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.38.0
 * @deprecated Since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.setIsResponsive = function(bIsResponsive) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Sets the aggregated {@link #getLeftBottomLabel leftBottomLabel}.
 * @param {sap.suite.ui.microchart.ColumnMicroChartLabel} oLeftBottomLabel The leftBottomLabel to set
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.setLeftBottomLabel = function(oLeftBottomLabel) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Sets the aggregated {@link #getLeftTopLabel leftTopLabel}.
 * @param {sap.suite.ui.microchart.ColumnMicroChartLabel} oLeftTopLabel The leftTopLabel to set
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.setLeftTopLabel = function(oLeftTopLabel) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Sets the aggregated {@link #getRightBottomLabel rightBottomLabel}.
 * @param {sap.suite.ui.microchart.ColumnMicroChartLabel} oRightBottomLabel The rightBottomLabel to set
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.setRightBottomLabel = function(oRightBottomLabel) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Sets the aggregated {@link #getRightTopLabel rightTopLabel}.
 * @param {sap.suite.ui.microchart.ColumnMicroChartLabel} oRightTopLabel The rightTopLabel to set
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.setRightTopLabel = function(oRightTopLabel) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Sets a new value for property {@link #getShowBottomLabels showBottomLabels}.
 * 
 * If this property is set to <code>false</code>, both bottom labels are hidden.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowBottomLabels New value for property <code>showBottomLabels</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.setShowBottomLabels = function(bShowBottomLabels) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Sets a new value for property {@link #getShowTopLabels showTopLabels}.
 * 
 * If this property is set to <code>false</code>, both top labels are hidden.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowTopLabels New value for property <code>showTopLabels</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.setShowTopLabels = function(bShowTopLabels) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Sets a new value for property {@link #getSize size}.
 * 
 * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
 * Responsive size takes width and height of the parent container where the column micro chart is included.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.m.Size} sSize New value for property <code>size</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.setSize = function(sSize) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * The width of the chart. Overrides the width specified in the <code>size</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.setWidth = function(sWidth) { return new sap.suite.ui.microchart.ColumnMicroChart(); };

/**
 * Unbinds aggregation {@link #getColumns columns} from model data.
 * @returns {sap.suite.ui.microchart.ColumnMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChart.prototype.unbindColumns = function() { return new sap.suite.ui.microchart.ColumnMicroChart(); };


// ---- sap.suite.ui.microchart.ColumnMicroChartData --------------------------------------------------------------------------

/**
 * Constructor for a new ColumnMicroChartData control.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColor color} : sap.m.ValueCSSColor (default: Neutral)</li>
 * <li>{@link #getLabel label} : string (default: )</li>
 * <li>{@link #getDisplayValue displayValue} : string</li>
 * <li>{@link #getValue value} : float</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Defines the column chart data.
 * @extends sap.ui.core.Element
 * 
 * @version 1.71.0
 * @since 1.34
 * 
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData = function(sId,mSettings) {};
/**
 * The event is fired when the user chooses the column data.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.press = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.microchart.ColumnMicroChartData</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.ColumnMicroChartData</code> itself.
 * 
 * The event is fired when the user chooses the column data.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.ColumnMicroChartData</code> itself
 * 
 * @returns {sap.suite.ui.microchart.ColumnMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.ColumnMicroChartData(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.microchart.ColumnMicroChartData</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.ColumnMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.ColumnMicroChartData(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.ColumnMicroChartData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.microchart.ColumnMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.firePress = function(mParameters) { return new sap.suite.ui.microchart.ColumnMicroChartData(); };

/**
 * Gets current value of property {@link #getColor color}.
 * 
 * The graphic element color.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueCSSColor} Value of property <code>color</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.getColor = function() { return new sap.m.ValueCSSColor(); };

/**
 * Gets current value of property {@link #getDisplayValue displayValue}.
 * 
 * Overrides the value with a string that is shown when used in combination with
 * {@link sap.suite.ui.microchart.ColumnMicroChart} <code>allowColumnLabels</code>.
 * 
 * @returns {string} Value of property <code>displayValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.getDisplayValue = function() { return ""; };

/**
 * Gets current value of property {@link #getLabel label}.
 * 
 * The line title.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>label</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.getLabel = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.ColumnMicroChartData.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getValue value}.
 * 
 * The actual value.
 * 
 * @returns {float} Value of property <code>value</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.getValue = function() { return 0.0; };

/**
 * Sets a new value for property {@link #getColor color}.
 * 
 * The graphic element color.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueCSSColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.ColumnMicroChartData(); };

/**
 * Sets a new value for property {@link #getDisplayValue displayValue}.
 * 
 * Overrides the value with a string that is shown when used in combination with
 * {@link sap.suite.ui.microchart.ColumnMicroChart} <code>allowColumnLabels</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDisplayValue New value for property <code>displayValue</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.setDisplayValue = function(sDisplayValue) { return new sap.suite.ui.microchart.ColumnMicroChartData(); };

/**
 * Sets a new value for property {@link #getLabel label}.
 * 
 * The line title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sLabel New value for property <code>label</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.setLabel = function(sLabel) { return new sap.suite.ui.microchart.ColumnMicroChartData(); };

/**
 * Sets a new value for property {@link #getValue value}.
 * 
 * The actual value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fValue New value for property <code>value</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartData.prototype.setValue = function(fValue) { return new sap.suite.ui.microchart.ColumnMicroChartData(); };


// ---- sap.suite.ui.microchart.ColumnMicroChartLabel --------------------------------------------------------------------------

/**
 * Constructor for a new ColumnMicroChartLabel control.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColor color} : sap.m.ValueCSSColor (default: Neutral)</li>
 * <li>{@link #getLabel label} : string (default: )</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Displays or hides the labels of a column micro chart.
 * @extends sap.ui.core.Element
 * 
 * @version 1.71.0
 * @since 1.34
 * 
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartLabel = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.microchart.ColumnMicroChartLabel with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartLabel.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getColor color}.
 * 
 * The graphic element color.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueCSSColor} Value of property <code>color</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartLabel.prototype.getColor = function() { return new sap.m.ValueCSSColor(); };

/**
 * Gets current value of property {@link #getLabel label}.
 * 
 * The line title.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>label</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartLabel.prototype.getLabel = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.ColumnMicroChartLabel.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartLabel.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getColor color}.
 * 
 * The graphic element color.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueCSSColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChartLabel} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartLabel.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.ColumnMicroChartLabel(); };

/**
 * Sets a new value for property {@link #getLabel label}.
 * 
 * The line title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sLabel New value for property <code>label</code>
 * @returns {sap.suite.ui.microchart.ColumnMicroChartLabel} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ColumnMicroChartLabel.prototype.setLabel = function(sLabel) { return new sap.suite.ui.microchart.ColumnMicroChartLabel(); };


// ---- sap.suite.ui.microchart.CommonBackgroundType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.microchart.CommonBackgroundType.toString = function() { return ""; };

// ---- sap.suite.ui.microchart.ComparisonMicroChart --------------------------------------------------------------------------

/**
 * Constructor for a new ComparisonMicroChart control.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSize size} : sap.m.Size (default: Auto)</li>
 * <li>{@link #getScale scale} : string (default: )</li>
 * <li>{@link #getMinValue minValue} : float</li>
 * <li>{@link #getMaxValue maxValue} : float</li>
 * <li>{@link #getView view} : sap.suite.ui.microchart.ComparisonMicroChartViewType (default: Normal)</li>
 * <li>{@link #getColorPalette colorPalette} : string[] (default: [])</li>
 * <li>{@link #getShrinkable shrinkable} : boolean (default: false)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getIsResponsive isResponsive} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getData data} : sap.suite.ui.microchart.ComparisonMicroChartData[] (default)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Illustrates values as colored bar charts with title, numeric value, and scaling factor in the content area. This control replaces the deprecated sap.suite.ui.commons.ComparisonChart.
 * <br>Note: You can assign a custom tooltip for this microchart. The custom tooltip can be set using expression binding. When no custom tooltip is defined, the tooltip is generated automatically based on the logic described in {@link sap.ui.core.Element#getTooltip_AsString}. For a combination of a generated and a custom tooltip, use <code>((AltText))</code> inside of the tooltip string. The aggregated data of the microchart can also be customized.
 * @extends sap.ui.core.Control
 * 
 * @version 1.71.0
 * @since 1.34
 * 
 * @public
 * @ui5-metamodel This control will also be described in the UI5 (legacy) design time metamodel
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart = function(sId,mSettings) {};
/**
 * The event is triggered when the chart is pressed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.press = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Adds some data to the aggregation {@link #getData data}.
 * @param {sap.suite.ui.microchart.ComparisonMicroChartData}
 *            oData The data to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.addData = function(oData) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.microchart.ComparisonMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.ComparisonMicroChart</code> itself.
 * 
 * The event is triggered when the chart is pressed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.ComparisonMicroChart</code> itself
 * 
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Binds aggregation {@link #getData data} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.bindData = function(oBindingInfo) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Destroys all the data in the aggregation {@link #getData data}.
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.destroyData = function() { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.microchart.ComparisonMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.ComparisonMicroChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.firePress = function(mParameters) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property {@link #getColorPalette colorPalette}.
 * 
 * The color palette for the chart. If this property is set, semantic colors defined in ComparisonData are ignored. Colors from the palette are assigned to each bar consequentially. When all the palette colors are used, assignment of the colors begins from the first palette color.
 * 
 * Default value is <code>[]</code>.
 * @returns {string[]} Value of property <code>colorPalette</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getColorPalette = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getData data}.
 * 
 * The comparison chart bar data.
 * 
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData[]}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getData = function() { return new Array(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * The height of the chart. Overrides the height specified in the <code>size</code> property.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getIsResponsive isResponsive}.
 * 
 * If this set to true, width and height of the control are determined by the width and height of the container in which the control is placed. Size and Width properties are ignored in such case.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>isResponsive</code>
 * @since 1.38.0
 * @deprecated Since 1.58
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getIsResponsive = function() { return false; };

/**
 * Gets current value of property {@link #getMaxValue maxValue}.
 * 
 * The maximum scale value for the chart used to define the value range of the scale for comparing different values.
 * 
 * @returns {float} Value of property <code>maxValue</code>
 * @since 1.42.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getMaxValue = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.ComparisonMicroChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMinValue minValue}.
 * 
 * The minimum scale value for the chart used to define the value range of the scale for comparing different values.
 * 
 * @returns {float} Value of property <code>minValue</code>
 * @since 1.42.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getMinValue = function() { return 0.0; };

/**
 * Gets current value of property {@link #getScale scale}.
 * 
 * The scaling suffix that is added to the actual and target values.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>scale</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getScale = function() { return ""; };

/**
 * Gets current value of property {@link #getShrinkable shrinkable}.
 * 
 * If it is set to true, the height of the control is defined by its content.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>shrinkable</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getShrinkable = function() { return false; };

/**
 * Gets current value of property {@link #getSize size}.
 * 
 * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
 * Responsive size takes width and height of the parent container where the bullet micro chart is included.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.m.Size} Value of property <code>size</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getSize = function() { return new sap.m.Size(); };

/**
 * Gets current value of property {@link #getView view}.
 * 
 * The view of the chart. If not set, the Normal view is used by default.
 * 
 * Default value is <code>Normal</code>.
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartViewType} Value of property <code>view</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getView = function() { return new sap.suite.ui.microchart.ComparisonMicroChartViewType(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * The width of the chart. Overrides the width specified in the <code>size</code> property.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.suite.ui.microchart.ComparisonMicroChartData</code> in the aggregation {@link #getData data}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.microchart.ComparisonMicroChartData}
 *           oData The data whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.indexOfData = function(oData) { return 0; };

/**
 * Inserts a data into the aggregation {@link #getData data}.
 * 
 * @param {sap.suite.ui.microchart.ComparisonMicroChartData}
 *            oData The data to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the data should be inserted at; for
 *              a negative value of <code>iIndex</code>, the data is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the data is inserted at
 *              the last position
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.insertData = function(oData,iIndex) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getData data}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.removeAllData = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Removes a data from the aggregation {@link #getData data}.
 * 
 * @param {int | string | sap.suite.ui.microchart.ComparisonMicroChartData} vData The data to remove or its index or id
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData} The removed data or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.removeData = function(vData) { return new sap.suite.ui.microchart.ComparisonMicroChartData(); };

/**
 * Sets a new value for property {@link #getColorPalette colorPalette}.
 * 
 * The color palette for the chart. If this property is set, semantic colors defined in ComparisonData are ignored. Colors from the palette are assigned to each bar consequentially. When all the palette colors are used, assignment of the colors begins from the first palette color.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {string[]} sColorPalette New value for property <code>colorPalette</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.setColorPalette = function(sColorPalette) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * The height of the chart. Overrides the height specified in the <code>size</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.setHeight = function(sHeight) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Sets a new value for property {@link #getIsResponsive isResponsive}.
 * 
 * If this set to true, width and height of the control are determined by the width and height of the container in which the control is placed. Size and Width properties are ignored in such case.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIsResponsive New value for property <code>isResponsive</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.38.0
 * @deprecated Since 1.58
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.setIsResponsive = function(bIsResponsive) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Sets a new value for property {@link #getMaxValue maxValue}.
 * 
 * The maximum scale value for the chart used to define the value range of the scale for comparing different values.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fMaxValue New value for property <code>maxValue</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.42.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.setMaxValue = function(fMaxValue) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Sets a new value for property {@link #getMinValue minValue}.
 * 
 * The minimum scale value for the chart used to define the value range of the scale for comparing different values.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fMinValue New value for property <code>minValue</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.42.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.setMinValue = function(fMinValue) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Sets a new value for property {@link #getScale scale}.
 * 
 * The scaling suffix that is added to the actual and target values.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sScale New value for property <code>scale</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.setScale = function(sScale) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Sets a new value for property {@link #getShrinkable shrinkable}.
 * 
 * If it is set to true, the height of the control is defined by its content.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShrinkable New value for property <code>shrinkable</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.setShrinkable = function(bShrinkable) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Sets a new value for property {@link #getSize size}.
 * 
 * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
 * Responsive size takes width and height of the parent container where the bullet micro chart is included.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.m.Size} sSize New value for property <code>size</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.setSize = function(sSize) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Sets a new value for property {@link #getView view}.
 * 
 * The view of the chart. If not set, the Normal view is used by default.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Normal</code>.
 * @param {sap.suite.ui.microchart.ComparisonMicroChartViewType} sView New value for property <code>view</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.setView = function(sView) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * The width of the chart. Overrides the width specified in the <code>size</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.setWidth = function(sWidth) { return new sap.suite.ui.microchart.ComparisonMicroChart(); };

/**
 * Unbinds aggregation {@link #getData data} from model data.
 * @returns {sap.suite.ui.microchart.ComparisonMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChart.prototype.unbindData = function() { return new sap.suite.ui.microchart.ComparisonMicroChart(); };


// ---- sap.suite.ui.microchart.ComparisonMicroChartData --------------------------------------------------------------------------

/**
 * Constructor for a new ComparisonMicroChartData.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getValue value} : float (default: 0)</li>
 * <li>{@link #getColor color} : sap.m.ValueCSSColor (default: Neutral)</li>
 * <li>{@link #getTitle title} : string (default: )</li>
 * <li>{@link #getDisplayValue displayValue} : string (default: )</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Contains the values of the comparison chart.
 * @extends sap.ui.core.Element
 * 
 * @version 1.71.0
 * @since 1.34
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData = function(sId,mSettings) {};
/**
 * The event is fired when the user chooses the comparison chart bar.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.press = function(oControlEvent) {  };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.microchart.ComparisonMicroChartData</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.ComparisonMicroChartData</code> itself.
 * 
 * The event is fired when the user chooses the comparison chart bar.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.ComparisonMicroChartData</code> itself
 * 
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.ComparisonMicroChartData(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.microchart.ComparisonMicroChartData</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.ComparisonMicroChartData(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.ComparisonMicroChartData with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.firePress = function(mParameters) { return new sap.suite.ui.microchart.ComparisonMicroChartData(); };

/**
 * Gets current value of property {@link #getColor color}.
 * 
 * The semantic color of the value.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueCSSColor} Value of property <code>color</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.getColor = function() { return new sap.m.ValueCSSColor(); };

/**
 * Gets current value of property {@link #getDisplayValue displayValue}.
 * 
 * If this property is set then it will be displayed instead of value.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>displayValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.getDisplayValue = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.ComparisonMicroChartData.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getTitle title}.
 * 
 * The comparison bar title.
 * 
 * Default value is <code>empty string</code>.
 * @returns {string} Value of property <code>title</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.getTitle = function() { return ""; };

/**
 * Gets current value of property {@link #getValue value}.
 * 
 * The value for comparison.
 * 
 * Default value is <code>0</code>.
 * @returns {float} Value of property <code>value</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.getValue = function() { return 0.0; };

/**
 * Sets a new value for property {@link #getColor color}.
 * 
 * The semantic color of the value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueCSSColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.ComparisonMicroChartData(); };

/**
 * Sets a new value for property {@link #getDisplayValue displayValue}.
 * 
 * If this property is set then it will be displayed instead of value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sDisplayValue New value for property <code>displayValue</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.setDisplayValue = function(sDisplayValue) { return new sap.suite.ui.microchart.ComparisonMicroChartData(); };

/**
 * Sets a new value for property {@link #getTitle title}.
 * 
 * The comparison bar title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>empty string</code>.
 * @param {string} sTitle New value for property <code>title</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.setTitle = function(sTitle) { return new sap.suite.ui.microchart.ComparisonMicroChartData(); };

/**
 * Sets a new value for property {@link #getValue value}.
 * 
 * The value for comparison.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {float} fValue New value for property <code>value</code>
 * @returns {sap.suite.ui.microchart.ComparisonMicroChartData} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartData.prototype.setValue = function(fValue) { return new sap.suite.ui.microchart.ComparisonMicroChartData(); };


// ---- sap.suite.ui.microchart.ComparisonMicroChartViewType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.microchart.ComparisonMicroChartViewType.toString = function() { return ""; };

// ---- sap.suite.ui.microchart.DeltaMicroChart --------------------------------------------------------------------------

/**
 * Constructor for a new DeltaMicroChart control.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getValue1 value1} : float</li>
 * <li>{@link #getValue2 value2} : float</li>
 * <li>{@link #getTitle1 title1} : string</li>
 * <li>{@link #getTitle2 title2} : string</li>
 * <li>{@link #getDisplayValue1 displayValue1} : string</li>
 * <li>{@link #getDisplayValue2 displayValue2} : string</li>
 * <li>{@link #getDeltaDisplayValue deltaDisplayValue} : string</li>
 * <li>{@link #getColor color} : sap.m.ValueCSSColor (default: Neutral)</li>
 * <li>{@link #getView view} : sap.suite.ui.microchart.DeltaMicroChartViewType (default: Normal)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getSize size} : sap.m.Size (default: Auto)</li>
 * <li>{@link #getIsResponsive isResponsive} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Represents the delta of two values as a chart. This control replaces the deprecated sap.suite.ui.commons.DeltaMicroChart.
 * <br>Note: You can assign a custom tooltip for this microchart. The custom tooltip can be set using expression binding. When no custom tooltip is defined, the tooltip is generated automatically based on the logic described in {@link sap.ui.core.Element#getTooltip_AsString}. For a combination of a generated and a custom tooltip, use <code>((AltText))</code> inside of the tooltip string.
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * @since 1.34
 * 
 * @public
 * @ui5-metamodel This control will also be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart = function(sId,mSettings) {};
/**
 * The event is triggered when the chart is pressed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.press = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.microchart.DeltaMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.DeltaMicroChart</code> itself.
 * 
 * The event is triggered when the chart is pressed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.DeltaMicroChart</code> itself
 * 
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.microchart.DeltaMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.DeltaMicroChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.firePress = function(mParameters) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property {@link #getColor color}.
 * 
 * The semantic color of the delta value.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueCSSColor} Value of property <code>color</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getColor = function() { return new sap.m.ValueCSSColor(); };

/**
 * Gets current value of property {@link #getDeltaDisplayValue deltaDisplayValue}.
 * 
 * If this property is set, it is rendered instead of a calculated delta.
 * 
 * @returns {string} Value of property <code>deltaDisplayValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getDeltaDisplayValue = function() { return ""; };

/**
 * Gets current value of property {@link #getDisplayValue1 displayValue1}.
 * 
 * If this property is set, it is rendered instead of value1.
 * 
 * @returns {string} Value of property <code>displayValue1</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getDisplayValue1 = function() { return ""; };

/**
 * Gets current value of property {@link #getDisplayValue2 displayValue2}.
 * 
 * If this property is set, it is rendered instead of value2.
 * 
 * @returns {string} Value of property <code>displayValue2</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getDisplayValue2 = function() { return ""; };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * The height of the chart. Overrides the height specified in the <code>size</code> property.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getIsResponsive isResponsive}.
 * 
 * If this set to true, width and height of the control are determined by the width and height of the container in which the control is placed. Size and Width properties are ignored in such case.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>isResponsive</code>
 * @since 1.38.0
 * @deprecated Since 1.61.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getIsResponsive = function() { return false; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.DeltaMicroChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSize size}.
 * 
 * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
 * Responsive size takes width and height of the parent container where the delta micro chart is included.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.m.Size} Value of property <code>size</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getSize = function() { return new sap.m.Size(); };

/**
 * Gets current value of property {@link #getTitle1 title1}.
 * 
 * The first value title.
 * 
 * @returns {string} Value of property <code>title1</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getTitle1 = function() { return ""; };

/**
 * Gets current value of property {@link #getTitle2 title2}.
 * 
 * The second value title.
 * 
 * @returns {string} Value of property <code>title2</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getTitle2 = function() { return ""; };

/**
 * Gets current value of property {@link #getValue1 value1}.
 * 
 * The first value for delta calculation.
 * 
 * @returns {float} Value of property <code>value1</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getValue1 = function() { return 0.0; };

/**
 * Gets current value of property {@link #getValue2 value2}.
 * 
 * The second value for delta calculation.
 * 
 * @returns {float} Value of property <code>value2</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getValue2 = function() { return 0.0; };

/**
 * Gets current value of property {@link #getView view}.
 * 
 * The view of the chart. If not set, the <code>Normal</code> view is used by default.
 * 
 * Default value is <code>Normal</code>.
 * @returns {sap.suite.ui.microchart.DeltaMicroChartViewType} Value of property <code>view</code>
 * @since 1.61.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getView = function() { return new sap.suite.ui.microchart.DeltaMicroChartViewType(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * The width of the chart. Overrides the width specified in the <code>size</code> property.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Sets a new value for property {@link #getColor color}.
 * 
 * The semantic color of the delta value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueCSSColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property {@link #getDeltaDisplayValue deltaDisplayValue}.
 * 
 * If this property is set, it is rendered instead of a calculated delta.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDeltaDisplayValue New value for property <code>deltaDisplayValue</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setDeltaDisplayValue = function(sDeltaDisplayValue) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property {@link #getDisplayValue1 displayValue1}.
 * 
 * If this property is set, it is rendered instead of value1.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDisplayValue1 New value for property <code>displayValue1</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setDisplayValue1 = function(sDisplayValue1) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property {@link #getDisplayValue2 displayValue2}.
 * 
 * If this property is set, it is rendered instead of value2.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDisplayValue2 New value for property <code>displayValue2</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setDisplayValue2 = function(sDisplayValue2) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * The height of the chart. Overrides the height specified in the <code>size</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setHeight = function(sHeight) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property {@link #getIsResponsive isResponsive}.
 * 
 * If this set to true, width and height of the control are determined by the width and height of the container in which the control is placed. Size and Width properties are ignored in such case.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIsResponsive New value for property <code>isResponsive</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.38.0
 * @deprecated Since 1.61.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setIsResponsive = function(bIsResponsive) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property {@link #getSize size}.
 * 
 * The size of the microchart. If not set, the default size is applied based on the size of the device tile.
 * Responsive size takes width and height of the parent container where the delta micro chart is included.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.m.Size} sSize New value for property <code>size</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setSize = function(sSize) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property {@link #getTitle1 title1}.
 * 
 * The first value title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle1 New value for property <code>title1</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setTitle1 = function(sTitle1) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property {@link #getTitle2 title2}.
 * 
 * The second value title.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTitle2 New value for property <code>title2</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setTitle2 = function(sTitle2) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property {@link #getValue1 value1}.
 * 
 * The first value for delta calculation.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fValue1 New value for property <code>value1</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setValue1 = function(fValue1) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property {@link #getValue2 value2}.
 * 
 * The second value for delta calculation.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fValue2 New value for property <code>value2</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setValue2 = function(fValue2) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property {@link #getView view}.
 * 
 * The view of the chart. If not set, the <code>Normal</code> view is used by default.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Normal</code>.
 * @param {sap.suite.ui.microchart.DeltaMicroChartViewType} sView New value for property <code>view</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.61.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setView = function(sView) { return new sap.suite.ui.microchart.DeltaMicroChart(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * The width of the chart. Overrides the width specified in the <code>size</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.suite.ui.microchart.DeltaMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChart.prototype.setWidth = function(sWidth) { return new sap.suite.ui.microchart.DeltaMicroChart(); };


// ---- sap.suite.ui.microchart.DeltaMicroChartViewType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.microchart.DeltaMicroChartViewType.toString = function() { return ""; };

// ---- sap.suite.ui.microchart.HarveyBallMicroChart --------------------------------------------------------------------------

/**
 * Constructor for a new HarveyBallMicroChart.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTotal total} : float</li>
 * <li>{@link #getTotalLabel totalLabel} : string</li>
 * <li>{@link #getTotalScale totalScale} : string</li>
 * <li>{@link #getFormattedLabel formattedLabel} : boolean (default: false)</li>
 * <li>{@link #getShowTotal showTotal} : boolean (default: true)</li>
 * <li>{@link #getShowFractions showFractions} : boolean (default: true)</li>
 * <li>{@link #getSize size} : sap.m.Size (default: Auto)</li>
 * <li>{@link #getColorPalette colorPalette} : string[] (default: [])</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getAlignContent alignContent} : sap.suite.ui.microchart.HorizontalAlignmentType (default: Left)</li>
 * <li>{@link #getIsResponsive isResponsive} : boolean (default: false)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.suite.ui.microchart.HarveyBallMicroChartItem[] (default)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * A radial chart that displays a value compared to its total.
 * <br>Unlike a pie chart, which shows multiple values or sectors, a Harvey Ball microchart shows only one value from a total.
 * <br>The sector that represents a value being compared to a total is defined by {@link sap.suite.ui.microchart.HarveyBallMicroChartItem}.
 * <br>Note: You can assign a custom tooltip for this microchart. The custom tooltip can be set using expression binding. When no custom tooltip is defined, the tooltip is generated automatically based on the logic described in {@link sap.ui.core.Element#getTooltip_AsString}. For a combination of a generated and a custom tooltip, use <code>((AltText))</code> inside of the tooltip string. The aggregated data of the microchart can also be customized.
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * @since 1.34
 * 
 * @public
 * @ui5-metamodel This control will also be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart = function(sId,mSettings) {};
/**
 * This event is fired when the chart is clicked or tapped.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.press = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Adds some item to the aggregation {@link #getItems items}.
 * @param {sap.suite.ui.microchart.HarveyBallMicroChartItem}
 *            oItem The item to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.addItem = function(oItem) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.microchart.HarveyBallMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.HarveyBallMicroChart</code> itself.
 * 
 * This event is fired when the chart is clicked or tapped.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.HarveyBallMicroChart</code> itself
 * 
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Binds aggregation {@link #getItems items} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.bindItems = function(oBindingInfo) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Destroys all the items in the aggregation {@link #getItems items}.
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.destroyItems = function() { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.microchart.HarveyBallMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.HarveyBallMicroChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.firePress = function(mParameters) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Gets current value of property {@link #getAlignContent alignContent}.
 * 
 * The alignment of the content. If not set, the <code>Left</code> alignment type is used.
 * 
 * Default value is <code>Left</code>.
 * @returns {sap.suite.ui.microchart.HorizontalAlignmentType} Value of property <code>alignContent</code>
 * @since 1.62.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getAlignContent = function() { return new sap.suite.ui.microchart.HorizontalAlignmentType(); };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property {@link #getColorPalette colorPalette}.
 * 
 * The color palette for the chart. Currently only a single color (first color in the array) is supported.
 * <br>If this property is defined, the semantic color defined in the {@link sap.suite.ui.microchart.HarveyBallMicroChartItem}
 * is ignored.
 * 
 * Default value is <code>[]</code>.
 * @returns {string[]} Value of property <code>colorPalette</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getColorPalette = function() { return new Array(); };

/**
 * Gets current value of property {@link #getFormattedLabel formattedLabel}.
 * 
 * If set to <code>true</code>, the <code>totalLabel</code> property is used instead of the combination of
 * the total value and its scaling factor.
 * <br>The default value is <code>false</code>, which means that the total value, defined by the <code>total</code>
 * property, and the scaling factor, defined by the <code>totalScale</code> property, are displayed separately.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>formattedLabel</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getFormattedLabel = function() { return false; };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * The height of the chart. Overrides the height specified in the <code>size</code> property.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * @since 1.62.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getIsResponsive isResponsive}.
 * 
 * If set to <code>true</code>, the width and height of the control are determined by the width and height
 * of the parent container, in which case the <code>size</code> and <code>width</code> properties are ignored.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>isResponsive</code>
 * @since 1.38.0
 * @deprecated Since 1.62.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getIsResponsive = function() { return false; };

/**
 * Gets content of aggregation {@link #getItems items}.
 * 
 * The set of items. Currently only a single item is supported.
 * 
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChartItem[]}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getItems = function() { return new Array(); };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.HarveyBallMicroChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getShowFractions showFractions}.
 * 
 * If set to <code>true</code>, the fraction values are displayed next to the chart. The default setting is
 * <code>true</code>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showFractions</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getShowFractions = function() { return false; };

/**
 * Gets current value of property {@link #getShowTotal showTotal}.
 * 
 * If set to <code>true</code>, the total value is displayed next to the chart. The default setting
 * is <code>true</code>.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showTotal</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getShowTotal = function() { return false; };

/**
 * Gets current value of property {@link #getSize size}.
 * 
 * The size of the chart. If not set, the default size is applied based on the device type.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.m.Size} Value of property <code>size</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getSize = function() { return new sap.m.Size(); };

/**
 * Gets current value of property {@link #getTotal total}.
 * 
 * The total value. The total value is represented by a full circle, or 360 degrees value on the chart.
 * 
 * @returns {float} Value of property <code>total</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getTotal = function() { return 0.0; };

/**
 * Gets current value of property {@link #getTotalLabel totalLabel}.
 * 
 * The total label. If specified, it is displayed instead of the total value.
 * 
 * @returns {string} Value of property <code>totalLabel</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getTotalLabel = function() { return ""; };

/**
 * Gets current value of property {@link #getTotalScale totalScale}.
 * 
 * The scaling factor that is displayed next to the total value.
 * 
 * @returns {string} Value of property <code>totalScale</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getTotalScale = function() { return ""; };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * The width of the chart. Overrides the width specified in the <code>size</code> property.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.suite.ui.microchart.HarveyBallMicroChartItem</code> in the aggregation {@link #getItems items}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.microchart.HarveyBallMicroChartItem}
 *           oItem The item whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.indexOfItem = function(oItem) { return 0; };

/**
 * Inserts a item into the aggregation {@link #getItems items}.
 * 
 * @param {sap.suite.ui.microchart.HarveyBallMicroChartItem}
 *            oItem The item to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the item should be inserted at; for
 *              a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the item is inserted at
 *              the last position
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.insertItem = function(oItem,iIndex) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getItems items}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChartItem[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.removeAllItems = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Removes a item from the aggregation {@link #getItems items}.
 * 
 * @param {int | string | sap.suite.ui.microchart.HarveyBallMicroChartItem} vItem The item to remove or its index or id
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChartItem} The removed item or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.removeItem = function(vItem) { return new sap.suite.ui.microchart.HarveyBallMicroChartItem(); };

/**
 * Sets a new value for property {@link #getAlignContent alignContent}.
 * 
 * The alignment of the content. If not set, the <code>Left</code> alignment type is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Left</code>.
 * @param {sap.suite.ui.microchart.HorizontalAlignmentType} sAlignContent New value for property <code>alignContent</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.62.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setAlignContent = function(sAlignContent) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Sets a new value for property {@link #getColorPalette colorPalette}.
 * 
 * The color palette for the chart. Currently only a single color (first color in the array) is supported.
 * <br>If this property is defined, the semantic color defined in the {@link sap.suite.ui.microchart.HarveyBallMicroChartItem}
 * is ignored.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>[]</code>.
 * @param {string[]} sColorPalette New value for property <code>colorPalette</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setColorPalette = function(sColorPalette) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Sets a new value for property {@link #getFormattedLabel formattedLabel}.
 * 
 * If set to <code>true</code>, the <code>totalLabel</code> property is used instead of the combination of
 * the total value and its scaling factor.
 * <br>The default value is <code>false</code>, which means that the total value, defined by the <code>total</code>
 * property, and the scaling factor, defined by the <code>totalScale</code> property, are displayed separately.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFormattedLabel New value for property <code>formattedLabel</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setFormattedLabel = function(bFormattedLabel) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * The height of the chart. Overrides the height specified in the <code>size</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.62.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setHeight = function(sHeight) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Sets a new value for property {@link #getIsResponsive isResponsive}.
 * 
 * If set to <code>true</code>, the width and height of the control are determined by the width and height
 * of the parent container, in which case the <code>size</code> and <code>width</code> properties are ignored.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bIsResponsive New value for property <code>isResponsive</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.38.0
 * @deprecated Since 1.62.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setIsResponsive = function(bIsResponsive) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Sets a new value for property {@link #getShowFractions showFractions}.
 * 
 * If set to <code>true</code>, the fraction values are displayed next to the chart. The default setting is
 * <code>true</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowFractions New value for property <code>showFractions</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setShowFractions = function(bShowFractions) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Sets a new value for property {@link #getShowTotal showTotal}.
 * 
 * If set to <code>true</code>, the total value is displayed next to the chart. The default setting
 * is <code>true</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowTotal New value for property <code>showTotal</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setShowTotal = function(bShowTotal) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Sets a new value for property {@link #getSize size}.
 * 
 * The size of the chart. If not set, the default size is applied based on the device type.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.m.Size} sSize New value for property <code>size</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setSize = function(sSize) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Sets a new value for property {@link #getTotal total}.
 * 
 * The total value. The total value is represented by a full circle, or 360 degrees value on the chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fTotal New value for property <code>total</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setTotal = function(fTotal) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Sets a new value for property {@link #getTotalLabel totalLabel}.
 * 
 * The total label. If specified, it is displayed instead of the total value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTotalLabel New value for property <code>totalLabel</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setTotalLabel = function(sTotalLabel) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Sets a new value for property {@link #getTotalScale totalScale}.
 * 
 * The scaling factor that is displayed next to the total value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sTotalScale New value for property <code>totalScale</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setTotalScale = function(sTotalScale) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * The width of the chart. Overrides the width specified in the <code>size</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.setWidth = function(sWidth) { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };

/**
 * Unbinds aggregation {@link #getItems items} from model data.
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChart.prototype.unbindItems = function() { return new sap.suite.ui.microchart.HarveyBallMicroChart(); };


// ---- sap.suite.ui.microchart.HarveyBallMicroChartItem --------------------------------------------------------------------------

/**
 * Constructor for a new HarveyBallMicroChartItem to be used in a {@link sap.suite.ui.microchart.HarveyBallMicroChart}.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColor color} : sap.m.ValueCSSColor (default: Neutral)</li>
 * <li>{@link #getFraction fraction} : float (default: 0)</li>
 * <li>{@link #getFractionLabel fractionLabel} : string</li>
 * <li>{@link #getFractionScale fractionScale} : string</li>
 * <li>{@link #getFormattedLabel formattedLabel} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Defines the fraction value that is compared with total in a {@link sap.suite.ui.microchart.HarveyBallMicroChart}.
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * @since 1.34
 * 
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.microchart.HarveyBallMicroChartItem with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getColor color}.
 * 
 * The color of the sector representing the fraction value.<br>The same color is used for the fraction
 * value label defined either by the <code>fraction</code> property or by the <code>fractionLabel</code>
 * property.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueCSSColor} Value of property <code>color</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.getColor = function() { return new sap.m.ValueCSSColor(); };

/**
 * Gets current value of property {@link #getFormattedLabel formattedLabel}.
 * 
 * If set to <code>true</code>, the <code>fractionLabel</code> property is used instead of the
 * combination of the fraction value and scaling factor.
 * <br>The default value is <code>false</code>, which means that the fraction value, defined by
 * the <code>fraction</code> property, and the scaling factor, defined by the <code>fractionScale</code>
 * property are displayed separately.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>formattedLabel</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.getFormattedLabel = function() { return false; };

/**
 * Gets current value of property {@link #getFraction fraction}.
 * 
 * The fraction value that defines the size of the colored sector.
 * <br>This property must be set to a value that is a fraction of the <code>total</code>
 * value defined for the {@link sap.suite.ui.microchart.HarveyBallMicroChart}.
 * 
 * Default value is <code>0</code>.
 * @returns {float} Value of property <code>fraction</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.getFraction = function() { return 0.0; };

/**
 * Gets current value of property {@link #getFractionLabel fractionLabel}.
 * 
 * The fraction label. If this property is specified, it is displayed instead of the label that is
 * based on the <code>fraction</code> property.
 * 
 * @returns {string} Value of property <code>fractionLabel</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.getFractionLabel = function() { return ""; };

/**
 * Gets current value of property {@link #getFractionScale fractionScale}.
 * 
 * The scaling factor that is displayed after the fraction value.
 * 
 * @returns {string} Value of property <code>fractionScale</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.getFractionScale = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.HarveyBallMicroChartItem.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Sets a new value for property {@link #getColor color}.
 * 
 * The color of the sector representing the fraction value.<br>The same color is used for the fraction
 * value label defined either by the <code>fraction</code> property or by the <code>fractionLabel</code>
 * property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueCSSColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.HarveyBallMicroChartItem(); };

/**
 * Sets a new value for property {@link #getFormattedLabel formattedLabel}.
 * 
 * If set to <code>true</code>, the <code>fractionLabel</code> property is used instead of the
 * combination of the fraction value and scaling factor.
 * <br>The default value is <code>false</code>, which means that the fraction value, defined by
 * the <code>fraction</code> property, and the scaling factor, defined by the <code>fractionScale</code>
 * property are displayed separately.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bFormattedLabel New value for property <code>formattedLabel</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.setFormattedLabel = function(bFormattedLabel) { return new sap.suite.ui.microchart.HarveyBallMicroChartItem(); };

/**
 * Sets a new value for property {@link #getFraction fraction}.
 * 
 * The fraction value that defines the size of the colored sector.
 * <br>This property must be set to a value that is a fraction of the <code>total</code>
 * value defined for the {@link sap.suite.ui.microchart.HarveyBallMicroChart}.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {float} fFraction New value for property <code>fraction</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.setFraction = function(fFraction) { return new sap.suite.ui.microchart.HarveyBallMicroChartItem(); };

/**
 * Sets a new value for property {@link #getFractionLabel fractionLabel}.
 * 
 * The fraction label. If this property is specified, it is displayed instead of the label that is
 * based on the <code>fraction</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFractionLabel New value for property <code>fractionLabel</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.setFractionLabel = function(sFractionLabel) { return new sap.suite.ui.microchart.HarveyBallMicroChartItem(); };

/**
 * Sets a new value for property {@link #getFractionScale fractionScale}.
 * 
 * The scaling factor that is displayed after the fraction value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sFractionScale New value for property <code>fractionScale</code>
 * @returns {sap.suite.ui.microchart.HarveyBallMicroChartItem} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.HarveyBallMicroChartItem.prototype.setFractionScale = function(sFractionScale) { return new sap.suite.ui.microchart.HarveyBallMicroChartItem(); };


// ---- sap.suite.ui.microchart.HorizontalAlignmentType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.microchart.HorizontalAlignmentType.toString = function() { return ""; };

// ---- sap.suite.ui.microchart.InteractiveBarChart --------------------------------------------------------------------------

/**
 * Constructor for a new InteractiveBarChart control.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getDisplayedBars displayedBars} : int (default: 3)</li>
 * <li>{@link #getLabelWidth labelWidth} : sap.ui.core.Percentage (default: 40%)</li>
 * <li>{@link #getSelectionEnabled selectionEnabled} : boolean (default: true)</li>
 * <li>{@link #getMin min} : float</li>
 * <li>{@link #getMax max} : float</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getBars bars} : sap.suite.ui.microchart.InteractiveBarChartBar[] (default)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:selectionChanged selectionChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The InteractiveBarChart control belongs to a chart control group in the MicroChart library with a number of interactive features. These interactive features provide more information on a chart value.
 * For example, by selecting a bar you can get more details on the displayed value.
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @public
 * @since 1.42.0
 * @constructor
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart = function(sId,mSettings) {};
/**
 * The event is fired when the user presses the chart while its bars are not selectable in non-interactive mode. This is decided internally, depending on the size of the bars.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.press = function(oControlEvent) {  };

/**
 * Event is fired when user has selected or deselected a bar.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.suite.ui.microchart.InteractiveBarChartBar[]} oControlEvent.getParameters.selectedBars All bars which are in selected state.
 * @param {sap.suite.ui.microchart.InteractiveBarChartBar} oControlEvent.getParameters.bar The bar being selected or deselected.
 * @param {boolean} oControlEvent.getParameters.selected The selection state of the bar being selected or deselected.
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.selectionChanged = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.InteractiveBarChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.suite.ui.microchart.InteractiveBarChart(); };

/**
 * Adds some bar to the aggregation {@link #getBars bars}.
 * @param {sap.suite.ui.microchart.InteractiveBarChartBar}
 *            oBar The bar to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.InteractiveBarChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.addBar = function(oBar) { return new sap.suite.ui.microchart.InteractiveBarChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.microchart.InteractiveBarChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.InteractiveBarChart</code> itself.
 * 
 * The event is fired when the user presses the chart while its bars are not selectable in non-interactive mode. This is decided internally, depending on the size of the bars.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.InteractiveBarChart</code> itself
 * 
 * @returns {sap.suite.ui.microchart.InteractiveBarChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.InteractiveBarChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:selectionChanged selectionChanged} event of this <code>sap.suite.ui.microchart.InteractiveBarChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.InteractiveBarChart</code> itself.
 * 
 * Event is fired when user has selected or deselected a bar.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.InteractiveBarChart</code> itself
 * 
 * @returns {sap.suite.ui.microchart.InteractiveBarChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.attachSelectionChanged = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.InteractiveBarChart(); };

/**
 * Binds aggregation {@link #getBars bars} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.suite.ui.microchart.InteractiveBarChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.bindBars = function(oBindingInfo) { return new sap.suite.ui.microchart.InteractiveBarChart(); };

/**
 * Destroys all the bars in the aggregation {@link #getBars bars}.
 * @returns {sap.suite.ui.microchart.InteractiveBarChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.destroyBars = function() { return new sap.suite.ui.microchart.InteractiveBarChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.microchart.InteractiveBarChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.InteractiveBarChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.InteractiveBarChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:selectionChanged selectionChanged} event of this <code>sap.suite.ui.microchart.InteractiveBarChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.InteractiveBarChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.detachSelectionChanged = function(fnFunction,oListener) { return new sap.suite.ui.microchart.InteractiveBarChart(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.InteractiveBarChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.microchart.InteractiveBarChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.firePress = function(mParameters) { return new sap.suite.ui.microchart.InteractiveBarChart(); };

/**
 * Fires event {@link #event:selectionChanged selectionChanged} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.suite.ui.microchart.InteractiveBarChartBar[]} [mParameters.selectedBars] All bars which are in selected state.
 * @param {sap.suite.ui.microchart.InteractiveBarChartBar} [mParameters.bar] The bar being selected or deselected.
 * @param {boolean} [mParameters.selected] The selection state of the bar being selected or deselected.
 * 
 * @returns {sap.suite.ui.microchart.InteractiveBarChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.fireSelectionChanged = function(mParameters) { return new sap.suite.ui.microchart.InteractiveBarChart(); };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getBars bars}.
 * 
 * Bars displayed on the chart.
 * 
 * @returns {sap.suite.ui.microchart.InteractiveBarChartBar[]}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.getBars = function() { return new Array(); };

/**
 * Gets current value of property {@link #getDisplayedBars displayedBars}.
 * 
 * The number of displayed bars.
 * 
 * Default value is <code>3</code>.
 * @returns {int} Value of property <code>displayedBars</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.getDisplayedBars = function() { return 0; };

/**
 * Gets current value of property {@link #getLabelWidth labelWidth}.
 * 
 * Width of the labels column in the resulting layout (in percentage). Possible range of values from 0 to 100.
 * A value of 40 results in the labels column taking up 40% of available space.
 * 
 * Default value is <code>40%</code>.
 * @returns {sap.ui.core.Percentage} Value of property <code>labelWidth</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.getLabelWidth = function() { return new sap.ui.core.Percentage(); };

/**
 * Gets current value of property {@link #getMax max}.
 * 
 * End of displayed scale.
 * 
 * @returns {float} Value of property <code>max</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.getMax = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.InteractiveBarChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMin min}.
 * 
 * Begin of displayed scale.
 * 
 * @returns {float} Value of property <code>min</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.getMin = function() { return 0.0; };

/**
 * Gets all selected bars.
 * 
 * @returns {sap.suite.ui.microchart.InteractiveBarChartBar[]} All selected bars
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.getSelectedBars = function() { return new Array(); };

/**
 * Gets current value of property {@link #getSelectionEnabled selectionEnabled}.
 * 
 * Enables the selection in the chart.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>selectionEnabled</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.getSelectionEnabled = function() { return false; };

/**
 * Checks for the provided <code>sap.suite.ui.microchart.InteractiveBarChartBar</code> in the aggregation {@link #getBars bars}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.microchart.InteractiveBarChartBar}
 *           oBar The bar whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.indexOfBar = function(oBar) { return 0; };

/**
 * Inserts a bar into the aggregation {@link #getBars bars}.
 * 
 * @param {sap.suite.ui.microchart.InteractiveBarChartBar}
 *            oBar The bar to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the bar should be inserted at; for
 *              a negative value of <code>iIndex</code>, the bar is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the bar is inserted at
 *              the last position
 * @returns {sap.suite.ui.microchart.InteractiveBarChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.insertBar = function(oBar,iIndex) { return new sap.suite.ui.microchart.InteractiveBarChart(); };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getBars bars}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.microchart.InteractiveBarChartBar[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.removeAllBars = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Removes a bar from the aggregation {@link #getBars bars}.
 * 
 * @param {int | string | sap.suite.ui.microchart.InteractiveBarChartBar} vBar The bar to remove or its index or id
 * @returns {sap.suite.ui.microchart.InteractiveBarChartBar} The removed bar or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.removeBar = function(vBar) { return new sap.suite.ui.microchart.InteractiveBarChartBar(); };

/**
 * Sets a new value for property {@link #getDisplayedBars displayedBars}.
 * 
 * The number of displayed bars.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>3</code>.
 * @param {int} iDisplayedBars New value for property <code>displayedBars</code>
 * @returns {sap.suite.ui.microchart.InteractiveBarChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.setDisplayedBars = function(iDisplayedBars) { return new sap.suite.ui.microchart.InteractiveBarChart(); };

/**
 * Sets a new value for property {@link #getLabelWidth labelWidth}.
 * 
 * Width of the labels column in the resulting layout (in percentage). Possible range of values from 0 to 100.
 * A value of 40 results in the labels column taking up 40% of available space.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>40%</code>.
 * @param {sap.ui.core.Percentage} sLabelWidth New value for property <code>labelWidth</code>
 * @returns {sap.suite.ui.microchart.InteractiveBarChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.setLabelWidth = function(sLabelWidth) { return new sap.suite.ui.microchart.InteractiveBarChart(); };

/**
 * Sets a new value for property {@link #getMax max}.
 * 
 * End of displayed scale.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fMax New value for property <code>max</code>
 * @returns {sap.suite.ui.microchart.InteractiveBarChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.setMax = function(fMax) { return new sap.suite.ui.microchart.InteractiveBarChart(); };

/**
 * Sets a new value for property {@link #getMin min}.
 * 
 * Begin of displayed scale.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fMin New value for property <code>min</code>
 * @returns {sap.suite.ui.microchart.InteractiveBarChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.setMin = function(fMin) { return new sap.suite.ui.microchart.InteractiveBarChart(); };

/**
 * Already selected bars will be deselected and members of the selectedBars parameter which are part of the bars aggregation will be set to selected state.
 * 
 * @param {sap.suite.ui.microchart.InteractiveBarChartBar | sap.suite.ui.microchart.InteractiveBarChartBar[]} selectedBars A bar element or an array of bars for which the status should be set to selected.
 * @returns {sap.suite.ui.microchart.InteractiveBarChart} this to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.setSelectedBars = function(selectedBars) { return new sap.suite.ui.microchart.InteractiveBarChart(); };

/**
 * Sets a new value for property {@link #getSelectionEnabled selectionEnabled}.
 * 
 * Enables the selection in the chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSelectionEnabled New value for property <code>selectionEnabled</code>
 * @returns {sap.suite.ui.microchart.InteractiveBarChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.setSelectionEnabled = function(bSelectionEnabled) { return new sap.suite.ui.microchart.InteractiveBarChart(); };

/**
 * Unbinds aggregation {@link #getBars bars} from model data.
 * @returns {sap.suite.ui.microchart.InteractiveBarChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChart.prototype.unbindBars = function() { return new sap.suite.ui.microchart.InteractiveBarChart(); };


// ---- sap.suite.ui.microchart.InteractiveBarChartBar --------------------------------------------------------------------------

/**
 * Constructor for the bar element of the InteractiveBarChart.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getSelected selected} : boolean (default: false)</li>
 * <li>{@link #getDisplayedValue displayedValue} : string</li>
 * <li>{@link #getColor color} : sap.m.ValueColor (default: Neutral)</li>
 * <li>{@link #getValue value} : float</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class A bar element for the InteractiveBarChart.
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * 
 * @public
 * @since 1.42.0
 * @constructor
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.InteractiveBarChartBar = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.microchart.InteractiveBarChartBar with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.InteractiveBarChartBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getColor color}.
 * 
 * Determines the color of the bar.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueColor} Value of property <code>color</code>
 * @since 1.50.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChartBar.prototype.getColor = function() { return new sap.m.ValueColor(); };

/**
 * Gets current value of property {@link #getDisplayedValue displayedValue}.
 * 
 * The value label to be displayed on the bar in the chart.
 * 
 * @returns {string} Value of property <code>displayedValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChartBar.prototype.getDisplayedValue = function() { return ""; };

/**
 * Gets current value of property {@link #getLabel label}.
 * 
 * The label for the chart bar.
 * 
 * @returns {string} Value of property <code>label</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChartBar.prototype.getLabel = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.InteractiveBarChartBar.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.InteractiveBarChartBar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSelected selected}.
 * 
 * Determines if the chart bar is selected.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>selected</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChartBar.prototype.getSelected = function() { return false; };

/**
 * Gets current value of property {@link #getValue value}.
 * 
 * The numeric value of the chart bar to be displayed on the bar.
 * 
 * @returns {float} Value of property <code>value</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChartBar.prototype.getValue = function() { return 0.0; };

/**
 * Sets a new value for property {@link #getColor color}.
 * 
 * Determines the color of the bar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.InteractiveBarChartBar} Reference to <code>this</code> in order to allow method chaining
 * @since 1.50.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChartBar.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.InteractiveBarChartBar(); };

/**
 * Sets a new value for property {@link #getDisplayedValue displayedValue}.
 * 
 * The value label to be displayed on the bar in the chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDisplayedValue New value for property <code>displayedValue</code>
 * @returns {sap.suite.ui.microchart.InteractiveBarChartBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChartBar.prototype.setDisplayedValue = function(sDisplayedValue) { return new sap.suite.ui.microchart.InteractiveBarChartBar(); };

/**
 * Sets a new value for property {@link #getLabel label}.
 * 
 * The label for the chart bar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLabel New value for property <code>label</code>
 * @returns {sap.suite.ui.microchart.InteractiveBarChartBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChartBar.prototype.setLabel = function(sLabel) { return new sap.suite.ui.microchart.InteractiveBarChartBar(); };

/**
 * Sets a new value for property {@link #getSelected selected}.
 * 
 * Determines if the chart bar is selected.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSelected New value for property <code>selected</code>
 * @returns {sap.suite.ui.microchart.InteractiveBarChartBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChartBar.prototype.setSelected = function(bSelected) { return new sap.suite.ui.microchart.InteractiveBarChartBar(); };

/**
 * Sets a new value for property {@link #getValue value}.
 * 
 * The numeric value of the chart bar to be displayed on the bar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fValue New value for property <code>value</code>
 * @returns {sap.suite.ui.microchart.InteractiveBarChartBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveBarChartBar.prototype.setValue = function(fValue) { return new sap.suite.ui.microchart.InteractiveBarChartBar(); };


// ---- sap.suite.ui.microchart.InteractiveDonutChart --------------------------------------------------------------------------

/**
 * Constructor for InteractiveDonutChart control.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getDisplayedSegments displayedSegments} : int (default: 3)</li>
 * <li>{@link #getSelectionEnabled selectionEnabled} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getSegments segments} : sap.suite.ui.microchart.InteractiveDonutChartSegment[] (default)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:selectionChanged selectionChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The InteractiveDonutChart control belongs to a chart control group in the MicroChart library with a number of interactive features. These interactive features provide more information on a chart value.
 * For example, by selecting a segment you can get more details on the displayed value.
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @public
 * @since 1.42.0
 * @constructor
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart = function(sId,mSettings) {};
/**
 * The event is fired when the user presses the chart while its segments are not selectable in non-interactive mode. This is decided internally, depending on the size of the chart.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.press = function(oControlEvent) {  };

/**
 * Event is fired when a user has selected or deselected a segment or a legend entry.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.suite.ui.microchart.InteractiveDonutChartSegment[]} oControlEvent.getParameters.selectedSegments Contains all selected segments.
 * @param {sap.suite.ui.microchart.InteractiveDonutChartSegment} oControlEvent.getParameters.segment The segment whose selection state has changed.
 * @param {boolean} oControlEvent.getParameters.selected Indicates whether the segment "segment" is selected or not.
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.selectionChanged = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.InteractiveDonutChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.suite.ui.microchart.InteractiveDonutChart(); };

/**
 * Adds some segment to the aggregation {@link #getSegments segments}.
 * @param {sap.suite.ui.microchart.InteractiveDonutChartSegment}
 *            oSegment The segment to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.InteractiveDonutChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.addSegment = function(oSegment) { return new sap.suite.ui.microchart.InteractiveDonutChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.microchart.InteractiveDonutChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.InteractiveDonutChart</code> itself.
 * 
 * The event is fired when the user presses the chart while its segments are not selectable in non-interactive mode. This is decided internally, depending on the size of the chart.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.InteractiveDonutChart</code> itself
 * 
 * @returns {sap.suite.ui.microchart.InteractiveDonutChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.InteractiveDonutChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:selectionChanged selectionChanged} event of this <code>sap.suite.ui.microchart.InteractiveDonutChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.InteractiveDonutChart</code> itself.
 * 
 * Event is fired when a user has selected or deselected a segment or a legend entry.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.InteractiveDonutChart</code> itself
 * 
 * @returns {sap.suite.ui.microchart.InteractiveDonutChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.attachSelectionChanged = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.InteractiveDonutChart(); };

/**
 * Binds aggregation {@link #getSegments segments} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.suite.ui.microchart.InteractiveDonutChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.bindSegments = function(oBindingInfo) { return new sap.suite.ui.microchart.InteractiveDonutChart(); };

/**
 * Destroys all the segments in the aggregation {@link #getSegments segments}.
 * @returns {sap.suite.ui.microchart.InteractiveDonutChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.destroySegments = function() { return new sap.suite.ui.microchart.InteractiveDonutChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.microchart.InteractiveDonutChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.InteractiveDonutChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.InteractiveDonutChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:selectionChanged selectionChanged} event of this <code>sap.suite.ui.microchart.InteractiveDonutChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.InteractiveDonutChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.detachSelectionChanged = function(fnFunction,oListener) { return new sap.suite.ui.microchart.InteractiveDonutChart(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.InteractiveDonutChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.microchart.InteractiveDonutChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.firePress = function(mParameters) { return new sap.suite.ui.microchart.InteractiveDonutChart(); };

/**
 * Fires event {@link #event:selectionChanged selectionChanged} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.suite.ui.microchart.InteractiveDonutChartSegment[]} [mParameters.selectedSegments] Contains all selected segments.
 * @param {sap.suite.ui.microchart.InteractiveDonutChartSegment} [mParameters.segment] The segment whose selection state has changed.
 * @param {boolean} [mParameters.selected] Indicates whether the segment "segment" is selected or not.
 * 
 * @returns {sap.suite.ui.microchart.InteractiveDonutChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.fireSelectionChanged = function(mParameters) { return new sap.suite.ui.microchart.InteractiveDonutChart(); };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property {@link #getDisplayedSegments displayedSegments}.
 * 
 * Number of segments to be displayed.
 * 
 * Default value is <code>3</code>.
 * @returns {int} Value of property <code>displayedSegments</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.getDisplayedSegments = function() { return 0; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.InteractiveDonutChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getSegments segments}.
 * 
 * Aggregation which contains all segments.
 * 
 * @returns {sap.suite.ui.microchart.InteractiveDonutChartSegment[]}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.getSegments = function() { return new Array(); };

/**
 * Gets all selected segments or an empty array if there is no segment selected yet
 * 
 * @returns {sap.suite.ui.microchart.InteractiveDonutChartSegment[]} All selected segments
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.getSelectedSegments = function() { return new Array(); };

/**
 * Gets current value of property {@link #getSelectionEnabled selectionEnabled}.
 * 
 * Switch which enables or disables selection.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>selectionEnabled</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.getSelectionEnabled = function() { return false; };

/**
 * Checks for the provided <code>sap.suite.ui.microchart.InteractiveDonutChartSegment</code> in the aggregation {@link #getSegments segments}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.microchart.InteractiveDonutChartSegment}
 *           oSegment The segment whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.indexOfSegment = function(oSegment) { return 0; };

/**
 * Inserts a segment into the aggregation {@link #getSegments segments}.
 * 
 * @param {sap.suite.ui.microchart.InteractiveDonutChartSegment}
 *            oSegment The segment to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the segment should be inserted at; for
 *              a negative value of <code>iIndex</code>, the segment is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the segment is inserted at
 *              the last position
 * @returns {sap.suite.ui.microchart.InteractiveDonutChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.insertSegment = function(oSegment,iIndex) { return new sap.suite.ui.microchart.InteractiveDonutChart(); };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getSegments segments}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.microchart.InteractiveDonutChartSegment[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.removeAllSegments = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Removes a segment from the aggregation {@link #getSegments segments}.
 * 
 * @param {int | string | sap.suite.ui.microchart.InteractiveDonutChartSegment} vSegment The segment to remove or its index or id
 * @returns {sap.suite.ui.microchart.InteractiveDonutChartSegment} The removed segment or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.removeSegment = function(vSegment) { return new sap.suite.ui.microchart.InteractiveDonutChartSegment(); };

/**
 * Sets a new value for property {@link #getDisplayedSegments displayedSegments}.
 * 
 * Number of segments to be displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>3</code>.
 * @param {int} iDisplayedSegments New value for property <code>displayedSegments</code>
 * @returns {sap.suite.ui.microchart.InteractiveDonutChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.setDisplayedSegments = function(iDisplayedSegments) { return new sap.suite.ui.microchart.InteractiveDonutChart(); };

/**
 * Already selected segments will be unselected and members of selectedSegments attribute which are part of the segments aggregation will be set to selected state.
 * 
 * @param {sap.suite.ui.microchart.InteractiveDonutChartSegment | sap.suite.ui.microchart.InteractiveDonutChartSegment[]} selectedSegments A segment element or an array of segments for which the status should be set to selected
 * @returns {sap.suite.ui.microchart.InteractiveDonutChart} The current object in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.setSelectedSegments = function(selectedSegments) { return new sap.suite.ui.microchart.InteractiveDonutChart(); };

/**
 * Sets a new value for property {@link #getSelectionEnabled selectionEnabled}.
 * 
 * Switch which enables or disables selection.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSelectionEnabled New value for property <code>selectionEnabled</code>
 * @returns {sap.suite.ui.microchart.InteractiveDonutChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.setSelectionEnabled = function(bSelectionEnabled) { return new sap.suite.ui.microchart.InteractiveDonutChart(); };

/**
 * Unbinds aggregation {@link #getSegments segments} from model data.
 * @returns {sap.suite.ui.microchart.InteractiveDonutChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChart.prototype.unbindSegments = function() { return new sap.suite.ui.microchart.InteractiveDonutChart(); };


// ---- sap.suite.ui.microchart.InteractiveDonutChartSegment --------------------------------------------------------------------------

/**
 * Constructor for InteractiveDonutChartSegment element.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getSelected selected} : boolean (default: false)</li>
 * <li>{@link #getValue value} : float</li>
 * <li>{@link #getDisplayedValue displayedValue} : string</li>
 * <li>{@link #getColor color} : sap.m.ValueColor (default: Neutral)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] initial settings for the new element
 * 
 * @class A donut chart segment.
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * 
 * @public
 * @since 1.42.0
 * @constructor
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChartSegment = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.microchart.InteractiveDonutChartSegment with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChartSegment.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getColor color}.
 * 
 * Determines the color of the segment.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueColor} Value of property <code>color</code>
 * @since 1.50.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChartSegment.prototype.getColor = function() { return new sap.m.ValueColor(); };

/**
 * Gets current value of property {@link #getDisplayedValue displayedValue}.
 * 
 * The value that is directly displayed on the legend.
 * 
 * @returns {string} Value of property <code>displayedValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChartSegment.prototype.getDisplayedValue = function() { return ""; };

/**
 * Gets current value of property {@link #getLabel label}.
 * 
 * Displayed text for the segment.
 * 
 * @returns {string} Value of property <code>label</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChartSegment.prototype.getLabel = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.InteractiveDonutChartSegment.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChartSegment.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSelected selected}.
 * 
 * Indicator for the selected state.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>selected</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChartSegment.prototype.getSelected = function() { return false; };

/**
 * Gets current value of property {@link #getValue value}.
 * 
 * The value representing a percentage or an absolute value.
 * 
 * @returns {float} Value of property <code>value</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChartSegment.prototype.getValue = function() { return 0.0; };

/**
 * Sets a new value for property {@link #getColor color}.
 * 
 * Determines the color of the segment.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.InteractiveDonutChartSegment} Reference to <code>this</code> in order to allow method chaining
 * @since 1.50.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChartSegment.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.InteractiveDonutChartSegment(); };

/**
 * Sets a new value for property {@link #getDisplayedValue displayedValue}.
 * 
 * The value that is directly displayed on the legend.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDisplayedValue New value for property <code>displayedValue</code>
 * @returns {sap.suite.ui.microchart.InteractiveDonutChartSegment} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChartSegment.prototype.setDisplayedValue = function(sDisplayedValue) { return new sap.suite.ui.microchart.InteractiveDonutChartSegment(); };

/**
 * Sets a new value for property {@link #getLabel label}.
 * 
 * Displayed text for the segment.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLabel New value for property <code>label</code>
 * @returns {sap.suite.ui.microchart.InteractiveDonutChartSegment} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChartSegment.prototype.setLabel = function(sLabel) { return new sap.suite.ui.microchart.InteractiveDonutChartSegment(); };

/**
 * Sets a new value for property {@link #getSelected selected}.
 * 
 * Indicator for the selected state.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSelected New value for property <code>selected</code>
 * @returns {sap.suite.ui.microchart.InteractiveDonutChartSegment} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChartSegment.prototype.setSelected = function(bSelected) { return new sap.suite.ui.microchart.InteractiveDonutChartSegment(); };

/**
 * Sets a new value for property {@link #getValue value}.
 * 
 * The value representing a percentage or an absolute value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fValue New value for property <code>value</code>
 * @returns {sap.suite.ui.microchart.InteractiveDonutChartSegment} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveDonutChartSegment.prototype.setValue = function(fValue) { return new sap.suite.ui.microchart.InteractiveDonutChartSegment(); };


// ---- sap.suite.ui.microchart.InteractiveLineChart --------------------------------------------------------------------------

/**
 * Constructor for a new InteractiveLineChart control.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getDisplayedPoints displayedPoints} : int (default: 6)</li>
 * <li>{@link #getPrecedingPoint precedingPoint} : float (default: 0)</li>
 * <li>{@link #getSucceedingPoint succeedingPoint} : float (default: 0)</li>
 * <li>{@link #getSelectionEnabled selectionEnabled} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPoints points} : sap.suite.ui.microchart.InteractiveLineChartPoint[] (default)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:selectionChanged selectionChanged} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The InteractiveLineChart control belongs to a chart control group in the MicroChart library having a number of interactive features.
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * 
 * @public
 * @since 1.42.0
 * @constructor
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart = function(sId,mSettings) {};
/**
 * The event is fired only in non-interactive mode when the user presses the chart; in this mode, the points and surrounding areas are not selectable. Non-interactive mode is decided upon internally, depending on the size of the areas surrounding the points.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.press = function(oControlEvent) {  };

/**
 * Event is fired when a user has selected or deselected a point.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @param {sap.suite.ui.microchart.InteractiveLineChartPoint[]} oControlEvent.getParameters.selectedPoints All points which are in selected state.
 * @param {sap.suite.ui.microchart.InteractiveLineChartPoint} oControlEvent.getParameters.point The point which is pressed.
 * @param {boolean} oControlEvent.getParameters.selected The selection state of the point which is pressed.
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.selectionChanged = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.InteractiveLineChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.suite.ui.microchart.InteractiveLineChart(); };

/**
 * Adds some point to the aggregation {@link #getPoints points}.
 * @param {sap.suite.ui.microchart.InteractiveLineChartPoint}
 *            oPoint The point to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.InteractiveLineChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.addPoint = function(oPoint) { return new sap.suite.ui.microchart.InteractiveLineChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.microchart.InteractiveLineChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.InteractiveLineChart</code> itself.
 * 
 * The event is fired only in non-interactive mode when the user presses the chart; in this mode, the points and surrounding areas are not selectable. Non-interactive mode is decided upon internally, depending on the size of the areas surrounding the points.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.InteractiveLineChart</code> itself
 * 
 * @returns {sap.suite.ui.microchart.InteractiveLineChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.InteractiveLineChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:selectionChanged selectionChanged} event of this <code>sap.suite.ui.microchart.InteractiveLineChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.InteractiveLineChart</code> itself.
 * 
 * Event is fired when a user has selected or deselected a point.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.InteractiveLineChart</code> itself
 * 
 * @returns {sap.suite.ui.microchart.InteractiveLineChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.attachSelectionChanged = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.InteractiveLineChart(); };

/**
 * Binds aggregation {@link #getPoints points} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.suite.ui.microchart.InteractiveLineChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.bindPoints = function(oBindingInfo) { return new sap.suite.ui.microchart.InteractiveLineChart(); };

/**
 * Destroys all the points in the aggregation {@link #getPoints points}.
 * @returns {sap.suite.ui.microchart.InteractiveLineChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.destroyPoints = function() { return new sap.suite.ui.microchart.InteractiveLineChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.microchart.InteractiveLineChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.InteractiveLineChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.InteractiveLineChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:selectionChanged selectionChanged} event of this <code>sap.suite.ui.microchart.InteractiveLineChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.InteractiveLineChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.detachSelectionChanged = function(fnFunction,oListener) { return new sap.suite.ui.microchart.InteractiveLineChart(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.InteractiveLineChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.microchart.InteractiveLineChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.firePress = function(mParameters) { return new sap.suite.ui.microchart.InteractiveLineChart(); };

/**
 * Fires event {@link #event:selectionChanged selectionChanged} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @param {sap.suite.ui.microchart.InteractiveLineChartPoint[]} [mParameters.selectedPoints] All points which are in selected state.
 * @param {sap.suite.ui.microchart.InteractiveLineChartPoint} [mParameters.point] The point which is pressed.
 * @param {boolean} [mParameters.selected] The selection state of the point which is pressed.
 * 
 * @returns {sap.suite.ui.microchart.InteractiveLineChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.fireSelectionChanged = function(mParameters) { return new sap.suite.ui.microchart.InteractiveLineChart(); };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property {@link #getDisplayedPoints displayedPoints}.
 * 
 * The maximum number of points to be displayed on the chart.
 * 
 * Default value is <code>6</code>.
 * @returns {int} Value of property <code>displayedPoints</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.getDisplayedPoints = function() { return 0; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.InteractiveLineChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getPoints points}.
 * 
 * Points displayed in the chart.
 * 
 * @returns {sap.suite.ui.microchart.InteractiveLineChartPoint[]}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.getPoints = function() { return new Array(); };

/**
 * Gets current value of property {@link #getPrecedingPoint precedingPoint}.
 * 
 * Abstract invisible point outside of the chart that ensures that the graph flows smoothly into the visible part of the chart.
 * 
 * Default value is <code>0</code>.
 * @returns {float} Value of property <code>precedingPoint</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.getPrecedingPoint = function() { return 0.0; };

/**
 * Retrieves the selected point elements from the points aggregation and returns them.
 * 
 * @returns {sap.suite.ui.microchart.InteractiveLineChartPoint[]} Array of sap.suite.ui.microchart.InteractiveLineChartPoint instances.
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.getSelectedPoints = function() { return new Array(); };

/**
 * Gets current value of property {@link #getSelectionEnabled selectionEnabled}.
 * 
 * If this property is set to true, one or multiple points are selectable.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>selectionEnabled</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.getSelectionEnabled = function() { return false; };

/**
 * Gets current value of property {@link #getSucceedingPoint succeedingPoint}.
 * 
 * Abstract invisible point outside of the chart that ensures that the graph flows smoothly out of the visible part of the chart.
 * 
 * Default value is <code>0</code>.
 * @returns {float} Value of property <code>succeedingPoint</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.getSucceedingPoint = function() { return 0.0; };

/**
 * Checks for the provided <code>sap.suite.ui.microchart.InteractiveLineChartPoint</code> in the aggregation {@link #getPoints points}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.microchart.InteractiveLineChartPoint}
 *           oPoint The point whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.indexOfPoint = function(oPoint) { return 0; };

/**
 * Inserts a point into the aggregation {@link #getPoints points}.
 * 
 * @param {sap.suite.ui.microchart.InteractiveLineChartPoint}
 *            oPoint The point to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the point should be inserted at; for
 *              a negative value of <code>iIndex</code>, the point is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the point is inserted at
 *              the last position
 * @returns {sap.suite.ui.microchart.InteractiveLineChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.insertPoint = function(oPoint,iIndex) { return new sap.suite.ui.microchart.InteractiveLineChart(); };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getPoints points}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.microchart.InteractiveLineChartPoint[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.removeAllPoints = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Removes a point from the aggregation {@link #getPoints points}.
 * 
 * @param {int | string | sap.suite.ui.microchart.InteractiveLineChartPoint} vPoint The point to remove or its index or id
 * @returns {sap.suite.ui.microchart.InteractiveLineChartPoint} The removed point or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.removePoint = function(vPoint) { return new sap.suite.ui.microchart.InteractiveLineChartPoint(); };

/**
 * Sets a new value for property {@link #getDisplayedPoints displayedPoints}.
 * 
 * The maximum number of points to be displayed on the chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>6</code>.
 * @param {int} iDisplayedPoints New value for property <code>displayedPoints</code>
 * @returns {sap.suite.ui.microchart.InteractiveLineChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.setDisplayedPoints = function(iDisplayedPoints) { return new sap.suite.ui.microchart.InteractiveLineChart(); };

/**
 * Sets a new value for property {@link #getPrecedingPoint precedingPoint}.
 * 
 * Abstract invisible point outside of the chart that ensures that the graph flows smoothly into the visible part of the chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {float} fPrecedingPoint New value for property <code>precedingPoint</code>
 * @returns {sap.suite.ui.microchart.InteractiveLineChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.setPrecedingPoint = function(fPrecedingPoint) { return new sap.suite.ui.microchart.InteractiveLineChart(); };

/**
 * Already selected points will be deselected and members of the selectedPoints attribute which are part of the points aggregation will be set to selected state.
 * 
 * @param {sap.suite.ui.microchart.InteractiveLineChartPoint | sap.suite.ui.microchart.InteractiveLineChartPoint[]} selectedPoints A point element or an array of points for which the status should be set to selected.
 * @returns {sap.suite.ui.microchart.InteractiveLineChart} this to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.setSelectedPoints = function(selectedPoints) { return new sap.suite.ui.microchart.InteractiveLineChart(); };

/**
 * Sets a new value for property {@link #getSelectionEnabled selectionEnabled}.
 * 
 * If this property is set to true, one or multiple points are selectable.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bSelectionEnabled New value for property <code>selectionEnabled</code>
 * @returns {sap.suite.ui.microchart.InteractiveLineChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.setSelectionEnabled = function(bSelectionEnabled) { return new sap.suite.ui.microchart.InteractiveLineChart(); };

/**
 * Sets a new value for property {@link #getSucceedingPoint succeedingPoint}.
 * 
 * Abstract invisible point outside of the chart that ensures that the graph flows smoothly out of the visible part of the chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {float} fSucceedingPoint New value for property <code>succeedingPoint</code>
 * @returns {sap.suite.ui.microchart.InteractiveLineChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.setSucceedingPoint = function(fSucceedingPoint) { return new sap.suite.ui.microchart.InteractiveLineChart(); };

/**
 * Unbinds aggregation {@link #getPoints points} from model data.
 * @returns {sap.suite.ui.microchart.InteractiveLineChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChart.prototype.unbindPoints = function() { return new sap.suite.ui.microchart.InteractiveLineChart(); };


// ---- sap.suite.ui.microchart.InteractiveLineChartPoint --------------------------------------------------------------------------

/**
 * Constructor for the point element of the InteractiveLineChart.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getLabel label} : string</li>
 * <li>{@link #getSecondaryLabel secondaryLabel} : string</li>
 * <li>{@link #getSelected selected} : boolean (default: false)</li>
 * <li>{@link #getValue value} : float</li>
 * <li>{@link #getDisplayedValue displayedValue} : string</li>
 * <li>{@link #getColor color} : sap.m.ValueColor (default: Neutral)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class A point element for the InteractiveLineChart.
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * 
 * @public
 * @since 1.42.0
 * @constructor
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.InteractiveLineChartPoint = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.microchart.InteractiveLineChartPoint with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.InteractiveLineChartPoint.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getColor color}.
 * 
 * Determines the color of the point.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueColor} Value of property <code>color</code>
 * @since 1.50.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChartPoint.prototype.getColor = function() { return new sap.m.ValueColor(); };

/**
 * Gets current value of property {@link #getDisplayedValue displayedValue}.
 * 
 * The value label to be displayed near the point in the chart.
 * 
 * @returns {string} Value of property <code>displayedValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChartPoint.prototype.getDisplayedValue = function() { return ""; };

/**
 * Gets current value of property {@link #getLabel label}.
 * 
 * The bottom label for the chart point.
 * 
 * @returns {string} Value of property <code>label</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChartPoint.prototype.getLabel = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.InteractiveLineChartPoint.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.InteractiveLineChartPoint.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getSecondaryLabel secondaryLabel}.
 * 
 * The label that is displayed right below the <code>label</code>..
 * 
 * @returns {string} Value of property <code>secondaryLabel</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChartPoint.prototype.getSecondaryLabel = function() { return ""; };

/**
 * Gets current value of property {@link #getSelected selected}.
 * 
 * Determines if the chart point is selected.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>selected</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChartPoint.prototype.getSelected = function() { return false; };

/**
 * Gets current value of property {@link #getValue value}.
 * 
 * The numeric value of the chart point.
 * 
 * @returns {float} Value of property <code>value</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChartPoint.prototype.getValue = function() { return 0.0; };

/**
 * Sets a new value for property {@link #getColor color}.
 * 
 * Determines the color of the point.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.InteractiveLineChartPoint} Reference to <code>this</code> in order to allow method chaining
 * @since 1.50.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChartPoint.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.InteractiveLineChartPoint(); };

/**
 * Sets a new value for property {@link #getDisplayedValue displayedValue}.
 * 
 * The value label to be displayed near the point in the chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDisplayedValue New value for property <code>displayedValue</code>
 * @returns {sap.suite.ui.microchart.InteractiveLineChartPoint} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChartPoint.prototype.setDisplayedValue = function(sDisplayedValue) { return new sap.suite.ui.microchart.InteractiveLineChartPoint(); };

/**
 * Sets a new value for property {@link #getLabel label}.
 * 
 * The bottom label for the chart point.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLabel New value for property <code>label</code>
 * @returns {sap.suite.ui.microchart.InteractiveLineChartPoint} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChartPoint.prototype.setLabel = function(sLabel) { return new sap.suite.ui.microchart.InteractiveLineChartPoint(); };

/**
 * Sets a new value for property {@link #getSecondaryLabel secondaryLabel}.
 * 
 * The label that is displayed right below the <code>label</code>..
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sSecondaryLabel New value for property <code>secondaryLabel</code>
 * @returns {sap.suite.ui.microchart.InteractiveLineChartPoint} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChartPoint.prototype.setSecondaryLabel = function(sSecondaryLabel) { return new sap.suite.ui.microchart.InteractiveLineChartPoint(); };

/**
 * Sets a new value for property {@link #getSelected selected}.
 * 
 * Determines if the chart point is selected.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bSelected New value for property <code>selected</code>
 * @returns {sap.suite.ui.microchart.InteractiveLineChartPoint} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChartPoint.prototype.setSelected = function(bSelected) { return new sap.suite.ui.microchart.InteractiveLineChartPoint(); };

/**
 * Sets a new value for property {@link #getValue value}.
 * 
 * The numeric value of the chart point.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fValue New value for property <code>value</code>
 * @returns {sap.suite.ui.microchart.InteractiveLineChartPoint} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.InteractiveLineChartPoint.prototype.setValue = function(fValue) { return new sap.suite.ui.microchart.InteractiveLineChartPoint(); };


// ---- sap.suite.ui.microchart.LineMicroChart --------------------------------------------------------------------------

/**
 * Constructor for a new LineMicroChart control.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSize size} : sap.m.Size (default: Auto)</li>
 * <li>{@link #getThreshold threshold} : float (default: 0)</li>
 * <li>{@link #getShowThresholdLine showThresholdLine} : boolean (default: true)</li>
 * <li>{@link #getShowThresholdValue showThresholdValue} : boolean (default: false)</li>
 * <li>{@link #getThresholdDisplayValue thresholdDisplayValue} : string</li>
 * <li>{@link #getMinXValue minXValue} : float</li>
 * <li>{@link #getMaxXValue maxXValue} : float</li>
 * <li>{@link #getMinYValue minYValue} : float</li>
 * <li>{@link #getMaxYValue maxYValue} : float</li>
 * <li>{@link #getLeftTopLabel leftTopLabel} : string</li>
 * <li>{@link #getRightTopLabel rightTopLabel} : string</li>
 * <li>{@link #getLeftBottomLabel leftBottomLabel} : string</li>
 * <li>{@link #getRightBottomLabel rightBottomLabel} : string</li>
 * <li>{@link #getShowTopLabels showTopLabels} : boolean (default: true)</li>
 * <li>{@link #getShowBottomLabels showBottomLabels} : boolean (default: true)</li>
 * <li>{@link #getColor color} : any (default: Neutral)</li>
 * <li>{@link #getShowPoints showPoints} : boolean (default: false)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPoints points} : sap.suite.ui.microchart.LineMicroChartPoint[] (default)</li>
 * <li>{@link #getLines lines} : sap.suite.ui.microchart.LineMicroChartLine[]</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] ID for the new control, generated automatically if no ID is given
 * @param {object} [mSettings] Initial settings for the new control
 * 
 * @class
 * Chart that displays the history of values as segmented lines along a threshold line. The scale is optional and showing the points is also optional.
 * <br>Note: You can assign a custom tooltip for this microchart. The custom tooltip can be set using expression binding. When no custom tooltip is defined, the tooltip is generated automatically based on the logic described in {@link sap.ui.core.Element#getTooltip_AsString}. For a combination of a generated and a custom tooltip, use <code>((AltText))</code> inside of the tooltip string.
 * @extends sap.ui.core.Control
 * 
 * @version 1.71.0
 * @since 1.48.0
 * 
 * @public
 * @ui5-metamodel This control will also be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.LineMicroChart = function(sId,mSettings) {};
/**
 * The event is triggered when the chart is pressed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.press = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Adds some line to the aggregation {@link #getLines lines}.
 * @param {sap.suite.ui.microchart.LineMicroChartLine}
 *            oLine The line to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.addLine = function(oLine) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Adds some point to the aggregation {@link #getPoints points}.
 * @param {sap.suite.ui.microchart.LineMicroChartPoint}
 *            oPoint The point to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.addPoint = function(oPoint) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.microchart.LineMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.LineMicroChart</code> itself.
 * 
 * The event is triggered when the chart is pressed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.LineMicroChart</code> itself
 * 
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Binds aggregation {@link #getLines lines} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.bindLines = function(oBindingInfo) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Binds aggregation {@link #getPoints points} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.bindPoints = function(oBindingInfo) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Destroys all the lines in the aggregation {@link #getLines lines}.
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.destroyLines = function() { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Destroys all the points in the aggregation {@link #getPoints points}.
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.destroyPoints = function() { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.microchart.LineMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.LineMicroChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.LineMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.firePress = function(mParameters) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property {@link #getColor color}.
 * 
 * Describes the color of the chart.
 * <br>In conjunction with emphasized points, it is only used if all points have the sap.m.ValueColor.Neutral color.
 * <br>The color can be set as an {@link sap.m.ValueCSSColor} or as a plain object. It has the 'above|' and 'below' properties that determine the color of the graph above and below the threshold, respectively.
 * 
 * <br>The <code>color</code> property of {@link sap.suite.ui.microchart.LineMicroChartLine} has priority over this property in case it is set.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {any} Value of property <code>color</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getColor = function() { return null; };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * The height of the chart. Overrides the height specified in the <code>size</code> property.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getLeftBottomLabel leftBottomLabel}.
 * 
 * Describes the left bottom label of the chart.
 * The label color is set internally.
 * The space for the label is not reserved if the label is not set.
 * 
 * @returns {string} Value of property <code>leftBottomLabel</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getLeftBottomLabel = function() { return ""; };

/**
 * Gets current value of property {@link #getLeftTopLabel leftTopLabel}.
 * 
 * Describes the left top label of the chart.
 * The label color is determined by the color property of the first LineMicroChartPoint in the points aggregation.
 * The space for the label is not reserved if the label is not set.
 * 
 * @returns {string} Value of property <code>leftTopLabel</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getLeftTopLabel = function() { return ""; };

/**
 * Gets content of aggregation {@link #getLines lines}.
 * 
 * Aggregation that containes lines with data points.
 * <br>This aggregation should be used instead of the <code>points</code> aggregation.
 * 
 * @returns {sap.suite.ui.microchart.LineMicroChartLine[]}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getLines = function() { return new Array(); };

/**
 * Gets current value of property {@link #getMaxXValue maxXValue}.
 * 
 * If this property is set, it indicates the value the X-axis ends with.
 * 
 * @returns {float} Value of property <code>maxXValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getMaxXValue = function() { return 0.0; };

/**
 * Gets current value of property {@link #getMaxYValue maxYValue}.
 * 
 * If this property is set, it indicates the value the Y-axis ends with.
 * 
 * @returns {float} Value of property <code>maxYValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getMaxYValue = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.LineMicroChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.LineMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getMinXValue minXValue}.
 * 
 * If this property is set, it indicates the value the X-axis starts with.
 * 
 * @returns {float} Value of property <code>minXValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getMinXValue = function() { return 0.0; };

/**
 * Gets current value of property {@link #getMinYValue minYValue}.
 * 
 * If this property is set, it indicates the value the Y-axis starts with.
 * 
 * @returns {float} Value of property <code>minYValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getMinYValue = function() { return 0.0; };

/**
 * Gets content of aggregation {@link #getPoints points}.
 * 
 * Aggregation that contains all data points that should be provided in an ordered way.
 * If both the <code>points</code> and <code>lines</code> aggregations are used, the chart
 * is rendered based on the <code>points</code> aggregation, while the lines from the <code>lines</code> aggregations are ignored.
 * <br>The <code>points</code> aggregation can be used to ensure backward compatibility.
 * However in general, the <code>lines</code> aggregation should be preferred.
 * 
 * @returns {sap.suite.ui.microchart.LineMicroChartPoint[]}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getPoints = function() { return new Array(); };

/**
 * Gets current value of property {@link #getRightBottomLabel rightBottomLabel}.
 * 
 * Describes the right bottom label of the chart.
 * The label color is set automatically.
 * The space for the label is not reserved if the label is not set.
 * 
 * @returns {string} Value of property <code>rightBottomLabel</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getRightBottomLabel = function() { return ""; };

/**
 * Gets current value of property {@link #getRightTopLabel rightTopLabel}.
 * 
 * Describes the right top label of the chart.
 * The label color is determined by the color property of the last LineMicroChartPoint in the points aggregation.
 * The space for the label is not reserved if the label is not set.
 * 
 * @returns {string} Value of property <code>rightTopLabel</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getRightTopLabel = function() { return ""; };

/**
 * Gets current value of property {@link #getShowBottomLabels showBottomLabels}.
 * 
 * If this property is set to <code>false</code>, both bottom labels are hidden.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showBottomLabels</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getShowBottomLabels = function() { return false; };

/**
 * Gets current value of property {@link #getShowPoints showPoints}.
 * 
 * Defines if the control renders the points or not.
 * <br>If emphasized points are used, there is no effect.
 * <br>If the value is true, the points in the aggregation are shown.
 * 
 * <br>The <code>showPoints</code> property of the {@link sap.suite.ui.microchart.LineMicroChartLine} control has priority over this property in case it is set.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showPoints</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getShowPoints = function() { return false; };

/**
 * Gets current value of property {@link #getShowThresholdLine showThresholdLine}.
 * 
 * If this property is set to <code>false</code>, the threshold line is hidden.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showThresholdLine</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getShowThresholdLine = function() { return false; };

/**
 * Gets current value of property {@link #getShowThresholdValue showThresholdValue}.
 * 
 * If this property is set to <code>false</code>, the threshold value is hidden.
 * <br>If this property is set to <code>true</code>, the value will be shown only if the
 * <code>showThresholdLine</code> property is also set to <code>true</code>.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>showThresholdValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getShowThresholdValue = function() { return false; };

/**
 * Gets current value of property {@link #getShowTopLabels showTopLabels}.
 * 
 * If this property is set to <code>false</code>, both top labels are hidden.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showTopLabels</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getShowTopLabels = function() { return false; };

/**
 * Gets current value of property {@link #getSize size}.
 * 
 * The size of the chart. If not set, the default size is applied based on the type of the device.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.m.Size} Value of property <code>size</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getSize = function() { return new sap.m.Size(); };

/**
 * Gets current value of property {@link #getThreshold threshold}.
 * 
 * Determines the chart threshold which is used for vertical normalization.
 * If the threshold does not belong to the value range given by minYValue...maxYValue, the threshold is ignored.
 * By setting the threshold property's value to null, the threshold is disabled and excluded from range calculations.
 * 
 * Default value is <code>0</code>.
 * @returns {float} Value of property <code>threshold</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getThreshold = function() { return 0.0; };

/**
 * Gets current value of property {@link #getThresholdDisplayValue thresholdDisplayValue}.
 * 
 * Overrides the threshold value with a string that is shown instead.
 * 
 * @returns {string} Value of property <code>thresholdDisplayValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getThresholdDisplayValue = function() { return ""; };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * The width of the chart. Overrides the width specified in the <code>size</code> property.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.suite.ui.microchart.LineMicroChartLine</code> in the aggregation {@link #getLines lines}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.microchart.LineMicroChartLine}
 *           oLine The line whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.indexOfLine = function(oLine) { return 0; };

/**
 * Checks for the provided <code>sap.suite.ui.microchart.LineMicroChartPoint</code> in the aggregation {@link #getPoints points}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.microchart.LineMicroChartPoint}
 *           oPoint The point whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.indexOfPoint = function(oPoint) { return 0; };

/**
 * Inserts a line into the aggregation {@link #getLines lines}.
 * 
 * @param {sap.suite.ui.microchart.LineMicroChartLine}
 *            oLine The line to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the line should be inserted at; for
 *              a negative value of <code>iIndex</code>, the line is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the line is inserted at
 *              the last position
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.insertLine = function(oLine,iIndex) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Inserts a point into the aggregation {@link #getPoints points}.
 * 
 * @param {sap.suite.ui.microchart.LineMicroChartPoint}
 *            oPoint The point to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the point should be inserted at; for
 *              a negative value of <code>iIndex</code>, the point is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the point is inserted at
 *              the last position
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.insertPoint = function(oPoint,iIndex) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getLines lines}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.microchart.LineMicroChartLine[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.removeAllLines = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getPoints points}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.microchart.LineMicroChartPoint[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.removeAllPoints = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Removes a line from the aggregation {@link #getLines lines}.
 * 
 * @param {int | string | sap.suite.ui.microchart.LineMicroChartLine} vLine The line to remove or its index or id
 * @returns {sap.suite.ui.microchart.LineMicroChartLine} The removed line or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.removeLine = function(vLine) { return new sap.suite.ui.microchart.LineMicroChartLine(); };

/**
 * Removes a point from the aggregation {@link #getPoints points}.
 * 
 * @param {int | string | sap.suite.ui.microchart.LineMicroChartPoint} vPoint The point to remove or its index or id
 * @returns {sap.suite.ui.microchart.LineMicroChartPoint} The removed point or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.removePoint = function(vPoint) { return new sap.suite.ui.microchart.LineMicroChartPoint(); };

/**
 * Sets a new value for property {@link #getColor color}.
 * 
 * Describes the color of the chart.
 * <br>In conjunction with emphasized points, it is only used if all points have the sap.m.ValueColor.Neutral color.
 * <br>The color can be set as an {@link sap.m.ValueCSSColor} or as a plain object. It has the 'above|' and 'below' properties that determine the color of the graph above and below the threshold, respectively.
 * 
 * <br>The <code>color</code> property of {@link sap.suite.ui.microchart.LineMicroChartLine} has priority over this property in case it is set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {any} oColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.setColor = function(oColor) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * The height of the chart. Overrides the height specified in the <code>size</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.setHeight = function(sHeight) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Sets a new value for property {@link #getLeftBottomLabel leftBottomLabel}.
 * 
 * Describes the left bottom label of the chart.
 * The label color is set internally.
 * The space for the label is not reserved if the label is not set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLeftBottomLabel New value for property <code>leftBottomLabel</code>
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.setLeftBottomLabel = function(sLeftBottomLabel) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Sets a new value for property {@link #getLeftTopLabel leftTopLabel}.
 * 
 * Describes the left top label of the chart.
 * The label color is determined by the color property of the first LineMicroChartPoint in the points aggregation.
 * The space for the label is not reserved if the label is not set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sLeftTopLabel New value for property <code>leftTopLabel</code>
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.setLeftTopLabel = function(sLeftTopLabel) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Sets a new value for property {@link #getMaxXValue maxXValue}.
 * 
 * If this property is set, it indicates the value the X-axis ends with.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fMaxXValue New value for property <code>maxXValue</code>
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.setMaxXValue = function(fMaxXValue) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Sets a new value for property {@link #getMaxYValue maxYValue}.
 * 
 * If this property is set, it indicates the value the Y-axis ends with.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fMaxYValue New value for property <code>maxYValue</code>
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.setMaxYValue = function(fMaxYValue) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Sets a new value for property {@link #getMinXValue minXValue}.
 * 
 * If this property is set, it indicates the value the X-axis starts with.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fMinXValue New value for property <code>minXValue</code>
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.setMinXValue = function(fMinXValue) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Sets a new value for property {@link #getMinYValue minYValue}.
 * 
 * If this property is set, it indicates the value the Y-axis starts with.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fMinYValue New value for property <code>minYValue</code>
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.setMinYValue = function(fMinYValue) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Sets a new value for property {@link #getRightBottomLabel rightBottomLabel}.
 * 
 * Describes the right bottom label of the chart.
 * The label color is set automatically.
 * The space for the label is not reserved if the label is not set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sRightBottomLabel New value for property <code>rightBottomLabel</code>
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.setRightBottomLabel = function(sRightBottomLabel) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Sets a new value for property {@link #getRightTopLabel rightTopLabel}.
 * 
 * Describes the right top label of the chart.
 * The label color is determined by the color property of the last LineMicroChartPoint in the points aggregation.
 * The space for the label is not reserved if the label is not set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sRightTopLabel New value for property <code>rightTopLabel</code>
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.setRightTopLabel = function(sRightTopLabel) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Sets a new value for property {@link #getShowBottomLabels showBottomLabels}.
 * 
 * If this property is set to <code>false</code>, both bottom labels are hidden.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowBottomLabels New value for property <code>showBottomLabels</code>
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.setShowBottomLabels = function(bShowBottomLabels) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Sets a new value for property {@link #getShowPoints showPoints}.
 * 
 * Defines if the control renders the points or not.
 * <br>If emphasized points are used, there is no effect.
 * <br>If the value is true, the points in the aggregation are shown.
 * 
 * <br>The <code>showPoints</code> property of the {@link sap.suite.ui.microchart.LineMicroChartLine} control has priority over this property in case it is set.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowPoints New value for property <code>showPoints</code>
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.setShowPoints = function(bShowPoints) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Sets a new value for property {@link #getShowThresholdLine showThresholdLine}.
 * 
 * If this property is set to <code>false</code>, the threshold line is hidden.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowThresholdLine New value for property <code>showThresholdLine</code>
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.setShowThresholdLine = function(bShowThresholdLine) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Sets a new value for property {@link #getShowThresholdValue showThresholdValue}.
 * 
 * If this property is set to <code>false</code>, the threshold value is hidden.
 * <br>If this property is set to <code>true</code>, the value will be shown only if the
 * <code>showThresholdLine</code> property is also set to <code>true</code>.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShowThresholdValue New value for property <code>showThresholdValue</code>
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.setShowThresholdValue = function(bShowThresholdValue) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Sets a new value for property {@link #getShowTopLabels showTopLabels}.
 * 
 * If this property is set to <code>false</code>, both top labels are hidden.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowTopLabels New value for property <code>showTopLabels</code>
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.setShowTopLabels = function(bShowTopLabels) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Sets a new value for property {@link #getSize size}.
 * 
 * The size of the chart. If not set, the default size is applied based on the type of the device.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.m.Size} sSize New value for property <code>size</code>
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.setSize = function(sSize) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Sets a new value for property {@link #getThreshold threshold}.
 * 
 * Determines the chart threshold which is used for vertical normalization.
 * If the threshold does not belong to the value range given by minYValue...maxYValue, the threshold is ignored.
 * By setting the threshold property's value to null, the threshold is disabled and excluded from range calculations.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {float} fThreshold New value for property <code>threshold</code>
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.setThreshold = function(fThreshold) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Sets a new value for property {@link #getThresholdDisplayValue thresholdDisplayValue}.
 * 
 * Overrides the threshold value with a string that is shown instead.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sThresholdDisplayValue New value for property <code>thresholdDisplayValue</code>
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.setThresholdDisplayValue = function(sThresholdDisplayValue) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * The width of the chart. Overrides the width specified in the <code>size</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.setWidth = function(sWidth) { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Unbinds aggregation {@link #getLines lines} from model data.
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.unbindLines = function() { return new sap.suite.ui.microchart.LineMicroChart(); };

/**
 * Unbinds aggregation {@link #getPoints points} from model data.
 * @returns {sap.suite.ui.microchart.LineMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChart.prototype.unbindPoints = function() { return new sap.suite.ui.microchart.LineMicroChart(); };


// ---- sap.suite.ui.microchart.LineMicroChartEmphasizedPoint --------------------------------------------------------------------------

/**
 * Constructor for a new LineMicroChartEmphasizedPoint.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColor color} : sap.m.ValueCSSColor (default: Neutral)</li>
 * <li>{@link #getShow show} : boolean (default: false)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.suite.ui.microchart.LineMicroChartPoint#constructor sap.suite.ui.microchart.LineMicroChartPoint}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Contains the emphasized point of the line micro chart.
 * @extends sap.suite.ui.microchart.LineMicroChartPoint
 * 
 * @version 1.71.0
 * @since 1.48.0
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.LineMicroChartEmphasizedPoint = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.microchart.LineMicroChartEmphasizedPoint with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.suite.ui.microchart.LineMicroChartPoint.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.LineMicroChartEmphasizedPoint.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getColor color}.
 * 
 * Determines the color of the emphasized point.
 * The property has an effect only if the 'show' property is true.
 * If at least one emphasized point has a color different from Neutral, the graph is grey; otherwise, the graph is blue.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueCSSColor} Value of property <code>color</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartEmphasizedPoint.prototype.getColor = function() { return new sap.m.ValueCSSColor(); };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.LineMicroChartEmphasizedPoint.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.LineMicroChartEmphasizedPoint.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getShow show}.
 * 
 * Determines whether the chart point should be displayed or not.
 * 
 * Default value is <code>false</code>.
 * @returns {boolean} Value of property <code>show</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartEmphasizedPoint.prototype.getShow = function() { return false; };

/**
 * Sets a new value for property {@link #getColor color}.
 * 
 * Determines the color of the emphasized point.
 * The property has an effect only if the 'show' property is true.
 * If at least one emphasized point has a color different from Neutral, the graph is grey; otherwise, the graph is blue.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueCSSColor} sColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.LineMicroChartEmphasizedPoint} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartEmphasizedPoint.prototype.setColor = function(sColor) { return new sap.suite.ui.microchart.LineMicroChartEmphasizedPoint(); };

/**
 * Sets a new value for property {@link #getShow show}.
 * 
 * Determines whether the chart point should be displayed or not.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>false</code>.
 * @param {boolean} bShow New value for property <code>show</code>
 * @returns {sap.suite.ui.microchart.LineMicroChartEmphasizedPoint} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartEmphasizedPoint.prototype.setShow = function(bShow) { return new sap.suite.ui.microchart.LineMicroChartEmphasizedPoint(); };


// ---- sap.suite.ui.microchart.LineMicroChartLine --------------------------------------------------------------------------

/**
 * Constructor for a new LineMicroChartLine.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getColor color} : any</li>
 * <li>{@link #getShowPoints showPoints} : boolean</li>
 * <li>{@link #getType type} : sap.suite.ui.microchart.LineType (default: Solid)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getPoints points} : sap.suite.ui.microchart.LineMicroChartPoint[] (default)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * The container containing all the points of the line.
 * @extends sap.ui.core.Element
 * @version 1.71.0
 * @since 1.60
 * 
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.LineMicroChartLine = function(sId,mSettings) {};
/**
 * Adds some point to the aggregation {@link #getPoints points}.
 * @param {sap.suite.ui.microchart.LineMicroChartPoint}
 *            oPoint The point to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.LineMicroChartLine} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartLine.prototype.addPoint = function(oPoint) { return new sap.suite.ui.microchart.LineMicroChartLine(); };

/**
 * Binds aggregation {@link #getPoints points} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.suite.ui.microchart.LineMicroChartLine} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartLine.prototype.bindPoints = function(oBindingInfo) { return new sap.suite.ui.microchart.LineMicroChartLine(); };

/**
 * Destroys all the points in the aggregation {@link #getPoints points}.
 * @returns {sap.suite.ui.microchart.LineMicroChartLine} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartLine.prototype.destroyPoints = function() { return new sap.suite.ui.microchart.LineMicroChartLine(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.LineMicroChartLine with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.LineMicroChartLine.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getColor color}.
 * 
 * Defines the color of the chart.
 * <br>In conjunction with emphasized points, this property is only used if all points have the {@link sap.m.ValueColor.Neutral} color.
 * The color can be set as an {@link sap.m.ValueCSSColor} or as a plain object. It has the <code>above</code> and <code>below</code> properties that determine the color of the graph above and below the threshold, respectively.
 * 
 * <br>This property has priority over the property <code>color</code> of {@link sap.suite.ui.microchart.LineMicroChart} in case it is set.
 * <br>If this property is not defined, the value of the <code>color</code> property from the parent {@link sap.suite.ui.microchart.LineMicroChart} is used instead.
 * 
 * @returns {any} Value of property <code>color</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartLine.prototype.getColor = function() { return null; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.LineMicroChartLine.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.LineMicroChartLine.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets content of aggregation {@link #getPoints points}.
 * 
 * Aggregation that contains all data points that should be provided in an ordered way.
 * 
 * <br><b>Note:</b> Points can be bound without template/factory method.
 * <br>This approach is more efficient when many points are used, because no new objects will be created for them
 * and only their representation in the model will be kept. See the {@link https://ui5.sap.com/#/sample/sap.suite.ui.microchart.sample.LineMicroChartBinding/preview samples}.
 * <br>To use emphasized points, the <code>emphasized</code> property has to be set in the model of the point and can be used together with the properties <code>show</code> and <code>color</code>, as shown in the sample.
 * When this binding method is used, the #getPoints method will always return an empty array.
 * 
 * @returns {sap.suite.ui.microchart.LineMicroChartPoint[]}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartLine.prototype.getPoints = function() { return new Array(); };

/**
 * Gets current value of property {@link #getShowPoints showPoints}.
 * 
 * Defines whether the points are shown.
 * <br>If emphasized points are used, this property is ignored.
 * <br>If this property is set to <code>true</code>, the points in the <code>points</code> aggregation are shown.
 * 
 * <br>This property has priority over the property <code>showPoints</code> of {@link sap.suite.ui.microchart.LineMicroChart} in case it is set.
 * <br>If this property is not defined, the <code>showPoints</code> property of the {@link sap.suite.ui.microchart.LineMicroChart} is used instead.
 * 
 * @returns {boolean} Value of property <code>showPoints</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartLine.prototype.getShowPoints = function() { return false; };

/**
 * Gets current value of property {@link #getType type}.
 * 
 * Defines the type of the line.
 * 
 * Default value is <code>Solid</code>.
 * @returns {sap.suite.ui.microchart.LineType} Value of property <code>type</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartLine.prototype.getType = function() { return new sap.suite.ui.microchart.LineType(); };

/**
 * Checks for the provided <code>sap.suite.ui.microchart.LineMicroChartPoint</code> in the aggregation {@link #getPoints points}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.microchart.LineMicroChartPoint}
 *           oPoint The point whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartLine.prototype.indexOfPoint = function(oPoint) { return 0; };

/**
 * Inserts a point into the aggregation {@link #getPoints points}.
 * 
 * @param {sap.suite.ui.microchart.LineMicroChartPoint}
 *            oPoint The point to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the point should be inserted at; for
 *              a negative value of <code>iIndex</code>, the point is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the point is inserted at
 *              the last position
 * @returns {sap.suite.ui.microchart.LineMicroChartLine} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartLine.prototype.insertPoint = function(oPoint,iIndex) { return new sap.suite.ui.microchart.LineMicroChartLine(); };

/**
 * Removes all the controls from the aggregation {@link #getPoints points}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.microchart.LineMicroChartPoint[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartLine.prototype.removeAllPoints = function() { return new Array(); };

/**
 * Removes a point from the aggregation {@link #getPoints points}.
 * 
 * @param {int | string | sap.suite.ui.microchart.LineMicroChartPoint} vPoint The point to remove or its index or id
 * @returns {sap.suite.ui.microchart.LineMicroChartPoint} The removed point or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartLine.prototype.removePoint = function(vPoint) { return new sap.suite.ui.microchart.LineMicroChartPoint(); };

/**
 * Sets a new value for property {@link #getColor color}.
 * 
 * Defines the color of the chart.
 * <br>In conjunction with emphasized points, this property is only used if all points have the {@link sap.m.ValueColor.Neutral} color.
 * The color can be set as an {@link sap.m.ValueCSSColor} or as a plain object. It has the <code>above</code> and <code>below</code> properties that determine the color of the graph above and below the threshold, respectively.
 * 
 * <br>This property has priority over the property <code>color</code> of {@link sap.suite.ui.microchart.LineMicroChart} in case it is set.
 * <br>If this property is not defined, the value of the <code>color</code> property from the parent {@link sap.suite.ui.microchart.LineMicroChart} is used instead.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {any} oColor New value for property <code>color</code>
 * @returns {sap.suite.ui.microchart.LineMicroChartLine} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartLine.prototype.setColor = function(oColor) { return new sap.suite.ui.microchart.LineMicroChartLine(); };

/**
 * Sets a new value for property {@link #getShowPoints showPoints}.
 * 
 * Defines whether the points are shown.
 * <br>If emphasized points are used, this property is ignored.
 * <br>If this property is set to <code>true</code>, the points in the <code>points</code> aggregation are shown.
 * 
 * <br>This property has priority over the property <code>showPoints</code> of {@link sap.suite.ui.microchart.LineMicroChart} in case it is set.
 * <br>If this property is not defined, the <code>showPoints</code> property of the {@link sap.suite.ui.microchart.LineMicroChart} is used instead.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {boolean} bShowPoints New value for property <code>showPoints</code>
 * @returns {sap.suite.ui.microchart.LineMicroChartLine} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartLine.prototype.setShowPoints = function(bShowPoints) { return new sap.suite.ui.microchart.LineMicroChartLine(); };

/**
 * Sets a new value for property {@link #getType type}.
 * 
 * Defines the type of the line.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Solid</code>.
 * @param {sap.suite.ui.microchart.LineType} sType New value for property <code>type</code>
 * @returns {sap.suite.ui.microchart.LineMicroChartLine} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartLine.prototype.setType = function(sType) { return new sap.suite.ui.microchart.LineMicroChartLine(); };

/**
 * Unbinds aggregation {@link #getPoints points} from model data.
 * @returns {sap.suite.ui.microchart.LineMicroChartLine} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartLine.prototype.unbindPoints = function() { return new sap.suite.ui.microchart.LineMicroChartLine(); };


// ---- sap.suite.ui.microchart.LineMicroChartPoint --------------------------------------------------------------------------

/**
 * Constructor for a new LineMicroChartPoint.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getX x} : float (default: 0)</li>
 * <li>{@link #getY y} : float (default: 0)</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Contains the point of the line micro chart.
 * @extends sap.ui.core.Element
 * 
 * @version 1.71.0
 * @since 1.48.0
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.LineMicroChartPoint = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.microchart.LineMicroChartPoint with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.LineMicroChartPoint.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.LineMicroChartPoint.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.LineMicroChartPoint.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getX x}.
 * 
 * The point's horizontal position.
 * 
 * Default value is <code>0</code>.
 * @returns {float} Value of property <code>x</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartPoint.prototype.getX = function() { return 0.0; };

/**
 * Gets current value of property {@link #getY y}.
 * 
 * The point's vertical position.
 * 
 * Default value is <code>0</code>.
 * @returns {float} Value of property <code>y</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartPoint.prototype.getY = function() { return 0.0; };

/**
 * Sets a new value for property {@link #getX x}.
 * 
 * The point's horizontal position.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {float} fX New value for property <code>x</code>
 * @returns {sap.suite.ui.microchart.LineMicroChartPoint} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartPoint.prototype.setX = function(fX) { return new sap.suite.ui.microchart.LineMicroChartPoint(); };

/**
 * Sets a new value for property {@link #getY y}.
 * 
 * The point's vertical position.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {float} fY New value for property <code>y</code>
 * @returns {sap.suite.ui.microchart.LineMicroChartPoint} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.LineMicroChartPoint.prototype.setY = function(fY) { return new sap.suite.ui.microchart.LineMicroChartPoint(); };


// ---- sap.suite.ui.microchart.LineType --------------------------------------------------------------------------

// dummy function to make Eclipse aware of namespace
sap.suite.ui.microchart.LineType.toString = function() { return ""; };

// ---- sap.suite.ui.microchart.RadialMicroChart --------------------------------------------------------------------------

/**
 * Describes the configuration of the graphic element on the chart.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTotal total} : float</li>
 * <li>{@link #getFraction fraction} : float</li>
 * <li>{@link #getPercentage percentage} : float</li>
 * <li>{@link #getValueColor valueColor} : sap.m.ValueCSSColor (default: Neutral)</li>
 * <li>{@link #getSize size} : sap.m.Size (default: Auto)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getAlignContent alignContent} : sap.suite.ui.microchart.HorizontalAlignmentType (default: Left)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @class
 * Displays a ring chart highlighting a current status. The status is displayed with a semantically colored radial bar and a percentage value.
 * <br>Note: You can assign a custom tooltip for this microchart. The custom tooltip can be set using expression binding. When no custom tooltip is defined, the tooltip is generated automatically based on the logic described in {@link sap.ui.core.Element#getTooltip_AsString}. For a combination of a generated and a custom tooltip, use <code>((AltText))</code> inside of the tooltip string.
 * @extends sap.ui.core.Control
 * @version 1.71.0
 * @since 1.36.0
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control will also be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.RadialMicroChart = function() {};
/**
 * The event is triggered when the chart is pressed.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.press = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.RadialMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.suite.ui.microchart.RadialMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.microchart.RadialMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.RadialMicroChart</code> itself.
 * 
 * The event is triggered when the chart is pressed.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.RadialMicroChart</code> itself
 * 
 * @returns {sap.suite.ui.microchart.RadialMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.RadialMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.microchart.RadialMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.RadialMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.RadialMicroChart(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.RadialMicroChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.microchart.RadialMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.firePress = function(mParameters) { return new sap.suite.ui.microchart.RadialMicroChart(); };

/**
 * Gets current value of property {@link #getAlignContent alignContent}.
 * 
 * The alignment of the content. If it is not set, the <code>Left</code> alignment type is used.
 * 
 * Default value is <code>Left</code>.
 * @returns {sap.suite.ui.microchart.HorizontalAlignmentType} Value of property <code>alignContent</code>
 * @since 1.62.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.getAlignContent = function() { return new sap.suite.ui.microchart.HorizontalAlignmentType(); };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets current value of property {@link #getFraction fraction}.
 * 
 * The fraction of the total value that is displayed.
 * 
 * @returns {float} Value of property <code>fraction</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.getFraction = function() { return 0.0; };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * The height of the chart. Overrides the height specified in the <code>size</code> property.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * @since 1.62.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.RadialMicroChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPercentage percentage}.
 * 
 * The percentage that is displayed.
 * When a percentage is set, properties total and fraction are not considered.
 * 
 * @returns {float} Value of property <code>percentage</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.getPercentage = function() { return 0.0; };

/**
 * Gets current value of property {@link #getSize size}.
 * 
 * The size of the chart. If it is not set, the Auto size is used.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.m.Size} Value of property <code>size</code>
 * @since 1.44.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.getSize = function() { return new sap.m.Size(); };

/**
 * Gets current value of property {@link #getTotal total}.
 * 
 * The total value. This is taken as 360 degrees value on the chart.
 * 
 * @returns {float} Value of property <code>total</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.getTotal = function() { return 0.0; };

/**
 * Gets current value of property {@link #getValueColor valueColor}.
 * 
 * The color shown in the completed path.
 * 
 * Default value is <code>Neutral</code>.
 * @returns {sap.m.ValueCSSColor} Value of property <code>valueColor</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.getValueColor = function() { return new sap.m.ValueCSSColor(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * The width of the chart. Overrides the width specified in the <code>size</code> property.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * @since 1.62.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Sets a new value for property {@link #getAlignContent alignContent}.
 * 
 * The alignment of the content. If it is not set, the <code>Left</code> alignment type is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Left</code>.
 * @param {sap.suite.ui.microchart.HorizontalAlignmentType} sAlignContent New value for property <code>alignContent</code>
 * @returns {sap.suite.ui.microchart.RadialMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.62.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.setAlignContent = function(sAlignContent) { return new sap.suite.ui.microchart.RadialMicroChart(); };

/**
 * Sets a new value for property {@link #getFraction fraction}.
 * 
 * The fraction of the total value that is displayed.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fFraction New value for property <code>fraction</code>
 * @returns {sap.suite.ui.microchart.RadialMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.setFraction = function(fFraction) { return new sap.suite.ui.microchart.RadialMicroChart(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * The height of the chart. Overrides the height specified in the <code>size</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.suite.ui.microchart.RadialMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.62.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.setHeight = function(sHeight) { return new sap.suite.ui.microchart.RadialMicroChart(); };

/**
 * Sets a new value for property {@link #getPercentage percentage}.
 * 
 * The percentage that is displayed.
 * When a percentage is set, properties total and fraction are not considered.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fPercentage New value for property <code>percentage</code>
 * @returns {sap.suite.ui.microchart.RadialMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.setPercentage = function(fPercentage) { return new sap.suite.ui.microchart.RadialMicroChart(); };

/**
 * Sets a new value for property {@link #getSize size}.
 * 
 * The size of the chart. If it is not set, the Auto size is used.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.m.Size} sSize New value for property <code>size</code>
 * @returns {sap.suite.ui.microchart.RadialMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.44.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.setSize = function(sSize) { return new sap.suite.ui.microchart.RadialMicroChart(); };

/**
 * Sets a new value for property {@link #getTotal total}.
 * 
 * The total value. This is taken as 360 degrees value on the chart.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fTotal New value for property <code>total</code>
 * @returns {sap.suite.ui.microchart.RadialMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.setTotal = function(fTotal) { return new sap.suite.ui.microchart.RadialMicroChart(); };

/**
 * Sets a new value for property {@link #getValueColor valueColor}.
 * 
 * The color shown in the completed path.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Neutral</code>.
 * @param {sap.m.ValueCSSColor} sValueColor New value for property <code>valueColor</code>
 * @returns {sap.suite.ui.microchart.RadialMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.setValueColor = function(sValueColor) { return new sap.suite.ui.microchart.RadialMicroChart(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * The width of the chart. Overrides the width specified in the <code>size</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.suite.ui.microchart.RadialMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.62.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.RadialMicroChart.prototype.setWidth = function(sWidth) { return new sap.suite.ui.microchart.RadialMicroChart(); };


// ---- sap.suite.ui.microchart.StackedBarMicroChart --------------------------------------------------------------------------

/**
 * Constructor for a new StackedBarMicroChart control.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getSize size} : sap.m.Size (default: Auto)</li>
 * <li>{@link #getMaxValue maxValue} : float</li>
 * <li>{@link #getPrecision precision} : int (default: 1)</li>
 * <li>{@link #getWidth width} : sap.ui.core.CSSSize</li>
 * <li>{@link #getHeight height} : sap.ui.core.CSSSize</li>
 * <li>{@link #getShowLabels showLabels} : boolean (default: true)</li>
 * </ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getBars bars} : sap.suite.ui.microchart.StackedBarMicroChartBar[] (default)</li>
 * </ul>
 * </li>
 * <li>Associations
 * <ul>
 * <li>{@link #getAriaLabelledBy ariaLabelledBy} : (sap.ui.core.ID | sap.ui.core.Control)[]</li>
 * </ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link #event:press press} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Control#constructor sap.ui.core.Control}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Illustrates values as stacked and colored bar charts displaying numeric values (as absolute values or percentages) inside the bars.
 * <br>Note: You can assign a custom tooltip for this microchart. The custom tooltip can be set using expression binding. When no custom tooltip is defined, the tooltip is generated automatically based on the logic described in {@link sap.ui.core.Element#getTooltip_AsString}. For a combination of a generated and a custom tooltip, use <code>((AltText))</code> inside of the tooltip string. The aggregated data of the microchart can also be customized.
 * @extends sap.ui.core.Control
 * 
 * @version 1.71.0
 * @since 1.44.0
 * 
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart = function(sId,mSettings) {};
/**
 * The event is fired when the user chooses the microchart.
 * @event
 * 
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.press = function(oControlEvent) {  };

/**
 * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @param {sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.StackedBarMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.addAriaLabelledBy = function(vAriaLabelledBy) { return new sap.suite.ui.microchart.StackedBarMicroChart(); };

/**
 * Adds some bar to the aggregation {@link #getBars bars}.
 * @param {sap.suite.ui.microchart.StackedBarMicroChartBar}
 *            oBar The bar to add; if empty, nothing is inserted
 * @returns {sap.suite.ui.microchart.StackedBarMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.addBar = function(oBar) { return new sap.suite.ui.microchart.StackedBarMicroChart(); };

/**
 * Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.suite.ui.microchart.StackedBarMicroChart</code>.
 * 
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, 
 * otherwise it will be bound to this <code>sap.suite.ui.microchart.StackedBarMicroChart</code> itself.
 * 
 * The event is fired when the user chooses the microchart.
 * 
 * @param {object}
 *            [oData] An application-specific payload object that will be passed to the event handler along with the event object when firing the event
 * @param {function}
 *            fnFunction The function to be called when the event occurs
 * @param {object}
 *            [oListener] Context object to call the event handler with. Defaults to this <code>sap.suite.ui.microchart.StackedBarMicroChart</code> itself
 * 
 * @returns {sap.suite.ui.microchart.StackedBarMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.attachPress = function(oData,fnFunction,oListener) { return new sap.suite.ui.microchart.StackedBarMicroChart(); };

/**
 * Binds aggregation {@link #getBars bars} to model data.
 * 
 * See {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a 
 * detailed description of the possible properties of <code>oBindingInfo</code>.
 * @param {object} oBindingInfo The binding information
 * @returns {sap.suite.ui.microchart.StackedBarMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.bindBars = function(oBindingInfo) { return new sap.suite.ui.microchart.StackedBarMicroChart(); };

/**
 * Destroys all the bars in the aggregation {@link #getBars bars}.
 * @returns {sap.suite.ui.microchart.StackedBarMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.destroyBars = function() { return new sap.suite.ui.microchart.StackedBarMicroChart(); };

/**
 * Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.suite.ui.microchart.StackedBarMicroChart</code>.
 * 
 * The passed function and listener object must match the ones used for event registration.
 * 
 * @param {function}
 *            fnFunction The function to be called, when the event occurs
 * @param {object}
 *            [oListener] Context object on which the given function had to be called
 * @returns {sap.suite.ui.microchart.StackedBarMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.detachPress = function(fnFunction,oListener) { return new sap.suite.ui.microchart.StackedBarMicroChart(); };

/**
 * Creates a new subclass of class sap.suite.ui.microchart.StackedBarMicroChart with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Fires event {@link #event:press press} to attached listeners.
 * 
 * @param {object} [mParameters] Parameters to pass along with the event
 * @returns {sap.suite.ui.microchart.StackedBarMicroChart} Reference to <code>this</code> in order to allow method chaining
 * @protected
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.firePress = function(mParameters) { return new sap.suite.ui.microchart.StackedBarMicroChart(); };

/**
 * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}.
 * 
 * @returns {sap.ui.core.ID[]}
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.getAriaLabelledBy = function() { return new Array(); };

/**
 * Gets content of aggregation {@link #getBars bars}.
 * 
 * The stacked bar chart items.
 * 
 * @returns {sap.suite.ui.microchart.StackedBarMicroChartBar[]}
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.getBars = function() { return new Array(); };

/**
 * Gets current value of property {@link #getHeight height}.
 * 
 * The height of the chart. Overrides the height specified in the <code>size</code> property.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>height</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.getHeight = function() { return new sap.ui.core.CSSSize(); };

/**
 * Gets current value of property {@link #getMaxValue maxValue}.
 * 
 * The maximum value can be set to scale StackedBarMicroChartBar values to the same base.
 * If maxValue is smaller than the sum of all StackedMicroChartBar values, the maxValue is ignored. All values are shown as percentage values (same behavior as maxValue is not used).
 * If maxValue is equal or bigger than the sum of all StackedMicroChartBars, all values are scaled to the value of maxValue and the percentage mode is turned off. Absolute values are shown instead.
 * The difference between the sum and maxValue is shown as invisible bar, thus e.g. different StackedBarMicroChart instances can be compared.
 * 
 * @returns {float} Value of property <code>maxValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.getMaxValue = function() { return 0.0; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.StackedBarMicroChart.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getPrecision precision}.
 * 
 * The precision of the rounding for the calculated percentage values of the bars. It defines how many digits after the decimal point are displayed. The default is set to 1 digit.
 * 
 * Default value is <code>1</code>.
 * @returns {int} Value of property <code>precision</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.getPrecision = function() { return 0; };

/**
 * Gets current value of property {@link #getShowLabels showLabels}.
 * 
 * Defines whether the bar labels should be rendered. If set to <code>true</code>, the labels that were specified for each bar become visible.
 * 
 * Default value is <code>true</code>.
 * @returns {boolean} Value of property <code>showLabels</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.getShowLabels = function() { return false; };

/**
 * Gets current value of property {@link #getSize size}.
 * 
 * The size of the chart. If not set, the default size is applied based on the size of the device tile.
 * Responsive size takes width and height of the parent container where the stacked bar micro chart is included.
 * 
 * Default value is <code>Auto</code>.
 * @returns {sap.m.Size} Value of property <code>size</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.getSize = function() { return new sap.m.Size(); };

/**
 * Gets current value of property {@link #getWidth width}.
 * 
 * The width of the chart. Overrides the width specified in the <code>size</code> property.
 * 
 * @returns {sap.ui.core.CSSSize} Value of property <code>width</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.getWidth = function() { return new sap.ui.core.CSSSize(); };

/**
 * Checks for the provided <code>sap.suite.ui.microchart.StackedBarMicroChartBar</code> in the aggregation {@link #getBars bars}.
 * and returns its index if found or -1 otherwise.
 * @param {sap.suite.ui.microchart.StackedBarMicroChartBar}
 *           oBar The bar whose index is looked for
 * @returns {int} The index of the provided control in the aggregation if found, or -1 otherwise
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.indexOfBar = function(oBar) { return 0; };

/**
 * Inserts a bar into the aggregation {@link #getBars bars}.
 * 
 * @param {sap.suite.ui.microchart.StackedBarMicroChartBar}
 *            oBar The bar to insert; if empty, nothing is inserted
 * @param {int}
 *              iIndex The <code>0</code>-based index the bar should be inserted at; for
 *              a negative value of <code>iIndex</code>, the bar is inserted at position 0; for a value
 *              greater than the current size of the aggregation, the bar is inserted at
 *              the last position
 * @returns {sap.suite.ui.microchart.StackedBarMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.insertBar = function(oBar,iIndex) { return new sap.suite.ui.microchart.StackedBarMicroChart(); };

/**
 * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @returns {sap.ui.core.ID[]} An array of the removed elements (might be empty)
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.removeAllAriaLabelledBy = function() { return new Array(); };

/**
 * Removes all the controls from the aggregation {@link #getBars bars}.
 * 
 * Additionally, it unregisters them from the hosting UIArea.
 * @returns {sap.suite.ui.microchart.StackedBarMicroChartBar[]} An array of the removed elements (might be empty)
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.removeAllBars = function() { return new Array(); };

/**
 * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
 * @param {int | sap.ui.core.ID | sap.ui.core.Control} vAriaLabelledBy The ariaLabelledBy to be removed or its index or ID
 * @returns {sap.ui.core.ID} The removed ariaLabelledBy or <code>null</code>
 * @since 1.60.0
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.removeAriaLabelledBy = function(vAriaLabelledBy) { return new sap.ui.core.ID(); };

/**
 * Removes a bar from the aggregation {@link #getBars bars}.
 * 
 * @param {int | string | sap.suite.ui.microchart.StackedBarMicroChartBar} vBar The bar to remove or its index or id
 * @returns {sap.suite.ui.microchart.StackedBarMicroChartBar} The removed bar or <code>null</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.removeBar = function(vBar) { return new sap.suite.ui.microchart.StackedBarMicroChartBar(); };

/**
 * Sets a new value for property {@link #getHeight height}.
 * 
 * The height of the chart. Overrides the height specified in the <code>size</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sHeight New value for property <code>height</code>
 * @returns {sap.suite.ui.microchart.StackedBarMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.setHeight = function(sHeight) { return new sap.suite.ui.microchart.StackedBarMicroChart(); };

/**
 * Sets a new value for property {@link #getMaxValue maxValue}.
 * 
 * The maximum value can be set to scale StackedBarMicroChartBar values to the same base.
 * If maxValue is smaller than the sum of all StackedMicroChartBar values, the maxValue is ignored. All values are shown as percentage values (same behavior as maxValue is not used).
 * If maxValue is equal or bigger than the sum of all StackedMicroChartBars, all values are scaled to the value of maxValue and the percentage mode is turned off. Absolute values are shown instead.
 * The difference between the sum and maxValue is shown as invisible bar, thus e.g. different StackedBarMicroChart instances can be compared.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {float} fMaxValue New value for property <code>maxValue</code>
 * @returns {sap.suite.ui.microchart.StackedBarMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.setMaxValue = function(fMaxValue) { return new sap.suite.ui.microchart.StackedBarMicroChart(); };

/**
 * Sets a new value for property {@link #getPrecision precision}.
 * 
 * The precision of the rounding for the calculated percentage values of the bars. It defines how many digits after the decimal point are displayed. The default is set to 1 digit.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>1</code>.
 * @param {int} iPrecision New value for property <code>precision</code>
 * @returns {sap.suite.ui.microchart.StackedBarMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.setPrecision = function(iPrecision) { return new sap.suite.ui.microchart.StackedBarMicroChart(); };

/**
 * Sets a new value for property {@link #getShowLabels showLabels}.
 * 
 * Defines whether the bar labels should be rendered. If set to <code>true</code>, the labels that were specified for each bar become visible.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>true</code>.
 * @param {boolean} bShowLabels New value for property <code>showLabels</code>
 * @returns {sap.suite.ui.microchart.StackedBarMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.setShowLabels = function(bShowLabels) { return new sap.suite.ui.microchart.StackedBarMicroChart(); };

/**
 * Sets a new value for property {@link #getSize size}.
 * 
 * The size of the chart. If not set, the default size is applied based on the size of the device tile.
 * Responsive size takes width and height of the parent container where the stacked bar micro chart is included.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>Auto</code>.
 * @param {sap.m.Size} sSize New value for property <code>size</code>
 * @returns {sap.suite.ui.microchart.StackedBarMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.setSize = function(sSize) { return new sap.suite.ui.microchart.StackedBarMicroChart(); };

/**
 * Sets a new value for property {@link #getWidth width}.
 * 
 * The width of the chart. Overrides the width specified in the <code>size</code> property.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.ui.core.CSSSize} sWidth New value for property <code>width</code>
 * @returns {sap.suite.ui.microchart.StackedBarMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.setWidth = function(sWidth) { return new sap.suite.ui.microchart.StackedBarMicroChart(); };

/**
 * Unbinds aggregation {@link #getBars bars} from model data.
 * @returns {sap.suite.ui.microchart.StackedBarMicroChart} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChart.prototype.unbindBars = function() { return new sap.suite.ui.microchart.StackedBarMicroChart(); };


// ---- sap.suite.ui.microchart.StackedBarMicroChartBar --------------------------------------------------------------------------

/**
 * Constructor for a new StackedBarMicroChartBar.
 * 
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial
 * property values, aggregated and associated objects as well as event handlers.
 * See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.
 * 
 * @ui5-settings
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getValue value} : float (default: 0)</li>
 * <li>{@link #getValueColor valueColor} : sap.m.ValueCSSColor</li>
 * <li>{@link #getDisplayValue displayValue} : string</li>
 * </ul>
 * </li>
 * </ul>
 * 
 * In addition, all settings applicable to the base type {@link sap.ui.core.Element#constructor sap.ui.core.Element}
 * can be used as well.
 * 
 * @param {string} [sId] id for the new control, generated automatically if no id is given
 * @param {object} [mSettings] initial settings for the new control
 * 
 * @class
 * Contains the values of the stacked bar chart.
 * @extends sap.ui.core.Element
 * 
 * @version 1.71.0
 * @since 1.44.0
 * 
 * @constructor
 * @public
 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChartBar = function(sId,mSettings) {};
/**
 * Creates a new subclass of class sap.suite.ui.microchart.StackedBarMicroChartBar with name <code>sClassName</code>
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
 * 
 * @param {string} sClassName Name of the class being created
 * @param {object} [oClassInfo] Object literal with information about the class
 * @param {function} [FNMetaImpl] Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>
 * @returns {function} Created class / constructor function
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChartBar.extend = function(sClassName,oClassInfo,FNMetaImpl) { return function() {}; };

/**
 * Gets current value of property {@link #getDisplayValue displayValue}.
 * 
 * If this property is set, then it will be displayed instead of value.
 * 
 * @returns {string} Value of property <code>displayValue</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChartBar.prototype.getDisplayValue = function() { return ""; };

/**
 * Returns a metadata object for class sap.suite.ui.microchart.StackedBarMicroChartBar.
 * 
 * @returns {sap.ui.base.Metadata} Metadata object describing this class
 * @public
 * @static
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChartBar.getMetadata = function() { return new sap.ui.base.Metadata(); };

/**
 * Gets current value of property {@link #getValue value}.
 * 
 * The value for stacked bar chart. It is used in order to determine the width of the bar
 * 
 * Default value is <code>0</code>.
 * @returns {float} Value of property <code>value</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChartBar.prototype.getValue = function() { return 0.0; };

/**
 * Gets current value of property {@link #getValueColor valueColor}.
 * 
 * The color of the bar.
 * 
 * @returns {sap.m.ValueCSSColor} Value of property <code>valueColor</code>
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChartBar.prototype.getValueColor = function() { return new sap.m.ValueCSSColor(); };

/**
 * Sets a new value for property {@link #getDisplayValue displayValue}.
 * 
 * If this property is set, then it will be displayed instead of value.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {string} sDisplayValue New value for property <code>displayValue</code>
 * @returns {sap.suite.ui.microchart.StackedBarMicroChartBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChartBar.prototype.setDisplayValue = function(sDisplayValue) { return new sap.suite.ui.microchart.StackedBarMicroChartBar(); };

/**
 * Sets a new value for property {@link #getValue value}.
 * 
 * The value for stacked bar chart. It is used in order to determine the width of the bar
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * Default value is <code>0</code>.
 * @param {float} fValue New value for property <code>value</code>
 * @returns {sap.suite.ui.microchart.StackedBarMicroChartBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChartBar.prototype.setValue = function(fValue) { return new sap.suite.ui.microchart.StackedBarMicroChartBar(); };

/**
 * Sets a new value for property {@link #getValueColor valueColor}.
 * 
 * The color of the bar.
 * 
 * When called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.
 * 
 * @param {sap.m.ValueCSSColor} sValueColor New value for property <code>valueColor</code>
 * @returns {sap.suite.ui.microchart.StackedBarMicroChartBar} Reference to <code>this</code> in order to allow method chaining
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.StackedBarMicroChartBar.prototype.setValueColor = function(sValueColor) { return new sap.suite.ui.microchart.StackedBarMicroChartBar(); };

// ---- static fields of namespaces ---------------------------------------------------------------------

// ---- sap.suite.ui.microchart.AreaMicroChartViewType --------------------------------------------------------------------------

/**
 * The view with labels on the top and bottom.
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartViewType.Normal = "";

/**
 * The view with labels on the left and right.
 * @public
 * 
 */
sap.suite.ui.microchart.AreaMicroChartViewType.Wide = "";


// ---- sap.suite.ui.microchart.BulletMicroChartModeType --------------------------------------------------------------------------

/**
 * Displays the Actual value.
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChartModeType.Actual = "";

/**
 * Displays delta between the Actual and Threshold values.
 * @public
 * 
 */
sap.suite.ui.microchart.BulletMicroChartModeType.Delta = "";


// ---- sap.suite.ui.microchart.CommonBackgroundType --------------------------------------------------------------------------

/**
 * Dark background color.
 * @public
 * 
 */
sap.suite.ui.microchart.CommonBackgroundType.Dark = "";

/**
 * The darkest background color.
 * @public
 * 
 */
sap.suite.ui.microchart.CommonBackgroundType.Darkest = "";

/**
 * Extra dark background color.
 * @public
 * 
 */
sap.suite.ui.microchart.CommonBackgroundType.ExtraDark = "";

/**
 * Extra light background color.
 * @public
 * 
 */
sap.suite.ui.microchart.CommonBackgroundType.ExtraLight = "";

/**
 * Light background color.
 * @public
 * 
 */
sap.suite.ui.microchart.CommonBackgroundType.Light = "";

/**
 * The lightest background color.
 * @public
 * 
 */
sap.suite.ui.microchart.CommonBackgroundType.Lightest = "";

/**
 * Medium background color.
 * @public
 * 
 */
sap.suite.ui.microchart.CommonBackgroundType.Medium = "";

/**
 * Medium light background color.
 * @public
 * 
 */
sap.suite.ui.microchart.CommonBackgroundType.MediumLight = "";

/**
 * The transparent background color.
 * @public
 * 
 */
sap.suite.ui.microchart.CommonBackgroundType.Transparent = "";


// ---- sap.suite.ui.microchart.ComparisonMicroChartViewType --------------------------------------------------------------------------

/**
 * Titles and values are displayed above the bars.
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartViewType.Normal = "";

/**
 * Behavior changes based on the current width of the chart.
 * <code>Normal</code> view is used for charts up to 192px wide, and <code>Wide</code> is used for wider charts.
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartViewType.Responsive = "";

/**
 * Titles and values are displayed in the same line with the bars.
 * @public
 * 
 */
sap.suite.ui.microchart.ComparisonMicroChartViewType.Wide = "";


// ---- sap.suite.ui.microchart.DeltaMicroChartViewType --------------------------------------------------------------------------

/**
 * Titles are displayed above the bars.
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChartViewType.Normal = "";

/**
 * Behavior changes based on the current width of the chart.
 * <code>Normal</code> view is used for charts up to 192px wide, and <code>Wide</code> is used for wider charts.
 * 
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChartViewType.Responsive = "";

/**
 * Titles are displayed in the same line with the bars.
 * @public
 * 
 */
sap.suite.ui.microchart.DeltaMicroChartViewType.Wide = "";


// ---- sap.suite.ui.microchart.HorizontalAlignmentType --------------------------------------------------------------------------

/**
 * Center alignment.
 * @public
 * 
 */
sap.suite.ui.microchart.HorizontalAlignmentType.Center = "";

/**
 * Left alignment.
 * @public
 * 
 */
sap.suite.ui.microchart.HorizontalAlignmentType.Left = "";

/**
 * Right alignment.
 * @public
 * 
 */
sap.suite.ui.microchart.HorizontalAlignmentType.Right = "";


// ---- sap.suite.ui.microchart.LineType --------------------------------------------------------------------------

/**
 * Dashed line.
 * @public
 * 
 */
sap.suite.ui.microchart.LineType.Dashed = "";

/**
 * Dotted line.
 * @public
 * 
 */
sap.suite.ui.microchart.LineType.Dotted = "";

/**
 * Solid line.
 * @public
 * 
 */
sap.suite.ui.microchart.LineType.Solid = "";

