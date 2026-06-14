source .env
# simple-discord-link stuff
sdlinkConfig="config/simple-discord-link/simple-discord-link.toml"
webhook_url_escaped=$(printf '%s\n' "$webhook_url" | sed -e 's/[\/&|]/\\&/g')
bot_token_escaped=$(printf '%s\n' "$bot_token" | sed -e 's/[\/&|]/\\&/g')
client_id_escaped=$(printf '%s\n' "$client_id" | sed -e 's/[\/&|]/\\&/g')
client_secret_escaped=$(printf '%s\n' "$client_secret" | sed -e 's/[\/&|]/\\&/g')

if [ -f "$sdlinkConfig" ]; then
  sed -i "s|REPLACE_WEBHOOK_URL|$webhook_url_escaped|g" "$sdlinkConfig"
  sed -i "s|REPLACE_BOT_TOKEN|$bot_token_escaped|g" "$sdlinkConfig"
fi

# neoessentials stuff
neoessentialsConfig="config/neoessentials/config.json"
neoessentialsDiscordConfig="config/neoessentials/discord_auth.json"

if [ -f "$neoessentialsDiscordConfig" ]; then
  sed -i "s|REPLACE_CLIENT_ID|$client_id_escaped|g" "$neoessentialsDiscordConfig"
  sed -i "s|REPLACE_CLIENT_SECRET|$client_secret_escaped|g" "$neoessentialsDiscordConfig"
fi
