// поставить галочку в реестре пациентов
$('body').on('click', '.js-checked', function (evt) {
    var input = $(this).find('input');
    if(!input.length) return;
    if(evt.target.nodeName == 'BUTTON') {
        return;
    }
    input.prop('checked', !input.prop("checked"))
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