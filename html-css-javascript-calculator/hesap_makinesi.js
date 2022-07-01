document.querySelector("#butonTopla").addEventListener("click", function(event){
    let sayi1 = document.querySelector("#sayi1").value;
    let sayi2 = document.querySelector("#sayi2").value;

    if ( sayi1 !== "" && sayi2 !== "" ) {
		let sonuc = parseInt(sayi1) + parseInt(sayi2);
		document.querySelector("#sonuc").innerHTML = sonuc;
    }
});

document.querySelector("#butonCikart").addEventListener("click", function(event){
    let sayi1 = document.querySelector("#sayi1").value;
    let sayi2 = document.querySelector("#sayi2").value;

    if ( sayi1 !== "" && sayi2 !== "" ) {
		let sonuc = parseInt(sayi1) - parseInt(sayi2);
		document.querySelector("#sonuc").innerHTML = sonuc;
    }
});