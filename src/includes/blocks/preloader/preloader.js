function Preloader() {
    this.template = $('<div class="preloader">\n' +
        '        <div class="preloader__in"></div>\n' +
        '      </div>')
}

Preloader.prototype.renderInBlock = function (block) {
    block.append(this.template);
    $('body').css('overflow', 'hidden');

}

Preloader.prototype.show = function () {
    this.renderInBlock($('footer'))
}

Preloader.prototype.hide = function () {
    this.template.remove();
    $('body').attr('style', '');
}

var preloader = new Preloader();