function ControllerInput() {
    this.focusedClass = 'focused';
    this.focusClass = 'focus';
    this.onBlur = $.proxy(this.onBlur, this);
    this.onFocus = $.proxy(this.onFocus, this);
    this.onChange = $.proxy(this.onChange, this);
    this.init();
}

ControllerInput.prototype.onFocus = function (evt) {
    var target = $(evt.target);

    var parent = target.parent().parent();
    parent.addClass(this.focusedClass);
    parent.addClass(this.focusClass);

    $('body').on('blur', '.js-input', this.onBlur);
}

ControllerInput.prototype.onChange = function (evt) {
    var target = $(evt.target);
    var parent = target.parent().parent();
    // parent.removeClass(this.errorClass);
}

ControllerInput.prototype.onBlur = function (evt) {
    var target = $(evt.target);
    var parent = target.parent().parent();
    parent.removeClass(this.focusClass);

    if(target.val().trim() != '') return;
    parent.removeClass(this.focusedClass);
}

ControllerInput.prototype.init = function () {
    var input = $('.js-input');
    if(!input.length) return;


    var _this = this;

    if(input.val().trim() != '') {
        input.parent().parent().addClass(this.focusedClass);
    }

    $('body').on('change', '.js-input', this.onChange);
    $('body').on('focus', '.js-input', this.onFocus);

    $('body').on('input', '.js-input', function () {
        // $(this).parent().parent().removeClass(_this.errorClass);
    });
}


var controllerInput = new ControllerInput();


function codeMask() {
    $('.js-mask-code').inputmask({
        mask: "99",
        placeholder: "",
        showMaskOnHover: false,
        recursive: true
    });

    //чтобы курсор всегда был в конце текста
    $('.js-mask-code').on('click', function () {
        $(this).setCursorPosition(1);
    })

    $('.js-mask-code').on('input', function () {
        var val = $(this).val().trim();
        var siblings = $(this).parent().next();


        // $(this).parent().removeClass('error');

        if(val != '') {
            $(this).addClass('fill');
        }

        if(val.length == 1) {
            siblings.find('.js-mask-code').focus();
        }

        if(val.length == 2) {
            $(this).val(val[1]);
            siblings.find('.js-mask-code').focus();
        }

        if(!siblings.length) return;

    })
}

codeMask();
