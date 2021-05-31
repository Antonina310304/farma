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

var documentListController = new DocumentListController();
