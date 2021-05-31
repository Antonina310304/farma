//заблокировать пользователя в детальной карточке
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