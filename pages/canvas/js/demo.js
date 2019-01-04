function draw() {
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // drawRet(ctx);

        // drawTriangle(ctx)

        // drawMoveTo(ctx)

        // draw1(ctx);

        drawArc(ctx);

    } else {
        console.log('当前浏览器暂不支持canvas')
    }
}

/* 矩形 */
function drawRect(ctx) {
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
}

/* 三角形 */
function drawTriangle(ctx) {
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.stroke();
    ctx.closePath();
}

/* 移动笔触 */
function drawMoveTo (ctx) {
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
    ctx.moveTo(100, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // 口（顺时针）
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
    ctx.closePath();
    ctx.stroke();
}

function draw1 (ctx) {
    // 填充三角形
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // 描边三角形
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
}

function drawArc (ctx) {
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(150, 20);
    ctx.arcTo(150, 100, 50, 20, 30);
    ctx.stroke();

    ctx.fillStyle = 'blue';
    // base point
    ctx.fillRect(150, 20, 10, 10);

    ctx.fillStyle = 'red';
    // control point one
    ctx.fillRect(150, 100, 10, 10);
    // control point two
    ctx.fillRect(50, 20, 10, 10);

    ctx.setLineDash([5, 5]);
    ctx.moveTo(150, 20);
    ctx.lineTo(150, 100);
    ctx.lineTo(50, 20);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(120, 38, 30, 0, 2 * Math.PI);
    ctx.stroke();
}

draw();
let obj = {};
let song = '发如雪';
obj.singer = '周杰伦';

Object.defineProperty(obj, 'music', {
    // 1. value: '七里香',
    configurable: true,     // 2. 可以配置对象，删除属性
    // writable: true,         // 3. 可以修改对象
    enumerable: true,        // 4. 可以枚举
    // ☆ get,set设置时不能设置writable和value，它们代替了二者且是互斥的
    get() {     // 5. 获取obj.music的时候就会调用get方法
        return song;
    },
    set(val) {      // 6. 将修改的值重新赋给song
        song = val;
    }
});

// 下面打印的部分分别是对应代码写入顺序执行
console.log(obj);   // {singer: '周杰伦', music: '七里香'}  // 1

delete obj.music;   // 如果想对obj里的属性进行删除，configurable要设为true  2
console.log(obj);   // 此时为  {singer: '周杰伦'}

obj.music = '听妈妈的话';   // 如果想对obj的属性进行修改，writable要设为true  3
console.log(obj);   // {singer: '周杰伦', music: "听妈妈的话"}

for (let key in obj) {
    // 默认情况下通过defineProperty定义的属性是不能被枚举(遍历)的
    // 需要设置enumerable为true才可以
    // 不然你是拿不到music这个属性的，你只能拿到singer
    console.log(key);   // singer, music    4
}

console.log(obj.music);   // '发如雪'  5
obj.music = '夜曲';       // 调用set设置新的值
console.log(obj.music);   // '夜曲'    6

