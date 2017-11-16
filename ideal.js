var lyrics='됐어(됐어) 이제 됐어(됐어) \
이제 그런 가르침은 됐어 \
그걸로 족해(족해) 이젠 족해(족해) \
내 사투로 내가 늘어놓을래 \
\
매일 아침 일곱시 삼십분까지 \
우릴 조그만 교실로 몰아넣고 \
전국 구백만의 아이들의 머리속에 \
모두 똑같은것만 집어넣고 있어 \
막힌 꽉 막힌 사방이 막힌 \
널 그리고 우릴 덥썩 모두를 먹어삼킨 \
이 시꺼먼 교실에서만 \
내 젊음을 보내기는 너무 아까워 \
\
좀더 비싼 너로 만들어 주겠어 \
네 옆에 앉아있는 그애보다더 \
하나씩 머리를 밟고 올라서도록해 \
좀더 잘난 네가 될수가 있어 \
\
왜 바꾸지 않고 마음을 조이며 젊은날을 헤매일까 \
바꾸지 않고 남이 바꾸길 바라고만 있을까 \
\
왜 바꾸지 않고 마음을 조이며 젊은날을 헤매일까 \
바꾸지 않고 남이 바꾸길 바라고만 있을까 \
됐어(됐어) 이젠 됐어(됐어) \
이제 그런 가르침은 됐어 \
그걸로 족해(족해)이젠 족해(족해) \
내 사투로 내가 늘어놓을래 \
\
국민학교에서 중학교로 들어가면 \
고등학교를 지나 우릴 포장센터로 넘겨 \
겉보기좋은 널 만들기 위해 \
우릴 대학이란 포장지로 멋지게 싸버리지 \
이젠 생각해봐 "대학" 본 얼굴은 가린체 근엄한 척 \
할 시대가 지나버린건 좀 더 솔직해봐 넌 알수 있어 \
\
좀더 비싼 너로 만들어 주겠어 \
네 옆에 앉아있는 그애보다 더 \
하나씩 머리를 밟고 올라서도록 해 \
좀 더 잘난 네가 될수가 있어 \
\
왜 바꾸진 않고 마음을 조이며 젊은날을 헤멜까 \
바꾸지 않고 남이 바꾸길 바라고만 있을까 \
왜 바꾸진 않고 마음을 조이며 젊은날을 헤멜까 \
바꾸지 않고 남이 바꾸길 바라고만 있을까 \
\
됐어(됐어) 이젠 됐어(됐어) \
이제 그런 가르침은 됐어';
var lyricObj=[];
var n=0;
var sound, amplitude;

function preload()
{
	sound=loadSound('asset/gyosil_idea.mp3');
	var lyricArr=split(lyrics, ' ');
	for(var i=0;i<lyricArr.length;i++)
	{
		lyricObj.push(new txtObj(lyricArr[i]));
	}
}
function setup() { 
  createCanvas(600, 600);
	noStroke();
	amplitude=new p5.Amplitude();
	sound.loop();
} 

function draw() { 
  background(0);
	var level=amplitude.getLevel();
	if(level>0.7) lyricObj[n].create(level);
	for(var i=0;i<lyricObj.length;i++)
	{
		lyricObj[i].view();
	}
}
function txtObj(txt)
{
	this.txt=txt;
	this.size=1;
	this.x=0;
	this.y=0;
	this.alpha=0;
	this.create=function(size)
	{
		this.x=random(width);
		this.y=random(height);
		this.size=size*50;
		this.alpha=250;
		count();
	}
	this.view=function()
	{
		fill(255,this.alpha);
		textSize(this.size);
		text(this.txt,this.x,this.y);
		this.alpha-=10;
	}
}
function count()
{
	n++;
	if(n==lyricObj.length) n=0;
}
