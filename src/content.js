chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {

    let displayFrame = document.querySelector('._abgw');
    let commentsMargin = document.querySelector('._abgz');
    let comments = document.querySelector('._abg_');

    let rotate = (deg) => {   
        comments.style.display = 'none';
        commentsMargin.style.marginRight = '0px';
        displayFrame.style.rotate = `${deg}deg`;
    }

    if (request.msg == 'rotate90') {
        rotate(90);
        sendResponse({ success: true });
    }

    if (request.msg == 'rotate270') {
        rotate(270);
        sendResponse({ success: true });
    }

    if (request.msg == 'reset') {
        comments.style.display = 'block';
        commentsMargin.style.marginRight = '456px';
        displayFrame.style.rotate = '0deg';
    }

});

