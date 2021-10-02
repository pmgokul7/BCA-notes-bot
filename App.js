


const { count } = require('console')
const {Telegraf}=require('telegraf')
const {co_mod_one_part_one,co_mod_one_part_two,co_mod_one_part_three,co_mod_one_part_four,se_mod_one_part_one,se_mod_one_part_two,se_mod_one_part_three,se_mod_one_part_four,se_mod_one_part_five,se_mod_one_part_six,se_mod_one_part_seven}=require("./documents/module_one")
const {mathsmain_mod_two_pone,se_mod_two_part_one,se_mod_two_part_two,se_mod_two_part_three,se_mod_two_part_four,co_mod_two_part_one,co_mod_two_part_two, mathsmain_mod_two_ptwo, mathsmain_mod_two_pthree, mathsmain_mod_two_pfour}=require("./documents/module_two")
const {co_mod_three_part_one}=require("./documents/module_three")
const {co_mod_four_part_one}=require("./documents/module_four")
const {mathsmain_mod_five_pone, mathsmain_mod_five_ptwo, mathsmain_mod_five_pthree, mathsmain_mod_five_pfour,mathsmain_mod_five_pfive, mathsmain_mod_five_psix}=require('./documents/module_five')
const {semesterkey,subjectkey,modulekey} = require("./keyboards/semester")
const bot=new Telegraf('1963395228:AAE7Nw-6uti8uPYZ-WF7PKN4ZvY_fU0ukKI')
state={count:"sem",
subject:""
}
/////
bot.command("state",ctx=>{
    ctx.reply(state.count)
})
bot.command("sub",ctx=>{
    ctx.reply(state.subject)
})

bot.command("start",(ctx)=>{
    state.count="sem"
    ctx.reply("hai gokul welcome to the bot",semesterkey)
})
/////

bot.hears("go back",ctx=>{
    
   if(state.count=="subject")
   {
       ctx.reply("select sem",semesterkey)
       console.log(state.count);
   }
   else if(state.count=="module")
   { 
       state.count="subject"
       ctx.reply("select sub",subjectkey)
       console.log(state.count);
       
   }
})









bot.hears("sem 4",ctx=>{
    state.count="subject"
    ctx.reply("you selected semester 4",subjectkey)
})

bot.hears("CO",ctx=>{
    state.subject="CO"
    state.count="module"
    ctx.reply("CO is great"+state.subject,modulekey)
})
bot.hears("Linux",ctx=>{
    state.subject="Linux"
    state.count="module"
    ctx.reply("Linux is great",modulekey)
})
bot.hears("SE",ctx=>{
    state.subject="SE"
    state.count="module"
    ctx.reply("SE is great",modulekey)
})
bot.hears("mathematics",ctx=>{
    state.subject="mathsmain"
    state.count="module"
    ctx.reply("maths is great",modulekey)
})
//module_1
bot.hears("module 1",ctx=>{
    if(state.subject=="CO")
    {
       ctx.replyWithDocument(co_mod_one_part_one) 
       ctx.replyWithDocument(co_mod_one_part_two)
       ctx.replyWithDocument(co_mod_one_part_three)
       ctx.replyWithDocument(co_mod_one_part_four)
       

    }
    else if(state.subject=="SE")
    {
        ctx.replyWithDocument(se_mod_one_part_one)
        ctx.replyWithDocument(se_mod_one_part_two)
        ctx.replyWithDocument(se_mod_one_part_three)
        ctx.replyWithDocument(se_mod_one_part_four)
        ctx.replyWithDocument(se_mod_one_part_five)
        ctx.replyWithDocument(se_mod_one_part_six)
        ctx.replyWithDocument(se_mod_one_part_seven)

    }
    // else if(state.subject=="mathsmain")
    // {
        
    // }
    
})

//module_2


bot.hears("module 2",ctx=>{
    if(state.subject=="SE")
    {
        ctx.replyWithDocument(se_mod_two_part_one)
    ctx.replyWithDocument(se_mod_two_part_two)
        ctx.replyWithDocument(se_mod_two_part_three)
            ctx.replyWithDocument(se_mod_two_part_four)
      
    }
    else if(state.subject=="CO")
    {
        ctx.replyWithDocument(co_mod_two_part_one)
        ctx.replyWithDocument(co_mod_two_part_two)
    }
    else if(state.subject=="mathsmain")
    {
         ctx.replyWithDocument(mathsmain_mod_two_pone)
         ctx.replyWithDocument(mathsmain_mod_two_ptwo)
         ctx.replyWithDocument(mathsmain_mod_two_pthree)
         ctx.replyWithDocument(mathsmain_mod_two_pfour)
    }
  
})
//module 3
bot.hears("module 3",ctx=>{
    if(state.subject=="CO")
    {
      ctx.replyWithDocument(co_mod_three_part_one)
    }
})

//module 4
bot.hears("module 4",ctx=>{
    if(state.subject=="CO")
    {
        ctx.replyWithDocument(co_mod_four_part_one)
    }
}
)
//module 5
bot.hears("module 5",ctx=>{
    if(state.subject=="CO")
    {
       ctx.replyWithDocument(co_mod_five_part_one) 
    }
    else if(state.subject=="mathsmain")
  {
     ctx.replyWithDocument(mathsmain_mod_five_pone)
     ctx.replyWithDocument(mathsmain_mod_five_ptwo)
     ctx.replyWithDocument(mathsmain_mod_five_pthree)
     ctx.replyWithDocument(mathsmain_mod_five_pfour)
     ctx.replyWithDocument(mathsmain_mod_five_pfive)
     ctx.replyWithDocument(mathsmain_mod_five_psix)
  }
})


bot.on("document",ctx=>{
    console.log(ctx.message.document.file_name+"..."+ ctx.message.document.file_id);
})



bot.launch()


