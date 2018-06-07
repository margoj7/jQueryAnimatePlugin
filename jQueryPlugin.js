$(function () {
    function jQueryPlugin(chosenElement, typeOfAnimation, animationDuration, animationDelay) {
        for (let i = 0; i < $(chosenElement).find('li').length; i++) {
            $(chosenElement).find('li').eq(i).delay(i * animationDelay)[typeOfAnimation](animationDuration);
        }
    }
    jQueryPlugin('ul', 'fadeIn', 8000, 2000); //przykład
})