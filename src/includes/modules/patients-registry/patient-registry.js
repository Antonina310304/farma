
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
