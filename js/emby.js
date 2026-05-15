/*
 * @name: Emby Premiere Unlock
 * @author: Huy IT
 * @homepage: https://github.com/huytqth2008010
 * @date: 2026-05-15
 */

var objc = JSON.parse($response.body);

objc = {
    "cacheExpirationDays": 999,
    "message": "Device is valid",
    "resultCode": "GOOD"
};

$done({ body: JSON.stringify(objc) });
