<?php

namespace MWStake\MediaWiki\Component\GalaxyIntegration;

interface GetWikiInfoFromWikiIdHook {
	/**
	 * @param string $wikiId
	 * @param array $wikiInfo
	 * @return array|null
	 */
	public function onGetWikiInfoFromWikiId( string $wikiId, array &$wikiInfo ): ?array;
}