const tukang = {
    SpecialistTembok:[
        {
            nama:'Aji',
            rating:4.5,
            harga:50000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/assetkuli/1.jpg'},
        {
            nama:'Ando',
            rating:5,
            harga:500000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/assetkuli/1.jpg'},
        {
            nama:'Aiueo',
            rating:1.5,
            harga:5000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/assetkuli/1.jpg'}],
    SpesialisAtap:[
        {
            nama:'Aji',
            rating:4.5,
            harga:50000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/assetkuli/1.jpg'},
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
            img : 'img/assetkuli/1.jpg'},
        {
            nama:'Amsiong',
            rating:3.5,
            harga:55000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/assetkuli/1.jpg'}],
    SpesialisSemen:[
        {
            nama:'Aji',
            rating:4.5,
            harga:50000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/assetkuli/1.jpg'},
        {
            nama:'Ando',
            rating:5,
            harga:500000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/assetkuli/1.jpg'},
        {
            nama:'Amsiong',
            rating:3.5,
            harga:55000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/assetkuli/1.jpg'}],
    SpesialisCat:[
        {
            nama:'Aji',
            rating:4.5,
            harga:50000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/assetkuli/1.jpg'},
        {
            nama:'Ando',
            rating:5,
            harga:500000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/assetkuli/1.jpg'},
        {
            nama:'Aiueo',
            rating:1.5,
            harga:5000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/assetkuli/1.jpg'},
        {
            nama:'Auoououo',
            rating:2.5,
            harga:5000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/assetkuli/1.jpg'},
        {
            nama:'Amsiong',
            rating:3.5,
            harga:55000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/assetkuli/1.jpg'}],
    SpesialisPintuJendela:[
        {
            nama:'Aji',
            rating:4.5,
            harga:50000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/assetkuli/1.jpg'},
        {
            nama:'Abababa',
            rating:1.5,
            harga:5000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/assetkuli/1.jpg'},
        {
            nama:'Amsiong',
            rating:3.5,
            harga:55000,
            deskripsi:'pekerja keras dan rajin menabung',
            img : 'img/assetkuli/1.jpg'}]
}



function render(data){
    let result= data
    let temp=''
        for(let i=0;i<tukang[result].length;i++)
        {   

           temp+=`<div class="card inline">
           <div class="img">
               <img src="${tukang[result][i].img}" alt="${tukang[result][i].nama}" width="100%">
           </div>
           <div class="text-card">
               <h3>${tukang[result][i].nama}</h3>
               <p><span class="fa fa-star checked"></span>${tukang[result][i].rating}</p>
               <p>${tukang[result][i].deskripsi}</p>
               <p>Rp. ${tukang[result][i].harga}</p>
               <div class="botton-card"><a href="#"  onclick="tambahkeranjang(['${tukang[result][i].nama}',${tukang[result][i].harga},'${tukang[result][i].img}'])">Add to Cart</a></div>
                </div>  
           </div>
       </div>  `

        }
        
    document.getElementById('content').innerHTML= temp
}


render('SpecialistTembok')

let keranjang ={}

function tambahkeranjang(arr){
    if(!keranjang.hasOwnProperty(arr[0])){
        keranjang[arr[0]] = {
            price: arr[1],
            img: arr[2],
            hari: 1
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
   
    let barang =''
    for (let i in keranjang){
        let total = keranjang[i].price*keranjang[i].hari
        barang+=`<tr><td><img src='${keranjang[i].img}'width = "100px"></td><td>${i}</td><td>${keranjang[i].price}</td>
        <td>${keranjang[i].hari}</td><td>${total}</td><td><button type="button" class="btn btn-plus" onclick="plusqty('${i}')">+</button><button type="button" class="btn btn-minus" onclick="minusqty('${i}')">-</button><button class="btn btn-danger" onclick="removeitem('${i}')">Remove</button>`

    }
    cart.innerHTML=barang
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
    if(document.getElementById('cartcount').innerText === '0'){
        alert('Mohon di Beli dulu!')
    }else{
    modal.style.display='block';
    }
    
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
    keranjang[item].hari++
    cekcount()
    togglecart()
}

function minusqty(item){
    if(keranjang[item].hari>1){
        keranjang[item].hari--
    }
    cekcount()
    togglecart()
}

function checkout(){
    keranjang = {}
    if(document.getElementById('cartcount').innerText === '0'){
        alert('Mohon di Beli dulu!')}
        else{
    alert("Check Out Berhasil")
    cekcount()
    togglecart()
    modal.style.display='none'
        }
}

