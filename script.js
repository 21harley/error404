const canvas=document.getElementById("canvas1");
const ctx=canvas.getContext("2d");
canvas.width=800;
canvas.heigth=450;
const image1=new Image();
image1.src="data:image/png;base64,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";

function mostrar(t){
ctx.beginPath();

ctx.drawImage(image1,0,0,canvas.width,canvas.heigth/3); 

const sdataimage=ctx.getImageData(0,0,canvas.width,canvas.heigth/3);
const scdata=sdataimage.data;
const tam=canvas.width*(canvas.heigth/3);

let r;
let g;
let b;
for(let i=0;i<tam;i++){
    switch(t){
    case 1:
        //escala de gris  
        r = scdata[ i * 4 ];  
        g = scdata[ i * 4 + 1 ];  
        b = scdata[ i * 4 + 2 ];
        
        let aux1=Math.random()*(255-20)+20;
        var grey = ( r + g + b ) /aux1;
        scdata[ i * 4 ] = grey;
        scdata[ i * 4 + 1 ] = grey;
        scdata[ i * 4 + 2 ] = grey;
    break;
    case 2:
        //invertir la imagen
        let aux=Math.random()*(255-20)+20;
        r = scdata[ i * 4 ];
        g = scdata[ i * 4 + 1 ];
        b = scdata[ i * 4 + 2 ];
     
        scdata[ i * 4 ] = aux-r;
        scdata[ i * 4 + 1 ] = aux-g;
        scdata[ i * 4 + 2 ] = aux-b;    
    break;
    case 3:
       //sepia
       r = scdata[ i * 4 ];
       g = scdata[ i * 4 + 1 ];
       b = scdata[ i * 4 + 2 ];

       scdata[ i * 4 ] = ( r * .393 ) + ( g *.769 ) + ( b * .189 );
       scdata[ i * 4 + 1 ] = ( r * .349 ) + ( g *.686 ) + ( b * .168 );
       scdata[ i * 4 + 2 ] = ( r * .272 ) + ( g *.534 ) + ( b * .131 );   
    break;
    case 4:
       //contrarte
       let contrast=Math.random()* (255 - 10) + 10;
       let factor = ( 259 * ( contrast + 255 ) ) / ( 255 * ( 259 - contrast ) );
       r = scdata[ i * 4 ];
       g = scdata[ i * 4 + 1 ];
       b = scdata[ i * 4 + 2 ];
     
       scdata[ i * 4 ] = factor * ( r - 128 ) + 128;
       scdata[ i * 4 + 1 ] = factor * ( g - 128 ) + 128;
       scdata[ i * 4 + 2 ] = factor * ( b - 128 ) + 128;   
    break;
    }
    
}

ctx.putImageData(sdataimage,0,0);

ctx.closePath();
}
let cont=0;

setInterval(function(){
    if(cont>4){
        cont=1;
    }
    mostrar(cont);
    cont++;
},1000);



