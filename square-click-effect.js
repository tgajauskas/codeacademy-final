
let squares = document.querySelectorAll('.square');
let currentActiveElement = null;

squares.forEach(function(square) {
    square.addEventListener('click', function() {
        if (currentActiveElement === square) {

            return;
        }

        if (currentActiveElement) {
            resetStyles(currentActiveElement);
        }

        changeStyle(square);
        currentActiveElement = square;
    });

    let paragraph = square.querySelector('p');
    paragraph.addEventListener('click', function(event) {
        event.stopPropagation();
        if (currentActiveElement === square) {

            return;
        }

        if (currentActiveElement) {
            resetStyles(currentActiveElement);
        }

        changeStyle(square);
        currentActiveElement = square;
    });
});

if (squares.length > 0) {
    changeStyle(squares[0]);
    currentActiveElement = squares[0];
}

function resetStyles(element) {
    
    element.classList.remove('active');
    element.style.backgroundColor = '';
    var paragraph = element.querySelector('p');
    paragraph.style.opacity = '';
}

function changeStyle(element) {

    element.classList.add('active');
    element.style.backgroundColor = 'rgba(226, 120, 102, 1)';
    
    var paragraph = element.querySelector('p');
    paragraph.style.opacity = 1;
}
