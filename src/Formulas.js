class Formulas {

    getConeVolume(h, r) {
        return (1 / 3) * Math.PI * Math.pow(r, 2) * h;
    }
    getConeArea(h, r) {
        const l = Math.sqrt(Math.pow(h, 2) + Math.pow(r, 2));
        return Math.PI * Math.pow(r, 2) + Math.PI * r * l;
    }
    getCylinderVolume(h, r) {
        return Math.PI * Math.pow(r, 2) * h;
    }
    getCylinderArea(h, r) {
        return 2 * Math.PI * r * (r + h);
    }
    getCubeVolume(s) {
        return Math.pow(s, 3);
    }
    getCubeArea(s) {
        return 6 * Math.pow(s, 2);
    }
}

export default new Formulas();