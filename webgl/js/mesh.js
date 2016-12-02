
function Mesh(x, y, z, col) {
    this.object = new THREE.Mesh(
        new THREE.BoxGeometry(x, y, z),
        new THREE.MeshLambertMaterial({ color: col })
    );

    this.intersects = function (mesh) {
        return new THREE.Box3().setFromObject(this.object)
                .intersectsBox(new THREE.Box3().setFromObject(mesh.object));
    }
}
