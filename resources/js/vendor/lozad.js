import lozad from 'lozad'

function createLazyLoad(element, options) {
    const observer = lozad(element, options);
    observer.observe();
}

export {
    createLazyLoad
}
