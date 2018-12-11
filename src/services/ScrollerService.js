class Scroller {

    scrollToResolver(elem, top) {

        let jump = parseInt(elem.getBoundingClientRect().top * .2, 10) + 2;

        if(top) {
            jump -= 2;
        }

        document.body.scrollTop += jump;
        document.documentElement.scrollTop += jump;

        if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
            elem.lastjump = Math.abs(jump);
            setTimeout(() => { this.scrollToResolver(elem); }, 55);
            return;
        }

        elem.lastjump = null;
    }

}

export default Scroller;