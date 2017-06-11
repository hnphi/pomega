function SendMsg(a) {
    this.len = 0;
    this.dataView = new DataView(new ArrayBuffer(a));
    this.writeUInt8 = function(a) {
        this.dataView.setUint8(this.len, a);
        this.len += 1
    };
    this.writeInt8 = function(a) {
        this.dataView.setInt8(this.len, a, !1);
        this.len += 1
    };
    this.writeUInt16 = function(a) {
        this.dataView.setUint16(this.len, a, !1);
        this.len += 2
    };
    this.writeInt16 = function(a) {
        this.dataView.setInt16(this.len, a, !1);
        this.len += 2
    };
    this.writeUInt32 = function(a) {
        this.dataView.setUint32(this.len, a, !1);
        this.len += 4
    };
    this.writeString = function(a) {
        a = encode_utf8(a);
        var len = a.length;
        this.writeUInt16(a.length);
        for (var c = 0; c < len; c++) this.writeUInt8(a.charCodeAt(c))
    }
};