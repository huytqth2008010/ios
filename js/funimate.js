/*
 * @name: Funimate Pro Premium Unlock
 * @author: Huy IT
 * @homepage: https://github.com/huytqth2008010
 * @date: 2026-05-15
 */

var objc = JSON.parse($response.body);

if (objc.user) {
    objc.user.is_pro = true;
    objc.user.pro_status = "active";
    objc.user.pro_expires_at = "9999-01-09T02:00:00Z";
    objc.user.subscription_type = "yearly";
}

$done({ body: JSON.stringify(objc) });
