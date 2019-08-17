
var homeScroll = () => {
    document.getElementById('Home').scrollIntoView({behavior: 'smooth'})
}
var aboutScroll = () => {
    document.getElementById('About').scrollIntoView({behavior: 'smooth'})
}
var skillScroll = () => {
    document.getElementById('Skills').scrollIntoView({behavior: 'smooth'})
}
var portfolioScroll = () => {
    document.getElementById('Portfolio').scrollIntoView({behavior: 'smooth'})
}
var contactScroll = () => {
    document.getElementById('Contact').scrollIntoView({behavior: 'smooth'})
}
var dropList = () => {
    drop = document.getElementById('DropDown')
    if(drop.style.display === 'none' || drop.style.display === '') {
        drop.style.display = 'block'
    }else {
        drop.style.display = 'none'
    }
}
document.addEventListener('mouseup', event => {

    if(event.target != document.getElementById('hc')) {
        document.getElementById('DropDown').style.display = 'none'
    }
})