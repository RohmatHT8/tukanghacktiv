
function fixedNav(){
    let navbar = document.querySelector('.navbar')
    navbar.classList.add('.fixedTop')
}

const tukang = {
    SpecialistTembok:[
        {
            nama:'Aji',
            rating:4.5,
            harga:50000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/poto.jpg'},
        {
            nama:'Ando',
            rating:5,
            harga:500000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/poto.jpg'},
        {
            nama:'Aiueo',
            rating:1.5,
            harga:5000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/poto.jpg'}],
    SpesialisAtap:[
        {
            nama:'Aji',
            rating:4.5,
            harga:50000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/poto.jpg'},
        {
            nama:'Ando',
            rating:5,
            harga:500000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/test.png'},
        {
            nama:'Aiueo',
            rating:1.5,
            harga:5000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/poto.jpg'},
        {
            nama:'Amsiong',
            rating:3.5,
            harga:55000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/poto.jpg'}],
    SpesialisSemen:[
        {
            nama:'Aji',
            rating:4.5,
            harga:50000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/poto.jpg'},
        {
            nama:'Ando',
            rating:5,
            harga:500000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/poto.jpg'},
        {
            nama:'Amsiong',
            rating:3.5,
            harga:55000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/poto.jpg'}],
    SpesialisCat:[
        {
            nama:'Aji',
            rating:4.5,
            harga:50000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/poto.jpg'},
        {
            nama:'Ando',
            rating:5,
            harga:500000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/poto.jpg'},
        {
            nama:'Aiueo',
            rating:1.5,
            harga:5000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/poto.jpg'},
        {
            nama:'Auoououo',
            rating:2.5,
            harga:5000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/poto.jpg'},
        {
            nama:'Amsiong',
            rating:3.5,
            harga:55000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/poto.jpg'}],
    SpesialisPintuJendela:[
        {
            nama:'Aji',
            rating:4.5,
            harga:50000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/poto.jpg'},
        {
            nama:'Abababa',
            rating:1.5,
            harga:5000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/poto.jpg'},
        {
            nama:'Amsiong',
            rating:3.5,
            harga:55000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/poto.jpg'}]
}

function render(data){
    let result= data
    let temp=''
        for(let i=0;i<tukang[result].length;i++)
        {
            temp+=`<div class="inline" style="max-width: 1500px;">
            <div class="row no-gutters">
            <div class="col-md-4">
                <img src="${tukang[result][i].img}" width='100px' height= '100px' class="card-img" alt="${tukang[result][i].nama}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                <h5 class="card-title" style="text-align: center;">${tukang[result][i].nama}</h5>
                <p class="card-text" style="text-align: center;"><span class="fa fa-star checked"></span>${tukang[result][i].rating}</p>
                <p class="card-text" id="harga" style="text-align: center;">${tukang[result][i].deskripsi}</p>
                <p class="card-text" id="harga" style="text-align: center;">Rp. ${tukang[result][i].harga}</p>
                <a href="#" class="btn btn-primary" style="float: center;" onclick="tambahkeranjang(['${tukang[result][i].nama}',${tukang[result][i].harga},'${tukang[result][i].img}'])">Add to Cart</a>
                </div>
            </div>
            </div>
        </div>`
        }
    document.getElementById('content').innerHTML= temp
}
