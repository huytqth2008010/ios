/*
 * @name: RevenueCat ETag Header Remover
 * @author: Huy IT
 * @homepage: https://github.com/huytqth2008010
 * @date: 2026-05-15
 */

const version = 'V1.0.2';

function setHeaderValue(e,a,d){var r=a.toLowerCase();r in e?e[r]=d:e[a]=d}var modifiedHeaders=$request.headers;setHeaderValue(modifiedHeaders,"X-RevenueCat-ETag",""),$done({headers:modifiedHeaders});
