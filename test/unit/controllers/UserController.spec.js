describe('about User Controller operation.', function() {

  it('test api should success.', async (done) => {
    try {
      const res = await request(sails.hooks.http.app)
        .get(`/api/test`);
      res.body.should.be.Object;
      done();
    } catch (e) {
      done(e);
    }
  });
  it('create User should success.', async (done) => {
    const createThisUser = {
      username: 'xxxx',
      password: '0000',
    };
    try {
      const res = await request(sails.hooks.http.app)
      .post(`/user`)
      .send(createThisUser);
      sails.log.info('create user controller spec =>', res.body);
      res.body.should.be.Object;
      res.body.data.email.should.be.equal(createThisUser.email);
      res.body.data.locale.should.be.equal('zh_TW');
      done();
    } catch (e) {
      done(e);
    }
  });
  
});
