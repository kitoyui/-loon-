/*
 *
 *
脚本功能：
软件版本：6.2.30
下载地址：
脚本作者：**
更新时间：2024-6.12
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]

# > 咪咕视频Vip会员
^https?:\/\/(play|dis).*miguvideo.com\/(play|dis)(url|play)\/.*$ url script-response-body https://raw.githubusercontent.com/WeiGiegie/666/main/mgsp.js
^https?:\/\/play.miguvideo.com\/playurl\/v1\/play\/playurl\?2Kvivid=true?.*=true$ url script-request-header https://raw.githubusercontent.com/WeiGiegie/666/main/mgspck.js
# > 开屏广告
^https://.*miguvideo\.com/request/sdk url reject-200
^https://common-sc\.miguvideo\.com/task/v7/task-list/cmvideo/visitor url reject-200

[mitm] 
hostname = *.miguvideo.com

*
*
*/












/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', vynvy = '__0x11c6f1',  __0x11c6f1=['PHJ5IsK0','w7YBLMKsMQ==','f8OQwqE=','wqttw4o=','KXd7KMK0woc9dhHDtsOvwrwsTcKTwoM=','DlUUVjbCiMKtNcK+w5tsQSVNcjHDhQANw6BLLwYII0rCqcKccF93QmrCq8KVw4tQwr7DoEfDi8KGw6/CtsKOcXhvc2TDngnCjl0NHQRXAsO+wrxS','Am3DlMKE','NURZwrYk','w63Diw4gw58=','QsOIwo7Ctlk=','fcO/wqkFw74=','WMOVwrcRUQ==','QChjU8KNw47Dg1wkwqDClMOQw78/woJm','w5jCjiJ+wos6w5HCrG/ClQLDtsO8w53DnhPDuHTDimjCmQ1vwoLCtsK6Q8OmZz0jwoQqw4p4wpQ3BcOxeMOhw4rCtkXCg1g7C03DhMKhOcKNfsOuN23CgcKrWMOww6c=','wqlsGcKu','wqrCtMKeY8OB','w67CkRjDvsOu','wr4sw4w=','wqvCkMOB','ay51','YcOAw40=','HcKZWMODaQ==','wojDvMO/Ji0=','DUZAGMKs','wpjCmcKHUsOD','wrkyw7JSwpg=','AF/DrMKmWg==','NEVrw5Iq','R8OTwq3ChFE=','O2dmPw==','FUB1NsOy','TsO9fBE6','wo85H8OS','w7XCtSvDpsOA','bT5eGB4=','wozDrsOhBTI=','GkN6LMO+','wpEsw5FawoA=','w6TCn0rCsV8=','woEaw51dwpE=','woLDh8OHDzs=','w7kjw7cALA==','O2E9aMOE','w4DCmsKYwq5i','woUuw6XDuMOA','L3lOw4A=','w4MRMFgR','HwgZPkc=','wqY/w75i','wrPDucONEQ4=','wp4SLsOLwoY=','wpVlFsKOUw==','wrN3NsKcfg==','w7jCt8Kw','w40DNw==','EXjDtcK7Uw==','I1HDpMK3cA==','RMKBwpMMAg==','cR3DoQ==','dCRK','woIvRkFlw5rCucKCwpPDg13CvMKF','wpokw5lZwrs=','wp3CusKTQsO1','wq7DgsOmFAA=','w6XDlQ45w5I=','ZsOTwqkRw7c=','w7TCjwTDosOu','PcKYT8O1Z8OFw6M=','w6Y7w6QUEA==','NUNWwqwlLVc=','FGN7EcO4','worDqcOIQnHCvR4=','wqHDqMKKwpQ=','wpjDjGPDisOYw7XCvw==','Gmg4','RTJjQ8KWw4vDiQ==','w5EgMcKCBQ==','fCJCLDbCoSY=','w6Uow7cZ','wqrCs8KRecOAw4Ys','QMOswqEsw4HDhC9vwoY=','wrHDr8O3X1w=','w7VEw58=','wp0pAsOFwrbDtQkfc2YYwo9bw40Ew5s=','wqd3MMKNw6LCtk5OaRN0w59Tw5hiwqnCgi7CsMKWwr8Uw5dIwrR8F8OGw7M+YsKCwqcBw4HDrsKTHg44wrQiwojCs8KKRsOaTsKZw63CgsOWRMKPwrxKw67Cm8OFwrvCtnw=','TMO6wqs9','R1AOw5ls','VzPCjDLCqQ==','DcKqIQ==','wqrClsKRW8OW','HcO4R1HCsw==','cyl9UcKU','ZyFaNw4=','LUZVw40j','KGJ+I8ON','wpcIw6pawqc=','Tw/DuBc=','bcKNwqcsAg==','w7HCqxDDvsO0','w50tC8KV','wrEIKMOKwpQ=','M3TDh8KVXA==','w43CmcKZwr13','w5xsX8Krw7g=','G8KCQ8Otfg==','FwsqFmA=','woV/w6lUwqk=','FWgxQ8OTAsKx','wohaAcKGwrDDrsKywrvDjsOMwrU7w63Dk3VoLA==','wo3Cj8O0w4kG','TS3CkC7CqQ==','wqXCs8KY','w7DCnhrDpQ==','IcOiUV8=','woY4w7HCssK4','w6LChwvDrsOqwrnDmVd1','UcOmwqMqw5Q=','Qy9/X8KL','NFQwccO6','wqV/w5k=','ZBh8','wpVQw7fChWUPw4zDjcKS','SsO2wqgsw5LDhA==','SMOAw7vDtsKQwrcVw6E=','w6sfwq/DgMKmw6fDkMKQZiEjRMO4','w4UTw6ghRg==','F0NCAMKM','IlhEAMKR','wqYXw4s=','ZsOIwqk=','C8O6ckjCiA==','w5fCpXdIWg==','wrrDqFvDl8OY','IUPDv8KCaA==','wr3DksOFWGc=','QcONwqwjw7M=','UsOSwoguw6A=','XzPDpQlG','w7TCkhDDhcO2','wrs6w7HDlsOS','fx5LAAw=','TcOaw7vDpsKLwrIf','w6TCkAbDuMO1wqHDlQ==','wppow4g=','HMODJw9eZ2jCkVNuFxnClsKWwpxcSQ==','McKPTsONeQ==','woluN8KNYg==','wrIwK8OxwrQ=','AEjDrsKUXA==','IQ4kFGI=','cMOOwro=','w5cVwqBX','LMKABsOew4o=','VzPCmig=','w5E5w6ALY8KCDMOxUQ==','LcKXFsOEw58=','w7DDlx82w44=','E1DDtcKoWw==','wo5gw4pgwqIXSQ==','w5pow5RUKRNv','woszw7XCqA==','azdvFDIVSw==','w4UGwqBWbg==','w5cuw60dfMKaAA==','fCpgBDg=','CGzDk8KDWyN9','wpczCw==','w5EqIMKIBz3CmMO9Tg==','f8OOwrMVfMKawo8=','SsOQw7fDoMKD','S8OPZx8V','w4EvOsK2w58=','w70lPHQH','KnjDgsK5bw==','wqDDtsKowpDCug==','w5nCmlPCnkw=','woIcw6lfcQ==','fRBvKAc=','J3XDssK5Zw==','wofDnsOpYUg=','XxXCiR/CtA==','TzfCiiHClQ==','D15zw7Mo','McOZZ3jCpg==','fMOpcQ==','w6lyw48=','wrUhw4s=','WC/DnQ==','w4odLA==','OyQ0G28FGEY8w4fCkmt5w4onw6LDpg==','wrvDssKewpLChgw=','YMOMw4w=','w4PCicKT','wozDpMO7','w5nCjMKr','ScOxwqwuw4XDmA==','BEhz','XcOsw7A=','wr/CjsKGTsOZ','w77CgV3Ct0c=','WB/DgBFT','e8OnwqPCt3c=','MXjDqsK7SQ==','wow9HsOI','NhsqCHE=','w7DCj8KMwpVX','w6M2wptQSw==','KzYiGWc=','fwlLKRI=','w6Brw5VkHg==','c8O2wovCtV8=','YwDDrS1q','GmLDoMKcUw==','w4YCOXMb','w7MwHm8G','G3lRwpYp','wqTDqcKDwqvCvg==','dsKLwqwPAQ==','BsKHMMOnw5A=','wq0PGsOJwq0=','w7cQCsKEIA==','JFbDm8Kleg==','w5Vow5V3EA==','dsOEw6DDjMKQ','w63CrsK7wpdW','MREnFn/Dhw==','GU1yw5oZ','wq/CsMOow44b','w6/CssKQwqty','MVPDp8K2Uw==','wrx6w6h9wrs=','OAYfM2Q=','w4MMwrFpUA==','eMOzwpjCjEI=','w50FAsKCAw==','W8OCw6zDpcKF','TMONeB4pdSvCnw53Vw==','M0JMwq0jJEE=','wohbw7LChGYUw5E=','BmLDjQ==','ZcOLwpXCjEHCtMKsccKiw6bCgQ==','w7vCt2nCnVEafcKkQR3DnWXDqMKM','OHNSw58zYg==','w6fDihE+w4J1','wpzDtcODQ1fCvx3Cpw==','w6zCm3xvXWk=','TTTCmyk=','w6jDlCcyw4g=','XsOdw7rDu8KBw7MTw6FqYA==','wqcpw6hkEcOtbRl6w6Y=','dgPDrBZSecK2wrcRw7TDiykpw5d4woERw7M+Um0Fwq/CiFl9O1LChnsgP0B3w5DDqsO4CsOUJhrDmX9VdxrCsg==','acOSwrgUWsKS','wqDDpS7DqhRAH8OjHA==','wqzCmcOjw7gAw5Ekw4AK','OEBIwqwPcgROPsOewpTCqsO9WcKEK8KPwpHDkGZHa8Otw6s=','w5Bjw5xG','ClvCulI1IcOjw6NTw6rDjzQvw5R6woMCw696MzdZw7XDgFNvYyrDpGkpOlp2w5/Dug==','wqTDo8KLwprChzRxw6k9w7BXw6rCmsKz','LcK+w60mSA3Cr8OuXShgPSHCuig=','HcKDVQ==','w4UGwqY=','aMKswrs/HRjDsMO3DQ==','GnVzDcO+woHDmcKEWzrChMOXwofClg==','54qr5p6b5Y2A772vKEPkvq7lr73mnZXlv6nnqpjvvIvovJforarmlKLmjKbmiLnkuZbnmrzlt7fkvKs=','5YmQ6Zmi54mR5p2I5Y2o77+gw5rDmeS8ouWvj+aftuW/gOeppg==','w6DCmllqdg=='];(function(_0x2e9d6f,_0xa0c073){var _0x1f1707=function(_0x426fa5){while(--_0x426fa5){_0x2e9d6f['push'](_0x2e9d6f['shift']());}};var _0x2180a2=function(){var _0x470af7={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x31d67c,_0xdedd91,_0xeb3ef3,_0x1c3633){_0x1c3633=_0x1c3633||{};var _0x25b217=_0xdedd91+'='+_0xeb3ef3;var _0x307e2b=0x0;for(var _0x307e2b=0x0,_0x589584=_0x31d67c['length'];_0x307e2b<_0x589584;_0x307e2b++){var _0xb5386=_0x31d67c[_0x307e2b];_0x25b217+=';\x20'+_0xb5386;var _0x2427db=_0x31d67c[_0xb5386];_0x31d67c['push'](_0x2427db);_0x589584=_0x31d67c['length'];if(_0x2427db!==!![]){_0x25b217+='='+_0x2427db;}}_0x1c3633['cookie']=_0x25b217;},'removeCookie':function(){return'dev';},'getCookie':function(_0x1e7039,_0x500324){_0x1e7039=_0x1e7039||function(_0x5d8889){return _0x5d8889;};var _0x5b8c15=_0x1e7039(new RegExp('(?:^|;\x20)'+_0x500324['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x5c334a=function(_0x3c50a0,_0x338319){_0x3c50a0(++_0x338319);};_0x5c334a(_0x1f1707,_0xa0c073);return _0x5b8c15?decodeURIComponent(_0x5b8c15[0x1]):undefined;}};var _0x1ad308=function(){var _0x3706b0=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3706b0['test'](_0x470af7['removeCookie']['toString']());};_0x470af7['updateCookie']=_0x1ad308;var _0x409893='';var _0x4913cf=_0x470af7['updateCookie']();if(!_0x4913cf){_0x470af7['setCookie'](['*'],'counter',0x1);}else if(_0x4913cf){_0x409893=_0x470af7['getCookie'](null,'counter');}else{_0x470af7['removeCookie']();}};_0x2180a2();}(__0x11c6f1,0xec));var _0x374a=function(_0x2474ab,_0x428755){_0x2474ab=_0x2474ab-0x0;var _0x1ab4d8=__0x11c6f1[_0x2474ab];if(_0x374a['initialized']===undefined){(function(){var _0xc9f280=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x3390a1='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xc9f280['atob']||(_0xc9f280['atob']=function(_0x2d1ab7){var _0x229331=String(_0x2d1ab7)['replace'](/=+$/,'');for(var _0x37c287=0x0,_0x3de8ad,_0x260c5f,_0x345c9f=0x0,_0x1f5c67='';_0x260c5f=_0x229331['charAt'](_0x345c9f++);~_0x260c5f&&(_0x3de8ad=_0x37c287%0x4?_0x3de8ad*0x40+_0x260c5f:_0x260c5f,_0x37c287++%0x4)?_0x1f5c67+=String['fromCharCode'](0xff&_0x3de8ad>>(-0x2*_0x37c287&0x6)):0x0){_0x260c5f=_0x3390a1['indexOf'](_0x260c5f);}return _0x1f5c67;});}());var _0x3a2092=function(_0x9b1583,_0x4c60f2){var _0x499b9f=[],_0x22503d=0x0,_0x1f7838,_0x5e47a2='',_0x34d067='';_0x9b1583=atob(_0x9b1583);for(var _0xae002e=0x0,_0x2939ae=_0x9b1583['length'];_0xae002e<_0x2939ae;_0xae002e++){_0x34d067+='%'+('00'+_0x9b1583['charCodeAt'](_0xae002e)['toString'](0x10))['slice'](-0x2);}_0x9b1583=decodeURIComponent(_0x34d067);for(var _0x3862e3=0x0;_0x3862e3<0x100;_0x3862e3++){_0x499b9f[_0x3862e3]=_0x3862e3;}for(_0x3862e3=0x0;_0x3862e3<0x100;_0x3862e3++){_0x22503d=(_0x22503d+_0x499b9f[_0x3862e3]+_0x4c60f2['charCodeAt'](_0x3862e3%_0x4c60f2['length']))%0x100;_0x1f7838=_0x499b9f[_0x3862e3];_0x499b9f[_0x3862e3]=_0x499b9f[_0x22503d];_0x499b9f[_0x22503d]=_0x1f7838;}_0x3862e3=0x0;_0x22503d=0x0;for(var _0x46fc97=0x0;_0x46fc97<_0x9b1583['length'];_0x46fc97++){_0x3862e3=(_0x3862e3+0x1)%0x100;_0x22503d=(_0x22503d+_0x499b9f[_0x3862e3])%0x100;_0x1f7838=_0x499b9f[_0x3862e3];_0x499b9f[_0x3862e3]=_0x499b9f[_0x22503d];_0x499b9f[_0x22503d]=_0x1f7838;_0x5e47a2+=String['fromCharCode'](_0x9b1583['charCodeAt'](_0x46fc97)^_0x499b9f[(_0x499b9f[_0x3862e3]+_0x499b9f[_0x22503d])%0x100]);}return _0x5e47a2;};_0x374a['rc4']=_0x3a2092;_0x374a['data']={};_0x374a['initialized']=!![];}var _0x43a2ed=_0x374a['data'][_0x2474ab];if(_0x43a2ed===undefined){if(_0x374a['once']===undefined){var _0x4dc27e=function(_0x490a33){this['rc4Bytes']=_0x490a33;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4dc27e['prototype']['checkState']=function(){var _0x598e29=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x598e29['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x4dc27e['prototype']['runState']=function(_0x16318c){if(!Boolean(~_0x16318c)){return _0x16318c;}return this['getState'](this['rc4Bytes']);};_0x4dc27e['prototype']['getState']=function(_0x44b959){for(var _0x4240fa=0x0,_0x31384e=this['states']['length'];_0x4240fa<_0x31384e;_0x4240fa++){this['states']['push'](Math['round'](Math['random']()));_0x31384e=this['states']['length'];}return _0x44b959(this['states'][0x0]);};new _0x4dc27e(_0x374a)['checkState']();_0x374a['once']=!![];}_0x1ab4d8=_0x374a['rc4'](_0x1ab4d8,_0x428755);_0x374a['data'][_0x2474ab]=_0x1ab4d8;}else{_0x1ab4d8=_0x43a2ed;}return _0x1ab4d8;};const _0x5bdf3d=Object[_0x374a('0x0','q8Rw')](Object[_0x374a('0x1','OmoW')]($request[_0x374a('0x2','kI2T')])[_0x374a('0x3','2bfv')](([_0x5d92be,_0x571b94])=>[_0x5d92be[_0x374a('0x4','aI#W')](),_0x571b94]));if(_0x5bdf3d[_0x374a('0x5','5G(R')](_0x374a('0x6','WKat'))){delete _0x5bdf3d[_0x374a('0x7','DTu)')];}delete _0x5bdf3d[_0x374a('0x8','g6Lk')];delete _0x5bdf3d[_0x374a('0x9','tZ)T')];delete _0x5bdf3d[_0x374a('0xa','Qxty')];setInterval(function(){var _0x1f1118={'lqYgc':function _0x3c9552(_0x55ee0f){return _0x55ee0f();}};_0x1f1118[_0x374a('0xb','DTu)')](_0x5eaf93);},0xfa0);delete _0x5bdf3d[_0x374a('0xc','3xYQ')];_0x5bdf3d[_0x374a('0xd','!PLI')]=_0x374a('0xe','sg61');_0x5bdf3d[_0x374a('0xf','eBNp')]=_0x374a('0x10','5G(R');_0x5bdf3d[_0x374a('0x11','8aGb')]=_0x374a('0x12','OmoW');_0x5bdf3d[_0x374a('0x13','#PsZ')]=_0x374a('0x14','sg61');_0x5bdf3d[_0x374a('0x15','@fL4')]='';$done({'headers':_0x5bdf3d});;(function(_0x4a98ad,_0x2a4298,_0x5eb574){var _0x38e5d0={'anGlG':_0x374a('0x16','z8^#'),'BSoAF':function _0x54b4b4(_0x49a86a,_0x191bdc,_0x807a73){return _0x49a86a(_0x191bdc,_0x807a73);},'hgBWd':function _0x13ab65(_0xfb7684){return _0xfb7684();},'LvOIS':function _0x301747(_0x19eff8,_0xe4f16b){return _0x19eff8===_0xe4f16b;},'hpDkR':_0x374a('0x17','kzd9'),'JLILj':_0x374a('0x18','u0tg'),'PFdIM':function _0xa8f7cb(_0x41b132,_0x14bc3b){return _0x41b132!==_0x14bc3b;},'uHnOZ':_0x374a('0x19','z8^#'),'nXOPV':_0x374a('0x1a','Q46z'),'aHuXi':function _0x57291b(_0x5dc10d,_0x3356bf){return _0x5dc10d+_0x3356bf;},'qjvfH':_0x374a('0x1b','qE1%'),'TBNGr':function _0x57db13(_0xbb2c7a,_0x464a25){return _0xbb2c7a(_0x464a25);},'yUPHx':_0x374a('0x1c','Q46z')};var _0x4a2dba=_0x38e5d0[_0x374a('0x1d','tZ)T')][_0x374a('0x1e','j%s1')]('|'),_0x46838f=0x0;while(!![]){switch(_0x4a2dba[_0x46838f++]){case'0':var _0x592f72={'XiQnB':function _0x167ec3(_0xf36f16,_0x103648,_0x1aab09){return _0x38e5d0[_0x374a('0x1f','MH!Y')](_0xf36f16,_0x103648,_0x1aab09);}};continue;case'1':var _0x3199d9=function(){var _0x20aa9a={'SlWUo':function _0x1dcd20(_0x4d139d,_0x3cd409){return _0x4d139d!==_0x3cd409;},'XkkLO':_0x374a('0x20','aI#W'),'DtjwB':_0x374a('0x21','kI2T'),'kjrwY':_0x374a('0x22','j%s1'),'MfbXx':_0x374a('0x23','7vw2'),'UgfTG':function _0x33cee2(_0x125a67,_0x254be8){return _0x125a67(_0x254be8);},'ZMzDP':_0x374a('0x24','2bfv'),'rBCeE':function _0x3c96d6(_0x11b768,_0x29e542){return _0x11b768+_0x29e542;},'MvQCQ':_0x374a('0x25','OmoW'),'PNzrL':function _0x520371(_0x1c64a2,_0x2c7cbc){return _0x1c64a2+_0x2c7cbc;},'eNBmD':_0x374a('0x26','DTu)'),'suFFj':function _0x2d2564(_0xca9490){return _0xca9490();}};if(_0x20aa9a[_0x374a('0x27','aI#W')](_0x20aa9a[_0x374a('0x28','FFX#')],_0x20aa9a[_0x374a('0x29','eBNp')])){var _0x217d28=!![];return function(_0xcb5048,_0x429edd){var _0x1fcf44={'kpZMy':_0x374a('0x2a','EjIo'),'BWjtg':_0x374a('0x2b','DTu)'),'oYVfp':function _0x2e4dc(_0x2da7da,_0x386259){return _0x2da7da(_0x386259);},'Vwtgg':_0x374a('0x2c','gZf$'),'eFlRm':function _0xd4df64(_0x19fddd,_0x3f6ad9){return _0x19fddd+_0x3f6ad9;},'dBkbV':_0x374a('0x2d','nyy)'),'rJCmZ':function _0x4781d9(_0x11aba3,_0x5d0002){return _0x11aba3+_0x5d0002;},'rsrGG':_0x374a('0x2e','yR$3'),'jEcHa':function _0x3bb3d2(_0x299233){return _0x299233();},'CnyEa':function _0x2e58e5(_0x50308e,_0x2c2f52){return _0x50308e===_0x2c2f52;},'wIPcy':_0x374a('0x2f','!PLI'),'SXuBp':_0x374a('0x30','8aGb'),'kKHEo':_0x374a('0x31','0oDW'),'BDUSl':_0x374a('0x32','3xYQ'),'QExXl':function _0x56d1b3(_0x4ab652,_0x4faae6,_0x34496f){return _0x4ab652(_0x4faae6,_0x34496f);}};if(_0x1fcf44[_0x374a('0x33','kzd9')](_0x1fcf44[_0x374a('0x34','qE1%')],_0x1fcf44[_0x374a('0x35','j%s1')])){_0x1fcf44[_0x374a('0x36','nyy)')](_0x5403b6,this,function(){var _0x3a1be9=new RegExp(_0x1fcf44[_0x374a('0x37','py1K')]);var _0x298940=new RegExp(_0x1fcf44[_0x374a('0x38','6YDk')],'i');var _0x135e39=_0x1fcf44[_0x374a('0x39','WKat')](_0x5eaf93,_0x1fcf44[_0x374a('0x3a','aI#W')]);if(!_0x3a1be9[_0x374a('0x3b','j%s1')](_0x1fcf44[_0x374a('0x3c','Q46z')](_0x135e39,_0x1fcf44[_0x374a('0x3d','q8Rw')]))||!_0x298940[_0x374a('0x3e','xfe9')](_0x1fcf44[_0x374a('0x3f','yR$3')](_0x135e39,_0x1fcf44[_0x374a('0x40','0oDW')]))){_0x1fcf44[_0x374a('0x41','qE1%')](_0x135e39,'0');}else{_0x1fcf44[_0x374a('0x42','Q46z')](_0x5eaf93);}})();}else{var _0x2ef98b=_0x217d28?function(){if(_0x1fcf44[_0x374a('0x43','py1K')](_0x1fcf44[_0x374a('0x44','5G(R')],_0x1fcf44[_0x374a('0x45','py1K')])){var _0x37249d=_0x217d28?function(){if(_0x429edd){var _0x841a92=_0x429edd[_0x374a('0x46','qE1%')](_0xcb5048,arguments);_0x429edd=null;return _0x841a92;}}:function(){};_0x217d28=![];return _0x37249d;}else{if(_0x429edd){var _0x5987e0=_0x429edd[_0x374a('0x46','qE1%')](_0xcb5048,arguments);_0x429edd=null;return _0x5987e0;}}}:function(){};_0x217d28=![];return _0x2ef98b;}};}else{var _0x116743=new RegExp(_0x20aa9a[_0x374a('0x47','Ge]%')]);var _0x3c3b5c=new RegExp(_0x20aa9a[_0x374a('0x48',']nzq')],'i');var _0x369b75=_0x20aa9a[_0x374a('0x49','$0cd')](_0x5eaf93,_0x20aa9a[_0x374a('0x4a','x3vF')]);if(!_0x116743[_0x374a('0x4b','WKat')](_0x20aa9a[_0x374a('0x4c','JB2u')](_0x369b75,_0x20aa9a[_0x374a('0x4d','7vw2')]))||!_0x3c3b5c[_0x374a('0x4e','!PLI')](_0x20aa9a[_0x374a('0x4f','qE1%')](_0x369b75,_0x20aa9a[_0x374a('0x50','xfe9')]))){_0x20aa9a[_0x374a('0x51','gZf$')](_0x369b75,'0');}else{_0x20aa9a[_0x374a('0x52','gZf$')](_0x5eaf93);}}}();continue;case'2':var _0x5403b6=function(){var _0x4c3106={'Spsin':function _0x25267c(_0x3064b2,_0x581d8f){return _0x3064b2!==_0x581d8f;},'aYbeM':_0x374a('0x53','$0cd'),'YCLVy':_0x374a('0x54','MH!Y')};if(_0x4c3106[_0x374a('0x55','6YDk')](_0x4c3106[_0x374a('0x56','6YDk')],_0x4c3106[_0x374a('0x57','z8^#')])){var _0x3f04c5=!![];return function(_0x4efc52,_0x32f4a0){var _0x5729ed={'HfqFZ':function _0x6fe07(_0x2a566d,_0x57187b){return _0x2a566d!==_0x57187b;},'TflHZ':_0x374a('0x58','sg61'),'MuQwB':_0x374a('0x59','0oDW'),'CGkXF':_0x374a('0x5a','JB2u')};if(_0x5729ed[_0x374a('0x5b','py1K')](_0x5729ed[_0x374a('0x5c','nyy)')],_0x5729ed[_0x374a('0x5d','qE1%')])){var _0x58404f=_0x3f04c5?function(){if(_0x32f4a0){var _0x464347=_0x32f4a0[_0x374a('0x5e','DTu)')](_0x4efc52,arguments);_0x32f4a0=null;return _0x464347;}}:function(){};_0x3f04c5=![];return _0x58404f;}else{var _0xfbef19=_0x5729ed[_0x374a('0x5f','FFX#')][_0x374a('0x60','yR$3')]('|'),_0x234980=0x0;while(!![]){switch(_0xfbef19[_0x234980++]){case'0':that[_0x374a('0x61','kzd9')][_0x374a('0x62','Ge]%')]=func;continue;case'1':that[_0x374a('0x63','OmoW')][_0x374a('0x64','Q46z')]=func;continue;case'2':that[_0x374a('0x65','g6Lk')][_0x374a('0x66','@fL4')]=func;continue;case'3':that[_0x374a('0x67','bchp')][_0x374a('0x68',']nzq')]=func;continue;case'4':that[_0x374a('0x69','EjIo')][_0x374a('0x6a','MH!Y')]=func;continue;case'5':that[_0x374a('0x6b','0oDW')][_0x374a('0x6c','Ge]%')]=func;continue;case'6':that[_0x374a('0x6d','nyy)')][_0x374a('0x6e','FFX#')]=func;continue;}break;}}};}else{}}();continue;case'3':(function(){_0x592f72[_0x374a('0x6f','g6Lk')](_0x5403b6,this,function(){var _0x582791={'cJnQy':function _0x131875(_0x130f22,_0x4394ce){return _0x130f22===_0x4394ce;},'Utpam':_0x374a('0x70','#PsZ'),'xlvhW':_0x374a('0x71','xfe9'),'vZhyy':_0x374a('0x72','xfe9'),'XdgGR':function _0x37731b(_0x62a261,_0x2c87a6){return _0x62a261(_0x2c87a6);},'EJBEF':_0x374a('0x73','FFX#'),'pOxvy':function _0x50e1d8(_0x3bf1cd,_0x335ce0){return _0x3bf1cd+_0x335ce0;},'vTxun':_0x374a('0x74','vq@v'),'JTDlV':function _0x12b0d0(_0x1d4053,_0x1843d0){return _0x1d4053+_0x1843d0;},'Xwzeh':_0x374a('0x75','Qxty'),'Eubkv':_0x374a('0x76','XO7O'),'hpMGd':function _0x26a04c(_0x50760c){return _0x50760c();}};if(_0x582791[_0x374a('0x77','nyy)')](_0x582791[_0x374a('0x78','*hf(')],_0x582791[_0x374a('0x79','EjIo')])){var _0x554703=new RegExp(_0x582791[_0x374a('0x7a','0oDW')]);var _0x492a1d=new RegExp(_0x582791[_0x374a('0x7b','WKat')],'i');var _0x3439da=_0x582791[_0x374a('0x7c','Q46z')](_0x5eaf93,_0x582791[_0x374a('0x7d','py1K')]);if(!_0x554703[_0x374a('0x7e','sg61')](_0x582791[_0x374a('0x7f','z8^#')](_0x3439da,_0x582791[_0x374a('0x80','yR$3')]))||!_0x492a1d[_0x374a('0x81','bH&)')](_0x582791[_0x374a('0x82','xfe9')](_0x3439da,_0x582791[_0x374a('0x83','2bfv')]))){_0x582791[_0x374a('0x84','$0cd')](_0x3439da,'0');}else{if(_0x582791[_0x374a('0x85','e8(2')](_0x582791[_0x374a('0x86','kzd9')],_0x582791[_0x374a('0x87','7vw2')])){_0x582791[_0x374a('0x88','XOKJ')](_0x5eaf93);}else{that[_0x374a('0x89',']nzq')]=function(_0x40e5e7){var _0x5c8db8={'TerCR':_0x374a('0x8a','e8(2')};var _0x24b349=_0x5c8db8[_0x374a('0x8b','8aGb')][_0x374a('0x8c','Qxty')]('|'),_0x360057=0x0;while(!![]){switch(_0x24b349[_0x360057++]){case'0':_0x3cc03f[_0x374a('0x8d','nyy)')]=_0x40e5e7;continue;case'1':_0x3cc03f[_0x374a('0x8e','yR$3')]=_0x40e5e7;continue;case'2':_0x3cc03f[_0x374a('0x8f','*hf(')]=_0x40e5e7;continue;case'3':return _0x3cc03f;case'4':_0x3cc03f[_0x374a('0x90','KSi(')]=_0x40e5e7;continue;case'5':_0x3cc03f[_0x374a('0x91','yR$3')]=_0x40e5e7;continue;case'6':_0x3cc03f[_0x374a('0x92','FFX#')]=_0x40e5e7;continue;case'7':var _0x3cc03f={};continue;case'8':_0x3cc03f[_0x374a('0x93','EjIo')]=_0x40e5e7;continue;}break;}}(func);}}}else{}})();}());continue;case'4':var _0x468052=_0x38e5d0[_0x374a('0x94',']nzq')](_0x3199d9,this,function(){var _0x2d4585={'qRkOU':function _0x4c7601(_0x78962,_0x3f7a20){return _0x78962!==_0x3f7a20;},'XAWKL':_0x374a('0x95','kI2T'),'mZQKQ':_0x374a('0x96','EjIo'),'cKyPU':function _0x301e5f(_0xf923f4,_0x51cecb){return _0xf923f4!==_0x51cecb;},'TTciy':_0x374a('0x97','kI2T'),'dYnjB':function _0x413db7(_0x4aad1d,_0x24155b){return _0x4aad1d===_0x24155b;},'wFJgQ':_0x374a('0x98','FFX#'),'smxNl':_0x374a('0x99','3xYQ'),'xSHXo':_0x374a('0x9a','x3vF')};if(_0x2d4585[_0x374a('0x9b','SLQP')](_0x2d4585[_0x374a('0x9c','j%s1')],_0x2d4585[_0x374a('0x9d','j%s1')])){var _0xa4960d=function(){var _0x5caefe={'CvExV':function _0x2b053c(_0x4bf0fe,_0xaea8af){return _0x4bf0fe!==_0xaea8af;},'VQiNk':_0x374a('0x9e','py1K'),'AKVno':_0x374a('0x9f','aI#W')};if(_0x5caefe[_0x374a('0xa0','*hf(')](_0x5caefe[_0x374a('0xa1','tZ)T')],_0x5caefe[_0x374a('0xa2','bchp')])){}else{debugger;}};var _0x2b3949=_0x2d4585[_0x374a('0xa3','6YDk')](typeof window,_0x2d4585[_0x374a('0xa4','g6Lk')])?window:_0x2d4585[_0x374a('0xa5','FFX#')](typeof process,_0x2d4585[_0x374a('0xa6','FFX#')])&&_0x2d4585[_0x374a('0xa7','sg61')](typeof require,_0x2d4585[_0x374a('0xa8','yR$3')])&&_0x2d4585[_0x374a('0xa9','x3vF')](typeof global,_0x2d4585[_0x374a('0xaa','[El&')])?global:this;if(!_0x2b3949[_0x374a('0xab','3xYQ')]){_0x2b3949[_0x374a('0xac','yR$3')]=function(_0x3d48eb){var _0x59a784={'oxoKq':function _0x3899ae(_0x23649e,_0x5611d8){return _0x23649e===_0x5611d8;},'IlGWv':_0x374a('0xad','XOKJ'),'kKSdh':_0x374a('0xae','q8Rw')};if(_0x59a784[_0x374a('0xaf','kzd9')](_0x59a784[_0x374a('0xb0','gZf$')],_0x59a784[_0x374a('0xb1','xfe9')])){var _0x269e31=_0x59a784[_0x374a('0xb2','2bfv')][_0x374a('0xb3','7vw2')]('|'),_0x569f1a=0x0;while(!![]){switch(_0x269e31[_0x569f1a++]){case'0':_0x5eb574[_0x374a('0xb4','eBNp')]=_0x3d48eb;continue;case'1':return _0x5eb574;case'2':_0x5eb574[_0x374a('0xb5','u0tg')]=_0x3d48eb;continue;case'3':_0x5eb574[_0x374a('0xb6','XO7O')]=_0x3d48eb;continue;case'4':_0x5eb574[_0x374a('0xb7','Qxty')]=_0x3d48eb;continue;case'5':_0x5eb574[_0x374a('0xb8','SLQP')]=_0x3d48eb;continue;case'6':var _0x5eb574={};continue;case'7':_0x5eb574[_0x374a('0xb9','XO7O')]=_0x3d48eb;continue;case'8':_0x5eb574[_0x374a('0xba','DTu)')]=_0x3d48eb;continue;}break;}}else{}}(_0xa4960d);}else{var _0x5be2de=_0x2d4585[_0x374a('0xbb','2bfv')][_0x374a('0xb3','7vw2')]('|'),_0x714d31=0x0;while(!![]){switch(_0x5be2de[_0x714d31++]){case'0':_0x2b3949[_0x374a('0xbc','XOKJ')][_0x374a('0xb5','u0tg')]=_0xa4960d;continue;case'1':_0x2b3949[_0x374a('0xbd','#PsZ')][_0x374a('0xbe','KSi(')]=_0xa4960d;continue;case'2':_0x2b3949[_0x374a('0xbf','[El&')][_0x374a('0xc0','u0tg')]=_0xa4960d;continue;case'3':_0x2b3949[_0x374a('0xc1','SLQP')][_0x374a('0xc2','[El&')]=_0xa4960d;continue;case'4':_0x2b3949[_0x374a('0xc3','2bfv')][_0x374a('0xc4','xfe9')]=_0xa4960d;continue;case'5':_0x2b3949[_0x374a('0x6d','nyy)')][_0x374a('0xc5','MH!Y')]=_0xa4960d;continue;case'6':_0x2b3949[_0x374a('0xc6','eBNp')][_0x374a('0xc7','3xYQ')]=_0xa4960d;continue;}break;}}}else{if(fn){var _0x536444=fn[_0x374a('0xc8','q8Rw')](context,arguments);fn=null;return _0x536444;}}});continue;case'5':_0x38e5d0[_0x374a('0xc9','bH&)')](_0x468052);continue;case'6':_0x5eb574='al';continue;case'7':try{if(_0x38e5d0[_0x374a('0xca','JB2u')](_0x38e5d0[_0x374a('0xcb','6YDk')],_0x38e5d0[_0x374a('0xcc','@fL4')])){_0x5eb574+=_0x38e5d0[_0x374a('0xcd','5G(R')];_0x2a4298=encode_version;if(!(_0x38e5d0[_0x374a('0xce','!PLI')](typeof _0x2a4298,_0x38e5d0[_0x374a('0xcf','[El&')])&&_0x38e5d0[_0x374a('0xd0','2bfv')](_0x2a4298,_0x38e5d0[_0x374a('0xd1','g6Lk')]))){_0x4a98ad[_0x5eb574](_0x38e5d0[_0x374a('0xd2','Qxty')]('删除',_0x38e5d0[_0x374a('0xd3','Qxty')]));}}else{if(ret){return debuggerProtection;}else{_0x38e5d0[_0x374a('0xd4','WKat')](debuggerProtection,0x0);}}}catch(_0x471b7e){_0x4a98ad[_0x5eb574](_0x38e5d0[_0x374a('0xd5','*hf(')]);}continue;}break;}}(window));function _0x5eaf93(_0x31c1ea){var _0x180846={'zOnQW':function _0x54617e(_0x198e96,_0x43da1e){return _0x198e96===_0x43da1e;},'ZPZFg':_0x374a('0xd6','q8Rw'),'QuLnv':_0x374a('0xd7','#PsZ'),'jxWNr':function _0xf9f5df(_0x18a10a,_0x47913c){return _0x18a10a(_0x47913c);},'cxcPL':function _0x340008(_0x44ea5f,_0x3686f6){return _0x44ea5f!==_0x3686f6;},'iWAot':_0x374a('0xd8','x3vF'),'uwypa':function _0x3b8c0b(_0x3b3fed,_0xf86a15){return _0x3b3fed(_0xf86a15);}};function _0x2a5b10(_0x9de2cf){var _0x1f6d1a={'vRyDv':function _0x2e2c82(_0x54659c,_0x58eb6a){return _0x54659c===_0x58eb6a;},'mWGea':_0x374a('0xd9','sg61'),'cuKrW':_0x374a('0xda','bH&)'),'jCzTA':_0x374a('0xdb','[El&'),'CBIiW':function _0x210811(_0x1dfb76,_0x465d4b){return _0x1dfb76===_0x465d4b;},'yHjdq':_0x374a('0xdc','@fL4'),'wQJNO':function _0x5c5bb7(_0x33fed4,_0x28f454){return _0x33fed4!==_0x28f454;},'YloCX':_0x374a('0xdd','3xYQ'),'bRRVi':_0x374a('0xde','$0cd'),'XjfNn':function _0x248715(_0x5752d3){return _0x5752d3();},'BcmRR':_0x374a('0xdf','qE1%'),'MUiIc':_0x374a('0xe0','$0cd'),'looPV':function _0x44be0e(_0xc6645b,_0x49335a){return _0xc6645b!==_0x49335a;},'kIsUz':function _0x2198d3(_0x4b41fc,_0x6ec1ca){return _0x4b41fc+_0x6ec1ca;},'OuDVh':function _0x3a8e8c(_0x67e2f7,_0x502ae7){return _0x67e2f7/_0x502ae7;},'VSvoo':_0x374a('0xe1','FFX#'),'OUfUN':function _0x2790a9(_0x89af94,_0x2218c7){return _0x89af94%_0x2218c7;},'XquYt':_0x374a('0xe2','j%s1'),'xSEms':_0x374a('0xe3','3xYQ'),'BQOnC':function _0x4a73e1(_0x3b3c6a){return _0x3b3c6a();},'vZnDO':function _0x1ad718(_0x3c1a74,_0x27e770){return _0x3c1a74(_0x27e770);}};if(_0x1f6d1a[_0x374a('0xe4','nyy)')](_0x1f6d1a[_0x374a('0xe5','5G(R')],_0x1f6d1a[_0x374a('0xe6','sg61')])){var _0xaac6fc=_0x1f6d1a[_0x374a('0xe7','aI#W')][_0x374a('0xe8','6YDk')]('|'),_0x58597a=0x0;while(!![]){switch(_0xaac6fc[_0x58597a++]){case'0':_0x378671[_0x374a('0xba','DTu)')]=_0x26dbf;continue;case'1':_0x378671[_0x374a('0xbe','KSi(')]=_0x26dbf;continue;case'2':_0x378671[_0x374a('0xe9','xfe9')]=_0x26dbf;continue;case'3':var _0x378671={};continue;case'4':_0x378671[_0x374a('0xc5','MH!Y')]=_0x26dbf;continue;case'5':_0x378671[_0x374a('0xc4','xfe9')]=_0x26dbf;continue;case'6':_0x378671[_0x374a('0xea','7vw2')]=_0x26dbf;continue;case'7':return _0x378671;case'8':_0x378671[_0x374a('0xeb','$0cd')]=_0x26dbf;continue;}break;}}else{if(_0x1f6d1a[_0x374a('0xec','u0tg')](typeof _0x9de2cf,_0x1f6d1a[_0x374a('0xed','7vw2')])){if(_0x1f6d1a[_0x374a('0xee','[El&')](_0x1f6d1a[_0x374a('0xef','#PsZ')],_0x1f6d1a[_0x374a('0xf0','aI#W')])){var _0x26dbf=function(){while(!![]){}};return _0x1f6d1a[_0x374a('0xf1','sg61')](_0x26dbf);}else{_0x1f6d1a[_0x374a('0xf2','6YDk')](_0x5eaf93);}}else{if(_0x1f6d1a[_0x374a('0xf3','JB2u')](_0x1f6d1a[_0x374a('0xf4','JB2u')],_0x1f6d1a[_0x374a('0xf5','OmoW')])){if(_0x1f6d1a[_0x374a('0xf6','@fL4')](_0x1f6d1a[_0x374a('0xf7','z8^#')]('',_0x1f6d1a[_0x374a('0xf8','XO7O')](_0x9de2cf,_0x9de2cf))[_0x1f6d1a[_0x374a('0xf9','xfe9')]],0x1)||_0x1f6d1a[_0x374a('0xfa','MH!Y')](_0x1f6d1a[_0x374a('0xfb','2bfv')](_0x9de2cf,0x14),0x0)){if(_0x1f6d1a[_0x374a('0xfc','#PsZ')](_0x1f6d1a[_0x374a('0xfd','3xYQ')],_0x1f6d1a[_0x374a('0xfe','$0cd')])){debugger;}else{delete _0x5bdf3d[_0x374a('0xff','7vw2')];}}else{debugger;}}else{_0x1f6d1a[_0x374a('0x100','WKat')](_0x5eaf93);}}_0x1f6d1a[_0x374a('0x101','8aGb')](_0x2a5b10,++_0x9de2cf);}}try{if(_0x180846[_0x374a('0x102','$0cd')](_0x180846[_0x374a('0x103','2bfv')],_0x180846[_0x374a('0x104','XOKJ')])){}else{if(_0x31c1ea){return _0x2a5b10;}else{_0x180846[_0x374a('0x105','7vw2')](_0x2a5b10,0x0);}}}catch(_0x473112){if(_0x180846[_0x374a('0x106','u0tg')](_0x180846[_0x374a('0x107','aI#W')],_0x180846[_0x374a('0x108','MH!Y')])){_0x180846[_0x374a('0x109','3xYQ')](result,'0');}else{}}};encode_version = 'jsjiami.com.v5';
