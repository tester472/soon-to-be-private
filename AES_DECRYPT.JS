//client = import("./client.mjs")
var sblockEncrypt, twoD, twoDenc;
sblockEncrypt = ["R", "\t", "j", "\u00d5", "0", "6", "\u00a5", "8", "\u00bf", "@", "\u00a3", "\u009e", "\u0081", "\u00f3", "\u00d7", "\u00fb", "|", "\u00e3", "9", "\u0082", "\u009b", "/", "\u00ff", "\u0087", "4", "\u008e", "C", "D", "\u00c4", "\u00de", "\u00e9", "\u00cb", "T", "{", "\u0094", "2", "\u00a6", "\u00c2", "#", "=", "\u00ee", "L", "\u0095", "\u000b", "B", "\u00fa", "\u00c3", "N", "\b", ".", "\u00a1", "f", "(", "\u00d9", "$", "\u00b2", "v", "[", "\u00a2", "I", "m", "\u008b", "\u00d1", "%", "r", "\u00f8", "\u00f6", "d", "\u0086", "h", "\u0098", "\u0016", "\u00d4", "\u00a4", "\\", "\u00cc", "]", "e", "\u00b6", "\u0092", "l", "p", "H", "P", "\u00fd", "\u00ed", "\u00b9", "\u00da", "^", "\u0015", "F", "W", "\u00a7", "\u008d", "\u009d", "\u0084", "\u0090", "\u00d8", "\u00ab", "\u0000", "\u008c", "\u00bc", "\u00d3", "\n", "\u00f7", "\u00e4", "X", "\u0005", "\u00b8", "\u00b3", "E", "\u0006", "\u00d0", ",", "\u001e", "\u008f", "\u00ca", "?", "\u000f", "\u0002", "\u00c1", "\u00af", "\u00bd", "\u0003", "\u0001", "\u0013", "\u008a", "k", ":", "\u0091", "\u0011", "A", "O", "g", "\u00dc", "\u00ea", "\u0097", "\u00f2", "\u00cf", "\u00ce", "\u00f0", "\u00b4", "\u00e6", "s", "\u0096", "\u00ac", "t", "\"", "\u00e7", "\u00ad", "5", "\u0085", "\u00e2", "\u00f9", "7", "\u00e8", "\u001c", "u", "\u00df", "n", "G", "\u00f1", "\u001a", "q", "\u001d", ")", "\u00c5", "\u0089", "o", "\u00b7", "b", "\u000e", "\u00aa", "\u0018", "\u00be", "\u001b", "\u00fc", "V", ">", "K", "\u00c6", "\u00d2", "y", " ", "\u009a", "\u00db", "\u00c0", "\u00fe", "x", "\u00cd", "Z", "\u00f4", "\u001f", "\u00dd", "\u00a8", "3", "\u0088", "\u0007", "\u00c7", "1", "\u00b1", "\u0012", "\u0010", "Y", "'", "\u0080", "\u00ec", "_", "`", "Q", "\u007f", "\u00a9", "\u0019", "\u00b5", "J", "\r", "-", "\u00e5", "z", "\u009f", "\u0093", "\u00c9", "\u009c", "\u00ef", "\u00a0", "\u00e0", ";", "M", "\u00ae", "*", "\u00f5", "\u00b0", "\u00c8", "\u00eb", "\u00bb", "<", "\u0083", "S", "\u0099", "a", "\u0017", "+", "\u0004", "~", "\u00ba", "w", "\u00d6", "&", "\u00e1", "i", "\u0014", "c", "U", "!", "\f", "}"];

rows = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

key = "8FFcfdNUbAxqTQm6"
key = expandKey(key)
string = "dispite the laws of this land my heart and will aches for you. I will and always have loved you. Now more than ever"
encrypted_message = ""
messageArray = messageToArrays(string)

for( let x=0;x<messageArray.length;x++)
{
  message = messageArray[messageArrayLength - x]
  for( let i=0;i<10;i++)
  {
    message = byte_sub(message)
    message = shiftRow(message)
    message = columnMix(message)
    message = XORKey(message,key[i])
  }
  message_string = checkArray(message)
  encrypted_message += message_string
  console.log(encrypted_message)
}
console.log(encrypted_message.length,string.length,encrypted_message)

function shiftRow(twoD)
{
 cypher = new Array(4).fill(null).map(()=>new Array(4).fill(null))
 for (var i = 0;  i < 4; i += 1) {
   for (var c = 0;c < 4; c += 1) {
    cypher[i][c] = twoD[i][(c + i) % twoD[i].length];
   }
 }   
 console.log(cypher)
 return cypher
}

function columnMix(message)
{
    var FF2multiplication = [0x00,0x02,0x04,0x06,0x08,0x0a,0x0c,0x0e,0x10,0x12,0x14,0x16,0x18,0x1a,0x1c,0x1e,
      0x20,0x22,0x24,0x26,0x28,0x2a,0x2c,0x2e,0x30,0x32,0x34,0x36,0x38,0x3a,0x3c,0x3e,
      0x40,0x42,0x44,0x46,0x48,0x4a,0x4c,0x4e,0x50,0x52,0x54,0x56,0x58,0x5a,0x5c,0x5e,
      0x60,0x62,0x64,0x66,0x68,0x6a,0x6c,0x6e,0x70,0x72,0x74,0x76,0x78,0x7a,0x7c,0x7e,	
      0x80,0x82,0x84,0x86,0x88,0x8a,0x8c,0x8e,0x90,0x92,0x94,0x96,0x98,0x9a,0x9c,0x9e,
      0xa0,0xa2,0xa4,0xa6,0xa8,0xaa,0xac,0xae,0xb0,0xb2,0xb4,0xb6,0xb8,0xba,0xbc,0xbe,
      0xc0,0xc2,0xc4,0xc6,0xc8,0xca,0xcc,0xce,0xd0,0xd2,0xd4,0xd6,0xd8,0xda,0xdc,0xde,
      0xe0,0xe2,0xe4,0xe6,0xe8,0xea,0xec,0xee,0xf0,0xf2,0xf4,0xf6,0xf8,0xfa,0xfc,0xfe,
      0x1b,0x19,0x1f,0x1d,0x13,0x11,0x17,0x15,0x0b,0x09,0x0f,0x0d,0x03,0x01,0x07,0x05,
      0x3b,0x39,0x3f,0x3d,0x33,0x31,0x37,0x35,0x2b,0x29,0x2f,0x2d,0x23,0x21,0x27,0x25,
      0x5b,0x59,0x5f,0x5d,0x53,0x51,0x57,0x55,0x4b,0x49,0x4f,0x4d,0x43,0x41,0x47,0x45,
      0x7b,0x79,0x7f,0x7d,0x73,0x71,0x77,0x75,0x6b,0x69,0x6f,0x6d,0x63,0x61,0x67,0x65,
      0x9b,0x99,0x9f,0x9d,0x93,0x91,0x97,0x95,0x8b,0x89,0x8f,0x8d,0x83,0x81,0x87,0x85,
      0xbb,0xb9,0xbf,0xbd,0xb3,0xb1,0xb7,0xb5,0xab,0xa9,0xaf,0xad,0xa3,0xa1,0xa7,0xa5,
      0xdb,0xd9,0xdf,0xdd,0xd3,0xd1,0xd7,0xd5,0xcb,0xc9,0xcf,0xcd,0xc3,0xc1,0xc7,0xc5,
      0xfb,0xf9,0xff,0xfd,0xf3,0xf1,0xf7,0xf5,0xeb,0xe9,0xef,0xed,0xe3,0xe1,0xe7,0xe5]
    
      var FF3multiplication = [0x00,0x03,0x06,0x05,0x0c,0x0f,0x0a,0x09,0x18,0x1b,0x1e,0x1d,0x14,0x17,0x12,0x11,
      0x30,0x33,0x36,0x35,0x3c,0x3f,0x3a,0x39,0x28,0x2b,0x2e,0x2d,0x24,0x27,0x22,0x21,
      0x60,0x63,0x66,0x65,0x6c,0x6f,0x6a,0x69,0x78,0x7b,0x7e,0x7d,0x74,0x77,0x72,0x71,
      0x50,0x53,0x56,0x55,0x5c,0x5f,0x5a,0x59,0x48,0x4b,0x4e,0x4d,0x44,0x47,0x42,0x41,
      0xc0,0xc3,0xc6,0xc5,0xcc,0xcf,0xca,0xc9,0xd8,0xdb,0xde,0xdd,0xd4,0xd7,0xd2,0xd1,
      0xf0,0xf3,0xf6,0xf5,0xfc,0xff,0xfa,0xf9,0xe8,0xeb,0xee,0xed,0xe4,0xe7,0xe2,0xe1,
      0xa0,0xa3,0xa6,0xa5,0xac,0xaf,0xaa,0xa9,0xb8,0xbb,0xbe,0xbd,0xb4,0xb7,0xb2,0xb1,
      0x90,0x93,0x96,0x95,0x9c,0x9f,0x9a,0x99,0x88,0x8b,0x8e,0x8d,0x84,0x87,0x82,0x81,	
      0x9b,0x98,0x9d,0x9e,0x97,0x94,0x91,0x92,0x83,0x80,0x85,0x86,0x8f,0x8c,0x89,0x8a,
      0xab,0xa8,0xad,0xae,0xa7,0xa4,0xa1,0xa2,0xb3,0xb0,0xb5,0xb6,0xbf,0xbc,0xb9,0xba,
      0xfb,0xf8,0xfd,0xfe,0xf7,0xf4,0xf1,0xf2,0xe3,0xe0,0xe5,0xe6,0xef,0xec,0xe9,0xea,	
      0xcb,0xc8,0xcd,0xce,0xc7,0xc4,0xc1,0xc2,0xd3,0xd0,0xd5,0xd6,0xdf,0xdc,0xd9,0xda,	
      0x5b,0x58,0x5d,0x5e,0x57,0x54,0x51,0x52,0x43,0x40,0x45,0x46,0x4f,0x4c,0x49,0x4a,
      0x6b,0x68,0x6d,0x6e,0x67,0x64,0x61,0x62,0x73,0x70,0x75,0x76,0x7f,0x7c,0x79,0x7a,	
      0x3b,0x38,0x3d,0x3e,0x37,0x34,0x31,0x32,0x23,0x20,0x25,0x26,0x2f,0x2c,0x29,0x2a,
      0x0b,0x08,0x0d,0x0e,0x07,0x04,0x01,0x02,0x13,0x10,0x15,0x16,0x1f,0x1c,0x19,0x1a]


    var cypher = new Array(4).fill(null).map(()=>new Array(4).fill(null))
    for (var i = 0; i < 4; i += 1) {
       
            cypher[i][0] =FF2multiplication[message[i][0]] ^ FF3multiplication[message[i][1]]^message [i][2]^message[i][3];
            cypher[i][1] = message[i][0] ^ FF2multiplication[message[i][1]] ^ FF3multiplication[message[i][2]] ^ message[i][3];
            cypher[i][2] = message[i][0] ^ message[i][1] ^ FF2multiplication[message[i][2]] ^ FF3multiplication[message[i][3]];
            cypher[i][3] = FF3multiplication[message[i][0]] ^ message[i][1] ^ message[i][2]^ FF2multiplication[message[i][3]];
  }
  return cypher
}

function byte_sub(message){
  sblockEncrypt = [0x63,0x7c,0x77,0x7b,0xf2,0x6b,0x6f,0xc5,0x30,0x01,0x67,0x2b,0xfe,0xd7,0xab,0x76,
    0xca,0x82,0xc9,0x7d,0xfa,0x59,0x47,0xf0,0xad,0xd4,0xa2,0xaf,0x9c,0xa4,0x72,0xc0,
    0xb7,0xfd,0x93,0x26,0x36,0x3f,0xf7,0xcc,0x34,0xa5,0xe5,0xf1,0x71,0xd8,0x31,0x15,
    0x04,0xc7,0x23,0xc3,0x18,0x96,0x05,0x9a,0x07,0x12,0x80,0xe2,0xeb,0x27,0xb2,0x75,
    0x09,0x83,0x2c,0x1a,0x1b,0x6e,0x5a,0xa0,0x52,0x3b,0xd6,0xb3,0x29,0xe3,0x2f,0x84,
    0x53,0xd1,0x00,0xed,0x20,0xfc,0xb1,0x5b,0x6a,0xcb,0xbe,0x39,0x4a,0x4c,0x58,0xcf,
    0xd0,0xef,0xaa,0xfb,0x43,0x4d,0x33,0x85,0x45,0xf9,0x02,0x7f,0x50,0x3c,0x9f,0xa8,
    0x51,0xa3,0x40,0x8f,0x92,0x9d,0x38,0xf5,0xbc,0xb6,0xda,0x21,0x10,0xff,0xf3,0xd2,
    0xcd,0x0c,0x13,0xec,0x5f,0x97,0x44,0x17,0xc4,0xa7,0x7e,0x3d,0x64,0x5d,0x19,0x73,
    0x60,0x81,0x4f,0xdc,0x22,0x2a,0x90,0x88,0x46,0xee,0xb8,0x14,0xde,0x5e,0x0b,0xdb,
    0xe0,0x32,0x3a,0x0a,0x49,0x06,0x24,0x5c,0xc2,0xd3,0xac,0x62,0x91,0x95,0xe4,0x79,
    0xe7,0xc8,0x37,0x6d,0x8d,0xd5,0x4e,0xa9,0x6c,0x56,0xf4,0xea,0x65,0x7a,0xae,0x08,
    0xba,0x78,0x25,0x2e,0x1c,0xa6,0xb4,0xc6,0xe8,0xdd,0x74,0x1f,0x4b,0xbd,0x8b,0x8a,
    0x70,0x3e,0xb5,0x66,0x48,0x03,0xf6,0x0e,0x61,0x35,0x57,0xb9,0x86,0xc1,0x1d,0x9e,
    0xe1,0xf8,0x98,0x11,0x69,0xd9,0x8e,0x94,0x9b,0x1e,0x87,0xe9,0xce,0x55,0x28,0xdf,
    0x8c,0xa1,0x89,0x0d,0xbf,0xe6,0x42,0x68,0x41,0x99,0x2d,0x0f,0xb0,0x54,0xbb,0x16]
  cypher = [[],[],[],[]]
  for( let i=0;i<message.length;i++)
  {
    for( let c=0;c<4;c++)
    {
      cypher[i].push(sblockEncrypt[message[i][c]])
    }
    
  }
  return cypher
}

function XORKey(message,key)
{
  cypher = [[],[],[],[]]
  for( let i=0;i<4;i++)
  {
    for( let c=0;c<4;c++)
    {
      cypher[i].push(key[i][c].charCodeAt() ^ message[i][c] )
    }
  }

  return cypher
}

function messageToArrays(message)
{

  zeros = message.length%16
  console.log(zeros)
  for( let i=0;i<16-zeros;i++)
  {
    message += " "
  }

  messageArray = []
  for( let four=0;four<message.length/16;four++)
  {
    messageArray[four] = []
    for( let c=0;c<4;c++)
    {
      messageArray[four][c] = []
      
    }
  }
  for( let c=0;c<message.length/16;c++)
  {
    for( let x=0;x<4;x++)
    {
      for( let y=0;y<4;y++)
      {
        messageArray[c][x].push(message[c*16 + x*4 + y].charCodeAt())
      }
    }
    
  }
  return messageArray
}



function expandKey(key){
    keyArray = [[[],[],[],[]]];
    tempKey = ""
    rconArray = [1,2,4,8,16,32,64,128,27,54]    
    
    //turn the key into a usable array
    for( let i=0;i<4;i++){
        for( let c=0;c<4;c++)
        {
            keyArray[0][i].push(key[(i*4) + c])
        }
    }


    for( let round=0;round<10;round++)
    {
        keyArray.push(generateRoundKey(keyArray[round],rconArray[round]))
        
    }

    return keyArray
}

function generateRoundKey(keyArray,rconValue)
{
    rotWordArray = rotWord(keyArray[3])


    subKeyArray = byteSub(rotWordArray)


    rconTemp = rcon(subKeyArray,rconValue)

    checkArray1D(rconTemp)

    newKey = [[],[],[],[]]
    for( let i=0;i<4;i++)
    {
        newKey[0].push(String.fromCharCode(rconTemp[i].charCodeAt() ^ keyArray[0][i].charCodeAt()))
    }
    
    for( let c=1;c<4;c++)
    {
        for( let i=0;i<4;i++)
        {
            newKey[c].push(String.fromCharCode(newKey[c-1][i].charCodeAt() ^ keyArray[c][i].charCodeAt()))
        }
    }

    return newKey
}


function rotWord(keyArray)
{
    rotArray = []

    //move the different sections of the key so that (b1,b2,b3,b4) becomes (b2,b3,b4,b1)
    
    for( let c=0;c<4;c++)
    {
        rotArray.push(keyArray[(c+1)%4])
    }
    return rotArray
}

function rcon(keyArray,byte)
{
    tempArray = []
    tempArray.push(String.fromCharCode(keyArray[0].charCodeAt() ^ byte))
    for( let c=1;c<4;c++)
    {
        tempArray.push(keyArray[c])
    }
    return tempArray
}

function byteSub(keyArray)
{
    sblockEncrypt = genSBlock()
    for( let i=0;i<4;i++)
    {
        keyArray[i] = sblockEncrypt[keyArray[i].charCodeAt()]
        
    }
    return(keyArray)
}

function  checkArray(array)
{
    print = ""
    for( let i=0;i<4;i++)
    {
        for( let c=0;c<4;c++)
        {
            print += String.fromCharCode(array[i][c])
            //console.log(print)
        }
    }
    return print
}

function checkArray1D(array)
{
    print = ""
    for( let c=0;c<4;c++)
    {
        print += array[c].charCodeAt().toString(16)
    }
}

function genSBlock()
{
    sblock =  [0x63,0x7c,0x77,0x7b,0xf2,0x6b,0x6f,0xc5,0x30,0x01,0x67,0x2b,0xfe,0xd7,0xab,0x76,
        0xca,0x82,0xc9,0x7d,0xfa,0x59,0x47,0xf0,0xad,0xd4,0xa2,0xaf,0x9c,0xa4,0x72,0xc0,
        0xb7,0xfd,0x93,0x26,0x36,0x3f,0xf7,0xcc,0x34,0xa5,0xe5,0xf1,0x71,0xd8,0x31,0x15,
        0x04,0xc7,0x23,0xc3,0x18,0x96,0x05,0x9a,0x07,0x12,0x80,0xe2,0xeb,0x27,0xb2,0x75,
        0x09,0x83,0x2c,0x1a,0x1b,0x6e,0x5a,0xa0,0x52,0x3b,0xd6,0xb3,0x29,0xe3,0x2f,0x84,
        0x53,0xd1,0x00,0xed,0x20,0xfc,0xb1,0x5b,0x6a,0xcb,0xbe,0x39,0x4a,0x4c,0x58,0xcf,
        0xd0,0xef,0xaa,0xfb,0x43,0x4d,0x33,0x85,0x45,0xf9,0x02,0x7f,0x50,0x3c,0x9f,0xa8,
        0x51,0xa3,0x40,0x8f,0x92,0x9d,0x38,0xf5,0xbc,0xb6,0xda,0x21,0x10,0xff,0xf3,0xd2,
        0xcd,0x0c,0x13,0xec,0x5f,0x97,0x44,0x17,0xc4,0xa7,0x7e,0x3d,0x64,0x5d,0x19,0x73,
        0x60,0x81,0x4f,0xdc,0x22,0x2a,0x90,0x88,0x46,0xee,0xb8,0x14,0xde,0x5e,0x0b,0xdb,
        0xe0,0x32,0x3a,0x0a,0x49,0x06,0x24,0x5c,0xc2,0xd3,0xac,0x62,0x91,0x95,0xe4,0x79,
        0xe7,0xc8,0x37,0x6d,0x8d,0xd5,0x4e,0xa9,0x6c,0x56,0xf4,0xea,0x65,0x7a,0xae,0x08,
        0xba,0x78,0x25,0x2e,0x1c,0xa6,0xb4,0xc6,0xe8,0xdd,0x74,0x1f,0x4b,0xbd,0x8b,0x8a,
        0x70,0x3e,0xb5,0x66,0x48,0x03,0xf6,0x0e,0x61,0x35,0x57,0xb9,0x86,0xc1,0x1d,0x9e,
        0xe1,0xf8,0x98,0x11,0x69,0xd9,0x8e,0x94,0x9b,0x1e,0x87,0xe9,0xce,0x55,0x28,0xdf,
        0x8c,0xa1,0x89,0x0d,0xbf,0xe6,0x42,0x68,0x41,0x99,0x2d,0x0f,0xb0,0x54,0xbb,0x16]


    print = []

    for( let i=0;i<sblock.length;i++)
    {
    print.push(String.fromCharCode(sblock[i]))
    }

    return print
}