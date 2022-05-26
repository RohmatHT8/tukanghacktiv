
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

let keranjang ={}
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
function tambahkeranjang(arr){
    if(!keranjang.hasOwnProperty(arr[0])){
        keranjang[arr[0]] = {
            price: arr[1],
            img: arr[2],
            qty: 1
        }
    }
    togglecart();
    cekcount()
}

function cekcount(){
    let counter =0
    for (let i in keranjang)
    {
        counter++
    }
    document.getElementById('cartcount').innerHTML=counter
}
function togglecart(){
    let cart = document.getElementById('carttable')
    let header = '<tr><thead><td>gambar</td><td>Nama Orang</td><td>Harga</td><td>Total Harga</td><td>Action</td></thead></tr>'
    let barang =''
    for (let i in keranjang){
        let total = keranjang[i].price*keranjang[i].qty
        barang+=`<tr><td><img src='${keranjang[i].img}'></td><td>${i}</td><td>${keranjang[i].price}</td><td>${keranjang[i].qty}</td><td>${total}</td><td><button class="btn btn-danger" onclick="removeitem('${i}')">Remove</button></td></tr>`
    }
    cart.innerHTML=header+barang
}
function removeitem(item){
    delete keranjang[item]
    cekcount()
    togglecart()
}
let modal = document.getElementById('myModal')
let btn = document.getElementById('myBtn')
let span = document.getElementsByClassName('close')[0]

btn.onclick = function()
{
    modal.style.display='block';
}
span.onclick = function()
{
    modal.style.display='none'
}
window.onclick = function(event)
{
    if(event.target === modal){
        modal.style.display='none'
    }
}


function plusqty(item){
    keranjang[item].qty++
    cekcount()
    togglecart()
}

function minusqty(item){
    if(keranjang[item].qty>1){
        keranjang[item].qty--
    }
    cekcount()
    togglecart()
}

function checkout(){
    keranjang = {}
    alert("Check Out Berhasil")
    cekcount()
    togglecart()
}

    
