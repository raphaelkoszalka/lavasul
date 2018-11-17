class Scroller {

    scrollToResolver(elem) {
        const jump = parseInt(elem.getBoundingClientRect().top *.2);
        document.body.scrollTop += jump + 5;
        document.documentElement.scrollTop += jump + 5;
        if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
            elem.lastjump = Math.abs(jump);
            setTimeout(() => this.scrollToResolver(elem), 45);
        } else {
            elem.lastjump = null;
        }
    }

}

export default Scroller;