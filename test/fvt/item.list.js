module.exports = {
  'Item List Test' : function (client) {
    require('../../utils/setenv')
    console.log('#### global.doiUrls = ', global.doiUrls)
    client
      .url(global.doiUrls.uiServer || 'http://localhost:3010')
      .waitForElementVisible('body', 5000)
      .assert.title('Microservices Sample')
      .waitForElementVisible('div.item:first-child', 10000)
      .assert.containsText('div.item:first-child',
        'Monitor')
      .end();
  }
}