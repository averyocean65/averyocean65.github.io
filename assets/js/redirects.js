function openLinkCautious(link) {
    if(!window.confirm("Are you sure you want to leave the website?")) {
        return;
    }

    window.open(link, "_blank");
}

function toNewestRelease() {
    toRelease("averyocean65");
}

function toRelease(name) {
    const link = "https://push.fm/fl/" + name;
    openLinkCautious(link);
}