function FindProxyForURL(url, host) {
    // TikTok ကို DIRECT ဝင်ခွင့်ပြုမယ်
    if (
        dnsDomainIs(host, "tiktok.com") ||
        shExpMatch(host, "*.tiktok.com") ||
        shExpMatch(host, "*.tiktokcdn.com")
    ) {
        return "DIRECT";
    }

    // အခြား site တွေ Proxy သုံးမယ်
    return "PROXY 192.168.1.1:8080";
}
