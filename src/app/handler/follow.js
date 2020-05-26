const util = require('util');

function handle(client, event) {
    let userId = event.source.userId;
    client.getProfile(userId).then(
        (profile) => {
            let name = profile.displayName
            let message = util.format("Halo %s, perkenalkan aku Reco sebagai asisten investasi saham kakak ^^ ada yang bisa Reco bantu ? ", name)
            let textMessage = {
                type: "text",
                text: message
            }
            return client.replyMessage(event.replyToken, textMessage)
        }
    )
}

module.exports = handle;