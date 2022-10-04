    
    //TITLE AWAL
    var title1 = "<h3>Selamat Datang</h3>";
    var title2 = "<h1>Main Suwit</h1>";
    var title3 = "<h3>Oleh Developer 8ᵗʰ</h3>";
    var notif = document.getElementsByClassName("notif");
    notif[0].innerHTML=title1+title2+title3;

    //JIKA TOMBOL SUWIT DITEKAN
    function play(e) {

        var audio = new Audio('asset/audio/click.wav');
        audio.play();

        //KOSONGKAN TITLE
        document.getElementsByClassName("notif")[0].innerHTML = "";

        var notif = document.getElementsByClassName("notif");
        var pilihanpemain = document.getElementsByClassName("pilihanpemain");
        var pilihankomputer = document.getElementsByClassName("pilihankomputer");

        //AMBIL DATA SKOR TERAKHIR
        var el_skorpemain = document.getElementsByClassName("skorpemain");
        var el_skorkomputer = document.getElementsByClassName("skorkomputer")
        var skorpemain = parseInt(el_skorpemain[0].textContent);
        var skorkomputer = parseInt(el_skorkomputer[0].textContent);

        //ATURAN
        const aturan = [
            [
                "seri",
                "menang",
                "kalah"
            ],
            [
                "kalah",
                "seri",
                "menang"
            ],
            [
                "menang",
                "kalah",
                "seri"
            ]
        ];

        //OPSI PILIHAN
        const opsi = ["Batu", "Gunting", "Kertas"];

        //MENENTUKAN PILIHAN COM
        var random = Math.floor(Math.random()*opsi.length);

        //PILIHAN
        var opsi_pemain = opsi[e];
        var opsi_com = opsi[random];

        var title1 = "<h3>" + opsi[e] + " melawan " + opsi[random] + "</h3>";
        if (aturan[e][random] == "seri") {
            var title2 = "<h1 style='color:#cbd1ca'>SERI</h1>";
        } else if (aturan[e][random] == "kalah") {
            var title2 = "<h1 style='color:#dd2222'>KALAH</h1>";
            skorkomputer += 1;
        } else {
            var title2 = "<h1 style='color:#22dd39'>MENANG</h1>";
            skorpemain += 1;
        }

        pilihankomputer[0].innerHTML="<img style='transform:rotate(270deg);' src='asset/pic/"+opsi_com+".png'><h3 style='color:red'>COM</h3>";
        pilihanpemain[0].innerHTML="<img style='transform:rotate(90deg) scaleX(-1)' src='asset/pic/"+opsi_pemain+".png'><h3 style='color:blue'>KAMU</h3>";
        notif[0].innerHTML=title2;

        el_skorkomputer[0].textContent = skorkomputer;
        el_skorpemain[0].textContent = skorpemain;

    }

    function yoona(choose){

        const arr = [];
        const arr_filter = [];
        var num = 0;
        var hitung = 0;
        var b = "";  
        
        //total storage
        var totalstore = localStorage.length-1;
        
        //hitung step
        for(var i = 0; i <= totalstore; i++){
            if(localStorage.key(i).match("step")){
                num++;
            }
        }  
        
        //totalstep - 1 (array_mode)
        var totalstep = num - 1 ;
        
        if(totalstep<9){
        
            //TAMBAH STEP
            var nextstep = totalstep + 1;
            localStorage.setItem("step"+nextstep,choose);
        
        }else{
        
            hitung=0;
            for(i=0;i<totalstep;i++){
            arr[i]=localStorage.getItem("step"+i); 

            if(localStorage.getItem("step"+i)==choose){
                var a = i+1;

                if(localStorage.getItem("step"+a)==b){
                hitung++;
                }else{
                if(hitung!=0){
                    arr_filter[i] = [localStorage.getItem("step"+a),hitung];
                }
                b = localStorage.getItem("step"+a);
                hitung=1;

                } 

            }
            }   	
            
            //TIMPA STEP
            for(i=0;i<=totalstep;i++){
                
                if(i<totalstep){
                
                    localStorage.setItem("step"+i,arr[i+1]);
                
                }else{
                
                    localStorage.setItem("step"+totalstep, choose);
                
                }
                
            }
        
        }


    }