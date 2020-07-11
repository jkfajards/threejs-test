let scene, camera, renderer, car;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);
    
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight,1,5000);
 
    camera.position.y = 1;
    camera.rotation.x = -0.3;
    // camera.position.y = 0.5;
    //camera.rotation.y = 20/180*Math.PI;
    
    camera.position.z = 3;
    console.log( camera.rotation);

    let hlight = new THREE.AmbientLight(0x404040,100);
    scene.add(hlight);

    directionalLight = new THREE.DirectionalLight(0xffffff, 100);
    directionalLight.position.set(0,1,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    console.log(1);

    renderer = new THREE.WebGLRenderer({ antialias:true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let loader = new THREE.GLTFLoader();

    loader.load('./src/scene.gltf', function(gltf){
        car = gltf.scene.children[0];
        car.scale.set(0.5,0.5,0.5);
    
        scene.add(gltf.scene);
        renderer.render(scene, camera);
    
        animation();
    });

}

function animation() {
    requestAnimationFrame(animation);

    car.rotation.z -= 0.005;
    renderer.render(scene, camera);
}

init();
