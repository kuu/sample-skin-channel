# sample-skin-channel

A sample custom skin for emulating V3 player's channel list.
Based on [Ooyala default skin v4.3.3](https://github.com/ooyala/html5-skin)

## Install
```
$ git clone git@github.com:kuu/sample-skin-channel.git
$ cd sample-skin-channel
$ npm install
```

## Configure
```
$ mkdir config
$ touch config/default.json
```
Edit `config/default.json` as follows:
```
{
  "api": {
    "key": {Your Ooyala API Key},
    "secret": {Your Ooyala API Secret}
  }
}
```

## Build and Run
```
$ npm run server
$ npm run build && npm start
```
Your browser automatically starts and opens up http://0.0.0.0:4444
