const Discord = require("discord-user-bots");
const client = new Discord.Client("token goes here"); // Login with the user token

client.on.ready = function() { // Executes this function when the client is ready
    console.log("Client online!");
};

client.on.presence_update = async function(data) { // Executes this function when any user (member in a server or friend) changes their presence
    if(data.guild_id) return; // If the member was in a server, stop

    // Friend changed their status
    // TODO: If someone updates their status from say online to do not disturb, this is still called, could add some logic for this later

    client.send(
        "1194104977782743052", // Channel to send in
        {
            content: `${data.user.username}(<@${data.user.id}>) just updated their status, they are now ${data.status}`, // Content of the message to send (Optional when sending stickers) (Default null)
            embeds: [], // Embeds to send with your message (Not optional, must be an array, can be unset for default) (Default empty array)
            allowed_mentions: {
                // Allow mentions settings (Not optional, but can be unset for default) (Default all true mentions object)
                allowUsers: true, // Allow message to ping user (Default true)
                allowRoles: true, // Allow message to ping roles (Default true)
                allowEveryone: true, // Allow message to ping @everyone and @here (Default true)
                allowRepliedUser: true, // If the message is a reply, ping the user you are replying to (Default true)
            },
            components: [], // Message components (Not optional, must be an array, can be unset for default) (Default empty array)
            stickers: [], // Stickers to go with your message (Not optional, must be an array, can be unset for default) (Default empty array)
        }
    );
    
};