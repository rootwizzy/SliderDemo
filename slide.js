var left       = document.getElementById("left"),
    leftBlurb  = document.getElementById("blurb-left"),
    leftClose  = document.getElementById("close-left"),
    right      = document.getElementById("right"),
    rightBlurb = document.getElementById("blurb-right"),
    rightClose = document.getElementById("close-right");

const setClass =  (action, klass, elements) => {
    for (element of elements) {
        element.classList[action](klass);
    }
}

const transitionOut = (event) => {
    if (!event.target.classList.contains("hover")) {
        event.target.style.zIndex = null;
    }
}

const leftEnter = (event) => {
    setClass('add', 'hover', [left, leftBlurb]);

    left.style.zIndex = "2";
    right.style.zIndex = null;
}

const rightEnter = (event) => {
    setClass('add', 'hover', [right, rightBlurb]);

    right.style.zIndex = "2";
    left.style.zIndex = null;
}

const rightLeave = (event) => {
    right.addEventListener("transitionend", transitionOut, false);
    setClass('remove', 'hover', [right, rightBlurb]);
}

const leftLeave = (event) => {
    left.addEventListener("transitionend", transitionOut, false);
    setClass('remove', 'hover', [left, leftBlurb]);
}

const leftClick = (event) => {
    setClass('add', 'active', [left, leftBlurb, leftClose]);
}

const rightClick = (event) => {
    setClass('add', 'active', [right, rightBlurb, rightClose]);
}

const leftCloseClick = (event) => {
    setClass('remove', 'active', [left, leftBlurb, leftClose]);
}

const rightCloseClick = (event) => {
    setClass('remove', 'active', [right, rightBlurb, rightClose]);
}

left.addEventListener("click", leftClick);
left.addEventListener("mouseenter", leftEnter);
left.addEventListener("mouseleave", leftLeave);
leftBlurb.addEventListener("mouseenter", leftEnter);
leftBlurb.addEventListener("mouseleave", leftLeave);
leftClose.addEventListener("click", leftCloseClick);

right.addEventListener("click", rightClick);
right.addEventListener("mouseenter", rightEnter);
right.addEventListener("mouseleave", rightLeave);
rightBlurb.addEventListener("mouseenter", rightEnter);
rightBlurb.addEventListener("mouseleave", rightLeave);
rightClose.addEventListener("click", rightCloseClick);
