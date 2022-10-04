<!DOCTYPE html>
<html>

<body>

    <button onclick="create()">BUAT</button>
    <button onclick="read()">BACA</button>
    <button onclick="reset()">RESET</button>

    <script>
        function reset() {

            localStorage.clear();

            console.log("Reset");

        }

        function create() {

            var choose = 2;
            const arr = [];
            var num = 0;

            //total storage
            var totalstore = localStorage.length - 1;

            //hitung step
            for (var i = 0; i <= totalstore; i++) {
                if (localStorage.key(i).match("step")) {
                    num++;
                }
            }

            //totalstep - 1 (array_mode)
            var totalstep = num - 1;

            if (totalstep < 9) {

                var nextstep = totalstep + 1;
                localStorage.setItem("step" + nextstep, choose);

            } else {

                for (i = 0; i <= totalstep; i++) {
                    arr[i] = localStorage.getItem("step" + i);
                }

                for (i = 0; i <= totalstep; i++) {
                    if (i < totalstep) {
                        localStorage.setItem("step" + i, arr[i + 1]);
                    } else {
                        localStorage.setItem("step" + totalstep, choose);
                    }
                }

            }

            console.log(create);
        }

        function read() {

            var totalstore = localStorage.length - 1;
            for (var i = 0; i <= totalstore; i++) {
                if (localStorage.key(i).match("step")) {
                    console.log(localStorage.key(i) + " : " + localStorage.getItem(localStorage.key(i)));
                }
            }

        }
    </script>
</body>

</html>