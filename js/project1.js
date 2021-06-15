function buttonClick() {
    const text = getInputText();
    addElementToList(text);
    clearInput();
}

function getInputText() {
    const input = document.querySelector('.text');
    return input.value;
}

function addElementToList(text) {
    const listItem = document.createElement('li');
    listItem.innerText = text;

    const list = document.querySelector('.list');
    list.append(listItem);
}

function clearInput() {
    const input = document.querySelector('.text');
    input.value = '';
}