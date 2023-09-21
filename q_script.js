fetch('https://type.fit/api/quotes').then((data)=>{
    return data.json();
}).then((completedata)=>{
    // console.log(completedata);
    let data1="";
    completedata.map((values)=>{
        data1+=`<div class="quote">
        <h1>Random Quote Generator</h1>
        <p>${values.text}</p>
        <p>${values.author}</p>
        <button class="btn" id="new-quote-btn" >New Quote</button>
    </div>`
    });
    document.getElementById("quote-container").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
})