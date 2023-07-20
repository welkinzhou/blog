import{_ as e,r as t,o as p,c,a as n,f as s,d as o,h as i}from"./app-fdc7c009.js";const l={},u=n("h2",{id:"three-js-速学",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#three-js-速学","aria-hidden":"true"},"#"),s(" THREE.js 速学")],-1),r=n("p",null,"之前有看过一本 three.js 的书，书中介绍很详细，除了版本稍微老了点（three.js 这个迭代速度，倒也正常），其他都还可以。但是我终究还是没有坚持下来，一方面可能是太过详细，学起来想的多做的少，另一方面可能也是 three.js 官网介绍已经变化很多了，一点点对比看的头大。",-1),d={href:"https://www.wjceo.com/blog/threejs/",target:"_blank",rel:"noopener noreferrer"},k=i(`<p>另外建议下载官网的示例代码，例子都很好，并且写法也有更新，比看博客上的例子上手要快，但是查找起来比较麻烦。可以结合来看，这样脉络比较清晰。</p><h3 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h3><p>下面是代码的基本结构，这里使用 cdn 引入，使用 0.149.0 版本。three.js 相关代码是放在 main code 中的。上面两个 script 主要是为了使用 ES module，以及引入 three.js 的 cdn。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>three.js 示例<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
      <span class="token selector">html,
      body</span> <span class="token punctuation">{</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>
    <span class="token attr-name">async</span>
    <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>importmap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;imports&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&quot;three&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://unpkg.com/three@v0.149.0/build/three.module.js&quot;</span><span class="token punctuation">,</span>
        <span class="token string-property property">&quot;three/addons/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://unpkg.com/three@v0.149.0/examples/jsm/&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span>  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> <span class="token constant">THREE</span> <span class="token keyword">from</span> <span class="token string">&quot;three&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span> OrbitControls <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;three/addons/controls/OrbitControls.js&quot;</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * main code
     * /
  </span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基本概念以及简单例子" tabindex="-1"><a class="header-anchor" href="#基本概念以及简单例子" aria-hidden="true">#</a> 基本概念以及简单例子</h4><p>three.js 中有几个重要概念：</p><p>scene，所有的动画都需要在场景中展示，就像一个舞台。</p><p>camera，相机决定了我们能看到场景中的那些物品，以及观察视角，three.js 会计算最终展示出来的效果。这里使用的是透视相机，顾名思义，计算的结果呈现透视关系，也就是近大远小（想象一下广角镜头的效果）。</p><p>renderer，渲染器，渲染得到的结果，将渲染器返回的 DOM 添加到 HTML 中就能看到效果了。这里使用的是 WebGL 渲染器，three.js 提供了不同的渲染器。如果浏览器不支持 WebGL 可以使用其他渲染器进行降级处理。</p><p>geometry，几何图形，可以往场景中添加各种几何图形。这里添加了一个盒子（BOX），三个参数分别是长宽高（也就代表了，x、y、z 轴上各自的高度）。</p><p>material，材质，图形需要覆盖材质，这样图像就能展现出不同材质对应的显示效果。</p><p>mesh，网格，包括一个几何体，加上材质，就像一个贴图的过程，最终拿到应用了材质效果的几何图形。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//创建场景</span>
<span class="token keyword">var</span> scene <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//设置相机（视野，显示口的宽高比，近裁剪面，远裁剪面）</span>
<span class="token keyword">var</span> camera <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>PerspectiveCamera</span><span class="token punctuation">(</span>
  <span class="token number">75</span><span class="token punctuation">,</span>
  window<span class="token punctuation">.</span>innerWidth <span class="token operator">/</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">,</span>
  <span class="token number">0.1</span><span class="token punctuation">,</span>
  <span class="token number">1000</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//渲染器</span>
<span class="token keyword">var</span> renderer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>WebGLRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">antialias</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//设置渲染器的高度和宽度，如果加上第三个值 false，则按场景大小显示，等比例缩放</span>
renderer<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth<span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerHeight<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//将渲染器添加到html当中</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>renderer<span class="token punctuation">.</span>domElement<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//盒子模型（BoxGeometry），这是一个包含立方体所有顶点和填充面的对象。</span>
<span class="token keyword">var</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxGeometry</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//使用网孔基础材料（MeshBasicMaterial）进行着色器，这里只绘制了一个绿色</span>
<span class="token keyword">var</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token number">0x00ffff</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//使用网孔(Mesh)来承载几何模型</span>
<span class="token keyword">var</span> cube <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//将模型添加到场景当中</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cube<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//将相机沿z轴偏移5</span>
camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token comment">//设置一个动画函数</span>
<span class="token keyword">var</span> <span class="token function-variable function">animate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 告诉浏览器每次重绘前进行计算，一般是 1s 60 次</span>
  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animate<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//每次调用模型的沿xy轴旋转0.01</span>
  cube<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>x <span class="token operator">+=</span> <span class="token number">0.01</span><span class="token punctuation">;</span>
  cube<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>y <span class="token operator">+=</span> <span class="token number">0.01</span><span class="token punctuation">;</span>
  <span class="token comment">//使用渲染器把场景和相机都渲染出来</span>
  renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>几个注意点，物品需要添加到场景中才会产生效果。默认是添加到 (0, 0, 0) 位置。这里要讲一下 three.js 中的坐标系，可以使用 AxesHelper 查看。 threeJS 中 z 轴（默认 blue）指向屏幕外侧，y 轴（默认 green）指向图形上方， x 轴（red）指向图形右侧。默认添加位置相同，如果相机和物品重合就看不到了，这里将相机位置向上做了调整。</p><p>animate 或者叫 loop，就是一个重复渲染的函数。requestAnimationFrame 会在下次浏览器 repaint 前执行，这样 repaint 时就会应用计算后的结果。同样是循环，对比定时器。如果不需要绘制，浏览器就不会调用 requestAnimationFrame，如果用户切到其他 tab，浏览器就不会调用，会节省一些性能。</p><h4 id="相机设置" tabindex="-1"><a class="header-anchor" href="#相机设置" aria-hidden="true">#</a> 相机设置</h4><p>相机除了像上一个例子一样，放置在原点，也可以是设置位置，和相机转向的方向。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//设置相机的视点</span>
camera<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//设置相机的朝向</span>
camera<span class="token punctuation">.</span><span class="token function">lookAt</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 线的材质</span>
<span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>LineBasicMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token number">0x0000ff</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 坐标点</span>
<span class="token keyword">const</span> points <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
points<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span> <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
points<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
points<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Vector3</span><span class="token punctuation">(</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 生成几何图形，通过点来描述</span>
<span class="token keyword">const</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BufferGeometry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setFromPoints</span><span class="token punctuation">(</span> points <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 下面这种写法也可以</span>
<span class="token comment">//定义线的基本材料，我们可以使用LineBasicMaterial（实线材料）和LineDashedMaterial（虚线材料）</span>
<span class="token comment">// var material = new THREE.LineBasicMaterial({ color: 0x0000ff });</span>
<span class="token comment">// var geometry = new THREE.BufferGeometry();</span>
<span class="token comment">// const vertices = new Float32Array([-10, 0, 0, 0, 10, 0, 10, 0, 0]);</span>
<span class="token comment">// geometry.setAttribute(&quot;position&quot;, new THREE.BufferAttribute(vertices, 3));</span>
<span class="token comment">// //使用Line方法将线初始化</span>
<span class="token comment">// var line = new THREE.Line(geometry, material);</span>

<span class="token keyword">const</span> line <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Line</span><span class="token punctuation">(</span> geometry<span class="token punctuation">,</span> material <span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span> line <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="光源" tabindex="-1"><a class="header-anchor" href="#光源" aria-hidden="true">#</a> 光源</h4><p>以上的例子都没有添加光源，光源可以创造光影效果。</p><p>three.js 中有多种光源，例如，平行光，环境光，点光源，聚光灯等，每个光源有自己的特性。例如平行光就类似于太阳光，可以产生阴影。环境光类似漫反射形成的室内光源，是不产生阴影的。这里用平行光演示下效果，还使用了 Texture 给几何图形贴图。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//创建一个平行光光源照射到物体上 第一个参数是光线颜色，第二个是光强</span>
<span class="token keyword">var</span> light <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>DirectionalLight</span><span class="token punctuation">(</span><span class="token number">0xffffff</span><span class="token punctuation">,</span> <span class="token number">1.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//设置平型光照射方向，照射方向为设置的点照射到原点</span>
light<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//将灯光放到场景当中</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>light<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//加载图片作为纹理</span>
<span class="token keyword">var</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>TextureLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>picUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//然后创建一个phong材质来处理着色，并传递给纹理映射</span>
<span class="token comment">// phong 是镜面反光材质，光线照射会有高光效果</span>
<span class="token keyword">var</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>MeshPhongMaterial</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">map</span><span class="token operator">:</span> map <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//创建一个立方体的几何体</span>
<span class="token keyword">var</span> geometry <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxGeometry</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//将集合体和材质放到一个网格中</span>
<span class="token keyword">var</span> cube <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>geometry<span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//将立方体网格添加到场景中</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>cube<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了查看高光的效果，可以添加动画</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">animate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">requestAnimationFrame</span><span class="token punctuation">(</span>animate<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 旋转动画</span>
  cube<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>x <span class="token operator">+=</span> <span class="token number">0.02</span><span class="token punctuation">;</span>
  cube<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span>y <span class="token operator">+=</span> <span class="token number">0.02</span><span class="token punctuation">;</span>

  renderer<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>scene<span class="token punctuation">,</span> camera<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="图形" tabindex="-1"><a class="header-anchor" href="#图形" aria-hidden="true">#</a> 图形</h3><p>官方的 webgl_geometries 例子中，使用很多图形做例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 球缓冲几何体</span>
<span class="token doc-comment comment">/**
 * radius — 球体半径，默认为1。
   widthSegments — 水平分段数（沿着经线分段），最小值为3，默认值为32。
   heightSegments — 垂直分段数（沿着纬线分段），最小值为2，默认值为16。
   phiStart — 指定水平（经线）起始角度，默认值为0。。
   phiLength — 指定水平（经线）扫描角度的大小，默认值为 Math.PI * 2。
   thetaStart — 指定垂直（纬线）起始角度，默认值为0。
   thetaLength — 指定垂直（纬线）扫描角度大小，默认值为 Math.PI。
 */</span>
<span class="token comment">// object = new THREE.Mesh(new THREE.SphereGeometry(75, 20, 10), material);</span>
<span class="token comment">// object.position.set(-300, 0, 200);</span>
<span class="token comment">// scene.add(object);</span>

<span class="token comment">// 一个用于生成二十面体的类。</span>
<span class="token comment">// radius — 二十面体的半径，默认为1。 detail — 默认值为0。将这个值设为一个大于0的数将会为它增加一些顶点，使其不再是一个二十面体。当这个值大于1的时候，实际上它将变成一个球体。</span>
object <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>IcosahedronGeometry</span><span class="token punctuation">(</span><span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span>
object<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 一个用于创建八面体的类。</span>
<span class="token comment">// radius — 八面体的半径，默认值为1。 detail — 默认值为0，将这个值设为一个大于0的数将会为它增加一些顶点，使其不再是一个八面体。</span>
object <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>OctahedronGeometry</span><span class="token punctuation">(</span><span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span>
object<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 一个用于生成四面几何体的类。</span>
<span class="token comment">// radius — 四面体的半径，默认值为1。 detail — 默认值为0。将这个值设为一个大于0的数将会为它增加一些顶点，使其不再是一个四面体。</span>
object <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>TetrahedronGeometry</span><span class="token punctuation">(</span><span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> material<span class="token punctuation">)</span><span class="token punctuation">;</span>
object<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 一个用于生成平面几何体的类。</span>
<span class="token doc-comment comment">/**
  width — 平面沿着X轴的宽度。默认值是1。
  height — 平面沿着Y轴的高度。默认值是1。
  widthSegments — （可选）平面的宽度分段数，默认值是1。
  heightSegments — （可选）平面的高度分段数，默认值是1。
 */</span>
<span class="token comment">// object = new THREE.Mesh(</span>
<span class="token comment">//   new THREE.PlaneGeometry(100, 200, 4, 4),</span>
<span class="token comment">//   material</span>
<span class="token comment">// );</span>
<span class="token comment">// object.position.set(-300, 0, 0);</span>
<span class="token comment">// scene.add(object);</span>

<span class="token comment">// 四边形的原始几何类</span>
<span class="token doc-comment comment">/**
  width — X轴上面的宽度，默认值为1。
  height — Y轴上面的高度，默认值为1。
  depth — Z轴上面的深度，默认值为1。
  widthSegments — （可选）宽度的分段数，默认值是1。
  heightSegments — （可选）高度的分段数，默认值是1。
  depthSegments — （可选）深度的分段数，默认值是1。
 */</span>
object <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>Mesh</span><span class="token punctuation">(</span>
  <span class="token keyword">new</span> <span class="token class-name">THREE<span class="token punctuation">.</span>BoxGeometry</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  material
<span class="token punctuation">)</span><span class="token punctuation">;</span>
object<span class="token punctuation">.</span>position<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
scene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>object<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// CircleGeometry是欧式几何的一个简单形状，它由围绕着一个中心点的三角分段的数量所构造，由给定的半径来延展。 同时它也可以用于创建规则多边形，其分段数量取决于该规则多边形的边数。</span>
<span class="token doc-comment comment">/**
  radius — 圆形的半径，默认值为1
  segments — 分段（三角面）的数量，最小值为3，默认值为32。
  thetaStart — 第一个分段的起始角度，默认为0。（three o&#39;clock position）
  thetaLength — 圆形扇区的中心角，通常被称为“θ”（西塔）。默认值是2*Pi，这使其成为一个完整的圆。
*/</span>
<span class="token comment">// object = new THREE.Mesh(</span>
<span class="token comment">//   new THREE.CircleGeometry(50, 20, Math.PI, Math.PI * 1.5),</span>
<span class="token comment">//   material</span>
<span class="token comment">// );</span>
<span class="token comment">// object.position.set(100, 0, 0);</span>
<span class="token comment">// scene.add(object);</span>


<span class="token comment">// 一个用于生成二维圆环几何体的类。</span>
<span class="token doc-comment comment">/**
  innerRadius — 内部半径，默认值为0.5。
  outerRadius — 外部半径，默认值为1。
  thetaSegments — 圆环的分段数。这个值越大，圆环就越圆。最小值为3，默认值为32。
  phiSegments — 最小值为1，默认值为8。
  thetaStart — 起始角度，默认值为0。
  thetaLength — 圆心角，默认值为Math.PI * 2。
 */</span>
<span class="token comment">// object = new THREE.Mesh(</span>
<span class="token comment">//   new THREE.RingGeometry(35, 50, 20, 5, 0, Math.PI * 2),</span>
<span class="token comment">//   material</span>
<span class="token comment">// );</span>
<span class="token comment">// object.position.set(300, 0, 0);</span>
<span class="token comment">// scene.add(object);</span>

<span class="token comment">// //</span>

<span class="token comment">// object = new THREE.Mesh(</span>
<span class="token comment">//   new THREE.CylinderGeometry(25, 75, 100, 40, 5),</span>
<span class="token comment">//   material</span>
<span class="token comment">// );</span>
<span class="token comment">// object.position.set(-300, 0, -200);</span>
<span class="token comment">// scene.add(object);</span>

<span class="token comment">// const points = [];</span>

<span class="token comment">// for (let i = 0; i &lt; 50; i++) {</span>
<span class="token comment">//   points.push(</span>
<span class="token comment">//     new THREE.Vector2(</span>
<span class="token comment">//       Math.sin(i * 0.2) * Math.sin(i * 0.1) * 15 + 50,</span>
<span class="token comment">//       (i - 5) * 2</span>
<span class="token comment">//     )</span>
<span class="token comment">//   );</span>
<span class="token comment">// }</span>

<span class="token comment">// 轴对称性的网格，比如花瓶。车削绕着Y轴来进行旋转</span>
<span class="token doc-comment comment">/**
  points — 一个Vector2对象数组。每个点的X坐标必须大于0。 Default is an array with (0,-0.5), (0.5,0) and (0,0.5) which creates a simple diamond shape.
  segments — 要生成的车削几何体圆周分段的数量，默认值是12。
  phiStart — 以弧度表示的起始角度，默认值为0。
  phiLength — 车削部分的弧度（0-2PI）范围，2PI将是一个完全闭合的、完整的车削几何体，小于2PI是部分的车削。默认值是2PI。
 */</span>
<span class="token comment">// object = new THREE.Mesh(new THREE.LatheGeometry(points, 20), material);</span>
<span class="token comment">// object.position.set(-100, 0, -200);</span>
<span class="token comment">// scene.add(object);</span>

<span class="token comment">//  圆环几何体的类。</span>
<span class="token doc-comment comment">/**
  radius - 环面的半径，从环面的中心到管道横截面的中心。默认值是1。
  tube — 管道的半径，默认值为0.4。
  radialSegments — 管道横截面的分段数，默认值为12。
  tubularSegments — 管道的分段数，默认值为48。
  arc — 圆环的圆心角（单位是弧度），默认值为Math.PI * 2。
 */</span>
<span class="token comment">// object = new THREE.Mesh(</span>
<span class="token comment">//   new THREE.TorusGeometry(50, 10, 20, 20, Math.PI),</span>
<span class="token comment">//   material</span>
<span class="token comment">// );</span>
<span class="token comment">// object.position.set(100, 0, -200);</span>
<span class="token comment">// scene.add(object);</span>


<span class="token comment">// 创建一个圆环扭结，其特殊形状由一对互质的整数，p和q所定义。如果p和q不互质，创建出来的几何体将是一个环面链接。</span>
<span class="token doc-comment comment">/**
  radius - 圆环的半径，默认值为1。
  tube — 管道的半径，默认值为0.4。
  tubularSegments — 管道的分段数量，默认值为64。
  radialSegments — 横截面分段数量，默认值为8。
  p — 这个值决定了几何体将绕着其旋转对称轴旋转多少次，默认值是2。
  q — 这个值决定了几何体将绕着其内部圆环旋转多少次，默认值是3。
*/</span>
<span class="token comment">// object = new THREE.Mesh(</span>
<span class="token comment">//   new THREE.TorusKnotGeometry(50, 10, 50, 20),</span>
<span class="token comment">//   material</span>
<span class="token comment">// );</span>
<span class="token comment">// object.position.set(300, 0, -200);</span>
<span class="token comment">// scene.add(object);</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function m(v,b){const a=t("ExternalLinkIcon");return p(),c("div",null,[u,r,n("p",null,[s("这里根据大佬的"),n("a",d,[s("博客"),o(a)]),s("，直接上手案例，慢慢学习。")]),k])}const g=e(l,[["render",m],["__file","index.html.vue"]]);export{g as default};
