const characterAmountRange= document.getElementById ('characterAmountRange')
const characterAmountNumber= document.getElementById ('characterAmountNumber')
const includeUppercaseElement= document.getElementById ('includeUppercaseElement')
const includeNumbersElement= document.getElementById('includeNumbers')
const includeSymbolsElement= document.getElementById('includeSymbols')
const form = document.getElementById ('passwordGeneratorForm')
const passwordDisplay = document.getElementById ('passwordDisplay')

const LOWERCASE_CHAR_CODES = arrayFromlowtohigh(97, 122)
const UPPERCASE_CHAR_CODES = arrayfromlowtohigh(65, 90)
const NUMBER_CHAR_CODES = arrayfromlowtohigh(48, 57)
const SYMBOLS_CHAR_CODES = arrayfromlowtohigh(33, 47).concat(
    arrayfromlowtohigh(58, 64)
    ).concat(
        arrayfromlowtohigh(91, 96)
    ).concat(
        arrayfromlowtohigh(123,126)
    )


characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e=> {
    e.preventDefault.preventDefault()
    const CharacterAmount = characterAmountNumber.value 
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(CharacterAmount, includeUppercase, includeNumbers, includeSymbols)
    passwordDisplay.innertext = password 

})

function generatepassword(CharacterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let CharCodes = LOWERCASE_CHAR_CODES
    if (includeuppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)
    if (includesNumbers) charCodes = charCodes.concat(Numbers_char_codes)
    
    const passwordcharacters = []
    for ( let i = 0; i < CharacterAmount, i++) {
        const characterCode = charCodes[Math.floor(Math.random() * CharCodes.length)]
        passwordcharacters.push(string.fromCharCodes(CharacterCodes))
    }

    return passwordcharacters.join('')
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i<= high; i++) {
        array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}