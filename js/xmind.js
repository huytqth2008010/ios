/*
 * @name: Xmind Premium Unlock
 * @author: Huy IT
 * @homepage: https://github.com/huytqth2008010
 * @date: 2026-05-15
 */

const obj = JSON.parse($response.body);
obj.license = obj.license || {};
obj.license.status = "sub";
obj.license.expireTime = 1893456000000; // 2030-01-01 ms

$done({ body: JSON.stringify(obj) });
