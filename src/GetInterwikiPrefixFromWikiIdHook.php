<?php

namespace MWStake\MediaWiki\Component\GalaxyIntegration;

interface GetInterwikiPrefixFromWikiIdHook {
	/**
	 * @param string $wikiId
	 * @param string|null $interwikiPrefix
	 */
	public function onGetInterwikiPrefixFromWikiId( string $wikiId, ?string &$interwikiPrefix ): void;
}