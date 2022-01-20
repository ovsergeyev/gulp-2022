// Проверка поддержки webp, добавление класса webp или no-wepb для HTML
export function isWebp(){
    // Проверка поддержки webp
    function testWebP(callback){
        let webP = new Image()
        webP.onload = webP.onerror = function(){
            callback(webP.height == 2)
        }
        webP.src = "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA=="
    }
    // Добалвение класса _webp или _no-webp для HTML
    testWebP(function(support){
        let className = support === true ? 'webp' : 'no-webp'
        document.documentElement.classList.add(className)
    })
}