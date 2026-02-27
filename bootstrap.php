<?php

if ( defined( 'MWSTAKE_MEDIAWIKI_COMPONENT_GALAXYINTEGRATION_VERSION' ) ) {
	return;
}

define( 'MWSTAKE_MEDIAWIKI_COMPONENT_GALAXYINTEGRATION_VERSION', '1.0.1' );

MWStake\MediaWiki\ComponentLoader\Bootstrapper::getInstance()
->register( 'galaxy-integration', static function () {

	$GLOBALS['wgResourceModules']['mwstake.component.galaxy.bootstrap'] = [
		'scripts' => [
			'resources/bootstrap.js',
		],
		'localBasePath' => __DIR__
	];

	$GLOBALS['wgResourceModules']['mwstake.component.galaxy.foreignWikiBadge'] = [
		'scripts' => [
			'resources/ForeignWikiBadge.js',
		],
		'styles' => [
			'resources/ForeignWikiBadge.css',
		],
		'dependencies' => [
			'oojs',
			'mwstake.component.galaxy.bootstrap'
		],
		'localBasePath' => __DIR__
	];

	$GLOBALS['wgResourceModules']['mwstake.component.galaxy.foreignWikiBadge.vue'] = [
		'packageFiles' => [
			'resources/ForeignWikiBadge.vue',
		],
		'styles' => [
			'resources/ForeignWikiBadge.css',
		],
		'dependencies' => [
			'mwstake.component.galaxy.bootstrap',
			'vue'
		],
		'localBasePath' => __DIR__
	];
} );
