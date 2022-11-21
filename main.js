const interest =23.50;
const interest2 = 26;
var deposit =0;
var day =0;
var a=0;var b=0;var x=0;var y=0;var valuesGet=[];

const getValue=()=>{
    //İnput değerlerini al!
    a = String(document.getElementById("deposit_type").value);
    b = String(document.getElementById("money_unit").value);
    deposit=Number(document.getElementById("deposit_amount").value);
    day=Number(document.getElementById("maturity_days").value);
    console.log(a,b,deposit,day);
    // Tüm değerleri kontrol et! Tümü valid ise;
    if (a!==String("0")&&b!==String("0")&&deposit!=""&&day!="") {
        document.getElementById("deposit_type").style.border="none";
        document.getElementById("money_unit").style.border="none";
        document.getElementById("deposit_amount").style.border="none";
        document.getElementById("maturity_days").style.border="none";
        vadeli();
    } else{
    // Değerleri Array içine yazdır!
    valuesGet[0]={name:"deposit_type",value:a};
    valuesGet[1]={name:"money_unit",value:b};
    valuesGet[2]={name:"deposit_amount",value:deposit};
    valuesGet[3]={name:"maturity_days",value:day};
    console.log(valuesGet);
    // Array içinde değeri 0'a eşit olanları bul!
    let check =valuesGet.filter(val=> val.value==0 && val.value=="0");
    // Array içinde değeri 0'a eşit olmayanları bul!
    let check2 =valuesGet.filter(val2=> val2.value!==0 && val2.value!=="0" );
    console.log(check,check2)
    // 0'a eşit bulduğun her eleman için borderı kırmızı yap!
    check.forEach(colored => { 
        document.getElementById(colored.name).style.border="2px solid red";
        console.log(colored.name);
        return alert("Lütfen Zorunlu Alanları Doldurun!!"+"     "+(colored.name))
        });
    // 0'a eşit olmayan her eleman için borderı none yap!    
    check2.forEach(noncolored => { 
        document.getElementById(noncolored.name).style.border="none";
        return getValue
        }); 
    }   
}
// Hesaplama fonksiyonu
const vadeli =()=>{
  // deposit_type = 1 =>
   if(a== String("1")){
        console.log(a)
        x=deposit*interest*day/36500;
        y= x+deposit} 
    // deposit_type != 1 =>     
            else {
                    x=deposit*interest2*day/36500;
                    y= x+deposit}
     console.log(x,y)
     document.getElementById("maturity_dis").value =Number(x.toFixed(2));
     document.getElementById("total_dis").value =Number(y.toFixed(2));   
     console.log(maturity_dis.value,total_dis.value)            
}
 // Tüm alanları temizle sıfırla fonksiyonu
const clearAll=()=>{
    document.getElementById("deposit_amount").value="";
    document.getElementById("maturity_days").value="";
    document.getElementById("maturity_dis").value="";
    document.getElementById("total_dis").value="";
    document.getElementById("deposit_type").value="0";
    document.getElementById("money_unit").value="0";
    deposit=0,day=0;x=0;y=0;a=0;b=0;
    valuesGet.length=0;
    document.getElementById("deposit_type").style.border="none";
    document.getElementById("money_unit").style.border="none";
    document.getElementById("deposit_amount").style.border="none";
    document.getElementById("maturity_days").style.border="none";
    console.log(x,y,a,b,deposit,day,valuesGet);
}


