const API_URL = 'https://api.adviceslip.com/advice';

const elements = {
    title: document.querySelector('[data-advice-title]'),
    text: document.querySelector('[data-advice-text]'),
    button: document.querySelector('[data-advice-button]'),
};

const getAdvice = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();

    return data?.slip;
};

const updateView = ({ id, advice }) => {
    elements.title.textContent = `advice #${id}`;
    elements.text.textContent = `"${advice}"`;
};

async function renderAdvice() {
    let data = await getAdvice();

    updateView(data);
}

elements.button.addEventListener('click', renderAdvice);

// renderAdvice();
