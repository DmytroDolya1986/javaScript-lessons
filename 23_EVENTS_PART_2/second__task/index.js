const generateNumbersRange = (from, to) => {
    const result = [];
    for (let i = from; i <= to; i++) {
        result.push(i);
    }

    return result;
};

const getSectorLine = lineNumber => {
    const seats = generateNumbersRange(1, 10)
        .map(number => `
            <div
                class="sector__seat"
                data-seat-number="${number}"
            ></div>
        `).join('');

    return `
        <div
            class="sector__line"
            data-line-number="${lineNumber}"
        >${seats}</div>
    `;
}

const getSector = sectorNumber => {
    const sectorLinesString = generateNumbersRange(1, 10)
        .map(getSectorLine)
        .join('');
    
    return `
        <div
            class="sector"
            data-sector-number="${sectorNumber}"
        >
            ${sectorLinesString}
        </div>
    `;
};

const renderArena = () => {
    const arenaElem = document.querySelector('.arena');
    const sectorsString = generateNumbersRange(1, 3)
        .map(getSector)
        .join('');

    arenaElem.innerHTML = sectorsString;
};

const handleSeatSelect = event => {
    event.stopPropagation();

    if (event.target.hasAttribute('data-seat-number')) {
        const seatNumber = event.target.getAttribute('data-seat-number');
        const lineNumber = event.target.closest('.sector__line').getAttribute('data-line-number');
        const sectorNumber = event.target.closest('.sector').getAttribute('data-sector-number');

        const selectedSeatElem = document.querySelector('.board__selected-seat');

        selectedSeatElem.innerHTML = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
    }
};

const initHandlers = () => {
    const arenaElem = document.querySelector('.arena');

    arenaElem.addEventListener('click', handleSeatSelect);
};

document.addEventListener('DOMContentLoaded', () => {
    renderArena();
    initHandlers();
});
