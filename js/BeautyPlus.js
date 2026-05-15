/*
 * @name: BeautyPlus Premium Unlock
 * @author: Huy IT
 * @homepage: https://github.com/huytqth2008010
 * @date: 2026-05-15
 */

var objc = JSON.parse($response.body);

objc = {
    "vip_expires_date": 4071600000,
    "message": "success",
    "data": {
        "points": 999999999,
        "next_claim": 1,
        "gid": "2641810920",
        "balance": 999999999,
        "created_at": 1707331696
    }
}

$done({ body: JSON.stringify(objc) });
