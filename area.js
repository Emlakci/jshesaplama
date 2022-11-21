var kenar =0;
var yukseklik =0;
var a=0;var x=0;var y=0;

// Değerleri alma
const getValue=()=>{
    //İnput değerlerini al!
    a = String(document.getElementById("sekil_turu").value);
    kenar=Number(document.getElementById("kenar").value);
    yukseklik=Number(document.getElementById("yukseklik").value);
    console.log(a,kenar,yukseklik);
    if(a== String("1")){
        h_dikdrtgn(kenar,yukseklik);
    } if(a== String("2")){
        h_ucgn(kenar,yukseklik)
    }
}
const h_dikdrtgn=(i,z)=>{
    x=i*z;
    y=(i+z)*2;
    console.log(a,x,y)
    document.getElementById("alan").value =Number(x);
    document.getElementById("cevre").value =Number(y); 
}
const h_ucgn=(i,z)=>{
    x=(i*z)/2;
    y=2*i+z;
    console.log(a,x,y)
    document.getElementById("alan").value =Number(x);
    document.getElementById("cevre").value =Number(y); 
}

// Tüm alanları temizle sıfırla fonksiyonu
const clearAll=()=>{
    document.getElementById("kenar").value="";
    document.getElementById("yukseklik").value="";
    document.getElementById("alan").value="";
    document.getElementById("cevre").value="";
    document.getElementById("sekil_turu").value="0";
    kenar=0,yukseklik=0;x=0;y=0;a=0;
}