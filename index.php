<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="asset/css/main.css?version=<?= filemtime("asset/css/main.css") ?>">
    <title>Suwit</title>
</head>

<body>

    <div class="container">
        <div class="fixed-top">
            <div class="papanskor">
                <div class="pemain">
                    <div class="skorpemain">0</div>
                    <label for="skor">Kamu</label>
                </div>
                <div class="versus">
                    <label for="versus">VS</label>
                </div>
                <div class="komputer">
                    <div class="skorkomputer">0</div>
                    <label for="skor">COM</label>
                </div>
            </div>
        </div>

        <div class="onthecenter">
            <div class="hasil">
                <div class="notif"></div>
                <div class="pilihan">
                    <div class="pilihanpemain"></div>
                    <div class="pilihankomputer"></div>
                </div>
            </div>
        </div>

        <div class="fixed-bottom">
            <div class="list-tombol">
                <!-- Batu / Ibu Jari -->
                <button id="0" onclick="play(this.id)">
                    <img src="asset/pic/Batu.png" alt="batu">
                </button>
                <!-- Gunting / Telunjuk -->
                <button id="1" onclick="play(this.id)">
                    <img src="asset/pic/Gunting.png" alt="gunting">
                </button>
                <!-- Kertas / Kelingking -->
                <button id="2" onclick="play(this.id)">
                    <img src="asset/pic/Kertas.png" alt="kertas">
                </button>
            </div>
        </div>
    </div>


</body>
<script src="asset/js/main.js"></script>

</html>