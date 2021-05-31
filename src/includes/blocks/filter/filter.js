function SelectBlock() {
    this.onClick = $.proxy(this.onClick, this);
    this.onBodyClick = $.proxy(this.onBodyClick, this);
    this.activeClass = "show";
    this.init();
}

SelectBlock.prototype.onBodyClick = function (evt) {
    if (this.selectWrapper.has(evt.target).length === 0){
        this.hide();
    }
}

SelectBlock.prototype.hideBlock = function (selectWrapper) {
    var _this = this;
    var selectBlock = selectWrapper.find('.js-select-list');
    selectBlock.animate({opacity: 0}, 150, function () {
        selectWrapper.removeClass(_this.activeClass);
    });

    $('body').off('click', this.onBodyClick);
}

SelectBlock.prototype.onClick = function () {
    if(this.selectWrapper.hasClass(this.activeClass)) {
        this.hide();
    } else {
        var activeOther = $('.filter-select.show');
        this.hideBlock(activeOther);
        this.selectWrapper.addClass(this.activeClass);
        this.selectBlock.animate({opacity: 1}, 150);
        $('body').on('click', this.onBodyClick)
    }
}

SelectBlock.prototype.init = function () {
    var _this = this;

    $('body').on('click', '.js-select', function () {
        _this.selectWrapper = $(this).parent();
        if (!_this.selectWrapper.length) return;
        _this.selectBlock = _this.selectWrapper.find('.js-select-list');
        if (!_this.selectBlock.length) return;

        _this.onClick();
    })
}

SelectBlock.prototype.hide = function () {
    var _this = this;
    this.selectBlock.animate({opacity: 0}, 150, function () {
        _this.selectWrapper.removeClass(_this.activeClass);
    });

    $('body').off('click', this.onBodyClick);
}

var selectBlock = new SelectBlock();


function AjaxFilter() {
    var WAIT = 700;

    $('body').on('input', '.js-evt-search', debounce(refreshList, WAIT));
    $('body').on('change', '.js-filter-checkbox', debounce(refreshList, WAIT));


    function refreshList() {
        var json = getJsonForm($('#filter'));
        preloader.show();

        var paramsAjax = {
            type: 'POST',
            url: 'action.php',
            dataType: 'json',
            data: json,
            onSuccess: function (data) {

                //удалить при интеграции
                var data = {
                    status: 'OK',
                    template: $('#filter').hasClass('persons-list--registry') ? mockDataPersonsList.clone() : mockUserList.clone(),
                }

                if(data.status == 'OK') {

                    $('.js-page-content').replaceWith(data.template);

                } else {
                    alert('Ошибка связи с сервером');
                }
                preloader.hide();
            },

            onError: function () {
                alert('Ошибка связи с сервером');
                preloader.hide();
            },
        }

        onSendAjax(paramsAjax)

    }
}

AjaxFilter();

