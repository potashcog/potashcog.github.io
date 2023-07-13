(function($) {
    let modalDiv = buildModalFromScratch();
    $('#gallery img').on('click', (event) => {
        $(modalDiv).find('.modal-header').first().html('<h2>' + event.target.alt + '</h2>');

        let img = document.createElement('img');
        img.src = event.target.src;
        img.alt = event.target.alt;

        $(modalDiv).find('.modal-body').first().html(img);
        $(modalDiv).fadeIn();
    });

    $('.modal-btn').keypress((event) => {
        if (event.keyCode === 13) {
            $(".modal-btn").click();
        }
    });

    $('.modal-btn').on('click', () => {
        $('#gallery-modal-div').fadeOut();
    });
})(jQuery);

function buildModalFromScratch() {
    let modalDiv = document.createElement('div');
    modalDiv.id = 'gallery-modal-div';
    modalDiv.setAttribute('hidden', '');
    document.body.appendChild(modalDiv);

    let modalInnerWrapper = document.createElement('div');
    modalInnerWrapper.id = 'modal-inner-wrapper';
    modalDiv.appendChild(modalInnerWrapper);

    let modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    let modalBody= document.createElement('div');
    modalBody.classList.add('modal-body');
    let modalFooter= document.createElement('div');
    modalFooter.classList.add('modal-footer');

    modalDismissBtn = document.createElement('button');
    modalDismissBtn.textContent = 'Close';
    modalDismissBtn.classList.add('modal-btn', 'btn', 'float-right');

    modalFooter.appendChild(modalDismissBtn);
    modalInnerWrapper.append(modalHeader, modalBody, modalFooter);

    return modalDiv;
}