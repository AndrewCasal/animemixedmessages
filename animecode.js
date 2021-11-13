let char = ['Goku', 'Luffy', 'Naruto', 'Ichigo', 'Eren Jaeger', 'Deku', 'Yusuke', 'Saitama', 'Jotaro Kujo', 'Meliodas'];
let item = ['Dragon Balls', 'Devil Fruit', 'Kunai', 'Substitute Shinigami Badge', 'Omni-Directional Mobility Gear', 'Grenade Bracer', 'Spirit Sword', "Child Emporer's Backpack", 'Star Platinum', 'Spirit Spear Chastiefoil' ];
let power = ['Super Saiyan', 'Haki', 'Biguu Mode', 'Final Hollowification', 'Attack Titan Form', 'One for All', 'Spirit Gun', 'Destroy with One Punch', 'Hamon', 'Sunshine'];
const randNumber = Math.floor(Math.random() * 10);
const randChar = char[randNumber];
const randItem = item[randNumber];
const randPower = power[randNumber];
const ultimateAnimeWarrior = () => {
    console.log(`Your ultimate anime warrier is ${randChar} with the use of ${randItem} and the ability to ${randPower}!`);
}
ultimateAnimeWarrior();
//Currently is only doing the randNumber once so character, item, and power are all in the same index.
//Need to rewrite code so that a random number is run every time variable is called. Maybe let instead of const?