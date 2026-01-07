//変数の書き方

//変数の前にletをつけることで、変数を宣言できる
let hello = 'Hello World';
alert(hello);

//整数
let int1 =1;
alert(int1);

//負数
let int2 =-10;
alert(int2);

//Javaにおけるfloatは32ビットの単精度浮動小数点数型。
//デフォルトで小数を扱う場合はより精度の高いdouble型が使われる。
let float1 =3.14;
alert(float1);

//文字列
let str1 ='JavaScriptを覚えよう';
alert(str1);





//四則演算

//足し算
alert(4+3);

//引き算
alert(8-5);

//掛け算
alert(2*6);

//割り算
alert(10/2);



//文字列の結合
alert('Hello' + 'World');

let str2 = 'Hello';
let str3 = 'World!!';
alert(str2 + str3);



//条件分岐

// 条件1を満たすときは、処理1を実行
//if(条件1){
//  処理1
//}

// 条件1を満たすときは処理1、満たさないときは処理2を実行
//if(条件1){
//  処理1
//} else{
//  処理2
//}

// 条件1を満たすときは処理1、条件2を満たすときは処理2、どちらも満たさないときは処理3を実行
//if(条件1){
//  処理1
//} else if(条件2){
//  処理2
//} else{
//  処理3
//}

let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
}else if(orange == apple){
  alert('みかんとりんごが同じ値段')
}else{
  alert('みかんの値段がりんごより高い')
}





//繰り返し処理　while文

// 引数の条件がtrueの間、波括弧内部の処理が繰り返される。
//while(条件){
//  処理
//}

let max = 100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');





//繰り返し処理　do...while文
//do{
//  最低1回は行われる処理
//}while(条件式);





//繰り返し処理　for文
//for(初期値;　条件式; 増減値){
//  繰り返し処理
//}
let i;
let num1 = 0;

for(i = 1; i < 11; i++){
  num1 = num1 + i; 
}

alert('1から10まで足し算した結果は' + num1 + 'です');
//行	処理の内容
// 1	「変数i」を宣言
// 2	「変数num」を宣言し、初期値を「0」に設定
// 3	 変数iの初期値を「1」に設定し、変数iが「11」未満のときは変数iに1を足す（「i++」は「i = i+1」と同じ）
// 4	 変数numに「num+i」を代入
// 5	 アラートウィンドウに計算結果を表示