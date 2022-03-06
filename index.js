const {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
const fs = require('fs')
const hx = require('hxz-api')
const axios = require("axios")
const yts = require('yt-search')
const crypto = require('crypto')  
const request = require('request')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const moment = require('moment-timezone')
const { color, bgcolor } = require('./lib/color')
const { mediafireDl } = require('./lib/mediafire.js')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { exec, spawn, execSync } = require('child_process')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { ind } = require('./recode')

	 
//DATABASE
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const pendaftar = JSON.parse(fs.readFileSync('./database/pendaftar.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
let balance = JSON.parse(fs.readFileSync('./lib/data/balance.json'));

//GAMBAR
img1 = fs.readFileSync('./gambar/thumb.jpg')
img2 = fs.readFileSync('./gambar/fake.jpg')
let tde = fs.readFileSync('./gambar/truth.jpg')

//MODE
publik = true

//Di Bagian Sini Jangan Di Ubah
//Kalo Mau Ganti di setting.json
zeksApi = setting.ZEKSKEY
fakeyoi = ["Ray Corp."]
const simbol = setting.SIMBOLNYA
const botName = setting.BotName
const owner = setting.OwnerNumber
const ownerName = setting.OwnerName

//Kalo Error Sc nya Fix Sendiri 
//Udah Di Bilangin Jangan Di Ganti

//=================( PEMBATASAN )=================//


function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)}JAM ${pad(minutes)}MENIT ${pad(seconds)}DETIK`

}
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night??'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
 } 
        var runtime = function(seconds) {
        seconds = Number(seconds);
        var d = Math.floor(seconds / (3600 * 24));
        var h = Math.floor(seconds % (3600 * 24) / 3600);
        var m = Math.floor(seconds % 3600 / 60);
        var s = Math.floor(seconds % 60);
        var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
        var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
        return dDisplay + hDisplay + mDisplay + sDisplay;
        } 
  
//=================( PEMBATAS )=================//

module.exports = Lexxy = async (Lexxy, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.fromMe) return
global.prefix
global.blocked
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]
const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[.]/.test(cmd) ? cmd.match(/^[.]/gi) : '-'          	
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const ownerNumber = [`${owner}@s.whatsapp.net`]
const q = args.join(' ')
const c = args.join(' ')
const v = args.join(' ')
const botNumber = Lexxy.user.jid
const botNumberss = Lexxy.user.jid + '@c.us'
const isGroup = from.endsWith('@g.us')
let sender = isGroup ? mek.participant : mek.key.remoteJid
let _truth = JSON.parse(fs.readFileSync('./lib/data/truth.json'));
let _dare = JSON.parse(fs.readFileSync('./lib/data/dare.json'));

const isOwner = ownerNumber.includes(sender)
const totalchat = await Lexxy.chats.all()
const groupMetadata = isGroup ? await Lexxy.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false        
const isAntilink = isGroup ? antilink.includes(from) : false
const conts = mek.key.fromMe ? Lexxy.user.jid : Lexxy.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? Lexxy.user.name : conts.notify || conts.vname || conts.name || '-'
const isUser = pendaftar.includes(sender)
const isBanned = ban.includes(sender)
const isPremier = prem.includes(sender)
const totalChat = await Lexxy.chats.all()
const groups = Lexxy.chats.array.filter(v => v.jid.endsWith('g.us'))
const privat = Lexxy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
let tamnel = fs.readFileSync('./gambar/thumb.jpg')
let { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const cekcek = randomNomor(100)  

//=================( MESS ONLY )=================//

mess = {
premier: `Fitur ini Khusus User Premium!!\nKalo Mau Jadi User Premium\nSilahkan Chat Owner Ku\nWa.me/${owner}`,
wait: 'Wait a minute',
wrongFormat: 'Format salah, coba liat lagi di menu',
success: 'Success',
error: {
stick: 'Cannot access videos!',
lv: 'Invalid link!',
api: 'Error'
},
only: {
group: 'Khusus Grup ngab',
owner: 'Khusus Owner Ngab'
}
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
//=================( REPLY MESSAGE )=================//

const fakeText = (teks) => {
Lexxy.sendMessage(from, teks, text, {quoted: flexx})
}
const reply = (teks) => {
Lexxy.sendMessage(from, teks, text, {quoted: mek})
}
const fakethumb = (teks, yes) => {
Lexxy.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./gambar/fake.jpg'),quoted:mek,caption:yes})
}      
const sendMess = (hehe, teks) => {
Lexxy.sendMessage(hehe, teks, text)
}

const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? Lexxy.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Lexxy.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
}            
if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntilink) return
if (isGroupAdmins) return reply("admin bebas aowkwkww")
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
Lexxy.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}          
//=================( FAKE )=================//

//FAKE VN
const fvn = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
//FAKE TEXT
const ftext = {
key: {fromMe: true ,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fakeyoi}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}
//FAKE VIDEO
const flexx = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '-99999', 'caption': `${fakeyoi}`,'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}
//FAKE GRUP
const fgc = {
key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fakeyoi}`, 'jpegThumbnail': fs.readFileSync('./gambar/fake.jpg')}}}

//=================( SEND KONTAK )=================//

const sendKontak = (from, nomor, nama, org = "") => {
const vcard =
"BEGIN:VCARD\n" +
"VERSION:3.0\n" +
"FN:" +
nama +
"\n" +
"ORG:" +
org +
"\n" +
"TEL;type=CELL;type=VOICE;waid=" +
nomor +
":+" +
nomor +
"\n" +
"END:VCARD";
Lexxy.sendMessage(
from,
{ displayname: nama, vcard: vcard },
MessageType.contact,
{ quoted: mek }
);
};            
    
//=================( BUTTON )=================//
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Lexxy.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
Lexxy.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: mek
})
}
const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await Lexxy.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
Lexxy.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: mek,
})
}
async function sendButLoc(id, text1, desc1, gam1, but = [], options = {}) {
let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return Lexxy.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}            

//=================( STICKER )=================//

const sticOwner = (hehe) => {
ano = fs.readFileSync('./lib/sticker/owner.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticWait = (hehe) => {
ano = fs.readFileSync('./lib/sticker/wait.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticLoad = (hehe) => {
ano = fs.readFileSync('./lib/sticker/loading.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticGroup = (hehe) => {
ano = fs.readFileSync('./lib/sticker/group.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticBotAdmin = (hehe) => {
ano = fs.readFileSync('./lib/sticker/botadmin.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticBanned = (hehe) => {
ano = fs.readFileSync('./lib/sticker/banned.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}
const sticAdmin = (hehe) => {
ano = fs.readFileSync('./lib/sticker/admin.webp')
Lexxy.sendMessage(hehe, ano, sticker, { quoted: mek})
}

//=================( MEDIA URL )=================//
function _0x1f8a(){var _0x3b0963=['https://github.com/ZTakeda/RayCorp','5783876aPdIUc','450194LtiikH','2400255WCaikZ','1040GouifO','1690328vFoDVX','12116hJnXyP','29910SlhvcX','860340rvKgqZ'];_0x1f8a=function(){return _0x3b0963;};return _0x1f8a();}var _0x35a8ef=_0x5f17;function _0x5f17(_0xd5618f,_0x5064d8){var _0x1f8a64=_0x1f8a();return _0x5f17=function(_0x5f17cb,_0x4941ea){_0x5f17cb=_0x5f17cb-0x91;var _0x2fbc52=_0x1f8a64[_0x5f17cb];return _0x2fbc52;},_0x5f17(_0xd5618f,_0x5064d8);}(function(_0x1710c1,_0x5ba38f){var _0x3a070d=_0x5f17,_0x3a537f=_0x1710c1();while(!![]){try{var _0x2a229c=-parseInt(_0x3a070d(0x91))/0x1+-parseInt(_0x3a070d(0x96))/0x2+parseInt(_0x3a070d(0x92))/0x3+parseInt(_0x3a070d(0x95))/0x4*(-parseInt(_0x3a070d(0x93))/0x5)+parseInt(_0x3a070d(0x97))/0x6+parseInt(_0x3a070d(0x99))/0x7+-parseInt(_0x3a070d(0x94))/0x8;if(_0x2a229c===_0x5ba38f)break;else _0x3a537f['push'](_0x3a537f['shift']());}catch(_0x2c922c){_0x3a537f['push'](_0x3a537f['shift']());}}}(_0x1f8a,0x711a7),scb=[_0x35a8ef(0x98)]);
var _0x20e665=_0x314c;function _0x314c(_0x37cd58,_0x3a521e){var _0x4b8e56=_0x4b8e();return _0x314c=function(_0x314c41,_0x4eaac2){_0x314c41=_0x314c41-0xaa;var _0x55af95=_0x4b8e56[_0x314c41];return _0x55af95;},_0x314c(_0x37cd58,_0x3a521e);}function _0x4b8e(){var _0x27123e=['243376EBlSHk','258900wIOfcY','114TWcRlj','10096209DvrdPy','753669vUkCXH','8VkgSua','https://github.com/ZTakeda','2002557RpuVza','8153257ApajrE','98158NObccs'];_0x4b8e=function(){return _0x27123e;};return _0x4b8e();}(function(_0x594d1e,_0x15ed1c){var _0x4e0b23=_0x314c,_0x878f3d=_0x594d1e();while(!![]){try{var _0x149281=-parseInt(_0x4e0b23(0xb1))/0x1+-parseInt(_0x4e0b23(0xac))/0x2+parseInt(_0x4e0b23(0xaa))/0x3+-parseInt(_0x4e0b23(0xad))/0x4+-parseInt(_0x4e0b23(0xae))/0x5*(-parseInt(_0x4e0b23(0xaf))/0x6)+-parseInt(_0x4e0b23(0xab))/0x7+-parseInt(_0x4e0b23(0xb2))/0x8*(-parseInt(_0x4e0b23(0xb0))/0x9);if(_0x149281===_0x15ed1c)break;else _0x878f3d['push'](_0x878f3d['shift']());}catch(_0x594fb9){_0x878f3d['push'](_0x878f3d['shift']());}}}(_0x4b8e,0xb5d5d),linkyt=[_0x20e665(0xb3)]);
function _0x7d02(_0x172c43,_0x2efc01){var _0x475ee4=_0x475e();return _0x7d02=function(_0x7d026d,_0x238c6d){_0x7d026d=_0x7d026d-0xf8;var _0xdba5d2=_0x475ee4[_0x7d026d];return _0xdba5d2;},_0x7d02(_0x172c43,_0x2efc01);}function _0x475e(){var _0x38e6d2=['7KFrBYl','566vbLPoG','2185605jwxDBW','4833jNGgmR','656YKzcRx','24472360alBtlI','10272344ajtBCv','2672eOHLSC','━➤\x20「\x20𝙄𝙉𝙁𝙊\x20𝘿𝙀𝙑\x20」\x0a✍️\x20𝙎𝙘𝙧𝙞𝙥𝙩\x20𝙈𝙖𝙙𝙚\x20𝘽𝙮\x20𝙕𝙏𝙖𝙠𝙚𝙙𝙖\x0a🌟\x20𝙑𝙚𝙧𝙨𝙞𝙤𝙣\x20:\x201.0\x0a📈\x20𝙇𝙖𝙨𝙩\x20𝙐𝙥𝙙𝙖𝙩𝙚\x20:\x201.0\x0a📃\x20𝙇𝙞𝙣𝙠\x20𝙎𝙘\x20:\x20https://github.com/ZTakeda/RayCorp\x0a\x0a🔥\x20𝙎𝙥𝙚𝙨𝙞𝙖𝙡\x20𝙏𝙝𝙖𝙣𝙠𝙨\x20𝙏𝙤\x20:\x0a-Allah SWT.\x0a-Orang Tua\x0a-RGANS087\x0a-Lexxy Official\x0a-Ray Corp.\x0a\x0a🌐\x20𝙂𝙞𝙩𝙝𝙪𝙗\x20:\x0ahttps://github.com/ZTakeda\x0a\x0a𝙁𝙤𝙡𝙡𝙤𝙬\x20𝙁𝙤𝙧\x20𝙉𝙚𝙬\x20𝙐𝙥𝙙𝙖𝙩𝙚!','72UjGwJy','6435354Inhdaf','1724280XwCNVZ'];_0x475e=function(){return _0x38e6d2;};return _0x475e();}var _0x488feb=_0x7d02;(function(_0x40179c,_0x1edf3f){var _0x2eab61=_0x7d02,_0x1a3f75=_0x40179c();while(!![]){try{var _0xb5ec52=-parseInt(_0x2eab61(0x101))/0x1*(-parseInt(_0x2eab61(0xfb))/0x2)+-parseInt(_0x2eab61(0x103))/0x3*(-parseInt(_0x2eab61(0xf8))/0x4)+parseInt(_0x2eab61(0x102))/0x5+-parseInt(_0x2eab61(0xfe))/0x6+parseInt(_0x2eab61(0x100))/0x7*(parseInt(_0x2eab61(0xfa))/0x8)+-parseInt(_0x2eab61(0xfd))/0x9*(-parseInt(_0x2eab61(0xff))/0xa)+-parseInt(_0x2eab61(0xf9))/0xb;if(_0xb5ec52===_0x1edf3f)break;else _0x1a3f75['push'](_0x1a3f75['shift']());}catch(_0x1c4cb1){_0x1a3f75['push'](_0x1a3f75['shift']());}}}(_0x475e,0xc9161),dev=[_0x488feb(0xfc)]);

const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
Lexxy.sendMessage(to, media, MessageType.sticker,{quoted:mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
Lexxy.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
Lexxy.sendMessage(from, hasil, type, options).catch(e => {
Lexxy.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}            
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
Lexxy.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}

//=================( USER )=================//
   
if (isCmd && !isUser){
pendaftar.push(sender)
fs.writeFileSync('./database/pendaftar.json', JSON.stringify(pendaftar, null, 2))
}
        
//=================( CONECTION )=================//

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const troli =  {key: { fromMe: false,remoteJid: "status@broadcast", participant: '0@s.whatsapp.net'}, message: {orderMessage: {itemCount: 2022, status: 200, thumbnail: tamnel, surface: 200, message: `𝙍𝙖𝙮 𝘾𝙤𝙧𝙥.`, orderTitle: 'LordPebri', sellerJid: '0@s.whatsapp.net'} } }    
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
function _0x7f44(_0x207367,_0x5eab14){var _0x210b40=_0x210b();return _0x7f44=function(_0x7f4460,_0x51374c){_0x7f4460=_0x7f4460-0xa9;var _0x475823=_0x210b40[_0x7f4460];return _0x475823;},_0x7f44(_0x207367,_0x5eab14);}var _0x4d3b6a=_0x7f44;(function(_0x133ca6,_0x6a122a){var _0x4d0de5=_0x7f44,_0x2f4d26=_0x133ca6();while(!![]){try{var _0x28fa68=parseInt(_0x4d0de5(0xba))/0x1*(-parseInt(_0x4d0de5(0xae))/0x2)+parseInt(_0x4d0de5(0xbf))/0x3*(parseInt(_0x4d0de5(0xb8))/0x4)+parseInt(_0x4d0de5(0xbb))/0x5*(-parseInt(_0x4d0de5(0xbc))/0x6)+-parseInt(_0x4d0de5(0xb0))/0x7*(parseInt(_0x4d0de5(0xb9))/0x8)+-parseInt(_0x4d0de5(0xbd))/0x9*(parseInt(_0x4d0de5(0xb4))/0xa)+-parseInt(_0x4d0de5(0xb5))/0xb*(-parseInt(_0x4d0de5(0xb1))/0xc)+parseInt(_0x4d0de5(0xab))/0xd;if(_0x28fa68===_0x6a122a)break;else _0x2f4d26['push'](_0x2f4d26['shift']());}catch(_0x3b1f4a){_0x2f4d26['push'](_0x2f4d26['shift']());}}}(_0x210b,0xcb0f9));if(!isGroup&&isCmd)console[_0x4d3b6a(0xac)](color('[','white'),color('✿➤',_0x4d3b6a(0xbe)),color(']',_0x4d3b6a(0xb6)),color('NAMA',_0x4d3b6a(0xad)),color(pushname,_0x4d3b6a(0xaa)),color(_0x4d3b6a(0xb3),_0x4d3b6a(0xb6)),color(_0x4d3b6a(0xaf),_0x4d3b6a(0xad)),color(command,_0x4d3b6a(0xbe)),_0x4d3b6a(0xa9),color(args['length']));if(isCmd&&isGroup)console['log'](color('[',_0x4d3b6a(0xb6)),color('✿➤','lime'),color(']',_0x4d3b6a(0xb6)),color('NAMA',_0x4d3b6a(0xad)),color(pushname,'yellow'),color(_0x4d3b6a(0xb3),_0x4d3b6a(0xb6)),color('FITUR\x20:',_0x4d3b6a(0xad)),color(command,'lime'),color(_0x4d3b6a(0xb2)+groupName,_0x4d3b6a(0xaa)),_0x4d3b6a(0xa9),color(args[_0x4d3b6a(0xb7)]));function _0x210b(){var _0x30eb6e=['283160gswKDv','22hbvvVF','white','length','46256nZrKDB','856MGXHeL','42ahNBVf','10HUGTwF','4532286lIjhkR','45KiVFAG','lime','201QbJjVG','args\x20:','yellow','43043572nuuwff','log','red','22136pfKYYC','FITUR\x20:','107723xRMCey','3058356uSMjSY','Di\x20Group\x20','MENGGUNAKAN'];_0x210b=function(){return _0x30eb6e;};return _0x210b();}

if (!publik) {
if (!isOwner && !mek.key.fromMe) return
}

Lexxy.chatRead(from, "read")

//=================( CASE & MENU )=================//

switch (command) {
case 'menu':
case 'help':
mnu = `❏ *INFO BOT*
ツ Name : *${botName}*
ツ Owner : *${ownerName}*
ツ Prefix : *Multi Prefix*
ツ Mode : *${publik? "Public":"Self"}*
ツ Pengguna : ( *${pendaftar.length}* )

❏ *INFO USER*
ツ Name : *${pushname}*
ツ Tag : *@${sender.split("@")[0]}*
ツ Status : *${isOwner? "Owner👑️":"User⚔️"}*
ツ Premium : *${isPremier? "Aktif ✔":"Tidak ✘"}*

❏ *INFO CHAT*
ツ Group : ( *${groups.length}* )
ツ Private : ( *${privat.length}* )
ツ Total : ( *${totalChat.length}* )

====[ 𝗟𝗶𝘀𝘁 𝗠𝗲𝗻𝘂 ]====

❏ 𝙊𝙩𝙝𝙚𝙧𝙨
${simbol} ${prefix}infobot
${simbol} ${prefix}scbot
${simbol} ${prefix}owner
${simbol} ${prefix}donasi

❏ 𝙊𝙬𝙣𝙚𝙧
${simbol} ${prefix}self
${simbol} ${prefix}public
${simbol} ${prefix}bc <text>
${simbol} ${prefix}setfake <reply image>
${simbol} ${prefix}setreply <nama>
${simbol} ${prefix}setthumb <reply image>
${simbol} ${prefix}ban 628xxx
${simbol} ${prefix}unban 628xxx
${simbol} ${prefix}addprem 628xxx
${simbol} ${prefix}delprem 628xxx

❏ 𝙂𝙧𝙤𝙪𝙥
${simbol} ${prefix}antilink
${simbol} ${prefix}leave
${simbol} ${prefix}closegc
${simbol} ${prefix}opengc
${simbol} ${prefix}linkgrup
${simbol} ${prefix}listadmin
${simbol} ${prefix}setpp
${simbol} ${prefix}kick @tag
${simbol} ${prefix}add +628
${simbol} ${prefix}tagall
${simbol} ${prefix}hidetag
${simbol} ${prefix}demote
${simbol} ${prefix}promote
${simbol} ${prefix}delete

❏ 𝙏𝙤𝙤𝙡𝙨
${simbol} ${prefix}ttp
${simbol} ${prefix}attp
${simbol} ${prefix}dare
${simbol} ${prefix}truth
${simbol} ${prefix}sticker <reply>
${simbol} ${prefix}toimg <reply>
${simbol} ${prefix}cerpen
${simbol} ${prefix}tongue
${simbol} ${prefix}pantun

❏ 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙
${simbol} ${prefix}tiktok <link>
${simbol} ${prefix}instagram <link>
${simbol} ${prefix}ytmp3 <link>
${simbol} ${prefix}ytmp4 <link>
${simbol} ${prefix}ytplay <judul>
${simbol} ${prefix}playmp4 <judul>
${simbol} ${prefix}playmp3 <judul>
${simbol} ${prefix}mediafire <link>

❏ 𝙎𝙚𝙖𝙧𝙘𝙝
${simbol} ${prefix}waifu
${simbol} ${prefix}husbu
${simbol} ${prefix}ytsearch
${simbol} ${prefix}pinterest
${simbol} ${prefix}playstore
${simbol} ${prefix}nekonime
${simbol} ${prefix}namaninja
${simbol} ${prefix}imgsearch
${simbol} ${prefix}searchgrup

❏ 𝘾𝙖𝙣𝙫𝙖𝙨𝙇𝙤𝙜𝙤
${simbol} ${prefix}rem
${simbol} ${prefix}kaneki
${simbol} ${prefix}sadboy
${simbol} ${prefix}lolimaker
${simbol} ${prefix}girlneko

❏ 𝙍𝙖𝙣𝙙𝙤𝙢
${simbol} ${prefix}fox
${simbol} ${prefix}cat
${simbol} ${prefix}dog
${simbol} ${prefix}birb
${simbol} ${prefix}koala
${simbol} ${prefix}panda
${simbol} ${prefix}meme
${simbol} ${prefix}nickepep
${simbol} ${prefix}katailham
${simbol} ${prefix}red_panda
${simbol} ${prefix}estetikpic
${simbol} ${prefix}darkjokes
${simbol} ${prefix}memeindo
${simbol} ${prefix}katasindiran

❏ 𝙈𝙖𝙠𝙚𝙧
${simbol} ${prefix}tfire
${simbol} ${prefix}nulis
${simbol} ${prefix}tlight
${simbol} ${prefix}serti1
${simbol} ${prefix}serti2
${simbol} ${prefix}serti3
${simbol} ${prefix}gneon
${simbol} ${prefix}bneon
${simbol} ${prefix}matrix
${simbol} ${prefix}text3d
${simbol} ${prefix}sandw
${simbol} ${prefix}leavest
${simbol} ${prefix}gaming
${simbol} ${prefix}crismes
${simbol} ${prefix}lithgtext
${simbol} ${prefix}blackpink
${simbol} ${prefix}text3dbox
${simbol} ${prefix}breakwall
${simbol} ${prefix}dropwater
${simbol} ${prefix}neon_light
${simbol} ${prefix}watercolor`
mnu2 =`_*©${fakeyoi}*_`
but = [
{ buttonId: `${prefix}info`, buttonText: { displayText: '️ɪɴғᴏ' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: '️ᴏᴡɴᴇʀ' }, type: 1 },
{ buttonId: `${prefix}scbot`, buttonText: { displayText: '️ѕᴄʀɪᴘᴛ' }, type: 1 }
]
sendButLoc(from, mnu, mnu2, img1, but)
break
case 'donasi':
dns =`${(ind.donasi())}`
reply(dns)
break
case 'tes': case 'runtime':
reply(`ツ Runtime : *${runtime(process.uptime())}*`)
break
case 'hidetag':              
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
var value = body.slice(9)
var group = await Lexxy.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
Lexxy.sendMessage(from, options, text)
break
case 'demote':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `*jabatan kamu di copot*🏃 :\n`
teks += `@_.split('@')[0]`
	}
mentions(teks, mentioned, true)
Lexxy.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Yahh @${mentioned[0].split('@')[0]} Jabatan kamu sebagai leluhur di grup telah di copot🏃`, mentioned, true)
Lexxy.groupDemoteAdmin(from, mentioned)
}
break

case 'promote':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 ??𝗮??𝗴??𝘁 𝘆𝗮??𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = ''
for (let _ of mentioned) {
teks += `Yeee🥳 Kamu naik jabatan >_< :\n`
teks += `@_.split('@')[0]`
}
mentions(teks, mentioned, true)
Lexxy.groupMakeAdmin(from, mentioned)
} else {
mentions(`Selamat🥳 @${mentioned[0].split('@')[0]} *anda naik menjadi admin group* >_<`, mentioned, true)
Lexxy.groupMakeAdmin(from, mentioned)
}
break
case 'delete':
case 'del':
case 'd':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
Lexxy.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'tagall':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*#* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'add':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (args.length < 1) return reply('Yang mau di add jin ya?')
if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Lexxy.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
case 'kick':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${mentioned[0].split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Lexxy.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
Lexxy.groupRemove(from, mentioned)
}
break
case 'leave':
if (!isGroup) return sticGroup(from)
if (isGroupAdmins || isOwner) {
Lexxy.groupLeave(from)
} else {
sticAdmin(from)
}
break
case 'truth':
const truth = _truth[Math.floor(Math.random() * _truth.length)]
but = [
{ buttonId: `!dare`, buttonText: { displayText: 'dare' }, type: 1 }, { buttonId: `!truth`, buttonText: { displayText: 'truth' }, type: 1 }]
sendButImage(from, truth, `Gak Jalanin Donasi`, tde, but)  
break
case 'dare':
const dare = _dare[Math.floor(Math.random() * _dare.length)]
but = [
{ buttonId: `!dare`, buttonText: { displayText: 'dare' }, type: 1 }, { buttonId: `!truth`, buttonText: { displayText: 'truth' }, type: 1 }]
sendButImage(from, dare, `Gak Jalanin Donasi`, tde, but)  
break	
case 'ttp':
case 'attp':
if (args.length ==0)return (`Text nya mana cuy Contoh\n${prefix + command} ray`)
tp = args.join(" ")
sticWait(from)
rd = await getBuffer(`https://api.xteam.xyz/attp?file&text=${tp}`)
Lexxy.sendMessage(from,rd,sticker, {quoted: mek})
break
case 'setpp': 
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
media = await Lexxy.downloadAndSaveMediaMessage(mek)
await Lexxy.updateProfilePicture(from, media)
reply('*Sukses mengganti icon group*')
break
case 'linkgc':
case 'linkgrup':
case 'linkgroup':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) sticAdmin(from)
if (!isBotGroupAdmins) sticBotAdmin(from)
linkgc = await Lexxy.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break
case 'listadmin':
if (!isGroup) return sticGroup(from)
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'antilink':
if (!isGroup) return sticGroup(from)
if (!isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from)
if (Number(args[0]) === 1) {
if (isAntilink) return reply('Anti link group sudah aktif')
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Sukses mengaktifkan anti link group di group ini ✔️')
Lexxy.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
} else if (Number(args[0]) === 0) {
if (!isAntilink) return reply('Mode anti link group sudah disable')
antilinkgrup.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
reply('Sukes menonaktifkan anti link group di group ini ✔️')
} else {
sendButton(from, `MODE ANTILINK`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}antilink 1`,buttonText: {displayText: `ON`,},type: 1,},
{buttonId: `${prefix}antilink 0`,buttonText: {displayText: `OFF`,},type: 1,},
]
);
}
break;
case 'serti1':
case 'serti2':
case 'serti3':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0) return reply('Text Nya Mana Tod?')
txtt = args.join (" ")
sticWait(from)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
Lexxy.sendMessage(from, buff, image, { quoted: mek, caption: 'Nih Bro Hasil nya' })
break
case 'rem':
case 'kaneki':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Lexxy`)
bo = args.join(" ")
sticWait(from)
bf = await getBuffer(`https://melcanz.com/${command}?nama=${bo}&apikey=trial`)
Lexxy.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo By ZTakeda' })
break
case 'sadboy':
case 'lolimaker':
case 'girlneko':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply(`Textnya mana kak? Contoh\n${prefix + command} Lexxy OFC`)
txt1 = args[0]
txt2 = args[1]
sticWait(from)
bf = await getBuffer(`https://melcanz.com/${command}?nama=${txt1}&nama2=${txt2}&apikey=trial`)
Lexxy.sendMessage(from, bf, image, { quoted: mek, caption: 'Logo By ZTakeda' })
break
case 'toimg':
if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
sticWait(from)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Lexxy.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Yah gagal, coba ulangi ^_^')
buffer = fs.readFileSync(ran)
fakethumb(buffer,'By ZTakeda')
fs.unlinkSync(ran)
})
break
case 'tourl':
if (
((isMedia && !mek.message.videoMessage) ||
isQuotedImage ||
isQuotedVideo) &&
args.length == 0
) {
boij =
isQuotedImage || isQuotedVideo
? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
.extendedTextMessage.contextInfo
: mek;
owgi = await Lexxy.downloadMediaMessage(boij);
res = await upload(owgi);
tek = (`Type : Image\nExpired : Permanent\nServer : Telegram ph\nResult : ${res}`)
Lexxy.sendMessage(from, tek, text, {quoted: mek});
} else {
reply("kirim/reply gambar/video");
}
break;
case 'searchgrup':
if (!isPremier)return reply(mess.premier)
if (args.length < 1) return reply(`Nama Group? Contohnya\n${prefix + command} jb`)
hx.linkwa(q)
sticWait(from)
.then(result => {
let res = '*「 _LINK WA_ 」*\n\n'
for (let i of result) {
res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
case 'imgsearch':
if (!isPremier)return reply(mess.premier)
if (args.length < 1) return reply('Tolong masukan query!')
let im = await hx.chara(q)
sticWait(from)
let acak = im[Math.floor(Math.random() * im.length)]
let li = await getBuffer(acak)
await Lexxy.sendMessage(from,li,image,{quoted: mek})           
break
case 'ytsearch':
if (!isPremier)return reply(mess.premier)
if (args.length < 1) return reply('Tolong masukan query!')
var srch = args.join('');
sticWait(from)
try {
var aramas = await yts(srch);
} catch {
return await Lexxy.sendMessage(from, 'Error!', MessageType.text, dload)
}
aramat = aramas.all 
var tbuff = await getBuffer(aramat[0].image)
var ytresult = '';
ytresult += '「 *YOUTUBE SEARCH* 」'
ytresult += '\n________________________\n\n'
aramas.all.map((video) => {
ytresult += '❏ Title: ' + video.title + '\n'
ytresult += '❏ Link: ' + video.url + '\n'
ytresult += '❏ Durasi: ' + video.timestamp + '\n'
ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
});
ytresult += '◩ *SELF-BOT*'
await fakethumb(tbuff,ytresult)
break
case 'nickepep':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=IkyOgiwara`)
reply(`*Random Nick EpEp*\n${anu.result}`)
break
case 'katailham':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=IkyOgiwara`)
reply(`*Random Kata Ilham*\n${anu.result}`)
break
case 'katasindiran':
anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/skak?apikey=IkyOgiwara`)
reply(`*Random Kata Sindiran*\n${anu.result}`)
break
case 'pinterest':
if(!q) return reply(`Namanya? Contohnya\n${prefix + command} naruto`)
let pin = await hx.pinterest(q)
let ac = pin[Math.floor(Math.random() * pin.length)]
let di = await getBuffer(ac)
sticWait(from)
await Lexxy.sendMessage(from, di, image, { quoted: mek })
break
case 'setreply':
if (!isOwner) return sticOwner(from)
if (args.length ==0)return ('Text Reply Nya Mana?')
gg = args.join(" ")
fakeyoi = gg
reply(`Succes Mengganti Conversation Fake : ${q}`)
break
case 'setfake':
if (!isOwner) return sticOwner(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await Lexxy.downloadMediaMessage(boij)
fs.writeFileSync(`./gambar/fake.jpg`, delb)
reply('Sukses')
} else {
reply(`Kirim gambar dengan caption ${prefix}setfake`)
}
break	
case 'setthumb':
if (!isOwner) return sticOwner(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await Lexxy.downloadMediaMessage(boij)
fs.writeFileSync(`./gambar/thumb.jpg`, delb)
reply('Sukses')
} else {
reply(`Kirim gambar dengan caption ${prefix}setthumb`)
}
break	
case 'memeindo':
case 'darkjokes':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
sticWait(from)
zks = await fetchJson(`https://api.zeks.me/api/${command}?apikey=${zeksApi}`)
anu = zks.result
Lexxy.sendMessage(from, anu, image, { quoted: mek, caption: `*©Random ${comnand}*` })
break
case 'bneon':
case 'matrix':
case 'breakwall':
case 'gneon':
case 'dropwater':
case 'lithgtext':
case 'crismes':
case 'tfire':
case 'sandw':
case 'text3dbox':
case 'text3d':
case 'leavest':
case 'tlight':
case 'nulis':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Text nya mana?')
bp = args.join(" ")
sticWait(from)
zks = await getBuffer(`https://api.zeks.me/api/${command}?apikey=${zeksApi}&text=${bp}`)
Lexxy.sendMessage(from, zks, image, { quoted: flexx, thumbnail: fs.readFileSync('./gambar/fake.jpg')})
break
case 'blackpink':
case 'neon_light':
case 'gaming':
case 'watercolor':
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Text Nya Mana Kak?')
bo = args.join(" ")
sticWait(from)
jojo = await getBuffer(`https://docs-jojo.herokuapp.com/api/${command}?text=${bo}`)
Lexxy.sendMessage(from, jojo, image, { quoted: flexx, thumbnail: fs.readFileSync('./gambar/fake.jpg')})
break
case 'tes':
if (isBanned)return sticBanned(from)
fakeText('*STATUS BOT : ONLINE*')
break
case 'cerpen':  
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)     
anu1 = `➻ *JUDUL* : ${anu.result.title}\n`
anu1 += `➻ *PENGARANG* : ${anu.result.pengarang}\n` 
anu1 += `➻ *KATEGORI* : ${anu.result.kategori}\n`
anu1 += `➻ *CERPEN* : ${anu.result.cerpen}\n`
reply(anu1)
break            
case 'tongue':  
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
anu1 = `➻ *NIHH* : ${anu.result}`
reply(anu1)
break
case 'pantun': 
if (isBanned)return sticBanned(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
anu1 = `➻ *PANTUN* : \n${anu.result}\n` 
reply(anu1)
break 
case 'namaninja':  
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} Naruto*`)  
F = body.slice(11)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
anu1 = `➻ *NAMA* : ${anu.your_name}\n`
anu1 += `➻ *NINJA* : ${anu.result}\n`
reply(anu1)
break 
case 'fox':
case 'dog':
case 'cat':
case 'panda':
case 'red_panda':
case 'birb':
case 'koala':
case 'meme':
if (isBanned)return sticBanned(from)
sticWait(from)
anu = await fetchJson(`https://some-random-api.ml/img/${command}`)
res = await getBuffer(anu.link)
Lexxy.sendMessage(from, res, image, {caption: `*©Random ${command}*`, quoted: flexx })
break
case 'estetikpic':
if (isBanned)return sticBanned(from)
sticWait(from)
este = await getBuffer(`https://api.zeks.me/api/estetikpic?apikey=${zeksApi}`)
Lexxy.sendMessage(from, este, image, { quoted: flexx, caption: `*©Random ${command}*` })
break
case 'playstore':
if (isBanned)return sticBanned(from)
if(!c) return reply('*Mau Cari Aplikasi Apa?*')
let play = await hx.playstore(c)
let store = '\n❉─────────────────────❉\n'
for (let i of play){
store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉\n\n`
}
reply(store)
break
case 'ban':
if (!isOwner) return sticOwner(from)
bnnd = body.slice(5)
ban.push(`${bnnd}@s.whatsapp.net`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Berhasil Dibanned ✓_`)
break
case 'unban':
if (!isOwner) return sticOwner(from)
bnnd = body.slice(7)
ban.splice(`${bnnd}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
fakeText(`*@${bnnd}*\n_Telah Sukses Diunbanned ✓_`)
break
case 'addprem':
if (!isOwner) return sticOwner(from)
prmm = body.slice(9)
prem.push(`${prmm}@s.whatsapp.net`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*@${prmm}*\n_Berhasil Add User Premium ✓_`)
break
case 'delprem':
if (!isOwner) return sticOwner(from)
prmm = body.slice(9)
prem.splice(`${prmm}@s.whatsapp.ne5t`)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`*@${prmm}*\n_Berhasil Delete User Premium ✓_`)
break
case 'mediafire':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
md = fs.readFileSync('./gambar/logo/mdfire.jpg')
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error :v')
sticWait(from)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Data Berhasil Didapatkan!*
▢ Nama : ${res[0].nama}
▢ Ukuran : ${res[0].size}
▢ Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
Lexxy.sendMessage(from, md, image, {quoted: flexx, caption: result })
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
case 'nekonime':
if (isBanned)return sticBanned(from)
sticWait(from)
ini_res = await fetchJson(`https://docs-jojo.herokuapp.com/api/nekonime`)
get_res = await getBuffer(ini_res.result)
Lexxy.sendMessage(from, get_res, image, { quoted: flexx, caption: `*©Random ${command}*` })
break
case 'waifu':
if (isBanned)return sticBanned(from)
sticWait(from)
ini_res = await fetchJson(`https://docs-jojo.herokuapp.com/api/waifu2`)
get_res = await getBuffer(ini_res.img)
Lexxy.sendMessage(from, get_res, image, { quoted: flexx, caption: `*©Random ${command}*` })
break
case 'husbu':
if (isBanned)return sticBanned(from)
sticWait(from)
ini_res = await fetchJson(`https://docs-jojo.herokuapp.com/api/husbuando`)
get_res = await getBuffer(ini_res.image)
Lexxy.sendMessage(from, get_res, image, { quoted: flexx, caption: `*©Random ${command}*` })
break
case 'bc':
case 'broadcast':
if (!isOwner) return sticOwner(from)
if (args.length < 1) return reply('teks?')
anu = await Lexxy.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await Lexxy.downloadMediaMessage(encmedia)
for (let _ of anu) {
Lexxy.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break
case 'waifu':
case 'neko':
case 'blowjob':
case 'trap':
if (!isPremier)return reply(mess.premier)
sticWait(from)
anu = await fetchJson(`https://waifu.pics/api/nsfw/${command}`)
buffer = await getBuffer(anu.url)
Lexxy.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./gambar/fake.jpg')})
break
case 'public':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
publik = true
fakeText('*Sukses mengubah mode public*')
break
case 'self':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
publik = false
fakeText('*Sukses mengubah mode self*')
break
case 'sticker':
case 's':
if (isBanned)return sticBanned(from)
sticWait(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Lexxy.downloadAndSaveMediaMessage(encmedia)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
Lexxy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Lexxy.downloadAndSaveMediaMessage(encmedia)
ran = '999.webp'
sticWait(from)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
Lexxy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: flexx})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Please send a picture or reply to an image with the caption ${prefix}sticker`)
}
break
case 'ytplay':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Judul nya Mana Kak?')
bo = args.join(" ")
sticWait(from)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=${zeksApi}&q=${bo}`)
gett = ini.result
yt1 =`*Judul :* ${gett.title}\n\n*FileSize :* ${gett.size}\n*Durasi :* ${gett.duration}\n*Source :*\n${gett.source}`
yt2 =`Silahkan Pilih Type Media Di Bawah`
ytg = fs.readFileSync('./gambar/logo/ytplay.jpg')
but = [
{ buttonId: `${prefix}ply4 ${args.join(" ")}`, buttonText: { displayText: '𝘷𝘪𝘥𝘦𝘰' }, type: 1 },
{ buttonId: `${prefix}ply3 ${args.join(" ")}`, buttonText: { displayText: '️𝘮𝘶𝘴𝘪𝘬' }, type: 1 }
]
sendButLoc(from, yt1, yt2, ytg, but)
break
case 'ply4':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
bo = args.join(" ")
sticLoad(from)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=${zeksApi}&q=${bo}`)
p4 = await getBuffer(get.url_video)
Lexxy.sendMessage(from, p4, video)
break
case 'ply3':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
bo = args.join(" ")
sticLoad(from)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=${zeksApi}&q=${bo}`)
p3 = await getBuffer(get.url_audio)
Lexxy.sendMessage(from, p3, audio)
break
case 'playmp4':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Judul nya Mana Kak?')
bo = args.join(" ")
sticWait(from)
ini = await fetchJson(`https://api.zeks.me/api/ytplaymp4?apikey=${zeksApi}&q=${bo}`)
get = ini.result
ini_txt =`Judul : ${get.title}\nFileSize : ${get.size}\nSource : ${get.source}\n\n*Media Lagi Di Kirim*`
ply4 = await getBuffer(get.thumbnail)
Lexxy.sendMessage(from, ply4, image, { quoted: flexx, caption: ini_txt })
mp4 = await getBuffer(get.url_video)
sticLoad(from)
Lexxy.sendMessage(from, mp4, video)
break
case 'playmp3':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Judul nya Mana Kak?')
bo = args.join(" ")
sticWait(from)
anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?apikey=${zeksApi}&q=${bo}`)
get = anu.result
ini_txt =`*Judul* : ${get.title}\n*FileSize* : ${get.size}\n*Source* : ${get.source}\n\n*Media Lagi Di Kirim*`
ply3 = await getBuffer(get.thumbnail)
Lexxy.sendMessage(from, ply3, image, { quoted: flexx, caption: ini_txt })
mp3 = await getBuffer(get.url_audio)
sticLoad(from)
Lexxy.sendMessage(from, mp3, audio)
break
case 'owner':
sendKontak(from, `${owner}`, `${ownerName}`)
break
case "igdl": case "instagram":
if (!isUrl(args[0]) && !args[0].includes("instagram.com"))
return reply(mess.error.url);
if (!v) return reply("Linknya?");
sticWait(from)
hx.igdl(args[0]).then(async (result) => {
for (let i of result.medias) {
if (i.url.includes("mp4")) {
let link = await getBuffer(i.url);
Lexxy.sendMessage(from, link, video, {
quoted: mek
});
} else {
let link = await getBuffer(i.url);
Lexxy.sendMessage(from, link, image, {
quoted: mek
});
}
}
});
break;	
case 'ytmp4':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
sticWait(from)
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/download/ytmp4?url=${ini_link}`)
anu = ini.result
ini_txt =`*Judul* : ${anu.title}\n*Author* : ${anu.channel}\n*Publis* : ${anu.published}\n*Views* : ${anu.views}`
yt4 = fs.readFileSync('./gambar/logo/ytdown.jpg')
Lexxy.sendMessage(from, yt4, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(anu.url)
sticLoad(from)
Lexxy.sendMessage(from, res, video)
break
case 'ytmp3':
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length ==0)return reply('Link nya Mana Kak?')
ini_link = args.join(" ")
sticWait(from)
ini = await fetchJson(`https://api-yogipw.herokuapp.com/api/download/ytmp3?url=${ini_link}`)
get = ini.result
ini_txt =`*Judul* : ${get.title}\n*Author* : ${get.channel}\n*Publis* : ${get.published}\n*Views* : ${get.views}`
yt3 = fs.readFileSync('./gambar/logo/ytdown.jpg')
Lexxy.sendMessage(from, yt3, image, { quoted: mek, caption: ini_txt })
res = await getBuffer(get.url)
sticLoad(from)
Lexxy.sendMessage(from, res, audio)
break
case 'info':
dp =`${dev}`
reply(dp)
break
case 'scbot':
sc =`${scb}`
reply(sc)
break
case "closegc": 
if (!mek.key.fromMe && !isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from);
if (!isGroup) return sticGroup(from);
reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
Lexxy.groupSettingChange(from, GroupSettingChange.messageSend, true);
break; 
case "opengc":
if (!mek.key.fromMe && !isGroupAdmins) return sticAdmin(from)
if (!isBotGroupAdmins) return sticBotAdmin(from);
if (!isGroup) return sticGroup(from);
reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
Lexxy.groupSettingChange(from, GroupSettingChange.messageSend, false);
break; 
        case 'tiktoknowm':  
		            if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
 		if (!q) return reply('Linknya?')
 		sticWait(from)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
	Lexxy.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:nay,caption:me})
		})
		})
		break 

case "tt3":
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply('Link Nya Mana Kak?')
ini_link = body.slice(5)
sticLoad(from)
anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktok_audio?url=${ini_link}`)
ini = await getBuffer(anu.download)
Lexxy.sendMessage(from, ini, audio)
break

case "tt4":
if (!isPremier)return reply(mess.premier)
if (isBanned)return sticBanned(from)
if (args.length < 1) return reply('Link Nya Mana Kak?')
ini_link = body.slice(8)
sticLoad(from)
anu = await fetchJson(`https://yuzzu-api.herokuapp.com/api/tiktok?link=${ini_link}`)
ini = await getBuffer(anu.download)
Lexxy.sendMessage(from, ini, video)
break



//━━━━━━━━━━━━━━━[ AKHIR ]━━━━━━━━━━━━━━━\\
default:
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return Lexxy.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
} catch (err) {
e = String(err)
reply(e)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
}
}


	
    
