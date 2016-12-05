var toolpathsInScene = [];

function scaleSVGObject(obj, scale) {
    obj.scale.x = scale;
    obj.scale.y = scale;
    obj.scale.z = scale;
    putFileObjectAtZero(obj);
    //attachBB(obj);
}

function clearScene() {
    // From http://stackoverflow.com/questions/29417374/threejs-remove-all-together-object-from-scene - do -- not ++
    for ( var i = scene.children.length - 1; i >= 0; i--) {
        scene.remove(scene.children[i]);
    }
    scene.add(workspace);
}
