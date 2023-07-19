## THREE.js 速学

之前有看过一本 three.js 的书，书中介绍很详细，除了版本稍微老了点（three.js 这个迭代速度，倒也正常），其他都还可以。但是我终究还是没有坚持下来，一方面可能是太过详细，学起来想的多做的少，另一方面可能也是 three.js 官网介绍已经变化很多了，一点点对比看的头大。

这里根据大佬的[博客](https://www.wjceo.com/blog/threejs/)，直接上手案例，慢慢学习。

另外建议下载官网的示例代码，例子都很好，并且写法也有更新，比看博客上的例子上手要快，但是查找起来比较麻烦。可以结合来看，这样脉络比较清晰。

### 基础

下面是代码的基本结构，这里使用 cdn 引入，使用 0.149.0 版本。three.js 相关代码是放在 main code 中的。上面两个 script 主要是为了使用 ES module，以及引入 three.js 的 cdn。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>three.js 示例</title>
    <style>
      html,
      body {
        margin: 0;
        padding: 0;
      }
    </style>
  </head>

  <body></body>

  <script
    async
    src="https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js"
  ></script>

  <script type="importmap">
    {
      "imports": {
        "three": "https://unpkg.com/three@v0.149.0/build/three.module.js",
        "three/addons/": "https://unpkg.com/three@v0.149.0/examples/jsm/"
      }
    }
  </script>
  <script  type="module">
    import * as THREE from "three";
    import { OrbitControls } from "three/addons/controls/OrbitControls.js";
    /**
     * main code
     * /
  </script>
</html>
```

#### 基本概念以及简单例子

three.js 中有几个重要概念：

scene，所有的动画都需要在场景中展示，就像一个舞台。

camera，相机决定了我们能看到场景中的那些物品，以及观察视角，three.js 会计算最终展示出来的效果。这里使用的是透视相机，顾名思义，计算的结果呈现透视关系，也就是近大远小（想象一下广角镜头的效果）。

renderer，渲染器，渲染得到的结果，将渲染器返回的 DOM 添加到 HTML 中就能看到效果了。这里使用的是 WebGL 渲染器，three.js 提供了不同的渲染器。如果浏览器不支持 WebGL 可以使用其他渲染器进行降级处理。

geometry，几何图形，可以往场景中添加各种几何图形。这里添加了一个盒子（BOX），三个参数分别是长宽高（也就代表了，x、y、z 轴上各自的高度）。

material，材质，图形需要覆盖材质，这样图像就能展现出不同材质对应的显示效果。

mesh，网格，包括一个几何体，加上材质，就像一个贴图的过程，最终拿到应用了材质效果的几何图形。

```js
//创建场景
var scene = new THREE.Scene();
//设置相机（视野，显示口的宽高比，近裁剪面，远裁剪面）
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
//渲染器
var renderer = new THREE.WebGLRenderer({ antialias: true });
//设置渲染器的高度和宽度，如果加上第三个值 false，则按场景大小显示，等比例缩放
renderer.setSize(window.innerWidth, window.innerHeight, false);
//将渲染器添加到html当中
document.body.appendChild(renderer.domElement);

//盒子模型（BoxGeometry），这是一个包含立方体所有顶点和填充面的对象。
var geometry = new THREE.BoxGeometry(1, 2, 1);
//使用网孔基础材料（MeshBasicMaterial）进行着色器，这里只绘制了一个绿色
var material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
//使用网孔(Mesh)来承载几何模型
var cube = new THREE.Mesh(geometry, material);
//将模型添加到场景当中
scene.add(cube);
//将相机沿z轴偏移5
camera.position.z = 5;

//设置一个动画函数
var animate = function () {
  // 告诉浏览器每次重绘前进行计算，一般是 1s 60 次
  requestAnimationFrame(animate);

  //每次调用模型的沿xy轴旋转0.01
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  //使用渲染器把场景和相机都渲染出来
  renderer.render(scene, camera);
};

animate();
```

几个注意点，物品需要添加到场景中才会产生效果。默认是添加到 (0, 0, 0) 位置。这里要讲一下 three.js 中的坐标系，可以使用 AxesHelper 查看。 threeJS 中 z 轴（默认 blue）指向屏幕外侧，y 轴（默认 green）指向图形上方， x 轴（red）指向图形右侧。默认添加位置相同，如果相机和物品重合就看不到了，这里将相机位置向上做了调整。

animate 或者叫 loop，就是一个重复渲染的函数。requestAnimationFrame 会在下次浏览器 repaint 前执行，这样 repaint 时就会应用计算后的结果。同样是循环，对比定时器。如果不需要绘制，浏览器就不会调用 requestAnimationFrame，如果用户切到其他 tab，浏览器就不会调用，会节省一些性能。

#### 相机设置

相机除了像上一个例子一样，放置在原点，也可以是设置位置，和相机转向的方向。

```js
//设置相机的视点
camera.position.set(0, 0, 100);
//设置相机的朝向
camera.lookAt(new THREE.Vector3(0, 0, 0));
// 线的材质
const material = new THREE.LineBasicMaterial({
	color: 0x0000ff
});
// 坐标点
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
// 生成几何图形，通过点来描述
const geometry = new THREE.BufferGeometry().setFromPoints( points );
// 下面这种写法也可以
//定义线的基本材料，我们可以使用LineBasicMaterial（实线材料）和LineDashedMaterial（虚线材料）
// var material = new THREE.LineBasicMaterial({ color: 0x0000ff });
// var geometry = new THREE.BufferGeometry();
// const vertices = new Float32Array([-10, 0, 0, 0, 10, 0, 10, 0, 0]);
// geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
// //使用Line方法将线初始化
// var line = new THREE.Line(geometry, material);

const line = new THREE.Line( geometry, material );
scene.add( line );
```

#### 光源

以上的例子都没有添加光源，光源可以创造光影效果。

three.js 中有多种光源，例如，平行光，环境光，点光源，聚光灯等，每个光源有自己的特性。例如平行光就类似于太阳光，可以产生阴影。环境光类似漫反射形成的室内光源，是不产生阴影的。这里用平行光演示下效果，还使用了 Texture 给几何图形贴图。

```js
//创建一个平行光光源照射到物体上 第一个参数是光线颜色，第二个是光强
var light = new THREE.DirectionalLight(0xffffff, 1.5);
//设置平型光照射方向，照射方向为设置的点照射到原点
light.position.set(0, 0, 1);
//将灯光放到场景当中
scene.add(light);
//加载图片作为纹理
var map = new THREE.TextureLoader().load(picUrl);
//然后创建一个phong材质来处理着色，并传递给纹理映射
// phong 是镜面反光材质，光线照射会有高光效果
var material = new THREE.MeshPhongMaterial({ map: map });
//创建一个立方体的几何体
var geometry = new THREE.BoxGeometry(1, 1, 1);
//将集合体和材质放到一个网格中
var cube = new THREE.Mesh(geometry, material);
//将立方体网格添加到场景中
scene.add(cube);
```

为了查看高光的效果，可以添加动画

```js
var animate = function () {
  requestAnimationFrame(animate);
	// 旋转动画
  cube.rotation.x += 0.02;
  cube.rotation.y += 0.02;

  renderer.render(scene, camera);
};
```

### 图形

官方的 webgl_geometries 例子中，使用很多图形做例子。

```js
// 球缓冲几何体
/**
 * radius — 球体半径，默认为1。
   widthSegments — 水平分段数（沿着经线分段），最小值为3，默认值为32。
   heightSegments — 垂直分段数（沿着纬线分段），最小值为2，默认值为16。
   phiStart — 指定水平（经线）起始角度，默认值为0。。
   phiLength — 指定水平（经线）扫描角度的大小，默认值为 Math.PI * 2。
   thetaStart — 指定垂直（纬线）起始角度，默认值为0。
   thetaLength — 指定垂直（纬线）扫描角度大小，默认值为 Math.PI。
 */
// object = new THREE.Mesh(new THREE.SphereGeometry(75, 20, 10), material);
// object.position.set(-300, 0, 200);
// scene.add(object);

// 一个用于生成二十面体的类。
// radius — 二十面体的半径，默认为1。 detail — 默认值为0。将这个值设为一个大于0的数将会为它增加一些顶点，使其不再是一个二十面体。当这个值大于1的时候，实际上它将变成一个球体。
object = new THREE.Mesh(new THREE.IcosahedronGeometry(75, 0), material);
object.position.set(-100, 0, 200);
scene.add(object);

// 一个用于创建八面体的类。
// radius — 八面体的半径，默认值为1。 detail — 默认值为0，将这个值设为一个大于0的数将会为它增加一些顶点，使其不再是一个八面体。
object = new THREE.Mesh(new THREE.OctahedronGeometry(75, 0), material);
object.position.set(100, 0, 200);
scene.add(object);

// 一个用于生成四面几何体的类。
// radius — 四面体的半径，默认值为1。 detail — 默认值为0。将这个值设为一个大于0的数将会为它增加一些顶点，使其不再是一个四面体。
object = new THREE.Mesh(new THREE.TetrahedronGeometry(75, 0), material);
object.position.set(300, 0, 200);
scene.add(object);

// 一个用于生成平面几何体的类。
/**
  width — 平面沿着X轴的宽度。默认值是1。
  height — 平面沿着Y轴的高度。默认值是1。
  widthSegments — （可选）平面的宽度分段数，默认值是1。
  heightSegments — （可选）平面的高度分段数，默认值是1。
 */
// object = new THREE.Mesh(
//   new THREE.PlaneGeometry(100, 200, 4, 4),
//   material
// );
// object.position.set(-300, 0, 0);
// scene.add(object);

// 四边形的原始几何类
/**
  width — X轴上面的宽度，默认值为1。
  height — Y轴上面的高度，默认值为1。
  depth — Z轴上面的深度，默认值为1。
  widthSegments — （可选）宽度的分段数，默认值是1。
  heightSegments — （可选）高度的分段数，默认值是1。
  depthSegments — （可选）深度的分段数，默认值是1。
 */
object = new THREE.Mesh(
  new THREE.BoxGeometry(100, 100, 100, 4, 4, 4),
  material
);
object.position.set(-100, 0, 0);
scene.add(object);

// CircleGeometry是欧式几何的一个简单形状，它由围绕着一个中心点的三角分段的数量所构造，由给定的半径来延展。 同时它也可以用于创建规则多边形，其分段数量取决于该规则多边形的边数。
/**
  radius — 圆形的半径，默认值为1
  segments — 分段（三角面）的数量，最小值为3，默认值为32。
  thetaStart — 第一个分段的起始角度，默认为0。（three o'clock position）
  thetaLength — 圆形扇区的中心角，通常被称为“θ”（西塔）。默认值是2*Pi，这使其成为一个完整的圆。
*/
// object = new THREE.Mesh(
//   new THREE.CircleGeometry(50, 20, Math.PI, Math.PI * 1.5),
//   material
// );
// object.position.set(100, 0, 0);
// scene.add(object);


// 一个用于生成二维圆环几何体的类。
/**
  innerRadius — 内部半径，默认值为0.5。
  outerRadius — 外部半径，默认值为1。
  thetaSegments — 圆环的分段数。这个值越大，圆环就越圆。最小值为3，默认值为32。
  phiSegments — 最小值为1，默认值为8。
  thetaStart — 起始角度，默认值为0。
  thetaLength — 圆心角，默认值为Math.PI * 2。
 */
// object = new THREE.Mesh(
//   new THREE.RingGeometry(35, 50, 20, 5, 0, Math.PI * 2),
//   material
// );
// object.position.set(300, 0, 0);
// scene.add(object);

// //

// object = new THREE.Mesh(
//   new THREE.CylinderGeometry(25, 75, 100, 40, 5),
//   material
// );
// object.position.set(-300, 0, -200);
// scene.add(object);

// const points = [];

// for (let i = 0; i < 50; i++) {
//   points.push(
//     new THREE.Vector2(
//       Math.sin(i * 0.2) * Math.sin(i * 0.1) * 15 + 50,
//       (i - 5) * 2
//     )
//   );
// }

// 轴对称性的网格，比如花瓶。车削绕着Y轴来进行旋转
/**
  points — 一个Vector2对象数组。每个点的X坐标必须大于0。 Default is an array with (0,-0.5), (0.5,0) and (0,0.5) which creates a simple diamond shape.
  segments — 要生成的车削几何体圆周分段的数量，默认值是12。
  phiStart — 以弧度表示的起始角度，默认值为0。
  phiLength — 车削部分的弧度（0-2PI）范围，2PI将是一个完全闭合的、完整的车削几何体，小于2PI是部分的车削。默认值是2PI。
 */
// object = new THREE.Mesh(new THREE.LatheGeometry(points, 20), material);
// object.position.set(-100, 0, -200);
// scene.add(object);

//  圆环几何体的类。
/**
  radius - 环面的半径，从环面的中心到管道横截面的中心。默认值是1。
  tube — 管道的半径，默认值为0.4。
  radialSegments — 管道横截面的分段数，默认值为12。
  tubularSegments — 管道的分段数，默认值为48。
  arc — 圆环的圆心角（单位是弧度），默认值为Math.PI * 2。
 */
// object = new THREE.Mesh(
//   new THREE.TorusGeometry(50, 10, 20, 20, Math.PI),
//   material
// );
// object.position.set(100, 0, -200);
// scene.add(object);


// 创建一个圆环扭结，其特殊形状由一对互质的整数，p和q所定义。如果p和q不互质，创建出来的几何体将是一个环面链接。
/**
  radius - 圆环的半径，默认值为1。
  tube — 管道的半径，默认值为0.4。
  tubularSegments — 管道的分段数量，默认值为64。
  radialSegments — 横截面分段数量，默认值为8。
  p — 这个值决定了几何体将绕着其旋转对称轴旋转多少次，默认值是2。
  q — 这个值决定了几何体将绕着其内部圆环旋转多少次，默认值是3。
*/
// object = new THREE.Mesh(
//   new THREE.TorusKnotGeometry(50, 10, 50, 20),
//   material
// );
// object.position.set(300, 0, -200);
// scene.add(object);
```

