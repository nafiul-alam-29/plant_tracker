let totalCount = document.getElementById('total')
let thriveCount = document.getElementById('thrivecount')
let struggleCount = document.getElementById('strugglecount')

const allCards = document.getElementById('cards-container')

function calculationCount(){
    totalCount.innerText = allCards.children.length
}
calculationCount(); 