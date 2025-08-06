function FindProxyForURL(url, host) {
    if (
        dnsDomainIs(host, "tiktok.com") ||
        shExpMatch(host, "*.tiktok.com") ||
        shExpMatch(host, "*.tiktokcdn.com")
    ) {
        return "DIRECT";
    }
    return "PROXY 192.168.1.1:8080";
}

