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


