function createTooltip(content) {
    let tooltipElem = document.createElement('div');
    tooltipElem.innerHTML = content;
    tooltipElem.classList.add('tooltip');
    return tooltipElem;
}

function pinTooltipToElement(tooltipElem, pinElem, pinOffset) {
    let pinRect = pinElem.getBoundingClientRect();

    let tooltipHeight = tooltipElem.offsetHeight;
    let tooltipWidth = tooltip.offsetWidth;

    //Pin vertically
    let pinPointTopY = pinRect.top;
    let pinY;

    if(pinPointTopY > tooltipHeight + pinOffset) {
        //Pin above
        pinY = pinPointTopY - pinOffset - tooltipHeight;
    } else {
        //Pin below
        pinY = pinRect.bottom + pinOffset
    }

    tooltipElem.style.top = pinY + 'px';

    //Pin horizontally
    let pinX = pinRect.left + pinRect.width/2 - tooltipWidth/2;
    pinX = Math.max(pinX, pinOffset);

    tooltipElem.style.left = pinX + 'px';
}

function onMouseOverShowTooltip(event) {
    let target = event.target;
    let tooltipHtml = target.dataset.tooltip;
    if(!tooltipHtml) {
        return;
    }
    tooltip = createTooltip(tooltipHtml);
    target.appendChild(tooltip);
    pinTooltipToElement(tooltip, target, 5);
}

function onMouseOutHideTooltip(event) {
    if(tooltip) {
        tooltip.remove();
        tooltip = null;
    }
}

let tooltip = null;

document.addEventListener('mouseover', onMouseOverShowTooltip);
document.addEventListener('mouseout', onMouseOutHideTooltip);