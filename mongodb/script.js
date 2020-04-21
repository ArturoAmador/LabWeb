use videojuegos;

db.createCollection('consola');
db.createCollection('juego');
db.createCollection('publicaciones');


db.consola.insert({
    '_id':'ps4',
    'nombre':'Playstation 4',
    'imagen':'https://images.pexels.com/photos/2323435/pexels-photo-2323435.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'ficha tecnica':'datos datos ...',
    'lista_de_juesgo':[0,1,2]
})

db.consola.insert({
    '_id':'pc',
    'nombre':'PC',
    'imagen':'url',
    'ficha tecnica':'datos datos ...',
    'lista_de_juesgo':[3,4,5]
})

db.consola.insert({
    '_id':'xboxone',
    'nombre':'Xbox One',
    'imagen':'url',
    'ficha tecnica':'datos datos ...',
    'lista_de_juesgo':[6,7,8]
})

db.consola.insert({
    '_id':'switch',
    'nombre':'Nintendo Switch',
    'imagen':'url',
    'ficha tecnica':'datos datos ...',
    'lista_de_juesgo':[9,10,11]
})

db.juego.insert({
    '_id':0,
    'nombre':'Dragon Ball Kakarot',
    'imagen':'https://depor.com/resizer/g6F6__Zisq-i_8Ll-QkEjXknWTE=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/THZ3HPS7LBHIVOKQL2ZJBKKKRY.jpeg',
    'developer':'Bandai Namco',
    'lanzamiento':'Wed Jan 15 2020 00:00:00 GMT-0600 (CST)',
    'imagenes':['https://compass-ssl.xbox.com/assets/00/56/0056e447-6ab4-41bf-84bd-76256975d64c.jpg?n=Dragonball-Z-Kakarot_GLP-Page-Hero-1084_1920x835_02.jpg','https://media.vandal.net/i/1200x630/3-2020/202031714354_2.jpg','https://www.infobae.com/new-resizer/DIC63t2Ddj2kDCw5SI3J6LPPnws=/750x0/filters:quality(100)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/7CKP3QREWFGH5DO6H7IHXCE2AM.jpg'],
    'links':['https://www.infobae.com/gaming/2020/03/17/dragon-ball-z-kakarot-confirma-detalles-de-su-contenido-adicional/','https://vandal.elespanol.com/noticia/1350732733/db-z-kakarot-agregara-a-super-saiyan-god-goku-y-super-saiyan-vegeta-como-personajes/','https://www.xbox.com/es-MX/games/dragon-ball-z-kakarot']
})

db.juego.insert({
    '_id':1,
    'nombre':'Hitman',
    'imagen':'https://cdn-products.eneba.com/resized-products/msMygvW_390x400_1x-0.jpg',
    'developer':'Squere Enix',
    'lanzamiento':'Wed Jan 15 20 00:00:00 GMT-0600 (CST)',
    'imagenes':['https://s3.us-east-2.amazonaws.com/hitman.com/features/announce-trailer/feature-bg.jpg','https://i.pinimg.com/originals/55/a2/4c/55a24cee41fb385d2746660b56b235d9.jpg','https://psmedia.playstation.com/is/image/psmedia/hitman-listing-thumb-01-ps4-eu-23oct15?$Icon$'],
    'links':['https://www.hitman.com','https://www.playstation.com/es-es/games/hitman-ps4/','https://www.eneba.com/latam/steam-hitman-2-steam-key-global']
})

db.juego.insert({
    '_id':2,
    'nombre':'The last of us',
    'imagen':'https://i.ytimg.com/vi/lzmXbHHefMY/maxresdefault.jpg',
    'developer':'Naughty Dog',
    'lanzamiento':'Sat Jun 14 2020 01:00:00 GMT-0600 (CST)',
    'imagenes':['http://www.gamepur.com/files/imagepicker/6/the-last-of-us-wallpaper-4.jpg','https://i.ytimg.com/vi/kBZohekWdVk/maxresdefault.jpg','https://i.ytimg.com/vi/4V7nFk6_0Qw/maxresdefault.jpg'],
    'links':['https://thelastofus.fandom.com/es/wiki/The_Last_of_Us','https://vandal.elespanol.com/fecha-lanzamiento/ps4/the-last-of-us-part-ii/44223#p-73','https://www.playstation.com/en-us/games/the-last-of-us-remastered-ps4/']
})

db.juego.insert({
    '_id':3,
    'nombre':'Halo MCC',
    'imagen':'https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2014/10/halo_mcc_hero.jpg?itok=vN6EcaTY',
    'developer':'343 industries',
    'lanzamiento':'Fri Nov 14 2020 01:00:00 GMT-0600 (CST)',
    'imagenes':['https://i.ytimg.com/vi/lphGmy2WIS8/maxresdefault.jpg','https://i.ytimg.com/vi/88VBun17AMI/maxresdefault.jpg','https://content.halocdn.com/media/Default/community/MCC/mcc_snowhd-5851298299874411a967a677aa960f51.jpg'],
    'links':['https://www.xbox.com/es-MX/games/halo-the-master-chief-collection-pc','https://generacionxbox.com/halo-mcc-no-crossplay/','https://support.halowaypoint.com/hc/en-us/articles/360039997432-Halo-The-Master-Chief-Collection-Known-Issues']
})

db.juego.insert({
    '_id':4,
    'nombre':'Gears of War 5',
    'imagen':'https://cdn.mos.cms.futurecdn.net/4RJHfCG3hJE7MpHc7oKs5C-1200-80.jpg',
    'developer':'The coalition',
    'lanzamiento':'Fri Nov 14 2020 01:00:00 GMT-0600 (CST)',
    'imagenes':['https://y4j7y8s9.ssl.hwcdn.net/wp-content/uploads/2019/04/gears5-Microsoftt.png','http://ksassets.timeincuk.net/wp/uploads/sites/54/2018/06/Gears-5_Kait-Hero.jpg','https://i.ytimg.com/vi/xENz79ILME8/hqdefault.jpg'],
    'links':['https://www.xbox.com/es-ES/games/gears-5','https://store.steampowered.com/app/1097840/Gears_5/','https://gearsofwar.fandom.com/wiki/Gears_5']
})

db.juego.insert({
    '_id':5,
    'nombre':'Sea of Thieves',
    'imagen':'https://i.ytimg.com/vi/xcaGxxImVc0/maxresdefault.jpg',
    'developer':'Rare',
    'lanzamiento':'Fri Nov 14 2020 01:00:00 GMT-0600 (CST)',
    'imagenes':['https://cdn.vox-cdn.com/thumbor/fEGZa8AG1Ssp2YmYJWGPpulvRkg=/0x0:3840x2160/1200x800/filters:focal(867x612:1481x1226)/cdn.vox-cdn.com/uploads/chorus_image/image/58465829/shared_world.1516984653.png','http://media1.gameinformer.com/imagefeed/screenshots/SeaofThieves/high_seas_sunrise.jpg','https://i.ytimg.com/vi/QntMfX3FkZQ/maxresdefault.jpg'],
    'links':['https://www.xbox.com/es-MX/games/halo-the-master-chief-collection-pc','https://generacionxbox.com/halo-mcc-no-crossplay/','https://support.halowaypoint.com/hc/en-us/articles/360039997432-Halo-The-Master-Chief-Collection-Known-Issues']
})


db.juego.insert({
    '_id':6,
    'nombre':'Age of Empires',
    'imagen':'https://i.ytimg.com/vi/AyglssndhXg/maxresdefault.jpg',
    'developer':'Ensemble Studios',
    'lanzamiento':'Fri Nov 14 2020 01:00:00 GMT-0600 (CST)',
    'imagenes':['https://i.ytimg.com/vi/lDPQcWxbaD8/maxresdefault.jpg','https://i.ytimg.com/vi/QCEU-vba8mw/maxresdefault.jpg','http://2.bp.blogspot.com/-bLJf1aF5X-w/UBKQf_hJDxI/AAAAAAAAAk8/InyvSJfbQF0/s1600/Age_Of_Empires_Rise_of_Rome_Expansio.png'],
    'links':['https://store.steampowered.com/app/1017900/Age_of_Empires_Definitive_Edition/','https://www.ageofempires.com','https://www.ageofempires.com']
});

db.juego.insert({
    '_id':7,
    'nombre':'Half Life',
    'imagen':'https://s.videogamer.com/meta/4d5f/e52421b8-228a-43a8-a428-eb22bfa08822_Half-Life.jpg',
    'developer':'Valve',
    'lanzamiento':'Fri Nov 14 2020 01:00:00 GMT-0600 (CST)',
    'imagenes':['https://duckduckgo.com/?q=half+life&t=opera&iax=images&ia=images&iai=https%3A%2F%2Fstatic.gamespot.com%2Fuploads%2Fscreen_medium%2F1574%2F15746725%2F3427379-nostalgiatrip_halflife_20180817_site.jpg','https://vignette4.wikia.nocookie.net/half-life/images/1/1d/HL_Source_header.jpg/revision/latest?cb=20091020211936&path-prefix=en','http://i.ytimg.com/vi/CUtBhF-6RKs/maxresdefault.jpg'],
    'links':['https://store.steampowered.com/app/70/HalfLife/','https://www.half-life.com/en/home','https://latam.ign.com/half-life-alyx/65049/news/half-life-alyx-esto-es-lo-que-necesita-tu-pc-para-jugarlo']
})

db.juego.insert({
    '_id':8,
    'nombre':'Undertale',
    'imagen':'https://i.ytimg.com/vi/Aeiblw8a3vM/maxresdefault.jpg',
    'developer':'Toby Fox con',
    'lanzamiento':'Fri Nov 14 2020 01:00:00 GMT-0600 (CST)',
    'imagenes':['https://i.ytimg.com/vi/rmgXrvep8WE/maxresdefault.jpg','https://i.ytimg.com/vi/-wORwC0e8zE/hqdefault.jpg','https://i.ytimg.com/vi/uK8CGBza5Co/maxresdefault.jpg'],
    'links':['https://store.steampowered.com/app/391540/Undertale/','https://www.minijuegos.com/juego/undertale','https://undertale.com']
})

//Nintendo

db.juego.insert({
    '_id':9,
    'nombre':'Splatoon 2',
    'imagen':'https://i.ytimg.com/vi/Ai0UzACRIDg/maxresdefault.jpg',
    'developer':'Nintendo',
    'lanzamiento':'Fri Nov 14 2020 01:00:00 GMT-0600 (CST)',
    'imagenes':['https://i.ytimg.com/vi/yBGwc0tq-Fw/maxresdefault.jpg','https://i.ytimg.com/vi/cWbo__fkCII/maxresdefault.jpg','https://i.ytimg.com/vi/8L54s2m1dPs/maxresdefault.jpg'],
    'links':['https://splatoon.nintendo.com/es/','https://splatoon.fandom.com/es/wiki/Splatoon_2','https://www.nintendo.com/games/detail/splatoon-2-switch/']
})

db.juego.insert({
    '_id':10,
    'nombre':'The Legend of Zelda: Breath of the Wild',
    'imagen':'http://cdn.wccftech.com/wp-content/uploads/2017/01/Zelda-Breath-of-the-Wild-screenshots6.jpg',
    'developer':'Nintendo',
    'lanzamiento':'Fri Nov 14 2020 01:00:00 GMT-0600 (CST)',
    'imagenes':['https://i.ytimg.com/vi/pIkiCKHgRlU/maxresdefault.jpg','https://assets.vg247.com/current/2016/06/the_legend_of_zelda_breath_of_the_wild.jpg','http://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild.jpg'],
    'links':['https://www.zelda.com/breath-of-the-wild/','https://es.wikipedia.org/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild','https://www.zeldadungeon.net/breath-of-the-wild-walkthrough/']
})

db.juego.insert({
    '_id':11,
    'nombre':'Super Mario Odyssey',
    'imagen':'https://static1.gamespot.com/uploads/scale_medium/1197/11970954/3181387-ig-supermariogalaxy-20170113.jpg',
    'developer':'Nintendo',
    'lanzamiento':'Fri Nov 14 2020 01:00:00 GMT-0600 (CST)',
    'imagenes':['https://cdn02.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_5/SQ_NSwitch_SuperMarioOdyssey.jpg','https://upload.wikimedia.org/wikipedia/it/8/8d/Super_Mario_Odyssey.jpg','https://i.ytimg.com/vi/tWe6JpGj7mE/maxresdefault.jpg'],
    'links':['https://vandal.elespanol.com/guias/guia-super-mario-odyssey-trucos-y-consejos','https://es.wikipedia.org/wiki/Super_Mario_Odyssey','https://es.wikipedia.org/wiki/Super_Mario_Odyssey']
})



db.blog.insert({
    'nombre':'Usuario',
    'fecha':'Wed Jan 15 2020 00:00:00 GMT-0600 (CST)',
    'contenido':'Lorem ipsum dolorus...'
});

// querys
db.consola.find({"_id":/ps4/i}).pretty();


db.consola.find({"nombre":/play/i}).pretty();


let games = [];
db.consola.find({"_id":"ps4"}).forEach((consolaID) => {
    //print(tojson(consolaID));
    consolaID.lista_de_juesgo.forEach((gameID) => {
        games.push(gameID)

    });
});

db.juego.find({"_id":{ $in : games }}, {"nombre":1,"_id":0,"imagen":1}).pretty();
games = [];


db.juego.find({"nombre":/spla/i},{"nombre":1,"_id":0,"imagen":1}).pretty();

db.juego.find({"_id":3}).pretty();


db.publicaciones.find().pretty();
