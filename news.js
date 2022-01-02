
async function news() {
    let article = await fetch('https://gnews.io/api/v4/search?q=example&token=c3320da14809c6427597571f260adfe3');
    let data = await article.json();
    console.log(data);

    var row = document.createElement('div');
    row.setAttribute('class','row');
    
    for(var i=0; i<3;i++) {
        console.log(data.articles[i]["title"]);

        var div = document.createElement('div');
        div.setAttribute('class','col-lg-4');

        var img = document.createElement('img');
        img.setAttribute('src',data.articles[i].image);

        var title = document.createElement('h2');
        title.innerHTML =  data.articles[i].title;

        var description = document.createElement('div');
        description.setAttribute('class','detail');
        description.innerHTML =  data.articles[i].description;

        var date = document.createElement('div');
        date.innerHTML = data.articles[i].publishedAt;

        div.append(img,title,description);
        row.append(div);

        document.body.append(row);
    }

    for(var i=3; i<6;i++) {
        console.log(data.articles[i]["title"]);

        var div = document.createElement('div');
        div.setAttribute('class','col-lg-4');

        var img = document.createElement('img');
        img.setAttribute('src',data.articles[i].image);

        var title = document.createElement('h2');
        title.innerHTML =  data.articles[i].title;

        var description = document.createElement('div');
        description.setAttribute('class','detail');
        description.innerHTML =  data.articles[i].description;

        var date = document.createElement('div');
        date.innerHTML = data.articles[i].publishedAt;

        div.append(img,title,description);
        row.append(div);

        document.body.append(row);
    }

    for(var i=6; i<9;i++) {
        console.log(data.articles[i]["title"]);

        var div = document.createElement('div');
        div.setAttribute('class','col-lg-4');

        var img = document.createElement('img');
        img.setAttribute('src',data.articles[i].image);

        var title = document.createElement('h2');
        title.innerHTML =  data.articles[i].title;

        var description = document.createElement('div');
        description.setAttribute('class','detail');
        description.innerHTML =  data.articles[i].description;

        var date = document.createElement('div');
        date.innerHTML = data.articles[i].publishedAt;

        div.append(img,title,description);
        row.append(div);

        document.body.append(row);
    }

}
news();