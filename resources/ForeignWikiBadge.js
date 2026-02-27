mws.galaxyIntegration.ForeignWikiBadge = function ( wikiData ) {
	this.sourceWiki = wikiData || null;
	this.defaultColor = '#747474';
};

OO.initClass( mws.galaxyIntegration.ForeignWikiBadge );

mws.galaxyIntegration.ForeignWikiBadge.prototype.getWikiBadge = function ( maxLength ) {
	if ( !this.sourceWiki ) {
		return null;
	}
	let text = this.sourceWiki.display_text;
	if ( maxLength > 0 ) {
		text = text.length > maxLength ? text.substring( 0, maxLength - 1 ) + '…' : text;
	}
	const $badge = $( '<div>' ).addClass( 'foreign-wiki-badge' );
	const $icon = $( '<span>' ).addClass( 'foreign-wiki-badge__icon' );
	const $text = $( '<span>' ).addClass( 'foreign-wiki-badge__text' ).text( text );

	$badge.append( $icon, $text );

	const wikiColor = this.getWikiColor();
	$badge.css( 'color', wikiColor );
	$icon.css( 'background-color', wikiColor );
	if ( this.shouldUseLightText() ) {
		$badge.addClass( 'foreign-wiki-badge--light-text' );
	}
	return $badge;
}

mws.galaxyIntegration.ForeignWikiBadge.prototype.getWikiColor = function () {
	if ( !this.sourceWiki )  {
		return null;
	}
	if ( !this.sourceWiki.color ) {
		return this.defaultColor;
	}
	return this.sourceWiki.color.background;
};

mws.galaxyIntegration.ForeignWikiBadge.prototype.shouldUseLightText = function () {
	if ( !this.sourceWiki )  {
		return false;
	}
	if ( !this.sourceWiki.color ) {
		return false;
	}
	return this.sourceWiki.color.lightText || false
};
