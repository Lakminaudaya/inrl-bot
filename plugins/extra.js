//created by @inrl
const lnn = "ANIME MAKER";
const { errorMessage, pass, inrl, config, anime, ffpack, ff1,ff2,ff3, ff4, ff5, ff6, ff7, ff8, ff9, ff10, ff11, ff12, ff13, ff14, ff15, ff16, ff17, ff18, ff19, ff20, ff21, ff22, ff23, ff24, ff25, ff26, ff27, ff28, ff29, ff30, ff31, ff32, ff33, ff34, ff35, ff36, ff37, ff38, ff39, ff40, ff41, ff42, ff43, ff44, ff45, ff46, ff47, ff48, ff49, ff50, animepack, an1, an2, an3, an4, an5, an6, an7, an8, an9, an10, an11, an12, an13, an14, an15, an16, an17, bts, robote, spiderman, tentacion, youAreBad, ansay, ch, trumb, inrlQuita, insult }  = require('../lib')
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const {getVar} = require('../lib/database/variable');
const ll ="*```Enter a word```"
const Ln = "Free Fire logo maker"
let N_T = "Need Text."
let T_L = "Text is too long."
let T_L_1 = "First text is too long."
let T_L_2 = "Secand text is too long."
let T_W = "Can use two words"
let crtPass = pass.PASS;
let passErr = pass.PERR;
let checkPass = Config.PASSWORD
console.log(crtPass);
console.log(checkPass);
let fileName = "GneratedMeme.jpeg";

inrl(
  {
    pattern: ["xxx"],
    desc: "to get randome *** images",
    sucReact: "ð¤",
    category: ["all","18+"],
    type : "18+"
  },
  async (message, client) => {
  let data = await getVar();
  let { PASSWORD, CAPTION} = data.data[0];
if(!message.client.isCreator) {
messag.reply('only for owner\nblocking yoð¤')
return await client.updateBlockStatus(message.from, "block")
}
if(!message.client.text){
if(PASSWORD!== crtPass ) return message.reply('inavlid or not enterd a valid pasword');
let ttinullimg = youAreBad(); 
const Message = {
      image: { url: ttinullimg },
      caption: CAPTION
    };
    return await client.sendMessage(message.from, Message, { quoted: message });
      }
  }
);

inrl(
  {
    pattern: ["wm"],
    desc: "it send url of wa user",
    sucReact: "ð¤",
    category: ["all","system"],
    type : "extra"
  },
  async (m, client, match) => {
let perso = m.quoted.sender ? m.quoted.sender.split("@")[0] : match
let person = perso;
if(perso.includes(':')){ person = perso.split(':')[0] } else if(perso.includes('+')){ person = perso.split('+')[1] }
await m.send(`https://wa.me/${person}`)
})
inrl(
  {
    pattern: ["npm"],
    desc: "to get infromation of given npm package",
    sucReact: "ð¤",
    category: ["all","system"],
    type : "extra"
  }, async (m, client, match) => {
  if(!match) return m.send("give me a pkg name");
  await axios.get(`https://api.npms.io/v2/search?q=${match}`).then(({ data }) => {
  let txt = data.results.map(({ package: pkg }) => `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`).join('\n\n')
  return m.send(' ' + txt + ' ')
  })
})
inrl(
  {
    pattern: ["anime"],
    desc: "to get randome anime",
    sucReact: "ð¤",
    category: ["all"],
    type : "extra"
  },
  async (message, client) => {
  let data = await getVar();
  let { PASSWORD, CAPTION} = data.data[0];
const txt = message.client.text
if(!txt){
let ttinullimg = anime(); 
const Message = {
      image: { url: ttinullimg },
      caption: CAPTION
    };
    return await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
    }
  }
);

 let dataforpack = ffpack();
 inrl({pattern: ['ffpack'], desc: Ln ,sucReact: "âï¸",  category: ["ff","all"], type : "extera" }, async (message, client) => { return await client.sendMessage(message.from, { text : dataforpack },{ quoted: message })
  });
   inrl({ pattern: ['ff01'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff1(match);
       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
 inrl({ pattern: ['ff02'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff2(match);
             let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff03'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (match === '') return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff3(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}
    });
 inrl({ pattern: ['ff04'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff4(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff05'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff5(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff06'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff6(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff07'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff7(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff08'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff8(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff09'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff9(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff10'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff10(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ffff'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff11(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff12'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff12(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff13'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff13(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff14'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff14(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff15'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff15(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff16'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff16(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff17'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff17(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff18'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff18(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff19'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff19(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff20'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff20(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff21'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff21(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff22'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff22(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff23'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff23(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff24'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff24(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff25'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff25(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff26'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff26(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff27'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff27(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
   inrl({ pattern: ['ff28'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff28(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
 inrl({ pattern: ['ff29'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff29(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
 inrl({ pattern: ['ff30'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff30(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
 inrl({ pattern: ['ff31'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff31(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
 inrl({ pattern: ['ff32'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff32(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
 inrl({ pattern: ['ff33'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff33(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff34'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff34(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
 inrl({ pattern: ['ff35'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff35(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
 inrl({ pattern: ['ff36'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff36(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
 inrl({ pattern: ['ff37'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff37(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff38'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff38(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
 inrl({ pattern: ['ff39'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff39(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
 inrl({ pattern: ['ff40'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {
        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })
        let ttinullimage = await ff40(match);
       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };
       return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
 inrl({ pattern: ['ff41'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff41(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff42'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff42(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
inrl({ pattern: ['ff43'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff43(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
 inrl({ pattern: ['ff44'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff44(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff45'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff45(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
 inrl({ pattern: ['ff46'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff46(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff47'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff47(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };


        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
  inrl({ pattern: ['ff48'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff48(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
 inrl({ pattern: ['ff49'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff49(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
 inrl({ pattern: ['ff50'], desc: "to create ff logo",sucReact: "âï¸",  category: ["ff", "logo"], type : "free-fire" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await ff50(match);

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

 });
   inrl({pattern: ['apkmod','apk'], desc: "mode apk link",sucReact: "ð",  category: ["apk","all"]}, async (message, client) => {
   if(!message.client.text){
      return await client.sendMessage(message.from, { text :'ââââââââââââââââââââ\nâã â£ï¸ *APK COMMANDS* â£ï¸ ã\nââââââââââââââââââââ\nAplicaciones Full\nâ â·ï¸ âï¸ Nova Launcher:\n     *.nova*\n\nâ â·ï¸ âï¸ CM Launcher:\n     *.cml*\n\nâ â·ï¸ âï¸ Apex Launcher:\n     *.apex*\n\n\nâ â·ï¸ âï¸ Kinemaster:\n     *.kinemaster*\n\nâ â·ï¸ âï¸ PicsArt Gold:\n     *.picsart*\n\nâ â·ï¸ âï¸ Canva Pro:\n     *.canva*\n\nâ â·ï¸ âï¸ Ligthrom:\n     *.lightroom*\n\nâ â·ï¸ âï¸ Photoshop Express:\n     *.pshop*\n\nâ â·ï¸ âï¸ Snapseed:\n     *.snaps*\n\nâ â·ï¸ âï¸ Retouch:\n     *.retouch*\n\n\nâ â·ï¸ âï¸ Vanced Manager:\n     *.vanced*\n\nâ â·ï¸ âï¸ Crunchyroll:\n     *.crunchy*\n\nâ â·ï¸ âï¸ Freezer Mod:\n     *.freez*\n\nâ â·ï¸ âï¸ Deezer Premium:\n     *.deezer*\n\nâ â·ï¸ âï¸ RadioBox:\n     *.rbox*\n\nâ â·ï¸ âï¸ Mx Player Pro:\n     *.mxpro*\n\nâ â·ï¸ âï¸ Power AMP:\n     *.amp*\n\nâ â·ï¸ âï¸ JetAudio:\n     *.jetau*\n\n\nâ â·ï¸ âï¸ ExpressVpn:\n     *.xpress*\n\nâ â·ï¸ âï¸ Hospot Shield:\n     *.hshield*\n\nâ â·ï¸ âï¸ TurboVpn:\n     *.Turbo*\n\nâ â·ï¸ âï¸ File Manager:\n     *.flmanager*\n\nâ â·ï¸ âï¸ CallRecorder:\n     *.callr*\n\nâ â·ï¸ âï¸ FingScanner:\n     *.fing*\n\nâ â·ï¸ âï¸ Shazam Encore:\n     *.shazam*\n\nâ â·ï¸ âï¸ QR Scanner Pro:\n     *.qrcode*\n\nâ â·ï¸ âï¸ Screen Recorder:\n     *.srecorder*\n\nâ â·ï¸ âï¸ TikTok Mod:\n     *.tiktok*\n\nâ â·ï¸ âï¸ Photomath:\n     *.pmath*\n\nâ â·ï¸ âï¸ WhatsApp Plus:\n     *.waplus*\n\nââââââââââââââââââââ\n  *á´á´á´á´ ÊÊ ÉªÉ´ÊÊ á´¡Éªá´Ê\nÉ´á´á´¢Éªá´-ÊÊá´* ð\nââââââââââââââââââââ\n'},{ quoted: message });
      }
});

   inrl({pattern: ['nova'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *NOVA LAUNCHER* ð¹\npremium unlocked .\nð bit.ly/drknova'},{ quoted: message });
});

   inrl({pattern: ['cml'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *CM LAUNCHER* ð¹\npremium unlocked.\nð No disponible en este momento.'},{ quoted: message });
});

   inrl({pattern: ['apex'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *APEX LAUNCHER* ð¹\npremium unlocked.\nð bit.ly/drkapex'},{ quoted: message });
});

   inrl({pattern: ['kinemaster'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *KINEMASTER MOD* ð¹\npremium unlocked.\nðhttps://bit.ly/2RSyFVr.\n pass: 3456'},{ quoted: message });
});

   inrl({pattern: ['inshot'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *INSHOT MOD* ð¹\npremium unlocked.\nðhttps://bit.ly/3zyNjlZ'},{ quoted: message });
});

   inrl({pattern: ['alight'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *ALIGHT MOTION MOD* ð¹\npremium unlocked.\nðhttps://bit.ly/3cHUBdg\n pass: 3456'},{ quoted: message });
});

   inrl({pattern: ['capcut'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *CAP CUT MOD* ð¹\npremium unlocked.\nðhttps://bit.ly/3pSSlFu'},{ quoted: message });
});
   inrl({pattern: ['picsart'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *PICSART GOLD* ð¹\npremium unlocked.\nð bit.ly/drkpicsart'},{ quoted: message });
});

   inrl({pattern: ['canva'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *CANVA PRO* ð¹\npremium unlocked.\nð bit.ly/canvapro'},{ quoted: message });
});

   inrl({pattern: ['lightr'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *LIGTHROM* ð¹\npremium unlocked.\nð bit.ly/drklightr'},{ quoted: message });
});

   inrl({pattern: ['pshop'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *PHOTOSHOP EXPRESS* ð¹\npremium unlocked.\nð bit.ly/drkphotoshop'},{ quoted: message });
});

   inrl({pattern: ['snaps'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *SNAPSEED* ð¹\npremium unlocked.\nð bit.ly/drksnaps'},{ quoted: message });
});

   inrl({pattern: ['retouch'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *RETOUCH* ð¹\npremium unlocked.\nð bit.ly/drkretouch'},{ quoted: message });
});

   inrl({pattern: ['vanced'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *VANCED MANAGER* ð¹\nyoutube vanced.\nð bit.ly/drkytubev'},{ quoted: message });
});

   inrl({pattern: ['freez'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *FREEZER MOD* ð¹\nPremium Unlocked.\nð bit.ly/drkfreezer'},{ quoted: message });
});

   inrl({pattern: ['deezer'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *DEEZER MOD* ð¹\npremium unlocked.\nð bit.ly/drkdeezer'},{ quoted: message });
});

   inrl({pattern: ['rbox'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *RADIO BOX* ð¹\npremium unlocked.\nð bit.ly/drkradiobox'},{ quoted: message });
});

   inrl({pattern: ['mxpro'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *MX PLAYER PRO* ð¹\npremium unlocked.\nâ ï¸ VersiÃ³n Premium.\nð bit.ly/drkmxplayer'},{ quoted: message });
});

   inrl({pattern: ['amp'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *POWERAMP* ð¹\npremium unlocked.\nð bit.ly/drkampplayer'},{ quoted: message });
});

   inrl({pattern: ['jetau'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *JetAudio* ð¹\npremium unlocked.\nð bit.ly/drkjetau'},{ quoted: message });
});

   inrl({pattern: ['xpress'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *EXPRESS VPN* ð¹\npremium unlocked.\nð bit.ly/drkXpress'},{ quoted: message });
});

   inrl({pattern: ['hshield'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *HOSPOT SHIELD VPN* ð¹\npremium unlocked.\nð bit.ly/drkHShield'},{ quoted: message });
});

   inrl({pattern: ['avguard'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *TURBO VPN* ð¹\npremium unlocked.\nð bit.ly/drkguard'},{ quoted: message });
});

   inrl({pattern: ['flmanager'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *FILE MANAGER* ð¹\npremium unlocked.\nð bit.ly/drkesfile'},{ quoted: message });
});

   inrl({pattern: ['callr'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *CALL RECORDER* ð¹\npremium unlocked.\nð bit.ly/drkcallr'},{ quoted: message });
});

   inrl({pattern: ['fing'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *FING SCANNER* ð¹\npremium unlocked.\nð bit.ly/drkfing'},{ quoted: message });
});

   inrl({pattern: ['shazam'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *SHAZAM ENCORE* ð¹\npremium unlocked.\nð bit.ly/drkshaz'},{ quoted: message });
});

   inrl({pattern: ['qrcode'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *QR CODE SCANER* ð¹\npremium unlocked.\nð bit.ly/drkqrscanner'},{ quoted: message });
});

   inrl({pattern: ['srecorder'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *SCREEN RECORDER* ð¹\npremium unlocked.\nð bit.ly/drkgrabr'},{ quoted: message });
});

   inrl({pattern: ['tiktok'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *TIKTOK MOD* ð¹\npremium unlocked.\nð bit.ly/drktiktok'},{ quoted: message });
});

   inrl({pattern: ['pmath'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *PHOTOMATH* ð¹\npremium unlocked.\nð bit.ly/drkphotomath'},{ quoted: message });
});

   inrl({pattern: ['waplus'], desc: "mode apk link",sucReact: "ð",  category: ["apk"], type : "apk" }, async (message, client) => {
      return await client.sendMessage(message.from, { text :'ð¹ *WHATSAPP PLUS* ð¹\nwhattsapp mod.\nð bit.ly/drkWaPlus'},{ quoted: message });
});


inrl({pattern: ['animepack'], desc: lnn ,sucReact: "ð",  category: ["logo"], type : "anime" }, (async (message, client) => {
let animeimgdat = animepack();
    return await client.sendMessage(message.from, { text :animeimgdat},{ quoted: message })
  
  }));
  
inrl({ pattern: ['anime1'], desc: lnn ,sucReact: "ð",  category: ["logo"], type : "anime" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await an1(match)

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
    
inrl({ pattern: ['anime2'], desc: lnn ,sucReact: "ð",  category: ["logo"], type : "anime" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await an2(match)

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
        
inrl({ pattern: ['anime3'], desc: lnn ,sucReact: "ð",  category: ["logo"], type : "anime" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await an3(match)

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
        
inrl({ pattern: ['anime4'], desc: lnn ,sucReact: "ð",  category: ["logo"], type : "anime" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await an4(match)

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
        
inrl({ pattern: ['anime5'], desc: lnn ,sucReact: "ð",  category: ["logo"], type : "anime" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await an5(match)

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
        
inrl({ pattern: ['anime6'], desc: lnn ,sucReact: "ð",  category: ["logo"], type : "anime" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await an6(match)

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});

inrl({ pattern: ['anime7'], desc: lnn ,sucReact: "ð",  category: ["logo"], type : "anime" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await an7(match)

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
        
inrl({ pattern: ['anime8'], desc: lnn ,sucReact: "ð",  category: ["logo"], type : "anime" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await an8(match)

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});      
        
inrl({ pattern: ['anime9'], desc: lnn ,sucReact: "ð",  category: ["logo"], type : "anime" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await an9(match)

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});        
        
inrl({ pattern: ['anime10'], desc: lnn ,sucReact: "ð",  category: ["logo"], type : "anime" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await an10(match)

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
        
inrl({ pattern: ['anime11'], desc: lnn ,sucReact: "ð",  category: ["logo"], type : "anime" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await an11(match)

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});      
        
inrl({ pattern: ['anime12'], desc: lnn ,sucReact: "ð",  category: ["logo"], type : "anime" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await an12(match)

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});

inrl({ pattern: ['anime13'], desc: lnn ,sucReact: "ð",  category: ["logo"], type : "anime" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await an13(match)

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
        
inrl({ pattern: ['anime14'], desc: lnn ,sucReact: "ð",  category: ["logo"], type : "anime" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await an14(match)

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
        
inrl({ pattern: ['anime15'], desc: lnn ,sucReact: "ð",  category: ["logo"], type : "anime" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await an15(match)

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
} 
        
    });  
        
inrl({ pattern: ['anime16'], desc: lnn ,sucReact: "ð",  category: ["logo"], type : "anime" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await an16(match)

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});      
        
inrl({ pattern: ['anime17'], desc: lnn ,sucReact: "ð",  category: ["logo"], type : "anime" }, async (message, client, match) => {
try {

        if (!match) return await client.sendMessage(message.from, { text :ll},{ quoted: message })

        let ttinullimage = await an17(match)

       let data = await getVar();
       let {CAPTION} = data.data[0];
       const Message = { image: {url:ttinullimage}, caption: CAPTION  };

        return await client.sendMessage( message.from, Message,{ quoted: message })
} catch(e){
m.reply(e.toString());
}

});
    
    inrl(
  {
    pattern: ["bts"],
    desc: "to get randome bts image",
    sucReact: "ð¤",
    category: ["all"],
    type : "extra"
  },
  async (message, client) => {
       let data = await getVar();
       let {CAPTION} = data.data[0];
const txt = message.client.text
if(!txt){
let ttinullimg = bts(); 
const Message = {
      image: { url: ttinullimg },
      caption: CAPTION
    };
    return await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
    }
  }
);
inrl(
  {
    pattern: ["tentacion"],
    desc: "to get randome anime",
    sucReact: "ð¤",
    category: ["all"],
    type : "extra"
  },
  async (message, client) => {
       let data = await getVar();
       let {CAPTION} = data.data[0];
const txt = message.client.text
if(!txt){
let ttinullimg = tentacion(); 
const Message = {
      image: { url: ttinullimg },
      caption: CAPTION
    };
    return await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
    }
  }
);
inrl(
  {
    pattern: ["robote"],
    desc: "to get randome anime",
    sucReact: "ð¤",
    category: ["all"],
    type : "extra"
  },
  async (message, client) => {
         let data = await getVar();
         let {CAPTION} = data.data[0];
const txt = message.client.text
if(!txt){
let ttinullimg = robote(); 
const Message = {
      image: { url: ttinullimg },
      caption: CAPTION
    };
    return await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
    }
  }
);
inrl(
  {
    pattern: ["spiderman"],
    desc: "to get randome anime",
    sucReact: "ð¤",
    category: ["all"],
    type : "extra"
  },
  async (message, client) => {
         let data = await getVar();
         let {CAPTION} = data.data[0];
const txt = message.client.text
if(!txt){
let ttinullimg = spiderman(); 
const Message = {
      image: { url: ttinullimg },
      caption: CAPTION
    };
    return await client.sendMessage(message.from, Message, { quoted: message });
    global.catchError = false;
    }
  }
);
   inrl({ pattern: ['an'], fromMe: true, desc: "to add " ,sucReact: "ð¹", category: ['all'],usage: '<word>',type:'image'}, async (message, client) => {
         let data = await getVar();
         let {CAPTION} = data.data[0];
         const text = message.client.text;
         if (!text) return await client.sendMessage( message.from, { text: 'Enter A weard'}, { quoted: message });
         let ttinullimage = ansay(text); 
         const Message = { image: { url:  ttinullimage }, caption: CAPTION  }; 
         return await client.sendMessage( message.from, Message,{ quoted: message })
});

    inrl({ pattern: ['ch'], fromMe: true, desc: 'just for fun' ,sucReact: "ð¹", category: ['all'],type:'image' },  async (message, client) => {
         let data = await getVar();
         let {CAPTION} = data.data[0];
         const text = message.client.text;
         if (!text) return await client.sendMessage( message.from, { text: 'Enter A weard'}, { quoted: message });
         let ttinullimage = ch(text);
         const Message = { image: { url:  ttinullimage }, caption: CAPTION  };
         return await client.sendMessage( message.from, Message,{ quoted: message })
});

    inrl({ pattern: ['tr'], fromMe: true, desc: 'funny trumb Twitter post' ,sucReact: "ð¹", category: ['all'],usage: '<word>',type:'image'} , async (message, client) => {
         let data = await getVar();
         let {CAPTION} = data.data[0];
         const text = message.client.text;
         if (!text) return await client.sendMessage( message.from, { text: 'Enter A weard'}, { quoted: message });
         let ttinullimage = trumb(text);
         const Message = { image: { url:  ttinullimage }, caption: CAPTION };
         return await client.sendMessage( message.from, Message,{ quoted: message })
});

const maker = require("mumaker");
inrl( { pattern: ["p1"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-blackpink-logo-style-online-1001.html', [texts, txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p2"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-art-paper-cut-text-effect-online-1022.html', [texts, txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p3"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html', [texts, txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p4"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p5"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p6"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p7"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-wolf-logo-galaxy-online-936.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p8"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p9"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-3d-avengers-logo-online-974.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p10"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/neon-text-effect-online-879.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p11"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/thunder-text-effect-online-881.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p12"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-logo-joker-online-934.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p13"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-ninja-logo-online-935.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p14"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/advanced-glow-text-effect-873.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p15"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/bokeh-text-effect-876.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p16"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-logo-style-marvel-studios-online-971.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p17"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p18"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p19"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p20"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-lion-logo-mascot-online-938.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p21"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/neon-text-effect-online-963.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p22"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/ice-cold-text-effect-862.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p23"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-space-3d-text-effect-online-985.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p24"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p25"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p26"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p27"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p28"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p29"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["p30"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-thunder-text-effect-online-881.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["heart"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});inrl( { pattern: ["summer"], sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
  if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
  if (message.client.text.length >= 22) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
let data = await getVar();
let {BOT_INFO} = data.data[0]
let text = message.client.text;
let text1, text2;
if (text.includes(',')) {  let split = text.split(',');text1 = split[0];text2 = split[1];  }
         let texts = text1 || text;
         let txt = text2 || BOT_INFO.split(',')[0];
  await maker.textpro('https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html', [texts,txt])
  .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
  .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
});
config.api.textpro.takes1.map(logo => {
  const { pattern, textLenth, id } = logo; 
  const url = config.api.textpro.domain + id;
  inrl( { pattern, sucReact: "ð", category: ['logo'], usage: '<word>',type :'logo-menu' }, async (message, client) => {
    if (!message.client.args[0]) {  return await client.sendMessage( message.from, { text: message.reply(N_T) }, { quoted: message } ); };
    if (message.client.text.length >= textLenth) {  return await client.sendMessage( message.from, { text: message.reply(T_L) }, { quoted: message } ); };
    await maker.textpro( url, [message.client.text, 'inrl'])
    .then( async (data) => {  return await client.sendMessage( message.from, { image: { url: data }, caption: CAPTION }, { quoted: message }); })
    .catch( async (err) => {  return await client.sendErrorMessage( message.from, err, message.key, message ); });
  });
});
inrl({pattern: ['inrl'], desc: "to check i cmds", sucReact: "ð", category: ['all'],type : "quita"},   async (message, client) => {
	  const txts =await inrlQuita();
return await client.sendMessage( message.from, { text:'```'+ "ð"+ txts+'```' },{ quoted: message });
});
inrl({pattern: ['ð¥²',"ð¦","ð¥º","ð","ð","ð¤§","ð","ð","ð¤¥","ð¥´","ð","ð","ð¢"], desc : "for und",sucReact: "ð", category: ['ibot'], type : "insult" },async (message, client) => {
   if(!message.client.isCreator && !message.isGroup){
   const texts = await insult();
   return await client.sendMessage( message.from, { text : "ð¹"+texts },{ quoted: message });
}});