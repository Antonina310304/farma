function DropdownInput(container) {
    this.container = container;
    this.dropdownList = container.find('.input-select__list');
    this.selectedBlock = container.find('.input-select__text');
    this.animationSpeed = 150;
    this.input = container.find('.js-input-select');
    this.radio = container.find('.js-select-radio');
    this.other = container.find('.js-other');
    this.checkbox = container.find('.js-select-checkbox');
    this.fakeInput = container.find('.js-fake-input');
    this.onBodyClick = $.proxy(this.onBodyClick, this);
    this.showClass = 'show';
    this.checkedClass = 'checked';
    this.errorClass = 'error';
    this.maxHeight = 90;
    this.inputTextTemplate = $('<div class="cloned create-person__col-3">\n' +
        '                  <div class="input">\n' +
        '                    <div class="input__in">\n' +
        '                      <input class="input__input js-input" type="text" name="name3" placeholder="" value="" data-validate="empty" max-lenght="250" data-name="name3">\n' +
        '                      <label class="input__label">Изменения выявленные антенатально</label>\n' +
        '                    </div>\n' +
        '                    <div class="input__error js-input-error">Недопустимые символы</div>\n' +
        '                  </div>\n' +
        '                </div>')

    this.init();
}

DropdownInput.prototype.getInput = function ({name, title}) {
    var input = this.inputTextTemplate.clone();
    input.find('.input__label').text(title);
    input.find('.input__input').attr('name', name + '-text');
    input.find('.input__input').data('name' + '-text');

    return input;
}

DropdownInput.prototype.hideDropdown = function () {
    var _this = this;
    this.dropdownList.animate({opacity: 0}, this.animationSpeed, function () {
        _this.dropdownList.css('height', '');
        _this.container.removeClass(_this.showClass);
    })
    $('body').off('click', this.onBodyClick);
    $('body').off('focus', 'input', this.onBodyClick);
}

DropdownInput.prototype.showDropdown = function () {
    this.container.addClass(this.showClass);
    this.dropdownList.height('auto');
    this.dropdownList.animate({opacity: 1}, this.animationSpeed);
    $('body').on('click', this.onBodyClick);
    $('body').on('focus', 'input', this.onBodyClick);
}
//адаптивная высота выпадающего блока и ициализация скролбара
DropdownInput.prototype.initDropdown = function () {
    var heightList = this.dropdownList.find('.select-list').height();
    var height = heightList < this.maxHeight ? heightList : this.maxHeight;
    this.dropdownList.find('.input-select__wrapper').height(height)
    this.dropdownList.find('.scrollbar-inner').scrollbar();
}
// если поле заполнено, то добаляем класс родителю
DropdownInput.prototype.updateCheckedInputs = function () {
    var value = this.container.find('.input-select__text').val().trim();
    if(value !== '') {
        this.container.addClass(this.checkedClass)
    }
}

DropdownInput.prototype.init = function () {
    var _this = this;
    this.initDropdown();
    this.updateCheckedInputs();


    this.input.on('click', function () {
        // _this.container.removeClass('error');
        if(_this.container.hasClass(_this.showClass)) {
            _this.hideDropdown();
        } else {
            _this.showDropdown();
        }
    })

    this.other.on('click', function () {
        var isChecked = $(this).is(":checked");
        var title = _this.container.find('.input-select__label').text();
        var parent = _this.container.parent();
        var name = $(this).attr("name");
        _this.hideDropdown();
        if(isChecked) {
            var newInput = _this.getInput({name, title});
            parent.after(newInput);
            newInput.find('.input__input').focus();
        } else {
            var nextEl = parent.next();
            if(nextEl.hasClass('cloned')) nextEl.remove();
        }
    })


    this.radio.on('click', function () {
        _this.selectedBlock.val($(this).attr('value'));
        _this.container.addClass(_this.checkedClass);
        _this.container.removeClass(_this.errorClass);
        _this.hideDropdown();
    })

    this.checkbox.on('click', function () {
        var selectedValue = false;
        _this.container.find('.js-select-checkbox:checked').each(function () {
            var value = $(this).val();
            selectedValue = selectedValue ?  selectedValue + ', ' + value : value;
        })

        if(selectedValue) {
            _this.container.addClass(_this.checkedClass);
            _this.selectedBlock.val(selectedValue);
        } else {
            _this.selectedBlock.val('');
            _this.container.removeClass(_this.checkedClass);
        }
    })


    this.fakeInput.on('focus', function () {
        _this.showDropdown();
    })
}


DropdownInput.prototype.onBodyClick = function (evt) {
    if (this.container.has(evt.target).length === 0){
        this.hideDropdown();
    }
}


$('.input-select').each(function () {
    var dropdownInput = new DropdownInput($(this));
})