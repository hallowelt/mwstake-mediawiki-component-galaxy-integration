## MediaWiki Stakeholders Group - Components
# Galaxy integration for MediaWiki extensions

Provides tools for integrating extensions with Galaxy setups

## Hooks

Extensions usually have access to a wiki ID (WikiMap::getCurrentWikiId()).
In order to get the wiki instance information, you can fire following hooks


- `GetInterwikiPrefixFromWikiId` - Getting Interwiki prefix for Title construction
- `GetWikiInfoFromWikiId` - Getting wiki instance information for display purposes (e.g., display_text, color, url...)

## Instance badge

Require `mwstake.component.galaxy.foreignWikiBadge`

Mixing class `mws.galaxyIntegration.ForeignWikiBadge` to your class, passing foreign instance data,
as returned by `GetWikiInfoFromWikiIdHook` hook

```js
const $badge = this.getWikiBadge();
if ( $badge ) {
    // Append to your element
}
```
