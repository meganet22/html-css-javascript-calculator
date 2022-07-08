-
"hesapMakinesi" adıyla bir fonksiyon oluşturun.
a. Fonksiyon 3 parametre alacaktır
b. 1. parametre string bir değer olacaktır ve şu karakterlerden oluşabilir: + - / * (artı eksi bölü yıldız)
c. Fonksiyon 2. ve 3. parametrede gelen sayısal değerlere 1. parametrede gelen değere göre işlem uygulayacaktır ve sonucu döndürecektir.
d. Eğer 1. parametre belirtilen 4 karakterden birine eşit değilse geriye false değer döndürecektir
function hesapMakinesi(p1, p2, p3){
  if( p1 == "-") return p2 - p3;
  else if(p1 == "*") return p2 * p3;
  else if(p1=="/") return p2 / p3;
  else if(p1 == "+") return p2 + p3;
  else return false;
}

console.log(hesapMakinesi("-",3,9));
console.log(hesapMakinesi("*",3,9));
console.log(hesapMakinesi("/",3,9));
console.log(hesapMakinesi("+",3,9));
console.log(hesapMakinesi("b",3, 9));
-
