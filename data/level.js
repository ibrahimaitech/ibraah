function _0x177f(){const _0x407c7f=['2mzcueX','error','UPDATE\x20users_rank\x20SET\x20xp\x20=\x20xp\x20+\x2010,\x20messages\x20=\x20messages\x20+\x201\x20WHERE\x20jid\x20=\x20$1','14749262GtrcPu','length','20wIcRQE','63faTZwy','query','10soafFM','dotenv','release','rows','866748AMfdvQ','647634YxlVia','exports','SELECT\x20*\x20FROM\x20users_rank\x20WHERE\x20jid\x20=\x20$1','../set','config','Erreur\x20lors\x20de\x20la\x20récupération\x20des\x20données\x20de\x20l\x27utilisateur:','SELECT\x20jid,\x20xp\x20,\x20messages\x20FROM\x20users_rank\x20ORDER\x20BY\x20xp\x20DESC\x20LIMIT\x2010','3468519eqFZWj','Erreur\x20lors\x20de\x20la\x20mise\x20à\x20jour\x20des\x20données\x20de\x20l\x27utilisateur:','278741yaLffR','Erreur\x20lors\x20de\x20la\x20récupération\x20du\x20bottom\x2010\x20des\x20utilisateurs:','464619sckxeR','connect','DATABASE_URL','329928mYeirs','Erreur\x20lors\x20de\x20la\x20création\x20de\x20la\x20table\x20users_rank:'];_0x177f=function(){return _0x407c7f;};return _0x177f();}const _0x3b5aca=_0x5d2e;function _0x5d2e(_0x45ac05,_0x4c0c1b){const _0x177ffe=_0x177f();return _0x5d2e=function(_0x5d2e26,_0xe0f093){_0x5d2e26=_0x5d2e26-0x15b;let _0xe486ec=_0x177ffe[_0x5d2e26];return _0xe486ec;},_0x5d2e(_0x45ac05,_0x4c0c1b);}(function(_0x22c97f,_0x52623a){const _0x3acf58=_0x5d2e,_0x4288cd=_0x22c97f();while(!![]){try{const _0x1dfae3=parseInt(_0x3acf58(0x177))/0x1*(-parseInt(_0x3acf58(0x161))/0x2)+parseInt(_0x3acf58(0x15c))/0x3+parseInt(_0x3acf58(0x16d))/0x4+parseInt(_0x3acf58(0x166))/0x5*(-parseInt(_0x3acf58(0x16e))/0x6)+parseInt(_0x3acf58(0x167))/0x7*(-parseInt(_0x3acf58(0x15f))/0x8)+parseInt(_0x3acf58(0x175))/0x9*(-parseInt(_0x3acf58(0x169))/0xa)+parseInt(_0x3acf58(0x164))/0xb;if(_0x1dfae3===_0x52623a)break;else _0x4288cd['push'](_0x4288cd['shift']());}catch(_0x1f5212){_0x4288cd['push'](_0x4288cd['shift']());}}}(_0x177f,0x3be61),require(_0x3b5aca(0x16a))[_0x3b5aca(0x172)]());const {Pool}=require('pg'),s=require(_0x3b5aca(0x171)),dbUrl=s[_0x3b5aca(0x15e)]?s[_0x3b5aca(0x15e)]:'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9',proConfig={'connectionString':dbUrl,'ssl':{'rejectUnauthorized':![]}},pool=new Pool(proConfig);async function createUsersRankTable(){const _0x230468=_0x3b5aca,_0x813f41=await pool[_0x230468(0x15d)]();try{await _0x813f41[_0x230468(0x168)]('\x0a\x20\x20\x20\x20\x20\x20CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20users_rank\x20(\x0a\x20\x20\x20\x20\x20\x20\x20\x20id\x20SERIAL\x20PRIMARY\x20KEY,\x0a\x20\x20\x20\x20\x20\x20\x20\x20jid\x20VARCHAR(255)\x20UNIQUE,\x0a\x20\x20\x20\x20\x20\x20\x20\x20xp\x20INTEGER\x20DEFAULT\x200,\x0a\x20\x20\x20\x20\x20\x20\x20\x20messages\x20INTEGER\x20DEFAULT\x200\x0a\x20\x20\x20\x20\x20\x20);\x0a\x20\x20\x20\x20');}catch(_0x24ef62){console['error'](_0x230468(0x160),_0x24ef62);}finally{_0x813f41['release']();}}async function ajouterOuMettreAJourUserData(_0x22bbbf){const _0x3500dd=_0x3b5aca,_0x498bfc=await pool[_0x3500dd(0x15d)]();try{const _0x33f267=await _0x498bfc[_0x3500dd(0x168)](_0x3500dd(0x170),[_0x22bbbf]),_0x58cf3a=_0x33f267[_0x3500dd(0x16c)][_0x3500dd(0x165)]>0x0;_0x58cf3a?await _0x498bfc[_0x3500dd(0x168)](_0x3500dd(0x163),[_0x22bbbf]):await _0x498bfc['query']('INSERT\x20INTO\x20users_rank\x20(jid,\x20xp,\x20messages)\x20VALUES\x20($1,\x20$2,\x20$3)',[_0x22bbbf,0xa,0x1]);}catch(_0x3c6529){console['error'](_0x3500dd(0x176),_0x3c6529);}finally{_0x498bfc[_0x3500dd(0x16b)]();}};async function getMessagesAndXPByJID(_0x56de18){const _0x1542b1=_0x3b5aca,_0x26e61b=await pool[_0x1542b1(0x15d)]();try{const _0x275e86='SELECT\x20messages,\x20xp\x20FROM\x20users_rank\x20WHERE\x20jid\x20=\x20$1',_0x2e71bf=await _0x26e61b[_0x1542b1(0x168)](_0x275e86,[_0x56de18]);if(_0x2e71bf[_0x1542b1(0x16c)][_0x1542b1(0x165)]>0x0){const {messages:_0x58c721,xp:_0x2d2579}=_0x2e71bf[_0x1542b1(0x16c)][0x0];return{'messages':_0x58c721,'xp':_0x2d2579};}else return{'messages':0x0,'xp':0x0};}catch(_0x371323){return console[_0x1542b1(0x162)](_0x1542b1(0x173),_0x371323),{'messages':0x0,'xp':0x0};}finally{_0x26e61b[_0x1542b1(0x16b)]();}}async function getBottom10Users(){const _0x586ae8=_0x3b5aca,_0x46f87e=await pool['connect']();try{const _0x5a2a65=_0x586ae8(0x174),_0x144dca=await _0x46f87e[_0x586ae8(0x168)](_0x5a2a65);return _0x144dca[_0x586ae8(0x16c)];}catch(_0x59b622){return console[_0x586ae8(0x162)](_0x586ae8(0x15b),_0x59b622),[];}finally{_0x46f87e[_0x586ae8(0x16b)]();}}createUsersRankTable(),module[_0x3b5aca(0x16f)]={'ajouterOuMettreAJourUserData':ajouterOuMettreAJourUserData,'getMessagesAndXPByJID':getMessagesAndXPByJID,'getBottom10Users':getBottom10Users};
