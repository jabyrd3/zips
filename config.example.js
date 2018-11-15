module.exports = {
      name: 'zips',
      hostname: 'foobarbimmer.com',
      port: 8500,
      protocol: 'http:',
      address: 'foobarbimmer.com',
      check: {
        checkurl: 'https://foobarbimmer.com/zips',
        interval: '5s'
      }
}
