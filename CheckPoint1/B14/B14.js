class SinhVien {
    constructor(sbd, hoten, diachi, mucuutien) {
        this._sbd = sbd;
        this._hoten = hoten;
        this._diachi = diachi;
        this._mucuutien = mucuutien;
    }
}

class TuyenSinh {
    constructor(danhSach) {
        this._danhSach = danhSach;
    }

    themThiSinh(sbd) {
        // this._danhSach.push(sbd);
        this._danhSach.push(SinhVien.hoten);
    }
}

let danhsach = [];
let quanlidanhsanh = new TuyenSinh(danhsach);

let Vu = new SinhVien(10062009, "Nguyen The Vu", "HH", "?");
quanlidanhsanh.themThiSinh(Vu);
console.log(danhsach);