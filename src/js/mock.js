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
