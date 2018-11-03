/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge1 = function (accounts) {
  function merge (lists, list) {
    if (lists && lists.length === 0) {
      return list
    }
    let found = false
    let temp = [].concat(lists)
    let account = lists.reduce((pre, cur, index) => {
      pre = [].concat(pre)
      cur = [].concat(cur)
      if (pre[0] === cur[0]) {
        cur.shift()
        if (cur.some(item => pre.includes(item)) && !found) {
          found = true
          pre = pre.concat(cur)
          temp.splice(index, 1)
        }
      }
      return pre
    }, list)
    if (!found) {
      return account
    }
    return merge(temp, account)
  }
  let b = [].concat(accounts)
  let result = []
  for (let account of accounts) {
    result.push([...new Set(merge(b, account))])
  }
  result = result.map(r => {
    let temp = r.shift()
    r.sort().unshift(temp)
    return JSON.stringify(r)
  })
  result = [...new Set(result)]
  result = result.map(r => JSON.parse(r))
  return result
};

function accountsMerge(accounts) {
  const roots = new Set();
  const owner = {};
  const parent = {};
  const children = {};

  for (let account of accounts) {
    let [user, root, ...emails] = account;
    let r1 = find(root);
    owner[root] = user;
    children[r1] = children[r1] || [root];
    roots.add(r1);

    for (let email of emails) {
      let r2 = find(email);
      if (r2 !== r1) {
        parent[r2] = r1;
        children[r1].push(...(children[r2] ? children[r2] : [email]));
        roots.delete(r2);
        delete children[r2];
      }
    }
  }

  return [...roots].map(r => [owner[r], ...children[r].sort()]);

  function find(a) {
    parent[a] = parent[a] || a;
    return a === parent[a] ? a : find(parent[a]);
  }
}
// console.log(accountsMerge([["John", "johnsmith@mail.com", "john00@mail.com"],
//   ["John", "johnnybravo@mail.com"],
//   ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
//   ["Mary", "mary@mail.com"]])
// )

console.log(accountsMerge([["Bob", "Bob52@m.co", "Bob53@m.co", "Bob568@m.co", "Bob569@m.co", "Bob570@m.co", "Bob571@m.co", "Bob572@m.co", "Bob573@m.co", "Bob574@m.co"], ["Bob", "Bob79@m.co", "Bob80@m.co", "Bob811@m.co", "Bob812@m.co", "Bob813@m.co", "Bob814@m.co", "Bob815@m.co", "Bob816@m.co", "Bob817@m.co"], ["Bob", "Bob48@m.co", "Bob0@m.co", "Bob532@m.co", "Bob533@m.co", "Bob534@m.co", "Bob535@m.co", "Bob536@m.co", "Bob537@m.co", "Bob538@m.co"], ["Bob", "Bob16@m.co", "Bob17@m.co", "Bob244@m.co", "Bob245@m.co", "Bob246@m.co", "Bob247@m.co", "Bob248@m.co", "Bob249@m.co", "Bob250@m.co"], ["Bob", "Bob87@m.co", "Bob88@m.co", "Bob883@m.co", "Bob884@m.co", "Bob885@m.co", "Bob886@m.co", "Bob887@m.co", "Bob888@m.co", "Bob889@m.co"], ["Bob", "Bob1@m.co", "Bob2@m.co", "Bob109@m.co", "Bob110@m.co", "Bob111@m.co", "Bob112@m.co", "Bob113@m.co", "Bob114@m.co", "Bob115@m.co"], ["Bob", "Bob26@m.co", "Bob27@m.co", "Bob334@m.co", "Bob335@m.co", "Bob336@m.co", "Bob337@m.co", "Bob338@m.co", "Bob339@m.co", "Bob340@m.co"], ["Bob", "Bob0@m.co", "Bob1@m.co", "Bob100@m.co", "Bob101@m.co", "Bob102@m.co", "Bob103@m.co", "Bob104@m.co", "Bob105@m.co", "Bob106@m.co"], ["Bob", "Bob46@m.co", "Bob47@m.co", "Bob514@m.co", "Bob515@m.co", "Bob516@m.co", "Bob517@m.co", "Bob518@m.co", "Bob519@m.co", "Bob520@m.co"], ["Bob", "Bob28@m.co", "Bob29@m.co", "Bob352@m.co", "Bob353@m.co", "Bob354@m.co", "Bob355@m.co", "Bob356@m.co", "Bob357@m.co", "Bob358@m.co"], ["Bob", "Bob93@m.co", "Bob94@m.co", "Bob937@m.co", "Bob938@m.co", "Bob939@m.co", "Bob940@m.co", "Bob941@m.co", "Bob942@m.co", "Bob943@m.co"], ["Bob", "Bob55@m.co", "Bob56@m.co", "Bob595@m.co", "Bob596@m.co", "Bob597@m.co", "Bob598@m.co", "Bob599@m.co", "Bob600@m.co", "Bob601@m.co"], ["Bob", "Bob45@m.co", "Bob46@m.co", "Bob505@m.co", "Bob506@m.co", "Bob507@m.co", "Bob508@m.co", "Bob509@m.co", "Bob510@m.co", "Bob511@m.co"], ["Bob", "Bob72@m.co", "Bob73@m.co", "Bob748@m.co", "Bob749@m.co", "Bob750@m.co", "Bob751@m.co", "Bob752@m.co", "Bob753@m.co", "Bob754@m.co"], ["Bob", "Bob6@m.co", "Bob7@m.co", "Bob154@m.co", "Bob155@m.co", "Bob156@m.co", "Bob157@m.co", "Bob158@m.co", "Bob159@m.co", "Bob160@m.co"], ["Bob", "Bob74@m.co", "Bob75@m.co", "Bob766@m.co", "Bob767@m.co", "Bob768@m.co", "Bob769@m.co", "Bob770@m.co", "Bob771@m.co", "Bob772@m.co"], ["Bob", "Bob31@m.co", "Bob32@m.co", "Bob379@m.co", "Bob380@m.co", "Bob381@m.co", "Bob382@m.co", "Bob383@m.co", "Bob384@m.co", "Bob385@m.co"], ["Bob", "Bob23@m.co", "Bob24@m.co", "Bob307@m.co", "Bob308@m.co", "Bob309@m.co", "Bob310@m.co", "Bob311@m.co", "Bob312@m.co", "Bob313@m.co"], ["Bob", "Bob32@m.co", "Bob33@m.co", "Bob388@m.co", "Bob389@m.co", "Bob390@m.co", "Bob391@m.co", "Bob392@m.co", "Bob393@m.co", "Bob394@m.co"], ["Bob", "Bob7@m.co", "Bob8@m.co", "Bob163@m.co", "Bob164@m.co", "Bob165@m.co", "Bob166@m.co", "Bob167@m.co", "Bob168@m.co", "Bob169@m.co"], ["Bob", "Bob94@m.co", "Bob95@m.co", "Bob946@m.co", "Bob947@m.co", "Bob948@m.co", "Bob949@m.co", "Bob950@m.co", "Bob951@m.co", "Bob952@m.co"], ["Bob", "Bob61@m.co", "Bob62@m.co", "Bob649@m.co", "Bob650@m.co", "Bob651@m.co", "Bob652@m.co", "Bob653@m.co", "Bob654@m.co", "Bob655@m.co"], ["Bob", "Bob37@m.co", "Bob38@m.co", "Bob433@m.co", "Bob434@m.co", "Bob435@m.co", "Bob436@m.co", "Bob437@m.co", "Bob438@m.co", "Bob439@m.co"], ["Bob", "Bob83@m.co", "Bob84@m.co", "Bob847@m.co", "Bob848@m.co", "Bob849@m.co", "Bob850@m.co", "Bob851@m.co", "Bob852@m.co", "Bob853@m.co"], ["Bob", "Bob60@m.co", "Bob61@m.co", "Bob640@m.co", "Bob641@m.co", "Bob642@m.co", "Bob643@m.co", "Bob644@m.co", "Bob645@m.co", "Bob646@m.co"], ["Bob", "Bob36@m.co", "Bob37@m.co", "Bob424@m.co", "Bob425@m.co", "Bob426@m.co", "Bob427@m.co", "Bob428@m.co", "Bob429@m.co", "Bob430@m.co"], ["Bob", "Bob11@m.co", "Bob12@m.co", "Bob199@m.co", "Bob200@m.co", "Bob201@m.co", "Bob202@m.co", "Bob203@m.co", "Bob204@m.co", "Bob205@m.co"], ["Bob", "Bob24@m.co", "Bob25@m.co", "Bob316@m.co", "Bob317@m.co", "Bob318@m.co", "Bob319@m.co", "Bob320@m.co", "Bob321@m.co", "Bob322@m.co"], ["Bob", "Bob75@m.co", "Bob76@m.co", "Bob775@m.co", "Bob776@m.co", "Bob777@m.co", "Bob778@m.co", "Bob779@m.co", "Bob780@m.co", "Bob781@m.co"], ["Bob", "Bob58@m.co", "Bob59@m.co", "Bob622@m.co", "Bob623@m.co", "Bob624@m.co", "Bob625@m.co", "Bob626@m.co", "Bob627@m.co", "Bob628@m.co"], ["Bob", "Bob5@m.co", "Bob6@m.co", "Bob145@m.co", "Bob146@m.co", "Bob147@m.co", "Bob148@m.co", "Bob149@m.co", "Bob150@m.co", "Bob151@m.co"], ["Bob", "Bob71@m.co", "Bob72@m.co", "Bob739@m.co", "Bob740@m.co", "Bob741@m.co", "Bob742@m.co", "Bob743@m.co", "Bob744@m.co", "Bob745@m.co"], ["Bob", "Bob25@m.co", "Bob26@m.co", "Bob325@m.co", "Bob326@m.co", "Bob327@m.co", "Bob328@m.co", "Bob329@m.co", "Bob330@m.co", "Bob331@m.co"], ["Bob", "Bob63@m.co", "Bob64@m.co", "Bob667@m.co", "Bob668@m.co", "Bob669@m.co", "Bob670@m.co", "Bob671@m.co", "Bob672@m.co", "Bob673@m.co"], ["Bob", "Bob54@m.co", "Bob55@m.co", "Bob586@m.co", "Bob587@m.co", "Bob588@m.co", "Bob589@m.co", "Bob590@m.co", "Bob591@m.co", "Bob592@m.co"], ["Bob", "Bob2@m.co", "Bob3@m.co", "Bob118@m.co", "Bob119@m.co", "Bob120@m.co", "Bob121@m.co", "Bob122@m.co", "Bob123@m.co", "Bob124@m.co"], ["Bob", "Bob95@m.co", "Bob96@m.co", "Bob955@m.co", "Bob956@m.co", "Bob957@m.co", "Bob958@m.co", "Bob959@m.co", "Bob960@m.co", "Bob961@m.co"], ["Bob", "Bob68@m.co", "Bob69@m.co", "Bob712@m.co", "Bob713@m.co", "Bob714@m.co", "Bob715@m.co", "Bob716@m.co", "Bob717@m.co", "Bob718@m.co"], ["Bob", "Bob51@m.co", "Bob52@m.co", "Bob559@m.co", "Bob560@m.co", "Bob561@m.co", "Bob562@m.co", "Bob563@m.co", "Bob564@m.co", "Bob565@m.co"], ["Bob", "Bob22@m.co", "Bob23@m.co", "Bob298@m.co", "Bob299@m.co", "Bob300@m.co", "Bob301@m.co", "Bob302@m.co", "Bob303@m.co", "Bob304@m.co"], ["Bob", "Bob13@m.co", "Bob14@m.co", "Bob217@m.co", "Bob218@m.co", "Bob219@m.co", "Bob220@m.co", "Bob221@m.co", "Bob222@m.co", "Bob223@m.co"], ["Bob", "Bob66@m.co", "Bob67@m.co", "Bob694@m.co", "Bob695@m.co", "Bob696@m.co", "Bob697@m.co", "Bob698@m.co", "Bob699@m.co", "Bob700@m.co"], ["Bob", "Bob27@m.co", "Bob28@m.co", "Bob343@m.co", "Bob344@m.co", "Bob345@m.co", "Bob346@m.co", "Bob347@m.co", "Bob348@m.co", "Bob349@m.co"], ["Bob", "Bob92@m.co", "Bob93@m.co", "Bob928@m.co", "Bob929@m.co", "Bob930@m.co", "Bob931@m.co", "Bob932@m.co", "Bob933@m.co", "Bob934@m.co"], ["Bob", "Bob42@m.co", "Bob43@m.co", "Bob478@m.co", "Bob479@m.co", "Bob480@m.co", "Bob481@m.co", "Bob482@m.co", "Bob483@m.co", "Bob484@m.co"], ["Bob", "Bob77@m.co", "Bob78@m.co", "Bob793@m.co", "Bob794@m.co", "Bob795@m.co", "Bob796@m.co", "Bob797@m.co", "Bob798@m.co", "Bob799@m.co"], ["Bob", "Bob47@m.co", "Bob48@m.co", "Bob523@m.co", "Bob524@m.co", "Bob525@m.co", "Bob526@m.co", "Bob527@m.co", "Bob528@m.co", "Bob529@m.co"], ["Bob", "Bob62@m.co", "Bob63@m.co", "Bob658@m.co", "Bob659@m.co", "Bob660@m.co", "Bob661@m.co", "Bob662@m.co", "Bob663@m.co", "Bob664@m.co"], ["Bob", "Bob33@m.co", "Bob34@m.co", "Bob397@m.co", "Bob398@m.co", "Bob399@m.co", "Bob400@m.co", "Bob401@m.co", "Bob402@m.co", "Bob403@m.co"], ["Bob", "Bob76@m.co", "Bob77@m.co", "Bob784@m.co", "Bob785@m.co", "Bob786@m.co", "Bob787@m.co", "Bob788@m.co", "Bob789@m.co", "Bob790@m.co"], ["Bob", "Bob39@m.co", "Bob40@m.co", "Bob451@m.co", "Bob452@m.co", "Bob453@m.co", "Bob454@m.co", "Bob455@m.co", "Bob456@m.co", "Bob457@m.co"], ["Bob", "Bob21@m.co", "Bob22@m.co", "Bob289@m.co", "Bob290@m.co", "Bob291@m.co", "Bob292@m.co", "Bob293@m.co", "Bob294@m.co", "Bob295@m.co"], ["Bob", "Bob90@m.co", "Bob91@m.co", "Bob910@m.co", "Bob911@m.co", "Bob912@m.co", "Bob913@m.co", "Bob914@m.co", "Bob915@m.co", "Bob916@m.co"], ["Bob", "Bob89@m.co", "Bob90@m.co", "Bob901@m.co", "Bob902@m.co", "Bob903@m.co", "Bob904@m.co", "Bob905@m.co", "Bob906@m.co", "Bob907@m.co"], ["Bob", "Bob84@m.co", "Bob85@m.co", "Bob856@m.co", "Bob857@m.co", "Bob858@m.co", "Bob859@m.co", "Bob860@m.co", "Bob861@m.co", "Bob862@m.co"], ["Bob", "Bob41@m.co", "Bob42@m.co", "Bob469@m.co", "Bob470@m.co", "Bob471@m.co", "Bob472@m.co", "Bob473@m.co", "Bob474@m.co", "Bob475@m.co"], ["Bob", "Bob20@m.co", "Bob21@m.co", "Bob280@m.co", "Bob281@m.co", "Bob282@m.co", "Bob283@m.co", "Bob284@m.co", "Bob285@m.co", "Bob286@m.co"], ["Bob", "Bob18@m.co", "Bob19@m.co", "Bob262@m.co", "Bob263@m.co", "Bob264@m.co", "Bob265@m.co", "Bob266@m.co", "Bob267@m.co", "Bob268@m.co"], ["Bob", "Bob538@m.co", "Bob979@m.co"], ["Bob", "Bob81@m.co", "Bob82@m.co", "Bob829@m.co", "Bob830@m.co", "Bob831@m.co", "Bob832@m.co", "Bob833@m.co", "Bob834@m.co", "Bob835@m.co"], ["Bob", "Bob65@m.co", "Bob66@m.co", "Bob685@m.co", "Bob686@m.co", "Bob687@m.co", "Bob688@m.co", "Bob689@m.co", "Bob690@m.co", "Bob691@m.co"], ["Bob", "Bob50@m.co", "Bob51@m.co", "Bob550@m.co", "Bob551@m.co", "Bob552@m.co", "Bob553@m.co", "Bob554@m.co", "Bob555@m.co", "Bob556@m.co"], ["Bob", "Bob10@m.co", "Bob11@m.co", "Bob190@m.co", "Bob191@m.co", "Bob192@m.co", "Bob193@m.co", "Bob194@m.co", "Bob195@m.co", "Bob196@m.co"], ["Bob", "Bob9@m.co", "Bob10@m.co", "Bob181@m.co", "Bob182@m.co", "Bob183@m.co", "Bob184@m.co", "Bob185@m.co", "Bob186@m.co", "Bob187@m.co"], ["Bob", "Bob4@m.co", "Bob5@m.co", "Bob136@m.co", "Bob137@m.co", "Bob138@m.co", "Bob139@m.co", "Bob140@m.co", "Bob141@m.co", "Bob142@m.co"], ["Bob", "Bob40@m.co", "Bob41@m.co", "Bob460@m.co", "Bob461@m.co", "Bob462@m.co", "Bob463@m.co", "Bob464@m.co", "Bob465@m.co", "Bob466@m.co"], ["Bob", "Bob88@m.co", "Bob89@m.co", "Bob892@m.co", "Bob893@m.co", "Bob894@m.co", "Bob895@m.co", "Bob896@m.co", "Bob897@m.co", "Bob898@m.co"], ["Bob", "Bob80@m.co", "Bob81@m.co", "Bob820@m.co", "Bob821@m.co", "Bob822@m.co", "Bob823@m.co", "Bob824@m.co", "Bob825@m.co", "Bob826@m.co"], ["Bob", "Bob17@m.co", "Bob18@m.co", "Bob253@m.co", "Bob254@m.co", "Bob255@m.co", "Bob256@m.co", "Bob257@m.co", "Bob258@m.co", "Bob259@m.co"], ["Bob", "Bob73@m.co", "Bob74@m.co", "Bob757@m.co", "Bob758@m.co", "Bob759@m.co", "Bob760@m.co", "Bob761@m.co", "Bob762@m.co", "Bob763@m.co"], ["Bob", "Bob29@m.co", "Bob30@m.co", "Bob361@m.co", "Bob362@m.co", "Bob363@m.co", "Bob364@m.co", "Bob365@m.co", "Bob366@m.co", "Bob367@m.co"], ["Bob", "Bob12@m.co", "Bob13@m.co", "Bob208@m.co", "Bob209@m.co", "Bob210@m.co", "Bob211@m.co", "Bob212@m.co", "Bob213@m.co", "Bob214@m.co"], ["Bob", "Bob8@m.co", "Bob9@m.co", "Bob172@m.co", "Bob173@m.co", "Bob174@m.co", "Bob175@m.co", "Bob176@m.co", "Bob177@m.co", "Bob178@m.co"], ["Bob", "Bob38@m.co", "Bob39@m.co", "Bob442@m.co", "Bob443@m.co", "Bob444@m.co", "Bob445@m.co", "Bob446@m.co", "Bob447@m.co", "Bob448@m.co"], ["Bob", "Bob67@m.co", "Bob68@m.co", "Bob703@m.co", "Bob704@m.co", "Bob705@m.co", "Bob706@m.co", "Bob707@m.co", "Bob708@m.co", "Bob709@m.co"], ["Bob", "Bob57@m.co", "Bob58@m.co", "Bob613@m.co", "Bob614@m.co", "Bob615@m.co", "Bob616@m.co", "Bob617@m.co", "Bob618@m.co", "Bob619@m.co"], ["Bob", "Bob3@m.co", "Bob4@m.co", "Bob127@m.co", "Bob128@m.co", "Bob129@m.co", "Bob130@m.co", "Bob131@m.co", "Bob132@m.co", "Bob133@m.co"], ["Bob", "Bob53@m.co", "Bob54@m.co", "Bob577@m.co", "Bob578@m.co", "Bob579@m.co", "Bob580@m.co", "Bob581@m.co", "Bob582@m.co", "Bob583@m.co"], ["Bob", "Bob70@m.co", "Bob71@m.co", "Bob730@m.co", "Bob731@m.co", "Bob732@m.co", "Bob733@m.co", "Bob734@m.co", "Bob735@m.co", "Bob736@m.co"], ["Bob", "Bob64@m.co", "Bob65@m.co", "Bob676@m.co", "Bob677@m.co", "Bob678@m.co", "Bob679@m.co", "Bob680@m.co", "Bob681@m.co", "Bob682@m.co"], ["Bob", "Bob78@m.co", "Bob79@m.co", "Bob802@m.co", "Bob803@m.co", "Bob804@m.co", "Bob805@m.co", "Bob806@m.co", "Bob807@m.co", "Bob808@m.co"], ["Bob", "Bob19@m.co", "Bob20@m.co", "Bob271@m.co", "Bob272@m.co", "Bob273@m.co", "Bob274@m.co", "Bob275@m.co", "Bob276@m.co", "Bob277@m.co"], ["Bob", "Bob43@m.co", "Bob44@m.co", "Bob487@m.co", "Bob488@m.co", "Bob489@m.co", "Bob490@m.co", "Bob491@m.co", "Bob492@m.co", "Bob493@m.co"], ["Bob", "Bob15@m.co", "Bob16@m.co", "Bob235@m.co", "Bob236@m.co", "Bob237@m.co", "Bob238@m.co", "Bob239@m.co", "Bob240@m.co", "Bob241@m.co"], ["Bob", "Bob97@m.co", "Bob49@m.co", "Bob973@m.co", "Bob974@m.co", "Bob975@m.co", "Bob976@m.co", "Bob977@m.co", "Bob978@m.co", "Bob979@m.co"], ["Bob", "Bob35@m.co", "Bob36@m.co", "Bob415@m.co", "Bob416@m.co", "Bob417@m.co", "Bob418@m.co", "Bob419@m.co", "Bob420@m.co", "Bob421@m.co"], ["Bob", "Bob86@m.co", "Bob87@m.co", "Bob874@m.co", "Bob875@m.co", "Bob876@m.co", "Bob877@m.co", "Bob878@m.co", "Bob879@m.co", "Bob880@m.co"], ["Bob", "Bob96@m.co", "Bob97@m.co", "Bob964@m.co", "Bob965@m.co", "Bob966@m.co", "Bob967@m.co", "Bob968@m.co", "Bob969@m.co", "Bob970@m.co"], ["Bob", "Bob59@m.co", "Bob60@m.co", "Bob631@m.co", "Bob632@m.co", "Bob633@m.co", "Bob634@m.co", "Bob635@m.co", "Bob636@m.co", "Bob637@m.co"], ["Bob", "Bob56@m.co", "Bob57@m.co", "Bob604@m.co", "Bob605@m.co", "Bob606@m.co", "Bob607@m.co", "Bob608@m.co", "Bob609@m.co", "Bob610@m.co"], ["Bob", "Bob34@m.co", "Bob35@m.co", "Bob406@m.co", "Bob407@m.co", "Bob408@m.co", "Bob409@m.co", "Bob410@m.co", "Bob411@m.co", "Bob412@m.co"], ["Bob", "Bob91@m.co", "Bob92@m.co", "Bob919@m.co", "Bob920@m.co", "Bob921@m.co", "Bob922@m.co", "Bob923@m.co", "Bob924@m.co", "Bob925@m.co"], ["Bob", "Bob14@m.co", "Bob15@m.co", "Bob226@m.co", "Bob227@m.co", "Bob228@m.co", "Bob229@m.co", "Bob230@m.co", "Bob231@m.co", "Bob232@m.co"], ["Bob", "Bob69@m.co", "Bob70@m.co", "Bob721@m.co", "Bob722@m.co", "Bob723@m.co", "Bob724@m.co", "Bob725@m.co", "Bob726@m.co", "Bob727@m.co"], ["Bob", "Bob85@m.co", "Bob86@m.co", "Bob865@m.co", "Bob866@m.co", "Bob867@m.co", "Bob868@m.co", "Bob869@m.co", "Bob870@m.co", "Bob871@m.co"], ["Bob", "Bob30@m.co", "Bob31@m.co", "Bob370@m.co", "Bob371@m.co", "Bob372@m.co", "Bob373@m.co", "Bob374@m.co", "Bob375@m.co", "Bob376@m.co"], ["Bob", "Bob82@m.co", "Bob83@m.co", "Bob838@m.co", "Bob839@m.co", "Bob840@m.co", "Bob841@m.co", "Bob842@m.co", "Bob843@m.co", "Bob844@m.co"], ["Bob", "Bob49@m.co", "Bob50@m.co", "Bob541@m.co", "Bob542@m.co", "Bob543@m.co", "Bob544@m.co", "Bob545@m.co", "Bob546@m.co", "Bob547@m.co"], ["Bob", "Bob44@m.co", "Bob45@m.co", "Bob496@m.co", "Bob497@m.co", "Bob498@m.co", "Bob499@m.co", "Bob500@m.co", "Bob501@m.co", "Bob502@m.co"]]))
