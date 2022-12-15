const pianoKeys = document.querySelectorAll('.piano-keys .key'),
    volumSlider = document.querySelector('.volume-slider input'),
    keysCheckbox = document.querySelector('.keys-checkbox input')

let allKeys = []
let audio = new Audio('tunes/a.wav')

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`
    audio.play()
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add('active')
    setTimeout(() => {
        clickedKey.classList.remove('active')
    }, 150)
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key)
    key.addEventListener('click', () => {
        playTune(key.dataset.key)
    })
})

const handleVolume = (e) => {
    audio.volume = e.target.value
}

const pressdKey = (e) => {
    if (allKeys.includes(e.key))
        playTune(e.key)
}

const showHidekeys = () => {
    pianoKeys.forEach(key => {
        key.classList.toggle('hide')
    })
}

volumSlider.addEventListener('input', handleVolume)
keysCheckbox.addEventListener('click', showHidekeys)
document.addEventListener('keydown', pressdKey)