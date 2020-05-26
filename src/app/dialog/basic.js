const sess = require("store2");

const text = require('../template/text');

const flex = require('../template/flex');

module.exports = {
    getStatus(userId) {
        return sess.get(userId);
    },
    mainFlow(client, userId, replyToken, message) {
        let current = sess.get(userId);
        switch (current) {
            case null:
                sess.set(userId, "start", true)
                return client.replyMessage(replyToken, text.greeting) && client.replyMessage(replyToken, flex.greeting)
            case "start":
                sess.set(userId, "finish_register", true)
                console.log("Namanya : " + message)
                return client.replyMessage(client.replyMessage(replyToken, text.finishRegister))
        }
    },
    linkRichMenu(client, userId, richMenuId) {
        sess.get(userId, this.getStatus(userId), true)
        return client.linkRichMenuToUser(userId, richMenuId);
    }

}