var x = 50;
var y = 320;
var disparou = [false,false,false,false]; 
var xdisp=[], ydisp=[]; 
var xj, yj;
var u = 15;
var pontos = 0;
var maxpontos = 1500;
var crashtiro = true; 
var crashpers=true;
var colisaotiro = false; 
var colisaopers = false;
var raioPers= 50
var raioIni= 45
var raioTiro=5, pew=10;
var pontos = 0; 
var nivel = 1, sec=0, Tempo=0;
var MaxPontos = 200;
var fase = 0; 
var tela=0
var vidas = 4;
var contI=3
var inimigosX=[], inimigosY=[];
var img,ini1,back;
var velocidade=2;
var mySound,inicio;

function preload() {
	img=loadImage('img/Spaceship.png');
	ini1=loadImage('img/ini1.png');
	back=loadImage('img/back.jpg');
	mySound = loadSound('sounds/menu.ogg');
	inicio= loadSound('sounds/inicio.ogg');
}	

function setup() {
  createCanvas(1280,580);
  background(0);
  xj = 50;
  xd = xj; 
  
  yj = 340; 
  yd = yj; 
  
  	for(t=0;t<contI;t++){
		inimigosX[t] = random(width);
		inimigosY[t] = random(45,height-45); 
	}
	 mySound.setVolume(0.1);
	 mySound.play();
	mySound.loop();
	
}	


function draw() {
	//TELA INICIAL
	if(tela==0){
		fill(255, 255, 255);
		textSize(70);
		textFont ("sans-serif")
		text("SPACE SHOOTER", 350, 95);
		textSize(50);
		text("Fase 1", 580, 160);
		text("Z - Atirar", 550, 350);
		fill(255,250,250);
        text("Aperte ENTER para jogar!",350,430)
		if (keyIsDown(ENTER)){
			tela = 1;
		}
	}
	
 //Nivel e Pontos
		if(tela==1){		
  clear();
  background(back);
  textSize(32);
  fill(250,250,250);
  text("Nível: "+nivel, 10, 50);
  text("Tempo: "+Tempo, 1100, 87);
  text("Pontos: "+pontos, 1100, 60);
  text("Vidas: "+vidas, 10, 77);
	fase=1
	if (pontos>MaxPontos) {
    nivel=nivel+1;
    fase=fase+1
    MaxPontos =MaxPontos + 200; 
}	
	sec++
	Tempo=parseFloat(Math.round(sec/60));
  
  //Movimentação Personagem 
	
  if (keyIsDown(UP_ARROW))
    y-=5;

  if (keyIsDown(DOWN_ARROW))
    y+=5;	
    
  for(t=0;t<contI;t++){
		
		inimigosX[t] = inimigosX[t] - velocidade; 
	}
  
  if(fase=1){
		velocidade = 2;
	}
	else{
		if(fase=2){
		velocidade = 4;
		}
		else{
				if(fase=3){
				velocidade = 5;
				}
				else{
						if(fase=4){
						velocidade = 6;
						}	
					}
		}
	}
	
	
	
	
	
	for(t=0;t<contI;t++){
		if (inimigosX[t] > width) {
		inimigosX[t] = random(width);
		inimigosY[t] = random(45,height-45); 
		}	
	} 
	
	for(t=0;t<contI;t++){ 
		rect(inimigosX[t],inimigosY[t],50,50);
		image(ini1,inimigosX[t],inimigosY[t],50,50);
	} 
    

//PERSONAGENS E TIRO

//Personagem  

image(img, x, y,100,100);

//Inimigo
for(t=0;t<contI;t++){
image(ini1,inimigosX[t],inimigosY[t],85,80);
if(inimigosX[t]>1280){
	inimigosX[t]=0
	}
if(inimigosY[t]>1280){
	inimigosY[t]=0
	}	
if(inimigosX[t]<0){
	inimigosX[t]=1280
	}
if(inimigosY[t]<0){
	inimigosY[t]=1280
	}	
}

//Tiro
	if(pew==0){
		
		for(i=0;i<4;i++){
			
			if(keyIsDown(90)&& disparou[i]==false){
					
					if(!disparou[i])
						
						ydisp[i]=y+40
						
						disparou[i]=true
						
					    break;	
							
			}
	}			
				pew=10;	
		}
		pew--;
		for(i=0;i<4;i++){
						if(disparou[i]==true){
						
						fill(250,250,250);
						
						ellipse(xdisp[i], ydisp[i], raioTiro*2,raioTiro*2);
							
							if (xdisp[i]<width){
								
								xdisp[i] +=25
								  
							
							}	
							
									else{
									
									disparou[i]=false
									
									xdisp[i]=x+80
									
									}
						}
						for(t=0;t<contI;t++){
						if( dist(xdisp[i],ydisp[i],inimigosX[t],inimigosY[t]) < raioTiro+raioIni ){
		
									xdisp[i]=x+80
									
									disparou[i]=false
									
									pontos=pontos+10
									
									inimigosX[t]= 0
									
									inimigosY[t]= 0
									}															
		}
							
				   

	 

//COLISÃO DO PERSONAGEM COM INIMIGO
for(t=0;t<contI;t++){
 if( dist(x,y,inimigosX[t],inimigosY[i]) < raioPers+raioIni){
	 
	 if( colisaopers == false){
       
       crashpers = ! crashpers;      
       
       colisaopers = true;
       
       vidas = vidas - 1
       
       inimigosX[t] = random(width);
		inimigosY[t] = random(45,height-45);
			 
     }
 }
 
 else {
    
    colisaopers = false;  
 }
 
if(vidas<0){
clear();
background(0);
fill(255, 255, 255);
		textSize(80);
		textFont ("sans-serif")
		text("GAME OVER", 400,300);	
	}
if(nivel>5){
clear();
background(0);
fill(255, 255, 255);
		textSize(80);
		textFont ("sans-serif")
		text("PARABÉNS VOCÊ VENCEU!", 400,300);	
	}	 
 
 
   
}
}}}
