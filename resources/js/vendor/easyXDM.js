function resetIframe(iframeToDestroy, confNewIframe) {
    iframeToDestroy.remove();
    setTimeout(() => {
        new easyXDM.Socket(confNewIframe);
    }, 2000);
}


export {
    resetIframe
}
