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


$('body').on('click', '[data-modal]', function () {
    var modalName = $(this).attr('data-modal');
    var modal = $('[data-modal-name="'+ modalName + '"]');
    var modalClass = new Modal({modal});
    modalClass.render();
})