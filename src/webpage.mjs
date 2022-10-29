
export function fillPage (staffArray){
    let cards = staffArray.map((x)=>x.htmlCard).join('');
    console.log(cards)


    let htmlString = `
  <!DOCTYPE html>
    <html lang="en">

<head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <title>My Team</title>

</head>

<body>
<div class="container-fluid">
    ${cards}
</div>
</body>

    </html>

`
        return htmlString;


}


