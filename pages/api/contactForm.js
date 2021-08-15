import Discord from 'discord.js';
let client = new Discord.Client({intents: []});
export default async function handler(req, res) {
    await client.login(process.env.DISCORD_TOKEN);
    await forReady();

    let user = await client.users.fetch('272115412353679363');

    let fields = Object.keys(req.body).map(key => ({
        name: key.toUpperCase(),
        value: req.body[key]
    }))
    await user.send({embeds: [
            {
                "description": "We have a new message!",
                "color": 4310753,
                "timestamp": new Date().toISOString(),
                "footer": {
                    "icon_url": "https://samyok.us/favicon.ico",
                    "text": "samyok.us"
                },
                "fields": fields
            }
        ]})
    res.json({success: true, body: req.body});
}
function forReady(){
    return new Promise(r => client.on('ready', r));
}
