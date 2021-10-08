/**
 *  * маска накладывается по атрибуту data-mask
 * валидация проходит по полю data-validate и data-required
 * где маска валидация проходит напустоту поля
 * у телефона и e-mail валидация еще и на корректность (особенности маски)
 * у остальных полей валидация на пустоту поля
 * */

function ValidatePerson() {
    this.form = $('.js-person-form');
    this.fields = this.getInputs();
    this.checkForm = $.proxy(this.checkForm, this);
    this.errors = [];
    this.type = {
        EMPTY: 'empty',
        SHOT: 'shot',
        LONG: 'long',
        PASSWORD: 'password',
        TEL: 'tel',
        MAIL: 'email',
        RADIO: 'radio',
        POST: 'post',
        DATE: 'date',
        COMPLEX_NUMBER: 'complex_numbers',
        NUMBER: 'number',
        SURNAME: 'surname',
        NAME: 'name',
        PATRONYMIC: 'patronymic',
        role: 'role',
    }

    this.errorsText = {
        EMPTY: 'Поле не должно быть пустым',
        INVALID: 'Недопустимые символы',
        MINVAL: 'Количество символов не должно быть меньше 8',
    }

    this.init();
}

ValidatePerson.prototype.toggleError = function (isValid, input) {
    if(isValid) {
        input.parent().parent().removeClass('error');
    } else {
        input.parent().parent().addClass('error');
    }
}
/**
 * проверка на корректность поля при потере фокуса
 * */
ValidatePerson.prototype.onChange = function () {
    var _this = this;
    this.form.find('[data-required]').on('change', function () {
        var inputType = $(this).data('validate');
        switch (inputType) {
            case _this.type.MAIL:
                _this.toggleError(_this.isValidEmail($(this)), $(this));
                break;
            case _this.type.TEL:
                _this.toggleError(_this.isValidTel($(this)), $(this));
                break;
            case _this.type.DATE:
                _this.toggleError(_this.isValidDate($(this)), $(this));
                break;
        }
    })
}

ValidatePerson.prototype.isValidDate = function (input) {
    var value = input.val();
    var isValidDate = Inputmask.isValid(value, { alias: "datetime", inputFormat: "dd.mm.yyyy"})
    return (value == '' || isValidDate) ? true : false;
}

ValidatePerson.prototype.isValidTel = function (input) {
    var value = input.inputmask('unmaskedvalue');
    return (value == '' || value.length == 10) ? true : false;
}

ValidatePerson.prototype.isValidEmail = function (input) {
    var value = input.val();
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    return (value == '' || reg.test(value))  ? true : false;
}

/**
 * проверка полей на валидацию
 * */
ValidatePerson.prototype.checkValid = function (item) {
    var inputType = item.input.data('validate'),
        name = item.input.data('name'),
        value,
        isValid = false,
        errorText;

    switch (inputType) {
        case this.type.EMPTY:
            value = item.input.val().trim();
            if(value == '') {
                isValid = false;
                errorText = this.errorsText.EMPTY;
            } else {
                isValid = true;
            }
            break;
        case this.type.DATE:
            value = item.input.val().trim();
             var isValidValue = Inputmask.isValid(value, { alias: "datetime", inputFormat: "dd.mm.yyyy"});

            if(value == '') {
                isValid = false;
                errorText = this.errorsText.EMPTY;
            } else if(!isValidValue) {
                isValid = false;
                errorText = this.errorsText.INVALID;
            } else {
                isValid = true;
            }
            break;
        case this.type.PASSWORD:
            value = item.input.val().trim();
            if(value == '') {
                isValid = false;
                errorText = this.errorsText.EMPTY;
            } else if(value.length < 8) {
                errorText = this.errorsText.MINVAL;
                isValid = false;
            } else {
                isValid = true;
            }
            break;
        case this.type.TEL:
            value = item.input.inputmask('unmaskedvalue');
            var count = value.length;
            if((count > 1) && (count < 10)) {
                isValid = false;
                errorText = this.errorsText.INVALID;
            } else if(count == 0) {
                isValid = false;
                errorText = this.errorsText.EMPTY;
            } else {
                isValid = true;
            }

            break;
        case this.type.MAIL:
            value = item.input.val().trim();

            if(value == '') {
                isValid = false;
                errorText = this.errorsText.EMPTY;
            } else {
                var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                if(!reg.test(value)) {
                    isValid = false;
                    errorText = this.errorsText.INVALID;
                } else {
                    isValid = true;
                }
            }
            break;
    }

    if(!isValid) {
        var index = this.errors.indexOf(name);
        if(index == -1) {
            this.errors.push(name);
            this.showError(item, errorText);
        }
    } else {
        var index = this.errors.indexOf(name);
        if(index != -1) {
            this.errors.splice(index, 1);
            this.hideError(item);
        }
    }
}

/**
 * получение списка инпутов
 * */
ValidatePerson.prototype.getInputs = function () {
    var fields = [];
    this.form.find('[data-required]').each(function () {
        var type = $(this).attr('type');

        switch (type) {
            case 'radio' :
                var parent = $(this).closest('.input-select');
                break;
            default:
                var parent = $(this).parent().parent();
                break;
        }

        fields.push({
            input: $(this),
            parent: parent,
            errorBlock: parent.find('.js-input-error'),
        })
    })
    return fields;
}

/**
 * добавление маски к полям формы
* */
ValidatePerson.prototype.addMask = function (input) {
    var inputType = input.data('mask'),
    mask,
    placeholder = "",
    alias = '',
    type = '',
    inputFormat = '',
    validator = '',
    definitions = {};
    console.log(inputType)

    switch (inputType) {
        case this.type.SHOT:
            mask = 'яяяяяяяяяяяяяяяяяяяяяяяяя';
            break;
        case this.type.LONG:
            mask = '*{150}';
            definitions = {
                '*' : {
                    validator: "[0-9А-я. -/,/\\\\/]",
                }
            };
            break;
        case this.type.COMPLEX_NUMBER:
            mask = "*{15}";
            definitions = {
                '*' : {
                    validator: "[0-99/\\\\/.,]",
                }
            };

            break;
        case this.type.NUMBER:
            mask = "*{15}";
            definitions = {
                '*' : {
                    validator: "[0-99]",
                }
            };

            break;
        case this.type.DATE:
            type = "datetime";
            inputFormat = "dd.mm.yyyy";
            placeholder = '';
            break;
        case this.type.POST:
            mask = "*{30}";
            definitions = {
                '*' : {
                    validator: "[A-Za-zА-я]",
                }
            };

            break;
        case this.type.PASSWORD:
            mask = "*{20}";
            definitions = {
                '*' : {
                    validator: "[A-Za-z0-9!@#$%^&*()]",
                }
            };
            break;
        case this.type.TEL:
            mask = "+7 (999)-999-99-99";
            placeholder = "*"
            break;
        case this.type.MAIL:
            type = "email";
            placeholder = "*"
            break;
        case this.type.POST:
            // mask = '*{1,30}';
            break;
    }

    input.inputmask(type, {
        mask: mask,
        alias: alias,
        placeholder: placeholder,
        inputFormat: inputFormat,
        showMaskOnHover: false,
        validator: validator,
        definitions: definitions,
    })

}

ValidatePerson.prototype.hideError = function (item) {
    item.parent.removeClass('error');
}

ValidatePerson.prototype.showError = function (item, errorText) {
    item.errorBlock.text(errorText)
    item.parent.addClass('error');

}
ValidatePerson.prototype.checkForm = function () {
    var _this = this;
    this.fields.forEach(function (item) {

        _this.checkValid(item)
    })
}

ValidatePerson.prototype.submit = function () {
    var _this = this;
    var json = getJsonForm(this.form);

    onSendAjax({
        type: 'POST',
        url: 'action.php',
        dataType: 'json',
        data: json,
        onSuccess: function (data) {
            preloader.hide();

            //удалить при интеграции
            var data = {
                status: 'OK',
                location: 'redirect-success-form.php',
                fields: [
                    {
                        name: 'sex',
                        textError: 'Текст ошибки с бэка'
                    },
                    {
                        name: 'email',
                        textError: 'Текст ошибки с бэка'
                    },
                    {
                        name: 'tel',
                        textError: 'Текст ошибки с бэка'
                    },

                ]
            }

            if(data.status == 'OK') {

                if(_this.actionOnSuccess == 'check') {
                    var modal = $('[data-modal-name="modal-success"]');
                    var modalClass = new Modal({
                        modal,
                        confirm: function () {
                            document.location.replace(data.location);
                        }
                    });
                    modalClass.render();
                }


            } else if(data.status == 'ERROR') {
                data.fields.forEach(function (item) {
                    var input = _this.form.find('[data-name="'+ item.name + '"]');
                    var parent = input.parent().parent();

                    _this.showError({errorBlock: parent.find('.js-input-error'), parent: parent}, item.textError)
                })

            }

        },
        onError: function () {
            alert('Ошибка соединения, попробуйте позже!')
        },
    })
}


ValidatePerson.prototype.deductible = function () {
    $('body').on('input', '[data-deductible]', function () {
        var deductible = $(this).data('deductible');

        var list = $('[data-deductible="' + deductible + '"]');
        var total = 0.52;
        var isFull = true;
        var resultNode = $('[data-result="' + deductible + '"]');
        var resultNodeParent = resultNode.parent().parent();

        list.each(function () {
            var value = $(this).val();
            var isNumber = isFinite(value) && value != '';

            if(!isNumber) {
                isFull = false;
                return false;
            } else {
                total = total * value;
            }
        })
        // если все поля заполнены числом добавляем результат в финальное поле
        if(isFull) {
            resultNode.val(total.toFixed(4));
            resultNodeParent.addClass('focused');
        } else {
            resultNode.val('');
            resultNodeParent.removeClass('focused');
        }

    })
}
ValidatePerson.prototype.init = function () {
    var _this = this;
    this.onChange();
    // this.fields

    this.form.find('[data-mask]').each(function (item) {
        _this.addMask($(this));
    })

    this.form.find('[data-required]').on('input', function () {
        $(this).parent().parent().removeClass('error');
    })

    this.deductible();

    this.form.on('submit', function (evt) {
        evt.preventDefault();
        _this.checkForm();
        _this.actionOnSuccess = $(this).find('[type="submit"]').data('action');

        if(_this.errors.length == 0) {

            preloader.show();
            _this.submit();
        }
    })
}
$(document).ready(function () {
    var validatePerson = new ValidatePerson();
})
