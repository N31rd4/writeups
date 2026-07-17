#  Future<Map<String, List<int>>> getflag() async {
#     final partoneData = await partone();
#     final parttwoData = await _aesService.getparttwo();
#     final partthreeKey = _nativeLib.getAESKey();
#     final partthreeIV = _nativeLib.getAESIV();

#     // Combine and slice the key and IV from each part
#     final combinedKey = [
#       ...partoneData['key']!.sublist(0, 8),
#       ...parttwoData['key']!.sublist(0, 8),
#       ...partthreeKey.sublist(0, 16)
#     ];

#     final combinedIV = [
#       ...partoneData['iv']!.sublist(0, 4),
#       ...parttwoData['iv']!.sublist(0, 4),
#       ...partthreeIV.sublist(0, 8)
#     ];

#     return {
#       "key": combinedKey,
#       "iv": combinedIV,
#     };
#   }
# }

# PART ONE

# _hardcodedKey = List<int>.generate(32, (i) => (i + 1) % 256);
# _hardcodedIV = List<int>.generate(16, (i) => (i + 10) % 256);
_hardcodedKey = [(i + 1) % 256 for i in range(32)]
_hardcodedIV = [(i + 10) % 256 for i in range(16)]

# Future<Map<String, List<int>>> partone() async {
# // Shuffle the key and IV deterministically
# final shuffledKey = _deterministicShuffle(_hardcodedKey, 5);
# final shuffledIV = _deterministicShuffle(_hardcodedIV, 3);

# List<int> _deterministicShuffle(List<int> input, int shift) {
# return List<int>.generate(input.length, (i) {
# return input[(i + shift) % input.length];
# });
# }

def _deterministicShuffle(input, shift):
    return [input[(i + shift) % len(input)] for i in range(len(input))]

shuffledKey = _deterministicShuffle(_hardcodedKey, 5)
shuffledIv = _deterministicShuffle(_hardcodedIV, 3)

partoneData = {
    'key': shuffledKey,
    'iv' :shuffledIv
}

# PART TWO
# static {
#     piecesOf piecesof = new piecesOf();
#     INSTANCE = piecesof;
#     byte[] bArr = {90, 107, 124, -115, -98, -81, -80, -63, -46, -29, -12, 5, 22, 39, 56, 73};
#     xP1 = bArr;
#     byte[] bArr2 = {26, 43, 60, 77, 94, 111, 112, -127, -110, -93, -76, -59, -42, -25, -8, 9};
#     xP2 = bArr2;
#     byte[] bArr3 = {96, Base64.padSymbol, -21, 16, 21, -54, 113, -66, 43, 115, -82, -16, -123, 125, 119, -127, 31, 53, 44, 7, 59, 97, 8, -41, 45, -104, 16, -93, 9, 20, -33, -12};
#     oB1 = bArr3;
#     byte[] bArr4 = {-96, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15};
#     oB2 = bArr4;
#     parttwo_1 = piecesof.m48tB(bArr3, bArr);
#     parttwo_2 = piecesof.m48tB(bArr4, bArr2);
# }

bArr = [90, 107, 124, -115, -98, -81, -80, -63, -46, -29, -12, 5, 22, 39, 56, 73]
bArr2 = [26, 43, 60, 77, 94, 111, 112, -127, -110, -93, -76, -59, -42, -25, -8, 9]
bArr3 = [96, 61, -21, 16, 21, -54, 113, -66, 43, 115, -82, -16, -123, 125, 119, -127, 31, 53, 44, 7, 59, 97, 8, -41, 45, -104, 16, -93, 9, 20, -33, -12]
bArr4 = [-96, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

# private final byte m47rR(byte v, int c) {
#     return (byte) ((v >> c) | (v << (8 - c)));
# }

def m47rR(v, c):
    return ((v >> c) | (v << (8 - c)))

# private final byte[] m48tB(byte[] i, byte[] p) {
#     int length = i.length;
#     byte[] bArr = new byte[length];
#     for (int i2 = 0; i2 < length; i2++) {
#         bArr[i2] = INSTANCE.m47rR((byte) (i[i2] ^ p[i2 % p.length]), 3);
#     }
#     return bArr;
# }

def m48tB(data, p):
    length = len(data)
    result = [0] * length
    for idx in range(length):
        xored = data[idx] ^ p[idx % len(p)]
        result[idx] = m47rR(xored, 3)
    return result

parttwo_1 = m48tB(bArr3, bArr)
parttwo_2 = m48tB(bArr4, bArr2)

# get_parttwo() {
#         byte[] keyFirst18 = ArraysKt.copyOfRange(piecesOf.INSTANCE.getParttwo_1(), 0, 18);
#         byte[] ivFirst18 = ArraysKt.copyOfRange(piecesOf.INSTANCE.getParttwo_2(), 0, 7);
#         return MapsKt.mapOf(Tuples3.m88to("key", keyFirst18), Tuples3.m88to("iv", ivFirst18));
#     }

parttwoData = {
    "key": parttwo_1[:18],
    "iv": parttwo_2[:7]
}

# PART 3

# uint randFunc1(uchar param_1,uint param_2)

# {
#   return ((int)(uint)param_1 >> ((byte)param_2 & 0x1f) | (uint)param_1 << (8 - (byte)param_2 & 0x1f)
#          ) & 0xff;
# }

def randFunc1(param_1, param_2):
    return (param_1 >> (param_2 & 0x1f) | param_1 << (8 - param_2 & 0x1f)) & 0xff

# void randFunc2(uchar *param_1,uchar *param_2,uchar *param_3,uint param_4)

# {
#   uchar uVar1;
#   uint local_20;
  
#   for (local_20 = 0; local_20 < param_4; local_20 = local_20 + 1) {
#     uVar1 = randFunc1(param_1[local_20] ^ param_3[local_20],3);
#     param_2[local_20] = uVar1;
#   }
#   return;
# }

def randFunc2(param_1,param_3, length):
    res = [0] * length
    for idx in range(length):
        uVar1 = randFunc1(param_1[idx] ^ param_3[idx], 3)
        res[idx] = uVar1
    return res

# undefined * partthree_1(void)

# {
#   randFunc2(&DAT_00010418,&DAT_000129a8,&DAT_00010458,0x20);
#   return &DAT_000129a8;
# }

DAT_00010418 = [ 0x02, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e, 0x0f, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f ]
DAT_00010458 = [ 0x5a, 0x6b, 0x7c, 0x8d, 0x9e, 0xaf, 0xb0, 0xc1, 0xd2, 0xe3, 0xf4, 0x05, 0x16, 0x27, 0x38, 0x49, 0x5a, 0x6b, 0x7c, 0x8d, 0x9e, 0xaf, 0xb0, 0xc1, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 ]
partthree_1 = randFunc2(DAT_00010418, DAT_00010458 , 0x20)

# undefined * partthree_2(void)

# {
#   randFunc2(&DAT_00010438,&DAT_000129c8,&DAT_00010448,0x10);
#   return &DAT_000129c8;
# }
DAT_00010438 = [ 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xab, 0xac, 0xad, 0xae, 0xaf ]
DAT_00010448 = [ 0x1a, 0x2b, 0x3c, 0x4d, 0x5e, 0x6f, 0x70, 0x81, 0x92, 0xa3, 0xb4, 0xc5, 0xd6, 0xe7, 0xf8, 0x09 ]
partthree_2 = randFunc2(DAT_00010438, DAT_00010448, 0x10)

partthreeKey = partthree_1
partthreeIV = partthree_2

# assembly

# // Combine and slice the key and IV from each part
# final combinedKey = [
#   ...partoneData['key']!.sublist(0, 8),
#   ...parttwoData['key']!.sublist(0, 8),
#   ...partthreeKey.sublist(0, 16)
# ];

# final combinedIV = [
#   ...partoneData['iv']!.sublist(0, 4),
#   ...parttwoData['iv']!.sublist(0, 4),
#   ...partthreeIV.sublist(0, 8)
# ];

# return {
#   "key": combinedKey,
#   "iv": combinedIV,
# };

combinedKey = (
    partoneData["key"][:8] +
    parttwoData["key"][:8] +
    partthreeKey[:16]
)

combinedIv = (
    partoneData["iv"][:4] +
    parttwoData["iv"][:4] +
    partthreeIV[:8]
)

def to_hex(byte_list):
    return ''.join(f'{b & 0xFF:02x}' for b in byte_list)

keys = {
    "key": to_hex(combinedKey),
    "iv": to_hex(combinedIv)
}

print(f"Key ({len(combinedKey)} bytes): {keys['key']}")
print(f"IV  ({len(combinedIv)} bytes): {keys['iv']}")