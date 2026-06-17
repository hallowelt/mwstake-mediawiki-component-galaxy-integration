mws = window.mws || {};
mws.galaxyIntegration = {
	vue: {}
};

mw.hook( 'oojsplus.ui.widget.batchoptionwidget.preinit' ).add( ( item, $element ) => {
	if ( !item.data.includes( 'source' ) ) { // eslint-disable-line es-x/no-array-prototype-includes
		return;
	}
	if ( item.attr.length === 0 ) {
		return;
	}
	if ( item.attr.wiki_id === 'bluespice' ) {
		$( item.$label ).addClass( 'bi-bs-home' );
		return;
	}
	if ( item.attr && item.attr.color ) {
		$( $element ).css( 'border-left', '5px solid ' + item.attr.color.background );
	}
} );
