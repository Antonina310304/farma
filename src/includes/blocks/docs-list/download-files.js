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

var downloadFiles = new DownloadFiles();


function removeElement() {

}