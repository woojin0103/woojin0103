let MovieObject = {
    init: function(){
        
    },
    
    getall: function(){
        
        $.ajax({
        // 실행할 코드
            type: "GET",
            url: "http://localhost:8000/all",
        }).done(function(response){
        // 성공코드
            console.log(response)
            movielist = response.result

            // topdiv = document.createElement("div")
            // topdiv.style = "column-count:5"
            // document.body.appendChild(topdiv)
            topdiv = document.getElementById("alldiv")

            movielist.forEach(movie => {
                cmovie = document.createElement("div")
                cmovie.className = "card"

                mimg = document.createElement("img")
                mimg.className = "card-img-top"
                mimg.src = movie.poster_path
                mimg.style.cursor = "pointer"
                mimg.onclick = function(){
                    // location.href = movie.url //
                    window.open(movie.url)
                }
                cmovie.appendChild(mimg)
                topdiv.appendChild(cmovie)
            });
            

        }).fail(function(error){
        //실패코드
            console.log(error)
        });
    },

    getgenres: function(){
        
        $.ajax({
        // 실행할 코드
            type: "GET",
            url: `http://localhost:8000/genresbest/${document.getElementById("sgenre").value}`,
        }).done(function(response){
        // 성공코드
            console.log(response)
            movielist = response.result

            topdiv = document.getElementById("genrediv")
            topdiv.innerHTML = "" // 기존영화를 지우는 첫번째 방법
            // while(topdiv.firstChild){
            //     topdiv.removeChild
            // }

            movielist.forEach(movie => {
                cmovie = document.createElement("div")
                cmovie.className = "card"

                mimg = document.createElement("img")
                mimg.className = "card-img-top"
                mimg.src = movie.poster_path
                mimg.style.cursor = "pointer"
                mimg.onclick = function(){
                    // location.href = movie.url //
                    window.open(movie.url)
                }
                cmovie.appendChild(mimg)
                topdiv.appendChild(cmovie)
            });
            

        }).fail(function(error){
        //실패코드
            console.log(error)
        });
    }
}

MovieObject.init();
MovieObject.getall();
MovieObject.getgenres();