//////////////////////////////////////////////////////////////////////////////////
//		To guess the three.js classname
//////////////////////////////////////////////////////////////////////////////////
InspectedWin3js._threeJSClassNames = [];

InspectedWin3js.getThreeJSClassName		= function( object ) {
	for( var j in InspectedWin3js._threeJSClassNames ) {
		if( object instanceof THREE[ InspectedWin3js._threeJSClassNames[ j ] ] ) {
			var result = InspectedWin3js._threeJSClassNames[j]
			return result;
		}
	}

	debugger; // dafuc?
}	

/**
 * extract all constructors functions name from three.js
 */
InspectedWin3js.extractThreeJSClassNames	= function() {
        InspectedWin3js.log('in 10-injected-script-classnames.js: extract three.js classnames')
	for( var property in THREE ){
		if( typeof THREE[ property ] !== 'function' )	continue
		// NOTE: unshift is key here to get proper inheritance
		// - https://github.com/spite/ThreeJSEditorExtension/issues/9
		InspectedWin3js._threeJSClassNames.push( property );
	}
	// moves the EventDispatcher property to end of the list so that it is the last classname matched in getTHREEJSClassName()
	var index = InspectedWin3js._threeJSClassNames.indexOf('EventDispatcher');
	if (index > -1) {
		InspectedWin3js._threeJSClassNames.splice(index, 1);
		InspectedWin3js._threeJSClassNames.push( 'EventDispatcher' )
	}
}
