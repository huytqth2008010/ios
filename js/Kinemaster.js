/*
 * @name: KineMaster Pro Unlock
 * @author: Huy IT
 * @homepage: https://github.com/huytqth2008010
 * @date: 2026-05-15
 */

var obj = JSON.parse($response.body);

obj = {
    "is_valid_device": true,
    "has_valid_subscription": true,
    "expiration_date_ms": 4071600000000,
    "is_table_resettable": true,
    "subscription_product_id": "com.kinemaster.sub.annual.ia2",
    "state_code": 0
};

$done({ body: JSON.stringify(obj) });
