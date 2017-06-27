

		$(function() {
			var sjshu = document.getElementById("sjishu");
			var oc = sjshu.getContext("2d");
			var arr3 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
			var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z", "y"]
			
			var arr2 = [];
			var db = null;
			var txt = document.getElementById("txt");
			var pass = document.getElementById("pass");
			var smt = document.getElementById("smt");
			var form = document.forms[0];
			var yzma = document.getElementById("yzma");
			for(x of arr) {
				arr2.push(x.toUpperCase());
			}
			arr = arr.concat(arr2).concat(arr3);
			var len = arr.length;

			console.log(arr.length);
			var s = "";

			function filltxt() {
				s = "";
				for(var i = 1; i <= 5; i++) {

					var t = parseInt(Math.random() * len);
					s += arr[t];

				}
				return s;

			}

			function colors() {
				var r = parseInt(Math.random() * 256);
				var g = parseInt(Math.random() * 256);
				var b = parseInt(Math.random() * 256);
				oc.beginPath();
				oc.font = "28px Arial";
				oc.fillStyle = `rgb(${r},${g},${b})`;
                oc.fillText(filltxt(), 10, 30);
			}
			colors();

			function line() {
				oc.beginPath();
				oc.strokeStyle = "hotpink"
				oc.bezierCurveTo(0, 10, 60, 10, 107, 30);
				oc.stroke();
				oc.save();
				oc.beginPath();
				oc.strokeStyle = "green"
				oc.bezierCurveTo(0, 20, 30, 40, 107, 0);
				oc.stroke();

			}
			line();

			sjshu.onclick = function() {
				oc.clearRect(0, 0, 107, 45);
				line();
				console.log(filltxt())

				colors();

			}
			//   if(!db){
			//   	db=openDatabase("mydb","2.0","test a command",6*1024*1024)
			//   }
			//   db.transaction(function(tx){
			//   	tx.executeSql("create table if not exists load (user unique,passworld char(10))");
			//   })
			//   smt.onclick=function(){
			//   	db.transaction(function(tx){
			//   		tx.executeSql("select * from load where user=?",[txt.value],function(tx,rs){
			//   			if(rs.rows.length>0){
			//   				if(pass.value==rs.rows.item(0).passworld && s==yzma.value){
			//   					alert("登录成功");
			//   				}
			//   				else{
			//   					alert("登录失败");
			//   				}
			//   				
			//   			}
			//   			else{
			//   				alert("请输入正确的数据(:");
			//   			}
			//   		})
			//   	})
			//   }
			$(".aone").click(function() {
				$("#box").css("display", "block");
				$("#twobox").css("display", "none");
				$(".athree").css("color", "#f56600");
				//  	$(".atwo").css("color","#666");
			})
			$(".atwo").click(function() {
				$("#box").css("display", "none");
				$("#twobox").css("display", "block");
				$(".afure").css("color", "#f56600");
				//  	$(".one").css("color","#666");
			})

			var email = /[\da-zA-Z\S]/;
			var arr4 = "";
			$("#smts").click(function() {
				var onev = $("#txts").val();
				var pass = $("#passes").val();
				var arr3 = {
					userName: onev,
					passCode: pass
				};
				
				if(email.test(onev) && email.test(pass)) {
					if(localStorage.getItem("user")) {
						var nuser = JSON.parse(localStorage.getItem("user"));
						console.log(nuser)
						nuser.push(arr3);
						
						
						localStorage.setItem("user", JSON.stringify(nuser));
							alert("注册成功");
					$("#box").css("display", "block");
				$("#twobox").css("display", "none");
						
					} else {
						localStorage.setItem("user", JSON.stringify([arr3])); //把变量存进本地
							alert("注册成功");
					$("#box").css("display", "block");
				$("#twobox").css("display", "none");
					}
				

				}
				else{
					alert("请重新注册");
				}

				$("#txts").val("");
				$("#passes").val("");
			})
			$("#smt").click(function() {
				arr4 = JSON.parse(localStorage.getItem("user"));
				console.log(arr4);
				for(let i of arr4) {
					console.log(i)
				  if(i.userName==$("#txt").val() &&  i.passCode==$("#pass").val()  && s.toLowerCase()==yzma.value.toLowerCase()) {
						alert("登录成功");
							setTimeout(function(){
								
	     			location.href="https://chenquanyu7.github.io/meta/trip/homepage.html";

	     				},2000);
						break;
						
					} 
				
				}
			})
			$(".back").click(function(){
				location.href="https://chenquanyu7.github.io/meta/trip/homepage.html";
			
			})

		})
	
