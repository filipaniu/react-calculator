class Volumes {

    getConeVolume(h, r) {
        return (1 / 3) * Math.PI * Math.pow(r, 2) * h;
    }
    getCylinderVolume(h, r){
        return Math.PI * Math.pow(r,2) * h;
    }
    getCubeVolume(s){
        return Math.pow(s,3);
    }
}

export default new Volumes();