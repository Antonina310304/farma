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

refreshChanges();
