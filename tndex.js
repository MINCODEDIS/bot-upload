const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.argv.length == 2 ? process.env.token : "";
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log('열어졌어요');
  console.log('열어짐');
  client.user.setPresence({ game: { name: '설정중' }, status: 'online' })
  

});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});


client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});


  
  
 client.on('message', (message) => {
  
  if(message.content.startsWith('!전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
     
  
  if (message.content === '관리자봇님'){
    message.channel.send('네');
  }
  if (message.content === '봇님'){
    message.channel.send('네');
  }
  if (message.content === '봇'){
    message.channel.send('네');
  }
  if (message.content === '@서버시간'){
    message.channel.send('몰라요하지만오후10시에는열어져요!');
  }
  if (message.content === '@시간'){
    message.channel.send('몰라요하지만오후10시에는열어져요!');
  }
  if (message.content === '관리자봇'){
    message.channel.send('네');
  }
  if (message.content === '@도움말'){
    message.channel.send('저의서버는반야생서버입니다친절하게해드릴게요(더이상은말해드릴수없어요)');
  }
  
  if (message.content === '출저'){
    message.channel.send('출저는wldh서버(마인크래프트)입니다');
	message.channel.send('재미있는 서버?! 는제코드를주었습니다재미있는 서버?! 도저의서비스를이용합니다');
  }
  if (message.content === '심심하다'){
    message.channel.send('wldh봇도심심해요 ㅠㅠ');
	
  }
  if (message.content === '!유튜브 채널'){
    message.channel.send(' https://www.youtube.com/channel/UCMf0B39AJThcGpkft5O1gdw');
	
  }
  if (message.content === '!봇 정보'){
    message.channel.send('이봇은 node.js를 기반으로 제작한 디스코드 봇 입니다. 이 봇을 만든사람은 wldh서버(마인크래프트) 입니다');
	
  }
  if (message.content === '!영어'){
    message.channel.send('english 영어(휘핑 채널출저)');
	
  }
  
  if (message.content === '!홈페이지주소'){
    message.channel.send('https://sites.google.com/view/wldh-dot/%ED%99%88  입니다');
  }
  if (message.content === '!도움'){
    message.channel.send(' ^봇 정보=봇의정보표시 ^테스트=테스트 ^영어=영어를 표시함. ^샌즈=샌즈아시는구나 ^고마운사람=이 봇을 만들면서 고마운사람을 말합니다! ^유튜브채널=제작자의 유튜브채널. ^웹사이트=제작자의 웹사이트. ^봇 초대링크=봇초대링크(휘핑 채널출저)');
  }
  if (message.content === '!샌즈'){
    message.channel.send('샌즈아시는군아!(휘핑 채널출저)');
  }
  if (message.content === '!테스트'){
    message.channel.send('테스트!!!(휘핑 채널출저)');
  }
  if (message.content === '!고마운사람'){
    message.channel.send('없습니다');
  }
  if (message.content === '!나쁜사람'){
    message.channel.send('재미있는 서버(디스코드) !휘핑의 채널님 입니다');
  }
  if (message.content === '!공지사항(wldh)'){
    message.channel.send('```wldh봇공지사항```');
	message.channel.send('```공지를봐주셔서감사합니다```');
	message.channel.send('```게시날짜:2020년06월10일```');
	message.channel.send('```오후5~6 30분까지봇이작동이오류로인하여안됐습니다```');
	message.channel.send('```죄송합니다```');
  }
  if (message.content === 'wldh봇가져가기'){
    message.channel.send('https://discord.com/api/oauth2/authorize?client_id=705762324648165416&permissions=8&scope=bot    (이용하는대신   https://www.youtube.com/channel/UCMf0B39AJThcGpkft5O1gdw     여기가서구독하세요)');
  }
  if (message.content === '!wldh봇가져가기'){
    message.channel.send('https://discord.com/api/oauth2/authorize?client_id=705762324648165416&permissions=8&scope=bot      (이용하는대신   https://www.youtube.com/channel/UCMf0B39AJThcGpkft5O1gdw    여기가서구독하세요)');
  }
  if (message.content === '!유튜브'){
    message.channel.send(' https://www.youtube.com/channel/UCMf0B39AJThcGpkft5O1gdw');
	
  }
  if (message.content === '!채널'){
    message.channel.send(' https://www.youtube.com/channel/UCMf0B39AJThcGpkft5O1gdw');
	
  }
  if (message.content === '!해야할것'){
    message.channel.send(' https://www.youtube.com/channel/UCMf0B39AJThcGpkft5O1gdw');
	
  }
  if (message.content === '!홍보'){
    message.channel.send(' https://www.youtube.com/channel/UCMf0B39AJThcGpkft5O1gdw   로들어가구독해보세요!');
	
  }
  if (message.content === 'wldh'){
    message.channel.send('명령어:!홍보,!해야할것,!채널,!유튜브,!wldh봇가져가기,!공지사항,!고마운사람(휘핑 채널출저) ,!샌즈 (더있어요!)');
	
  }
  if (message.content === '출처'){
    message.channel.send('출저는wldh서버(마인크래프트)입니다');
	message.channel.send('재미있는 서버?! 는제코드를주었습니다재미있는 서버?! 도저의서비스를이용합니다');
  }
  if (message.content === '비밀공지다시시작알림'){
	message.channel.bulkDelete (1)
    message.channel.send('```잠시후다시시작됍니다(wldh봇)```');
	client.user.setPresence({ game: { name: '다시시작기다리는중' }, status: 'online' })
	
  }
  if (message.content === '비밀공지업데이트알림'){
	message.channel.bulkDelete (1)
    message.channel.send('```업데이트알림(wldh봇)```');
	client.user.setPresence({ game: { name: '업데이트기다리는중' }, status: 'online' })
	
  }
  if (message.content === '비밀공지켜짐알림'){
	message.channel.bulkDelete (1)
    message.channel.send('```wldh봇이켜졌습니다(wldh봇)```');
	client.user.setPresence({ game: { name: '작동중' }, status: 'online' })
	
  }
  if (message.content === '비밀공지명령어알림'){
	message.channel.bulkDelete (1)
    message.channel.send('```잠시후봇의기능이 수정,생김 때문에잠시명령어가안됄수있습니다(wldh봇)```');
	
  }
  if (message.content === 'wldh종료'){
	message.channel.bulkDelete (1)
    message.channel.send('```관리자의이해서종료중입니다```');
	
  }
  if (message.content === '비밀공지테스트시작알림'){
	message.channel.bulkDelete (1)
    message.channel.send('```테스트를합니다(wldh봇)```');
	
  }
  if (message.content === '비밀공지코딩중알림'){
	message.channel.bulkDelete (1)
    message.channel.send('```코딩중입니다(wldh봇)```');
	
  }
  if (message.content === '비밀공지코딩끝알림'){
	message.channel.bulkDelete (1)
    message.channel.send('```코딩이끝났습니다(wldh봇)```');
	
  }
  if (message.content === '시발'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이욕을하였습니다 (감지됀단어:시발)")
	
  }
  
  if (message.content === '개새끼야'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이욕을하였습니다 (감지됀단어:개새끼야)")
	
  }
  if (message.content === '개새끼'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이욕을하였습니다 (감지됀단어:개새끼)")
	
  }
  if (message.content === '이개새끼야'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이욕을하였습니다 (감지됀단어:이개새끼야)")
	
  }
  if (message.content === 'ㅄ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이wldh봇금지단어을하였습니다 (감지됀단어:ㅄ)")
	
  }
  if (message.content === 'ㅂㅅ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이wldh봇금지단어을하였습니다 (감지됀단어:ㅂㅅ)")
	
  }
  if (message.content === '슈벌'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이wldh봇금지단어을하였습니다 (감지됀단어:슈벌)")
	
  }
  if (message.content === '쯔쯔'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다  (감지됀단어:쯔쯔)")
	
  }
  if (message.content === '개못하네'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다  (감지됀단어:개못하네)")
	
  }
  if (message.content === '개못하네 ㅉㅉ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다 (감지됀단어:개못하네 ㅉㅉ)")
	
  }
  if (message.content === '진짜못하네 ㅋㅋ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다  (감지됀단어:진짜못하네 ㅋㅋ)")
	
  }
  if (message.content === 'ㅇㅉㄺ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다  (감지됀단어:ㅇㅉㄺ)")
	
  }
  if (message.content === 'ㅁㅊㄴ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:ㅁㅊㄴ)")
	
  }
  if (message.content === 'ㅁㅊㅇ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:ㅁㅊㅇ)")
	
  }
  if (message.content === 'ㅂㅂ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:ㅂㅂ)")
	
  }
  if (message.content === '쯕쯕'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:쯕쯕)")
	
  }
  if (message.content === '@windows 10'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 개발자의님네임을쳣습니다")
	
  }
  if (message.content === '쯭쯭'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:쯭쯭)")
	
  }
  if (message.content === '응아니야'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:응아니야)")
	
  }
  if (message.content === '쯧쯧'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:쯧쯧)")
	
  }
  if (message.content === '쯬쯬'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:쯬쯬)")
	
  }
  if (message.content === '쯮쯮'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:쯮쯮)")
	
  }
  if (message.content === '즣즣'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:즣즣)")
	
  }
  if (message.content === '즟즟'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:즟즟)")
	
  }
  if (message.content === '쯯쯯'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:쯯쯯)")
	
  }
  if (message.content === '쯛쯛'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:쯛쯛)")
	
  }
  if (message.content === 'ㅇㅈㄹㄱ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:ㅇㅈㄹㄱ)")
	
  }
  if (message.content === 'ㅇㅈㄺ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:ㅇㅈㄺ)")
	
  }
  if (message.content === 'ㅇㅉㄺ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:ㅇㅉㄺ)")
	
  }
  if (message.content === 'ㅇㅉㄹㄱ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:ㅇㅉㄹㄱ)")
	
  }
  if (message.content === '진짜못하네'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:진짜못하네)")
	
  }
  if (message.content === '진짜게못하네 ㅋㅋ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:진짜게못하네 ㅋㅋ)")
	
  }
  if (message.content === '진짜게못하네'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:진짜게못하네)")
	
  }
  if (message.content === '그것도모르냐? ㅉㅉ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:그것도모르냐? ㅉㅉ)")
	
  }
  if (message.content === 'ㅉㅉ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:ㅉㅉ)")
	
  }
  if (message.content === '그것도모르냐'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:그것도모르냐)")
	
  }
  if (message.content === '그것도모르냐 ㅉㅉ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:그것도모르냐 ㅉㅉ)")
	
  }
  if (message.content === '님멍청이임'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:님멍청이임)")
	
  }
  if (message.content === '이바보야'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:이바보야)")
	
  }
  if (message.content === '이바부야 ㅋㅋ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:이바보야 ㅋㅋ)")
	
  }
  if (message.content === '이바부야 ㅋㅋㅋ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:이바부야 ㅋㅋㅋ)")
	
  }
  if (message.content === '이바보야 ㅋㅋ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:이바보야 ㅋㅋ)")
	
  }
  if (message.content === '어쩔'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:어쩔)")
	
  }
    if (message.content === '어쩌라고'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:어쩌라고)")
	
  }
  if (message.content === 'ㅇㅉ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:ㅇㅉ)")
	
  }
  if (message.content === '불쌍한ㅉ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:ㅉ)")
	
  }
  if (message.content === 'ㅉ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:ㅉ)")
	
  }
  if (message.content === 'ㄷㅊ'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:ㄷㅊ)")
	
  }
  if (message.content === '닥쳐'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:닥쳐)")
	
  }
  if (message.content === '이바보야'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:이바보야)")
	
  }
  if (message.content === '난 너가 싫어'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:난 너가 싫어)")
	
  }
  if (message.content === '님멍청이임?'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:님멍청이임?)")
	
  }
  if (message.content === '멍청아'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:멍청아)")
	
  }
  if (message.content === '그것도모르냐?'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 남이들었을때기분나쁜말을하였습니다(감지됀단어:그것도모르냐?)")
	
  }
  if (message.content === '쯪쯪'){
	message.channel.bulkDelete (1)
    message.channel.send(`<@${message.author.id}> ` + "님이 금지됀말을하였습니다(감지됀단어:쯪쯪)")
	
  }
 
  
  if (message.content === '비밀공지테스트종료알림'){
	message.channel.bulkDelete (1)
    message.channel.send('```테스트가끝났습니다(wldh봇)```');
	
  }
  if (message.content === '!코로나'){
	message.channel.send('전 세계확진자:7,410,510	백만 명당 확진자 수:953		완치:확인불가 사망:418,294   대한민국확진자:12,051 	백만 명당 확진자 수:233	완치:10,691	사망:277	(2020년06월13일6시13분)');
  }
  
  
  if (message.content === '!wldh봇'){
    message.channel.send('네?');
  }
  if (message.content === '!전체채팅청소'){
	  message.channel.bulkDelete (99)
	  message.channel.send('```잠시후전체채팅청소됌니다```');
	  message.channel.send('```잠시후전체채팅청소됌니다```');
	  message.channel.bulkDelete (99)
	  message.channel.bulkDelete (99)
	  message.channel.bulkDelete (99)
	  message.channel.bulkDelete (99)
	  message.channel.bulkDelete (99)
	  message.channel.bulkDelete (99)
	  message.channel.bulkDelete (99)
	  message.channel.bulkDelete (99)
	  message.channel.bulkDelete (99)
	  message.channel.bulkDelete (99)
	  message.channel.bulkDelete (99)
	  message.channel.bulkDelete (99)
	  message.channel.bulkDelete (99)
	  message.channel.bulkDelete (99)
	  message.channel.bulkDelete (99)
	  message.channel.bulkDelete (99)
	  message.channel.bulkDelete (999)
	  message.channel.bulkDelete (999)
	  message.channel.bulkDelete (9999)
	  message.channel.bulkDelete (9999)
	  message.channel.bulkDelete (999)
	  message.channel.bulkDelete (9999)
	  message.channel.bulkDelete (9999)
	  message.channel.bulkDelete (999)
	  message.channel.bulkDelete (9999)
	  message.channel.bulkDelete (9999)
	  message.channel.send('```채팅청소됌```');
	  message.channel.send('```채팅청소가끝났습니다```');
	
	
    
  }
  if (message.content === '테스트하기wldh봇'){
    message.channel.bulkDelete (1)
    message.channel.send('```테스트를합니다(wldh봇)```');
	message.channel.send('```코딩이끝났습니다(wldh봇)```');
	message.channel.send('```코딩중입니다(wldh봇)```');
	message.channel.send('```잠시후봇의기능이 수정,생김 때문에잠시명령어가안됄수있습니다(wldh봇)```');
	message.channel.send('```wldh봇이켜졌습니다(wldh봇)```');
	message.channel.send('```업데이트알림(wldh봇)```');
	message.channel.send('```잠시후다시시작됍니다(wldh봇)```');
	message.channel.send('```테스트가끝났습니다(wldh봇)```');
  }
  if(message.content.startsWith('!wldh 청소')) {
    if(checkPermission(message)) return

    var clearLine = message.content.slice('!wldh 청소 '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 999999 < clearLine)) {
      message.channel.send("1부터 999999까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @wldh봇 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        const _limit = 10;
        let _cnt = 0;

        message.channel.fetchMessages({limit: _limit}).then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message,  parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
    }
  }
  if(message.content.startsWith('wldh봇숫자공지')) {
    if(checkPermission(message)) return

    
    var isNum = !isNaN(clearLine)

      {
	  var clearLine = message.content.slice('wldh봇숫자공지 '.length);
      message.channel.send (parseInt(clearLine) + "(wldh봇)");
	  message.channel.bulkDelete (1)
    }
  }
});
function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}
client.login('process.env.token');
