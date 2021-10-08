function onSendAjax(params) {
    $.ajax({
        type: params.type,
        url: params.url,
        dataType: params.url,
        data: params.data,
        processData: false,
        contentType: false,
        cache: false,
        success: function (data) {
            params.onSuccess(data);
        },

        error: function (data) {
            //добавить обработку ошибок и убрать setTimeout
            setTimeout(function () {
                params.onSuccess();
            }, 2000)
            // пример массива с ошибкой
            var data = {
                status: 'error',
                template: 'templateHTML',
            }
        }
    });
}


function debounce(func, wait, immediate) {
    var timeout;

    return function executedFunction() {
        var context = this;
        var args = arguments;

        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
};

function getJsonForm(form) {
    return form.serializeArray().reduce(function (output, value) {

        if(value.value !== "") {
            output[value.name] = value.value
        }

        return output
    }, {})
}

$.fn.setCursorPosition = function(pos) {
    if ($(this).get(0).setSelectionRange) {
        $(this).get(0).setSelectionRange(pos, pos);
    } else if ($(this).get(0).createTextRange) {
        var range = $(this).get(0).createTextRange();
        range.collapse(true);
        range.moveEnd('character', -1);
        range.moveStart('character', pos);
        range.select();
    }
};

var mockUserList = $('<div class="js-page-content">\n' +
    '            <div class="page__filter">\n' +
    '              <form class="filter" action="" method="POST" id="filter">\n' +
    '                <div class="filter__item login">\n' +
    '                  <p class="filter-input">\n' +
    '                    <input class="filter-input__search js-evt-search" type="text" placeholder="" name="login"><i class="filter-input__icon-search"></i>\n' +
    '                  </p>\n' +
    '                </div>\n' +
    '                <div class="filter__item name">\n' +
    '                  <p class="filter-input">\n' +
    '                    <input class="filter-input__search js-evt-search" type="text" placeholder="Пример текста" name="name"><i class="filter-input__icon-search"></i>\n' +
    '                  </p>\n' +
    '                </div>\n' +
    '                <div class="filter__item post">\n' +
    '                  <div class="filter-select">\n' +
    '                    <p class="filter-select__in js-select">Все<i class="filter-select__icon-arrow"></i></p>\n' +
    '                    <div class="filter-select__list js-select-list">\n' +
    '                      <ul class="select-list">\n' +
    '                        <li class="select-list__item">\n' +
    '                          <input class="select-list__input js-filter-checkbox" type="checkbox" id="post-0" name="post-0">\n' +
    '                          <label class="select-list__label" for="post-0">Нейрохирург</label>\n' +
    '                        </li>\n' +
    '                        <li class="select-list__item">\n' +
    '                          <input class="select-list__input js-filter-checkbox" type="checkbox" id="post-1" name="post-1">\n' +
    '                          <label class="select-list__label" for="post-1">Длинное название должности</label>\n' +
    '                        </li>\n' +
    '                        <li class="select-list__item">\n' +
    '                          <input class="select-list__input js-filter-checkbox" type="checkbox" id="post-2" name="post-2">\n' +
    '                          <label class="select-list__label" for="post-2">Терапевт</label>\n' +
    '                        </li>\n' +
    '                      </ul>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '                <div class="filter__item role">\n' +
    '                  <div class="filter-select">\n' +
    '                    <p class="filter-select__in js-select">Все<i class="filter-select__icon-arrow"></i></p>\n' +
    '                    <div class="filter-select__list js-select-list">\n' +
    '                      <ul class="select-list">\n' +
    '                        <li class="select-list__item">\n' +
    '                          <input class="select-list__input js-filter-checkbox" type="checkbox" id="role-0" name="role-0">\n' +
    '                          <label class="select-list__label" for="role-0">Менеджер</label>\n' +
    '                        </li>\n' +
    '                        <li class="select-list__item">\n' +
    '                          <input class="select-list__input js-filter-checkbox" type="checkbox" id="role-1" name="role-1">\n' +
    '                          <label class="select-list__label" for="role-1">Пользователь</label>\n' +
    '                        </li>\n' +
    '                        <li class="select-list__item">\n' +
    '                          <input class="select-list__input js-filter-checkbox" type="checkbox" id="role-2" name="role-2">\n' +
    '                          <label class="select-list__label" for="role-2">Врач</label>\n' +
    '                        </li>\n' +
    '                      </ul>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '                <div class="filter__item tel">\n' +
    '                  <p class="filter-input">\n' +
    '                    <input class="filter-input__search js-evt-search" type="text" placeholder="" name="tel"><i class="filter-input__icon-search"></i>\n' +
    '                  </p>\n' +
    '                </div>\n' +
    '                <div class="filter__item status">\n' +
    '                  <div class="filter-select">\n' +
    '                    <p class="filter-select__in js-select">Все<i class="filter-select__icon-arrow"></i></p>\n' +
    '                    <div class="filter-select__list js-select-list">\n' +
    '                      <ul class="select-list">\n' +
    '                        <li class="select-list__item">\n' +
    '                          <input class="select-list__input js-filter-checkbox" type="checkbox" id="status-0" name="status-0">\n' +
    '                          <label class="select-list__label" for="status-0">Активный</label>\n' +
    '                        </li>\n' +
    '                        <li class="select-list__item">\n' +
    '                          <input class="select-list__input js-filter-checkbox" type="checkbox" id="status-1" name="status-1">\n' +
    '                          <label class="select-list__label" for="status-1">Заблокирован</label>\n' +
    '                        </li>\n' +
    '                      </ul>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </form>\n' +
    '            </div>\n' +
    '            <div class="page__rug">\n' +
    '              <table class="persons-list" cellpadding="0" cellspacing="0">\n' +
    '                <tbody>\n' +
    '                \n' +
    '                \n' +
    '                \n' +
    '                \n' +
    '                \n' +
    '                \n' +
    '                <tr class="persons-list__tr">\n' +
    '                  <td class="login persons-list__cell">001017\n' +
    '                  </td>\n' +
    '                  <td class="name persons-list__cell">Кузьмин Владимир Иванович\n' +
    '                  </td>\n' +
    '                  <td class="post persons-list__cell">Нейрохирург\n' +
    '                  </td>\n' +
    '                  <td class="role persons-list__cell">Пользователь / Врач\n' +
    '                  </td>\n' +
    '                  <td class="tel persons-list__cell">+7 (950) 860 73-21\n' +
    '                  </td>\n' +
    '                  <td class="status persons-list__cell">Заблокирован\n' +
    '                  </td>\n' +
    '                  <td class="system persons-list__cell">\n' +
    '                    <div class="persons-list__buttons"><a class="persons-list__btn-control edit-button" href="#"></a><a class="persons-list__btn-control edit-inlocked" href="#"></a>\n' +
    '                    </div>\n' +
    '                  </td>\n' +
    '                </tr>\n' +
    '                <tr class="persons-list__tr">\n' +
    '                  <td class="login persons-list__cell">001017\n' +
    '                  </td>\n' +
    '                  <td class="name persons-list__cell">Кузьмин Владимир Иванович\n' +
    '                  </td>\n' +
    '                  <td class="post persons-list__cell">Нейрохирург\n' +
    '                  </td>\n' +
    '                  <td class="role persons-list__cell">Пользователь / Врач\n' +
    '                  </td>\n' +
    '                  <td class="tel persons-list__cell">+7 (950) 860 73-21\n' +
    '                  </td>\n' +
    '                  <td class="status persons-list__cell">Заблокирован\n' +
    '                  </td>\n' +
    '                  <td class="system persons-list__cell">\n' +
    '                    <div class="persons-list__buttons"><a class="persons-list__btn-control edit-button" href="#"></a><a class="persons-list__btn-control edit-inlocked" href="#"></a>\n' +
    '                    </div>\n' +
    '                  </td>\n' +
    '                </tr>\n' +
    '                <tr class="persons-list__tr">\n' +
    '                  <td class="login persons-list__cell">001017\n' +
    '                  </td>\n' +
    '                  <td class="name persons-list__cell">Кузьмин Владимир Иванович\n' +
    '                  </td>\n' +
    '                  <td class="post persons-list__cell">Нейрохирург\n' +
    '                  </td>\n' +
    '                  <td class="role persons-list__cell">Пользователь / Врач\n' +
    '                  </td>\n' +
    '                  <td class="tel persons-list__cell">+7 (950) 860 73-21\n' +
    '                  </td>\n' +
    '                  <td class="status persons-list__cell">Заблокирован\n' +
    '                  </td>\n' +
    '                  <td class="system persons-list__cell">\n' +
    '                    <div class="persons-list__buttons"><a class="persons-list__btn-control edit-button" href="#"></a><a class="persons-list__btn-control edit-inlocked" href="#"></a>\n' +
    '                    </div>\n' +
    '                  </td>\n' +
    '                </tr>\n' +
    '              </tbody></table>\n' +
    '              <div class="pagination-widget">\n' +
    '                <ul class="pagination pagination-widget__pagination">\n' +
    '                  <li class="pagination__item"><a class="pagination__link prev js-pagination" href="#" data-num-page="prev"></a></li>\n' +
    '                  <li class="pagination__item"><a class="pagination__link js-pagination" href="#" data-num-page="1">1</a></li>\n' +
    '                  <li class="pagination__item active"><a class="pagination__link js-pagination" href="#" data-num-page="2">2</a></li>\n' +
    '                  <li class="pagination__item"><a class="pagination__link js-pagination" href="#" data-num-page="3">3</a></li>\n' +
    '                  <li class="pagination__item"><a class="pagination__link js-pagination" href="#" data-num-page="4">4</a></li>\n' +
    '                  <li class="pagination__item"><a class="pagination__link js-pagination" href="#" data-num-page="5">5</a></li>\n' +
    '                  <li class="pagination__item"><a class="pagination__link js-pagination" href="#" data-num-page="6">6</a></li>\n' +
    '                  <li class="pagination__item"><a class="pagination__link js-pagination" href="#" data-num-page="7">7</a></li>\n' +
    '                  <li class="pagination__item"><a class="pagination__link js-pagination" href="#" data-num-page="8">8</a></li>\n' +
    '                  <li class="pagination__item"><a class="pagination__link next js-pagination" href="#" data-num-page="next"></a></li>\n' +
    '                </ul>\n' +
    '                <p class="pagination-widget__info">Показаны записи 1-10 из 196</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>')


var templateLogin = $('<div class="authorization page__authorization-in">\n' +
    '            <div class="authorization__in">\n' +
    '              <h1 class="authorization__title aut-title">Вход в админ панель</h1>\n' +
    '              <form class="js-aut form" action="" novalidate="novalidate" data-form="login" data-form-type="success">\n' +
    '                <div class="form__in">\n' +
    '                  <div class="form__input">\n' +
    '                    <div class="input error focused">\n' +
    '                      <div class="input__in">\n' +
    '                        <input class="input__input js-input" type="text" required="" name="login" data-required="true" placeholder="" value="asdfadsfadsf">\n' +
    '                        <label class="input__label">Логин</label>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                  <div class="form__input">\n' +
    '                    <div class="input error focused">\n' +
    '                      <div class="input__in">\n' +
    '                        <input class="input__input js-input" type="password" required="" name="password" data-required="true" placeholder="" value="asdfasfd">\n' +
    '                        <label class="input__label">Пароль</label>\n' +
    '                      </div>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div><a class="form__link text-right" href="#">Забыли пароль?</a>\n' +
    '                <button class="form__button button" type="submit">Войти</button>\n' +
    '              </form>\n' +
    '            </div>\n' +
    '            <div class="authorization__error authorization-error js-error-block">Не введен логин или пароль</div>\n' +
    '          </div>');

var templateSms = $('<div class="authorization page__authorization-in">\n' +
    '            <div class="authorization__in">\n' +
    '              <h1 class="authorization__title-sms aut-title">Введите код из СМС</h1>\n' +
    '              <p class="authorization__text js-counter-sms">Повторная отправка СМС доступна через <span>294</span>      сек.</p><a class="form__link text-left d-none js-init-sms-counter" href="#">Отправить СМС повторно</a>\n' +
    '              <form class="form js-aut" action="" novalidate="novalidate" data-form="sms" data-form-type="error">\n' +
    '                <div class="form__code-wrap">\n' +
    '                  <p class="form__code-item">\n' +
    '                    <input class="code-item js-mask-code" type="text" maxlength="2" name="code-1" data-required="data-required" required="required" inputmode="text">\n' +
    '                  </p>\n' +
    '                  <p class="form__code-item">\n' +
    '                    <input class="code-item js-mask-code" type="text" maxlength="2" name="code-2" data-required="data-required" required="required" inputmode="text">\n' +
    '                  </p>\n' +
    '                  <p class="form__code-item">\n' +
    '                    <input class="code-item js-mask-code" type="text" maxlength="2" name="code-3" data-required="data-required" required="required" inputmode="text">\n' +
    '                  </p>\n' +
    '                  <p class="form__code-item">\n' +
    '                    <input class="code-item js-mask-code" type="text" maxlength="2" name="code-4" data-required="data-required" required="required" inputmode="text">\n' +
    '                  </p>\n' +
    '                </div>\n' +
    '                <button class="form__button button" type="submit">Подтвердить</button>\n' +
    '              </form>\n' +
    '            </div>\n' +
    '            <div class="authorization__error authorization-error js-error-block d-none">Введите четырехзначный код</div>\n' +
    '          </div>')

var templateErrorSms = $('<div class="authorization page__authorization-in">\n' +
    '            <div class="authorization__in">\n' +
    '              <h1 class="authorization__title-sms aut-title">Введите код из СМС</h1>\n' +
    '              <p class="authorization__text d-none js-counter-sms">Повторная отправка СМС доступна через <span>295</span> сек.</p>' +
    '                   <a class="form__link text-left js-init-sms-counter" href="#">Отправить СМС повторно</a>\n' +
    '              <form class="form js-aut" action="" novalidate="novalidate" data-form="sms">\n' +
    '                <div class="form__code-wrap">\n' +
    '                  <p class="form__code-item error">\n' +
    '                    <input class="code-item js-mask-code" type="text" maxlength="2" name="code-1" data-required="data-required" required="required" value="0" inputmode="text">\n' +
    '                  </p>\n' +
    '                  <p class="form__code-item error">\n' +
    '                    <input class="code-item js-mask-code" type="text" maxlength="2" name="code-2" data-required="data-required" required="required" value="0" inputmode="text">\n' +
    '                  </p>\n' +
    '                  <p class="form__code-item error">\n' +
    '                    <input class="code-item js-mask-code" type="text" maxlength="2" name="code-3" data-required="data-required" required="required" value="0" inputmode="text">\n' +
    '                  </p>\n' +
    '                  <p class="form__code-item error">\n' +
    '                    <input class="code-item js-mask-code" type="text" maxlength="2" name="code-4" data-required="data-required" required="required" value="0" inputmode="text">\n' +
    '                  </p>\n' +
    '                </div>\n' +
    '                <button class="form__button button" type="submit">Подтвердить</button>\n' +
    '              </form>\n' +
    '            </div>\n' +
    '            <div class="authorization__error authorization-error js-error-block">Введен неверный четырехзначный код</div>\n' +
    '          </div>')

var mockDataPersonsList = $('<div class="js-page-content">\n' +
    '            <div class="page__filter">\n' +
    '              <form class="filter persons-list--registry" id="filter">\n' +
    '                <div class="filter__item input-cell">\n' +
    '                  <p class="filter-input">\n' +
    '                    <input class="filter-input__search js-evt-search" type="text" placeholder=""><i class="filter-input__icon-search"></i>\n' +
    '                  </p>\n' +
    '                </div>\n' +
    '                <div class="filter__item name">\n' +
    '                  <p class="filter-input">\n' +
    '                    <input class="filter-input__search js-evt-search" type="text" placeholder="Пример текста"><i class="filter-input__icon-search"></i>\n' +
    '                  </p>\n' +
    '                </div>\n' +
    '                <div class="filter__item city">\n' +
    '                  <p class="filter-input">\n' +
    '                    <input class="filter-input__search js-evt-search" type="text"><i class="filter-input__icon-search"></i>\n' +
    '                  </p>\n' +
    '                </div>\n' +
    '                <div class="filter__item role">\n' +
    '                  <div class="filter-select">\n' +
    '                    <p class="filter-select__in js-select">Все<i class="filter-select__icon-arrow"></i></p>\n' +
    '                    <div class="filter-select__list js-select-list">\n' +
    '                      <ul class="select-list">\n' +
    '                        <li class="select-list__item">\n' +
    '                          <input class="select-list__input js-filter-checkbox" type="checkbox" id="role-0">\n' +
    '                          <label class="select-list__label" for="role-0">Да</label>\n' +
    '                        </li>\n' +
    '                        <li class="select-list__item">\n' +
    '                          <input class="select-list__input js-filter-checkbox" type="checkbox" id="role-1">\n' +
    '                          <label class="select-list__label" for="role-1">Нет</label>\n' +
    '                        </li>\n' +
    '                      </ul>\n' +
    '                    </div>\n' +
    '                  </div>\n' +
    '                </div>\n' +
    '              </form>\n' +
    '            </div>\n' +
    '            <div class="page__rug">\n' +
    '              <table class="persons-list persons-list--registry" cellpadding="0" cellspacing="0">\n' +
    '                <tbody><tr class="persons-list__tr js-checked">\n' +
    '                  <td class="persons-list__cell input-cell">\n' +
    '                    <input class="persons-list__input" type="checkbox" id="0">\n' +
    '                    <label class="persons-list__checkbox" id="0"></label>\n' +
    '                  </td>\n' +
    '                  <td class="name persons-list__cell"><span class="persons-list__cell-in">Иванова Виктория Евгеньевна</span>\n' +
    '                    <button class="persons-list__mark">Отключить отметку</button>\n' +
    '                  </td>\n' +
    '                  <td class="city persons-list__cell">Новосибирск\n' +
    '                  </td>\n' +
    '                  <td class="included persons-list__cell">Да\n' +
    '                  </td>\n' +
    '                  <td class="persons-list__cell button-cell">\n' +
    '                    <button class="button persons-list__button button--min">Создать консилиум</button>\n' +
    '                  </td>\n' +
    '                </tr>\n' +
    '                <tr class="persons-list__tr js-checked">\n' +
    '                  <td class="persons-list__cell input-cell">\n' +
    '                    <input class="persons-list__input" type="checkbox" id="1">\n' +
    '                    <label class="persons-list__checkbox" id="1"></label>\n' +
    '                  </td>\n' +
    '                  <td class="name persons-list__cell"><span class="persons-list__cell-in">Иванова Виктория Евгеньевна</span>\n' +
    '                    <button class="persons-list__mark">Отключить отметку</button>\n' +
    '                  </td>\n' +
    '                  <td class="city persons-list__cell">Новосибирск\n' +
    '                  </td>\n' +
    '                  <td class="included persons-list__cell">Да\n' +
    '                  </td>\n' +
    '                  <td class="persons-list__cell button-cell">\n' +
    '                    <button class="button persons-list__button button--min">Создать консилиум</button>\n' +
    '                  </td>\n' +
    '                </tr>\n' +
    '                <tr class="persons-list__tr js-checked">\n' +
    '                  <td class="persons-list__cell input-cell">\n' +
    '                    <input class="persons-list__input" type="checkbox" id="2">\n' +
    '                    <label class="persons-list__checkbox" id="2"></label>\n' +
    '                  </td>\n' +
    '                  <td class="name persons-list__cell"><span class="persons-list__cell-in">Иванова Виктория Евгеньевна</span>\n' +
    '                    <button class="persons-list__mark">Отключить отметку</button>\n' +
    '                  </td>\n' +
    '                  <td class="city persons-list__cell">Новосибирск\n' +
    '                  </td>\n' +
    '                  <td class="included persons-list__cell">Нет\n' +
    '                  </td>\n' +
    '                  <td class="persons-list__cell button-cell">\n' +
    '                    <button class="button persons-list__button button--min">Создать консилиум</button>\n' +
    '                  </td>\n' +
    '                </tr>\n' +
    '                <tr class="persons-list__tr js-checked mark">\n' +
    '                  <td class="persons-list__cell input-cell">\n' +
    '                    <input class="persons-list__input" type="checkbox" id="3">\n' +
    '                    <label class="persons-list__checkbox" id="3"></label>\n' +
    '                  </td>\n' +
    '                  <td class="name persons-list__cell"><span class="persons-list__cell-in">Иванова Виктория Евгеньевна</span>\n' +
    '                    <button class="persons-list__mark">Отключить отметку</button>\n' +
    '                  </td>\n' +
    '                  <td class="city persons-list__cell">Новосибирск\n' +
    '                  </td>\n' +
    '                  <td class="included persons-list__cell">Нет\n' +
    '                  </td>\n' +
    '                  <td class="persons-list__cell button-cell">\n' +
    '                    <button class="button persons-list__button button--min">Создать консилиум</button>\n' +
    '                  </td>\n' +
    '                </tr>\n' +
    '                \n' +
    '                \n' +
    '                \n' +
    '                \n' +
    '                \n' +
    '              </tbody></table>\n' +
    '              <div class="pagination-widget">\n' +
    '                <ul class="pagination pagination-widget__pagination">\n' +
    '                  <li class="pagination__item"><a class="pagination__link prev js-pagination" href="#" data-num-page="prev"></a></li>\n' +
    '                  <li class="pagination__item"><a class="pagination__link js-pagination" href="#" data-num-page="1">1</a></li>\n' +
    '                  <li class="pagination__item"><a class="pagination__link js-pagination" href="#" data-num-page="2">2</a></li>\n' +
    '                  <li class="pagination__item active"><a class="pagination__link js-pagination" href="#" data-num-page="3">3</a></li>\n' +
    '                  <li class="pagination__item"><a class="pagination__link js-pagination" href="#" data-num-page="4">4</a></li>\n' +
    '                  <li class="pagination__item"><a class="pagination__link js-pagination" href="#" data-num-page="5">5</a></li>\n' +
    '                  <li class="pagination__item"><a class="pagination__link js-pagination" href="#" data-num-page="6">6</a></li>\n' +
    '                  <li class="pagination__item"><a class="pagination__link js-pagination" href="#" data-num-page="7">7</a></li>\n' +
    '                  <li class="pagination__item"><a class="pagination__link js-pagination" href="#" data-num-page="8">8</a></li>\n' +
    '                  <li class="pagination__item"><a class="pagination__link next js-pagination" href="#" data-num-page="next"></a></li>\n' +
    '                </ul>\n' +
    '                <p class="pagination-widget__info">Показаны записи 10-20 из 196</p>\n' +
    '              </div>\n' +
    '            </div>\n' +
    '          </div>')



var docsList = $('<li class="docs-list__item">\n' +
    '                        <input class="docs-list__input js-check-docs" type="checkbox" id="doc-0">\n' +
    '                        <label class="docs-list__label" for="doc-0">\n' +
    '                          <div class="docs-list__wrapper">\n' +
    '                            <p class="docs-list__title">Какой-то новый документ</p>\n' +
    '                            <p class="docs-list__subtitle">PDF (8.6 мб), 16.10.2020, 16:45</p>\n' +
    '                          </div>\n' +
    '                        </label>\n' +
    '                        <div class="docs-list__button"><a class="docs-list__open open-button" href="#">скачать документ</a></div>\n' +
    '                      </li>' +
    '<li class="docs-list__item">\n' +
    '                        <input class="docs-list__input js-check-docs" type="checkbox" id="doc-0">\n' +
    '                        <label class="docs-list__label" for="doc-0">\n' +
    '                          <div class="docs-list__wrapper">\n' +
    '                            <p class="docs-list__title">Какой-то другой новый документ</p>\n' +
    '                            <p class="docs-list__subtitle">PDF (12.6 мб), 16.10.2020, 16:45</p>\n' +
    '                          </div>\n' +
    '                        </label>\n' +
    '                        <div class="docs-list__button"><a class="docs-list__open open-button" href="#">скачать документ</a></div>\n' +
    '                      </li>')

function CounterSms() {
    this.counter = $('.js-counter-sms');
    this.defaultTimerValue = 10;
    this.timer = this.defaultTimerValue;
    this.link = $('.js-init-sms-counter');
    this.errorBlock = $('.js-error-block');

    if(!this.counter.length) return;


    this.init();
}

CounterSms.prototype.initCounter = function () {
    var _this = this;
    function cb() {
        if(_this.timer < 1) {
            clearInterval(counterId);
            _this.counter.addClass('d-none');
            _this.link.removeClass('d-none');
        }
    }

    var counterId = setInterval(function () {
        _this.timer = _this.timer - 1;
        _this.counter.find('span').text(_this.timer);

        cb();
    }, 1000);

}
//очищаю ипуты/ прячу ошибки
CounterSms.prototype.returnDefauilState = function () {
    this.timer = this.defaultTimerValue;
    this.counter.find('span').text(this.defaultTimerValue);
    this.counter.removeClass('d-none');
    this.errorBlock.addClass('d-none');
    $('.js-mask-code').each(function () {
        $(this).val('');
        $(this).parent().removeClass('error');
    })


    this.counter.removeClass('d-none');
}

CounterSms.prototype.init = function () {

    if(!this.counter.hasClass('d-none')) {
        this.initCounter();
    }
    var _this = this;
    this.link.on('click', function () {
        $(this).addClass('d-none');
        _this.returnDefauilState();
        _this.initCounter();
        $('.js-mask-code').eq(0).focus();
    })

}

$(document).ready(function () {
    var counterSms = new CounterSms();
})





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

function DocumentListController() {
    this.checkAllClass = '.js-check-all-docs';
    this.checkDocClass = '.js-check-docs';
    this.checkedProp = 'checked';
    this.modalRemove = new PageInfoController('modal-footer');
    this.showRemoveModal = $.proxy(this.showRemoveModal, this);
    this.init();
}

DocumentListController.prototype.showRemoveModal = function () {
    var countCheckedDocs = $('.js-check-docs:checked').length;

    if(countCheckedDocs > 0) {
        this.modalRemove.changeText('Выбрано документов: ' + countCheckedDocs);
        this.modalRemove.showModal();
    } else {
        $(this.checkAllClass).prop(this.checkedProp, false);
        this.modalRemove.hide();
    }
}

DocumentListController.prototype.resetCheckedDoc = function () {
    $(this.checkAllClass).prop(this.checkedProp, false);
    $(this.checkDocClass).prop(this.checkedProp, false);
    this.modalRemove.hide();
}

DocumentListController.prototype.init = function () {
    var _this = this;
    $('body').on('change', this.checkAllClass, function () {
        var isChecked = $(this).prop(_this.checkedProp);
        $('.js-check-docs').prop(_this.checkedProp, isChecked);
        _this.showRemoveModal();
    })

    $('body').on('change', '.js-check-docs', this.showRemoveModal);

}

$(document).ready(function () {
    var documentListController = new DocumentListController();
})



function PageInfoController(attr) {
    this.modal = $('[data-modal-name="'+ attr + '"]');
    this.showClass = 'show';
    this.modal.find('.page-info__close').on('click', $.proxy(this.hide, this));
}

PageInfoController.prototype.changeText = function(text) {
    this.modal.find('.page-info__text').text(text);
}

PageInfoController.prototype.hide = function () {
    this.modal.removeClass(this.showClass);
}

PageInfoController.prototype.showModal = function () {
    this.modal.addClass(this.showClass);
}

function DownloadFiles() {
    this.modal = $('[data-modal-name="add-doc"]');
    this.form = $('.js-download-file');
    this.input = this.modal.find('.js-download-file #file');
    this.bites = 1000000;
    this.filesList = [];
    this.modalTitle = this.modal.find('.modal__title');
    this.modalText = this.modal.find('.modal__text');
    this.pageInfo = new PageInfoController('success-download');


    this.actionType = {
        LOAD: 'load',
        ABORT: 'abort',
        CANCEL: 'cancel',
    };

    this.state = {
        INPUT: 'input',
        SUBMIT: 'submit',
        CANCEL: 'cancel',
        DEFAULT: 'default',
    }
    this.init();
}

DownloadFiles.prototype.getTemplateFile = function () {
    return $('<li class="files-list__item">\n' +
        '                    <div class="files-list__wrap">\n' +
        '                      <p class="files-list__name"></p>\n' +
        '                      <p class="files-list__size"></p>\n' +
        '                    </div>\n' +
        '                    <button class="files-list__remove js-remove" type="button"></button>\n' +
        '                  </li>');
}

DownloadFiles.prototype.addFile = function (files) {
    console.log(files)
    var _this = this;
    var list = this.modal.find('.files-list');

    for(var i = 0; i < files.length; i++) {
        var file = _this.getTemplateFile();
        file.find('.files-list__name').text(files[i].name);
        var size = files[i].size / _this.bites;
        file.find('.files-list__size').text(size.toFixed(2) + 'Mb');
        list.append(file);
    }
}

//переход между шагами загрузки файлов
DownloadFiles.prototype.replaceWindow = function (state) {

    switch (state) {
        case this.state.SUBMIT:
            this.modal.removeClass('initial');
            this.modal.addClass('submit');
            this.modal.find('.modal__errors').remove();
            this.modal.find('.modal__text').removeClass('visually-hidden');

            break;
        case this.state.LOAD:
            this.modal.addClass('load');
            this.modal.removeClass('submit');
            this.modalTitle.text('Идет загрузка');
            this.modalText.text('Это может занять несколько минут');
            this.modal.find('.input-file__input').val('');
            break;
        case this.state.CANCEL:
            this.modal.addClass('cancel');
            this.modal.removeClass('load');
            this.modalTitle.text('Отмена загрузки');
            this.modalText.text('Загрузка файлов отменена');
            break;
        case this.state.DEFAULT:
            this.modal.find('.input-file__input').val('');
            this.modal.find('.modal__errors').remove();
            this.modal.removeClass('submit cancel load');
            this.modal.find('.modal__text').removeClass('visually-hidden');
            this.modal.addClass('initial');
            this.modal.find('.files-list__item').remove();
            this.modalTitle.text('Загрузка документа');
            this.modalText.text('Размер файла не должен превышать 20 мб.');
            break;
    }
}


DownloadFiles.prototype.clearFiles = function () {
    this.replaceWindow(this.state.DEFAULT);
    this.refreshProgress();
}

DownloadFiles.prototype.refreshProgress = function () {
    if(this.timer) {
        clearInterval(this.timer);

    }
    $('.js-progress > p').css({
        'width': 0,
    });
}

DownloadFiles.prototype.showSuccessModal = function () {
    $(['data-modal-name="success-download"'])
}

//успешная загрузка файлов
DownloadFiles.prototype.onSuccessDownload = function (data) {
    this.refreshProgress();
    //удалить при интеграции

    if(data.status == 'OK') {
        this.refreshDocList(data.template);
        this.ModalClass.closeModal();
        this.showSuccessModal();
        this.pageInfo.changeText('Документы успешно загружены');
        this.pageInfo.showModal();
    } else if(data.status == 'ERROR') {
        this.replaceWindow(this.state.DEFAULT);
        var template = $('<p class="modal__error"></p>');
        var templateWrapper = $('<div class="modal__errors"></div>');
        this.modal.find('.modal__title').after(templateWrapper);
        this.modal.find('.modal__text').addClass('visually-hidden');

        data.errors.forEach(function (item) {
            var error = template.clone().text(item);
            templateWrapper.prepend(error);
        })
    }

}

DownloadFiles.prototype.refreshDocList = function (list) {
    $('.ajax-docs-list').prepend(list);
}

//инициализация прогресс бара
DownloadFiles.prototype.initProgress = function () {
    var _this = this;

    var progress = 1;
    var step = 1;
    var speed = 500;
    this.timer = setInterval(function () {
        $('.js-progress > p').css({
            'transition-duration': speed + 'ms',
            'width': (progress += step) + '%'
        });

        if(progress > 99) {
            clearInterval(_this.timer);
            _this.timer = false;
        }
    }, speed)

}
//отмена загрузки файла
DownloadFiles.prototype.cancelDownload = function () {
    var _this = this;
    $('body').on('click', '.js-cancel-files', function () {

        _this.replaceWindow(_this.state.CANCEL);

        onSendAjax({
            type: 'POST',
            url: 'action.php',
            dataType: 'json',
            data: {
                action: _this.actionType.ABORT,
            },
            onSuccess: function () {
                _this.refreshDocList();
            },
            onError: function () {
                alert('Ошибка соединения, попробуйте позже!')
            },
        })
    })
}

//отправка документов
DownloadFiles.prototype.submit = function () {
    var _this = this;
    this.form.on('submit', function (evt) {
        evt.preventDefault();

        _this.replaceWindow(_this.state.LOAD)
        _this.initProgress();

        onSendAjax({
            type: 'POST',
            url: 'action.php',
            dataType: 'json',
            data: {
                action: _this.actionType.LOAD,
            },
            onSuccess: function (data) {

                //удалить при интеграции
                var data = {
                    status: 'OK',
                    template: docsList,
                    errors: [
                        '[имя файла] - размер файла не должен превышать 20мб',
                        '[имя файла] - размер файла не должен превышать 20мб'
                    ]
                }
                _this.onSuccessDownload(data);
            },
            onError: function () {
                alert('Ошибка соединения, попробуйте позже!')
            },
        })
    })
}

//удалить файл
DownloadFiles.prototype.removeFiles = function () {
    var _this = this;
    $('body').on('click', '.js-remove-docs', function (evt) {
        evt.preventDefault();


        var modal = $('[data-modal-name="check-remove"]');
        var modalClass = new Modal({modal, confirm: $.proxy(confirm, this)});
        modalClass.render();

        function confirm() {
            preloader.show();
            var checkedIdDocs = [];
            modalClass.closeModal();
            $('.js-check-docs:checked').each(function () {
                checkedIdDocs.push($(this).attr('id'));
            })

            onSendAjax({
                type: 'POST',
                url: 'action.php',
                dataType: 'json',
                data: {
                    action: _this.actionType.CANCEL,
                },
                onSuccess: function (data) {
                    preloader.hide();

                    //удалить при интеграции
                    var data = {
                        status: 'OK',
                        textError: 'какая-то ошибка с бэка'
                    }

                    if(data.status == 'OK') {
                        checkedIdDocs.forEach(function (item) {
                            var node = $('[id="'+ item + '"]');
                            documentListController.resetCheckedDoc();
                            node.parent().remove();
                            _this.pageInfo.changeText('Документы успешно удалены');
                            _this.pageInfo.showModal();
                        })
                    } else {
                        alert(data.textError);
                        documentListController.resetCheckedDoc();
                    }
                },
                onError: function () {
                    preloader.hide();
                    alert('Ошибка соединения, попробуйте позже!');
                },
            })
        }

    })
}

// удаляю загружаемый файл из списка
DownloadFiles.prototype.removeDownloadableFiles = function () {
    var _this = this;
    $('body').on('click', '.js-remove', function (evt) {
        evt.preventDefault();
        var file = $(this).closest('.files-list__item')
        var index = file.index();
        _this.filesList.splice(index, 1);
        file.remove();

        //при удалении последнего файла возвращаем кнопку выбора файла
        if(_this.filesList.length == 0) {
            _this.replaceWindow(_this.state.DEFAULT);
        }
    })

}

DownloadFiles.prototype.init = function () {
    var _this = this;

    this.input.on('change', function() {
        var _that = this;

        Object.keys(this.files).forEach(function (item) {
            _this.filesList.push(_that.files[item]);
        })

        _this.addFile(this.files);
        _this.replaceWindow(_this.state.SUBMIT);
    });

    this.removeDownloadableFiles();
    this.removeFiles();
    this.submit();
    this.cancelDownload();

    //Открытие модалки
    $('body').on('click', '.js-show-doc-modal', function () {
        _this.ModalClass = new Modal({modal: _this.modal, close: $.proxy(_this.clearFiles, _this)});
        _this.ModalClass.render();
    })
}

$(document).ready(function () {
    var downloadFiles = new DownloadFiles();
})

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

$(document).ready(function () {
    var selectBlock = new SelectBlock();
    AjaxFilter();
})




function onSubmitForm(params) {
    $('body').on('submit', params.class, function (evt) {
        evt.preventDefault();
        var form = $(this);
        var inputs = form.find('[data-required]');
        var isFormValid = true;
        var errorBlock = $('.js-error-block');


        if(inputs.length) {
            inputs.each(function () {
                var val = $(this).val().trim();
                if(val == '') {
                    $(this).parent().parent().addClass('error');
                    isFormValid = isFormValid && false;
                } else {
                    $(this).parent().parent().removeClass('error');
                }
            })
        }

        if(!isFormValid) {
            errorBlock.removeClass('d-none');
        } else {
            errorBlock.addClass('d-none');
            $(this).attr('disabled', true);
            preloader.show();

            var paramsAjax = {
                type: 'POST',
                url: 'action.php',
                dataType: 'json',
                data: form.serializeArray(),
                onSuccess: function (data) {
                    preloader.hide();
                    params.onSuccess();
                },
                onError: function () {
                    params.onError();
                },
            }

            onSendAjax(paramsAjax);
        }
    })
}

onSubmitForm({
    class: '.js-aut',
    onError: function () {
        return false;
    },

    onSuccess: function (data) {
        var type = $('.js-aut').attr('data-form');
        var typeError = $('.js-aut').attr('data-form-type');

        function refreshSmsBlock() {
            //запускаю счетчик и навешиваю маску на блок с паролем смс
            $('.js-mask-code').eq(0).focus();
            var counterSms = new CounterSms();
            codeMask();
        }

        //это безобразие при интеграции удалить
        var data = {};
        if(type == 'login' && typeError == 'error'){
            data.template = templateLogin.clone();
            data.status = 'LOGIN_ERROR';
        } else if(type == 'login' && typeError == 'success') {
            data.status = 'LOGIN_SUCCESS';
            data.template = templateSms.clone();
        } else if(type == 'sms' && typeError == 'error') {
            data.status = 'SMS_ERROR';
            data.template = templateErrorSms.clone();
        }
        //

        $('.page__authorization-in').replaceWith(data.template);
        switch (data.status) {
            case 'LOGIN_ERROR' :
                break;
            case 'LOGIN_ERROR' :
                break;
            case 'SMS_ERROR' :
                refreshSmsBlock();
                break;
            case 'LOGIN_SUCCESS':
                refreshSmsBlock()
                break;
        }
    }
})



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

$(document).ready(function () {
    var controllerInput = new ControllerInput();
    codeMask();
})




function DropdownInput(container) {
    this.container = container;
    this.dropdownList = container.find('.input-select__list');
    this.selectedBlock = container.find('.input-select__text');
    this.animationSpeed = 150;
    this.input = container.find('.js-input-select');
    this.radio = container.find('.js-select-radio');
    this.advanced = container.find('.js-advanced-select');
    this.other = container.find('.js-other');
    this.checkbox = container.find('.js-select-checkbox');
    this.fakeInput = container.find('.js-fake-input');
    this.onBodyClick = $.proxy(this.onBodyClick, this);
    this.showClass = 'show';
    this.checkedClass = 'checked';
    this.errorClass = 'error';
    this.maxHeight = 108;
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

DropdownInput.prototype.toogleInput = function () {
    var _this = this;
    var input = _this.container.find('[data-show]');

    if(!input.length) return;


    //если надо добавить доступность/скрыть у блока
    var attr = input.attr('data-show').split(', ');
    if(input.is(':checked')) {
        attr.forEach(function (item) {
            var input = $('[name="'+ item + '"]');
            input.attr('disabled', false);

            input.closest('.input').removeClass('disabled');
        })
        $('[name="'+ attr[0] + '"]').focus();
    } else {
        attr.forEach(function (item) {
            var input = $('[name="'+ item + '"]');
            input.attr('disabled', true);
            input.val('');
            input.closest('.input').addClass('disabled');
            input.closest('.input').removeClass('focused');
        })
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
        _this.toogleInput();
    })


    this.advanced.on('click', function () {
        var maskType = $(this).attr('data-change-mask');
        var name = $(this).attr('data-change-name');
        var definitions,
            mask,
            test;

        switch (maskType) {
            case 'number':
                mask = "*{15}";
                definitions = {
                    '*' : {
                        validator: "[0-8/.,]",
                    }
                }
                break;
            case 'float':
                test = 'number';
                mask = "0.0*";
                definitions = {
                    '*' : {
                        validator: "[2-5]",
                    }
                }

                break;
        }
        console.log($('[name="'+ name + '"]'))
        $('[name="'+ name + '"]').inputmask(test, {
            mask: mask,
            placeholder: "",
            showMaskOnHover: false,
            recursive: true,
            definitions: definitions,
        });

    })

    this.checkbox.on('click', function () {
        var selectedValue = false;
        _this.container.find('.js-select-checkbox:checked').each(function () {
            var value = $(this).val();
            selectedValue = selectedValue ?  selectedValue + ', ' + value : value;
        })

        _this.toogleInput();

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




$(document).ready(function () {
    $('.input-select').each(function () {
        var dropdownInput = new DropdownInput($(this));
    })
})




function refreshChanges() {
    $('body').on('click', '.js-refresh-changes',function (evt) {
        evt.preventDefault();

        var stingLogItem = $(this).closest('.logs-list__tr');
        var id = stingLogItem.attr('id');
        var action = $(this).data('action');
        preloader.show();

        onSendAjax({
            type: 'POST',
            url: 'action.php',
            dataType: 'json',
            data: {
                action,
                id
            },
            onSuccess: function (data) {
                //удалить при интеграции
                var data = {
                    status: 'OK',
                    errorText: 'Какая-то ошибка которая приходит с бэка'
                }

                var pageInfo = new PageInfoController('success-confirmed');
                preloader.hide();

                if(data.status == 'OK') {

                    var textSuccess = action == 'confirm' ? 'Изменения успешно приняты' : 'Изменения успешно отменены';
                    stingLogItem.remove();
                    pageInfo.changeText(textSuccess);
                    pageInfo.showModal();

                } else {
                    pageInfo.changeText(data.errorText ? data.errorText : 'Ошибка обновления данных, обратитесь к администратору!');
                    pageInfo.showModal();

                }
            },
            onError: function () {
                alert('Ошибка соединения, попробуйте позже!')
            },
        })
    })
}

$(document).ready(function () {
    refreshChanges();
})





function Modal(params) {
    this.modal = params.modal;
    this.closeBtn = this.modal.find('.js-modal-close');
    this.confirmBtn = this.modal.find('.js-confirm');
    this.showClass = 'show';
    this.overlay = $('.overlay');
    this.closeModal = $.proxy(this.closeModal, this);
    this.confirm = params.confirm ? params.confirm : function () {return true};
    this.close = params.close ? params.close : function () {return true};
}

Modal.prototype.closeModal = function () {
    this.modal.removeClass(this.showClass);
    this.overlay.removeClass(this.showClass);
    this.closeBtn.off('click', this.closeModal);
    this.overlay.off('click', this.closeModal);
    this.confirmBtn.off('click', this.confirm);
    this.parent.append(this.modal);
    this.close();
}

Modal.prototype.openModal = function () {
    this.modal.addClass(this.showClass);
    this.overlay.addClass(this.showClass);

    this.closeBtn.on('click', this.closeModal);
    this.confirmBtn.on('click', this.confirm);
    this.overlay.on('click', this.closeModal);
}

Modal.prototype.render = function () {
    this.parent = this.modal.parent();
    //чтобы модалка всегда была в подвале при рендере
    $('footer').append(this.modal);
    this.openModal();
}
$(document).ready(function () {
    $('body').on('click', '[data-modal]', function () {
        var modalName = $(this).attr('data-modal');
        var modal = $('[data-modal-name="'+ modalName + '"]');
        var modalClass = new Modal({modal});
        modalClass.render();
    })
})



function pagination() {
    $('body').on('click', '.js-pagination', function (evt) {
        evt.preventDefault();
        preloader.show();

        var data = {page: $(this).attr('data-num-page')}

        function onSuccess(data) {
            if(data.status == 'OK') {
                $('.js-page-content').replaceWith(data.template);

            } else {
                alert('Ошибка связи с сервером');
            }
            preloader.hide();
        }

        onSendAjax({
            type: 'POST',
            url: 'action.php',
            dataType: 'json',
            data: data,
            onSuccess: function (data) {
                //удалить при интеграции
                var data = {
                    status: 'OK',
                    template: $('#filter').hasClass('persons-list--registry') ? mockDataPersonsList.clone() : mockUserList.clone(),
                }
                onSuccess(data);
            },

            onError: function () {
                alert('Ошибка связи с сервером');
                preloader.hide();
            },
        })
    })
}
$(document).ready(function () {
    pagination();
})



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
$(document).ready(function () {
    var preloader = new Preloader();
})


//поставить галочку в реестре пациентов/отчетах, консилиумах

$(document).ready(function () {

    $('body').on('click', '.js-checked', function (evt) {
        var modal = new PageInfoController('modal-footer');
        var input = $(this).find('input');
        if(!input.length) return;
        if(evt.target.nodeName == 'BUTTON' || evt.target.nodeName == 'A') {
            return;
        }
        input.prop('checked', !input.prop("checked"))

        var countCheckedDocs = $('.js-persons-input:checked').length;

        if(countCheckedDocs > 0) {
            modal.changeText('Выбрано документов: ' + countCheckedDocs);
            modal.showModal();
        } else {
            modal.hide();
        }
    })


    //заблокировать разблокировать пользователя/пациента
    $('body').on('click', '.js-locked', function (evt) {
        evt.preventDefault();
        var isLocked = $(this).attr('data-locked');

        var modal = $('[data-modal-name="lockdown"]');
        var modalClass = new Modal({modal, confirm: $.proxy(confirm, this)});
        var textModal = isLocked == 'N' ? 'Вы уверены, что хотите заблокировать пользователя?' : 'Вы уверены, что хотите разблокировать пользователя?';
        modal.find('.modal__text').text(textModal);
        modalClass.render();

        function confirm() {
            modalClass.closeModal();

            var id = $(this).closest('.persons-list__tr').attr('data-id');
            $(this).attr('disabled', true);
            var _this = $(this);

            onSendAjax({
                type: 'POST',
                url: 'action.php',
                dataType: 'json',
                data: {id: id, isLocked: isLocked},
                onSuccess: function (data) {

                    //удалить при интеграции
                    var data = {
                        status: 'OK',
                        state: _this.attr('data-locked') == 'N' ? 'Y' : 'N',
                    };

                    // _this.attr('disabled', false);
                    if(data.status == 'OK') {
                        // _this.attr('data-locked', data.state);
                        var modal = $('[data-modal-name="modal-success"]');
                        var modalClass = new Modal({modal});
                        modalClass.render();
                    } else {
                        alert('Ошибка запроса. Повторите позже');
                    }

                },
                onError: function () {
                    alert('Ошибка запроса. Повторите позже');
                },
            })
        }
    })


})
function tab(target) {
    var activeClass = 'active';
    var disabledClass = 'disabled';
    var selectAttr = 'data-selected';
    var group = $(target).parent().parent();

    if(target.hasClass(activeClass) || target.hasClass(disabledClass) ) return;

    var contentId = target.attr('data-id-content');
    var content = group.find('[data-content="'+ contentId + '"]');

    function show(element) {
        element.addClass(activeClass);
        element.attr(selectAttr, true);
    }

    function hide(element) {
        element.removeClass(activeClass);
        element.attr(selectAttr, false);
    }

    hide($('.nav-tabs__item.' + activeClass));
    hide($('.tab-content__item.' + activeClass));

    show(content);
    show(target);
}
$(document).ready(function () {
    $('body').on('click', '[data-target="tab"]', function () {
        tab($(this));
    });
})


//заблокировать пользователя в детальной карточке
$(document).ready(function () {
    $('body').on('click', '.js-locked-user', function (evt) {
        evt.preventDefault();

        var modal = $('[data-modal-name="lockdown"]');
        var modalClass = new Modal({modal, confirm: $.proxy(confirm, this)});
        modalClass.render();

        function confirm() {
            modalClass.closeModal();
            $(this).attr('disabled', true);
            var id = $(['data-user-id']);
            var _this = $(this);

            onSendAjax({
                type: 'POST',
                url: 'action.php',
                dataType: 'json',
                data: {id: id, action: 'locked'},
                onSuccess: function (data) {

                    //удалить при интеграции
                    var data = {
                        status: 'OK',
                    };
                    //блокируем кнопку для повторных запросов

                    if(data.status == 'OK') {
                        var modalNode = $('[data-modal-name="modal-success"]');
                        var modalSuccess = new Modal({modal: modalNode});
                        modalSuccess.render();


                    } else {
                        alert('Ошибка запроса. Повторите позже');
                    }

                },
                onError: function () {
                    alert('Ошибка запроса. Повторите позже');
                },
            })
        }
    })
})
$(document).ready(function () {
    $('body').on('click', '.js-remove-registr', function () {
        var _this = $(this);
        _this.attr('disabled', true);
        var parent = $('.js-persons-input:checked');
        preloader.show();
        var id = [];
        var modeElem = [];

        parent.each(function () {
            var element = $(this).closest('.persons-list__tr')
            modeElem.push(element);
            var idItem = element.attr('id');
            id.push(idItem)
        });

        onSendAjax({
            type: 'POST',
            url: 'action.php',
            dataType: 'json',
            data: {
                action: 'REMOVE',
                data: id,
            },
            onSuccess: function (data) {
                var  data = {
                    status: "OK"
                }
                //Пряму модалку и делаю доступной кнопку
                var modal = new PageInfoController('modal-footer');
                modal.hide();
                _this.attr('disabled', true);

                if(data.status == 'OK') {
                    preloader.hide();
                    modeElem.forEach(function (item) {
                        $(item).remove();
                    })
                }
            },
            onError: function () {
                alert('Ошибка соединения, попробуйте позже!')
            },
        })

    })

    $('body').on('click', '.js-mark', function (evt) {
        var _this = $(this);
        evt.preventDefault();
        _this.attr('disabled', true);

        var parent = $(this).closest('.persons-list__tr');
        var id = parent.attr('id');

        onSendAjax({
            type: 'POST',
            url: 'action.php',
            dataType: 'json',
            data: {
                id: id,
                action: 'REMOVE_MARK'
            },

            onSuccess: function (data) {
                var data = {
                    state: 'OK'
                }

                if(data.state == 'OK') {
                    _this.attr('disabled', false);
                    parent.removeClass('mark');
                } else {
                    alert('Ошибка, попробуйте позже');
                }
            },

            onError: function () {
                alert('Ошибка связи с сервером');
            },
        })
    })
})



function triggerNav() {
    var exitBlock = $('.page-header__exit');

    function closeCloseBlock(evt) {
        var target = $(evt.target);
        closeTrigger();
    }

    function closeTrigger() {
        exitBlock.animate({opacity: 0}, 150, function () {
            exitBlock.removeClass('open');
            $('body').off('click', closeCloseBlock);
        })
    }

    $('body').on('click', '.js-nav-trigger', function () {

        if(exitBlock.hasClass('open')) {
            closeTrigger();
        } else {
            exitBlock.addClass('open');
            exitBlock.animate({opacity: 1}, 150);
            $('body').on('click', closeCloseBlock);
        }
    })
}

$(document).ready(function () {
    triggerNav();
})


