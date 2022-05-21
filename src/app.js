require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const { WebClient } = require('@slack/web-api')
const web = new WebClient(process.env.SLACK_OATH_TOKEN)
const { createEventAdapter } = require('@slack/events-api')
const slackSigningSecret = process.env.SLACK_SIGNING_SECRET
const slackEvents = createEventAdapter(slackSigningSecret)

app.post('/', (req, res) => {
  console.log(res)
  res.status(200).send(req.body.challenge)
})

app.get('/', (req, res) => {
  console.log(res)
  res.send('Slack Wordle Scoreboard app HEY')
})

app.listen(port, () => {
  console.log('Express app is up')
})
