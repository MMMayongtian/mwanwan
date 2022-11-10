document.querySelectorAll('.tab-bar').forEach(function(item) {
    let children = Array.from(item.children)
    let circleIndicator = item.querySelector('.tab-bar_circle-indicator')
    children.forEach((childItem, key) => {
        childItem.addEventListener('click', () => {
            let color = getComputedStyle(document.documentElement).getPropertyValue(`--theme-${childItem.dataset.theme}`)
            circleIndicator.classList.remove('animate')
            circleIndicator.style.marginLeft = (25 + childItem.clientWidth) * key + 'px'
            circleIndicator.classList.add('animate')

            document.querySelector('body').style.backgroundColor = color
            circleIndicator.style.backgroundColor = color
        })
    })
})
document.getElementById("d2").style.display = "none"; //隐藏
document.getElementById("d3").style.display = "none"; //隐藏
document.getElementById("d4").style.display = "none"; //隐藏
document.getElementById("d5").style.display = "none"; //隐藏
function d(id) {
    document.getElementById("d1").style.display = "none"; //隐藏  
    document.getElementById("d2").style.display = "none"; //隐藏
    document.getElementById("d3").style.display = "none"; //隐藏
    document.getElementById("d4").style.display = "none"; //隐藏
    document.getElementById("d5").style.display = "none"; //隐藏
    document.getElementById(id).style.display = "block"; //隐藏

}