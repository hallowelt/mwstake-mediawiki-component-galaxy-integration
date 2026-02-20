mws.galaxyIntegration.ForeignWikiBadge = function ( wikiData ) {
	this.sourceWiki = wikiData || null;
};

OO.initClass( mws.galaxyIntegration.ForeignWikiBadge );

mws.galaxyIntegration.ForeignWikiBadge.prototype.getWikiBadge = function () {
	if ( !this.sourceWiki ) {
		return null;
	}
	const $badge = $( '<span>' )
		.addClass( 'foreign-wiki-badge' )
		.text( this.sourceWiki.display_text );
	if ( this.sourceWiki.color ) {
		$badge.css( 'background-color', this.sourceWiki.color.background );
		if ( this.sourceWiki.color.lightText ) {
			$badge.addClass( 'foreign-wiki-badge--light-text' );
		}
	}
	return $badge;
}
