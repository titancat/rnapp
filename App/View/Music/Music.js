import React, { Component } from 'react';
import {
  View,
  Image,
  Text
} from 'react-native';

import Style from './Css';

class Music extends Component {
  render() {
    return (
      
      <View style={Style.container}>
        <View style={Style.cover}>
          <Image 
          style={Style.coverImg}
          source={require('../../Static/cover.png')} 
          resizeMode="repeat"/>
        </View>
        <View style={Style.intro}>
          <Text>歌曲信息</Text>
        </View>
        <View style={Style.story}>
          <Text>三年以前再以前，那会儿我意气风发，豪情壮志，渴望号令天下豪杰，干出一番事业。我如同一个西方记者，无时无刻都想搞个大新闻。但是事与愿违，后来我选择回归了平淡的人生，直到现在我仍会想起我那些拼搏的岁月，不禁唏嘘。对了，忘了说，那会儿，我刚上高二。

人生中总有那么些个高不成低不就的时期，在那个时期我们瞧不起一切比我们弱的东西，张嘴说话都感觉在恭维身边愚蠢的人类，而高二正是这个时期最完美的体现。会写一个小故事的高二学生就觉得自己未来可以当个作家；看了几部电影的高二学生就觉得自己未来一定能是个导演；会说笑话逗女孩子笑的高二学生就觉得自己未来一定是个花花公子。而那会儿的我是一个会写搞笑电影剧本的高二学生，在当时我觉得我的未来，一定……会飞。

我在高二认识的N，我就是在一个觉得自己会飞的时期里喜欢上了她，所以她一定得是个仙女。她以为她接受的是谁的爱！是一个天神的爱啊！《大鱼海棠》里最中二的台词却是我觉得最符合实际的一句话。在那个中二值爆表的时期里，她近乎成为了我生命中类似图腾的一种存在，在我的设定里她必须是属于我的，我会踩着七彩祥云找个机会跟她结婚，然后在众天使的簇拥下走进帐房，站在我俩中间的老和尚会为我俩诵经祈祷，后来我就明白了，天使跟和尚他俩注定就不是一伙的。

她总是给我推荐一些奇奇怪怪的电影和歌，都是我不喜欢的那种，但为了和她有更多话题，我只好拼命地听下去，结果越听越有滋味。我们总一起讨论些莫名其妙的问题，然后相互调侃对方三观不正，可三观不正的我们歪向了一遍，所以我们很合，合得像哥们。

回到那个烂俗的问题，男女之间是否有纯粹的友谊。我非常羡慕身边那些因为女朋友和妈妈同时掉水里而困惑的哥们，因为毕竟他们有个女朋友。而困扰我的问题永远是上一个。

高中三年我没有谈过一场像样的恋爱，甚至可以说没有努力地去追过女孩，但是我却非常努力地追了一个男孩。别误会，是帮她追的。后来他们分手了，再后来她有又了新的男友。这么多年过去，记不住看了她多少次分分合合，而我们的关系似乎还停留在中学时代，在深夜的聊天里开一些常人无法理解的脑洞。

至于我自己呢？直到去年退伍之后，我才交了一个不走心纯走肾的女朋友，连牵手走在路上都会觉得莫名难过。分手时的喜悦嗨过嗑药，人家太宰治先生是非常文艺的人间失格，到我这基本就是粗暴的翻译了一下：我他妈就不配拥有爱情，只配做条单身的狗。

汪汪。

高中时帮N追到的那个男生其实是我的朋友，可和N在一起后他却介意起我这个“媒人”。那时候用手机的高中生还不多，传纸条这种最原始的聊天方式依然流行。于是，自习课上他用纸条大声地呵斥我“你他妈到底想干什么的时候”，我在纸条上写下了一句：我想看着她结婚生子，直到生老病死。现在看来全是病句，但是当时写的我热血沸腾，因为我终于明白我做这些为了什么。

因为我始终爱着N。

前些天N在朋友圈晒了高中的记事本，那一页写着我曾给她下载过的许多电影。看着上面的日期，猛然间察觉我俩已经相识七年。我不知道七年之痒的定义是什么，总之我俩七年互相谁都没痒过，多半是废了。刚认识的时候她还能出现在我的春梦里，和我来个传教士什么的，现如今她要是再出现在我的梦里，她也就只能当个传教士了。

一般那些堂而皇之地跟人家说这件事我不后悔的人，肠子的颜色都偏青，对于N的这件事情上，我整个人都是青色的。我很后悔认识了她，爱上了她。即便如此，我还是会经常想起她，那种不经意，时常让我自己措手不及。

只是因为我还爱着N。

爱其实没那么多种方式，无非就是得到和得不到。我属于得不到那种，而且是从一开始就明白我不可能得到的爱。而我做的这些却都是因为爱。就像那些对游戏喜爱至极的人才说的那句话一样：垃圾游戏毁我人生。恨之切爱之深。

浪费，就是一个消费浪漫的过程。我要享受的是过程，而不是结果上的得失。她知不知道我爱她呢？大概吧。那么其实她爱不爱我呢？也许吧。可这些都不重要。

因为无论过了多久，我都像是那条狗，一条懂得浪费人生的狗。


作者介绍：
萧，一条无聊的编剧狗。

</Text>
        </View>
      </View>
    );
  }
}

module.exports = Music;