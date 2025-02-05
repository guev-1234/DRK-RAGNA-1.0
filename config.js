//#ENJOY BRO😍
// Credit: 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨 by      𝙎-𝙏𝞢𝞜
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "sandrk766@gmail.com";
global.location = "Port-au-Prince, Haiti";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null"; 
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://testbot_2m27_user:Az7LOxZBevfQ7qiZ2aKDwQ4325uumm4v@dpg-crngb4o8fa8c738fs4b0-a.oregon-postgres.render.com/testbot_2m27";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "America/Port-au-Prince";
global.github = process.env.GITHUB || "https://github.com/Bot-hostin/DRK-RAGNA-1.0";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vakp0UnICVfe3I2Fe72w";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/vRR63CN.jpeg,https://i.imgur.com/ovCfp9J.jpeg,https://i.imgur.com/edzo5dj.jpeg";
global.devs = "https://wa.me/50931461936 , https://wa.me/50931461936";
global.sudo = process.env.SUDO || "50931461936";
global.owner = process.env.OWNER_NUMBER || "50934856343";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/yBSoUuw.jpeg,https://i.imgur.com/XrUDzUl.jpeg,https://i.imgur.com/edjZiEx.jpeg,https://i.imgur.com/cdS2R7I.jpeg,https://i.imgur.com/u9FxdwH.jpeg,https://i.imgur.com/HEFIrto.jpeg,https://i.imgur.com/Fc0gIpE.jpeg,https://i.imgur.com/iaJtsma.jpeg,https://i.imgur.com/17yE9Uy.jpeg,https://i.imgur.com/ERGVvpZ.png"
global.waPresence = process.env.WAPRESENCE || " ";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://drk-tech-2.onrender.com/;
global.scan = "https://drk-tech-2.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUREOEZxalY1YkVISWg4UDBpYzQzM2JPcHdWa1BOYkdZT2dvMGVNRFBIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDRWTWh3OVoxb0NOYWpqTTNOa2N6azhTVGJOcVFtZE5rbW1JaW1SdldqZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSVY1Mm5CdVNjT2N1bGFmcEE2d1owV0dhc0NCOUZzWHZDZlE1aDBZOVhvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJL0I5eHdKVU5wS3JzL2ZJOHk5d1kxd0RvdXM3ejVTc1Y3dTV5ZUNpbHl3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZMcDg1RU5KMlB5ZjhjZHkxd0FSQkxwOU9pY2sxYWxPRGNFTkw1cXgra289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZBWWVuajJIVW01M01BVDh6VS96dk40ek9LL3lwcmVlU0FvcWZRSEMzZ1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEcxL0ZnV21hNktGeXBmdWxCb05Xd0F5UlYwdHJMb1lHeFFTVmRFb25Hbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielQ0Z2puT3BNMVc2UWU3bC9Ga0hPRnlKaGdEZzVEMTZNdUc3NC83TWEyWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR1WGRReEV2SVNSd2JvVExXVzUvNWJiQm9XdkY5RTVYa0tqNVBSNkd3RUNMcmp0MWx4OENKclIya3BwMjZ1VmdyMjVmY2FzR3JOWXB3cEcwencwREJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6Iks2VFppU3N1K2RRK2ZtUzE5d0s1VVo0YmFTU1RzMWF2enlmcEhMb0lLcEk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjZLVUpKYkZtUkE2SXRGdFJXRWkyWlEiLCJwaG9uZUlkIjoiZWZmMThlYjMtNjgzZC00M2RhLThlZmQtNjgyNjNlMTcyMjVjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJPOW5MNXB4SzhmYjZoMlhKTVpPL0ZRZ0k0UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFUkp3djFVaWl3Yy9ST3JBT2prSDlnYWM5bWc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM1RGWVY0TUoiLCJtZSI6eyJpZCI6IjUwOTM0ODU2MzQzOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Qg/CdkITwnZCVIPCdkIbwnZCU8J2QhPCdkJXwnZCE8J+VuO+4j+KdpO+4jyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnlBb2I4Q0VLYnJqYjBHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiQzBuc1RSOUlQamZrMDNDa0x1b2FpNXBuVHhGRCtidGNmRGtITUhxRlFDVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoieFVnZkEwR29NUUFRVEFtdzBSV0ZGSFkyYW1VK3NPLzlUaHpHNnF1RXM1SFB3ekRJRVpsc3FHWk5HOE11NUFoMkFUZHc2dUV3blBlam4rNFFXcGpwREE9PSIsImRldmljZVNpZ25hdHVyZSI6IlM5RXlCcXpZWU1vQ09SYWc5TjZqMjg1RlIrT3JrTXhRcWxOcEM2WFRnNWpIa2Q5RitUeDhVU0MxV29iUzlYTUxXRU5YRTVRRkJNSzhXVDM1Yng0Q0J3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5MzQ4NTYzNDM6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRdEo3RTBmU0Q0MzVOTndwQzdxR291YVowOFJRL203WEh3NUJ6QjZoVUFsIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM4NzY1NzQ5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNmTiJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨`",
  author: process.env.PACK_AUTHER || " 𝙎-𝙏𝞢𝞜",
  packname: process.env.PACK_NAME || "𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨",
  botname: process.env.BOT_NAME || "ST┘𝑫𝑹𝑲-𝑹𝑨𝑮𝑵𝑨𖤐",
  ownername: process.env.OWNER_NAME || "🌹⃟⃢👑 ĐÆ𝚪𝐊༒𝙎-𝙏𝞢𝞜🌹⃟⃢👑",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "STEN").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
