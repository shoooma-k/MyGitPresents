'use strict';

{
  const MEMBERS = [
    { id: 'shoma', nickname: 'しょうま', avatar: 'IMG_4210.JPG', role: 'member',birthday: 328 },
    { id: 'ryutoku', nickname: 'りゅうとく', avatar: 'IMG_4211.JPG', role: 'member',birthday: 104 },
    { id: 'ryuji', nickname: '梅ちゃん', avatar: 'IMG_4212.JPG', role: 'member',birthday: 325 },
  ];

  // let loginLog;

  // if (localStorage.getItem('loginLog') === null) {
  //   loginLog = [];
  // } else {
  //   loginLog = JSON.parse(localStorage.getItem('loginLog'));
  // }

  let loginLog;
  try {
    const stored = JSON.parse(localStorage.getItem('loginLog'));
    loginLog = Array.isArray(stored) ? stored : [];
  } catch (e) {
    loginLog = [];
  }


  const loginPage = document.getElementById('login-page');
  const welcome = document.getElementById('welcome');
  const contentList = document.getElementById('contentList');
  const comments = document.getElementById('comments');
  const bye = document.getElementById('bye');

  loginPage.hidden = false;
  welcome.hidden = true;
  contentList.hidden = true;
  comments.hidden = true;
  bye.hidden = true;

  const close = document.getElementById('close');

  close.addEventListener('click', () => {
    document.body.classList.remove('mask');

    loginPage.hidden = true;
    bye.hidden = false;
  })


  const shoma = document.getElementById('shoma');
  const ryutoku = document.getElementById('ryutoku');
  const ryuji = document.getElementById('ryuji');

  document.querySelectorAll('.member').forEach(memberDiv => {
    memberDiv.addEventListener('click', () => {
      const clickedId = memberDiv.id;
      const member = MEMBERS.find(m => m.id === clickedId);

      const passward = Number(prompt ('あなたの誕生日は？ ※1月1日→101'));

      if (passward !== member.birthday) {
        return;
      }

      document.body.classList.remove('mask');

      const section = document.getElementById('welcome');
      const container = section.querySelector('div');

      const img = document.createElement('img');
      img.src = member.avatar;
      const h1 = document.createElement('h1');
      h1.textContent = `🎉${member.nickname}さんようこそ！🎉`;
      container.append(img, h1);

      loginPage.hidden = true;
      welcome.hidden = false;
      contentList.hidden = false;
      comments.hidden = true;

      const entry = { id: clickedId, time: new Date().toLocaleString()};
      loginLog.push(entry);
      localStorage.setItem('loginLog', JSON.stringify(loginLog));
    });
  });






  // //class=memberをクリックしたときにmaskを消して、welcome,commentを表示
  // document.querySelectorAll('.member').forEach(el => {
  //   el.addEventListener('click', onClick);
  // });

  // function onClick(e) {
  //   document.body.classList.remove('mask');

  //   loginPage.hidden = true;
  //   welcome.hidden = false;
  //   comments.hidden = false;
  // }

}