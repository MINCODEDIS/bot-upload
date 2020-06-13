const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.argv.length == 2 ? process.env.token : "";
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  client.user.setPresence({ game: { name: '설정중' }, status: 'online' })
  console.log('열어졌어요');
  console.log('열어짐');
  

});


client.on('message', message => {
  
  
  if (message.content === '관리자봇님'){
    message.channel.send('네');
  }
  if (message.content === '봇님'){
    message.channel.send('네');
  }
  if (message.content === '봇'){
    message.channel.send('네');
  }
  if (message.content === 'wldh봇설정'){
    message.channel.send('시스템정상작동');
	client.user.setPresence({ game: { name: '작동중' }, status: 'online' })
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
    message.channel.send('재미있는 서버(디스코드) !휘핑의 채널님 감사합니다(첫봇사용자)');
  }
  if (message.content === '!공지사항'){
    message.channel.send('```wldh봇공지사항```');
	message.channel.send('```공지를봐주셔서감사합니다```');
	message.channel.send('```1.잠시개발이중단됍니다```');
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
	
  }
  if (message.content === '비밀공지업데이트알림'){
	message.channel.bulkDelete (1)
    message.channel.send('```업데이트알림(wldh봇)```');
	
  }
  if (message.content === '비밀공지켜짐알림'){
	message.channel.bulkDelete (1)
    message.channel.send('```wldh봇이켜졌습니다(wldh봇)```');
	
  }
  if (message.content === '!wldh봇'){
    message.channel.send('네?');
  }
  if(message.content.startsWith('!청소(wldh봇)')) {
    if(checkPermission(message)) return

    var clearLine = message.content.slice('!청소(wldh봇) '.length);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 100까지의 숫자만 입력해주세요.")
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
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다. (이 메세지는 잠시 후에 사라집니다.)");
        })
        .catch(console.error)
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
