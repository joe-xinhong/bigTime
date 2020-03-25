//获取节点
const time = document.getElementById("time"),
greeting = document.getElementById("greeting"),
name = document.getElementById("name"),
plan = document.getElementById("plan");

//showtime函数
function showTime(){
	let today = new Date();
	const hour = today.getHours(),
	min = today.getMinutes(),
	sec = today.getSeconds();
	time.innerHTML = addZero(hour)+"<span>:</span>"+addZero(min)+"<span>:</span>"+addZero(sec);
	setTimeout(showTime,1000);
}

//补全个位数的0
function addZero(n){
	return n< 10 ? "0"+n : n;
}


//设置背景及问候语函数
function setBgGreet(){
	let today = new Date(),
	hour = today.getHours();
	if(hour < 12){
		document.body.style.background="url(img/p_1.jpg) no-repeat center center/cover";
		greeting.textContent="早上好，";
	}else if(hour == 12){
		
		document.body.style.background="url(img/a09.jpg) no-repeat center center/cover";
		greeting.textContent="中午好，";
	}else if(hour < 18){
		
		document.body.style.background="url(img/p_4.jpg) no-repeat center center/cover";
		greeting.textContent="下午好，";
	}else {
		
		document.body.style.background="url(img/a03.jpg) no-repeat center center/cover";
		greeting.textContent="下午好，";
	}	
}

//获得本地的姓名
function getName(){
	if(localStorage.getItem("name")===null || localStorage.getItem("name")===""){
		name.textContent="...";
	}else{
		name.textContent = localStorage.getItem("name");
	}
}

//获得本地的计划
function getPlan(){
	if(localStorage.getItem("plan")===null || localStorage.getItem("plan")===""){
		plan.textContent="Plan?";
	}else{
		plan.textContent = localStorage.getItem("plan");
	}
}

//设置姓名
function setName(e){
	console.log("开始了");
	if(e.type === "keypress"){
		console.log("进来了");
		console.log(e.keyCode)
		if(e.keyCode == 13 || e.which == 13){
			localStorage.setItem("name",e.target.innerText);
			name.blur();
		}
	}else{
		localStorage.setItem("name",e.target.innerText);
	}
}
//设置姓名
function setPlan(e){
	if(e.type === "keypress"){
		if(e.keyCode == 13 || e.which == 13){
			localStorage.setItem("plan",e.target.innerText);
			plan.blur();
		}
	}else{
		localStorage.setItem("plan",e.target.innerText);
	}
}


//事件监听
name.addEventListener("keypress",setName);
name.addEventListener("blur",setName);
plan.addEventListener("keypress",setPlan);
plan.addEventListener("blur",setPlan);

//运行
showTime();
setBgGreet();
getName();
getPlan();