/**
 * 
 * Copyright (C) 2022 by Radio 669 
 * 
 * MIT License
 * 
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 * 
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 * 
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 * 
 */

const bgm = new Audio('https://cdn.dragoncloud.win/static/audios/greatest_song_on_earth.mp3');

const reactionsData = [
    {
        id: 1,
        emoji: '🎉',
        author: 'Dr.',
        content: `恭喜杨镕兆同志成年！*呱唧呱唧* 
终于变成了能轻轻松松开房的人呢！（什）
总之就是一句话 生日快乐！
（蹭不到生日蛋糕吃好不爽哦（你）`
    },
    {
        id: 2,
        emoji: '🥳',
        author: 'Martin',
        content: "愿你崭新的时光通透温热。"
    },
    {
        id: 3,
        emoji: '😺',
        author: 'Holger',
        content: "热烈庆祝杨镕兆儿同学顺利迈入成年人的世界🎉"
    },
    {
        id: 4,
        emoji: '🫠',
        author: '朵儿老师',
        content: `Cook 老师生日快乐！
感谢Cook老师！
您之于英解就像Cook之于苹果（？）
总而言之成年快乐！`
    }
];

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const badge = (item, status) => {
    console.log(
        '%c' + item + '%c' + status,
        'display: inline-block;background-color:rgba(66,66,66,1);color:#fff;margin-bottom:6px;padding:3px 7px 3px 10px;border-radius:4px 0 0 4px;font-size:2em;line-height:1.5em',
        'display: inline-block;background-color:rgba(0,180,0,1);color:#fff;padding:3px 10px 3px 7px;border-radius:0 4px 4px 0;font-size:2em;line-height:1.5em'
    );
};

const countdownMsg = (i) => {
    switch (i) {
        case 0:
            badge('Build', 'Passing');
            console.log("%cProject Mohorovičić now entered beta!", `
font-size: 2em;
font-family: Comic Sans MS; 
font-weight: bold;
line-height: 2em;
color: cyan;
`);
            return
        case 10:
            badge('Release', 'v0.1.0-rc');
            console.log('%c欢迎进入0.1.0-rc版本🎉', `
font-size: 2em;
font-weight: bold;
line-height: 2em;
color: cyan;
font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB", "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
`);
            return
        case 18:
            badge('Release', 'v0.1.8-stable');
            console.log(`%cThe stable version has been released!`, `
font-size:2em;
font-family: Comic Sans MS; 
line-height:2em;
color: #fff;
background:linear-gradient(to right,red,blue)
`);
            return
        default:
            console.log(`%c` + i, `
font-size: 2em;
line-height: 2em;
color: cyan;
font-family: Comic Sans MS;
`);
            return
    }
};

const countdown = async () => {
    countdownMsg(0);
    await sleep(1000);

    let i = 1;

    while (i <= 10) {
        console.clear();
        i !== 10 && countdownMsg(0);
        countdownMsg(i);
        i = i + 1;
        await sleep(1000);
    }

    while (i <= 18) {
        console.clear();
        i !== 18 && countdownMsg(10);
        countdownMsg(i);
        i = i + 1;
        await sleep(1000);
    }
};

const welcomeMsg = async () => {
    console.log("%c『待你空闲时…』", `
font-size:2em;
font-family: Baskerville, Georgia, "Liberation Serif", "Kaiti SC", STKaiti, "AR PL UKai CN", "AR PL UKai HK", "AR PL UKai TW", "AR PL UKai TW MBE", "AR PL KaitiM GB", KaiTi, KaiTi_GB2312, DFKai-SB, "TW\-Kai", serif;
color: #fff;
background: linear-gradient(to right,red,blue)
`);
    await sleep(1500);
    console.log(`%c『今日独自走在孤云阁岸边，沿途拾来数枚星螺。
曾听说它内藏玄妙，能传递言语，试着凑近耳边，却听不见任何说话声，惟有空洞的风。
无妨。
邪祟的忿恨，劫难的预兆…还有你的呼唤。能听见这些，对我足矣。
待你空闲时，再与我说说吧，你从星螺中听见过什么。』`, `
font-size:1.5em;
font-family: Baskerville, Georgia, "Liberation Serif", "Kaiti SC", STKaiti, "AR PL UKai CN", "AR PL UKai HK", "AR PL UKai TW", "AR PL UKai TW MBE", "AR PL KaitiM GB", KaiTi, KaiTi_GB2312, DFKai-SB, "TW\-Kai", serif;
`);
}

const upgradeNotice = async (delay = true) => {
    console.log('%cv0.1.8-stable', `
font-size:2em;
font-family: Comic Sans MS; 
color: cyan;
font-weight: bold;
line-height: 1.5em;
`);

    console.log(`%cUpgrade Notice:
%cThis release contains upgrade notes that deviate from the norm:
    ℹ️ You are out of childhood
    ⚠️ You need to take criminal responsibilities
`,`
font-size:1.5em;
font-family: Comic Sans MS; 
font-weight: bold;
line-height: 2em;
`,
        `
font-size:1.5em;
font-family: Comic Sans MS; 
line-height: 1.5em;
`);

    delay && await sleep(800);

    console.log(`%cChangelog:
%c    Added new scope: Driver License can now be acquired by taking 科目二 and 科目三
    Added new domain: University
`,`
font-size:1.5em;
font-family: Comic Sans MS; 
font-weight: bold;
line-height: 2em;
`,`
font-size:1.5em;
font-family: Comic Sans MS; 
line-height: 1.5em;
`);

    delay && await sleep(800);

    console.log(`%cDeprecated:
%c    Identity as a Child
`,`
font-size: 1.5em;
font-family: Comic Sans MS; 
font-weight: bold;
line-height: 2em;
`,`
font-size:1.5em;
font-family: Comic Sans MS; 
line-height: 1.5em;
`);

    delay && await sleep(800);

    console.log(`%cFuture Milestones to 填:
%c    2 years before legal marriage
    TFLS Wiki
    Martin's house's Super Inter-continent Datacenter
    Hand draft a power bank
    3D print a vase for 李静
    Upload Yellow Books
    Upgrade Dell's Notebook case
    Traffik Voov/Tencent Meeting
`,`
font-size:1.5em;
font-family: Comic Sans MS; 
font-weight: bold;
line-height: 2em;
`,`
font-size:1.5em;
font-family: Comic Sans MS; 
line-height: 1.5em;
`);
}

const reactions = async (comment = true, delay = true) => {
    const emojis = reactionsData.map(i => i.emoji).filter((value, index, self) => { return self.indexOf(value) === index; });

    const reactionsByEmoji = emojis.map(e => reactionsData.filter(i => i.emoji === e)).sort((a, b) => b.length - a.length);

    let css = [];
    let reactionsGroup = [];
    let authors = [];

    for (const e of reactionsByEmoji) {
        css.push('border-style: solid; border-radius: 15px; padding: 2px 7px 2px 7px; font-size: 1.5em', 'display: block; font-size: 1.5em; line-height: 2em');

        for (const [index, i] of e.entries()) {
            let authorsText, reactionsText;
            console.clear();
            countdownMsg(18);
            const count = index + 1;
            if (authors.length > 0) {
                authorsText = authors.join(', ') + ' and ' + i.author + ' have reacted.';
            } else {
                authorsText = i.author + ' has reacted.';
            }

            if (reactionsGroup.length > 0) {
                reactionsText = reactionsGroup.join('%c ') + '%c %c' + e[0].emoji + ' ' + count.toString();
            } else {
                reactionsText = '%c' + e[0].emoji + ' ' + count.toString();
            }

            console.log(reactionsText + '%c ' + authorsText, ...css);
            comment && console.log('%c' + i.content, 'font-size: 1.5em; line-height: 2em');
            authors.push(i.author);
            delay && await sleep(3000);
        }
        reactionsGroup.push('%c' + e[0].emoji + ' ' + e.length);
    }
}

const bakeBirthcake = () => {
    console.log(`%c
                            _  _
                   |_|  /| |_)|_)\\_/
                   | | /-| |  |   /
               _     _ ___     _
              |_) | |_) |  |_|| \\  /| \\_/
              |_) | | \\ |  | ||_/ /-|  /

                               .--------.
                             .: : :  :___\`.
                           .'!!:::::  \\\\_\\ \`.
                      : . /\%\O\!\!\::::::::\\\\_\\. \\
                     [\"\"]/\%\%O!!:::::::::  : . \\
                     |  |\%\%OO!!::::::::::: : . |
                     |  |\%\%OO!!:::::::::::::  :|
                     |  |\%\%OO!!!::::::::::::: :|
            :       .'--\`.\%\%OO!!!:::::::::::: :|
          : .:     /\`.__.'\\\%\%OO!!!::::::::::::/
         :    .   /        \\\%OO!!!!::::::::::/
        ,-'\`\`'-. ;          ;\%\%OO!!!!!!:::::'
        |\`-..-'| |   ,--.   |\`\%\%\%OO!!!!!!:'
        | .   :| |_.','\`.\`._|  \`\%\%\%OO!\%\%'
        | . :  | |--'    \`--|    \`\%\%\%\%'
        |\`-..-'| ||   | | | |     /__\\\`-.
        \\::::::/ ||)|/|)|)|\\|           /
---------\`::::'--|._ ~**~ _.|----------( -----------------------
           )(    |  \`-..-'  |           \\    ______
           )(    |          |,--.       ____/ /  /\\\\ ,-._.-'
        ,-')('-. |          |\\\`;/   .-()___  :  |\`.!,-'\`'/\`-._
       (  '  \`  )\`-._    _.-'|;,|    \`-,    \\_\\__\\\`,-'>-.,-._
        \`-....-'     \`\`\`\`    \`--'      \`-._       (\`- \`-._\`-.   

`, 'color: cyan; font-size: 1em');
}

const projectMohorovicic = async () => {
    console.clear();
    await countdown();
    await sleep(100);
    console.clear();
    await welcomeMsg();
    await sleep(3000);
    console.clear();
    await upgradeNotice();
    await sleep(10000);
    await reactions();
    await sleep(1500);
    console.clear();
    bgm.play();
    countdownMsg(18);
    reactions(false, false);
    bakeBirthcake();
}