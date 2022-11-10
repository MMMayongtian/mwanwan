document.querySelectorAll('.tab-bar').forEach(
        function(item) {
            let children = Array.from(item.children)
            let lineIndicator = item.querySelector('.tab-bar_line-indicator')
            children.forEach((childItem, key) => {
                childItem.addEventListener('click', () => {
                    let color = getComputedStyle(document.documentElement).getPropertyValue(`--theme-${childItem.dataset.theme}`);
                    lineIndicator.classList.remove('animate');
                    lineIndicator.style.marginTop = ((25 + childItem.clientHeight) * key) + "px"
                    lineIndicator.classList.add('animate');

                    document.querySelector('body').style.backgroundColor = color;
                    lineIndicator.style.backgroundColor = color
                })
            })
        }