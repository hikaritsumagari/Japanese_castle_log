//BotUI
$('#bot').on('click', function () {
    $('#bot').fadeOut(400);
    var botui = new BotUI('my-botui-app');

    botui.message.add({
        delay: 1000,
        loading: true,
        content: 'こんにちはお城botです！'
    }).then(showQuestions);

    //ボタン表示
    function showQuestions() {
        botui.message.add({
            delay: 1000,
            loading: true,
            content: 'おすすめのお城を教えます。どこのお城を知りたいですか？'
        }).then(function () {
            return botui.message.add({
                delay: 1000,
                loading: true,
                content: 'まずはこちらから地方名を選んでください！'
            });
        }).then(function () {
            return botui.action.button({
                autoHide: false,
                delay: 1300,
                action: [
                    { icon: 'fort-awesome', text: '北海道・東北', value: 'tohoku' },
                    { icon: 'fort-awesome', text: '関東・甲信越', value: 'kanto' },
                    { icon: 'fort-awesome', text: '北陸・東海', value: 'hokuriku' },
                    { icon: 'fort-awesome', text: '近畿', value: 'kinki' },
                    { icon: 'fort-awesome', text: '中国・四国', value: 'shikoku' },
                    { icon: 'fort-awesome', text: '九州・沖縄', value: 'kyushu' },
                ]
            });
        }).then(function (res) {
            botui.action.hide();
            switch (res.value) {
                case 'tohoku': showTohoku(); break;
                case 'kanto': showKanto(); break;
                case 'hokuriku': showHokuriku(); break;
                case 'kinki': showKinki(); break;
                case 'shikoku': showShikoku(); break;
                case 'kyushu': showKyushu(); break;
                default: end();
            }
        });
    }
    //北海道・東北のお城
    function showTohoku() {
        botui.message.add({
            delay: 1500,
            loading: true,
            content: '北海道・東北地方のお城ですね！'
        }).then(function () {

            return botui.message.add({
                delay: 1000,
                loading: true,
                content: 'どこのお城を知りたいですか？'
            });
        }).then(function () {
            return botui.action.button({
                autoHide: false,
                delay: 1300,
                action: [
                    { icon: 'fort-awesome', text: '北海道', value: 'hokkaido' },
                    { icon: 'fort-awesome', text: '青森県', value: 'aomori' },
                    { icon: 'fort-awesome', text: '岩手県', value: 'iwate' },
                    { icon: 'fort-awesome', text: '宮城県', value: 'miyagi' },
                    { icon: 'fort-awesome', text: '秋田県', value: 'akita' },
                    { icon: 'fort-awesome', text: '山形県', value: 'yamagata' },
                    { icon: 'fort-awesome', text: '福島県', value: 'fukushima' }
                ]
            });
        }).then(function (res) {
            let ans;
            botui.action.hide();
            if (res.value === 'hokkaido') {
                ans = '北海道のお城は、根室半島チャシ跡群、五稜郭、松前城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'aomori') {
                ans = '青森県のお城は、弘前城、根城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'iwate') {
                ans = '岩手県のお城は、盛岡城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'miyagi') {
                ans = '宮城県のお城は、多賀城、仙台城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'akita') {
                ans = '秋田県のお城は、久保田城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'yamagata') {
                ans = '山形県のお城は、山形城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'fukushima') {
                ans = '福島県のお城は、二本松城、会津若松城、白河小峰城がありますよ。ぜひ行ってみてくださいね。'
            }

            return botui.message.add({
                type: 'html',
                delay: 1000,
                loading: true,
                content: ans
            });
        }).then(askEnd);
    }
    //関東・甲信越のお城
    function showKanto() {
        botui.message.add({
            delay: 1500,
            loading: true,
            content: '関東・甲信越地方のお城ですね！'
        }).then(function () {

            return botui.message.add({
                delay: 1000,
                loading: true,
                content: 'どこのお城を知りたいですか？'
            });
        }).then(function () {
            return botui.action.button({
                autoHide: false,
                delay: 1300,
                action: [
                    { icon: 'fort-awesome', text: '茨城県', value: 'ibaraki' },
                    { icon: 'fort-awesome', text: '栃木県', value: 'tochigi' },
                    { icon: 'fort-awesome', text: '群馬県', value: 'gunma' },
                    { icon: 'fort-awesome', text: '埼玉県', value: 'saitama' },
                    { icon: 'fort-awesome', text: '千葉県', value: 'chiba' },
                    { icon: 'fort-awesome', text: '東京都', value: 'tokyo' },
                    { icon: 'fort-awesome', text: '神奈川県', value: 'kanagawa' },
                    { icon: 'fort-awesome', text: '山梨県', value: 'yamanashi' },
                    { icon: 'fort-awesome', text: '長野県', value: 'nagano' },
                    { icon: 'fort-awesome', text: '新潟県', value: 'nigata' }
                ]
            });
        }).then(function (res) {
            let ans;
            botui.action.hide();
            if (res.value === 'ibaraki') {
                ans = '茨城県のお城は、水戸城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'tochigi') {
                ans = '栃木県のお城は、足利氏館がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'gunma') {
                ans = '群馬県のお城は、箕輪城、金山城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'saitama') {
                ans = '埼玉県のお城は、鉢形城、川越城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'chiba') {
                ans = '千葉県のお城は、佐倉城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'tokyo') {
                ans = '東京都のお城は、江戸城、八王子城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'kanagawa') {
                ans = '神奈川県のお城は、小田原城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'yamanashi') {
                ans = '山梨県のお城は、武田氏館、甲府城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'nagano') {
                ans = '長野県のお城は、松代城、上田城、小諸城、松本城、高遠城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'nigata') {
                ans = '新潟県のお城は、新発田城、春日山城がありますよ。ぜひ行ってみてくださいね。'
            }

            return botui.message.add({
                type: 'html',
                delay: 1000,
                loading: true,
                content: ans
            });
        }).then(askEnd);
    }
    //北陸・東海のお城
    function showHokuriku() {
        botui.message.add({
            delay: 1500,
            loading: true,
            content: '北陸・東海地方のお城ですね！'
        }).then(function () {

            return botui.message.add({
                delay: 1000,
                loading: true,
                content: 'どこのお城を知りたいですか？'
            });
        }).then(function () {
            return botui.action.button({
                autoHide: false,
                delay: 1300,
                action: [
                    { icon: 'fort-awesome', text: '富山県', value: 'toyama' },
                    { icon: 'fort-awesome', text: '石川県', value: 'ishikawa' },
                    { icon: 'fort-awesome', text: '福井県', value: 'fukui' },
                    { icon: 'fort-awesome', text: '岐阜県', value: 'gifu' },
                    { icon: 'fort-awesome', text: '静岡県', value: 'shizuoka' },
                    { icon: 'fort-awesome', text: '愛知県', value: 'aichi' },
                    { icon: 'fort-awesome', text: '三重県', value: 'mie' }
                ]
            });
        }).then(function (res) {
            let ans;
            botui.action.hide();
            if (res.value === 'toyama') {
                ans = '富山県のお城は、高岡城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'ishikawa') {
                ans = '石川県のお城は、七尾城、金沢城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'fukui') {
                ans = '福井県のお城は、丸岡城、一乗谷城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'gifu') {
                ans = '岐阜県のお城は、岩村城、岐阜城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'shizuoka') {
                ans = '静岡県のお城は、山中城、駿府城、掛川城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'aichi') {
                ans = '愛知県のお城は、犬山城、名古屋城、岡崎城、長篠城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'mie') {
                ans = '三重県のお城は、伊賀上野城、松坂城がありますよ。ぜひ行ってみてくださいね。'
            }

            return botui.message.add({
                type: 'html',
                delay: 1000,
                loading: true,
                content: ans
            });
        }).then(askEnd);
    }
    //近畿のお城
    function showKinki() {
        botui.message.add({
            delay: 1500,
            loading: true,
            content: '近畿地方のお城ですね！'
        }).then(function () {

            return botui.message.add({
                delay: 1000,
                loading: true,
                content: 'どこのお城を知りたいですか？'
            });
        }).then(function () {
            return botui.action.button({
                autoHide: false,
                delay: 1300,
                action: [
                    { icon: 'fort-awesome', text: '滋賀県', value: 'shiga' },
                    { icon: 'fort-awesome', text: '京都府', value: 'kyoto' },
                    { icon: 'fort-awesome', text: '大阪府', value: 'osaka' },
                    { icon: 'fort-awesome', text: '兵庫県', value: 'hyogo' },
                    { icon: 'fort-awesome', text: '奈良県', value: 'nara' },
                    { icon: 'fort-awesome', text: '和歌山県', value: 'wakayama' }
                ]
            });
        }).then(function (res) {
            let ans;
            botui.action.hide();
            if (res.value === 'shiga') {
                ans = '滋賀県のお城は、小谷城、彦根城、安土城、観音寺城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'kyoto') {
                ans = '京都府のお城は、二条城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'osaka') {
                ans = '大阪府のお城は、大阪城、千早城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'hyogo') {
                ans = '兵庫県のお城は、竹田城、篠山城、明石城、姫路城、赤穂城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'nara') {
                ans = '奈良県のお城は、高取城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'wakayama') {
                ans = '和歌山県のお城は、和歌山城がありますよ。ぜひ行ってみてくださいね。'
            }

            return botui.message.add({
                type: 'html',
                delay: 1000,
                loading: true,
                content: ans
            });
        }).then(askEnd);
    }
    //中国・四国のお城
    function showShikoku() {
        botui.message.add({
            delay: 1500,
            loading: true,
            content: '中国・四国地方のお城ですね！'
        }).then(function () {

            return botui.message.add({
                delay: 1000,
                loading: true,
                content: 'どこのお城を知りたいですか？'
            });
        }).then(function () {
            return botui.action.button({
                autoHide: false,
                delay: 1300,
                action: [
                    { icon: 'fort-awesome', text: '鳥取県', value: 'tottori' },
                    { icon: 'fort-awesome', text: '島根県', value: 'shimane' },
                    { icon: 'fort-awesome', text: '岡山県', value: 'okayama' },
                    { icon: 'fort-awesome', text: '広島県', value: 'hiroshima' },
                    { icon: 'fort-awesome', text: '山口県', value: 'yamaguchi' },
                    { icon: 'fort-awesome', text: '徳島県', value: 'tokushima' },
                    { icon: 'fort-awesome', text: '香川県', value: 'kagawa' },
                    { icon: 'fort-awesome', text: '愛媛県', value: 'ehime' },
                    { icon: 'fort-awesome', text: '高知県', value: 'kouchi' }
                ]
            });
        }).then(function (res) {
            let ans;
            botui.action.hide();
            if (res.value === 'tottori') {
                ans = '鳥取県のお城は、鳥取城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'shimane') {
                ans = '島根県のお城は、松江城、月山富田城、津和野城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'okayama') {
                ans = '岡山県のお城は、津山城、備中松山城、鬼ノ城、岡山城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'hiroshima') {
                ans = '広島県のお城は、福山城、郡山城、広島城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'yamaguchi') {
                ans = '山口県のお城は、岩国城、萩城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'tokushima') {
                ans = '徳島県のお城は、徳島城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'kagawa') {
                ans = '香川県のお城は、高松城、丸亀城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'ehime') {
                ans = '愛媛県のお城は、今治城、湯築城、松山城、大洲城、宇和島城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'kouchi') {
                ans = '高知県のお城は、高知城がありますよ。ぜひ行ってみてくださいね。'
            }

            return botui.message.add({
                type: 'html',
                delay: 1000,
                loading: true,
                content: ans
            });
        }).then(askEnd);
    }
    //九州・沖縄のお城
    function showKyushu() {
        botui.message.add({
            delay: 1500,
            loading: true,
            content: '九州・沖縄地方のお城ですね！'
        }).then(function () {

            return botui.message.add({
                delay: 1000,
                loading: true,
                content: 'どこのお城を知りたいですか？'
            });
        }).then(function () {
            return botui.action.button({
                autoHide: false,
                delay: 1300,
                action: [
                    { icon: 'fort-awesome', text: '福岡県', value: 'fukuoka' },
                    { icon: 'fort-awesome', text: '佐賀県', value: 'saga' },
                    { icon: 'fort-awesome', text: '長崎県', value: 'nagasaki' },
                    { icon: 'fort-awesome', text: '熊本県', value: 'kumamoto' },
                    { icon: 'fort-awesome', text: '大分県', value: 'oita' },
                    { icon: 'fort-awesome', text: '宮崎県', value: 'miyazaki' },
                    { icon: 'fort-awesome', text: '鹿児島県', value: 'kagoshima' },
                    { icon: 'fort-awesome', text: '沖縄県', value: 'okinawa' }
                ]
            });
        }).then(function (res) {
            let ans;
            botui.action.hide();
            if (res.value === 'fukuoka') {
                ans = '福岡県のお城は、福岡城、大野城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'saga') {
                ans = '佐賀県のお城は、名護屋城、吉野ヶ里、佐賀城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'nagasaki') {
                ans = '長崎県のお城は、平戸城、島原城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'kumamoto') {
                ans = '熊本県のお城は、熊本城、人吉城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'oita') {
                ans = '大分県のお城は、大分府内城、岡城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'miyazaki') {
                ans = '宮崎県のお城は、飫肥城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'kagoshima') {
                ans = '鹿児島県のお城は、鹿児島城がありますよ。ぜひ行ってみてくださいね。'
            } else if (res.value === 'okinawa') {
                ans = '沖縄県のお城は、今帰仁城、中城城、首里城がありますよ。ぜひ行ってみてくださいね。'
            }

            return botui.message.add({
                type: 'html',
                delay: 1000,
                loading: true,
                content: ans
            });
        }).then(askEnd);
    }

    // 質問終了するか聞く関数．
    function askEnd() {
        botui.message.add({
            delay: 2000,
            loading: true,
            content: '他に知りたいお城はありますか？'
        }).then(function () {

            // ボタンを提示する．
            return botui.action.button({
                delay: 1500,
                action: [
                    { icon: 'circle-o', text: 'はい', value: true },
                    { icon: 'close', text: 'いいえ', value: false }]
            });
        }).then(function (res) {
            res.value ? showQuestions() : end();
        });
    }

    //終了する関数．
    function end() {
        botui.message.add({
            delay: 1500,
            loading: true,
            content: 'またいつでも話しかけてね。'
        }).then(function () {
            return botui.message.add({
                delay: 1500,
                loading: true,
                content: 'お城めぐりを楽しんでください。'
            });
        }).then(function () {

            // ボタンを提示する．
            return botui.action.button({
                delay: 2000,
                action: [
                    { icon: 'fort-awesome', text: '話しかける', value: true }
                ]
            });
        }).then(function (res) {
            res.value; showQuestions();
        });
    }
});





var firebaseConfig = {

    authDomain: "chat-app05-f38e8.firebaseapp.com",
    projectId: "chat-app05-f38e8",
    storageBucket: "chat-app05-f38e8.appspot.com",
    messagingSenderId: "1069838280228",
    appId: "1:1069838280228:web:825bcdc9aaaf19c7e25ab1"
};
firebase.initializeApp(firebaseConfig);
// 自分のコレクションやりとりすると書く(Firebaseで作ったコレクション名)
const db = firebase.firestore().collection('chat05')

const auth = firebase.auth();


// 日時をいい感じの形式にする関数
function convertFromFirestoreTimestampToDatetime(timestamp) {
    const _d = timestamp ? new Date(timestamp * 1000) : new Date();
    const Y = _d.getFullYear();
    const m = (_d.getMonth() + 1).toString().padStart(2, '0');
    const d = _d.getDate().toString().padStart(2, '0');
    const H = _d.getHours().toString().padStart(2, '0');
    const i = _d.getMinutes().toString().padStart(2, '0');
    const s = _d.getSeconds().toString().padStart(2, '0');
    return `${Y}/${m}/${d} ${H}:${i}:${s}`;
}


//データの送信処理
$('#send').on('click', function () {
    //オブジェクトの中に値を入れる
    const data = {
        name: $('#name').val(),
        text: $('#text').val(),
        comment: $('#comment').val(),
        time: firebase.firestore.FieldValue.serverTimestamp(),
    };
    //オブジェクトを.addする
    db.add(data);
    //送ったら空文字上書きでテキストエリア内を白紙にする
    $('#text').val('');
    $('#comment').val('');
});
//Enterキーを押したら送信
$('#text').on('keydown', function (e) {
    if (e.keyCode === 13) {
        const data = {
            name: $('#name').val(),
            text: $('#text').val(),
            comment: $('#comment').val(),
            time: firebase.firestore.FieldValue.serverTimestamp(),
        };
        db.add(data);
        $('#text').val('');
        $('#comment').val('');
    }
});



//データの受信処理
//オンライン上のデータベースでデータの追加や更新・削除が行われたタイミングで{}内が動く(time順に並び替えできる)
db.orderBy('time', 'asc').onSnapshot(function (querySnapshot) {
    console.log(querySnapshot.docs);


    //扱いにくいデータをオブジェクトにして配列にpushしていく
    const dataArray = [];
    querySnapshot.docs.forEach(function (doc) {
        const data = {
            id: doc.id,
            data: doc.data(),
        };
        dataArray.push(data);
    });
    console.log(dataArray);

    // //配列をタグに入れる
    const tagArray = [];
    dataArray.forEach(function (data) {
        tagArray.push(`
                    <li id="${data.id}">
                        <p class="size_10">${data.data.text}</p>
                        <p class="size_10">${data.data.comment}</p>
                        <p>${data.data.name}</p>
                        <p>${convertFromFirestoreTimestampToDatetime(data.data.time.seconds)}</p>
                    </li>
                `);
    });
    console.log(tagArray)
    $('#output').html(tagArray);
});
