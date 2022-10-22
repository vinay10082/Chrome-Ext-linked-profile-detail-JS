let optionList = document.getElementById('profile').options;
let options = [
    {
        text: '...',
        selected: true
    },
    {
        text:'link 1'
    },
    {
        text:'link 2'
    },
    {
        text:'link 3'
    }
]

options.forEach(option =>
    optionList.add(
        new Option(option.text, option.selected)
    ));