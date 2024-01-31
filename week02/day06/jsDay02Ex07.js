let btn = document.querySelector("#btn");
        
        function move(target, callback) {
            let box = document.querySelector(target);
            box.callback = callback;
            let x = 0;
            let ref = setInterval(function() {
                x += 5;
                if(x >= 300) {
                    clearInterval(ref);
                    box.callback();
                }
                box.style.left = x + "px";
            }, 30);
        }

        btn.onclick = function() {
            // move 기능이 종료 되면 실행 할 일을 인자로 전달.
            move("#box", function() {
                this.style.backgroundColor = "green";
                this.style.color = "yellow";
            });
        }