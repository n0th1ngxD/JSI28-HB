class SinhVien {
    constructor(sbd, hoten, diachi, mucuutien, khoithi) {
        this._sbd = sbd;
        this._hoten = hoten;
        this._diachi = diachi;
        this._mucuutien = mucuutien;
        this._khoithi = khoithi;
    }
}

class TuyenSinh {
    constructor(danhSach) {
        this._danhSach = danhSach;
    }

    themThiSinh(hocsinh) {
        // this._danhSach.push(sbd);
        // this._danhSach.push(SinhVien._hoten);
        let temp = {
            sbd: hocsinh._sbd,
            hoten: hocsinh._hoten,
            diachi: hocsinh._diachi,
            mucuutien: hocsinh._mucuutien,
            khoithi: hocsinh._khoithi,
        }
        this._danhSach.push(temp);
    }

    show(hocsinh) {
        return `Số báo danh: ${hocsinh._sbd}, Họ tên: ${hocsinh._hoten}, Địa chỉ: ${hocsinh._diachi}, Mức ưu tiên: ${hocsinh._mucuutien}, Khối thi: ${hocsinh._khoithi}`;
    }
}

let danhsach = [];
let quanlidanhsanh = new TuyenSinh(danhsach);

let Vu = new SinhVien(10062009, "Nguyen The Vu", "HH", "?", "A");
quanlidanhsanh.themThiSinh(Vu);
console.log(danhsach);